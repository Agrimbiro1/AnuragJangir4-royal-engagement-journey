import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Sparkles, ChevronRight, Users, Award, X } from "lucide-react";
import groomFamilyPhoto from "../assets/groom_family.png";
import brideFamilyPhoto from "../assets/bride_family.png";
import couplePhoto from "../assets/couple.jpg";
import haldiPhoto from "../assets/haldi.png";
import sangeetPhoto from "../assets/sangeet.png";
import fatherGroomPhoto from "../assets/father_groom.png";
import motherGroomPhoto from "../assets/mother_groom.png";
import fatherBridePhoto from "../assets/father_bride.png";
import dressProposalPastel from "../assets/dress_proposal_pastel.png";
import dressRingEmerald from "../assets/dress_ring_emerald.png";

interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  avatar: string;
  description: string;
  quote: string;
  roleBadge: string;
  bgGradient: string;
}

const GROOM_FAMILY_MEMBERS: FamilyMember[] = [
  {
    id: "g1",
    name: "Vikram Singh",
    relation: "Father of the Groom",
    roleBadge: "FATHER OF THE GROOM",
    avatar: fatherGroomPhoto,
    description: "",
    quote: "",
    bgGradient: "bg-gradient-to-br from-[#FFFDF9] via-[#FFF8EB] to-[#F7EACE] border-[#D4AF37]/80",
  },
  {
    id: "g2",
    name: "Gayatri Singh",
    relation: "Mother of the Groom",
    roleBadge: "MOTHER OF THE GROOM",
    avatar: motherGroomPhoto,
    description: "",
    quote: "",
    bgGradient: "bg-gradient-to-br from-[#FFFDF9] via-[#FAF0E6] to-[#F2DED0] border-[#C5A059]/80",
  },
  {
    id: "g3",
    name: "Devraj Singh",
    relation: "Brother of the Groom",
    roleBadge: "BROTHER OF THE GROOM",
    avatar: dressRingEmerald,
    description: "",
    quote: "",
    bgGradient: "bg-gradient-to-br from-[#FFFDF9] via-[#F1F7F3] to-[#DFEFE3] border-[#556B2F]/60",
  },
  {
    id: "g4",
    name: "Aditi Singh",
    relation: "Sister of the Groom",
    roleBadge: "SISTER OF THE GROOM",
    avatar: haldiPhoto,
    description: "",
    quote: "",
    bgGradient: "bg-gradient-to-br from-[#FFFDF9] via-[#FCF2F4] to-[#F6E1E5] border-[#E8C5C8]/90",
  },
];

