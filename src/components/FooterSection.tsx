import React from "react";
import { motion } from "framer-motion";
import royalSealPhoto from "../assets/royal_seal.png";

// High-Contrast Luminous 24K Gold Filigree Line Flourish SVG
function GoldFlourish() {
  return (
    <svg
      viewBox="0 0 160 24"
      className="w-40 sm:w-48 h-6 mx-auto text-[#FFD700] filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] my-2"
      fill="none"
      stroke="#FFD700"
      strokeWidth="1.8"
    >
      <path d="M 80 12 Q 60 4, 30 12 Q 10 20, 0 12" />
      <path d="M 80 12 Q 100 4, 130 12 Q 150 20, 160 12" />
      <path d="M 50 12 Q 40 8, 30 12" />
      <path d="M 110 12 Q 120 8, 130 12" />
      <circle cx="80" cy="12" r="3" fill="#FFD700" />
    </svg>
  );
}

// High-Contrast Luminous 24K Gold Line-Art Floral Crest Emblem SVG
function FloralCrestEmblem() {
  return (
    <svg
      viewBox="0 0 200 60"
      className="w-52 sm:w-64 h-14 mx-auto text-[#FFD700] filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] my-2 pointer-events-none"
      fill="none"
      stroke="#FFD700"
      strokeWidth="1.8"
    >
      {/* Central Rose Blossom */}
      <circle cx="100" cy="30" r="8" stroke="#FFD700" strokeWidth="2" />
      <circle cx="100" cy="30" r="4" fill="#FFD700" />

      {/* Curved Botanical Vines Left */}
      <path d="M 90 30 C 60 15, 30 30, 10 25" />
      <path d="M 70 26 C 65 18, 55 18, 50 24" />
      <path d="M 45 28 C 40 20, 30 20, 25 27" />

      {/* Curved Botanical Vines Right */}
      <path d="M 110 30 C 140 15, 170 30, 190 25" />
      <path d="M 130 26 C 135 18, 145 18, 150 24" />
      <path d="M 155 28 C 160 20, 170 20, 175 27" />

      {/* Decorative Dots */}
      <circle cx="10" cy="25" r="2.5" fill="#FFD700" />
      <circle cx="190" cy="25" r="2.5" fill="#FFD700" />
    </svg>
  );
}

export function FooterSection() {
  return (
    <footer className="mt-2 sm:mt-4 pt-6 sm:pt-10 pb-12 sm:pb-16 text-center relative px-4 select-none max-w-4xl mx-auto flex flex-col justify-center min-h-[60vh] sm:min-h-0">
      {/* WARM LUMINOSITY RADIAL GLOW AURA */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,225,150,0.35)_0%,rgba(212,175,55,0.15)_40%,transparent_70%)] pointer-events-none blur-3xl" />

      {/* CARDLESS DIRECT FLOATING ROYAL LAYOUT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center justify-center space-y-5 sm:space-y-6 max-w-3xl mx-auto"
      >
        {/* 1. ROYAL MONOGRAM INSIGNIA SEAL WITH LUMINOSITY HALO */}
        <div className="relative mt-1 mb-2 sm:mb-3">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] shadow-[0_0_35px_rgba(255,215,0,0.45),0_10px_28px_rgba(0,0,0,0.4)] overflow-hidden">
            <img
              src={royalSealPhoto}
              alt="Arjun & Ananya Royal Seal"
              className="w-full h-full object-contain rounded-full scale-100 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* 2. SUBTITLE BADGE (MAHOGANY & GOLD CREST PILL) */}
        <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-gradient-to-r from-[#3A2320] via-[#2A1815] to-[#201311] border-2 border-[#FFD700] text-[#FFF1B0] text-xs sm:text-sm font-extrabold tracking-[0.35em] uppercase shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
          <span>WITH EVERLASTING LOVE & GRATITUDE</span>
        </div>

        {/* 3. CALLIGRAPHIC SCRIPT QUOTE (WITH LETTER-SPACING & CHAMPAGNE GOLD COLOR) */}
        <h2 className="font-[family-name:var(--font-script)] text-2.5xl sm:text-4xl md:text-4.5xl text-[#FFE8A3] max-w-2xl mx-auto leading-relaxed font-bold tracking-[0.08em] sm:tracking-[0.1em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          "Love is what makes the ride worthwhile."
        </h2>

        <GoldFlourish />

        {/* 4. COUPLE NAMES IN SOLID CHAMPAGNE GOLD (GRADIENT REMOVED) */}
        <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-3xl font-extrabold tracking-[0.28em] uppercase text-[#FFE8A3] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          ARJUN & ANANYA
        </h3>

        {/* 5. THANK YOU VOW TEXT (MATCHED TO HIGH-CONTRAST CHAMPAGNE GOLD) */}
        <p className="text-xs sm:text-sm text-[#FFE8A3] max-w-lg mx-auto leading-relaxed italic font-semibold px-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          Thank you from the bottom of our hearts for being part of our royal journey. We look
          forward to creating unforgettable memories with you!
        </p>

        {/* 6. HIGH-CONTRAST LINE-ART GOLD FLORAL CREST EMBLEM */}
        <div className="w-full flex justify-center text-[#FFD700] filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          <FloralCrestEmblem />
        </div>

        {/* 7. COPYRIGHT NOTE WITH CRISP GOLD DIVIDER */}
        <p className="text-[10px] sm:text-[11px] text-[#FFE8A3] uppercase tracking-[0.25em] font-bold mt-2 border-t-2 border-[#D4AF37]/50 pt-3 sm:pt-4 w-full max-w-md drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
          © 2026 ARJUN & ANANYA — ROYAL ENGAGEMENT INVITATION
        </p>
      </motion.div>
    </footer>
  );
}
