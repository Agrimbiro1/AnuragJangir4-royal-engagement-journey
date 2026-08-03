import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Sparkles, Crown, MapPin } from "lucide-react";
import { GoldenRosePetals } from "./GoldenRosePetals";

const TARGET_DATE = new Date("2026-08-28T16:00:00");

function useCountdown(target: Date) {
  const [now, setNow] = useState<number>(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

// Gold Filigree Corner Ornament SVG
function RoyalCornerOrnament({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`w-8 h-8 sm:w-10 sm:h-10 text-[#C5A059] opacity-80 pointer-events-none ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M 2 24 L 2 8 C 2 4.7 4.7 2 8 2 L 24 2" strokeWidth="1.8" />
      <path d="M 6 20 L 6 10 C 6 7.8 7.8 6 10 6 L 20 6" strokeWidth="0.9" opacity="0.7" />
      <circle cx="10" cy="10" r="2" fill="#D4AF37" />
    </svg>
  );
}

// Gold Filigree Divider SVG
function GoldLineFlourish() {
  return (
    <svg
      viewBox="0 0 160 24"
      className="w-36 sm:w-48 h-5 mx-auto text-[#C5A059] opacity-85 my-2 pointer-events-none select-none"
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

// Rotating Background Royal Mandala Watermark SVG
function RoyalMandalaWatermark() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] pointer-events-none z-0 opacity-20">
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        viewBox="0 0 400 400"
        className="w-full h-full text-[#D4AF37]"
      >
        <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" fill="none" />
        <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" opacity="0.6" fill="none" />
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 22.5} 200 200)`}>
            <path d="M 200,40 Q 215,80 200,120 Q 185,80 200,40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="25" r="3" fill="#FFD700" />
          </g>
        ))}
      </motion.svg>
    </div>
  );
}

// Sparkle Star Decoration Points
function CountdownSparkles() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {[
        { left: "7%", top: "10%", delay: 0 },
        { left: "91%", top: "12%", delay: 1.2 },
        { left: "6%", top: "82%", delay: 0.7 },
        { left: "93%", top: "84%", delay: 1.8 },
      ].map((sp, idx) => (
        <motion.div
          key={idx}
          style={{ left: sp.left, top: sp.top }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.25, 0.8] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: sp.delay, ease: "easeInOut" }}
          className="absolute text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
      ))}
    </div>
  );
}

