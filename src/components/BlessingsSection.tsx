import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Send, Eye, X, Sparkles, Crown } from "lucide-react";
import confetti from "canvas-confetti";

import couplePhoto from "../assets/couple.jpg";
import venuePhoto from "../assets/venue.jpg";
import sangeetPhoto from "../assets/sangeet.png";
import brideFamilyPhoto from "../assets/bride_family.png";
import haldiPhoto from "../assets/haldi.png";
import ringsPhoto from "../assets/rings.jpg";
import groomFamilyPhoto from "../assets/groom_family.png";

export interface FloatingBlessingCard {
  id: string;
  author: string;
  relation: string;
  message: string;
  photo: string;
  likes: number;
  posClass: string;
  floatY: number[];
  baseRotate: number;
  floatDuration: number;
  zIndex: number;
}

// 10 ANGLED CORNER-OVERLAPPING FLOATING CARDS
const OVERLAPPING_ANGLED_CARDS: FloatingBlessingCard[] = [
  // --- LEFT SIDE CLUSTER ---
  {
    id: "fb1",
    author: "Rana Digvijay Singh",
    relation: "Royal Court",
    message: "May your sacred union bring eternal joy, grace, and noble fortune to both families!",
    photo: couplePhoto,
    likes: 54,
    posClass: "top-[8%] left-[4%]",
    baseRotate: -7,
    floatY: [-14, 12, -14],
    floatX: [6, -8, 6],
    floatDuration: 5.4,
    zIndex: 10,
  },
  {
    id: "fb3",
    author: "Udaipur Royal Relatives",
    relation: "Royal Guests",
    message: "A royal toast to eternal love, endless laughter, and brilliant celebrations!",
    photo: venuePhoto,
    likes: 42,
    posClass: "top-[36%] left-[3.5%]",
    baseRotate: 5,
    floatY: [12, -16, 12],
    floatX: [-7, 9, -7],
    floatDuration: 7.1,
    zIndex: 15,
  },
  {
    id: "fb5",
    author: "Kunwar Devraj & Rajkumari Ananya",
    relation: "Cousins",
    message: "Wishing you a lifetime of grand adventures, late night laughter, and pure happiness!",
    photo: sangeetPhoto,
    likes: 63,
    posClass: "bottom-[10%] left-[4%]",
    baseRotate: -6,
    floatY: [-10, 15, -10],
    floatX: [9, -5, 9],
    floatDuration: 4.8,
    zIndex: 10,
  },
  // INNER LEFT CARD BEHIND TOP-LEFT CORNER OF CENTRAL INPUT CARD
  {
    id: "fb7",
    author: "Raja Brijraj Singh & Rani Devika Devi",
    relation: "Grandparents",
    message: "Pillars of heritage and tradition, passing down golden values of love and honor.",
    photo: haldiPhoto,
    likes: 67,
    posClass: "top-[16%] left-[21%]",
    baseRotate: -5,
    floatY: [16, -10, 16],
    floatX: [-5, 7, -5],
    floatDuration: 6.5,
    zIndex: 12,
  },
  {
    id: "fb9",
    author: "Dadi Sa Rukmani Devi",
    relation: "Family Elder",
    message: "Sacred light and divine grace guide your steps as you walk as one.",
    photo: brideFamilyPhoto,
    likes: 59,
    posClass: "bottom-[18%] left-[19%]",
    baseRotate: 6,
    floatY: [-12, 10, -12],
    floatX: [8, -6, 8],
    floatDuration: 5.8,
    zIndex: 14,
  },

  // --- RIGHT SIDE CLUSTER ---
  {
    id: "fb2",
    author: "Rani Gayatri Devi",
    relation: "Bride's Family",
    message: "All my love and sacred heirloom blessings to Arjun & Ananya on this magical day.",
    photo: couplePhoto,
    likes: 89,
    posClass: "top-[8%] right-[4%]",
    baseRotate: 8,
    floatY: [15, -14, 15],
    floatX: [-8, 6, -8],
    floatDuration: 8.2,
    zIndex: 10,
  },
  {
    id: "fb4",
    author: "Maharaja Vikram Singh",
    relation: "Groom's Father",
    message: "Watching you both walk together hand in hand fills our hearts with infinite pride.",
    photo: sangeetPhoto,
    likes: 76,
    posClass: "top-[36%] right-[3.5%]",
    baseRotate: -6,
    floatY: [-11, 13, -11],
    floatX: [6, -7, 6],
    floatDuration: 6.2,
    zIndex: 15,
  },
  {
    id: "fb6",
    author: "Rajkumari Aditi",
    relation: "Groom's Sister",
    message: "So thrilled for my brother Arjun and my new sister Ananya! Welcome to the family!",
    photo: brideFamilyPhoto,
    likes: 58,
    posClass: "bottom-[10%] right-[4%]",
    baseRotate: 7,
    floatY: [14, -11, 14],
    floatX: [-6, 8, -6],
    floatDuration: 5.1,
    zIndex: 10,
  },
  // INNER RIGHT CARD BEHIND TOP-RIGHT CORNER OF CENTRAL INPUT CARD
  {
    id: "fb8",
    author: "Isha & Vikram Sharma",
    relation: "Family Friends",
    message: "You two are made for each other! Let the royal celebrations begin!",
    photo: ringsPhoto,
    likes: 71,
    posClass: "top-[16%] right-[21%]",
    baseRotate: 5,
    floatY: [-15, 9, -15],
    floatX: [7, -9, 7],
    floatDuration: 7.7,
    zIndex: 12,
  },
  {
    id: "fb10",
    author: "Uncle Rajendra Sharma",
    relation: "Bride's Uncle",
    message: "May your hearts beat as one through every chapter of life.",
    photo: groomFamilyPhoto,
    likes: 64,
    posClass: "bottom-[18%] right-[19%]",
    baseRotate: -5,
    floatY: [10, -16, 10],
    floatX: [-9, 5, -9],
    floatDuration: 6.7,
    zIndex: 14,
  },
];

