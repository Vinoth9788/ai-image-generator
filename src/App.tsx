import React, { useState } from 'react';
import { Download, Image, Sparkles, RefreshCw, Clock, Trash2 } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import { generateAIImage } from './services/imageGeneration';

interface GeneratedImage {
  id: string;
  prompt: string;
  url: string;
  timestamp: Date;
}


function App() {
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('cartoon, anime, illustration, drawing, painting, artwork, sketch, rendered, fake, unrealistic, low quality, blurry');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GeneratedImage | null>(null);

  const suggestions = [
    "A portrait of a woman with flowing hair",
    "A landscape view of serene mountains at sunset",
    "Portrait of a futuristic cyberpunk character",
    "Panoramic landscape of a mystical forest",
    "Close-up portrait of a steampunk inventor",
    "Wide landscape of ocean waves under starry sky"
  ];

  const generateImage = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    
    try {
      // Generate image using AI service
      const imageUrl = await generateAIImage(prompt.trim(), { negativePrompt: negativePrompt.trim() });
      
      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        prompt: prompt.trim(),
        url: imageUrl,
        timestamp: new Date()
      };

      setGeneratedImages(prev => [newImage, ...prev]);
      setSelectedImage(newImage);
      setPrompt('');
    } catch (error) {
      console.error('Failed to generate image:', error);
      // You could add error state handling here
      alert('Failed to generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = async (image: GeneratedImage) => {
    try {
      const response = await fetch(image.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `generated-image-${image.id}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const clearHistory = () => {
    setGeneratedImages([]);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground type="gradient" />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="p-6 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Image Generator
            </h1>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Transform your ideas into stunning visuals with AI-powered image generation
          </p>
        </header>

        <div className="container mx-auto px-6 pb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Input Section */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  {/* Prompt Input */}
                  <div>
                    <label htmlFor="prompt" className="block text-white font-semibold mb-3 text-lg">
                      Describe your vision
                    </label>
                    <div className="mb-2 text-sm text-slate-300">
                      💡 <strong>Tip:</strong> Use "portrait" for vertical images, "landscape" for horizontal images
                    </div>
                    <div className="relative">
                      <textarea
                        id="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="A portrait of a person in a magical forest, or a landscape view of mountains at sunset..."
                        className="w-full p-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none backdrop-blur-sm transition-all duration-300"
                        
                        
                      />
                      <div className="absolute bottom-3 right-3 text-slate-400 text-sm">
                        
                      </div>
                    </div>
                  </div>

                  {/* Advanced Options Toggle */}
                  <div>
                    <button
                      onClick={() => setShowAdvanced(!showAdvanced)}
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
                    >
                      <span className="text-sm font-medium">Advanced Options</span>
                      <div className={`transform transition-transform duration-300 ${showAdvanced ? 'rotate-180' : ''}`}>
                        ▼
                      </div>
                    </button>
                  </div>

                  {/* Advanced Options Panel */}
                  {showAdvanced && (
                    <div className="space-y-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                      <div>
                        <label htmlFor="negativePrompt" className="block text-white/90 font-medium mb-2">
                          Negative Prompt (What to avoid)
                        </label>
                        <div className="relative">
                          <textarea
                            id="negativePrompt"
                            value={negativePrompt}
                            onChange={(e) => setNegativePrompt(e.target.value)}
                            placeholder="cartoon, anime, illustration, drawing..."
                            className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none backdrop-blur-sm transition-all duration-300 text-sm"
                            rows={3}
                            maxLength={300}
                          />
                          <div className="absolute bottom-2 right-2 text-slate-400 text-xs">
                            {negativePrompt.length}/300
                          </div>
                        </div>
                        <p className="text-slate-400 text-xs mt-1">
                          Helps ensure realistic, high-quality results by avoiding unwanted styles
                        </p>
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => setNegativePrompt('cartoon, anime, illustration, drawing, painting, artwork, sketch, rendered, fake, unrealistic, low quality, blurry')}
                          className="px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-xs text-blue-200 hover:text-blue-100 transition-all duration-300"
                        >
                          Realistic
                        </button>
                        <button
                          onClick={() => setNegativePrompt('low quality, blurry, distorted, deformed, ugly, bad anatomy, extra limbs')}
                          className="px-3 py-1 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg text-xs text-green-200 hover:text-green-100 transition-all duration-300"
                        >
                          High Quality
                        </button>
                        <button
                          onClick={() => setNegativePrompt('')}
                          className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-xs text-red-200 hover:text-red-100 transition-all duration-300"
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                  )}
                  {/* Suggestions */}
                  <div>
                    <p className="text-white/80 mb-3 font-medium">Quick prompts:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => setPrompt(suggestion)}
                          className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm text-white/90 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Generate Button */}
                  <button
                    onClick={generateImage}
                    disabled={!prompt.trim() || isGenerating}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg shadow-2xl"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-6 h-6 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Image className="w-6 h-6" />
                        Generate Image
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Generated Image Display */}
              {selectedImage && (
                <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Latest Creation</h3>
                    <button
                      onClick={() => downloadImage(selectedImage)}
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition-colors duration-300"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                  <div className="relative group">
                    <img
                      src={selectedImage.url}
                      alt={selectedImage.prompt}
                      className="w-full h-full object-cover rounded-2xl shadow-2xl group-hover:shadow-purple-500/20 transition-shadow duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-medium">{selectedImage.prompt}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* History Sidebar */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 h-fit">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  History
                </h2>
                {generatedImages.length > 0 && (
                  <button
                    onClick={clearHistory}
                    className="text-red-400 hover:text-red-300 p-2 hover:bg-red-500/20 rounded-lg transition-colors duration-300"
                    title="Clear history"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {generatedImages.length === 0 ? (
                <p className="text-slate-400 text-center py-8">
                  Your generated images will appear here
                </p>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                  {generatedImages.map((image) => (
                    <div
                      key={image.id}
                      className={`relative group cursor-pointer transition-all duration-300 ${
                        selectedImage?.id === image.id ? 'ring-2 ring-purple-500' : ''
                      }`}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image.url}
                        alt={image.prompt}
                        className="w-full h-24 object-cover rounded-xl group-hover:opacity-80 transition-opacity duration-300"
                      />
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            downloadImage(image);
                          }}
                          className="bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-lg transition-colors duration-300"
                        >
                          <Download className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="mt-2">
                        <p className="text-white text-sm font-medium truncate">
                          {image.prompt}
                        </p>
                        <p className="text-slate-400 text-xs">
                          {image.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isGenerating && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 mx-auto mb-4 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
            <h3 className="text-white text-xl font-bold mb-2">Creating your masterpiece</h3>
            <p className="text-slate-400">This may take a moment...</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.7);
        }
      `}</style>
    </div>
  );
}

export default App;
