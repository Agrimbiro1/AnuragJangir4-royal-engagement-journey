import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Send, Eye, X } from "lucide-react";
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

// 10 ANGLED CORNER-OVERLAPPING FLOATING CARDS WITH 2 CARDS OVERLAPPING THE CENTER INPUT CARD
const OVERLAPPING_ANGLED_CARDS: FloatingBlessingCard[] = [
  // --- LEFT SIDE CLUSTER ---
  {
    id: "fb1",
    author: "Lord Brandon",
    relation: "The Royal Court",
    message: "May your sacred union bring eternal joy, grace, and noble fortune to both families!",
    photo: couplePhoto,
    likes: 54,
    posClass: "top-[1%] left-[2%] lg:left-[4%]",
    baseRotate: -8,
    floatY: [-24, 24, -24],
    floatDuration: 2.7,
    zIndex: 10,
  },
  {
    id: "fb3",
    author: "The Royal Court",
    relation: "Lords & Ladies",
    message: "A royal toast to eternal love, endless laughter, and brilliant celebrations!",
    photo: venuePhoto,
    likes: 42,
    posClass: "top-[34%] left-[1%] lg:left-[3%]",
    baseRotate: 6,
    floatY: [24, -24, 24],
    floatDuration: 3.1,
    zIndex: 15,
  },
  {
    id: "fb5",
    author: "Sebastian & Clara",
    relation: "Best Man & Sister",
    message: "Wishing you a lifetime of grand adventures, late night laughter, and pure happiness!",
    photo: sangeetPhoto,
    likes: 63,
    posClass: "bottom-[1%] left-[2%] lg:left-[4%]",
    baseRotate: -7,
    floatY: [-24, 24, -24],
    floatDuration: 2.5,
    zIndex: 10,
  },
  // INNER LEFT CARD OVERLAPPING TOP-LEFT CORNER OF CENTRAL INPUT CARD
  {
    id: "fb7",
    author: "Sir Edward & Lady Eleanor",
    relation: "Grandparents",
    message: "Pillars of heritage and tradition, passing down golden values of love and honor.",
    photo: haldiPhoto,
    likes: 67,
    posClass: "top-[12%] left-[22%] lg:left-[24%]",
    baseRotate: -6,
    floatY: [20, -20, 20],
    floatDuration: 2.9,
    zIndex: 40, // Overlaps Central Input Card (z-30)
  },
  {
    id: "fb9",
    author: "Lady Beatrice",
    relation: "Family Elder",
    message: "Sacred light and divine grace guide your steps as you walk as one.",
    photo: brideFamilyPhoto,
    likes: 59,
    posClass: "bottom-[14%] left-[20%] lg:left-[22%]",
    baseRotate: 7,
    floatY: [-20, 20, -20],
    floatDuration: 2.8,
    zIndex: 20,
  },

  // --- RIGHT SIDE CLUSTER ---
  {
    id: "fb2",
    author: "Grandmother Beatrice",
    relation: "Bride's Family",
    message: "All my love and sacred heirloom blessings to Arjun & Ananya on this magical day.",
    photo: couplePhoto,
    likes: 89,
    posClass: "top-[1%] right-[2%] lg:right-[4%]",
    baseRotate: 9,
    floatY: [24, -24, 24],
    floatDuration: 3.2,
    zIndex: 10,
  },
  {
    id: "fb4",
    author: "Lord Richard & Lady Margaret",
    relation: "Groom's Parents",
    message: "Watching you both walk together hand in hand fills our hearts with infinite pride.",
    photo: sangeetPhoto,
    likes: 76,
    posClass: "top-[34%] right-[1%] lg:right-[3%]",
    baseRotate: -7,
    floatY: [-24, 24, -24],
    floatDuration: 2.8,
    zIndex: 15,
  },
  {
    id: "fb6",
    author: "Princess Sophia",
    relation: "Sister of Groom",
    message: "So thrilled for my brother and my new sister! Welcome to the family Victoria!",
    photo: brideFamilyPhoto,
    likes: 58,
    posClass: "bottom-[1%] right-[2%] lg:right-[4%]",
    baseRotate: 8,
    floatY: [24, -24, 24],
    floatDuration: 3.0,
    zIndex: 10,
  },
  // INNER RIGHT CARD OVERLAPPING TOP-RIGHT CORNER OF CENTRAL INPUT CARD
  {
    id: "fb8",
    author: "Isabella & William",
    relation: "Sister & Brother",
    message: "You two are made for each other! Let the royal celebrations begin!",
    photo: ringsPhoto,
    likes: 71,
    posClass: "top-[12%] right-[22%] lg:right-[24%]",
    baseRotate: 6,
    floatY: [-20, 20, -20],
    floatDuration: 3.0,
    zIndex: 40, // Overlaps Central Input Card (z-30)
  },
  {
    id: "fb10",
    author: "Lord Arthur",
    relation: "Uncle of Bride",
    message: "May your hearts beat as one through every chapter of life.",
    photo: groomFamilyPhoto,
    likes: 64,
    posClass: "bottom-[14%] right-[20%] lg:right-[22%]",
    baseRotate: -5,
    floatY: [20, -20, 20],
    floatDuration: 2.6,
    zIndex: 20,
  },
];

