import React from "react";

/**
 * WaveDivider — Elevated Imperial Royal Gold Wave Divider.
 * Features a 3D multi-layered metallic gold ribbon, golden ambient aura glow filter,
 * specular highlight core, and 5 refined 24K gold crest jewel medallions.
 */

interface WaveDividerProps {
  variant?: 1 | 2 | 3;
  strokeGlow?: boolean;
}

export const WaveDivider = ({ variant = 1 }: WaveDividerProps) => {
  const mainWavePaths: Record<number, string> = {
    1: "M0,40 C220,72 460,18 700,45 C940,72 1180,18 1440,45",
    2: "M0,50 C240,18 480,70 720,35 C960,10 1200,60 1440,35",
    3: "M0,42 C200,70 440,20 680,48 C920,75 1160,22 1440,46",
  };

  // Parallel secondary accent line running offset above main wave
  const accentWavePaths: Record<number, string> = {
    1: "M0,32 C220,64 460,10 700,37 C940,64 1180,10 1440,37",
    2: "M0,42 C240,10 480,62 720,27 C960,2 1200,52 1440,27",
    3: "M0,34 C200,62 440,12 680,40 C920,67 1160,14 1440,38",
  };

  // 5 refined jewel nodes along 1440px width
  const jewelNodes = [
    { x: 220, y: variant === 2 ? 18 : 68, isCenter: false },
    { x: 460, y: variant === 1 ? 18 : variant === 2 ? 68 : 20, isCenter: false },
    { x: 700, y: variant === 2 ? 35 : 45, isCenter: true },
    { x: 940, y: variant === 1 ? 68 : variant === 2 ? 10 : 72, isCenter: false },
    { x: 1180, y: variant === 2 ? 58 : 20, isCenter: false },
  ];

  const mainPath = mainWavePaths[variant] || mainWavePaths[1];
  const accentPath = accentWavePaths[variant] || accentWavePaths[1];

  const gradGold = `gwm-${variant}`;
  const gradAccent = `gwa-${variant}`;
  const glowId = `gwglow-${variant}`;

  return (
    <div
      className="relative w-full pointer-events-none select-none"
      style={{ height: 0, zIndex: 12, overflow: "visible" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="relative block w-full h-[44px] sm:h-[58px] md:h-[72px] lg:h-[86px] -translate-y-1/2 filter drop-shadow-[0_4px_16px_rgba(212,175,55,0.45)]"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Ambient Golden Glow Aura Filter */}
          <filter id={glowId} x="-10%" y="-40%" width="120%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Multi-Stop 24K Metallic Gold Foil Gradient */}
          <linearGradient id={gradGold} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B6508" stopOpacity="0.8" />
            <stop offset="12%" stopColor="#FFD700" />
            <stop offset="28%" stopColor="#FFF8DC" />
            <stop offset="44%" stopColor="#F5D061" />
            <stop offset="60%" stopColor="#FFD700" />
            <stop offset="76%" stopColor="#FFF8DC" />
            <stop offset="90%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8B6508" stopOpacity="0.8" />
          </linearGradient>

          {/* Secondary Parallel Gold Thread Gradient */}
          <linearGradient id={gradAccent} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="25%" stopColor="#FFF8DC" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="0.95" />
            <stop offset="75%" stopColor="#FFF8DC" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* 1. Ambient Golden Aura Glow Base Layer */}
        <path
          d={mainPath}
          fill="none"
          stroke="#FFD700"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.3"
          filter={`url(#${glowId})`}
        />

        {/* 2. Secondary Parallel Gold Thread Accent */}
        <path
          d={accentPath}
          fill="none"
          stroke={`url(#${gradAccent})`}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* 3. Primary 3D Metallic Gold Ribbon */}
        <path
          d={mainPath}
          fill="none"
          stroke={`url(#${gradGold})`}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 4. Inner Bright Specular Core Line */}
        <path
          d={mainPath}
          fill="none"
          stroke="#FFFDF5"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* 5. Imperial Jewel Medallion Nodes (5 Nodes across section width) */}
        {jewelNodes.map((node, i) => (
          <g key={i} transform={`translate(${node.x}, ${node.y})`}>
            {node.isCenter ? (
              /* Grand Center Crest Sunburst Medallion */
              <>
                <circle cx="0" cy="0" r="11" fill="url(#gradGold)" stroke="#FFF8DC" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="7" fill="#3A2320" stroke="#FFD700" strokeWidth="1.2" />
                <polygon points="0,-6 4,0 0,6 -4,0" fill="#FFD700" />
                <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
                {/* 8 Radial Crosshair Rays */}
                <path d="M0,-14 L0,14 M-14,0 L14,0 M-10,-10 L10,10 M-10,10 L10,-10" stroke="#FFF8DC" strokeWidth="0.8" opacity="0.85" />
              </>
            ) : (
              /* Refined Diamond Jewel Nodes */
              <>
                <circle cx="0" cy="0" r="6.5" fill="#FFFDF9" stroke="#FFD700" strokeWidth="1.5" />
                <polygon points="0,-4.5 3,0 0,4.5 -3,0" fill="#AA771C" />
                <circle cx="0" cy="0" r="1.2" fill="#FFFFFF" />
                <path d="M0,-10 L0,10 M-10,0 L10,0" stroke="#FFF1B0" strokeWidth="0.75" opacity="0.8" />
              </>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};
