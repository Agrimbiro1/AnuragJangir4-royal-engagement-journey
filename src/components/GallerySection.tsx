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
      className="fixed inset-0 z-[999999] bg-stone-950/92 backdrop-blur-xl flex flex-col justify-between items-center p-3 sm:p-6 overflow-hidden select-none"
      onClick={onClose}
    >
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
        {/* Soft Golden Ambient Backdrop Aura */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.35)_0%,transparent_75%)] pointer-events-none blur-3xl" />

        {/* Main Photo Card Container */}
        <div className="relative rounded-[28px] overflow-hidden border-2 border-[#D4AF37] shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_60px_rgba(212,175,55,0.45)] bg-stone-950 flex items-center justify-center group p-1.5 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C]">
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
        <p className="font-[family-name:var(--font-heading)] text-xs sm:text-sm uppercase tracking-[0.35em] text-[#C5A059] font-bold mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          ROYAL PORTRAITS & MOMENTS
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        </p>

        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-[#4C342F]">
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
          <div className="absolute left-[1%] md:left-[2%] top-[30%] w-32 md:w-48 h-60 md:h-72 z-1 hidden md:block animate-float-slow">
            <GlassPhotoCard
              src={sangeetPhoto}
              caption="Palace Interior"
              onClick={() => setActiveLightboxIndex(5)}
            />
          </div>

          {/* PANEL 2: Second Left Frosted Glass Card ("The Royal traditions") */}
          <div className="absolute left-[5%] sm:left-[6%] md:left-[7%] top-[22%] w-44 sm:w-56 md:w-60 h-72 sm:h-84 z-2 animate-float-reverse">
            <GlassPhotoCard
              src={sangeetPhoto}
              caption="Royal Traditions"
              badgeText="The Royal traditions"
              onClick={() => setActiveLightboxIndex(4)}
            />
          </div>

          {/* PANEL 3: Indian Wedding Group */}
          <div className="absolute left-[15%] sm:left-[16%] md:left-[17%] top-[10%] w-56 sm:w-72 md:w-76 h-84 sm:h-96 md:h-[440px] z-3 animate-float-slow">
            <GlassPhotoCard
              src={brideFamilyPhoto}
              caption="Indian Wedding Group"
              onClick={() => setActiveLightboxIndex(1)}
            />
          </div>

          {/* PANEL 4: MAIN CENTER HERO CARD */}
          <div className="relative z-20 w-64 sm:w-80 md:w-88 h-[420px] sm:h-[510px] md:h-[530px] animate-float-slow">
            <GlassPhotoCard
              isHero
              src={couplePhoto}
              caption="Arjun & Ananya"
              onClick={() => setActiveLightboxIndex(0)}
            />
          </div>

          {/* PANEL 5: BOTTOM OVERLAPPING BOUQUET CARD */}
          <div className="absolute bottom-[2%] sm:bottom-[4%] left-[50%] -translate-x-1/2 w-44 sm:w-56 md:w-64 h-44 sm:h-56 md:h-64 z-30 animate-float-reverse">
            <GlassPhotoCard
              src={bouquetPhoto}
              caption="Floral Bouquet"
              onClick={() => setActiveLightboxIndex(2)}
            />
          </div>

          {/* PANEL 6: Fourth Right - Haldi Ceremony */}
          <div className="absolute right-[15%] sm:right-[16%] md:right-[17%] top-[12%] w-56 sm:w-72 md:w-76 h-84 sm:h-96 md:h-[440px] z-3 animate-float-slow">
            <GlassPhotoCard
              src={haldiPhoto}
              caption="Haldi Ceremony"
              onClick={() => setActiveLightboxIndex(3)}
            />
          </div>

          {/* PANEL 7: Fifth Right - Bride Outdoor Portrait */}
          <div className="absolute right-[5%] sm:right-[6%] md:right-[7%] top-[20%] w-44 sm:w-56 md:w-60 h-72 sm:h-84 z-2 animate-float-reverse">
            <GlassPhotoCard
              src={couplePhoto}
              caption="Bride Outdoor Portrait"
              onClick={() => setActiveLightboxIndex(4)}
            />
          </div>

          {/* PANEL 8: Far Right Edge Panel */}
          <div className="absolute right-[1%] md:right-[2%] top-[30%] w-32 md:w-48 h-60 md:h-72 z-1 hidden md:block animate-float-slow">
            <GlassPhotoCard
              src={venuePhoto}
              caption="Palace Sanctuary"
              onClick={() => setActiveLightboxIndex(5)}
            />
          </div>
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

