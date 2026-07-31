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
    floatY: [-10, 10, -10],
    floatDuration: 3.2,
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
    floatY: [10, -10, 10],
    floatDuration: 3.5,
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
    floatY: [-10, 10, -10],
    floatDuration: 3.0,
    zIndex: 10,
  },
  // INNER LEFT CARD OVERLAPPING TOP-LEFT CORNER OF CENTRAL INPUT CARD
  {
    id: "fb7",
    author: "Raja Brijraj Singh & Rani Devika Devi",
    relation: "Grandparents",
    message: "Pillars of heritage and tradition, passing down golden values of love and honor.",
    photo: haldiPhoto,
    likes: 67,
    posClass: "top-[16%] left-[21%]",
    baseRotate: -5,
    floatY: [8, -8, 8],
    floatDuration: 3.4,
    zIndex: 40,
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
    floatY: [-8, 8, -8],
    floatDuration: 3.1,
    zIndex: 20,
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
    floatY: [10, -10, 10],
    floatDuration: 3.6,
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
    floatY: [-10, 10, -10],
    floatDuration: 3.3,
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
    floatY: [10, -10, 10],
    floatDuration: 3.4,
    zIndex: 10,
  },
  // INNER RIGHT CARD OVERLAPPING TOP-RIGHT CORNER OF CENTRAL INPUT CARD
  {
    id: "fb8",
    author: "Isha & Vikram Sharma",
    relation: "Family Friends",
    message: "You two are made for each other! Let the royal celebrations begin!",
    photo: ringsPhoto,
    likes: 71,
    posClass: "top-[16%] right-[21%]",
    baseRotate: 5,
    floatY: [-8, 8, -8],
    floatDuration: 3.2,
    zIndex: 40,
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
    floatY: [8, -8, 8],
    floatDuration: 3.0,
    zIndex: 20,
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

export function BlessingsSection({ guestName: propGuestName }: BlessingsSectionProps = {}) {
  const initialGuest = propGuestName || "Priyadarshini Sharma";
  const [guestName, setGuestName] = useState(initialGuest);
  const [blessingText, setBlessingText] = useState("");

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

    const newCard: FloatingBlessingCard = {
      id: "fb-" + Date.now(),
      author: guestName.trim() || "Honored Royal Guest",
      relation: "Royal Guest",
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
        <p className="font-[family-name:var(--font-heading)] text-xs sm:text-sm uppercase tracking-[0.35em] text-[#C5A059] font-bold mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          GUESTBOOK & WISHES
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        </p>

        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-[#4C342F] drop-shadow-sm">
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
              rotate: [card.baseRotate - 2, card.baseRotate + 2, card.baseRotate - 2],
            }}
            whileHover={{ scale: 1.06, y: -8, zIndex: 50 }}
            transition={{
              y: {
                duration: card.floatDuration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              rotate: {
                duration: card.floatDuration * 1.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              scale: { duration: 0.2 },
            }}
            style={{
              zIndex: card.zIndex,
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              willChange: "transform",
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

            <div className="relative z-10 flex justify-end pt-1 border-t border-[#C5A059]/30">
              <motion.button
                whileTap={{ scale: 1.2 }}
                onClick={() => toggleLike(card.id)}
                className="flex items-center gap-1 text-[9.5px] font-bold text-[#4C342F] bg-white/90 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/40 shadow-xs hover:bg-white transition-colors cursor-pointer"
              >
                <Heart
                  className={`w-3 h-3 ${
                    userLiked[card.id] ? "fill-red-500 text-red-500" : "text-[#4C342F]"
                  }`}
                />
                <span>{card.likes}</span>
              </motion.button>
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
          className="relative z-30 w-full max-w-md p-6 sm:p-7 rounded-[32px] bg-[#FFFDF9] border-2 border-[color:var(--color-gold)]/60 shadow-[0_25px_50px_rgba(140,90,60,0.15),0_10px_30px_rgba(212,175,55,0.2)] text-center flex flex-col items-center"
        >
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-white/50 via-transparent to-white/20 pointer-events-none" />

          <form onSubmit={handleSubmitBlessing} className="w-full space-y-3.5 relative z-10">
            <div className="text-center">
              <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-1">
                ROYAL GUESTBOOK & BLESSINGS
              </p>
            </div>

            {/* EDITABLE GUEST NAME FIELD */}
            <div className="py-2 px-3.5 rounded-2xl bg-white/80 border border-[#D4AF37]/50 shadow-xs flex items-center gap-2">
              <span className="font-[family-name:var(--font-script)] text-xl sm:text-2xl text-[#AA771C] shrink-0">
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

            <div>
              <textarea
                required
                rows={3}
                value={blessingText}
                onChange={(e) => setBlessingText(e.target.value)}
                placeholder="SHARE YOUR BLESSINGS FOR ARJUN & ANANYA..."
                className="w-full rounded-2xl p-3.5 bg-white/90 border border-[#D4C3B5] text-xs sm:text-sm text-[#3A2E2A] placeholder-stone-400 outline-none focus:border-[#C5A059] transition-colors resize-none tracking-wider font-light uppercase shadow-inner"
              />
            </div>

            <div className="pt-1 flex justify-center">
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute -inset-2 rounded-full border border-[#D4AF37]/50 animate-ping opacity-60 pointer-events-none" />
                <div className="absolute -inset-4 rounded-full border border-[#C5A059]/30 animate-pulse pointer-events-none" />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="relative px-9 py-3 rounded-full bg-[#4C342F] text-amber-50 font-bold text-xs uppercase tracking-[0.25em] border-2 border-[#D4AF37] shadow-[0_10px_30px_rgba(76,52,47,0.3)] hover:bg-[#3A2320] transition-all cursor-pointer flex items-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#D4AF37]" />
                  <span>SUBMIT BLESSING</span>
                </motion.button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowAllModal(true)}
                className="px-5 py-2 rounded-full bg-white/80 border border-[#D4AF37]/60 text-[#4C342F] font-bold text-[11px] uppercase tracking-widest hover:bg-white transition-all shadow-md flex items-center gap-2 mx-auto cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-[#AA771C]" />
                <span>VIEW ALL BLESSINGS ({floatingCards.length})</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* 4. MOBILE SCREEN LAYOUT — ENHANCED ROYAL INPUT BLESSING CARD */}
      <div className="sm:hidden py-4 px-2">
        <div className="p-6 rounded-[36px] bg-gradient-to-br from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8] border-2 border-[#D4AF37] shadow-[0_20px_50px_rgba(76,52,47,0.18)] text-center relative overflow-hidden">
          {/* Subtle Inner Gold Accent Frame */}
          <div className="absolute inset-2 rounded-[28px] border border-[#C5A059]/30 pointer-events-none" />

          <form onSubmit={handleSubmitBlessing} className="space-y-4 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5EBE1] border border-[#D4AF37]/50 shadow-xs mb-1.5">
                <Crown className="w-3.5 h-3.5 text-[#AA771C] animate-pulse" />
                <span className="text-[9.5px] uppercase tracking-[0.25em] font-extrabold text-[#AA771C]">
                  ROYAL GUESTBOOK & BLESSINGS
                </span>
                <Sparkles className="w-3 h-3 text-[#AA771C]" />
              </div>
              <p className="font-[family-name:var(--font-script)] text-2.5xl text-[#3A2E2A] drop-shadow-xs">
                Send Your Sacred Wishes
              </p>
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

            {/* MOBILE BLESSING MESSAGE TEXTAREA */}
            <textarea
              required
              rows={4}
              value={blessingText}
              onChange={(e) => setBlessingText(e.target.value)}
              placeholder="SHARE YOUR BLESSINGS FOR ARJUN & ANANYA..."
              className="w-full rounded-2xl p-4 bg-white/90 border border-[#C5A059]/40 text-xs sm:text-sm text-[#3A2E2A] placeholder-stone-400 outline-none focus:border-[#AA771C] transition-colors resize-none tracking-wider font-light uppercase shadow-inner"
            />

            {/* ACTION BUTTON STACK */}
            <div className="flex flex-col gap-2.5 pt-1">
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#2C1815] text-amber-50 font-extrabold text-xs uppercase tracking-[0.2em] border-2 border-[#D4AF37] shadow-[0_8px_20px_rgba(76,52,47,0.3)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#FFD700]" />
                <span>SUBMIT BLESSING</span>
              </button>

              <button
                type="button"
                onClick={() => setShowAllModal(true)}
                className="w-full py-3 rounded-2xl bg-white/90 border border-[#D4AF37]/70 text-[#4C342F] font-bold text-xs uppercase tracking-widest shadow-sm hover:bg-stone-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-[#AA771C]" />
                <span>VIEW ALL BLESSINGS ({floatingCards.length})</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 5. VIEW ALL BLESSINGS POP-UP MODAL */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {showAllModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAllModal(false)}
              data-lenis-prevent
              className="fixed inset-0 z-[999999] bg-black/75 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                data-lenis-prevent
                className="bg-[#FFFDF9] max-w-3xl w-full rounded-[32px] p-5 sm:p-8 border-2 border-[#D4AF37] shadow-2xl relative z-[9999999] max-h-[88vh] flex flex-col overflow-hidden"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#EBDBC9] mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#AA771C] font-bold">
                      ROYAL GUESTBOOK SHOWCASE
                    </span>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-3xl font-bold text-[#4C342F]">
                      All Guest Blessings ({floatingCards.length})
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowAllModal(false)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#4C342F] text-amber-100 flex items-center justify-center hover:bg-[#3A2320] transition-colors cursor-pointer border border-[#D4AF37]"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Modal Content Scroll Area */}
                <div data-lenis-prevent className="overflow-y-auto pr-1 space-y-4 flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {floatingCards.map((card) => (
                      <div
                        key={card.id}
                        className="soft-card rounded-2xl p-4 border border-[#D4AF37]/40 bg-white/80 backdrop-blur-md shadow-sm flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-[#4C342F] text-xs sm:text-sm tracking-wide">
                              {card.author}
                            </h4>
                            <span className="text-[9px] sm:text-[10px] font-bold text-[#8B5E5A] px-2.5 py-0.5 rounded-full bg-white border border-[#D4C3B5]">
                              {card.relation}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#5C4D46] italic leading-relaxed">
                            "{card.message}"
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-stone-200/60 flex justify-end">
                          <button
                            onClick={() => toggleLike(card.id)}
                            className="flex items-center gap-1.5 text-xs text-[#4C342F] bg-white px-3 py-1 rounded-full border border-stone-200 shadow-xs hover:bg-stone-50 transition-colors cursor-pointer"
                          >
                            <Heart
                              className={`w-3.5 h-3.5 ${
                                userLiked[card.id] ? "fill-red-500 text-red-500" : "text-[#4C342F]"
                              }`}
                            />
                            <span>{card.likes}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Close Button */}
                <div className="pt-3.5 border-t border-[#EBDBC9] mt-2">
                  <button
                    onClick={() => setShowAllModal(false)}
                    className="w-full py-3.5 rounded-full bg-[#4C342F] text-amber-50 text-xs font-bold uppercase tracking-widest hover:bg-[#3A2320] transition-colors shadow-md cursor-pointer border border-[#D4AF37]"
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