// Gold Line Ornament SVG
function GoldOrnament() {
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

// Multi-Stage Party Bomb Confetti Explosion
function triggerPartyBomb() {
  // Main Center Explosion
  confetti({
    particleCount: 120,
    spread: 100,
    origin: { y: 0.6 },
    colors: ["#D4AF37", "#FFD700", "#FFFDF9", "#AA771C", "#8B5E5A"],
    scalar: 1.25,
  });

  // Side Cannon Poppers
  setTimeout(() => {
    confetti({
      particleCount: 75,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.7 },
      colors: ["#D4AF37", "#FFD700", "#E8C84A"],
    });
    confetti({
      particleCount: 75,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.7 },
      colors: ["#D4AF37", "#FFD700", "#E8C84A"],
    });
  }, 200);

  // Sparkle finale blast
  setTimeout(() => {
    confetti({
      particleCount: 50,
      spread: 120,
      origin: { y: 0.5 },
      shapes: ["circle", "square"],
      colors: ["#FFFDF9", "#FFD700", "#D4AF37", "#FF6B6B"],
    });
  }, 450);
}

interface BlessingsSectionProps {
  guestName?: string;
}

const RELATION_OPTIONS = [
  "Family / Relative",
  "Friend of Bride & Groom",
  "College / School Friend",
  "Well Wisher & Royal Guest",
  "Custom Relation...",
];

