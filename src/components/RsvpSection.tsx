import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Crown, CheckCircle2 } from "lucide-react";
import royalSealPhoto from "../assets/royal_seal.jpg";

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
      <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-[#FFFDF9] to-[#AA771C] border-2 border-[#D4AF37] shadow-[0_15px_40px_rgba(120,75,40,0.35)] overflow-hidden">
        <img
          src={royalSealPhoto}
          alt="Arjun & Ananya Royal Seal"
          className="w-full h-full object-cover rounded-full scale-[1.38] group-hover:scale-[1.45] transition-transform duration-500"
        />
      </div>
    </div>
  );
}

export function RsvpSection() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);

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

        {/* 3. SINGLE ACCEPT INVITATION BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="pt-2"
        >
          <button
            onClick={handleAccept}
            className="relative px-10 sm:px-14 py-4.5 sm:py-5 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#4C342F] text-amber-50 font-[family-name:var(--font-heading)] font-extrabold text-xs sm:text-sm uppercase tracking-[0.35em] shadow-[0_15px_40px_rgba(76,52,47,0.25)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.45)] transition-all flex items-center justify-center gap-3.5 cursor-pointer border border-[#D4AF37] group active:scale-98 overflow-hidden"
          >
            <Crown className="w-4 h-4 text-[#FFD700] group-hover:scale-110 transition-transform relative z-10" />
            <span className="relative z-10">
              {accepted ? "INVITATION ACCEPTED" : "ACCEPT INVITATION"}
            </span>
            <Sparkles className="w-4 h-4 text-[#FFD700] group-hover:rotate-12 transition-transform relative z-10" />
          </button>
        </motion.div>

        {/* 4. CONFIRMATION BADGE */}
        <AnimatePresence>
          {accepted && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#4C342F] text-amber-100 border border-[#D4AF37] shadow-xl font-[family-name:var(--font-heading)] font-extrabold text-xs uppercase tracking-[0.25em]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0" />
              <span>ROYAL INVITATION ACCEPTED WITH HONOR</span>
            </motion.div>
          )}
        </AnimatePresence>

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
    </section>
  );
}
