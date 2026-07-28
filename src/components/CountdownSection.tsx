import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles, Heart, Bell } from "lucide-react";

const TARGET_DATE = new Date("2025-08-28T16:00:00");

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

function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 30" className={className} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M10 15 Q40 5 70 15" />
      <path d="M22 13 q3 -6 8 -6" />
      <path d="M32 10 q3 -6 8 -6" />
      <path d="M42 9 q3 -6 8 -6" />
      <path d="M52 10 q3 -6 8 -6" />
      <path d="M22 17 q3 6 8 6" />
      <path d="M32 20 q3 6 8 6" />
      <path d="M42 21 q3 6 8 6" />
      <path d="M52 20 q3 6 8 6" />
    </svg>
  );
}

export function CountdownSection() {
  const { d, h, m, s } = useCountdown(TARGET_DATE);
  const [notified, setNotified] = useState(false);

  const googleCalendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Alexander+%26+Victoria+Royal+Wedding&dates=20250828T100000Z/20250828T180000Z&details=Join+Alexander+and+Victoria+for+their+sacred+wedding+ceremony!&location=Villa+Love,+Lapino";

  const handleReminder = () => {
    setNotified(true);
    setTimeout(() => setNotified(false), 4000);
  };

  return (
    <section className="mt-24 sm:mt-32 relative select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-gradient-to-br from-[color:var(--color-mauve-deep)] via-[#563330] to-[color:var(--color-ink)] text-amber-50 rounded-3xl p-8 md:p-12 border-2 border-[color:var(--color-gold)] shadow-2xl relative overflow-hidden text-center"
      >
        {/* Background Sparkles */}
        <div className="absolute top-4 left-4 text-amber-300/30 animate-pulse">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute bottom-4 right-4 text-amber-300/30 animate-pulse">
          <Sparkles className="w-10 h-10" />
        </div>

        <p className="tracking-[0.4em] text-xs uppercase text-[color:var(--color-gold-light)] font-bold mb-2">
          The Grand Royal Countdown
        </p>

        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold tracking-[0.2em] uppercase text-white">
          Countdown To The Wedding Date
        </h2>

        <div className="mt-4 flex justify-center text-[color:var(--color-gold-light)]">
          <Sprig className="w-24 h-8" />
        </div>

        <p className="mt-3 font-[family-name:var(--font-script)] text-3xl text-[color:var(--color-gold-light)]">
          August 28, 2025 — Villa Love
        </p>

        {/* Ticking Countdown Boxes */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { value: d, label: "Days" },
            { value: h, label: "Hours" },
            { value: m, label: "Minutes" },
            { value: s, label: "Seconds" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="countdown-box rounded-2xl p-5 flex flex-col items-center justify-center relative overflow-hidden cursor-pointer"
            >
              <span className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-[color:var(--color-gold-light)] drop-shadow-md">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-amber-200/80 font-bold mt-2">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[color:var(--color-gold)] to-[color:var(--color-gold-deep)] text-stone-900 font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-lg flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Add to Google Calendar</span>
          </a>

          <button
            onClick={handleReminder}
            className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-amber-50 font-bold text-xs uppercase tracking-widest transition-all border border-amber-200/30 flex items-center gap-2"
          >
            <Bell className="w-4 h-4 text-[color:var(--color-gold-light)]" />
            <span>{notified ? "Reminder Set! ♡" : "Set Event Reminder"}</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
