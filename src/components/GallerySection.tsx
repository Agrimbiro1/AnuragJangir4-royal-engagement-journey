import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, ChevronLeft, ChevronRight, Camera, Sparkles } from "lucide-react";
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

/* Lightbox Modal Rendered via React Portal directly into document.body */
function LightboxModalPortal({
  activeLightboxIndex,
  onClose,
  onPrev,
  onNext,
  likesMap,
  userLiked,
  toggleLike,
}: {
  activeLightboxIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  likesMap: Record<string, number>;
  userLiked: Record<string, boolean>;
  toggleLike: (id: string, e: React.MouseEvent) => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === "undefined") return null;

  const currentItem = GALLERY_ITEMS[activeLightboxIndex] || GALLERY_ITEMS[0];

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl p-3 sm:p-6 flex flex-col items-center justify-between select-none"
    >
      {/* Top Bar: Title & Close Button */}
      <div className="w-full max-w-5xl flex items-center justify-between pt-2 px-2 z-50">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD700] animate-pulse" />
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-amber-200 uppercase">
            {activeLightboxIndex + 1} OF {GALLERY_ITEMS.length} · {currentItem.category}
          </span>
        </div>

        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={onClose}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/35 border border-white/40 flex items-center justify-center text-white backdrop-blur-md transition-all cursor-pointer shadow-2xl"
        >
          <X className="w-6 h-6 sm:w-7 sm:h-7" />
        </motion.button>
      </div>

      {/* Left Nav Arrow */}
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/75 border border-[#D4AF37]/60 text-[#FFD700] hover:bg-black/90 transition-all flex items-center justify-center z-50 cursor-pointer shadow-2xl"
      >
        <ChevronLeft className="w-7 h-7 sm:w-9 sm:h-9" />
      </motion.button>

      {/* Right Nav Arrow */}
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/75 border border-[#D4AF37]/60 text-[#FFD700] hover:bg-black/90 transition-all flex items-center justify-center z-50 cursor-pointer shadow-2xl"
      >
        <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9" />
      </motion.button>

      {/* Center Pop-up Content Card */}
      <motion.div
        key={activeLightboxIndex}
        initial={{ scale: 0.88, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 15 }}
        transition={{ type: "spring", stiffness: 320, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="my-auto max-w-3xl w-full flex flex-col items-center justify-center px-2 py-4 z-40"
      >
        {/* Main Photo Container */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(212,175,55,0.4)] bg-stone-950 flex items-center justify-center">
          <img
            src={currentItem.src}
            alt={currentItem.caption}
            className="max-h-[60vh] sm:max-h-[70vh] w-auto max-w-full object-contain rounded-xl block"
          />
        </div>

        {/* Caption & Like Button Row */}
        <div className="mt-4 flex items-center justify-between w-full max-w-2xl text-white px-4 py-3 bg-black/70 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
          <p className="text-xs sm:text-base font-bold tracking-wide text-amber-100 pr-2">
            {currentItem.caption}
          </p>
          <button
            onClick={(e) => toggleLike(currentItem.id, e)}
            className="flex items-center gap-2 text-xs sm:text-sm bg-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-md hover:bg-white/30 transition-all cursor-pointer border border-white/30 shrink-0 active:scale-95"
          >
            <Heart
              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                userLiked[currentItem.id] ? "fill-red-500 text-red-500" : "text-white"
              }`}
            />
            <span className="font-bold">{likesMap[currentItem.id] || 0}</span>
          </button>
        </div>
      </motion.div>

      {/* Footer Info */}
      <div className="pb-3 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-amber-200/80 font-bold z-40">
        TAP OUTSIDE OR × TO CLOSE
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

  // Lock body scroll when Lightbox Pop-up is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
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
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [-4, 2, -4] }}
            transition={{
              duration: 3.3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
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
            animate={{ y: [13, -13, 13], rotate: [3, -2, 3] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
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
            initial={{ y: 0 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            animate={{ y: [-14, 14, -14], rotate: [-2, 2, -2] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
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
            initial={{ scale: 1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 3.0,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
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
            initial={{ y: 0 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            animate={{ y: [16, -16, 16], rotate: [3, -3, 3] }}
            transition={{
              duration: 2.9,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
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
            initial={{ y: 0 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            animate={{ y: [-14, 14, -14], rotate: [2, -2, 2] }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
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
            animate={{ y: [12, -12, 12], rotate: [-3, 2, -3] }}
            transition={{
              duration: 2.7,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
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
            animate={{ y: [-15, 15, -15], rotate: [4, -2, 4] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
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
              initial={(dir: number) => ({
                opacity: 0,
                scale: 0.85,
                x: dir > 0 ? 90 : dir < 0 ? -90 : 0,
                rotateY: dir > 0 ? 25 : dir < 0 ? -25 : 0,
                filter: "blur(6px)",
              })}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                rotateY: 0,
                filter: "blur(0px)",
                y: [-8, 8, -8],
              }}
              exit={(dir: number) => ({
                opacity: 0,
                scale: 0.85,
                x: dir > 0 ? -90 : dir < 0 ? 90 : 0,
                rotateY: dir > 0 ? -25 : dir < 0 ? 25 : 0,
                filter: "blur(6px)",
              })}
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
            likesMap={likesMap}
            userLiked={userLiked}
            toggleLike={toggleLike}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