const BRIDE_FAMILY_MEMBERS: FamilyMember[] = [
  {
    id: "b1",
    name: "Harshvardhan Sharma",
    relation: "Father of the Bride",
    roleBadge: "FATHER OF THE BRIDE",
    avatar: fatherBridePhoto,
    description: "",
    quote: "",
    bgGradient: "bg-gradient-to-br from-[#FFFDF9] via-[#F8F2EB] to-[#EFE2D2] border-[#D4AF37]/80",
  },
  {
    id: "b2",
    name: "Sunita Sharma",
    relation: "Mother of the Bride",
    roleBadge: "MOTHER OF THE BRIDE",
    avatar: brideFamilyPhoto,
    description: "",
    quote: "",
    bgGradient: "bg-gradient-to-br from-[#FFFDF9] via-[#FDF6E5] to-[#F7EACC] border-[#AA771C]/70",
  },
  {
    id: "b3",
    name: "Isha Sharma",
    relation: "Sister of the Bride",
    roleBadge: "SISTER OF THE BRIDE",
    avatar: dressProposalPastel,
    description: "",
    quote: "",
    bgGradient: "bg-gradient-to-br from-[#FFFDF9] via-[#F4F1F9] to-[#E7E0F2] border-[#B8A6D9]/80",
  },
  {
    id: "b4",
    name: "Karan Sharma",
    relation: "Brother of the Bride",
    roleBadge: "BROTHER OF THE BRIDE",
    avatar: sangeetPhoto,
    description: "",
    quote: "",
    bgGradient: "bg-gradient-to-br from-[#FFFDF9] via-[#EEF4FB] to-[#DBE7F7] border-[#1E3A8A]/50",
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

export function FamilySection() {
  const [activeModal, setActiveModal] = useState<"groom" | "bride" | null>(null);

  // Lock body & html scroll & pause Lenis when Family Modal is active
  React.useEffect(() => {
    if (activeModal) {
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
  }, [activeModal]);

  const activeMembers = activeModal === "groom" ? GROOM_FAMILY_MEMBERS : BRIDE_FAMILY_MEMBERS;
  const activeTitle = activeModal === "groom" ? "Arjun's Family" : "Ananya's Family";

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
          HERITAGE & LINEAGE
        </p>

        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-[#4C342F]">
          FAMILY REPRESENTATIVES & BLESSINGS
        </h2>
      </motion.div>

      {/* 2. DUAL FAMILY REPRESENTATIVE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* GROOM FAMILY REPRESENTATIVE CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
          className="rounded-[36px] p-7 sm:p-10 border-2 border-[#D4AF37]/60 shadow-[0_16px_40px_rgba(76,52,47,0.09)] bg-gradient-to-b from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8] flex flex-col items-center justify-between text-center relative overflow-hidden group transform-gpu will-change-transform"
        >
          {/* Razor-Thin Gold Accent Rim */}
          <div className="absolute inset-3 rounded-[28px] border border-[#C5A059]/30 pointer-events-none group-hover:border-[#D4AF37]/60 transition-colors duration-300" />

          {/* Top Crest Badge */}
          <div className="z-10 inline-flex items-center justify-center px-4.5 py-1.5 rounded-full bg-gradient-to-r from-[#FFFDF9] via-[#F5EBE1] to-[#FFFDF9] border border-[#D4AF37]/60 text-[#4C342F] font-extrabold text-[10.5px] sm:text-xs uppercase tracking-[0.2em] shadow-xs mb-5">
            <span>GROOM'S FAMILY REPRESENTATIVES</span>
          </div>

          {/* Circular Main Portrait Frame */}
          <div
            onClick={() => setActiveModal("groom")}
            className="z-10 relative w-38 h-38 sm:w-48 sm:h-48 rounded-full p-2 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] border-2 border-[#D4AF37] shadow-lg mb-4 cursor-pointer group-hover:scale-105 transition-transform duration-500"
          >
            <div className="w-full h-full rounded-full overflow-hidden shadow-inner border border-[#C5A059]">
              <img
                src={groomFamilyPhoto}
                alt="Arjun's Family"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Mini Representative Avatars Preview Row */}
          <div className="z-10 flex items-center justify-center -space-x-3 mb-4">
            {GROOM_FAMILY_MEMBERS.map((m) => (
              <div
                key={m.id}
                title={`${m.name} (${m.relation})`}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#D4AF37] bg-white overflow-hidden shadow-sm transform hover:scale-115 hover:z-20 transition-transform cursor-pointer"
                onClick={() => setActiveModal("groom")}
              >
                <img src={m.avatar} alt={m.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Card Title & Bio */}
          <div className="z-10 space-y-2.5 w-full">
            <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#4C342F]">
              Arjun's Family
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4D46] leading-relaxed max-w-sm mx-auto font-normal">
              Represented by Vikram Singh, Gayatri Singh, Devraj Singh & Aditi Singh. Carrying forward a proud family legacy of honor, integrity, and warmth.
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={() => setActiveModal("groom")}
            className="z-10 mt-7 w-full py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] text-[#FFF1B0] font-extrabold text-xs uppercase tracking-[0.25em] border-2 border-[#D4AF37] shadow-md hover:bg-[#3A2320] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>VIEW FAMILY</span>
            <ChevronRight className="w-4 h-4 text-[#FFD700]" />
          </button>
        </motion.div>

        {/* BRIDE FAMILY REPRESENTATIVE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
          className="rounded-[36px] p-7 sm:p-10 border-2 border-[#D4AF37]/60 shadow-[0_16px_40px_rgba(76,52,47,0.09)] bg-gradient-to-b from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8] flex flex-col items-center justify-between text-center relative overflow-hidden group transform-gpu will-change-transform"
        >
          {/* Razor-Thin Gold Accent Rim */}
          <div className="absolute inset-3 rounded-[28px] border border-[#C5A059]/30 pointer-events-none group-hover:border-[#D4AF37]/60 transition-colors duration-300" />

          {/* Top Crest Badge */}
          <div className="z-10 inline-flex items-center justify-center px-4.5 py-1.5 rounded-full bg-gradient-to-r from-[#FFFDF9] via-[#F5EBE1] to-[#FFFDF9] border border-[#D4AF37]/60 text-[#4C342F] font-extrabold text-[10.5px] sm:text-xs uppercase tracking-[0.2em] shadow-xs mb-5">
            <span>BRIDE'S FAMILY REPRESENTATIVES</span>
          </div>

          {/* Circular Main Portrait Frame */}
          <div
            onClick={() => setActiveModal("bride")}
            className="z-10 relative w-38 h-38 sm:w-48 sm:h-48 rounded-full p-2 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] border-2 border-[#D4AF37] shadow-lg mb-4 cursor-pointer group-hover:scale-105 transition-transform duration-500"
          >
            <div className="w-full h-full rounded-full overflow-hidden shadow-inner border border-[#C5A059]">
              <img
                src={brideFamilyPhoto}
                alt="Ananya's Family"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Mini Representative Avatars Preview Row */}
          <div className="z-10 flex items-center justify-center -space-x-3 mb-4">
            {BRIDE_FAMILY_MEMBERS.map((m) => (
              <div
                key={m.id}
                title={`${m.name} (${m.relation})`}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#D4AF37] bg-white overflow-hidden shadow-sm transform hover:scale-115 hover:z-20 transition-transform cursor-pointer"
                onClick={() => setActiveModal("bride")}
              >
                <img src={m.avatar} alt={m.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Card Title & Bio */}
          <div className="z-10 space-y-2.5 w-full">
            <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#4C342F]">
              Ananya's Family
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4D46] leading-relaxed max-w-sm mx-auto font-normal">
              Represented by Harshvardhan Sharma, Sunita Sharma, Isha & Karan Sharma. Renowned for academic excellence, poise, and everlasting warmth.
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={() => setActiveModal("bride")}
            className="z-10 mt-7 w-full py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] text-[#FFF1B0] font-extrabold text-xs uppercase tracking-[0.25em] border-2 border-[#D4AF37] shadow-md hover:bg-[#3A2320] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>VIEW FAMILY</span>
            <ChevronRight className="w-4 h-4 text-[#FFD700]" />
          </button>
        </motion.div>
      </div>

      {/* 3. REDESIGNED INTERACTIVE POP-UP MODAL */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="fixed inset-0 z-[999999] bg-black/80 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.92, y: 25 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 25 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="bg-[#FDFBF7] max-w-4xl w-full rounded-[36px] shadow-2xl border-3 border-[#D4AF37] relative z-[9999999] max-h-[92vh] overflow-hidden flex flex-col"
            >
              {/* Top Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37] flex items-center justify-center text-[#FFF1B0] hover:bg-[#AA771C] hover:text-white transition-all cursor-pointer shadow-md"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Scrollable Inner Content Container */}
              <div data-lenis-prevent className="p-5 sm:p-8 md:p-10 overflow-y-auto flex-1 space-y-6">
                {/* Pop-up Title & Header */}
                <div className="text-center pb-2 border-b border-[#C5A059]/30">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold block mb-1">
                    FAMILY MEMBERS
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#4C342F]">
                    {activeTitle}
                  </h3>
                </div>

                {/* REDESIGNED LUXURY GRID OF INDIVIDUAL REPRESENTATIVE CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {activeMembers.map((member, i) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className={`rounded-[32px] p-6 sm:p-7 pb-7 border-2 ${member.bgGradient} shadow-[0_15px_35px_rgba(76,52,47,0.08)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.25)] transition-all flex flex-col items-center text-center relative overflow-hidden group space-y-4`}
                    >
                      {/* 1. SINGLE FAMILY MEMBER CIRCULAR GOLD PORTRAIT FRAME */}
                      <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-full p-2 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] border-2 border-[#D4AF37] shadow-xl group-hover:scale-105 transition-transform duration-500">
                        <div className="w-full h-full rounded-full overflow-hidden border border-[#C5A059] bg-stone-100 shadow-inner">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      {/* 2. FAMILY MEMBER NAME (DIRECTLY BELOW PICTURE) */}
                      <div className="relative z-10 space-y-2 w-full text-center">
                        <h4 className="font-[family-name:var(--font-heading)] font-extrabold text-[#3A2E2A] text-xl sm:text-2xl leading-tight">
                          {member.name}
                        </h4>

                        {/* 3. FAMILY MEMBER RELATION (DIRECTLY BELOW FAMILY MEMBER NAME) */}
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100/90 via-amber-50 to-amber-100/90 border border-[#C5A059]/50 text-xs font-extrabold text-[#AA771C] uppercase tracking-widest shadow-xs">
                          {member.relation}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Close Action Button */}
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] text-[#FFF1B0] font-extrabold text-xs uppercase tracking-[0.25em] border-2 border-[#D4AF37] shadow-lg hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer"
                >
                  Close Window
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
