import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Sparkles } from "lucide-react";

interface SectionMarker {
  id: string;
  label: string;
  shortName: string;
}

const SECTIONS: SectionMarker[] = [
  { id: "events-section", label: "Royal Events", shortName: "Events" },
  { id: "family-section", label: "Beloved Family", shortName: "Family" },
  { id: "gallery-section", label: "Memories Gallery", shortName: "Gallery" },
  { id: "countdown-section", label: "Wedding Countdown", shortName: "Countdown" },
  { id: "rsvp-section", label: "RSVP Invitation", shortName: "RSVP" },
  { id: "blessings-section", label: "Guest Blessings", shortName: "Blessings" },
  { id: "venue-section", label: "Palace Venue", shortName: "Venue" },
];

export function RoyalRightProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const currentScroll = Math.max(0, window.scrollY);
      const calculatedPercent = Math.min(100, Math.round((currentScroll / totalHeight) * 100));
      setScrollPercent(calculatedPercent);

      // Determine active section based on scroll position
      const scrollPosition = currentScroll + window.innerHeight / 3;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(el, { duration: 1.2, offset: -20 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center select-none group">
      {/* Top Royal Crown Accent */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 12 }}
        className="mb-2 p-1.5 rounded-full bg-black/70 border border-[#D4AF37]/60 shadow-[0_0_12px_rgba(212,175,55,0.4)] backdrop-blur-md cursor-pointer text-[#FFD700]"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Scroll to Top"
      >
        <Crown className="w-4 h-4 text-[#FFD700] animate-pulse" />
      </motion.div>

      {/* Main Glass Track Container */}
      <div className="relative flex flex-col items-center">
        {/* Vertical Track Pill */}
        <div className="w-2.5 h-60 sm:h-72 bg-black/65 backdrop-blur-xl rounded-full border border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col items-center">
          {/* Background Track Subtle Grid/Line */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10 pointer-events-none" />

          {/* Animated Gold Fill Liquid */}
          <motion.div
            className="w-full bg-gradient-to-b from-[#FFFDF9] via-[#FFD700] to-[#AA771C] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] origin-top"
            style={{ height: `${scrollPercent}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {/* Section Marker Dots overlaying the track */}
          <div className="absolute inset-0 flex flex-col items-center justify-between py-3 pointer-events-none">
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <div
                  key={section.id}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-white scale-150 shadow-[0_0_8px_#FFF]"
                      : "bg-[#D4AF37]/50"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Floating Crown Gem Bead Indicator moving with scroll */}
        <motion.div
          className="absolute -left-1.5 w-5 h-5 rounded-full bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] border-2 border-white shadow-[0_0_16px_rgba(255,215,0,0.95)] flex items-center justify-center pointer-events-none z-10"
          style={{
            top: `calc(${scrollPercent}% * (100% - 20px) / 100)`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping opacity-80" />
        </motion.div>

        {/* Section Hover / Interactive Dots Sidebar Menu */}
        <div className="absolute top-0 bottom-0 -left-9 flex flex-col justify-between py-2 items-end">
          {SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            const isHovered = hoveredSection === section.id;

            return (
              <div
                key={section.id}
                className="relative flex items-center group/item cursor-pointer"
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
                onClick={() => scrollToSection(section.id)}
              >
                {/* Interactive Clickable Dot Target */}
                <div className="w-7 h-7 flex items-center justify-center">
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-3 h-3 bg-[#FFD700] border border-white shadow-[0_0_10px_#FFD700]"
                        : "w-2 h-2 bg-[#D4AF37]/60 hover:bg-[#FFD700] hover:scale-125"
                    }`}
                  />
                </div>

                {/* Tooltip Label on Hover or Active */}
                <AnimatePresence>
                  {(isHovered || (isActive && scrollPercent > 5)) && (
                    <motion.div
                      initial={{ opacity: 0, x: -10, scale: 0.9 }}
                      animate={{ opacity: 1, x: -14, scale: 1 }}
                      exit={{ opacity: 0, x: -10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-7 px-3 py-1 rounded-xl bg-black/85 backdrop-blur-md border border-[#D4AF37]/60 shadow-[0_8px_20px_rgba(0,0,0,0.6)] whitespace-nowrap pointer-events-none flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-[#FFD700]" />
                      <span className="font-[family-name:var(--font-heading)] text-xs font-bold text-[#FFF1B0] tracking-wider uppercase">
                        {section.label}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
