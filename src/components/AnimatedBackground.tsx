import React, { useState, useEffect } from 'react';

interface AnimatedBackgroundProps {
  type?: 'gradient' | 'particles' | 'waves' | 'cyberpunk' | 'clouds' | 'fireflies' | 'geometric' | 'neumorphic' | 'aurora' | 'crystal' | 'plasma' | 'neural';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ type = 'gradient' }) => {
  const [currentType, setCurrentType] = useState(type);

  // Auto-cycle through backgrounds every 25 seconds
  useEffect(() => {
    const backgrounds = ['gradient', 'aurora', 'particles', 'crystal', 'waves', 'plasma', 'cyberpunk', 'neural', 'clouds', 'fireflies', 'geometric', 'neumorphic'];
    const interval = setInterval(() => {
      setCurrentType(prev => {
        const currentIndex = backgrounds.indexOf(prev);
        return backgrounds[(currentIndex + 1) % backgrounds.length];
      });
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const renderGradientBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-pulse"></div>
      
      {/* Enhanced glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-full blur-3xl animate-float-glow filter drop-shadow-2xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-3xl animate-float-glow-reverse filter drop-shadow-2xl"></div>
      <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/40 to-teal-500/40 rounded-full blur-3xl animate-float-glow-slow filter drop-shadow-2xl"></div>
      
      {/* Modern light rays */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-light-sweep transform skew-y-12"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cyan-300/5 to-transparent animate-light-sweep-reverse transform -skew-y-6"></div>
    </div>
  );

  const renderAuroraBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/50 to-slate-900"></div>
      
      {/* Aurora waves */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400/30 via-blue-500/30 to-purple-600/30 animate-aurora-wave transform rotate-12 blur-xl"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-cyan-500/20 animate-aurora-wave-reverse transform -rotate-6 blur-2xl"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-400/25 via-teal-500/25 to-blue-600/25 animate-aurora-shimmer transform rotate-3 blur-lg"></div>
      </div>
      
      {/* Starfield */}
      {Array.from({ length: 200 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
        />
      ))}
    </div>
  );

  const renderCrystalBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900"></div>
      
      {/* Crystal formations */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-crystal-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
          }}
        >
          <div
            className="w-16 h-24 bg-gradient-to-b from-cyan-400/40 to-blue-600/40 transform rotate-45 border border-cyan-300/30 backdrop-blur-sm"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))',
            }}
          />
        </div>
      ))}
      
      {/* Crystal light beams */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-crystal-beam transform rotate-12"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-400/10 to-transparent animate-crystal-beam-reverse transform -rotate-12"></div>
    </div>
  );

  const renderPlasmaBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Plasma blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/60 to-purple-600/60 rounded-full blur-3xl animate-plasma-morph filter brightness-150"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/60 to-blue-600/60 rounded-full blur-3xl animate-plasma-morph-reverse filter brightness-150"></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-500/60 to-teal-600/60 rounded-full blur-3xl animate-plasma-pulse filter brightness-150"></div>
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-gradient-to-r from-orange-500/60 to-red-600/60 rounded-full blur-3xl animate-plasma-drift filter brightness-150"></div>
      </div>
      
      {/* Plasma electricity */}
      <svg className="absolute inset-0 w-full h-full opacity-60">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d={`M${Math.random() * 100}% ${Math.random() * 100}% Q${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}%`}
            stroke={`hsl(${Math.random() * 360}, 100%, 70%)`}
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            className="animate-plasma-lightning"
            style={{
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );

  const renderNeuralBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900"></div>
      
      {/* Neural network nodes */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-neural-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            boxShadow: '0 0 20px #22d3ee, 0 0 40px #22d3ee',
          }}
        />
      ))}
      
      {/* Neural connections */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {Array.from({ length: 40 }).map((_, i) => (
          <line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="url(#neuralGradient)"
            strokeWidth="1"
            className="animate-neural-flow"
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </svg>
      
      {/* Data flow particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-data-flow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${5 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );

  const renderParticlesBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Enhanced glowing particles */}
      {Array.from({ length: 120 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-particle-float"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `hsl(${180 + Math.random() * 60}, 100%, 70%)`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 15}s`,
            boxShadow: `0 0 ${10 + Math.random() * 20}px currentColor`,
          }}
        />
      ))}
      
      {/* Larger energy orbs */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-particle-drift"
          style={{
            width: `${8 + Math.random() * 16}px`,
            height: `${8 + Math.random() * 16}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, hsl(${280 + Math.random() * 80}, 100%, 70%), transparent)`,
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${10 + Math.random() * 8}s`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );

  const renderWavesBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      
      {/* Enhanced animated waves */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        
        <path
          d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
          fill="url(#waveGradient1)"
          className="animate-wave-flow"
        />
        <path
          d="M0,500 Q400,300 800,500 T1200,500 L1200,800 L0,800 Z"
          fill="url(#waveGradient2)"
          className="animate-wave-flow-reverse"
        />
        <path
          d="M0,350 Q350,150 700,350 T1200,350 L1200,800 L0,800 Z"
          fill="url(#waveGradient3)"
          className="animate-wave-flow-slow"
        />
      </svg>
      
      {/* Enhanced morphing blobs */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-full blur-2xl animate-blob-morph filter brightness-125"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-600/30 rounded-full blur-2xl animate-blob-morph-reverse filter brightness-125"></div>
    </div>
  );

  const renderCyberpunkBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Enhanced grid lines */}
      <div className="absolute inset-0 opacity-40">
        <div className="grid-background"></div>
      </div>
      
      {/* Matrix rain with colors */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-sm font-mono animate-matrix-rain"
          style={{
            left: `${i * 2.5}%`,
            color: `hsl(${120 + Math.random() * 60}, 100%, ${60 + Math.random() * 40}%)`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
            textShadow: '0 0 10px currentColor',
          }}
        >
          {Array.from({ length: 25 }).map((_, j) => (
            <div key={j} className="mb-1">
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>
      ))}
      
      {/* Enhanced neon grid */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00ffff" strokeWidth="0.8" opacity="0.4"/>
          </pattern>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" filter="url(#neonGlow)" className="animate-pulse" />
      </svg>
      
      {/* Enhanced holographic effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent animate-hologram-sweep"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-500/10 to-transparent animate-hologram-sweep-reverse"></div>
    </div>
  );

  const renderCloudsBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900"></div>
      
      {/* Enhanced drifting clouds */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/15 rounded-full blur-xl animate-cloud-drift"
          style={{
            width: `${120 + Math.random() * 250}px`,
            height: `${60 + Math.random() * 120}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 25}s`,
            animationDuration: `${25 + Math.random() * 35}s`,
            filter: `blur(${8 + Math.random() * 12}px)`,
          }}
        />
      ))}
      
      {/* Enhanced atmospheric glow */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-500/25 via-orange-500/10 to-transparent animate-atmospheric-glow"></div>
      
      {/* Enhanced light rays */}
      <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-yellow-300/40 to-transparent animate-light-ray blur-sm"></div>
      <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-yellow-300/30 to-transparent animate-light-ray-delayed blur-sm"></div>
      <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-orange-300/25 to-transparent animate-light-ray blur-sm" style={{ animationDelay: '1s' }}></div>
    </div>
  );

  const renderFirefliesBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-green-900/40 to-slate-900"></div>
      
      {/* Enhanced forest silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent"></div>
      
      {/* Enhanced fireflies */}
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-firefly-blink"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `hsl(${50 + Math.random() * 20}, 100%, 70%)`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
            boxShadow: `0 0 ${15 + Math.random() * 25}px currentColor`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
      
      {/* Enhanced magical glow */}
      <div className="absolute inset-0 bg-gradient-radial from-green-500/15 via-emerald-500/5 to-transparent animate-magical-glow"></div>
    </div>
  );

  const renderGeometricBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
      
      {/* Enhanced 3D Polygons */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-geometric-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${12 + Math.random() * 8}s`,
          }}
        >
          <div
            className="w-20 h-20 bg-gradient-to-br from-cyan-500/40 to-purple-500/40 transform rotate-45 border border-white/30 backdrop-blur-sm"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.4))',
            }}
          />
        </div>
      ))}
      
      {/* Enhanced floating triangles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-triangle-spin"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 8}s`,
          }}
        >
          <div
            className="w-16 h-16 bg-gradient-to-r from-blue-500/50 to-purple-500/50 border border-white/40 backdrop-blur-sm"
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              filter: 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.4))',
            }}
          />
        </div>
      ))}
      
      {/* Hexagons */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-geometric-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        >
          <div
            className="w-12 h-12 bg-gradient-to-r from-emerald-500/40 to-teal-500/40 border border-white/30"
            style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.4))',
            }}
          />
        </div>
      ))}
    </div>
  );

  const renderNeumorphicBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300"></div>
      
      {/* Enhanced soft glowing blobs */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-neumorphic-float"
          style={{
            width: `${180 + Math.random() * 220}px`,
            height: `${180 + Math.random() * 220}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'linear-gradient(145deg, #f0f0f0, #cacaca)',
            boxShadow: '25px 25px 70px #bebebe, -25px -25px 70px #ffffff',
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${18 + Math.random() * 12}s`,
          }}
        />
      ))}
      
      {/* Enhanced subtle light overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-blue-200/30 animate-light-shift"></div>
      
      {/* Soft geometric shapes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-neumorphic-float"
          style={{
            width: `${60 + Math.random() * 80}px`,
            height: `${60 + Math.random() * 80}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            boxShadow: '15px 15px 30px #d1d1d1, -15px -15px 30px #ffffff',
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${12 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );

  const backgroundComponents = {
    gradient: renderGradientBackground,
    aurora: renderAuroraBackground,
    particles: renderParticlesBackground,
    crystal: renderCrystalBackground,
    waves: renderWavesBackground,
    plasma: renderPlasmaBackground,
    cyberpunk: renderCyberpunkBackground,
    neural: renderNeuralBackground,
    clouds: renderCloudsBackground,
    fireflies: renderFirefliesBackground,
    geometric: renderGeometricBackground,
    neumorphic: renderNeumorphicBackground,
  };

  return (
    <>
      {backgroundComponents[currentType]()}
      
      {/* Enhanced background type indicator */}
      <div className="fixed top-4 right-4 z-50 bg-black/30 backdrop-blur-md rounded-xl px-4 py-2 text-white/80 text-sm font-semibold border border-white/10 shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
          {currentType.charAt(0).toUpperCase() + currentType.slice(1)} Background
        </div>
      </div>
    </>
  );
};

export default AnimatedBackground;