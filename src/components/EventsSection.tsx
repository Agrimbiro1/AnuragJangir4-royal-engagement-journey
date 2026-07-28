import React from "react";
import { motion } from "framer-motion";
import {
  Gem,
  Wine,
  Music,
  MapPin,
  Sparkles,
} from "lucide-react";
import couplePhoto from "../assets/couple.jpg";
import ringsPhoto from "../assets/rings.jpg";
import sangeetPhoto from "../assets/sangeet.png";

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

// Circular Glass Photo Frame Component
function CircularGlassPhoto({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-44 sm:w-56 md:w-64 h-44 sm:h-56 md:h-64 p-3 sm:p-4 rounded-full bg-white/55 backdrop-blur-2xl border-2 border-white shadow-[0_25px_60px_rgba(76,52,47,0.22)] hover:scale-105 transition-transform duration-300 flex items-center justify-center">
      <div className="absolute inset-2 rounded-full border border-[#C5A059]/40 pointer-events-none" />
      <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#C5A059]/50 shadow-inner bg-stone-200">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export function EventsSection() {
  return (
    <section className="mt-16 sm:mt-24 py-8 relative select-none w-full">
      {/* 1. HEADER SECTION (SLIDE FROM TOP) */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto px-4 mb-14 sm:mb-20"
      >
        <p className="font-[family-name:var(--font-heading)] text-xs sm:text-sm uppercase tracking-[0.35em] text-[#C5A059] font-bold mb-3">
          SCHEDULE & CELEBRATIONS
        </p>

        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-[#3A2E2A] leading-tight">
          ENGAGEMENT Festivities: <span className="italic">The Journey of Love Begins</span>
        </h2>

        <GoldFlourish />
      </motion.div>

      {/* 2. ALTERNATING TIMELINE WITH ENHANCED STRAIGHT VERTICAL GOLD SPINE */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,225,160,0.45)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        {/* CENTER GOLD SPINE */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-1.5 bg-gradient-to-b from-[#AA771C] via-[#FFD700] to-[#AA771C] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.7)] z-0 origin-top"
        />

        <div className="space-y-16 sm:space-y-24 md:space-y-28 relative z-10">
          
          {/* ITEM 1: PROPOSAL STORY (TEXT SLIDES FROM LEFT, PHOTO SLIDES FROM RIGHT) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="md:col-span-6 text-left space-y-3.5 pr-0 md:pr-8"
            >
              <div className="w-12 h-12 rounded-xl bg-transparent text-[#C5A059] flex items-center justify-center border border-[#C5A059]/40 shadow-xs mb-2">
                <Gem className="w-6 h-6" />
              </div>

              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold flex items-center gap-2">
                <span>📅 AUGUST 26, 2025</span>
                <span>·</span>
                <span>🕓 04:00 PM ONWARDS</span>
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#3A2E2A] leading-tight">
                THE PROPOSAL STORY & WELCOME
              </h3>

              <p className="text-xs sm:text-sm text-[#5C4D46] font-normal leading-relaxed max-w-md">
                Family Introductions & Couple's Retelling of Their Proposal Story
              </p>

              <p className="text-xs text-[#C5A059] font-medium flex items-center gap-1.5 pt-1">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>The Royal Ballroom, Villa Love</span>
              </p>

              <div className="pt-1 flex items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EBDBC9]/80 border border-[#C5A059]/40 text-[10px] font-bold text-[#3A2E2A]">
                  <span>THEME:</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-[#5C443E] border border-white" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#E8D5CC] border border-white" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#F5EBE1] border border-white" />
                </div>
                <span className="italic text-[#5C4D46] text-xs font-medium">(Champagne Gold)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="md:col-span-6 flex justify-center md:justify-start pl-0 md:pl-8 relative"
            >
              <div className="hidden md:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(255,215,130,0.9)] z-20" />
              <CircularGlassPhoto src={couplePhoto} alt="Proposal Story & Welcome" />
            </motion.div>
          </div>

          {/* ITEM 2: RING EXCHANGE (PHOTO SLIDES FROM LEFT, TEXT SLIDES FROM RIGHT) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="md:col-span-6 flex justify-center md:justify-end pr-0 md:pr-8 order-2 md:order-1 relative"
            >
              <div className="hidden md:block absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(255,215,130,0.9)] z-20" />
              <CircularGlassPhoto src={ringsPhoto} alt="Ring Exchange & Vows" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="md:col-span-6 text-left space-y-3.5 pl-0 md:pl-8 order-1 md:order-2"
            >
              <div className="w-12 h-12 rounded-xl bg-transparent text-[#C5A059] flex items-center justify-center border border-[#C5A059]/40 shadow-xs mb-2">
                <Sparkles className="w-6 h-6" />
              </div>

              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold flex items-center gap-2">
                <span>📅 AUGUST 27, 2025</span>
                <span>·</span>
                <span>🕓 10:00 AM ONWARDS</span>
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#3A2E2A] leading-tight">
                RING EXCHANGE & FORMAL BLESSINGS
              </h3>

              <p className="text-xs sm:text-sm text-[#5C4D46] font-normal leading-relaxed max-w-md">
                Tradition & Family Blessings, Formal Exchange of Engagement Rings
              </p>

              <p className="text-xs text-[#C5A059] font-medium flex items-center gap-1.5 pt-1">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Courtyard & Gardens, Villa Love</span>
              </p>

              <div className="pt-1 flex items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EBDBC9]/80 border border-[#C5A059]/40 text-[10px] font-bold text-[#3A2E2A]">
                  <span>THEME:</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FFD700] border border-white" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#9AA88E] border border-white" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#556B2F] border border-white" />
                </div>
                <span className="italic text-[#5C4D46] text-xs font-medium">(Sunburst Yellow, Floral Green)</span>
              </div>
            </motion.div>
          </div>

          {/* ITEM 3: CELEBRATION DINNER (TEXT SLIDES FROM LEFT, PHOTO SLIDES FROM RIGHT) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="md:col-span-6 text-left space-y-3.5 pr-0 md:pr-8"
            >
              <div className="w-12 h-12 rounded-xl bg-transparent text-[#C5A059] flex items-center justify-center border border-[#C5A059]/40 shadow-xs mb-2 flex gap-0.5">
                <Wine className="w-5 h-5 text-[#C5A059]" />
                <Music className="w-4 h-4 text-[#8B5E5A]" />
              </div>

              <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold flex items-center gap-2">
                <span>📅 AUGUST 27, 2025</span>
                <span>·</span>
                <span>🕓 07:00 PM ONWARDS</span>
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#3A2E2A] leading-tight">
                CELEBRATION DINNER & PARTY
              </h3>

              <p className="text-xs sm:text-sm text-[#5C4D46] font-normal leading-relaxed max-w-md">
                Dinner, Musical Performances, Dance & Bonding with Guests
              </p>

              <p className="text-xs text-[#C5A059] font-medium flex items-center gap-1.5 pt-1">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Grand Pavilion, Villa Love</span>
              </p>

              <div className="pt-1 flex items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EBDBC9]/80 border border-[#C5A059]/40 text-[10px] font-bold text-[#3A2E2A]">
                  <span>THEME:</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-[#1E3A8A] border border-white" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#D4AF37] border border-white" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#3B82F6] border border-white" />
                </div>
                <span className="italic text-[#5C4D46] text-xs font-medium">(Polished Gold)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="md:col-span-6 flex justify-center md:justify-start pl-0 md:pl-8 relative"
            >
              <div className="hidden md:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(255,215,130,0.9)] z-20" />
              <CircularGlassPhoto src={sangeetPhoto} alt="Celebration Dinner & Party" />
            </motion.div>
          </div>

        </div>

        {/* BOTTOM BASE PEDESTAL (SLIDES FROM BOTTOM) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 flex justify-center"
        >
          <div className="w-48 h-5 rounded-full bg-gradient-to-r from-[#D4AF37]/30 via-white to-[#D4AF37]/30 border-2 border-[#C5A059] shadow-lg flex items-center justify-center">
            <div className="w-20 h-1.5 bg-[#AA771C] rounded-full" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
