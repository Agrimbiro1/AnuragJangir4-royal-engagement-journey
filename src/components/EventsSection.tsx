import React from "react";
import { motion } from "framer-motion";
import { Gem, Wine, Music, MapPin, Sparkles, Crown, Calendar, Clock } from "lucide-react";
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

// Royal Crest Top Cap for Timeline Spine
function TimelineRoyalTopCrest() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: "backOut" }}
      className="flex flex-col items-center absolute left-1/2 -top-7 sm:-top-9 -translate-x-1/2 z-20"
    >
      <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#FFFDF9] via-[#F3E5AB] to-[#C5A059] border-2 border-[#C5A059] shadow-sm flex items-center justify-center text-[#7A4B46]">
        <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-[#7A4B46]" />
      </div>
      <div className="w-0.5 h-3 bg-gradient-to-b from-[#C5A059] to-transparent" />
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* CRISP DOUBLE-GOLD LEAF PRECISION RIM PHOTO FRAME (STATIC & LUXURY)        */
/* -------------------------------------------------------------------------- */
function SleekMinimalPhotoFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-24 xs:w-32 sm:w-44 md:w-64 h-24 xs:h-32 sm:h-44 md:h-64 p-1 sm:p-2 rounded-full bg-white/70 backdrop-blur-md border border-[#C5A059]/40 shadow-[0_12px_28px_rgba(76,52,47,0.15)] flex items-center justify-center group cursor-pointer shrink-0"
    >
      {/* Outer Fine Gold Accent Ring */}
      <div className="absolute inset-0.5 rounded-full border border-[#C5A059]/30 pointer-events-none group-hover:border-[#C5A059]/60 transition-colors duration-500" />

      {/* Clean Edge-to-Edge Photo Container with Inner Gold Bezel */}
      <div className="w-full h-full rounded-full overflow-hidden border border-[#C5A059]/60 bg-stone-200 relative z-0 shadow-inner">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-20 group-hover:opacity-0 transition-opacity" />
      </div>
    </motion.div>
  );
}

// Elegant S-Shaped Curled Gold Timeline Spine SVG (Narrow Gentle Curve Channel)
function CurledSTimelineSpine() {
  return (
    <div className="block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-16 sm:w-28 md:w-36 h-full pointer-events-none z-0">
      <svg
        viewBox="0 0 160 800"
        preserveAspectRatio="none"
        className="w-full h-full text-[#C5A059]"
      >
        <defs>
          <linearGradient id="goldSpineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#AA771C" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#FFF1B0" stopOpacity="1" />
            <stop offset="75%" stopColor="#AA771C" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.9" />
          </linearGradient>
          <filter id="goldSpineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Soft Glow Layer */}
        <motion.path
          d="M 80 15 C 105 140, 105 240, 80 395 C 55 550, 55 650, 80 785"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="6"
          strokeOpacity="0.3"
          filter="url(#goldSpineGlow)"
        />

        {/* Main Curled S-Curve Satin Gold Path */}
        <motion.path
          d="M 80 15 C 105 140, 105 240, 80 395 C 55 550, 55 650, 80 785"
          fill="none"
          stroke="url(#goldSpineGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />

        {/* Decorative S-Curve Dots at inflection points */}
        <circle cx="80" cy="15" r="4" fill="#D4AF37" />
        <circle cx="80" cy="395" r="4" fill="#FFF1B0" stroke="#AA771C" strokeWidth="1.5" />
        <circle cx="80" cy="785" r="4" fill="#D4AF37" />
      </svg>
    </div>
  );
}

