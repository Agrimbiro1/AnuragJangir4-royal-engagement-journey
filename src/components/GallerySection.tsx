import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
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

// Gold Feather Graphic SVG
function FeatherOrnament() {
  return (
    <svg
      viewBox="0 0 100 24"
      className="w-20 h-6 mx-auto text-[#C5A059] opacity-80 my-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M10 12 C 35 4, 65 4, 90 12 C 65 20, 35 20, 10 12 Z" />
      <path d="M20 12 L 80 12" />
      <path d="M30 12 L 24 8 M 45 12 L 39 8 M 60 12 L 54 8 M 75 12 L 69 8" />
      <path d="M30 12 L 24 16 M 45 12 L 39 16 M 60 12 L 54 16 M 75 12 L 69 16" />
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
      className={`relative w-full h-full rounded-[28px] p-2.5 sm:p-3 bg-white/70 backdrop-blur-md border-2 border-white/90 transition-all duration-300 cursor-pointer group flex flex-col justify-between transform-gpu ${
        isHero
          ? "shadow-[0_20px_50px_rgba(76,52,47,0.22),0_0_35px_rgba(255,215,130,0.45)] ring-2 ring-white/90 hover:scale-102"
          : "shadow-[0_12px_32px_rgba(76,52,47,0.14)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.28)] hover:-translate-y-1.5"
      }`}
    >
      {/* Reflected Glass Shine Overlay */}
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-white/40 via-transparent to-white/20 pointer-events-none" />

      <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-stone-200/50">
        <img
          src={src}
          alt={caption}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 p-3 flex flex-col justify-end text-white">
          <p className="text-xs font-bold leading-tight">{caption}</p>
          <span className="text-[9px] uppercase tracking-wider text-amber-200 mt-1 flex items-center gap-1 font-semibold">
            <Camera className="w-3 h-3 text-[#C5A059]" /> TAP TO VIEW
          </span>
        </div>
      </div>

      {badgeText && (
        <div className="pt-2 px-1 text-[#4C342F]">
          <p className="text-[11px] font-bold leading-tight">{badgeText}</p>
          <span className="text-[9px] uppercase tracking-wider font-semibold text-[#8B5E5A] flex items-center gap-1 mt-0.5">
            <Camera className="w-3 h-3 text-[#C5A059]" /> TAP TO VIEW
          </span>
        </div>
      )}
    </div>
  );
}

