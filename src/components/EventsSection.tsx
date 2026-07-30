import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Gem, Wine, Music, MapPin, Sparkles, Crown, Calendar, Clock, ChevronRight, X } from "lucide-react";
import couplePhoto from "../assets/couple.jpg";
import ringsPhoto from "../assets/rings.jpg";
import sangeetPhoto from "../assets/sangeet.png";

// Gold Filigree Line Flourish SVG
function GoldFlourish() {
  return (
    <svg
      viewBox="0 0 160 24"
      className="w-36 sm:w-44 h-5 mx-auto text-[#C5A059] opacity-85 my-2 pointer-events-none select-none"
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
      className="flex flex-col items-center absolute left-1/2 -top-7 sm:-top-9 -translate-x-1/2 z-20 pointer-events-none"
    >
      <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#FFFDF9] via-[#F3E5AB] to-[#C5A059] border-2 border-[#C5A059] shadow-md flex items-center justify-center text-[#7A4B46]">
        <Crown className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#7A4B46]" />
      </div>
      <div className="w-0.5 h-3 bg-gradient-to-b from-[#C5A059] to-transparent" />
    </motion.div>
  );
}

// Crisp Circular Double-Gold Leaf Photo Frame (Flicker-Free & Cardless)
function SleekMinimalPhotoFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -3 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      style={{ backfaceVisibility: "hidden" }}
      className="relative w-24 xs:w-32 sm:w-44 md:w-64 h-24 xs:h-32 sm:h-44 md:h-64 p-1 sm:p-2 rounded-full bg-[#FFFDF9] border-2 border-[#D4AF37]/50 shadow-[0_12px_28px_rgba(76,52,47,0.15)] flex items-center justify-center group cursor-pointer shrink-0 transform-gpu will-change-transform"
    >
      {/* Outer Fine Gold Accent Ring */}
      <div className="absolute inset-0.5 rounded-full border border-[#C5A059]/40 pointer-events-none group-hover:border-[#D4AF37] transition-colors duration-300" />

      {/* Clean Edge-to-Edge Photo Container */}
      <div className="w-full h-full rounded-full overflow-hidden border border-[#C5A059]/60 bg-stone-200 relative z-0 shadow-inner transform-gpu">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out transform-gpu"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-20 group-hover:opacity-0 transition-opacity" />
      </div>
    </motion.div>
  );
}

// Redesigned Liquid-Gold Wavelength Timeline Spine SVG
function CurledSTimelineSpine() {
  return (
    <div className="block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-24 sm:w-36 md:w-44 h-full pointer-events-none z-0">
      <svg
        viewBox="0 0 160 850"
        preserveAspectRatio="none"
        className="w-full h-full text-[#C5A059]"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Liquid Gold Foil Gradient */}
          <linearGradient id="goldSpineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#996515" stopOpacity="0.8" />
            <stop offset="15%" stopColor="#D4AF37" />
            <stop offset="30%" stopColor="#FFF8DC" />
            <stop offset="50%" stopColor="#E8C84A" />
            <stop offset="70%" stopColor="#FFF8DC" />
            <stop offset="85%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8B6508" stopOpacity="0.8" />
          </linearGradient>

          {/* Inner Specular Core Highlight Gradient */}
          <linearGradient id="goldCoreGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#FFFDF9" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.6" />
          </linearGradient>

          {/* Soft Glow Filter */}
          <filter id="goldSpineGlow" x="-50%" y="-20%" width="200%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#FFF1B0" floodOpacity="0.8" />
            <feDropShadow dx="0" dy="2" stdDeviation="8" floodColor="#D4AF37" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* 1. Ambient Glow Underlayer */}
        <motion.path
          d="M 80 15 C 130 150, 130 270, 80 425 C 30 580, 30 700, 80 835"
          fill="none"
          stroke="#FFD700"
          strokeWidth="8"
          strokeOpacity="0.25"
          filter="url(#goldSpineGlow)"
        />

        {/* 2. Dotted Parallel Gold Accent Thread */}
        <path
          d="M 72 15 C 122 150, 122 270, 72 425 C 22 580, 22 700, 72 835"
          fill="none"
          stroke="url(#goldSpineGrad)"
          strokeWidth="1.5"
          strokeDasharray="2 12"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* 3. Main Gold Foil Wave Curve */}
        <motion.path
          d="M 80 15 C 130 150, 130 270, 80 425 C 30 580, 30 700, 80 835"
          fill="none"
          stroke="url(#goldSpineGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* 4. Inner White-Gold Specular Core Highlight */}
        <motion.path
          d="M 80 15 C 130 150, 130 270, 80 425 C 30 580, 30 700, 80 835"
          fill="none"
          stroke="url(#goldCoreGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* 5. Ornate Royal Medallions at Inflection Points (y=15, 425, 835) */}
        {[15, 425, 835].map((y, idx) => (
          <g key={idx} transform={`translate(80, ${y})`}>
            {/* Outer Ring */}
            <circle cx="0" cy="0" r="10" fill="#FFFDF9" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="7" fill="none" stroke="#AA771C" strokeWidth="0.8" strokeDasharray="2 2" />
            {/* Center Diamond Jewel */}
            <polygon points="0,-5 4,0 0,5 -4,0" fill="#AA771C" />
            {/* 4-Point Star Rays */}
            <path d="M 0,-12 L 0,12 M -12,0 L 12,0" stroke="#FFF1B0" strokeWidth="0.8" opacity="0.85" />
          </g>
        ))}
      </svg>
    </div>
  );
}

