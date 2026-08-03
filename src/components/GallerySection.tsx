import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, ChevronLeft, ChevronRight, Camera, Sparkles, Crown } from "lucide-react";
import couplePhoto from "../assets/couple.jpg";
import venuePhoto from "../assets/venue.jpg";
import brideFamilyPhoto from "../assets/bride_family.png";
import haldiPhoto from "../assets/haldi.png";
import sangeetPhoto from "../assets/sangeet.png";
import bouquetPhoto from "../assets/bouquet.png";

export interface GalleryItem {
  id: string;
  src: string;
  caption: string;
  category: "couple" | "family" | "events";
  likes: number;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: couplePhoto,
    caption: "Arjun & Ananya — Royal Couple Portrait",
    category: "couple",
    likes: 245,
  },
  {
    id: "g2",
    src: brideFamilyPhoto,
    caption: "Indian Wedding Group & Family Traditions",
    category: "family",
    likes: 189,
  },
  {
    id: "g3",
    src: bouquetPhoto,
    caption: "Lace Gown & Rose Bouquet Close-up",
    category: "couple",
    likes: 198,
  },
  {
    id: "g4",
    src: haldiPhoto,
    caption: "Vibrant Haldi Ceremony & Marigold Decor",
    category: "events",
    likes: 212,
  },
  {
    id: "g5",
    src: sangeetPhoto,
    caption: "Sangeet Dance & Glamorous Royal Celebration",
    category: "events",
    likes: 230,
  },
  {
    id: "g6",
    src: venuePhoto,
    caption: "Fateh Palace — Royal Sanctuary Venue",
    category: "events",
    likes: 165,
  },
];

