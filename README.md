# AI Image Generator

A modern, beautiful AI image generator built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Real AI image generation from text prompts
- 🌈 8 different animated backgrounds that auto-cycle
- 📱 Fully responsive design
- 💾 Download generated images
- 📚 Image history with gallery view
- ⚡ Fast and optimized performance

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure AI Service
Copy the example environment file:
```bash
cp .env.example .env
```

Then add your API key for one of these services:

#### Option A: Hugging Face (Recommended - Free tier available)
1. Go to [Hugging Face](https://huggingface.co/)
2. Create an account and get your API token
3. Add to `.env`: `VITE_HUGGINGFACE_API_KEY=your_token_here`

#### Option B: OpenAI DALL-E 3 (Paid)
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create an API key
3. Add to `.env`: `VITE_OPENAI_API_KEY=your_key_here`

#### Option C: Stability AI (Paid)
1. Go to [Stability AI](https://platform.stability.ai/)
2. Create an API key
3. Add to `.env`: `VITE_STABILITY_API_KEY=your_key_here`

### 3. Run the Application
```bash
npm run dev
```

## How It Works

The app uses a fallback system for image generation:
1. **Primary**: Hugging Face Inference API (free tier available)
2. **Fallback**: Pollinations AI (free, no API key needed)
3. **Final Fallback**: Placeholder images

## Supported AI Models

- Stable Diffusion XL
- DALL-E 3
- And many more through Hugging Face

## Usage

1. Enter a descriptive prompt (e.g., "A magical forest with glowing mushrooms")
2. Click "Generate Image"
3. Wait for the AI to create your image
4. Download or view in the history gallery

## Background Animations

The app features 8 different animated backgrounds:
- Gradient animations with glowing orbs
- Particle systems with cyberpunk effects
- Flowing wave animations
- Matrix-style digital rain
- Peaceful cloud animations
- Magical firefly effects
- 3D geometric shapes
- Neumorphic soft designs

Backgrounds automatically cycle every 30 seconds for a dynamic experience.