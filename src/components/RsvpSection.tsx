import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Crown, CheckCircle2 } from "lucide-react";

// Line-Art Engraved Bottom Border SVG
function EngravedBottomBorder() {
  return (
    <svg
      viewBox="0 0 600 100"
      className="w-full max-w-2xl h-16 sm:h-20 text-[#C5A059] opacity-60 my-4 pointer-events-none"
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

// Gold Filigree Line Flourish SVG
function GoldFlourish() {
  return (
    <svg
      viewBox="0 0 160 24"
      className="w-36 sm:w-44 h-6 mx-auto text-[#C5A059] opacity-85 my-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M 80 12 Q 60 4, 30 12 Q 10 20, 0 12" />
      <path d="M 80 12 Q 100 4, 130 12 Q 150 20, 160 12" />
      <path d="M 50 12 Q 40 8, 30 12" />
      <path d="M 110 12 Q 120 8, 130 12" />
      <circle cx="80" cy="12" r="2.5" fill="#D4AF37" />
    </svg>
  );
}

export function RsvpSection() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
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
    <section className="my-20 sm:my-32 py-12 sm:py-20 relative select-none w-full max-w-5xl mx-auto px-4">
      {/* Soft Ambient Gold Radial Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(255,225,160,0.4)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        {/* ROYAL CREST BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-[#C5A059]/50 shadow-xs"
        >
          <Crown className="w-4 h-4 text-[#AA771C]" />
          <span className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.35em] text-[#AA771C] font-extrabold">
            Royal Invitation
          </span>
          <Crown className="w-4 h-4 text-[#AA771C]" />
        </motion.div>

        {/* QUOTATION SCRIPT & TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-3"
        >
          <p className="font-[family-name:var(--font-script)] text-3xl sm:text-4xl md:text-5xl text-[#AA771C] leading-relaxed font-normal">
            “Two souls with but a single thought, two hearts that beat as one.”
          </p>

          <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3A2E2A] tracking-wide pt-2">
            JOIN US IN CELEBRATING OUR <span className="italic gold-text">ETERNAL UNION</span>
          </h3>

          <GoldFlourish />

          <p className="text-xs sm:text-sm text-[#8B5E5A] font-serif italic tracking-wide uppercase font-semibold">
            Kindly respond by August 15, 2026 so we may reserve your royal seat
          </p>
        </motion.div>

        {/* ULTRA-LUXURY ARCHITECTURAL ACCEPT INVITATION BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="pt-4"
        >
          <button
            onClick={handleAccept}
            className="relative px-10 sm:px-14 py-4.5 sm:py-5 rounded-full bg-[#FFFDF9] backdrop-blur-md border-2 border-[#C5A059] text-[#3A2E2A] font-[family-name:var(--font-heading)] font-extrabold text-xs sm:text-sm uppercase tracking-[0.35em] shadow-[0_15px_40px_rgba(197,160,89,0.25)] hover:shadow-[0_20px_50px_rgba(197,160,89,0.45)] hover:bg-[#FDF7EE] transition-all flex items-center justify-center gap-3.5 cursor-pointer group active:scale-98 overflow-hidden"
          >
            {/* Inner Razor-Thin Accent Rim */}
            <div className="absolute inset-1 rounded-full border border-[#C5A059]/40 pointer-events-none group-hover:border-[#C5A059]/70 transition-colors" />

            <Crown className="w-4 h-4 text-[#AA771C] group-hover:scale-110 transition-transform relative z-10" />
            <span className="relative z-10">
              {accepted ? "INVITATION ACCEPTED" : "ACCEPT INVITATION"}
            </span>
            <Sparkles className="w-4 h-4 text-[#AA771C] group-hover:rotate-12 transition-transform relative z-10" />
          </button>
        </motion.div>

        {/* REFINED CONFIRMATION BADGE */}
        <AnimatePresence>
          {accepted && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/90 backdrop-blur-md border border-[#C5A059] shadow-md text-[#3A2E2A] font-[family-name:var(--font-heading)] font-extrabold text-xs uppercase tracking-[0.25em]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#AA771C] shrink-0" />
              <span>ROYAL INVITATION ACCEPTED WITH HONOR</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ENGRAVED BOTTOM BORDER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full flex justify-center pt-2"
        >
          <EngravedBottomBorder />
        </motion.div>
      </div>
    </section>
  );
}