interface EventDetail {
  id: string;
  icon: any;
  date: string;
  time: string;
  title: string;
  subtitle: string;
  venue: string;
  photo: string;
  theme: {
    name: string;
    colors: string[];
  };
  programme: {
    time: string;
    activity: string;
  }[];
  dressCode: string;
}

const EVENTS_DATA: EventDetail[] = [
  {
    id: "proposal",
    icon: Gem,
    date: "AUG 26, 2026",
    time: "04:00 PM ONWARDS",
    title: "THE PROPOSAL & WELCOME SHAHI TIKA",
    subtitle: "Royal Family Welcome, High Tea & Proposal Retelling",
    venue: "Fateh Palace Estate, Udaipur",
    photo: couplePhoto,
    theme: {
      name: "ROYAL PASTEL & MAROON",
      colors: ["#5C443E", "#E8D5CC", "#D4AF37"],
    },
    dressCode: "Royal Ethnic / Pastel Silk Kurta & Lehenga",
    programme: [
      { time: "04:00 PM", activity: "Guest Arrival & Welcome Refreshments" },
      { time: "05:00 PM", activity: "Traditional Shahi Tika & Blessing Ceremony" },
      { time: "06:30 PM", activity: "Sunset Proposal Retelling & Acoustic Music" },
    ],
  },
  {
    id: "ring_exchange",
    icon: Sparkles,
    date: "AUG 27, 2026",
    time: "10:00 AM ONWARDS",
    title: "SACRED RING EXCHANGE & BLESSINGS",
    subtitle: "Formal Engagement Ceremony, Vows & Family Blessings",
    venue: "Royal Gardens, Fateh Palace",
    photo: ringsPhoto,
    theme: {
      name: "GOLD & EMERALD GREEN",
      colors: ["#FFD700", "#556B2F", "#D4AF37"],
    },
    dressCode: "Imperial Gold & Velvet Formal / Sherwani",
    programme: [
      { time: "10:00 AM", activity: "Ceremonial Entry of Bride & Groom" },
      { time: "11:15 AM", activity: "Sacred Ring Exchange & Vow Ceremony" },
      { time: "12:30 PM", activity: "Royal Family Blessings & Photo Showcase" },
    ],
  },
  {
    id: "sangeet_dinner",
    icon: Wine,
    date: "AUG 27, 2026",
    time: "07:00 PM ONWARDS",
    title: "ROYAL SANGEET & CELEBRATION DINNER",
    subtitle: "Grand Musical Night, Royal Banquet & Dancing",
    venue: "Grand Pavilion, Fateh Palace",
    photo: sangeetPhoto,
    theme: {
      name: "ROYAL SAPPHIRE & GOLD",
      colors: ["#1E3A8A", "#D4AF37", "#996515"],
    },
    dressCode: "Glitz & Glamour / Indo-Western Evening Wear",
    programme: [
      { time: "07:00 PM", activity: "Red Carpet Arrival & Champagne Toast" },
      { time: "08:00 PM", activity: "Family Sangeet Dance Performances" },
      { time: "09:30 PM", activity: "Grand Royal Banquet & Live DJ Night" },
    ],
  },
];

