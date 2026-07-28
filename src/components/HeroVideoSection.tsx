import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Heart } from "lucide-react";
import couplePhoto from "../assets/couple.jpg";

export function HeroVideoSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="sticky top-0 w-full h-screen min-h-screen overflow-hidden flex items-center justify-center select-none z-0">
      {/* 1. Full-Screen Background Video with Grayscale Filter */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={couplePhoto}
        className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 scale-105 pointer-events-none"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-walking-on-the-beach-at-sunset-41584-large.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.coverr.co/videos/coverr-romantic-couple-in-sunset-5231/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* 2. Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75 pointer-events-none" />

      {/* 3. Center Content (Foreground Typography over video) */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm uppercase tracking-[0.45em] text-amber-200 font-semibold mb-4 drop-shadow-md flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>WE ARE GETTING ENGAGED</span>
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          </motion.p>

          {/* Couple's Names in Cursive / Script Typography */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-script)] text-6xl sm:text-7xl md:text-9xl text-white font-normal drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] my-2 leading-tight"
          >
            Arjun & Ananya
          </motion.h1>

          {/* Decorative Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="my-4 flex items-center gap-4 text-amber-200"
          >
            <span className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-amber-300" />
            <Heart className="w-5 h-5 fill-current text-rose-300 animate-pulse" />
            <span className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-amber-300" />
          </motion.div>

          {/* Date & Venue Details */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-[family-name:var(--font-heading)] text-lg sm:text-2xl text-amber-100 font-medium tracking-[0.25em] uppercase drop-shadow-md"
          >
            AUGUST 28, 2025
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-xs sm:text-sm text-stone-200 tracking-[0.25em] uppercase mt-2 drop-shadow-sm font-light"
          >
            Villa Love Estate · Royal Pines
          </motion.p>
        </motion.div>
      </div>

      {/* 4. Bottom Bouncing Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        onClick={scrollToContent}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-stone-200 hover:text-amber-300 transition-colors cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-amber-200/90 group-hover:tracking-[0.4em] transition-all">
          Scroll to explore
        </span>
        <div className="w-8 h-8 rounded-full border border-amber-200/40 flex items-center justify-center bg-black/30 backdrop-blur-xs animate-bounce shadow-lg">
          <ChevronDown className="w-4 h-4 text-amber-200" />
        </div>
      </motion.button>
    </section>
  );
}
