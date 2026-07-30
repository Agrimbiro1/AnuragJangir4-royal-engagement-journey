import React from "react";
import { motion } from "framer-motion";
import { Crown, Heart } from "lucide-react";

// Gold Filigree Line Flourish SVG
function GoldFlourish() {
  return (
    <svg
      viewBox="0 0 160 24"
      className="w-36 sm:w-44 h-5 mx-auto text-[#C5A059] opacity-85 my-2"
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

// Elegant Line-Art Gold Floral Crest Emblem (Replacing Flower Image)
function FloralCrestEmblem() {
  return (
    <svg
      viewBox="0 0 200 60"
      className="w-48 sm:w-56 h-12 mx-auto text-[#C5A059] opacity-90 my-2 pointer-events-none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      {/* Central Rose Blossom */}
      <circle cx="100" cy="30" r="8" stroke="#D4AF37" strokeWidth="1.5" />
      <circle cx="100" cy="30" r="4" fill="#D4AF37" />

      {/* Curved Botanical Vines Left */}
      <path d="M 90 30 C 60 15, 30 30, 10 25" />
      <path d="M 70 26 C 65 18, 55 18, 50 24" />
      <path d="M 45 28 C 40 20, 30 20, 25 27" />

      {/* Curved Botanical Vines Right */}
      <path d="M 110 30 C 140 15, 170 30, 190 25" />
      <path d="M 130 26 C 135 18, 145 18, 150 24" />
      <path d="M 155 28 C 160 20, 170 20, 175 27" />

      {/* Decorative Dots */}
      <circle cx="10" cy="25" r="2" fill="#D4AF37" />
      <circle cx="190" cy="25" r="2" fill="#D4AF37" />
    </svg>
  );
}

export function FooterSection() {
  return (
    <footer className="mt-6 sm:mt-8 pt-8 sm:pt-10 pb-10 sm:pb-16 text-center relative px-4 select-none max-w-4xl mx-auto flex flex-col justify-center">
      {/* WARM AMBER RADIAL GLOW AURA */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,225,160,0.35)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      {/* COMPACT DIRECT PAGE LAYOUT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center justify-center space-y-5 sm:space-y-4"
      >
        {/* 1. ROYAL MONOGRAM INSIGNIA SEAL */}
        <div className="relative my-2 sm:my-0">
          <div className="w-22 h-22 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#4C342F] via-[#3A2320] to-[#201311] text-amber-100 flex flex-col items-center justify-center shadow-[0_12px_30px_rgba(76,52,47,0.25)] border-3 border-[#D4AF37]">
            <Crown className="w-5 h-5 text-[#FFD700] mb-0.5" />
            <span className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold tracking-widest text-[#FFF1B0]">
              A & A
            </span>
          </div>
        </div>

        {/* 2. SUBTITLE & CALLIGRAPHIC SCRIPT QUOTE */}
        <p className="font-[family-name:var(--font-heading)] text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#C5A059] font-bold">
          WITH EVERLASTING LOVE & GRATITUDE
        </p>

        <h2 className="font-[family-name:var(--font-script)] text-3xl sm:text-4xl md:text-5xl text-[#AA771C] max-w-2xl mx-auto leading-tight">
          "Love is what makes the ride worthwhile."
        </h2>

        <GoldFlourish />

        <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold tracking-[0.25em] uppercase text-[#4C342F]">
          Arjun & Ananya
        </h3>

        {/* 3. THANK YOU VOW TEXT */}
        <p className="text-xs sm:text-sm text-[#5C4D46] max-w-md mx-auto leading-relaxed italic font-normal px-2">
          Thank you from the bottom of our hearts for being part of our royal journey. We look
          forward to creating unforgettable memories with you!
        </p>

        {/* 4. NEW LINE-ART GOLD FLORAL CREST EMBLEM (REPLACING IMAGE) */}
        <FloralCrestEmblem />

        {/* 5. COPYRIGHT NOTE */}
        <p className="text-[10px] sm:text-[11px] text-[#8B5E5A] uppercase tracking-[0.25em] font-semibold mt-5 sm:mt-4 border-t border-stone-200/60 pt-4 sm:pt-3 w-full max-w-xs">
          © 2025 ARJUN & ANANYA — ROYAL ENGAGEMENT INVITATION
        </p>
      </motion.div>
    </footer>
  );
}