// Animated 3D Mechanical Digit Flip Display Component
function AnimatedDigit({ value }: { value: number }) {
  const formatted = String(value).padStart(2, "0");

  return (
    <div className="relative h-14 sm:h-20 md:h-22 overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={formatted}
          initial={{ y: -22, opacity: 0, rotateX: -45, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, rotateX: 0, scale: 1 }}
          exit={{ y: 22, opacity: 0, rotateX: 45, scale: 0.9 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-heading)] text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight block relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-[#4C342F] via-[#3A2320] to-[#201311] drop-shadow-sm"
        >
          {formatted}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function CountdownSection() {
  const { d, h, m, s } = useCountdown(TARGET_DATE);

  const googleCalendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Arjun+%26+Ananya+Royal+Engagement&dates=20260828T100000Z/20260828T180000Z&details=Join+Arjun+and+Ananya+for+their+sacred+engagement+ceremony!&location=Fateh+Palace+Estate,+Udaipur";

  const countdownItems = [
    { value: d, label: "DAYS" },
    { value: h, label: "HOURS" },
    { value: m, label: "MINUTES" },
    { value: s, label: "SECONDS" },
  ];

  return (
    <section className="mt-16 sm:mt-24 py-6 relative select-none w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-4xl mx-auto rounded-[32px] sm:rounded-[44px] p-8 sm:p-12 md:p-14 bg-gradient-to-br from-[#FFFDF9]/95 via-[#FDF8F0]/92 to-[#F9EFE0]/95 backdrop-blur-2xl border-2 border-[#D4AF37]/60 shadow-[0_30px_90px_rgba(212,175,55,0.25),0_10px_35px_rgba(120,80,60,0.08)] text-center overflow-hidden"
      >
        {/* Floating Golden Rose Petals Overlay */}
        <GoldenRosePetals count={8} />

        {/* Rotating Background Royal Mandala Watermark */}
        <RoyalMandalaWatermark />

        {/* Floating Sparkle Stars */}
        <CountdownSparkles />

        {/* Royal Corner Ornaments */}
        <RoyalCornerOrnament className="absolute top-3 left-3 sm:top-4 sm:left-4" />
        <RoyalCornerOrnament className="absolute top-3 right-3 sm:top-4 sm:right-4 rotate-90" />
        <RoyalCornerOrnament className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 -rotate-90" />
        <RoyalCornerOrnament className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 rotate-180" />

        {/* Soft Breathing Ambient Background Aura */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,transparent_70%)] pointer-events-none blur-3xl"
        />

        {/* Outer Fine Accent Border Line */}
        <div className="absolute inset-2 sm:inset-3 rounded-[26px] sm:rounded-[38px] border border-[#C5A059]/40 pointer-events-none" />

        {/* 1. SECTION HEADER */}
        <div className="relative z-10 space-y-2 text-center max-w-3xl mx-auto">
          {/* Top Save The Date Badge with Live Pulse Dot */}
          <div className="inline-flex items-center justify-center gap-2.5 px-6 py-2 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] border-2 border-[#D4AF37] text-[#FFF1B0] text-xs sm:text-sm font-extrabold tracking-[0.35em] uppercase shadow-lg mb-3">
            <Crown className="w-3.5 h-3.5 text-[#FFD700] animate-pulse" />
            <span>SAVE THE DATE</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]" />
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-[#3A2E2A] drop-shadow-[0_1.5px_3px_rgba(255,255,255,0.7)]">
            COUNTDOWN TO THE CELEBRATION
          </h2>

          <GoldLineFlourish />

          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#8B5E5A] uppercase pt-1 flex items-center justify-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#AA771C]" />
            <span>AUGUST 28, 2026 · FATEH PALACE ESTATE, UDAIPUR</span>
          </p>
        </div>

        {/* 2. ULTRA-LUXURY GOLD FOIL BEVELED COUNTDOWN BOXES */}
        <div className="relative z-10 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {countdownItems.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="p-1 sm:p-1.5 rounded-3xl sm:rounded-[32px] bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] shadow-[0_15px_40px_rgba(212,175,55,0.3)] hover:shadow-[0_22px_60px_rgba(212,175,55,0.5)] transition-all duration-300 group cursor-pointer transform-gpu will-change-transform relative"
            >
              {/* Inner Ivory Card Container */}
              <div className="rounded-[22px] sm:rounded-[26px] p-4 sm:p-6 bg-gradient-to-b from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8] flex flex-col items-center justify-between text-center relative overflow-hidden h-full">
                {/* Reflected Glass Shine Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/35 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                {/* Razor-Thin Inset Border */}
                <div className="absolute inset-1.5 rounded-[18px] sm:rounded-[22px] border border-[#C5A059]/30 pointer-events-none group-hover:border-[#D4AF37]/60 transition-colors" />

                {/* Top Gold Diamond Jewel */}
                <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#FFD700] to-[#AA771C] mb-1 shadow-sm group-hover:rotate-180 transition-transform duration-500 shrink-0" />

                {/* 3D Animated Digit */}
                <AnimatedDigit value={item.value} />

                {/* Center Gold Accent Line */}
                <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent my-1 sm:my-2 rounded-full group-hover:w-14 transition-all duration-300 shrink-0" />

                <span className="text-[10px] sm:text-xs tracking-[0.3em] font-extrabold text-[#AA771C] relative z-10 shrink-0">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. PREMIUM ACTION BUTTON */}
        <div className="relative z-10 mt-10 flex justify-center items-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href={googleCalendarUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] text-amber-100 font-bold text-xs uppercase tracking-widest border-2 border-[#D4AF37] shadow-[0_15px_40px_rgba(76,52,47,0.3)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.4)] flex items-center gap-2.5 cursor-pointer transition-all"
          >
            <Calendar className="w-4 h-4 text-[#FFD700]" />
            <span>Add to Google Calendar</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
