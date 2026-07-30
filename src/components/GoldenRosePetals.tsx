import React from "react";
import { motion } from "framer-motion";

interface GoldenRosePetalsProps {
  count?: number;
}

export function GoldenRosePetals({ count = 7 }: GoldenRosePetalsProps) {
  const petals = [
    { left: "6%", size: 30, delay: 0, duration: 18, rotate: 25 },
    { left: "19%", size: 24, delay: 3, duration: 22, rotate: -35 },
    { left: "34%", size: 36, delay: 1, duration: 20, rotate: 45 },
    { left: "52%", size: 26, delay: 5, duration: 24, rotate: -15 },
    { left: "69%", size: 32, delay: 2, duration: 19, rotate: 30 },
    { left: "83%", size: 22, delay: 4, duration: 23, rotate: -40 },
    { left: "94%", size: 28, delay: 6, duration: 21, rotate: 15 },
  ].slice(0, count);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: petal.left,
            top: "-60px",
            width: petal.size,
            height: petal.size,
          }}
          animate={{
            y: ["0%", "115%"],
            x: [0, index % 2 === 0 ? 40 : -40, 0],
            rotate: [petal.rotate, petal.rotate + 360],
            rotateY: [0, 180, 360],
            opacity: [0, 0.45, 0.45, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 40 40"
            className="w-full h-full filter drop-shadow-[0_2px_6px_rgba(212,175,55,0.4)]"
            fill="none"
          >
            <defs>
              <linearGradient id={`petalGold-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF8DC" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#F3E5AB" stopOpacity="0.8" />
                <stop offset="80%" stopColor="#D4AF37" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#AA771C" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path
              d="M20 4 C32 2, 38 16, 32 28 C26 38, 14 38, 8 28 C2 16, 8 2, 20 4 Z"
              fill={`url(#petalGold-${index})`}
              stroke="#D4AF37"
              strokeWidth="0.8"
            />
            <path
              d="M20 8 C20 18, 22 28, 20 34 M20 18 C15 14, 12 12, 10 12 M20 22 C26 18, 28 16, 30 16"
              stroke="#B8860B"
              strokeWidth="0.5"
              strokeOpacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