export function GallerySection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  const [likesMap, setLikesMap] = useState<Record<string, number>>(() =>
    GALLERY_ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: item.likes }), {}),
  );
  const [userLiked, setUserLiked] = useState<Record<string, boolean>>({});

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

  return (
    <section className="mt-16 sm:mt-24 relative select-none w-full overflow-visible">
      {/* 1. HEADER (ROYAL PHOTO GALLERY & FEATHER ORNAMENT) */}
      <div className="text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.25em] uppercase text-[#4C342F]">
          ROYAL PHOTO GALLERY
        </h2>

        <FeatherOrnament />
      </div>

      {/* 2. DESKTOP & TABLET WIDE SPACIOUS 5-LAYER FLOATING GLASS STACK */}
      <div className="hidden sm:block relative w-full py-8 sm:py-14 overflow-visible">
        <div className="w-full mx-auto flex items-center justify-center relative min-h-[580px] md:min-h-[660px]">
          {/* Ambient Radial Golden Glow behind center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,215,130,0.4)_0%,transparent_70%)] pointer-events-none blur-3xl" />

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
            className="absolute bottom-[-4%] sm:bottom-[0%] left-[50%] -translate-x-1/2 w-48 sm:w-60 md:w-68 h-48 sm:h-60 md:h-68 z-30"
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

      {/* 3. MOBILE SCREEN 3D LAYERED COVERFLOW CAROUSEL (< 640px) WITH FLOATING ANIMATION */}
      <div className="block sm:hidden my-8 px-2 overflow-visible">
        <div className="relative w-full h-[430px] flex items-center justify-center overflow-visible">
          {/* Ambient Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[radial-gradient(circle,rgba(255,215,130,0.5)_0%,transparent_70%)] pointer-events-none blur-xl" />

          {/* LEFT PEEKING CARD */}
          <motion.div
            key={`prev-${prevMobileIndex}`}
            initial={{ opacity: 0.85, x: 0, scale: 0.8 }}
            animate={{ opacity: 0.85, x: 0, scale: 0.8, y: [6, -6, 6], rotate: [-3, -1, -3] }}
            transition={{
              x: { duration: 0.35 },
              scale: { duration: 0.35 },
              y: { duration: 2.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
              rotate: { duration: 2.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
            }}
            onClick={() => setMobileActiveIndex(prevMobileIndex)}
            className="absolute left-[1%] xs:left-[2%] top-[12%] w-48 xs:w-52 h-[320px] xs:h-[340px] z-10 cursor-pointer"
          >
            <GlassPhotoCard
              src={GALLERY_ITEMS[prevMobileIndex]?.src || couplePhoto}
              caption={GALLERY_ITEMS[prevMobileIndex]?.caption || "Royal Memory"}
              onClick={() => setMobileActiveIndex(prevMobileIndex)}
            />
          </motion.div>

          {/* CENTER HERO ACTIVE CARD */}
          <motion.div
            key={`curr-${mobileActiveIndex}`}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1, y: [-8, 8, -8] }}
            transition={{
              scale: { duration: 0.35 },
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

          {/* RIGHT PEEKING CARD */}
          <motion.div
            key={`next-${nextMobileIndex}`}
            initial={{ opacity: 0.85, x: 0, scale: 0.8 }}
            animate={{ opacity: 0.85, x: 0, scale: 0.8, y: [-6, 6, -6], rotate: [3, 1, 3] }}
            transition={{
              x: { duration: 0.35 },
              scale: { duration: 0.35 },
              y: { duration: 3.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
              rotate: { duration: 3.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
            }}
            onClick={() => setMobileActiveIndex(nextMobileIndex)}
            className="absolute right-[1%] xs:right-[2%] top-[12%] w-48 xs:w-52 h-[320px] xs:h-[340px] z-10 cursor-pointer"
          >
            <GlassPhotoCard
              src={GALLERY_ITEMS[nextMobileIndex]?.src || couplePhoto}
              caption={GALLERY_ITEMS[nextMobileIndex]?.caption || "Royal Memory"}
              onClick={() => setMobileActiveIndex(nextMobileIndex)}
            />
          </motion.div>

          {/* Touch Navigation Buttons */}
          <button
            onClick={() => setMobileActiveIndex(prevMobileIndex)}
            className="absolute left-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-[#4C342F] z-30 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileActiveIndex(nextMobileIndex)}
            className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-[#4C342F] z-30 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {GALLERY_ITEMS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setMobileActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                mobileActiveIndex === idx ? "bg-[#AA771C] w-6" : "bg-[#D4C3B5] w-2"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 4. LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-amber-300 transition-colors cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((prev) =>
                  prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : 0,
                );
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-300 transition-colors p-2 bg-black/40 rounded-full cursor-pointer"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((prev) =>
                  prev !== null ? (prev + 1) % GALLERY_ITEMS.length : 0,
                );
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-300 transition-colors p-2 bg-black/40 rounded-full cursor-pointer"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={activeLightboxIndex}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[80vh] flex flex-col items-center"
            >
              <img
                src={GALLERY_ITEMS[activeLightboxIndex]?.src || couplePhoto}
                alt={GALLERY_ITEMS[activeLightboxIndex]?.caption || "Royal Gallery"}
                className="max-h-[70vh] w-auto object-contain rounded-2xl border-2 border-[color:var(--color-gold)] shadow-2xl"
              />
              <div className="mt-4 flex items-center justify-between w-full max-w-xl text-white px-2">
                <p className="text-sm font-medium">{GALLERY_ITEMS[activeLightboxIndex]?.caption}</p>
                <button
                  onClick={(e) => toggleLike(GALLERY_ITEMS[activeLightboxIndex]?.id || "g1", e)}
                  className="flex items-center gap-1.5 text-sm bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-md hover:bg-white/30 transition-colors cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      userLiked[GALLERY_ITEMS[activeLightboxIndex]?.id || "g1"]
                        ? "fill-red-500 text-red-500"
                        : "text-white"
                    }`}
                  />
                  <span>{likesMap[GALLERY_ITEMS[activeLightboxIndex]?.id || "g1"] || 0}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
