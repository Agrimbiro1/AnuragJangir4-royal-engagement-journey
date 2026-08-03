import React from "react";

interface GoldenRosePetalsProps {
  count?: number;
}

export function GoldenRosePetals({ count = 14 }: GoldenRosePetalsProps) {
  const petals = [
    { left: "4%", size: 14, delay: 0, duration: 16 },
    { left: "12%", size: 10, delay: 4, duration: 21 },
    { left: "22%", size: 16, delay: 1, duration: 18 },
    { left: "31%", size: 11, delay: 6, duration: 23 },
    { left: "42%", size: 15, delay: 2, duration: 17 },
    { left: "53%", size: 12, delay: 7, duration: 20 },
    { left: "62%", size: 16, delay: 3, duration: 19 },
    { left: "73%", size: 10, delay: 8, duration: 22 },
    { left: "82%", size: 13, delay: 1.5, duration: 16.5 },
    { left: "91%", size: 12, delay: 5.5, duration: 20.5 },
    { left: "17%", size: 14, delay: 9, duration: 19 },
    { left: "48%", size: 15, delay: 11, duration: 15 },
    { left: "68%", size: 11, delay: 10, duration: 24 },
    { left: "87%", size: 14, delay: 12, duration: 18 },
  ].slice(0, count);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-25">
      {petals.map((petal, index) => (
        <div
          key={index}
          className="absolute animate-float-petal"
          style={{
            left: petal.left,
            top: "-60px",
            width: petal.size,
            height: petal.size,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 40 40"
            className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(255,215,0,0.65)]"
            fill="none"
          >
            <defs>
              <linearGradient id={`petalGold-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF8DC" stopOpacity="0.95" />
                <stop offset="25%" stopColor="#FFD700" stopOpacity="0.9" />
                <stop offset="65%" stopColor="#D4AF37" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#9A7432" stopOpacity="0.75" />
              </linearGradient>
            </defs>
            <path
              d="M20 3 C34 1, 39 15, 33 29 C27 39, 13 39, 7 29 C1 15, 6 1, 20 3 Z"
              fill={`url(#petalGold-${index})`}
              stroke="#FFD700"
              strokeWidth="0.9"
            />
            <path
              d="M20 7 C20 18, 21 28, 20 35 M20 16 C14 12, 11 10, 9 10 M20 22 C26 18, 29 15, 31 15 M20 27 C15 24, 12 22, 10 22"
              stroke="#FFF1B0"
              strokeWidth="0.6"
              strokeOpacity="0.8"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
