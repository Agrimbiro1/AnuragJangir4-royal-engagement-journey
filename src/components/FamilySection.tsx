import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Sparkles, X, ChevronRight, Star, Heart } from "lucide-react";
import groomFamilyPhoto from "../assets/groom_family.png";
import brideFamilyPhoto from "../assets/bride_family.png";
import couplePhoto from "../assets/couple.jpg";
import haldiPhoto from "../assets/haldi.png";
import sangeetPhoto from "../assets/sangeet.png";

interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  avatar: string;
  description: string;
  quote: string;
}

const GROOM_FAMILY_MEMBERS: FamilyMember[] = [
  {
    id: "g1",
    name: "Maharaja Vikram Singh",
    relation: "Father of the Groom",
    avatar: groomFamilyPhoto,
    description: "Guiding Arjun with wisdom, strength, and noble values throughout his life.",
    quote: "Love is looking together in the same direction of honor & grace.",
  },
  {
    id: "g2",
    name: "Maharani Gayatri Devi",
    relation: "Mother of the Groom",
    avatar: groomFamilyPhoto,
    description: "The heart of the household, bestowing warmth, elegance, and maternal blessings.",
    quote: "May your bond grow stronger with each passing sunrise.",
  },
  {
    id: "g3",
    name: "Kunwar Devraj Singh",
    relation: "Brother & Best Man",
    avatar: couplePhoto,
    description:
      "Arjun's lifelong confidant, partner in adventure, and guardian of royal celebration.",
    quote: "Welcome to the family, Ananya! Our home is complete with you.",
  },
  {
    id: "g4",
    name: "Rajkumari Aditi",
    relation: "Sister of the Groom",
    avatar: couplePhoto,
    description: "Spreading joy, laughter, and royal floral grace across all wedding festivities.",
    quote: "So thrilled for my brother Arjun and my new sister Ananya!",
  },
];

const BRIDE_FAMILY_MEMBERS: FamilyMember[] = [
  {
    id: "b1",
    name: "Dr. Harshvardhan Sharma",
    relation: "Father of the Bride",
    avatar: brideFamilyPhoto,
    description: "Nurturing Ananya's dreams with wisdom, academic pride, and unconditional love.",
    quote: "Seeing Ananya's smile bright beside Arjun fills our hearts with pride.",
  },
  {
    id: "b2",
    name: "Sunita Sharma",
    relation: "Mother of the Bride",
    avatar: brideFamilyPhoto,
    description: "Pillar of royal elegance and hospitality, filling every moment with warmth.",
    quote: "True love is a flower that blooms forever in the garden of the heart.",
  },
  {
    id: "b3",
    name: "Isha Sharma",
    relation: "Sister & Maid of Honor",
    avatar: haldiPhoto,
    description: "Ananya's soul sister, confidante, and master designer of royal wedding magic.",
    quote: "You two are made for each other. Let the celebrations begin!",
  },
  {
    id: "b4",
    name: "Karan Sharma",
    relation: "Brother of the Bride",
    avatar: sangeetPhoto,
    description: "The bride's protective brother and champion of high-energy celebration.",
    quote: "Cheers to Arjun & Ananya — the finest royal couple!",
  },
];

// Gold Line Ornament SVG
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

