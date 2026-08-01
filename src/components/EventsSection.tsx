import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Gem, Wine, Music, MapPin, Sparkles, Crown, Calendar, Clock, ChevronRight, X, Navigation } from "lucide-react";
import couplePhoto from "../assets/couple.jpg";
import ringsPhoto from "../assets/rings.jpg";
import sangeetPhoto from "../assets/sangeet.png";
import dresscodeProposal from "../assets/dresscode_proposal.png";
import dresscodeRing from "../assets/dresscode_ring.png";
import dresscodeSangeet from "../assets/dresscode_sangeet.png";
import dressProposalMaroon from "../assets/dress_proposal_maroon.png";
import dressProposalPastel from "../assets/dress_proposal_pastel.png";
import dressRingEmerald from "../assets/dress_ring_emerald.png";
import dressRingGold from "../assets/dress_ring_gold.png";
import dressSangeetSapphire from "../assets/dress_sangeet_sapphire.png";
import dressSangeetGlamgold from "../assets/dress_sangeet_glamgold.png";

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

// Royal Crest Top Cap Component
function TimelineRoyalTopCrest() {
  return (
    <div className="flex flex-col items-center justify-center relative z-20 mb-8 sm:mb-12">
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#FFFDF9] via-[#FDF8F0] to-[#F5EBE1] border-2 border-[#D4AF37] shadow-[0_8px_25px_rgba(212,175,55,0.3)] flex items-center justify-center">
        <Crown className="w-5 h-5 sm:w-7 sm:h-7 text-[#AA771C] animate-pulse" />
      </div>
      <div className="h-4 sm:h-6 w-[2px] bg-gradient-to-b from-[#D4AF37] to-transparent mt-1" />
    </div>
  );
}

interface SleekMinimalPhotoFrameProps {
  src: string;
  alt: string;
}

