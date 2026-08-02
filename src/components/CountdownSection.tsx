import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";

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
      className={`w-7 h-7 sm:w-9 sm:h-9 text-[#C5A059] opacity-75 pointer-events-none ${className}`}
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

// Animated 3D Mechanical Digit Flip Display Component
function AnimatedDigit({ value }: { value: number }) {
  const formatted = String(value).padStart(2, "0");

  return (
    <div className="relative h-14 sm:h-20 md:h-22 overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={formatted}
          initial={{ y: -20, opacity: 0, rotateX: -45, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, rotateX: 0, scale: 1 }}
          exit={{ y: 20, opacity: 0, rotateX: 45, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-heading)] text-4xl sm:text-6xl md:text-7xl font-bold text-[#4C342F] tracking-tight drop-shadow-sm block relative z-10"
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
        className="relative max-w-4xl mx-auto rounded-[32px] sm:rounded-[44px] p-8 sm:p-12 md:p-14 bg-gradient-to-br from-[#FFFDF9]/95 via-[#FDF8F0]/90 to-[#F9EFE0]/95 backdrop-blur-2xl border-2 border-[#D4AF37]/50 shadow-[0_30px_90px_rgba(212,175,55,0.2),0_10px_35px_rgba(120,80,60,0.06)] text-center overflow-hidden"
      >
        {/* Royal Corner Ornaments */}
        <RoyalCornerOrnament className="absolute top-3 left-3 sm:top-4 sm:left-4" />
        <RoyalCornerOrnament className="absolute top-3 right-3 sm:top-4 sm:right-4 rotate-90" />
        <RoyalCornerOrnament className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 -rotate-90" />
        <RoyalCornerOrnament className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 rotate-180" />

        {/* Soft Breathing Ambient Background Aura */}
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.2)_0%,transparent_70%)] pointer-events-none blur-3xl"
        />

        {/* Outer Fine Accent Border Line */}
        <div className="absolute inset-2 sm:inset-3 rounded-[26px] sm:rounded-[38px] border border-[#C5A059]/30 pointer-events-none" />

        {/* 1. SECTION HEADER */}
        <div className="relative z-10 space-y-2 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] border-2 border-[#D4AF37] text-[#FFF1B0] text-xs sm:text-sm font-extrabold tracking-[0.35em] uppercase shadow-lg mb-3">
            <span>SAVE THE DATE</span>
          </div>

          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-[#3A2E2A] drop-shadow-[0_1.5px_3px_rgba(255,255,255,0.7)]">
            COUNTDOWN TO THE CELEBRATION
          </h2>

          <GoldLineFlourish />

          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#8B5E5A] uppercase pt-1">
            AUGUST 28, 2026 · FATEH PALACE ESTATE, UDAIPUR
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
              whileHover={{ y: -6, scale: 1.03 }}
              className="p-1 sm:p-1.5 rounded-3xl sm:rounded-[32px] bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] shadow-[0_15px_40px_rgba(212,175,55,0.3)] hover:shadow-[0_20px_55px_rgba(212,175,55,0.45)] transition-all duration-300 group cursor-pointer transform-gpu will-change-transform"
            >
              {/* Inner Ivory Card Container */}
              <div className="rounded-[22px] sm:rounded-[26px] p-4 sm:p-6 bg-gradient-to-b from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8] flex flex-col items-center justify-between text-center relative overflow-hidden h-full">
                {/* Razor-Thin Inset Border */}
                <div className="absolute inset-1.5 rounded-[18px] sm:rounded-[22px] border border-[#C5A059]/30 pointer-events-none group-hover:border-[#D4AF37]/60 transition-colors" />

                {/* Top Mini Gold Diamond Jewel */}
                <div className="w-2 h-2 rotate-45 bg-[#D4AF37] mb-1 shadow-xs group-hover:rotate-180 transition-transform duration-500 shrink-0" />

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

        {/* 3. PREMIUM ACTION BUTTONS */}
        <div className="relative z-10 mt-10 flex justify-center items-center">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#4C342F] text-amber-50 font-bold text-xs uppercase tracking-widest hover:bg-[#3A2320] transition-all border border-[#D4AF37] shadow-[0_15px_40px_rgba(76,52,47,0.25)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.35)] flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <Calendar className="w-4 h-4 text-[#FFD700]" />
            <span>Add to Google Calendar</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