export function FamilySection() {
  const [activeModal, setActiveModal] = useState<"groom" | "bride" | null>(null);

  const activeMembers = activeModal === "groom" ? GROOM_FAMILY_MEMBERS : BRIDE_FAMILY_MEMBERS;
  const activeTitle = activeModal === "groom" ? "Arjun's Royal Lineage" : "Ananya's Royal Lineage";
  const activeBanner = activeModal === "groom" ? groomFamilyPhoto : brideFamilyPhoto;

  return (
    <section className="mt-20 sm:mt-28 py-10 relative select-none w-full max-w-6xl mx-auto px-4">
      {/* 1. SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <p className="font-[family-name:var(--font-heading)] text-xs sm:text-sm uppercase tracking-[0.35em] text-[#C5A059] font-bold mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          HERITAGE & LINEAGE
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        </p>

        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-[#4C342F]">
          ROYAL FAMILIES OF BRIDE & GROOM
        </h2>

        <GoldOrnament />
      </motion.div>

      {/* 2. DUAL FAMILY CARDS (GROOM CARD & BRIDE CARD) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* GROOM SECTION CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6 }}
          className="soft-card rounded-[38px] p-7 sm:p-10 border-2 border-[color:var(--color-gold)]/60 shadow-[0_30px_90px_rgba(212,175,55,0.2),0_10px_30px_rgba(120,80,60,0.06)] bg-gradient-to-b from-white via-[#FFFDF9] to-[#FBF6EE] flex flex-col items-center justify-between text-center relative overflow-hidden group"
        >
          {/* Radial Warm Glow */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-80 h-80 bg-[radial-gradient(circle,rgba(255,225,160,0.45)_0%,transparent_70%)] pointer-events-none blur-2xl" />

          {/* Top Badge */}
          <div className="z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBDBC9] border border-[#C5A059]/50 text-[#4C342F] font-bold text-xs uppercase tracking-widest shadow-xs mb-6">
            <Crown className="w-4 h-4 text-[#AA771C]" />
            <span>The Groom's Dynasty</span>
          </div>

          {/* Circular Portrait Frame */}
          <div
            onClick={() => setActiveModal("groom")}
            className="z-10 relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-gradient-to-tr from-[#D4AF37] via-white to-[#AA771C] border-2 border-[#C5A059] shadow-xl mb-5 cursor-pointer group-hover:scale-105 transition-transform duration-500"
          >
            <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
              <img
                src={groomFamilyPhoto}
                alt="Arjun's Family"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card Title & Bio */}
          <div className="z-10 space-y-3 w-full">
            <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#4C342F]">
              Arjun's Family
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4D46] leading-relaxed max-w-sm mx-auto font-normal">
              Son of Maharaja Vikram Singh & Maharani Gayatri Devi. Carrying forward a proud royal
              legacy of honor, integrity, and warmth across generations.
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={() => setActiveModal("groom")}
            className="z-10 mt-8 w-full py-3.5 sm:py-4 rounded-full bg-[#4C342F] text-amber-50 text-xs font-bold uppercase tracking-widest hover:bg-[#3A2320] transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 border border-[#D4AF37] cursor-pointer"
          >
            <span>Meet Groom's Family</span>
            <ChevronRight className="w-4 h-4 text-[#FFD700]" />
          </button>
        </motion.div>

        {/* BRIDE SECTION CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6 }}
          className="soft-card rounded-[38px] p-7 sm:p-10 border-2 border-[color:var(--color-gold)]/60 shadow-[0_30px_90px_rgba(212,175,55,0.2),0_10px_30px_rgba(120,80,60,0.06)] bg-gradient-to-b from-white via-[#FFFDF9] to-[#FBF6EE] flex flex-col items-center justify-between text-center relative overflow-hidden group"
        >
          {/* Radial Warm Glow */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-80 h-80 bg-[radial-gradient(circle,rgba(255,225,160,0.45)_0%,transparent_70%)] pointer-events-none blur-2xl" />

          {/* Top Badge */}
          <div className="z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBDBC9] border border-[#C5A059]/50 text-[#4C342F] font-bold text-xs uppercase tracking-widest shadow-xs mb-6">
            <Sparkles className="w-4 h-4 text-[#AA771C]" />
            <span>The Bride's Dynasty</span>
          </div>

          {/* Circular Portrait Frame */}
          <div
            onClick={() => setActiveModal("bride")}
            className="z-10 relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-gradient-to-tr from-[#D4AF37] via-white to-[#AA771C] border-2 border-[#C5A059] shadow-xl mb-5 cursor-pointer group-hover:scale-105 transition-transform duration-500"
          >
            <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
              <img
                src={brideFamilyPhoto}
                alt="Ananya's Family"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card Title & Bio */}
          <div className="z-10 space-y-3 w-full">
            <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#4C342F]">
              Ananya's Family
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4D46] leading-relaxed max-w-sm mx-auto font-normal">
              Daughter of Dr. Harshvardhan Sharma & Sunita Sharma. Renowned for academic excellence,
              royal poise, and everlasting warmth.
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={() => setActiveModal("bride")}
            className="z-10 mt-8 w-full py-3.5 sm:py-4 rounded-full bg-[#4C342F] text-amber-50 text-xs font-bold uppercase tracking-widest hover:bg-[#3A2320] transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 border border-[#D4AF37] cursor-pointer"
          >
            <span>Meet Bride's Family</span>
            <ChevronRight className="w-4 h-4 text-[#FFD700]" />
          </button>
        </motion.div>
      </div>

      {/* 3. INTERACTIVE POP-UP MODAL — rendered via Portal at document.body to escape overflow-hidden */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.92, y: 25 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 25 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FDFBF7] max-w-4xl w-full rounded-[36px] overflow-hidden shadow-2xl border-3 border-[#D4AF37] p-6 sm:p-8 md:p-10 relative max-h-[90vh] overflow-y-auto flex flex-col justify-between"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#4C342F] text-amber-100 flex items-center justify-center hover:bg-[#3A2320] transition-colors border border-[#D4AF37] shadow-md z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                {/* Pop-up Title & Header */}
                <div className="text-center mb-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold block mb-1">
                    FAMILY LINEAGE & BLESSINGS
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#4C342F]">
                    {activeTitle}
                  </h3>
                </div>

                {/* Pop-up Banner Image */}
                <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden mb-8 border-2 border-[#D4AF37]/50 shadow-lg">
                  <img
                    src={activeBanner}
                    alt={activeTitle}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                    <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-wider">
                      {activeModal === "groom" ? "Arjun's Family Crest" : "Ananya's Family Crest"}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-amber-200 font-semibold px-3 py-1 rounded-full bg-black/40 border border-white/30 backdrop-blur-sm">
                      4 Members
                    </span>
                  </div>
                </div>

                {/* GRID OF SMALL INDIVIDUAL FAMILY CARDS WITH PROFILE PICTURES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {activeMembers.map((member, i) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="soft-card rounded-3xl p-5 border-2 border-[#D4AF37]/40 bg-white shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Member Profile Avatar & Header */}
                        <div className="flex items-center gap-3.5 mb-3.5">
                          <div className="relative w-14 h-14 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-white to-[#AA771C] border border-[#C5A059] shadow-sm shrink-0">
                            <div className="w-full h-full rounded-full overflow-hidden">
                              <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          <div className="text-left">
                            <h4 className="font-bold text-[#4C342F] text-base leading-tight">
                              {member.name}
                            </h4>
                            <span className="inline-block mt-1 text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EBDBC9] text-[#4C342F] border border-[#C5A059]/40">
                              {member.relation}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-[#5C4D46] leading-relaxed mb-3">
                          {member.description}
                        </p>
                      </div>

                      {/* Personal Quote / Blessing */}
                      <div className="p-3 rounded-xl bg-[#FBF6EE] border border-[#E8DCCB] text-center">
                        <p className="font-[family-name:var(--font-script)] text-base sm:text-lg text-[#AA771C] italic leading-snug">
                          "{member.quote}"
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="mt-8 w-full py-3.5 rounded-full bg-[#4C342F] text-amber-50 text-xs font-bold uppercase tracking-widest hover:bg-[#3A2320] transition-colors border border-[#D4AF37] shadow-md cursor-pointer"
              >
                Close Window
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