// Gold Feather Graphic SVG
function FeatherOrnament() {
  return (
    <svg
      viewBox="0 0 100 24"
      className="w-20 h-6 mx-auto text-[#C5A059] opacity-85 my-2"
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

export function BlessingsSection() {
  const templateGuestName = "Lord Brandon & Honored Family";
  const [blessingText, setBlessingText] = useState("");
  const [floatingCards, setFloatingCards] = useState<FloatingBlessingCard[]>(OVERLAPPING_ANGLED_CARDS);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [userLiked, setUserLiked] = useState<Record<string, boolean>>({});
  const [showAllModal, setShowAllModal] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleSubmitBlessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blessingText.trim()) return;

    const newCard: FloatingBlessingCard = {
      id: "fb-" + Date.now(),
      author: templateGuestName,
      relation: "Honored Guest",
      message: blessingText.trim(),
      photo: couplePhoto,
      likes: 1,
      posClass: "top-[15%] left-[2%]",
      baseRotate: -4,
      floatY: [-20, 20, -20],
      floatDuration: 3,
      zIndex: 25,
    };

    setFloatingCards([newCard, ...floatingCards]);
    setBlessingText("");
  };

  const toggleLike = (id: string) => {
    setUserLiked((prev) => {
      const isLiked = prev[id];
      setFloatingCards((list) =>
        list.map((c) => (c.id === id ? { ...c, likes: c.likes + (isLiked ? -1 : 1) } : c))
      );
      return { ...prev, [id]: !isLiked };
    });
  };

  return (
    <section className="mt-16 sm:mt-24 relative select-none w-full max-w-[1450px] mx-auto px-2 sm:px-4 overflow-x-hidden">
      
      {/* BACKGROUND WARM RADIAL GLOW AURA */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,225,160,0.45)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      {/* 1. SECTION HEADER */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-4">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.2em] uppercase text-[#4C342F] drop-shadow-sm">
          BLESSINGS & WISHES
        </h2>

        <FeatherOrnament />
      </div>

      {/* 2. DESKTOP STAGE WITH CORNER OVERLAPPING ANGLED FLOATING CARDS */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        className="relative w-full min-h-[680px] sm:min-h-[720px] md:min-h-[740px] hidden sm:flex items-center justify-center py-4 overflow-visible"
      >
        {/* 10 ANGLED FLOATING CARDS (SOME OVERLAPPING CENTER CARD AT z-40) */}
        {floatingCards.map((card) => (
          <motion.div
            key={card.id}
            animate={{
              y: card.floatY,
              x: mousePos.x * 18,
              rotate: [card.baseRotate - 2, card.baseRotate + 2, card.baseRotate - 2],
            }}
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
              x: { type: "spring", stiffness: 80, damping: 20 },
            }}
            style={{ zIndex: card.zIndex }}
            className={`absolute ${card.posClass} w-56 sm:w-60 md:w-64 h-[225px] p-3 rounded-[22px] bg-white/60 backdrop-blur-xl border-2 border-white/90 shadow-[0_20px_40px_rgba(76,52,47,0.18)] hover:scale-108 hover:z-50 hover:bg-white/80 transition-all duration-300 group flex flex-col justify-between`}
          >
            <div className="absolute inset-0 rounded-[22px] bg-gradient-to-tr from-white/50 via-transparent to-white/20 pointer-events-none" />

            <div>
              {/* COMPACT PHOTO CONTAINER */}
              <div className="w-full h-22 rounded-xl overflow-hidden mb-1.5 border border-white shadow-inner">
                <img src={card.photo} alt={card.author} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-[#4C342F] text-[11px] sm:text-xs tracking-wide truncate max-w-[120px]">
                  {card.author}
                </h4>
                <span className="text-[8px] uppercase tracking-wider text-[#8B5E5A] font-semibold px-2 py-0.5 rounded-full bg-white/80 border border-[#D4C3B5]">
                  {card.relation}
                </span>
              </div>

              <p className="text-[10.5px] text-[#5C4D46] font-normal leading-tight line-clamp-2 italic">
                "{card.message}"
              </p>
            </div>

            <div className="flex justify-end pt-1 border-t border-white/40">
              <button
                onClick={() => toggleLike(card.id)}
                className="flex items-center gap-1 text-[9.5px] text-[#4C342F] bg-white/90 px-2 py-0.5 rounded-full border border-white shadow-xs hover:bg-white transition-colors cursor-pointer"
              >
                <Heart
                  className={`w-3 h-3 ${
                    userLiked[card.id] ? "fill-red-500 text-red-500" : "text-[#4C342F]"
                  }`}
                />
                <span>{card.likes}</span>
              </button>
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
          className="relative z-30 w-full max-w-md p-6 sm:p-7 rounded-[32px] bg-white/65 backdrop-blur-2xl border-2 border-[color:var(--color-gold)]/60 shadow-[0_30px_70px_rgba(76,52,47,0.22)] text-center flex flex-col items-center"
        >
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-white/50 via-transparent to-white/20 pointer-events-none" />

          <form onSubmit={handleSubmitBlessing} className="w-full space-y-3.5 relative z-10">
            
            <div className="text-center">
              <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-1">
                ROYAL GUESTBOOK & BLESSINGS
              </p>
            </div>

            <div className="py-2 px-4 rounded-2xl bg-white/70 border border-[#D4AF37]/40 shadow-xs">
              <p className="font-[family-name:var(--font-script)] text-3xl sm:text-4xl text-[#AA771C] leading-snug drop-shadow-xs">
                Dear '{templateGuestName}',
              </p>
            </div>

            <div>
              <textarea
                required
                rows={3}
                value={blessingText}
                onChange={(e) => setBlessingText(e.target.value)}
                placeholder="SHARE YOUR BLESSING..."
                className="w-full rounded-2xl p-3.5 bg-white/90 border border-[#D4C3B5] text-xs sm:text-sm text-[#3A2E2A] placeholder-stone-500 outline-none focus:border-[#C5A059] transition-colors resize-none tracking-wider font-light uppercase shadow-inner"
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
                  <span>SUBMIT</span>
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

      {/* 4. MOBILE SCREEN LAYOUT */}
      <div className="sm:hidden space-y-6 py-4">
        <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl border-2 border-[#D4AF37] shadow-xl text-center">
          <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-1">
            ROYAL GUESTBOOK & BLESSINGS
          </p>

          <p className="font-[family-name:var(--font-script)] text-2xl text-[#AA771C] my-2">
            Dear '{templateGuestName}',
          </p>

          <textarea
            required
            rows={3}
            value={blessingText}
            onChange={(e) => setBlessingText(e.target.value)}
            placeholder="SHARE YOUR BLESSING..."
            className="w-full rounded-xl p-3 bg-white border border-[#D4C3B5] text-xs text-[#3A2E2A] placeholder-stone-500 outline-none mb-3"
          />

          <div className="flex flex-col gap-2">
            <button
              onClick={handleSubmitBlessing}
              className="w-full py-3 rounded-full bg-[#4C342F] text-amber-50 font-bold text-xs uppercase tracking-widest border border-[#D4AF37]"
            >
              SUBMIT BLESSING
            </button>
            <button
              onClick={() => setShowAllModal(true)}
              className="w-full py-2.5 rounded-full bg-white border border-[#D4AF37] text-[#4C342F] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4 text-[#AA771C]" />
              <span>VIEW ALL BLESSINGS</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {floatingCards.map((card) => (
            <div key={card.id} className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-[#D4C3B5] shadow-md">
              <img src={card.photo} alt={card.author} className="w-full h-32 object-cover rounded-xl mb-2" />
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-[#4C342F] text-xs">{card.author}</h4>
                <span className="text-[9px] uppercase font-bold text-[#8B5E5A] px-2 py-0.5 rounded-full bg-white border border-[#D4C3B5]">
                  {card.relation}
                </span>
              </div>
              <p className="text-xs text-[#5C4D46] italic">"{card.message}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. VIEW ALL BLESSINGS POP-UP MODAL */}
      <AnimatePresence>
        {showAllModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAllModal(false)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md p-4 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream max-w-3xl w-full rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowAllModal(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#4C342F] text-white flex items-center justify-center hover:bg-[#3A2320] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-widest text-[#AA771C] font-bold">
                  ROYAL GUESTBOOK SHOWCASE
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#4C342F]">
                  All Guest Blessings ({floatingCards.length})
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {floatingCards.map((card) => (
                  <div key={card.id} className="soft-card rounded-2xl p-4 border border-[#D4AF37]/30">
                    <div className="w-full h-36 rounded-xl overflow-hidden mb-3 border border-white">
                      <img src={card.photo} alt={card.author} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-bold text-[#4C342F] text-sm">{card.author}</h4>
                      <span className="text-[10px] font-bold text-[#8B5E5A] px-2 py-0.5 rounded-full bg-white border border-[#D4C3B5]">
                        {card.relation}
                      </span>
                    </div>
                    <p className="text-xs text-[#5C4D46] italic">"{card.message}"</p>
                    <div className="mt-2 flex justify-end">
                      <button
                        onClick={() => toggleLike(card.id)}
                        className="flex items-center gap-1 text-xs text-[#4C342F] bg-white px-2.5 py-1 rounded-full border border-gray-200"
                      >
                        <Heart className={`w-3.5 h-3.5 ${userLiked[card.id] ? "fill-red-500 text-red-500" : "text-[#4C342F]"}`} />
                        <span>{card.likes}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowAllModal(false)}
                className="mt-6 w-full py-3.5 rounded-xl bg-[#4C342F] text-amber-50 text-xs font-bold uppercase tracking-widest hover:bg-[#3A2320] transition-colors shadow-md cursor-pointer"
              >
                Close Guestbook Modal
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
