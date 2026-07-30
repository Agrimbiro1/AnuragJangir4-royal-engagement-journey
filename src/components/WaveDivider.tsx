/**
 * WaveDivider — Ornate gold-plated wave border between sections.
 * Completely transparent — no background fills. Features a wide
 * gold metallic main stroke, flanked by thin accent lines,
 * with diamond accents and a rich shimmer glow.
 */

interface WaveDividerProps {
  variant?: 1 | 2 | 3;
}

export const WaveDivider = ({ variant = 1 }: WaveDividerProps) => {
  const wavePaths: Record<number, string> = {
    1: "M0,50 C200,80 420,25 700,55 C980,85 1220,30 1440,60",
    2: "M0,70 C240,35 500,85 740,45 C980,15 1200,72 1440,45",
    3: "M0,55 C180,85 420,28 660,62 C900,92 1140,32 1440,65",
  };

  // Thin accent lines offset above and below main wave
  const accentAbove: Record<number, string> = {
    1: "M0,43 C200,73 420,18 700,48 C980,78 1220,23 1440,53",
    2: "M0,63 C240,28 500,78 740,38 C980,8 1200,65 1440,38",
    3: "M0,48 C180,78 420,21 660,55 C900,85 1140,25 1440,58",
  };
  const accentBelow: Record<number, string> = {
    1: "M0,57 C200,87 420,32 700,62 C980,92 1220,37 1440,67",
    2: "M0,77 C240,42 500,92 740,52 C980,22 1200,79 1440,52",
    3: "M0,62 C180,92 420,35 660,69 C900,99 1140,39 1440,72",
  };

  // Diamond accent positions (% along the wave)
  const diamondPositions = [0.15, 0.35, 0.55, 0.75, 0.92];

  const wavePath = wavePaths[variant] || wavePaths[1];
  const abovePath = accentAbove[variant] || accentAbove[1];
  const belowPath = accentBelow[variant] || accentBelow[1];

  const gradMain = `gwm-${variant}`;
  const gradAccent = `gwa-${variant}`;
  const glowMain = `gwgm-${variant}`;
  const glowDiamond = `gwgd-${variant}`;

  return (
    <div
      className="relative w-full pointer-events-none select-none"
      style={{ height: 0, zIndex: 5, overflow: "visible" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="relative block w-full h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] -translate-y-1/2"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Rich gold metallic shimmer — main stroke */}
          <linearGradient id={gradMain} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A67C00" />
            <stop offset="8%" stopColor="#D4AF37" />
            <stop offset="18%" stopColor="#F5E6A3" />
            <stop offset="28%" stopColor="#E8C84A" />
            <stop offset="38%" stopColor="#D4AF37" />
            <stop offset="48%" stopColor="#F5E6A3" />
            <stop offset="58%" stopColor="#C5962B" />
            <stop offset="68%" stopColor="#F5E6A3" />
            <stop offset="78%" stopColor="#D4AF37" />
            <stop offset="88%" stopColor="#E8C84A" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>

          {/* Lighter gold for thin accent lines */}
          <linearGradient id={gradAccent} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5962B" stopOpacity="0.6" />
            <stop offset="25%" stopColor="#F5E6A3" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.65" />
            <stop offset="75%" stopColor="#F5E6A3" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C5962B" stopOpacity="0.6" />
          </linearGradient>

          {/* Rich gold glow behind main stroke */}
          <filter id={glowMain} x="-3%" y="-100%" width="106%" height="300%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#F5E6A3" floodOpacity="0.5" />
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#D4AF37" floodOpacity="0.3" />
            <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#B8860B" floodOpacity="0.15" />
          </filter>

          {/* Bright sparkle glow for diamond accents */}
          <filter id={glowDiamond} x="-200%" y="-200%" width="500%" height="500%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#F5E6A3" floodOpacity="0.9" />
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#D4AF37" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Thin accent line ABOVE main wave */}
        <path
          d={abovePath}
          fill="none"
          stroke={`url(#${gradAccent})`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* MAIN wide gold wave stroke */}
        <path
          d={wavePath}
          fill="none"
          stroke={`url(#${gradMain})`}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#${glowMain})`}
        />

        {/* Thin accent line BELOW main wave */}
        <path
          d={belowPath}
          fill="none"
          stroke={`url(#${gradAccent})`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Diamond/sparkle accents along the wave */}
        {diamondPositions.map((t, i) => {
          // Approximate positions along the wave path
          const x = t * 1440;
          const pathData = wavePaths[variant] || wavePaths[1];
          // Simple Y approximation based on wave function
          const yBase = variant === 1
            ? 50 + 30 * Math.sin((t * 2.5 - 0.3) * Math.PI)
            : variant === 2
            ? 70 - 35 * Math.sin((t * 2.5 + 0.2) * Math.PI)
            : 55 + 30 * Math.sin((t * 2.5 - 0.1) * Math.PI);
          const y = Math.max(10, Math.min(90, yBase));

          return (
            <g key={i} filter={`url(#${glowDiamond})`}>
              {/* Diamond shape */}
              <polygon
                points={`${x},${y - 5} ${x + 4},${y} ${x},${y + 5} ${x - 4},${y}`}
                fill="#F5E6A3"
                stroke="#D4AF37"
                strokeWidth="0.8"
              />
              {/* Tiny center sparkle */}
              <circle cx={x} cy={y} r="1.2" fill="#FFFDE8" />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
