import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Heart, PartyPopper, CheckCircle2 } from "lucide-react";

// Line-Art Engraved Bottom Border SVG
function EngravedBottomBorder() {
  return (
    <svg
      viewBox="0 0 600 100"
      className="w-full max-w-2xl h-20 text-[#C5A059] opacity-50 my-6 pointer-events-none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M 280 60 L 300 30 L 320 60 L 310 70 L 290 70 Z" />
      <circle cx="300" cy="24" r="3" fill="currentColor" />

      <rect x="80" y="40" width="36" height="36" rx="4" />
      <path d="M 98 40 L 98 76 M 80 58 L 116 58" />
      <path d="M 170 50 C 170 30, 185 30, 185 50 L 185 75 M 170 75 L 200 75" />
      <circle cx="160" cy="30" r="10" />
      <circle cx="180" cy="30" r="10" />

      <rect x="485" y="40" width="36" height="36" rx="4" />
      <path d="M 503 40 L 503 76 M 485 58 L 521 58" />
      <path d="M 420 50 C 420 30, 435 30, 435 50 L 435 75 M 420 75 L 450 75" />
      <circle cx="410" cy="30" r="10" />
      <circle cx="430" cy="30" r="10" />

      <path d="M 20 90 C 150 50, 450 50, 580 90" />
    </svg>
  );
}

// Glowing Gold Fireworks & Confetti Illustration
function GoldFireworksBurst() {
  return (
    <div className="relative w-64 sm:w-80 h-32 mx-auto my-4 flex items-center justify-center pointer-events-none">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#AA771C] text-white flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.6)] border-2 border-white animate-pulse">
        <Heart className="w-7 h-7 fill-current text-white" />
      </div>

      <svg
        viewBox="0 0 240 120"
        className="absolute inset-0 w-full h-full text-[#C5A059]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <g transform="translate(45, 50)">
          <path d="M0 -15 L0 15 M-15 0 L15 0 M-10 -10 L10 10 M-10 10 L10 -10" />
          <circle cx="-18" cy="-12" r="2" fill="currentColor" />
          <circle cx="18" cy="12" r="2" fill="currentColor" />
        </g>

        <g transform="translate(195, 50)">
          <path d="M0 -15 L0 15 M-15 0 L15 0 M-10 -10 L10 10 M-10 10 L10 -10" />
          <circle cx="18" cy="-14" r="2" fill="currentColor" />
          <circle cx="-18" cy="14" r="2" fill="currentColor" />
        </g>

        <path d="M 75 25 Q 85 12, 95 30" stroke="#AA771C" strokeWidth="2" />
        <path d="M 145 25 Q 155 12, 165 30" stroke="#AA771C" strokeWidth="2" />
        <circle cx="110" cy="22" r="2.5" fill="#D4AF37" />
        <circle cx="130" cy="22" r="2.5" fill="#8B5E5A" />
      </svg>
    </div>
  );
}

export function RsvpSection() {
  const [accepted, setAccepted] = useState(false);

  const triggerPartyBomb = () => {
    setAccepted(true);

    confetti({
      particleCount: 150,
      spread: 120,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#8B5E5A", "#E8D5CC", "#FFD700", "#AA771C"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 110,
        angle: 60,
        spread: 85,
        origin: { x: 0.1, y: 0.6 },
        colors: ["#D4AF37", "#AA771C", "#FFFFFF", "#E8D5CC"],
      });
    }, 200);

    setTimeout(() => {
      confetti({
        particleCount: 110,
        angle: 120,
        spread: 85,
        origin: { x: 0.9, y: 0.6 },
        colors: ["#8B5E5A", "#D4AF37", "#FFD700", "#AA771C"],
      });
    }, 400);

    setTimeout(() => {
      confetti({
        particleCount: 180,
        spread: 140,
        origin: { y: 0.3 },
        colors: ["#D4AF37", "#F3E5AB", "#AA771C"],
        shapes: ["star", "circle"],
      });
    }, 650);
  };

  return (
    <section className="my-24 sm:my-36 py-16 sm:py-24 relative select-none w-full max-w-5xl mx-auto px-4">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,225,160,0.45)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-8">
        
        {/* QUOTATION SCRIPT (SLIDES FROM TOP) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto px-4"
        >
          <p className="font-[family-name:var(--font-script)] text-3xl sm:text-4xl md:text-5xl text-[#AA771C] leading-relaxed font-normal">
            “Two souls with but a single thought, two hearts that beat as one.”
          </p>

          <p className="text-xs sm:text-sm text-[#8B5E5A] font-serif italic mt-4 tracking-wide">
            Kindly respond by August 15, 2025 so we may reserve your royal seat
          </p>
        </motion.div>

        {/* FIREWORKS BURST (SCALES FROM CENTER) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <GoldFireworksBurst />
        </motion.div>

        {/* CTA BUTTON (POPS FROM BOTTOM) */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={triggerPartyBomb}
          className="relative px-10 sm:px-14 py-5 sm:py-6 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF1B0] to-[#AA771C] text-[#2C1A14] font-bold text-xs sm:text-sm uppercase tracking-[0.25em] shadow-[0_20px_50px_rgba(212,175,55,0.45)] hover:shadow-[0_25px_60px_rgba(212,175,55,0.65)] border-2 border-white transition-all flex items-center justify-center gap-3 cursor-pointer group"
        >
          <Sparkles className="w-5 h-5 text-[#4C342F] animate-spin" />
          <span>CONFIRM ATTENDANCE & ACCEPT PARTY BOMB!</span>
          <PartyPopper className="w-5 h-5 text-[#4C342F] group-hover:rotate-12 transition-transform" />
        </motion.button>

        {/* CONFIRMATION BADGE */}
        <AnimatePresence>
          {accepted && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 border-2 border-[#D4AF37] shadow-lg text-[#4C342F] font-bold text-xs uppercase tracking-wider"
            >
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Royal Invitation Accepted! Celebration Confirmed! 🎉</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ENGRAVED BOTTOM BORDER (SLIDES FROM BOTTOM) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <EngravedBottomBorder />
        </motion.div>
      </div>
    </section>
  );
}