// Crisp Circular Double-Gold Leaf Photo Frame (Flicker-Free & Cardless)
function SleekMinimalPhotoFrame({ src, alt }: SleekMinimalPhotoFrameProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -3 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      style={{ backfaceVisibility: "hidden" }}
      className="relative w-32 xs:w-38 sm:w-48 md:w-64 h-32 xs:h-38 sm:h-48 md:h-64 p-1 sm:p-2 rounded-full bg-[#FFFDF9] border-2 border-[#D4AF37]/50 shadow-[0_12px_28px_rgba(76,52,47,0.15)] flex items-center justify-center group cursor-pointer shrink-0 transform-gpu will-change-transform"
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
    <div className="block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-12 sm:w-36 md:w-44 h-full pointer-events-none z-0">
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
        </defs>

        {/* 1. Ambient Glow Underlayer */}
        <motion.path
          d="M 80 15 C 130 150, 130 270, 80 425 C 30 580, 30 700, 80 835"
          fill="none"
          stroke="#FFD700"
          strokeWidth="8"
          strokeOpacity="0.25"
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

        {/* 5. Clean Minimal Golden Gem Beads at Inflection Points (y=15, 425, 835) */}
        {[15, 425, 835].map((y, idx) => (
          <g key={idx} transform={`translate(80, ${y})`}>
            {/* Outer Subtle Gold Accent Ring */}
            <circle cx="0" cy="0" r="8" fill="none" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" />
            {/* Golden Gem Body */}
            <circle cx="0" cy="0" r="5.5" fill="#FFFDF9" stroke="#D4AF37" strokeWidth="1.5" />
            {/* Inner Core Bead */}
            <circle cx="0" cy="0" r="3" fill="#AA771C" />
            {/* Specular Highlight Point */}
            <circle cx="-1" cy="-1" r="1" fill="#FFF1B0" />
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
  dressCodePhoto: string;
  dressOptions: { photo: string; colorName: string }[];
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
    dressCodePhoto: dresscodeProposal,
    dressOptions: [
      { photo: dressProposalMaroon, colorName: "Royal Maroon & Gold" },
      { photo: dressProposalPastel, colorName: "Pastel Silk & Zari" },
    ],
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
    dressCodePhoto: dresscodeRing,
    dressOptions: [
      { photo: dressRingEmerald, colorName: "Emerald Green Velvet" },
      { photo: dressRingGold, colorName: "Imperial Gold & Ivory" },
    ],
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
    dressCodePhoto: dresscodeSangeet,
    dressOptions: [
      { photo: dressSangeetSapphire, colorName: "Royal Sapphire Blue" },
      { photo: dressSangeetGlamgold, colorName: "Glitz Gold & Velvet" },
    ],
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

        <div className="space-y-20 sm:space-y-24 md:space-y-28 relative z-10 pt-6 pb-6">
          {EVENTS_DATA.map((event, index) => {
            const IconComp = event.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={event.id}
                className="grid grid-cols-12 gap-2 xs:gap-3 sm:gap-10 md:gap-16 lg:gap-24 items-center relative"
              >
                {/* LEFT COLUMN */}
                {isEven ? (
                  /* TEXT ON LEFT */
                  <motion.div
                    initial={{ opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="col-span-6 text-right flex flex-col items-end space-y-1.5 sm:space-y-3 pr-5 xs:pr-7 sm:pr-12 md:pr-16 lg:pr-20"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 6 }}
                      className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FFFDF9] to-[#F5EBE1] text-[#AA771C] flex items-center justify-center border border-[color:var(--color-gold)]/60 shadow-md mb-0.5 cursor-pointer shrink-0"
                      onClick={() => toggleExpand(event.id)}
                    >
                      <IconComp className="w-4 h-4 sm:w-6 sm:h-6 text-[#AA771C]" />
                    </motion.div>

                    <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3.5 sm:py-1 rounded-md sm:rounded-lg bg-amber-100/90 border border-[#C5A059]/40 text-[7.5px] xs:text-[9.5px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#AA771C] font-extrabold shadow-xs">
                      <Calendar className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#AA771C]" />
                      <span>{event.date}</span>
                      <span>·</span>
                      <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#AA771C]" />
                      <span>{event.time}</span>
                    </div>

                    <h3 className="font-[family-name:var(--font-heading)] text-xs xs:text-sm sm:text-2xl md:text-3xl font-extrabold text-[#3A2E2A] leading-tight">
                      {event.title}
                    </h3>

                    <p className="text-[7.5px] xs:text-[9px] sm:text-xs text-[#AA771C] font-bold flex items-center gap-0.5 sm:gap-1 pt-0.5">
                      <MapPin className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#AA771C] shrink-0" />
                      <span>{event.venue}</span>
                    </p>

                    {/* INTERACTIVE POPUP TRIGGER BUTTON */}
                    <button
                      onClick={() => toggleExpand(event.id)}
                      className="mt-1.5 xs:mt-2.5 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-amber-100/90 border border-[#D4AF37]/50 text-[7.5px] xs:text-[9.5px] sm:text-xs uppercase font-extrabold tracking-wider text-[#AA771C] hover:bg-[#AA771C] hover:text-white transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
                    >
                      <span>View Event Details</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </motion.div>
                ) : (
                  /* PHOTO ON LEFT */
                  <motion.div
                    initial={{ opacity: 0, x: -35, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="col-span-6 flex justify-end pr-5 xs:pr-7 sm:pr-12 md:pr-16 lg:pr-20 relative"
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
                    className="col-span-6 flex justify-start pl-5 xs:pl-7 sm:pl-12 md:pl-16 lg:pl-20 relative"
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
                    className="col-span-6 text-left flex flex-col items-start space-y-1.5 sm:space-y-3 pl-5 xs:pl-7 sm:pl-12 md:pl-16 lg:pl-20"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: -6 }}
                      className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FFFDF9] to-[#F5EBE1] text-[#AA771C] flex items-center justify-center border border-[color:var(--color-gold)]/60 shadow-md mb-0.5 cursor-pointer shrink-0"
                      onClick={() => toggleExpand(event.id)}
                    >
                      <IconComp className="w-4 h-4 sm:w-6 sm:h-6 text-[#AA771C]" />
                    </motion.div>

                    <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3.5 sm:py-1 rounded-md sm:rounded-lg bg-amber-100/90 border border-[#C5A059]/40 text-[7.5px] xs:text-[9.5px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#AA771C] font-extrabold shadow-xs">
                      <Calendar className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#AA771C]" />
                      <span>{event.date}</span>
                      <span>·</span>
                      <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#AA771C]" />
                      <span>{event.time}</span>
                    </div>

                    <h3 className="font-[family-name:var(--font-heading)] text-xs xs:text-sm sm:text-2xl md:text-3xl font-extrabold text-[#3A2E2A] leading-tight">
                      {event.title}
                    </h3>

                    <p className="text-[7.5px] xs:text-[9px] sm:text-xs text-[#AA771C] font-bold flex items-center gap-0.5 sm:gap-1 pt-0.5">
                      <MapPin className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#AA771C] shrink-0" />
                      <span>{event.venue}</span>
                    </p>

                    {/* INTERACTIVE POPUP TRIGGER BUTTON */}
                    <button
                      onClick={() => toggleExpand(event.id)}
                      className="mt-1.5 xs:mt-2.5 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-amber-100/90 border border-[#D4AF37]/50 text-[7.5px] xs:text-[9.5px] sm:text-xs uppercase font-extrabold tracking-wider text-[#AA771C] hover:bg-[#AA771C] hover:text-white transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
                    >
                      <span>View Event Details</span>
                      <ChevronRight className="w-3 h-3" />
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
                    <div className="w-20 h-20 sm:w-20 sm:h-20 rounded-2xl border-2 border-[#D4AF37] overflow-hidden shrink-0 shadow-md">
                      <img src={selectedEvent.photo} alt={selectedEvent.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1 text-[9.5px] uppercase tracking-wider font-extrabold text-[#AA771C]">
                        <Crown className="w-3.5 h-3.5 text-[#AA771C]" />
                        <span>Royal Festivity Details</span>
                      </div>
                      <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-extrabold text-[#3A2E2A] leading-snug">
                        {selectedEvent.title}
                      </h3>
                      <p className="text-xs text-[#AA771C] font-semibold flex items-center gap-1 pt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#AA771C] shrink-0" />
                        <span>{selectedEvent.venue}</span>
                      </p>
                    </div>
                  </div>

                  {/* Event Time & Date Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5 px-4 py-2.5 rounded-2xl bg-amber-100/80 border border-[#C5A059]/50 text-xs font-extrabold text-[#AA771C]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#AA771C]" />
                      <span>{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#AA771C]" />
                      <span>{selectedEvent.time}</span>
                    </div>
                  </div>

                  {/* REDESIGNED DRESS CODE COLOR & ATTIRE PICTURES SHOWCASE */}
                  <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/95 via-[#FFFDF9] to-[#FDF8F0] border-2 border-[#D4AF37]/50 shadow-sm space-y-4">
                    <div className="border-b border-[#C5A059]/30 pb-2">
                      <span className="text-xs uppercase tracking-widest font-extrabold text-[#3A2E2A] block">
                        DRESS CODE & COLOR INSPIRATION
                      </span>
                    </div>

                    {/* Full Visible Recommended Attire Text */}
                    <div className="p-3.5 rounded-xl bg-amber-50/90 border border-[#C5A059]/35 text-left space-y-1">
                      <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#AA771C] block">
                        RECOMMENDED ATTIRE
                      </span>
                      <p className="text-xs font-bold text-[#3A2E2A] leading-relaxed break-words">
                        {selectedEvent.dressCode}
                      </p>
                    </div>

                    {/* DRESS COLOR PICTURES SHOWCASE GRID */}
                    <div className="space-y-2 text-left">
                      <span className="text-[10px] font-extrabold text-[#AA771C] uppercase tracking-wider block">
                        DRESS COLOR & STYLE OPTIONS
                      </span>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedEvent.dressOptions.map((option, oIdx) => (
                          <div
                            key={oIdx}
                            className="relative group overflow-hidden rounded-xl border-2 border-[#D4AF37]/70 shadow-md h-48 sm:h-40 bg-stone-100 flex flex-col justify-end"
                          >
                            <img
                              src={option.photo}
                              alt={option.colorName}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                            <div className="relative z-10 p-2 text-center">
                              <span className="text-[9.5px] font-extrabold text-[#FFF1B0] uppercase tracking-wider block drop-shadow-sm px-1.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 truncate">
                                {option.colorName}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* LOCATION / DIRECTION BUTTON & CLOSE ACTION */}
                  <div className="space-y-2.5">
                    <a
                      href="https://maps.google.com/?q=Fateh+Palace+Udaipur"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] text-[#FFF1B0] font-extrabold text-xs uppercase tracking-[0.25em] border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(76,52,47,0.3)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Navigation className="w-4 h-4 text-[#FFD700]" />
                      <span>GET DIRECTIONS</span>
                    </a>

                    <button
                      onClick={() => setExpandedId(null)}
                      className="w-full py-2.5 rounded-2xl bg-white/90 border border-[#D4AF37]/60 text-[#4C342F] font-bold text-xs uppercase tracking-widest hover:bg-stone-50 transition-all shadow-xs cursor-pointer"
                    >
                      Close Details
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