export function EventsSection() {
  return (
    <section className="mt-16 sm:mt-24 py-8 relative select-none w-full max-w-6xl mx-auto px-4 overflow-hidden">
      {/* 1. HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto px-4 mb-12 sm:mb-24"
      >
        <p className="font-[family-name:var(--font-heading)] text-xs sm:text-sm uppercase tracking-[0.35em] text-[#C5A059] font-bold mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          SCHEDULE & CELEBRATIONS
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        </p>

        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-[#4C342F]">
          ROYAL ENGAGEMENT FESTIVITIES
        </h2>

        <GoldFlourish />
      </motion.div>

      {/* 2. ALTERNATING TIMELINE WITH SUBTLE SATIN GOLD SPINE */}
      <div className="relative w-full max-w-6xl lg:max-w-7xl mx-auto px-2 sm:px-6">
        {/* Soft Radial Ambient Backdrop Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        {/* ROYAL CREST TOP CAP */}
        <TimelineRoyalTopCrest />

        {/* CURLED S-SHAPED GOLD TIMELINE SPINE */}
        <CurledSTimelineSpine />

        <div className="space-y-14 sm:space-y-24 md:space-y-28 relative z-10 pt-6 pb-6">
          {/* ITEM 1: PROPOSAL STORY */}
          <div className="grid grid-cols-12 gap-6 sm:gap-10 md:gap-16 lg:gap-24 items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="col-span-6 text-right flex flex-col items-end space-y-1 sm:space-y-3.5 pr-7 xs:pr-9 sm:pr-12 md:pr-16 lg:pr-20"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-gradient-to-br from-[#FDF9F3] to-[#F5EBE1] text-[#AA771C] flex items-center justify-center border border-[color:var(--color-gold)]/60 shadow-xs mb-0.5 sm:mb-1"
              >
                <Gem className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-[#AA771C]" />
              </motion.div>

              <div className="inline-flex items-center gap-1 px-1.5 py-0.5 sm:px-3.5 sm:py-1 rounded-md sm:rounded-lg bg-amber-100/80 border border-[#C5A059]/40 text-[8px] xs:text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#AA771C] font-extrabold">
                <Calendar className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#AA771C]" />
                <span>AUG 26</span>
                <span>·</span>
                <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#AA771C]" />
                <span>04:00 PM</span>
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-[11px] xs:text-xs sm:text-2xl md:text-3xl font-extrabold text-[#3A2E2A] leading-tight">
                THE PROPOSAL STORY & WELCOME
              </h3>

              <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-[#5C4D46] font-medium leading-tight sm:leading-relaxed max-w-md">
                Family Introductions & Proposal Retelling
              </p>

              <p className="text-[8px] xs:text-[9px] sm:text-xs text-[#AA771C] font-bold flex items-center gap-0.5 sm:gap-1 pt-0.5">
                <MapPin className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#AA771C] shrink-0" />
                <span>Fateh Palace, Udaipur</span>
              </p>

              <div className="pt-0.5 flex items-center gap-1 sm:gap-2">
                <div className="inline-flex items-center gap-1 px-1.5 py-0.5 sm:px-4 sm:py-1.5 rounded-full bg-[#EBDBC9]/90 border border-[#C5A059]/60 text-[7px] xs:text-[8px] sm:text-[10px] font-extrabold text-[#3A2E2A] shadow-xs">
                  <span>THEME:</span>
                  <span className="w-2 h-2 sm:w-3.5 sm:h-3.5 rounded-full bg-[#5C443E] border border-white shadow-xs" />
                  <span className="w-2 h-2 sm:w-3.5 sm:h-3.5 rounded-full bg-[#E8D5CC] border border-white shadow-xs" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="col-span-6 flex justify-start pl-7 xs:pl-9 sm:pl-12 md:pl-16 lg:pl-20 relative"
            >
              <SleekMinimalPhotoFrame src={couplePhoto} alt="Proposal Story & Welcome" />
            </motion.div>
          </div>

          {/* ITEM 2: RING EXCHANGE */}
          <div className="grid grid-cols-12 gap-6 sm:gap-10 md:gap-16 lg:gap-24 items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="col-span-6 flex justify-end pr-7 xs:pr-9 sm:pr-12 md:pr-16 lg:pr-20 relative"
            >
              <SleekMinimalPhotoFrame src={ringsPhoto} alt="Ring Exchange & Vows" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="col-span-6 text-left flex flex-col items-start space-y-1 sm:space-y-3.5 pl-7 xs:pl-9 sm:pl-12 md:pl-16 lg:pl-20"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-gradient-to-br from-[#FDF9F3] to-[#F5EBE1] text-[#AA771C] flex items-center justify-center border border-[color:var(--color-gold)]/60 shadow-xs mb-0.5 sm:mb-1"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-[#AA771C]" />
              </motion.div>

              <div className="inline-flex items-center gap-1 px-1.5 py-0.5 sm:px-3.5 sm:py-1 rounded-md sm:rounded-lg bg-amber-100/80 border border-[#C5A059]/40 text-[8px] xs:text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#AA771C] font-extrabold">
                <Calendar className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#AA771C]" />
                <span>AUG 27</span>
                <span>·</span>
                <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#AA771C]" />
                <span>10:00 AM</span>
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-[11px] xs:text-xs sm:text-2xl md:text-3xl font-extrabold text-[#3A2E2A] leading-tight">
                RING EXCHANGE & BLESSINGS
              </h3>

              <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-[#5C4D46] font-medium leading-tight sm:leading-relaxed max-w-md">
                Formal Ring Exchange & Family Vows
              </p>

              <p className="text-[8px] xs:text-[9px] sm:text-xs text-[#AA771C] font-bold flex items-center gap-0.5 sm:gap-1 pt-0.5">
                <MapPin className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#AA771C] shrink-0" />
                <span>Gardens, Fateh Palace</span>
              </p>

              <div className="pt-0.5 flex items-center gap-1 sm:gap-2">
                <div className="inline-flex items-center gap-1 px-1.5 py-0.5 sm:px-4 sm:py-1.5 rounded-full bg-[#EBDBC9]/90 border border-[#C5A059]/60 text-[7px] xs:text-[8px] sm:text-[10px] font-extrabold text-[#3A2E2A] shadow-xs">
                  <span>THEME:</span>
                  <span className="w-2 h-2 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FFD700] border border-white shadow-xs" />
                  <span className="w-2 h-2 sm:w-3.5 sm:h-3.5 rounded-full bg-[#556B2F] border border-white shadow-xs" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ITEM 3: CELEBRATION DINNER */}
          <div className="grid grid-cols-12 gap-6 sm:gap-10 md:gap-16 lg:gap-24 items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="col-span-6 text-right flex flex-col items-end space-y-1 sm:space-y-3.5 pr-7 xs:pr-9 sm:pr-12 md:pr-16 lg:pr-20"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-gradient-to-br from-[#FDF9F3] to-[#F5EBE1] text-[#AA771C] flex items-center justify-center border border-[color:var(--color-gold)]/60 shadow-xs mb-0.5 sm:mb-1 flex gap-0.5"
              >
                <Wine className="w-3 h-3 sm:w-5 sm:h-5 text-[#AA771C]" />
                <Music className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#8B5E5A]" />
              </motion.div>

              <div className="inline-flex items-center gap-1 px-1.5 py-0.5 sm:px-3.5 sm:py-1 rounded-md sm:rounded-lg bg-amber-100/80 border border-[#C5A059]/40 text-[8px] xs:text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#AA771C] font-extrabold">
                <Calendar className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#AA771C]" />
                <span>AUG 27</span>
                <span>·</span>
                <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#AA771C]" />
                <span>07:00 PM</span>
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-[11px] xs:text-xs sm:text-2xl md:text-3xl font-extrabold text-[#3A2E2A] leading-tight">
                CELEBRATION DINNER & PARTY
              </h3>

              <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-[#5C4D46] font-medium leading-tight sm:leading-relaxed max-w-md">
                Royal Dinner, Music & Dance
              </p>

              <p className="text-[8px] xs:text-[9px] sm:text-xs text-[#AA771C] font-bold flex items-center gap-0.5 sm:gap-1 pt-0.5">
                <MapPin className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#AA771C] shrink-0" />
                <span>Grand Pavilion, Fateh Palace</span>
              </p>

              <div className="pt-0.5 flex items-center gap-1 sm:gap-2">
                <div className="inline-flex items-center gap-1 px-1.5 py-0.5 sm:px-4 sm:py-1.5 rounded-full bg-[#EBDBC9]/90 border border-[#C5A059]/60 text-[7px] xs:text-[8px] sm:text-[10px] font-extrabold text-[#3A2E2A] shadow-xs">
                  <span>THEME:</span>
                  <span className="w-2 h-2 sm:w-3.5 sm:h-3.5 rounded-full bg-[#1E3A8A] border border-white shadow-xs" />
                  <span className="w-2 h-2 sm:w-3.5 sm:h-3.5 rounded-full bg-[#D4AF37] border border-white shadow-xs" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="col-span-6 flex justify-start pl-7 xs:pl-9 sm:pl-12 md:pl-16 lg:pl-20 relative"
            >
              <SleekMinimalPhotoFrame src={sangeetPhoto} alt="Celebration Dinner & Party" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
