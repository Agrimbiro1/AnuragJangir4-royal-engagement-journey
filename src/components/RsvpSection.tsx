import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Crown, CheckCircle2, X } from "lucide-react";
import royalSealPhoto from "../assets/royal_seal.png";

// Line-Art Engraved Bottom Border SVG
function EngravedBottomBorder() {
  return (
    <svg
      viewBox="0 0 700 90"
      className="w-full max-w-3xl h-20 sm:h-24 my-4 pointer-events-none select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="rsvpGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#AA771C" stopOpacity="0.2" />
          <stop offset="20%" stopColor="#D4AF37" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#FFF1B0" stopOpacity="1" />
          <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="60%" stopColor="#FFF1B0" stopOpacity="1" />
          <stop offset="80%" stopColor="#D4AF37" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#AA771C" stopOpacity="0.2" />
        </linearGradient>

        <filter id="rsvpGlow" x="-20%" y="-50%" width="140%" height="200%">
          <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#FFD700" floodOpacity="0.5" />
        </filter>
      </defs>

      <g stroke="url(#rsvpGoldGrad)" strokeWidth="1.5" filter="url(#rsvpGlow)">
        {/* Main Sweeping S-Curve Filigree Vines */}
        <path d="M 350 35 C 270 10, 190 55, 70 30 C 40 20, 20 35, 10 30" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 350 35 C 430 10, 510 55, 630 30 C 660 20, 680 35, 690 30" strokeWidth="1.8" strokeLinecap="round" />

        {/* Secondary Inner Accent Vines */}
        <path d="M 350 42 C 290 25, 220 50, 120 35" strokeWidth="1" strokeDasharray="4 3" opacity="0.8" />
        <path d="M 350 42 C 410 25, 480 50, 580 35" strokeWidth="1" strokeDasharray="4 3" opacity="0.8" />

        {/* Lotus Petal Flourishes (Left & Right) */}
        <path d="M 230 26 Q 210 12, 190 26 Q 210 38, 230 26 Z" fill="#D4AF37" fillOpacity="0.2" strokeWidth="1" />
        <path d="M 470 26 Q 490 12, 510 26 Q 490 38, 470 26 Z" fill="#D4AF37" fillOpacity="0.2" strokeWidth="1" />

        {/* Bottom Sweeping Arch Line with Pearl Beads */}
        <path d="M 80 65 Q 350 90, 620 65" strokeWidth="1.2" strokeDasharray="2 8" strokeLinecap="round" />

        {/* Decorative Pearl Dots along Vines */}
        <circle cx="190" cy="26" r="2.5" fill="#FFD700" stroke="#AA771C" strokeWidth="0.5" />
        <circle cx="510" cy="26" r="2.5" fill="#FFD700" stroke="#AA771C" strokeWidth="0.5" />
        <circle cx="120" cy="35" r="2" fill="#D4AF37" />
        <circle cx="580" cy="35" r="2" fill="#D4AF37" />
        <circle cx="40" cy="25" r="1.5" fill="#D4AF37" />
        <circle cx="660" cy="25" r="1.5" fill="#D4AF37" />
      </g>

      {/* CENTRAL ROYAL CREST MEDALLION (X=350, Y=35) */}
      <g transform="translate(350, 35)" filter="url(#rsvpGlow)">
        {/* Outer Gold Diamond */}
        <polygon points="0,-18 14,0 0,18 -14,0" fill="#FFFDF9" stroke="url(#rsvpGoldGrad)" strokeWidth="1.6" />
        {/* Inner Gold Diamond Core */}
        <polygon points="0,-10 8,0 0,10 -8,0" fill="#D4AF37" fillOpacity="0.3" stroke="#AA771C" strokeWidth="1" />
        {/* Center Sparkle Point */}
        <circle cx="0" cy="0" r="2.5" fill="#FFD700" />
        {/* 4-Point Star Rays */}
        <path d="M 0,-24 L 0,24 M -24,0 L 24,0" stroke="url(#rsvpGoldGrad)" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Gold Filigree Line Flourish SVG
function GoldFlourish() {
  return (
    <svg
      viewBox="0 0 240 30"
      className="w-44 sm:w-56 h-6 mx-auto my-2 pointer-events-none select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="flourishGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#AA771C" stopOpacity="0.3" />
          <stop offset="30%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFF1B0" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA771C" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <g stroke="url(#flourishGrad)" strokeWidth="1.4" strokeLinecap="round">
        {/* S-Curves Left */}
        <path d="M 120 15 Q 90 2, 50 15 Q 20 28, 0 15" />
        <path d="M 100 15 Q 80 8, 60 15" strokeWidth="0.9" opacity="0.7" />
        {/* S-Curves Right */}
        <path d="M 120 15 Q 150 2, 190 15 Q 220 28, 240 15" />
        <path d="M 140 15 Q 160 8, 180 15" strokeWidth="0.9" opacity="0.7" />
        {/* Center Diamond Jewel */}
        <polygon points="120,8 125,15 120,22 115,15" fill="#FFFDF9" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="120" cy="15" r="1.8" fill="#FFD700" />
      </g>
    </svg>
  );
}

// Interactive Royal Wax Seal Crest
function RoyalWaxSeal({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto cursor-pointer group transform hover:scale-105 transition-transform duration-300 select-none"
      title="Click to Accept Royal Invitation"
    >
      {/* Outer Golden Glow */}
      <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#AA771C] via-[#FFD700] to-[#D4AF37] blur-md opacity-60 group-hover:opacity-95 transition-opacity" />

      {/* Royal Seal Image Frame */}
      <div className="relative w-full h-full rounded-full p-0 bg-transparent shadow-[0_15px_40px_rgba(120,75,40,0.35)] overflow-hidden">
        <img
          src={royalSealPhoto}
          alt="Arjun & Ananya Royal Seal"
          className="w-full h-full object-contain rounded-full scale-100 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

export function RsvpSection() {
  const [accepted, setAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setShowModal(true);

    confetti({
      particleCount: 160,
      spread: 120,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#8B5E5A", "#E8D5CC", "#FFD700", "#AA771C"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 120,
        angle: 60,
        spread: 85,
        origin: { x: 0.1, y: 0.6 },
        colors: ["#D4AF37", "#AA771C", "#FFFFFF", "#E8D5CC"],
      });
    }, 200);

    setTimeout(() => {
      confetti({
        particleCount: 120,
        angle: 120,
        spread: 85,
        origin: { x: 0.9, y: 0.6 },
        colors: ["#8B5E5A", "#D4AF37", "#FFD700", "#AA771C"],
      });
    }, 400);

    setTimeout(() => {
      confetti({
        particleCount: 180,
        spread: 140,
        origin: { y: 0.3 },
        colors: ["#D4AF37", "#F3E5AB", "#AA771C"],
        shapes: ["star", "circle"],
      });
    }, 650);
  };

  return (
    <section className="my-16 sm:my-28 py-10 sm:py-16 relative select-none w-full max-w-5xl mx-auto px-4 overflow-hidden">
      {/* Soft Ambient Gold Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,225,160,0.35)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        {/* 1. ROYAL WAX SEAL EMBLEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <RoyalWaxSeal onClick={handleAccept} />
        </motion.div>

        {/* 2. SECTION HEADER & FORMAL INVITATION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <p className="font-[family-name:var(--font-heading)] text-xs sm:text-sm uppercase tracking-[0.35em] text-[#C5A059] font-bold flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            ROYAL INVITATION & RSVP
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-[#4C342F]">
            JOIN US IN CELEBRATING
          </h2>

          <GoldFlourish />

          <p className="text-sm sm:text-base text-[#4C342F] max-w-2xl mx-auto leading-relaxed font-serif">
            Their Highnesses <strong>Maharaja Vikram Singh & Maharani Gayatri Devi</strong> and{" "}
            <strong>Dr. Harshvardhan Sharma & Sunita Sharma</strong> request the honor of your presence
            at the grand engagement celebration of their children <strong>Arjun & Ananya</strong>.
          </p>

          <div className="pt-2 inline-block">
            <span className="px-4 py-1.5 rounded-full bg-[#EBDBC9] border border-[#C5A059]/60 text-[#4C342F] font-bold text-xs uppercase tracking-widest shadow-xs">
              Kindly Respond by August 15, 2026
            </span>
          </div>
        </motion.div>

        {/* 3. PURE LUXURY TYPOGRAPHIC ACCEPT INVITATION BUTTON (NO ICONS / SVGs) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="pt-3 flex flex-col items-center"
        >
          <button
            onClick={handleAccept}
            className={`relative px-12 sm:px-18 py-4.5 sm:py-5 rounded-full font-[family-name:var(--font-heading)] font-bold text-xs sm:text-sm uppercase tracking-[0.35em] sm:tracking-[0.4em] transition-all duration-300 cursor-pointer border-2 select-none overflow-hidden group ${
              accepted
                ? "bg-[#2A4D3A] text-[#FFF1B0] border-[#D4AF37] shadow-[0_12px_35px_rgba(42,77,58,0.3)]"
                : "bg-[#4C342F] text-[#FFF1B0] border-[#D4AF37] shadow-[0_12px_35px_rgba(76,52,47,0.25)] hover:bg-[#3A2320] hover:shadow-[0_16px_45px_rgba(212,175,55,0.35)] hover:border-[#FFD700]"
            }`}
          >
            {/* Fine Inset Gold Accent Line */}
            <div className="absolute inset-1 rounded-full border border-[#D4AF37]/40 pointer-events-none group-hover:border-[#FFD700]/70 transition-colors" />

            <span className="relative z-10">
              {accepted ? "ROYAL INVITATION ACCEPTED" : "ACCEPT INVITATION"}
            </span>
          </button>

          <p className="text-[9.5px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-bold mt-4 drop-shadow-xs">
            {accepted ? "Your presence has been gracefully registered" : "Tap to confirm your royal attendance"}
          </p>
        </motion.div>

        {/* 5. ENGRAVED BOTTOM BORDER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full flex justify-center pt-2"
        >
          <EngravedBottomBorder />
        </motion.div>
      </div>

      {/* ROYAL THANK YOU POP-UP MODAL */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md"
            >
              {/* Gold Foil Outer Bevel Wrapper */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="p-1 sm:p-1.5 rounded-[44px] bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] shadow-[0_30px_90px_rgba(212,175,55,0.4)] max-w-lg w-full relative select-none"
              >
                {/* Inner Card Container */}
                <div className="rounded-[40px] p-7 sm:p-11 bg-gradient-to-b from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8] flex flex-col items-center text-center relative overflow-hidden">
                  {/* Close X Button */}
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[#D4AF37] bg-[#FFFDF9] text-[#4C342F] flex items-center justify-center hover:bg-[#F5EBE1] hover:scale-110 transition-all cursor-pointer z-20 shadow-sm"
                  >
                    <X className="w-5 h-5 text-[#AA771C]" />
                  </button>

                  {/* Corner Filigree Inner Rim */}
                  <div className="absolute inset-3 rounded-[32px] border-2 border-[#D4AF37]/35 pointer-events-none" />

                  {/* Ambient Golden Center Aura */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[radial-gradient(circle,rgba(255,220,150,0.5)_0%,transparent_75%)] pointer-events-none blur-2xl" />

                  {/* Royal Wax Seal Top Medallion */}
                  <div className="z-10 relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-0 bg-transparent shadow-[0_10px_30px_rgba(212,175,55,0.35)] mb-4 overflow-hidden">
                    <img src={royalSealPhoto} alt="Royal Seal" className="w-full h-full object-contain rounded-full scale-100" />
                  </div>

                  <p className="z-10 font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.35em] text-[#C5A059] font-bold mb-1.5">
                    ROYAL CONFIRMATION & BLESSINGS
                  </p>

                  <h3 className="z-10 font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#4C342F] uppercase tracking-wide mb-2">
                    THANK YOU FOR ACCEPTING!
                  </h3>

                  <div className="z-10">
                    <GoldFlourish />
                  </div>

                  <p className="z-10 text-sm sm:text-base text-[#4C342F] leading-relaxed font-serif my-3.5 max-w-sm">
                    Your gracious presence fills our hearts with immense joy and honor. We look forward to celebrating this royal milestone alongside you.
                  </p>

                  {/* Event & Date Badge */}
                  <div className="z-10 my-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#FFFDF9] via-[#F5EBE1] to-[#FFFDF9] border border-[#D4AF37]/70 text-[#4C342F] text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] shadow-xs">
                    SATURDAY, NOVEMBER 28, 2026 • THE CITY PALACE
                  </div>

                  {/* Close Action Button */}
                  <button
                    onClick={() => setShowModal(false)}
                    className="z-10 mt-6 px-10 sm:px-12 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] text-[#FFF1B0] font-extrabold text-xs uppercase tracking-[0.3em] border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(76,52,47,0.3)] hover:brightness-110 transition-all cursor-pointer"
                  >
                    EXPLORE CELEBRATION JOURNEY
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
