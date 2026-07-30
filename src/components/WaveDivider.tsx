import React from "react";

/**
 * WaveDivider — Elevated Premium Royal Gold Wave Divider.
 * Features a dual parallel gold ribbon, multi-stop metallic foil shimmer,
 * ambient gold aura, and 5 refined jewel diamond nodes.
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
    1: "M0,34 C220,66 460,12 700,39 C940,66 1180,12 1440,39",
    2: "M0,44 C240,12 480,64 720,29 C960,4 1200,54 1440,29",
    3: "M0,36 C200,64 440,14 680,42 C920,69 1160,16 1440,40",
  };

  // 5 refined jewel nodes along 1440px width
  const jewelNodes = [
    { x: 220, y: variant === 2 ? 18 : 68 },
    { x: 460, y: variant === 1 ? 18 : variant === 2 ? 68 : 20 },
    { x: 700, y: variant === 2 ? 35 : 45 },
    { x: 940, y: variant === 1 ? 68 : variant === 2 ? 10 : 72 },
    { x: 1180, y: variant === 2 ? 58 : 20 },
  ];

  const mainPath = mainWavePaths[variant] || mainWavePaths[1];
  const accentPath = accentWavePaths[variant] || accentWavePaths[1];

  const gradGold = `gwm-${variant}`;
  const gradAccent = `gwa-${variant}`;
  const glowGold = `gwgm-${variant}`;

  return (
    <div
      className="relative w-full pointer-events-none select-none"
      style={{ height: 0, zIndex: 12, overflow: "visible" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 85"
        preserveAspectRatio="none"
        className="relative block w-full h-[36px] sm:h-[48px] md:h-[60px] lg:h-[72px] -translate-y-1/2"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Multi-Stop Metallic Gold Foil Gradient */}
          <linearGradient id={gradGold} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#996515" stopOpacity="0.7" />
            <stop offset="15%" stopColor="#D4AF37" />
            <stop offset="30%" stopColor="#FFF8DC" />
            <stop offset="45%" stopColor="#E8C84A" />
            <stop offset="60%" stopColor="#D4AF37" />
            <stop offset="75%" stopColor="#FFF8DC" />
            <stop offset="90%" stopColor="#C5962B" />
            <stop offset="100%" stopColor="#8B6508" stopOpacity="0.7" />
          </linearGradient>

          {/* Secondary Gold Thread Gradient */}
          <linearGradient id={gradAccent} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="25%" stopColor="#FFF1B0" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#FFF1B0" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
          </linearGradient>

          {/* Soft Atmospheric Gold Glow Filter */}
          <filter id={glowGold} x="-10%" y="-120%" width="120%" height="340%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#FFF8DC" floodOpacity="0.8" />
            <feDropShadow dx="0" dy="1" stdDeviation="6" floodColor="#D4AF37" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* 1. Secondary Parallel Gold Thread Accent */}
        <path
          d={accentPath}
          fill="none"
          stroke={`url(#${gradAccent})`}
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* 2. Primary Metallic Gold Ribbon */}
        <path
          d={mainPath}
          fill="none"
          stroke={`url(#${gradGold})`}
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#${glowGold})`}
        />

        {/* 3. Inner Bright Specular Core Line */}
        <path
          d={mainPath}
          fill="none"
          stroke="#FFFDF9"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* 4. Elegant Jewel Medallion Nodes (5 Nodes) */}
        {jewelNodes.map((node, i) => (
          <g key={i} transform={`translate(${node.x}, ${node.y})`}>
            {/* Outer Gold Halo Ring */}
            <circle cx="0" cy="0" r="5" fill="#FFFDF9" stroke="#D4AF37" strokeWidth="1" />
            {/* Inner Gold Diamond Core */}
            <polygon points="0,-3.5 2.5,0 0,3.5 -2.5,0" fill="#AA771C" />
            {/* Mini Crosshair Rays */}
            <path d="M0,-8 L0,8 M-8,0 L8,0" stroke="#FFF1B0" strokeWidth="0.6" opacity="0.75" />
          </g>
        ))}
      </svg>
    </div>
  );
};
