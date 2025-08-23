// AI Image Generation Service
// This service handles communication with AI image generation APIs

interface ImageGenerationOptions {
  width?: number;
  height?: number;
  steps?: number;
  guidance_scale?: number;
  model?: string;
  negativePrompt?: string;
}
interface StabilityAITextPrompt {
  text: string;
  weight?: number;
}

// Function to detect orientation from prompt text
function detectOrientationFromPrompt(prompt: string): { width: number; height: number } {
  const lowerPrompt = prompt.toLowerCase();
  
  // Portrait keywords
  const portraitKeywords = [
    'portrait', 'headshot', 'face', 'person', 'selfie', 'profile',
    'standing person', 'full body', 'character', 'model', 'actor',
    'vertical', 'tall', 'tower', 'skyscraper', 'tree', 'waterfall'
  ];
  
  // Landscape keywords
  const landscapeKeywords = [
    'landscape', 'scenery', 'panorama', 'horizon', 'vista', 'cityscape',
    'seascape', 'mountain range', 'beach', 'sunset', 'sunrise', 'skyline',
    'horizontal', 'wide', 'panoramic', 'valley', 'field', 'ocean view'
  ];
  
  // Check for portrait keywords
  const hasPortraitKeyword = portraitKeywords.some(keyword => 
    lowerPrompt.includes(keyword)
  );
  
  // Check for landscape keywords
  const hasLandscapeKeyword = landscapeKeywords.some(keyword => 
    lowerPrompt.includes(keyword)
  );
  
  // Determine dimensions based on keywords
  if (hasPortraitKeyword && !hasLandscapeKeyword) {
    return { width: 768, height: 1024 }; // Portrait (3:4 ratio)
  } else if (hasLandscapeKeyword && !hasPortraitKeyword) {
    return { width: 1024, height: 768 }; // Landscape (4:3 ratio)
  } else {
    return { width: 1024, height: 1024 }; // Square (default)
  }
}

// Primary function that tries multiple services with proper error handling
export async function generateAIImage(
  prompt: string, 
  options: ImageGenerationOptions = {}
): Promise<string> {
  // Auto-detect dimensions from prompt if not specified
  const detectedDimensions = detectOrientationFromPrompt(prompt);
  
  const {
    width = detectedDimensions.width,
    height = detectedDimensions.height,
    steps = 20,
    guidance_scale = 7.5,
    model = "stabilityai/stable-diffusion-xl-base-1.0",
    negativePrompt = ""
  } = options;

  // Try Pollinations AI first (free, no API key required)
  try {
    // Build the full prompt with negative prompt if provided
    const fullPrompt = negativePrompt 
      ? `${prompt} | negative: ${negativePrompt}`
      : prompt;
    
    const pollinationsUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(fullPrompt)}?width=${width}&height=${height}&seed=${Math.floor(Math.random() * 1000000)}&nologo=true&enhance=true`;
    
    // Create a promise that resolves when image loads or rejects on timeout
    return await new Promise((resolve, reject) => {
      const img = new Image();
      const timeout = setTimeout(() => {
        reject(new Error('Image generation timeout'));
      }, 30000); // 30 second timeout
      
      img.onload = () => {
        clearTimeout(timeout);
        resolve(pollinationsUrl);
      };
      
      img.onerror = () => {
        clearTimeout(timeout);
        reject(new Error('Image failed to load'));
      };
      
      img.src = pollinationsUrl;
    });
    
  } catch (error) {
    console.error('Pollinations AI failed, trying Hugging Face...', error);
    
    // Try Hugging Face if API key is available
    const hfApiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;
    if (hfApiKey && hfApiKey !== 'your_huggingface_api_key_here') {
      try {
        const response = await fetch(
          `https://api-inference.huggingface.co/models/${model}`,
          {
            headers: {
              'Authorization': `Bearer ${hfApiKey}`,
              'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
              inputs: prompt,
              parameters: {
               negative_prompt: negativePrompt,
                width,
                height,
                num_inference_steps: steps,
                guidance_scale,
              },
            }),
          }
        );

        if (response.ok) {
          const blob = await response.blob();
          return URL.createObjectURL(blob);
        }
      } catch (hfError) {
        console.error('Hugging Face API failed:', hfError);
      }
    }
    
    // Final fallback: Use a more relevant placeholder service
    console.log('Using fallback placeholder service...');
    return `https://picsum.photos/${width}/${height}?random=${Date.now()}&blur=1`;
  }
}

// Alternative: OpenAI DALL-E 3 implementation
export async function generateImageWithDALLE(prompt: string, negativePrompt?: string): Promise<string> {
  try {
    // DALL-E 3 doesn't support negative prompts directly, so we modify the main prompt
    const enhancedPrompt = negativePrompt 
      ? `${prompt}. Make it photorealistic and avoid: ${negativePrompt}`
      : `${prompt}. Make it photorealistic and high quality`;

    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: enhancedPrompt,
        n: 1,
        size: "1024x1024",
        quality: "standard",
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.data[0].url;
  } catch (error) {
    console.error('OpenAI DALL-E API failed:', error);
    throw error;
  }
}

// Alternative: Stability AI implementation
export async function generateImageWithStabilityAI(prompt: string, negativePrompt?: string): Promise<string> {
  try {
    const textPrompts: StabilityAITextPrompt[] = [{ text: prompt }];

    if (negativePrompt) {
      textPrompts.push({ text: negativePrompt, weight: -1 });
    }

    const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_STABILITY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text_prompts: textPrompts,
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        steps: 20,
        samples: 1,
      }),
    });

    if (!response.ok) {
      throw new Error(`Stability AI API error: ${response.status}`);
    }

    const data = await response.json();
    const base64Image = data.artifacts[0].base64;
    return `data:image/png;base64,${base64Image}`;
  } catch (error) {
    console.error('Stability AI API failed:', error);
    throw error;
  }
}