// Gold Line Ornament SVG (matches FamilySection)
function GoldOrnament() {
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

/* Frosted Glass Photo Card Component */
function GlassPhotoCard({
  src,
  caption,
  onClick,
  isHero = false,
  badgeText,
}: {
  src: string;
  caption: string;
  onClick: () => void;
  isHero?: boolean;
  badgeText?: string;
}) {
  return (
    <div
      onClick={onClick}
      className={`relative w-full h-full rounded-[24px] p-1.5 sm:p-2 bg-[#1A1210] border-2 border-[#D4AF37]/60 cursor-pointer group flex flex-col justify-between overflow-hidden ${
        isHero
          ? "shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(212,175,55,0.4)] ring-2 ring-[#FFD700]/70"
          : "shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
      }`}
    >
      {/* Reflected Glass Shine Overlay */}
      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />

      <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-stone-900">
        <img
          src={src}
          alt={caption}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-100 p-3 flex flex-col justify-end text-white">
          <p className="text-xs sm:text-sm font-bold leading-tight text-[#FFF1B0] drop-shadow-md">
            {caption}
          </p>
          <span className="text-[9px] uppercase tracking-wider text-[#FFD700] mt-1 flex items-center gap-1 font-semibold">
            <Camera className="w-3 h-3 text-[#FFD700]" /> TAP TO VIEW
          </span>
        </div>
      </div>

      {badgeText && (
        <div className="pt-1.5 px-1 text-[#FFF1B0]">
          <p className="text-[11px] font-bold leading-tight">{badgeText}</p>
        </div>
      )}
    </div>
  );
}

/* Animated Royal Corner Mandala SVG Accent */
function RoyalCornerMandala({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const positionClasses = {
    tl: "top-0 left-0",
    tr: "top-0 right-0 scale-x-[-1]",
    bl: "bottom-0 left-0 scale-y-[-1]",
    br: "bottom-0 right-0 scale-x-[-1] scale-y-[-1]",
  }[position];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.96, 1.04, 0.96] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className={`fixed ${positionClasses} w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 pointer-events-none z-10 text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]`}
    >
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        {/* Outer Corner Arch & Background Glow Fill */}
        <path
          d="M 0,20 C 60,20 100,60 100,120 L 100,0 Z"
          fill="url(#goldGradCorner)"
          opacity="0.12"
        />
        <path
          d="M 0,0 L 180,0 C 180,40 140,80 100,100 C 60,120 0,60 0,0 Z"
          stroke="url(#goldGradCorner)"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Concentric Arc Lines */}
        <path d="M 0,150 Q 80,140 150,0" stroke="#FFD700" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.7" />
        <path d="M 0,120 Q 60,110 120,0" stroke="#D4AF37" strokeWidth="1.8" />
        <path d="M 0,90 Q 45,85 90,0" stroke="#FFF1B0" strokeWidth="1" />
        <path d="M 0,60 Q 30,55 60,0" stroke="#D4AF37" strokeWidth="1.5" />

        {/* Radiating Flower Petal Rays */}
        {[15, 30, 45, 60, 75].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 0 0)`}>
            <line x1="0" y1="0" x2="140" y2="0" stroke="#D4AF37" strokeWidth="0.8" opacity="0.4" />
            <circle cx="110" cy="0" r="3" fill="#FFD700" opacity="0.8" />
            <path d="M 125,-4 L 133,0 L 125,4 Z" fill="#D4AF37" />
          </g>
        ))}

        {/* Corner Medallion Jewels */}
        <circle cx="25" cy="25" r="18" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="25" cy="25" r="8" fill="url(#goldGradCorner)" opacity="0.7" />
        <circle cx="50" cy="50" r="4" fill="#FFD700" />
        <circle cx="80" cy="80" r="3" fill="#D4AF37" />

        <defs>
          <linearGradient id="goldGradCorner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE259" />
            <stop offset="50%" stopColor="#FFA751" />
            <stop offset="100%" stopColor="#9A7432" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

/* Flanking Continuous Rotating Royal Side Mandala SVG */
function RoyalSideMandala({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`fixed ${
        side === "left" ? "left-1 sm:left-10 md:left-16" : "right-1 sm:right-10 md:right-16"
      } top-1/2 -translate-y-1/2 w-44 h-44 sm:w-72 sm:h-72 md:w-96 md:h-96 pointer-events-none z-10 opacity-30 sm:opacity-50`}
    >
      <motion.svg
        animate={{ rotate: side === "left" ? 360 : -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        viewBox="0 0 300 300"
        className="w-full h-full text-[#D4AF37] filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
      >
        {/* Outer Ring & Star Rays */}
        <circle cx="150" cy="150" r="140" stroke="url(#goldGradSide)" strokeWidth="1.5" fill="none" strokeDasharray="6 6" />
        <circle cx="150" cy="150" r="125" stroke="#D4AF37" strokeWidth="1" fill="none" />
        <circle cx="150" cy="150" r="105" stroke="#FFF1B0" strokeWidth="1.2" fill="none" opacity="0.6" />
        <circle cx="150" cy="150" r="85" stroke="#AA771C" strokeWidth="1.5" fill="none" />

        {/* 12 Outer Petals */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 150 150)`}>
            <path
              d="M 150,25 Q 165,65 150,105 Q 135,65 150,25 Z"
              fill="url(#goldGradSide)"
              opacity="0.25"
              stroke="#FFD700"
              strokeWidth="1"
            />
            <circle cx="150" cy="15" r="3" fill="#FFD700" />
            <line x1="150" y1="105" x2="150" y2="125" stroke="#D4AF37" strokeWidth="1" />
          </g>
        ))}

        {/* 12 Inner Petals */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 30 + 15} 150 150)`}>
            <path
              d="M 150,65 Q 160,95 150,125 Q 140,95 150,65 Z"
              fill="#D4AF37"
              opacity="0.3"
              stroke="#FFF1B0"
              strokeWidth="0.8"
            />
          </g>
        ))}

        {/* Center Core Star */}
        <circle cx="150" cy="150" r="35" fill="url(#goldGradSide)" opacity="0.4" stroke="#FFD700" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="12" fill="#FFD700" />

        <defs>
          <linearGradient id="goldGradSide" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#AA771C" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

/* Center Backdrop Sunburst Mandala Ring directly behind photo card */
function CenterBackdropMandala() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] md:w-[680px] md:h-[680px] pointer-events-none z-0 opacity-45">
      <motion.svg
        animate={{ rotate: 360, scale: [0.95, 1.03, 0.95] }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        viewBox="0 0 400 400"
        className="w-full h-full text-[#D4AF37]"
      >
        <circle cx="200" cy="200" r="190" stroke="url(#centerGoldGrad)" strokeWidth="1.5" fill="none" strokeDasharray="4 8" />
        <circle cx="200" cy="200" r="170" stroke="#FFD700" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="200" cy="200" r="145" stroke="#D4AF37" strokeWidth="1.2" fill="none" />
        <circle cx="200" cy="200" r="120" stroke="#FFF1B0" strokeWidth="1" fill="none" opacity="0.7" />

        {/* Radiating Rays */}
        {Array.from({ length: 24 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 15} 200 200)`}>
            <line x1="200" y1="10" x2="200" y2="40" stroke="#FFD700" strokeWidth="1.5" opacity="0.8" />
            <polygon points="200,5 196,15 204,15" fill="#D4AF37" />
            <circle cx="200" cy="55" r="2.5" fill="#FFF1B0" />
          </g>
        ))}

        {/* Outer Lotus Petal Ring */}
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 22.5} 200 200)`}>
            <path
              d="M 200,40 Q 215,80 200,120 Q 185,80 200,40 Z"
              fill="url(#centerGoldGrad)"
              opacity="0.15"
              stroke="#D4AF37"
              strokeWidth="1"
            />
          </g>
        ))}

        <defs>
          <linearGradient id="centerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF1B0" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6421" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

/* Floating Animated Golden Sparkles in Surrounding Backdrop Space */
function FloatingBackdropSparkles() {
  const sparkles = [
    { left: "10%", top: "18%", size: 24, delay: 0, duration: 4 },
    { left: "86%", top: "15%", size: 28, delay: 1.2, duration: 4.5 },
    { left: "8%", top: "75%", size: 22, delay: 0.7, duration: 3.8 },
    { left: "88%", top: "78%", size: 26, delay: 1.8, duration: 4.2 },
    { left: "20%", top: "86%", size: 18, delay: 2.2, duration: 3.5 },
    { left: "80%", top: "88%", size: 20, delay: 0.4, duration: 5 },
    { left: "15%", top: "45%", size: 16, delay: 1.5, duration: 3.2 },
    { left: "84%", top: "42%", size: 18, delay: 2.7, duration: 4.8 },
    { left: "50%", top: "6%", size: 22, delay: 0.9, duration: 4.1 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-15 overflow-hidden">
      {sparkles.map((sp, idx) => (
        <motion.div
          key={idx}
          style={{ left: sp.left, top: sp.top }}
          initial={{ opacity: 0, scale: 0.5, y: 0 }}
          animate={{
            opacity: [0.2, 0.95, 0.2],
            scale: [0.7, 1.25, 0.7],
            y: [-12, 12, -12],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sp.duration,
            repeat: Infinity,
            delay: sp.delay,
            ease: "easeInOut",
          }}
          className="absolute text-[#FFD700] filter drop-shadow-[0_0_8px_rgba(255,215,0,0.85)]"
        >
          <svg width={sp.size} height={sp.size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

interface LightboxModalProps {
  activeLightboxIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

/* Lightbox Modal Rendered via React Portal directly into document.body */
function LightboxModalPortal({
  activeLightboxIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  const currentItem = GALLERY_ITEMS[activeLightboxIndex] || GALLERY_ITEMS[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[999999] bg-stone-950/94 backdrop-blur-xl flex flex-col justify-between items-center p-3 sm:p-6 overflow-hidden select-none"
      onClick={onClose}
    >
      {/* Animated Royal Backdrop SVGs Filling the Blank Space */}
      <RoyalCornerMandala position="tl" />
      <RoyalCornerMandala position="tr" />
      <RoyalCornerMandala position="bl" />
      <RoyalCornerMandala position="br" />

      <RoyalSideMandala side="left" />
      <RoyalSideMandala side="right" />

      <FloatingBackdropSparkles />

      {/* Top Bar: Close Button & Gold Crown Header */}
      <div className="w-full max-w-5xl flex items-center justify-between z-50 pt-2 px-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/60 text-amber-200 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-extrabold shadow-lg">
          <Crown className="w-3.5 h-3.5 text-[#FFD700] animate-pulse" />
          <span>ROYAL GALLERY PORTRAIT</span>
          <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
        </div>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#4C342F] via-[#3A2320] to-[#201311] border-2 border-[#D4AF37] flex items-center justify-center text-amber-100 backdrop-blur-md transition-all cursor-pointer shadow-2xl"
          title="Close Lightbox"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700]" />
        </motion.button>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.88 }}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="fixed left-2 sm:left-7 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/80 backdrop-blur-md border-2 border-[#D4AF37] text-[#FFD700] hover:bg-black transition-all flex items-center justify-center z-50 cursor-pointer shadow-[0_10px_30px_rgba(212,175,55,0.4)]"
      >
        <ChevronLeft className="w-7 h-7 sm:w-9 sm:h-9" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.88 }}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="fixed right-2 sm:right-7 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/80 backdrop-blur-md border-2 border-[#D4AF37] text-[#FFD700] hover:bg-black transition-all flex items-center justify-center z-50 cursor-pointer shadow-[0_10px_30px_rgba(212,175,55,0.4)]"
      >
        <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9" />
      </motion.button>

      {/* Center Pop-up Content Card */}
      <motion.div
        key={activeLightboxIndex}
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="my-auto max-w-4xl w-full flex flex-col items-center justify-center px-2 py-2 z-40 relative"
      >
        {/* Center Backdrop Sunburst Mandala Ring */}
        <CenterBackdropMandala />

        {/* Soft Golden Ambient Backdrop Aura */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.35)_0%,transparent_75%)] pointer-events-none blur-3xl z-0" />

        {/* Main Photo Card Container */}
        <div className="relative rounded-[28px] overflow-hidden border-2 border-[#D4AF37] shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_60px_rgba(212,175,55,0.45)] bg-stone-950 flex items-center justify-center group p-1.5 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] z-10">
          <div className="relative rounded-[22px] overflow-hidden bg-stone-950 flex items-center justify-center max-h-[62vh] sm:max-h-[72vh] w-auto">
            <img
              src={currentItem.src}
              alt={currentItem.caption}
              className="max-h-[62vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-[20px] block"
            />
            {/* Razor-Thin Gold Accent Rim Overlay */}
            <div className="absolute inset-3 rounded-[16px] border border-[#D4AF37]/35 pointer-events-none z-10" />
          </div>
        </div>

        {/* Caption & Photo Counter Bar */}
        <div className="mt-5 flex items-center justify-between gap-4 w-full max-w-2xl px-6 py-3.5 bg-gradient-to-r from-stone-950/90 via-[#3A2E2A]/90 to-stone-950/90 backdrop-blur-md rounded-full border border-[#D4AF37]/60 shadow-2xl z-10">
          <p className="text-xs sm:text-base font-extrabold tracking-wide text-[#FFF1B0] truncate">
            {currentItem.caption}
          </p>

          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#FFD700] px-3 py-1 rounded-full bg-black/50 border border-[#D4AF37]/40 shrink-0">
            {activeLightboxIndex + 1} / {GALLERY_ITEMS.length}
          </span>
        </div>
      </motion.div>

      {/* Footer Instructions */}
      <div className="pb-2 text-[9.5px] sm:text-xs uppercase tracking-[0.3em] text-amber-200/80 font-bold z-40 drop-shadow-md">
        TAP OUTSIDE OR ESC TO CLOSE PORTRAIT
      </div>
    </motion.div>,
    document.body
  );
}

export function GallerySection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [mobileDirection, setMobileDirection] = useState<number>(0);

  const [likesMap, setLikesMap] = useState<Record<string, number>>(() =>
    GALLERY_ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: item.likes }), {}),
  );
  const [userLiked, setUserLiked] = useState<Record<string, boolean>>({});

  // Lock body scroll & pause Lenis when Lightbox Pop-up is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      (window as any).lenis?.stop();
    } else {
      document.body.style.overflow = "";
      (window as any).lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      (window as any).lenis?.start();
    };
  }, [activeLightboxIndex]);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setUserLiked((prev) => {
      const currentlyLiked = prev[id];
      setLikesMap((likes) => ({
        ...likes,
        [id]: (likes[id] || 0) + (currentlyLiked ? -1 : 1),
      }));
      return { ...prev, [id]: !currentlyLiked };
    });
  };

  const prevMobileIndex = (mobileActiveIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
  const nextMobileIndex = (mobileActiveIndex + 1) % GALLERY_ITEMS.length;

  const handlePrevMobile = () => {
    setMobileDirection(-1);
    setMobileActiveIndex(prevMobileIndex);
  };

  const handleNextMobile = () => {
    setMobileDirection(1);
    setMobileActiveIndex(nextMobileIndex);
  };

  const handleSelectMobile = (index: number) => {
    setMobileDirection(index > mobileActiveIndex ? 1 : -1);
    setMobileActiveIndex(index);
  };

  return (
    <section className="mt-16 sm:mt-24 relative select-none w-full overflow-visible">
      {/* 1. HEADER (ROYAL PHOTO GALLERY & FEATHER ORNAMENT) */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] border-2 border-[#D4AF37] text-[#FFF1B0] text-xs sm:text-sm font-extrabold tracking-[0.35em] uppercase shadow-lg mb-3">
          <span>ROYAL PORTRAITS & MOMENTS</span>
        </div>

        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-[#3A2E2A] drop-shadow-[0_1.5px_3px_rgba(255,255,255,0.7)]">
          ROYAL PHOTO GALLERY
        </h2>

        <GoldOrnament />
      </div>

      {/* 2. DESKTOP & TABLET WIDE SPACIOUS 5-LAYER FLOATING GLASS STACK */}
      <div className="hidden sm:block relative w-full py-8 sm:py-14 overflow-visible">
        <div className="w-full mx-auto flex items-center justify-center relative min-h-[580px] md:min-h-[660px]">
          {/* Ambient Radial Golden Glow behind center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,215,130,0.4)_0%,transparent_70%)] pointer-events-none blur-3xl" />

          {/* PANEL 1: Far Left Edge Panel */}
          <motion.div
            animate={{ y: [-14, 10, -14], x: [4, -8, 4], rotate: [-3, 2, -3] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[1%] md:left-[2%] top-[30%] w-32 md:w-48 h-60 md:h-72 z-1 hidden md:block"
          >
            <GlassPhotoCard
              src={sangeetPhoto}
              caption="Palace Interior"
              onClick={() => setActiveLightboxIndex(5)}
            />
          </motion.div>

          {/* PANEL 2: Second Left Frosted Glass Card ("The Royal traditions") */}
          <motion.div
            animate={{ y: [12, -16, 12], x: [-6, 8, -6], rotate: [2, -4, 2] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[5%] sm:left-[6%] md:left-[7%] top-[22%] w-44 sm:w-56 md:w-60 h-72 sm:h-84 z-2"
          >
            <GlassPhotoCard
              src={sangeetPhoto}
              caption="Royal Traditions"
              badgeText="The Royal traditions"
              onClick={() => setActiveLightboxIndex(4)}
            />
          </motion.div>

          {/* PANEL 3: Indian Wedding Group */}
          <motion.div
            animate={{ y: [-8, 14, -8], x: [8, -4, 8], rotate: [-2, 3, -2] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[15%] sm:left-[16%] md:left-[17%] top-[10%] w-56 sm:w-72 md:w-76 h-84 sm:h-96 md:h-[440px] z-3"
          >
            <GlassPhotoCard
              src={brideFamilyPhoto}
              caption="Indian Wedding Group"
              onClick={() => setActiveLightboxIndex(1)}
            />
          </motion.div>

          {/* PANEL 4: MAIN CENTER HERO CARD */}
          <motion.div
            animate={{ y: [-16, 8, -16], x: [-4, 6, -4], rotate: [0, 2, -1, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 w-64 sm:w-80 md:w-88 h-[420px] sm:h-[510px] md:h-[530px]"
          >
            <GlassPhotoCard
              isHero
              src={couplePhoto}
              caption="Arjun & Ananya"
              onClick={() => setActiveLightboxIndex(0)}
            />
          </motion.div>

          {/* PANEL 5: BOTTOM OVERLAPPING BOUQUET CARD */}
          <motion.div
            animate={{ y: [10, -12, 10], x: [7, -7, 7], rotate: [3, -3, 3] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[2%] sm:bottom-[4%] left-[50%] -translate-x-1/2 w-44 sm:w-56 md:w-64 h-44 sm:h-56 md:h-64 z-30"
          >
            <GlassPhotoCard
              src={bouquetPhoto}
              caption="Floral Bouquet"
              onClick={() => setActiveLightboxIndex(2)}
            />
          </motion.div>

          {/* PANEL 6: Fourth Right - Haldi Ceremony */}
          <motion.div
            animate={{ y: [-12, 12, -12], x: [-8, 5, -8], rotate: [-3, 4, -3] }}
            transition={{ duration: 8.1, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[15%] sm:right-[16%] md:right-[17%] top-[12%] w-56 sm:w-72 md:w-76 h-84 sm:h-96 md:h-[440px] z-3"
          >
            <GlassPhotoCard
              src={haldiPhoto}
              caption="Haldi Ceremony"
              onClick={() => setActiveLightboxIndex(3)}
            />
          </motion.div>

          {/* PANEL 7: Fifth Right - Bride Outdoor Portrait */}
          <motion.div
            animate={{ y: [14, -10, 14], x: [5, -6, 5], rotate: [4, -2, 4] }}
            transition={{ duration: 6.1, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[5%] sm:right-[6%] md:right-[7%] top-[20%] w-44 sm:w-56 md:w-60 h-72 sm:h-84 z-2"
          >
            <GlassPhotoCard
              src={couplePhoto}
              caption="Bride Outdoor Portrait"
              onClick={() => setActiveLightboxIndex(4)}
            />
          </motion.div>

          {/* PANEL 8: Far Right Edge Panel */}
          <motion.div
            animate={{ y: [-10, 16, -10], x: [-7, 7, -7], rotate: [-2, 3, -2] }}
            transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[1%] md:right-[2%] top-[30%] w-32 md:w-48 h-60 md:h-72 z-1 hidden md:block"
          >
            <GlassPhotoCard
              src={venuePhoto}
              caption="Palace Sanctuary"
              onClick={() => setActiveLightboxIndex(5)}
            />
          </motion.div>
        </div>
      </div>

      {/* 3. MOBILE SCREEN 3D LAYERED COVERFLOW CAROUSEL (< 640px) WITH ANIMATED ARROWS & POP-UP LIGHTBOX */}
      <div className="block sm:hidden my-8 px-2 overflow-visible">
        <div className="relative w-full h-[430px] flex items-center justify-center overflow-visible">
          {/* Ambient Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[radial-gradient(circle,rgba(255,215,130,0.5)_0%,transparent_70%)] pointer-events-none blur-xl" />

          {/* LEFT PEEKING CARD */}
          <motion.div
            key={`prev-${prevMobileIndex}`}
            initial={{ opacity: 0.75, x: -10, scale: 0.78 }}
            animate={{ opacity: 0.85, x: 0, scale: 0.8, y: [6, -6, 6], rotate: [-3, -1, -3] }}
            transition={{
              scale: { duration: 0.35 },
              opacity: { duration: 0.3 },
              y: { duration: 2.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
              rotate: { duration: 2.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
            }}
            onClick={() => setActiveLightboxIndex(prevMobileIndex)}
            className="absolute left-[1%] xs:left-[2%] top-[12%] w-48 xs:w-52 h-[320px] xs:h-[340px] z-10 cursor-pointer"
          >
            <GlassPhotoCard
              src={GALLERY_ITEMS[prevMobileIndex]?.src || couplePhoto}
              caption={GALLERY_ITEMS[prevMobileIndex]?.caption || "Royal Memory"}
              onClick={() => setActiveLightboxIndex(prevMobileIndex)}
            />
          </motion.div>

          {/* CENTER HERO ACTIVE CARD WITH POP-UP LIGHTBOX ON TAP */}
          <AnimatePresence custom={mobileDirection} mode="popLayout">
            <motion.div
              key={`curr-${mobileActiveIndex}`}
              custom={mobileDirection}
              variants={{
                initial: (dir: number) => ({
                  opacity: 0,
                  scale: 0.85,
                  x: dir > 0 ? 90 : dir < 0 ? -90 : 0,
                  rotateY: dir > 0 ? 25 : dir < 0 ? -25 : 0,
                  filter: "blur(6px)",
                }),
                animate: {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  rotateY: 0,
                  filter: "blur(0px)",
                  y: [-8, 8, -8],
                },
                exit: (dir: number) => ({
                  opacity: 0,
                  scale: 0.85,
                  x: dir > 0 ? -90 : dir < 0 ? 90 : 0,
                  rotateY: dir > 0 ? -25 : dir < 0 ? 25 : 0,
                  filter: "blur(6px)",
                }),
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 320, damping: 26 },
                scale: { duration: 0.35 },
                opacity: { duration: 0.25 },
                rotateY: { duration: 0.35 },
                filter: { duration: 0.2 },
                y: { duration: 3.0, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
              }}
              className="relative z-20 w-64 h-[395px]"
            >
              <GlassPhotoCard
                isHero
                src={GALLERY_ITEMS[mobileActiveIndex]?.src || couplePhoto}
                caption={GALLERY_ITEMS[mobileActiveIndex]?.caption || "Royal Memory"}
                onClick={() => setActiveLightboxIndex(mobileActiveIndex)}
              />
            </motion.div>
          </AnimatePresence>

          {/* RIGHT PEEKING CARD */}
          <motion.div
            key={`next-${nextMobileIndex}`}
            initial={{ opacity: 0.75, x: 10, scale: 0.78 }}
            animate={{ opacity: 0.85, x: 0, scale: 0.8, y: [-6, 6, -6], rotate: [3, 1, 3] }}
            transition={{
              scale: { duration: 0.35 },
              opacity: { duration: 0.3 },
              y: { duration: 3.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
              rotate: { duration: 3.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
            }}
            onClick={() => setActiveLightboxIndex(nextMobileIndex)}
            className="absolute right-[1%] xs:right-[2%] top-[12%] w-48 xs:w-52 h-[320px] xs:h-[340px] z-10 cursor-pointer"
          >
            <GlassPhotoCard
              src={GALLERY_ITEMS[nextMobileIndex]?.src || couplePhoto}
              caption={GALLERY_ITEMS[nextMobileIndex]?.caption || "Royal Memory"}
              onClick={() => setActiveLightboxIndex(nextMobileIndex)}
            />
          </motion.div>

          {/* Touch Navigation Buttons with Micro-Animations */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            onClick={handlePrevMobile}
            className="absolute left-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_14px_rgba(0,0,0,0.25)] border border-amber-200 flex items-center justify-center text-[#4C342F] z-30 cursor-pointer active:bg-amber-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[#AA771C]" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            onClick={handleNextMobile}
            className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-[0_4px_14px_rgba(0,0,0,0.25)] border border-amber-200 flex items-center justify-center text-[#4C342F] z-30 cursor-pointer active:bg-amber-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-[#AA771C]" />
          </motion.button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {GALLERY_ITEMS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectMobile(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                mobileActiveIndex === idx ? "bg-[#AA771C] w-7 shadow-md" : "bg-[#D4C3B5] w-2.5"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 4. LIGHTBOX POP-UP VIEW MODAL RENDERED VIA PORTAL TO BODY */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <LightboxModalPortal
            activeLightboxIndex={activeLightboxIndex}
            onClose={() => setActiveLightboxIndex(null)}
            onPrev={() =>
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : 0,
              )
            }
            onNext={() =>
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % GALLERY_ITEMS.length : 0,
              )
            }
          />
        )}
      </AnimatePresence>
    </section>
  );
}