export function BlessingsSection({ guestName: propGuestName }: BlessingsSectionProps = {}) {
  const initialGuest = propGuestName || "Priyadarshini Sharma";
  const [guestName, setGuestName] = useState(initialGuest);
  const [blessingText, setBlessingText] = useState("");
  const [selectedRelation, setSelectedRelation] = useState("Family / Relative");
  const [customRelationText, setCustomRelationText] = useState("");

  React.useEffect(() => {
    if (propGuestName) {
      setGuestName(propGuestName);
    }
  }, [propGuestName]);
  const [floatingCards, setFloatingCards] =
    useState<FloatingBlessingCard[]>(OVERLAPPING_ANGLED_CARDS);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [userLiked, setUserLiked] = useState<Record<string, boolean>>({});
  const [showAllModal, setShowAllModal] = useState(false);
  const rafRef = React.useRef<number | null>(null);

  // Lock body & html scroll & pause Lenis when View All Blessings Modal is active
  React.useEffect(() => {
    if (showAllModal) {
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
  }, [showAllModal]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    rafRef.current = requestAnimationFrame(() => {
      setMousePos({ x, y });
      rafRef.current = null;
    });
  };

  const handleSubmitBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blessingText.trim()) return;

    // Trigger Party Bomb Fireworks Animation
    triggerPartyBomb();

    const finalRelation =
      selectedRelation === "Custom Relation..."
        ? customRelationText.trim() || "Royal Guest"
        : selectedRelation;

    const newCard: FloatingBlessingCard = {
      id: "fb-" + Date.now(),
      author: guestName.trim() || "Honored Royal Guest",
      relation: finalRelation,
      message: blessingText.trim(),
      photo: couplePhoto,
      likes: 1,
      posClass: "top-[15%] left-[2%]",
      baseRotate: -4,
      floatY: [-20, 20, -20],
      floatDuration: 3,
      zIndex: 50,
    };

    setFloatingCards((prev) => [newCard, ...prev.slice(0, 9)]);
    setBlessingText("");
    setCustomRelationText("");
  };

  const toggleLike = (id: string) => {
    setUserLiked((prev) => ({ ...prev, [id]: !prev[id] }));
    setFloatingCards((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, likes: c.likes + (userLiked[id] ? -1 : 1) } : c
      )
    );
  };

  return (
    <section className="mt-16 sm:mt-24 py-8 relative select-none w-full max-w-7xl mx-auto px-4 overflow-hidden">
      {/* BACKGROUND WARM RADIAL GLOW AURA */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,225,160,0.35)_0%,transparent_70%)] pointer-events-none blur-2xl" />

      {/* 1. SECTION HEADER */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-6">
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] border-2 border-[#D4AF37] text-[#FFF1B0] text-xs sm:text-sm font-extrabold tracking-[0.35em] uppercase shadow-lg mb-3">
          <span>GUESTBOOK & WISHES</span>
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-[#3A2E2A] drop-shadow-[0_1.5px_3px_rgba(255,255,255,0.7)]">
          BLESSINGS & WISHES
        </h2>

        <GoldOrnament />
      </div>

      {/* 2. DESKTOP STAGE WITH CORNER OVERLAPPING ANGLED FLOATING CARDS */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        className="relative w-full min-h-[820px] sm:min-h-[880px] md:min-h-[920px] hidden sm:flex items-center justify-center py-12 px-6 overflow-hidden"
      >
        {/* 10 ANGLED FLOATING CARDS */}
        {floatingCards.map((card) => (
          <motion.div
            key={card.id}
            animate={{
              y: card.floatY,
              x: card.floatX,
              rotate: [card.baseRotate - 2, card.baseRotate + 3, card.baseRotate - 2],
            }}
            transition={{
              duration: card.floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.06, y: -8, zIndex: 50 }}
            style={{
              zIndex: card.zIndex,
            }}
            className={`absolute ${card.posClass} w-56 sm:w-60 md:w-64 h-[165px] sm:h-[175px] p-3.5 sm:p-4 rounded-[22px] bg-gradient-to-br from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8] border-2 border-[#D4AF37]/50 shadow-[0_20px_40px_rgba(140,90,60,0.14),0_8px_20px_rgba(212,175,55,0.18)] group flex flex-col justify-between cursor-pointer overflow-hidden`}
          >
            {/* Inner Razor-Thin Gold Accent Rim */}
            <div className="absolute inset-1.5 rounded-[16px] border border-[#C5A059]/30 pointer-events-none group-hover:border-[#D4AF37]/60 transition-colors" />

            {/* Card Corner Warm Shimmer Glow */}
            <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_0%_0%,rgba(255,230,170,0.45)_0%,transparent_60%)] opacity-70 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  {/* Mini Gold Crest Badge */}
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/60 flex items-center justify-center shrink-0">
                    <Crown className="w-2.5 h-2.5 text-[#AA771C]" />
                  </div>
                  <h4 className="font-bold text-[#4C342F] text-[11.5px] sm:text-xs tracking-wide truncate max-w-[110px]">
                    {card.author}
                  </h4>
                </div>

                <span className="text-[8px] uppercase tracking-wider text-[#8B5E5A] font-extrabold px-2 py-0.5 rounded-full bg-white/90 border border-[#D4C3B5] shrink-0 shadow-xs">
                  {card.relation}
                </span>
              </div>

              <p className="text-[11px] sm:text-xs text-[#5C4D46] font-normal leading-relaxed line-clamp-3 italic relative pl-2 border-l-2 border-[#D4AF37]/50">
                "{card.message}"
              </p>
            </div>
          </motion.div>
        ))}

        {/* 3. CENTRAL INTERACTION INPUT CARD (z-30) */}
        <motion.div
          animate={{
            x: mousePos.x * 10,
            y: mousePos.y * 10,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 25 }}
          style={{
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            willChange: "transform",
          }}
          className="relative z-50 w-full max-w-md p-1 sm:p-1.5 rounded-[40px] bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C] shadow-[0_30px_90px_rgba(212,175,55,0.35),0_12px_40px_rgba(76,52,47,0.15)] select-none transform-gpu"
        >
          {/* Inner Ivory Card Frame */}
          <div className="rounded-[36px] p-6 sm:p-8 bg-gradient-to-b from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8] text-center flex flex-col items-center relative overflow-hidden">
            {/* Razor-Thin Gold Inset Border */}
            <div className="absolute inset-2 rounded-[28px] border border-[#C5A059]/35 pointer-events-none" />

            {/* Ambient Golden Center Aura */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[radial-gradient(circle,rgba(255,220,150,0.5)_0%,transparent_75%)] pointer-events-none blur-2xl" />

            <form onSubmit={handleSubmitBlessing} className="w-full space-y-4 relative z-10">
              <div className="text-center space-y-1">
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FFFDF9] via-[#F5EBE1] to-[#FFFDF9] border border-[#D4AF37]/70 text-[#4C342F] font-extrabold text-[10.5px] uppercase tracking-[0.22em] shadow-xs">
                  <Crown className="w-3.5 h-3.5 text-[#AA771C]" />
                  <span>ROYAL GUESTBOOK & BLESSINGS</span>
                  <Sparkles className="w-3 h-3 text-[#AA771C]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#4C342F]">
                  Send Your Sacred Wishes
                </h3>
              </div>

              {/* EDITABLE GUEST NAME FIELD */}
              <div className="py-2.5 px-4 rounded-2xl bg-white/90 border border-[#D4AF37]/60 shadow-xs flex items-center gap-2 focus-within:border-[#D4AF37] focus-within:ring-2 focus-within:ring-[#D4AF37]/20 transition-all">
                <span className="font-[family-name:var(--font-script)] text-xl sm:text-2xl text-[#AA771C] shrink-0 font-bold">
                  From:
                </span>
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="YOUR NAME & TITLE..."
                  className="w-full font-[family-name:var(--font-script)] text-xl sm:text-2xl text-[#AA771C] bg-transparent outline-none border-b border-dashed border-[#D4AF37]/50 focus:border-[#D4AF37] transition-colors"
                />
              </div>

              {/* GUEST RELATION SELECTOR FIELD */}
              <div className="py-2 px-3.5 rounded-2xl bg-white/90 border border-[#D4AF37]/60 shadow-xs flex items-center gap-2 text-left focus-within:border-[#D4AF37] focus-within:ring-2 focus-within:ring-[#D4AF37]/20 transition-all">
                <span className="text-[11px] uppercase font-extrabold text-[#AA771C] tracking-wider shrink-0">
                  Relation:
                </span>
                <select
                  value={selectedRelation}
                  onChange={(e) => setSelectedRelation(e.target.value)}
                  className="w-full text-xs font-semibold text-[#4C342F] bg-transparent outline-none cursor-pointer py-1"
                >
                  {RELATION_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#FFFDF9] text-[#4C342F]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* CUSTOM RELATION TEXT FIELD (SHOWS WHEN 'Custom Relation...' IS SELECTED) */}
              <AnimatePresence>
                {selectedRelation === "Custom Relation..." && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="py-2 px-3.5 rounded-2xl bg-amber-50/90 border border-[#D4AF37]/70 shadow-xs flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={customRelationText}
                      onChange={(e) => setCustomRelationText(e.target.value)}
                      placeholder="ENTER CUSTOM RELATION (e.g. Cousin, Bestie)..."
                      className="w-full text-xs font-semibold text-[#4C342F] bg-transparent outline-none placeholder-amber-800/60 tracking-wider"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* BLESSING TEXTAREA */}
              <div>
                <textarea
                  required
                  rows={3}
                  value={blessingText}
                  onChange={(e) => setBlessingText(e.target.value)}
                  placeholder="SHARE YOUR BLESSINGS FOR ARJUN & ANANYA..."
                  className="w-full rounded-2xl p-4 bg-white/90 border border-[#C5A059]/40 text-xs sm:text-sm text-[#3A2E2A] placeholder-stone-400 outline-none focus:border-[#AA771C] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all resize-none tracking-wider font-light uppercase shadow-inner"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-1 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] text-[#FFF1B0] font-extrabold text-xs uppercase tracking-[0.25em] border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(76,52,47,0.3)] hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#FFD700]" />
                  <span>SUBMIT BLESSING</span>
                </motion.button>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowAllModal(true)}
                  className="px-5 py-2 rounded-full bg-white/90 border border-[#D4AF37]/70 text-[#4C342F] font-bold text-[11px] uppercase tracking-widest hover:bg-white transition-all shadow-sm flex items-center gap-2 mx-auto cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#AA771C]" />
                  <span>VIEW ALL BLESSINGS ({floatingCards.length})</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* 4. MOBILE SCREEN LAYOUT — ENHANCED ROYAL INPUT BLESSING CARD */}
      <div className="sm:hidden py-4 px-2">
        <div className="p-1 rounded-[38px] bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] shadow-[0_20px_50px_rgba(76,52,47,0.2)]">
          <div className="p-6 rounded-[34px] bg-gradient-to-b from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8] text-center relative overflow-hidden">
            {/* Subtle Inner Gold Accent Frame */}
            <div className="absolute inset-2 rounded-[28px] border border-[#C5A059]/30 pointer-events-none" />

            <form onSubmit={handleSubmitBlessing} className="space-y-4 relative z-10">
              <div className="text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EBE1] border border-[#D4AF37]/50 shadow-xs">
                  <Crown className="w-3.5 h-3.5 text-[#AA771C]" />
                  <span className="text-[9.5px] uppercase tracking-[0.25em] font-extrabold text-[#AA771C]">
                    ROYAL GUESTBOOK & BLESSINGS
                  </span>
                  <Sparkles className="w-3 h-3 text-[#AA771C]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#4C342F]">
                  Send Your Sacred Wishes
                </h3>
              </div>

              {/* MOBILE EDITABLE GUEST NAME FIELD */}
              <div className="py-2.5 px-3.5 rounded-2xl bg-white/90 border border-[#D4AF37]/60 shadow-xs flex items-center gap-2">
                <span className="font-[family-name:var(--font-script)] text-xl text-[#AA771C] shrink-0 font-bold">
                  From:
                </span>
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="YOUR NAME & TITLE..."
                  className="w-full font-[family-name:var(--font-script)] text-xl text-[#AA771C] bg-transparent outline-none border-b border-dashed border-[#D4AF37]/50 focus:border-[#D4AF37] transition-colors"
                />
              </div>

              {/* MOBILE GUEST RELATION SELECTOR FIELD */}
              <div className="py-2 px-3.5 rounded-2xl bg-white/90 border border-[#D4AF37]/60 shadow-xs flex items-center gap-2 text-left">
                <span className="text-[11px] uppercase font-extrabold text-[#AA771C] tracking-wider shrink-0">
                  Relation:
                </span>
                <select
                  value={selectedRelation}
                  onChange={(e) => setSelectedRelation(e.target.value)}
                  className="w-full text-xs font-semibold text-[#4C342F] bg-transparent outline-none cursor-pointer py-1"
                >
                  {RELATION_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#FFFDF9] text-[#4C342F]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* MOBILE CUSTOM RELATION TEXT FIELD */}
              <AnimatePresence>
                {selectedRelation === "Custom Relation..." && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="py-2 px-3.5 rounded-2xl bg-amber-50/90 border border-[#D4AF37]/70 shadow-xs flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={customRelationText}
                      onChange={(e) => setCustomRelationText(e.target.value)}
                      placeholder="ENTER CUSTOM RELATION (e.g. Cousin, Bestie)..."
                      className="w-full text-xs font-semibold text-[#4C342F] bg-transparent outline-none placeholder-amber-800/60 tracking-wider"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* MOBILE BLESSING MESSAGE TEXTAREA */}
              <textarea
                required
                rows={4}
                value={blessingText}
                onChange={(e) => setBlessingText(e.target.value)}
                placeholder="SHARE YOUR BLESSINGS FOR ARJUN & ANANYA..."
                className="w-full rounded-2xl p-4 bg-white/90 border border-[#C5A059]/40 text-xs text-[#3A2E2A] placeholder-stone-400 outline-none focus:border-[#AA771C] transition-colors resize-none tracking-wider font-light uppercase shadow-inner"
              />

              {/* ACTION BUTTON STACK */}
              <div className="flex flex-col gap-2.5 pt-1">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] text-[#FFF1B0] font-extrabold text-xs uppercase tracking-[0.25em] border-2 border-[#D4AF37] shadow-[0_8px_20px_rgba(76,52,47,0.3)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#FFD700]" />
                  <span>SUBMIT BLESSING</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowAllModal(true)}
                  className="w-full py-3 rounded-full bg-white/90 border border-[#D4AF37]/70 text-[#4C342F] font-bold text-xs uppercase tracking-widest shadow-sm hover:bg-stone-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#AA771C]" />
                  <span>VIEW ALL BLESSINGS ({floatingCards.length})</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 5. VIEW ALL BLESSINGS POP-UP SHOWCASE MODAL */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {showAllModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAllModal(false)}
              data-lenis-prevent
              className="fixed inset-0 z-[999999] bg-black/80 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.92, y: 25 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 25 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                data-lenis-prevent
                className="bg-gradient-to-b from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8] max-w-4xl w-full rounded-[36px] p-5 sm:p-8 md:p-10 border-3 border-[#D4AF37] shadow-2xl relative z-[9999999] max-h-[90vh] flex flex-col overflow-hidden"
              >
                {/* Modal Close Button */}
                <button
                  onClick={() => setShowAllModal(false)}
                  className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37] flex items-center justify-center text-[#FFF1B0] hover:bg-[#AA771C] hover:text-white transition-all cursor-pointer shadow-md"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Header */}
                <div className="text-center pb-3 border-b border-[#C5A059]/30 mb-5">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold block mb-1">
                    ROYAL GUESTBOOK SHOWCASE
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl sm:text-4xl font-bold text-[#4C342F]">
                    All Guest Blessings ({floatingCards.length})
                  </h3>
                </div>

                {/* Modal Content Scroll Area */}
                <div data-lenis-prevent className="overflow-y-auto pr-1 space-y-4 flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {floatingCards.map((card) => (
                      <div
                        key={card.id}
                        className="rounded-[28px] p-5 border-2 border-[#D4AF37]/50 bg-gradient-to-br from-white via-[#FFFDF9] to-[#FDF8F0] shadow-[0_12px_30px_rgba(76,52,47,0.08)] hover:shadow-[0_18px_40px_rgba(212,175,55,0.22)] hover:border-[#D4AF37] transition-all flex flex-col justify-between relative overflow-hidden group space-y-3"
                      >
                        {/* Razor-Thin Inset Accent Rim */}
                        <div className="absolute inset-2 rounded-[20px] border border-[#C5A059]/25 pointer-events-none group-hover:border-[#D4AF37]/50 transition-colors" />

                        {/* Card Content Header */}
                        <div className="relative z-10 space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5 min-w-0">
                              <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/60 flex items-center justify-center shrink-0">
                                <Crown className="w-3 h-3 text-[#AA771C]" />
                              </div>
                              <h4 className="font-[family-name:var(--font-heading)] font-extrabold text-[#3A2E2A] text-sm sm:text-base tracking-wide truncate">
                                {card.author}
                              </h4>
                            </div>

                            {/* Relation Gold Badge */}
                            <div className="shrink-0 inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-amber-100/90 via-amber-50 to-amber-100/90 border border-[#C5A059]/50 text-[10px] sm:text-[10.5px] font-extrabold text-[#AA771C] uppercase tracking-wider shadow-xs">
                              {card.relation}
                            </div>
                          </div>

                          {/* Message Body */}
                          <p className="text-xs sm:text-sm text-[#5C4D46] font-normal leading-relaxed italic relative pl-3 border-l-2 border-[#D4AF37]/70 py-0.5">
                            "{card.message}"
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Close Button */}
                <div className="pt-4 border-t border-[#C5A059]/30 mt-3">
                  <button
                    onClick={() => setShowAllModal(false)}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] text-[#FFF1B0] font-extrabold text-xs uppercase tracking-[0.25em] border-2 border-[#D4AF37] shadow-lg hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    Close Guestbook Showcase
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