export function EventsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const selectedEvent = EVENTS_DATA.find((e) => e.id === expandedId);

  // Lock body & html scroll & pause Lenis when Events Modal is active
  useEffect(() => {
    if (expandedId) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      (window as any).lenis?.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      (window as any).lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      (window as any).lenis?.start();
    };
  }, [expandedId]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

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

      {/* 2. ALTERNATING TIMELINE WITH ENHANCED S-CURVE WAVELENGTH */}
      <div className="relative w-full max-w-6xl lg:max-w-7xl mx-auto px-2 sm:px-6">
        {/* Soft Radial Ambient Backdrop Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        {/* ROYAL CREST TOP CAP */}
        <TimelineRoyalTopCrest />

        {/* ENHANCED S-SHAPED GOLD WAVELENGTH SPINE */}
        <CurledSTimelineSpine />

        <div className="space-y-16 sm:space-y-24 md:space-y-28 relative z-10 pt-6 pb-6">
          {EVENTS_DATA.map((event, index) => {
            const IconComp = event.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={event.id}
                className="grid grid-cols-12 gap-6 sm:gap-10 md:gap-16 lg:gap-24 items-center relative"
              >
                {/* LEFT COLUMN */}
                {isEven ? (
                  /* TEXT ON LEFT */
                  <motion.div
                    initial={{ opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="col-span-6 text-right flex flex-col items-end space-y-1 sm:space-y-3 pr-7 xs:pr-9 sm:pr-12 md:pr-16 lg:pr-20"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 6 }}
                      className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-gradient-to-br from-[#FFFDF9] to-[#F5EBE1] text-[#AA771C] flex items-center justify-center border border-[color:var(--color-gold)]/60 shadow-md mb-1 cursor-pointer"
                      onClick={() => toggleExpand(event.id)}
                    >
                      <IconComp className="w-4 h-4 sm:w-6 sm:h-6 text-[#AA771C]" />
                    </motion.div>

                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-3.5 sm:py-1 rounded-md sm:rounded-lg bg-amber-100/90 border border-[#C5A059]/40 text-[8px] xs:text-[9.5px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#AA771C] font-extrabold shadow-xs">
                      <Calendar className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#AA771C]" />
                      <span>{event.date}</span>
                      <span>·</span>
                      <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#AA771C]" />
                      <span>{event.time}</span>
                    </div>

                    <h3 className="font-[family-name:var(--font-heading)] text-[11px] xs:text-xs sm:text-2xl md:text-3xl font-extrabold text-[#3A2E2A] leading-tight">
                      {event.title}
                    </h3>

                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-[#5C4D46] font-medium leading-tight sm:leading-relaxed max-w-md">
                      {event.subtitle}
                    </p>

                    <p className="text-[8px] xs:text-[9px] sm:text-xs text-[#AA771C] font-bold flex items-center gap-0.5 sm:gap-1 pt-0.5">
                      <MapPin className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#AA771C] shrink-0" />
                      <span>{event.venue}</span>
                    </p>

                    {/* DRESS CODE & THEME PILL */}
                    <div className="pt-1 flex items-center gap-1.5 sm:gap-2">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#EBDBC9]/90 border border-[#C5A059]/60 text-[7px] xs:text-[8px] sm:text-[10px] font-extrabold text-[#3A2E2A] shadow-xs">
                        <span>THEME:</span>
                        {event.theme.colors.map((c, i) => (
                          <span
                            key={i}
                            className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border border-white shadow-xs"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* INTERACTIVE POPUP TRIGGER BUTTON */}
                    <button
                      onClick={() => toggleExpand(event.id)}
                      className="mt-2 text-[8px] xs:text-[9px] sm:text-xs uppercase font-extrabold tracking-wider text-[#AA771C] hover:text-[#4C342F] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>View Programme & Details</span>
                      <ChevronRight className="w-3 h-3 text-[#AA771C]" />
                    </button>
                  </motion.div>
                ) : (
                  /* PHOTO ON LEFT */
                  <motion.div
                    initial={{ opacity: 0, x: -35, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="col-span-6 flex justify-end pr-7 xs:pr-9 sm:pr-12 md:pr-16 lg:pr-20 relative"
                  >
                    <SleekMinimalPhotoFrame src={event.photo} alt={event.title} />
                  </motion.div>
                )}

                {/* RIGHT COLUMN */}
                {isEven ? (
                  /* PHOTO ON RIGHT */
                  <motion.div
                    initial={{ opacity: 0, x: 35, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="col-span-6 flex justify-start pl-7 xs:pl-9 sm:pl-12 md:pl-16 lg:pl-20 relative"
                  >
                    <SleekMinimalPhotoFrame src={event.photo} alt={event.title} />
                  </motion.div>
                ) : (
                  /* TEXT ON RIGHT */
                  <motion.div
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="col-span-6 text-left flex flex-col items-start space-y-1 sm:space-y-3 pl-7 xs:pl-9 sm:pl-12 md:pl-16 lg:pl-20"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: -6 }}
                      className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-gradient-to-br from-[#FFFDF9] to-[#F5EBE1] text-[#AA771C] flex items-center justify-center border border-[color:var(--color-gold)]/60 shadow-md mb-1 cursor-pointer"
                      onClick={() => toggleExpand(event.id)}
                    >
                      <IconComp className="w-4 h-4 sm:w-6 sm:h-6 text-[#AA771C]" />
                    </motion.div>

                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-3.5 sm:py-1 rounded-md sm:rounded-lg bg-amber-100/90 border border-[#C5A059]/40 text-[8px] xs:text-[9.5px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#AA771C] font-extrabold shadow-xs">
                      <Calendar className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#AA771C]" />
                      <span>{event.date}</span>
                      <span>·</span>
                      <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#AA771C]" />
                      <span>{event.time}</span>
                    </div>

                    <h3 className="font-[family-name:var(--font-heading)] text-[11px] xs:text-xs sm:text-2xl md:text-3xl font-extrabold text-[#3A2E2A] leading-tight">
                      {event.title}
                    </h3>

                    <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-[#5C4D46] font-medium leading-tight sm:leading-relaxed max-w-md">
                      {event.subtitle}
                    </p>

                    <p className="text-[8px] xs:text-[9px] sm:text-xs text-[#AA771C] font-bold flex items-center gap-0.5 sm:gap-1 pt-0.5">
                      <MapPin className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#AA771C] shrink-0" />
                      <span>{event.venue}</span>
                    </p>

                    {/* DRESS CODE & THEME PILL */}
                    <div className="pt-1 flex items-center gap-1.5 sm:gap-2">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#EBDBC9]/90 border border-[#C5A059]/60 text-[7px] xs:text-[8px] sm:text-[10px] font-extrabold text-[#3A2E2A] shadow-xs">
                        <span>THEME:</span>
                        {event.theme.colors.map((c, i) => (
                          <span
                            key={i}
                            className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border border-white shadow-xs"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* INTERACTIVE POPUP TRIGGER BUTTON */}
                    <button
                      onClick={() => toggleExpand(event.id)}
                      className="mt-2 text-[8px] xs:text-[9px] sm:text-xs uppercase font-extrabold tracking-wider text-[#AA771C] hover:text-[#4C342F] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>View Programme & Details</span>
                      <ChevronRight className="w-3 h-3 text-[#AA771C]" />
                    </button>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. ROYAL ELEGANT PROGRAMME DETAILS MODAL — Portaled to document.body */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedEvent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setExpandedId(null)}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                data-lenis-prevent
                className="fixed inset-0 z-[999999] bg-black/75 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
              >
                {/* Modal Dialog Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 20 }}
                  transition={{ type: "spring", damping: 26, stiffness: 320 }}
                  onClick={(e) => e.stopPropagation()}
                  data-lenis-prevent
                  className="relative z-[9999999] w-full max-w-lg bg-gradient-to-br from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8] rounded-3xl border-2 border-[#D4AF37]/60 shadow-[0_25px_60px_rgba(0,0,0,0.35)] overflow-hidden p-6 sm:p-8"
                >
                  {/* Inner Gold Accent Rim */}
                  <div className="absolute inset-2 rounded-[22px] border border-[#C5A059]/30 pointer-events-none" />

                  {/* Close Button */}
                  <button
                    onClick={() => setExpandedId(null)}
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#F5EBE1] border border-[#C5A059]/50 flex items-center justify-center text-[#7A4B46] hover:bg-[#AA771C] hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Event Image Banner & Header */}
                  <div className="flex items-center gap-4 mb-5 border-b border-[#C5A059]/30 pb-4">
                    <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] overflow-hidden shrink-0 shadow-md">
                      <img src={selectedEvent.photo} alt={selectedEvent.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1 text-[9.5px] uppercase tracking-wider font-extrabold text-[#AA771C]">
                        <Crown className="w-3 h-3 text-[#AA771C]" />
                        <span>Royal Festivity Details</span>
                      </div>
                      <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-extrabold text-[#3A2E2A] leading-snug">
                        {selectedEvent.title}
                      </h3>
                      <p className="text-xs text-[#AA771C] font-semibold flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#AA771C]" />
                        <span>{selectedEvent.venue}</span>
                      </p>
                    </div>
                  </div>

                  {/* Event Time & Date Bar */}
                  <div className="flex flex-wrap items-center gap-2 mb-5 px-3.5 py-2 rounded-xl bg-[#F5EBE1]/90 border border-[#C5A059]/40 text-xs font-bold text-[#AA771C]">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#AA771C]" />
                      <span>{selectedEvent.date}</span>
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#AA771C]" />
                      <span>{selectedEvent.time}</span>
                    </div>
                  </div>

                  {/* Theme & Dress Code Info */}
                  <div className="space-y-3 mb-6 bg-white/60 rounded-2xl p-4 border border-[#C5A059]/30">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-[#4C342F]">ROYAL THEME:</span>
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#EBDBC9] text-[10px] font-bold text-[#3A2E2A]">
                        <span>{selectedEvent.theme.name}</span>
                        <div className="flex items-center gap-1">
                          {selectedEvent.theme.colors.map((c, i) => (
                            <span
                              key={i}
                              className="w-3 h-3 rounded-full border border-white shadow-xs"
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-[#5C4D46] pt-2 border-t border-[#C5A059]/20">
                      <strong className="text-[#4C342F]">DRESS CODE: </strong>
                      <span>{selectedEvent.dressCode}</span>
                    </div>
                  </div>

                  {/* Detailed Programme Timeline */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-[#AA771C] flex items-center gap-1.5 mb-3">
                      <Sparkles className="w-3.5 h-3.5 text-[#AA771C]" />
                      <span>PROGRAMME SCHEDULE</span>
                    </p>
                    <div className="space-y-2.5 pl-3 border-l-2 border-[#D4AF37]">
                      {selectedEvent.programme.map((item, pIdx) => (
                        <div key={pIdx} className="text-xs flex items-center justify-between gap-3 bg-white/80 p-2.5 rounded-xl border border-[#C5A059]/20 shadow-xs">
                          <span className="text-[#3A2E2A] font-semibold">{item.activity}</span>
                          <span className="font-extrabold text-[#AA771C] bg-amber-50 px-2 py-0.5 rounded-md border border-[#D4AF37]/30 shrink-0">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modal Footer Close Button */}
                  <button
                    onClick={() => setExpandedId(null)}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#AA771C] to-[#8B6508] text-white font-extrabold text-xs uppercase tracking-widest shadow-md hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    Close Details
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
