/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        // Gradient animations
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'gradient-pulse': 'gradientPulse 4s ease-in-out infinite',
        'float-glow': 'floatGlow 6s ease-in-out infinite',
        'float-glow-reverse': 'floatGlow 8s ease-in-out infinite reverse',
        'float-glow-slow': 'floatGlow 10s ease-in-out infinite',
        'light-sweep': 'lightSweep 3s ease-in-out infinite',
        
        // Particle animations
        'particle-float': 'particleFloat 20s linear infinite',
        'particle-drift': 'particleDrift 25s linear infinite',
        
        // Wave animations
        'wave-flow': 'waveFlow 8s ease-in-out infinite',
        'wave-flow-reverse': 'waveFlow 10s ease-in-out infinite reverse',
        'blob-morph': 'blobMorph 6s ease-in-out infinite',
        'blob-morph-reverse': 'blobMorph 8s ease-in-out infinite reverse',
        
        // Cyberpunk animations
        'matrix-rain': 'matrixRain 8s linear infinite',
        'hologram-sweep': 'hologramSweep 4s ease-in-out infinite',
        
        // Cloud animations
        'cloud-drift': 'cloudDrift 30s linear infinite',
        'atmospheric-glow': 'atmosphericGlow 6s ease-in-out infinite',
        'light-ray': 'lightRay 4s ease-in-out infinite',
        'light-ray-delayed': 'lightRay 4s ease-in-out infinite 2s',
        
        // Modern enhanced animations
        'light-sweep-reverse': 'lightSweep 4s ease-in-out infinite reverse',
        'aurora-wave': 'auroraWave 8s ease-in-out infinite',
        'aurora-wave-reverse': 'auroraWave 12s ease-in-out infinite reverse',
        'aurora-shimmer': 'auroraShimmer 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'crystal-float': 'crystalFloat 10s ease-in-out infinite',
        'crystal-beam': 'crystalBeam 5s ease-in-out infinite',
        'crystal-beam-reverse': 'crystalBeam 7s ease-in-out infinite reverse',
        'plasma-morph': 'plasmaMorph 8s ease-in-out infinite',
        'plasma-morph-reverse': 'plasmaMorph 10s ease-in-out infinite reverse',
        'plasma-pulse': 'plasmaPulse 4s ease-in-out infinite',
        'plasma-drift': 'plasmaDrift 12s ease-in-out infinite',
        'plasma-lightning': 'plasmaLightning 2s ease-in-out infinite',
        'neural-pulse': 'neuralPulse 3s ease-in-out infinite',
        'neural-flow': 'neuralFlow 5s ease-in-out infinite',
        'data-flow': 'dataFlow 6s linear infinite',
        'wave-flow-slow': 'waveFlow 12s ease-in-out infinite',
        'hologram-sweep-reverse': 'hologramSweep 6s ease-in-out infinite reverse',
        
        // Firefly animations
        'firefly-blink': 'fireflyBlink 3s ease-in-out infinite',
        'magical-glow': 'magicalGlow 5s ease-in-out infinite',
        
        // Geometric animations
        'geometric-float': 'geometricFloat 12s ease-in-out infinite',
        'triangle-spin': 'triangleSpin 10s linear infinite',
        
        // Neumorphic animations
        'neumorphic-float': 'neumorphicFloat 8s ease-in-out infinite',
        'light-shift': 'lightShift 6s ease-in-out infinite',
      },
      keyframes: {
        // Gradient keyframes
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        floatGlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
          '33%': { transform: 'translateY(-30px) translateX(20px) scale(1.1)' },
          '66%': { transform: 'translateY(20px) translateX(-20px) scale(0.9)' },
        },
        lightSweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        
        // Particle keyframes
        particleFloat: {
          '0%': { transform: 'translateY(100vh) translateX(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(100px)', opacity: '0' },
        },
        particleDrift: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-50px) translateX(30px)' },
          '50%': { transform: 'translateY(0px) translateX(60px)' },
          '75%': { transform: 'translateY(50px) translateX(30px)' },
        },
        
        // Wave keyframes
        waveFlow: {
          '0%, 100%': { d: 'M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z' },
          '50%': { d: 'M0,400 Q300,600 600,400 T1200,400 L1200,800 L0,800 Z' },
        },
        blobMorph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        
        // Cyberpunk keyframes
        matrixRain: {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        hologramSweep: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(100%) skewX(-15deg)' },
        },
        
        // Cloud keyframes
        cloudDrift: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(calc(100vw + 100px))' },
        },
        atmosphericGlow: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.4' },
        },
        lightRay: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(1)' },
          '50%': { opacity: '0.6', transform: 'scaleY(1.2)' },
        },
        
        // Modern enhanced keyframes
        auroraWave: {
          '0%, 100%': { transform: 'translateX(-50%) scaleY(1) rotate(0deg)', opacity: '0.6' },
          '33%': { transform: 'translateX(-30%) scaleY(1.2) rotate(2deg)', opacity: '0.8' },
          '66%': { transform: 'translateX(-70%) scaleY(0.8) rotate(-2deg)', opacity: '0.7' },
        },
        auroraShimmer: {
          '0%, 100%': { opacity: '0.4', transform: 'scaleX(1)' },
          '50%': { opacity: '0.8', transform: 'scaleX(1.1)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        crystalFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
          '33%': { transform: 'translateY(-20px) rotate(120deg) scale(1.1)' },
          '66%': { transform: 'translateY(10px) rotate(240deg) scale(0.9)' },
        },
        crystalBeam: {
          '0%': { transform: 'translateX(-100%) scaleY(0.5)', opacity: '0' },
          '50%': { transform: 'translateX(0%) scaleY(1)', opacity: '1' },
          '100%': { transform: 'translateX(100%) scaleY(0.5)', opacity: '0' },
        },
        plasmaMorph: {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'rotate(0deg) scale(1)'
          },
          '25%': { 
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
            transform: 'rotate(90deg) scale(1.1)'
          },
          '50%': { 
            borderRadius: '70% 30% 40% 60% / 40% 70% 60% 30%',
            transform: 'rotate(180deg) scale(0.9)'
          },
          '75%': { 
            borderRadius: '40% 70% 60% 30% / 70% 40% 30% 60%',
            transform: 'rotate(270deg) scale(1.05)'
          },
        },
        plasmaPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.3)', opacity: '1' },
        },
        plasmaDrift: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '25%': { transform: 'translate(50px, -30px) rotate(90deg)' },
          '50%': { transform: 'translate(-30px, 50px) rotate(180deg)' },
          '75%': { transform: 'translate(-50px, -20px) rotate(270deg)' },
        },
        plasmaLightning: {
          '0%, 90%, 100%': { opacity: '0' },
          '5%, 85%': { opacity: '1' },
        },
        neuralPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.5)' },
        },
        neuralFlow: {
          '0%': { strokeDasharray: '0 100', opacity: '0' },
          '50%': { strokeDasharray: '50 50', opacity: '1' },
          '100%': { strokeDasharray: '100 0', opacity: '0' },
        },
        dataFlow: {
          '0%': { transform: 'translateX(-100vw) translateY(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw) translateY(-50px)', opacity: '0' },
        },
        
        // Firefly keyframes
        fireflyBlink: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        magicalGlow: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' },
        },
        
        // Geometric keyframes
        geometricFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(120deg)' },
          '66%': { transform: 'translateY(20px) rotate(240deg)' },
        },
        triangleSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        
        // Neumorphic keyframes
        neumorphicFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        lightShift: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.4' },
        },
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
    },
  },
  plugins: [],
};
