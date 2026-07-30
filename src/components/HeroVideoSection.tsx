import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, Sparkles } from "lucide-react";

interface HeroVideoSectionProps {
  onReopenEnvelope?: () => void;
}

/* -------------------------------------------------------------------------- */
/* INTERLOCKING "AA" MONOGRAM LOGO SVG                                        */
/* -------------------------------------------------------------------------- */
function InterlockingAAMonogram() {
  return (
    <div className="flex flex-col items-center shrink-0 mx-1">
      <svg
        viewBox="0 0 100 100"
        className="w-8 h-8 sm:w-11 sm:h-11 text-[#D4AF37] drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {/* Double Gold Outer Ring */}
        <circle cx="50" cy="50" r="46" stroke="#D4AF37" strokeWidth="1.2" opacity="0.9" />
        <circle cx="50" cy="50" r="42" stroke="#FFF1B0" strokeWidth="0.8" opacity="0.6" />

        {/* First 'A' */}
        <path
          d="M 32 68 L 44 32 L 56 68 M 36 56 L 52 56"
          stroke="#D4AF37"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Interlocking Second 'A' (Shifted & Overlapped) */}
        <path
          d="M 44 68 L 56 32 L 68 68 M 48 56 L 64 56"
          stroke="#FFF1B0"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central Crown Accent Dot */}
        <circle cx="50" cy="24" r="2.5" fill="#D4AF37" />
      </svg>
      <span className="hidden sm:block font-[family-name:var(--font-heading)] text-[10px] sm:text-xs tracking-[0.35em] text-[#D4AF37] uppercase font-semibold mt-1 drop-shadow-sm">
        ARJUN &amp; ANANYA
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CANVAS PARTICLE ENGINE (3-PHASE CINEMATIC PETAL SHOWER & DISSOLVE ZONE)   */
/* -------------------------------------------------------------------------- */
function CinematicPetalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const startTime = Date.now();

    // Create 24 subtle organic Jasmine & Rose Petal particles for homepage
    const petals = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height * 0.8,
      size: Math.random() * 8 + 5,
      type: Math.random() > 0.4 ? "jasmine" : "rose",
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.025,
      rotationX: Math.random() * Math.PI,
      rotationY: Math.random() * Math.PI,
      speedY: Math.random() * 0.9 + 0.4,
      speedX: (Math.random() - 0.5) * 0.5,
      swayAmp: Math.random() * 1.2 + 0.4,
      swayFreq: Math.random() * 0.015 + 0.008,
      step: Math.random() * 100,
      opacity: Math.random() * 0.6 + 0.25,
      blur: 0,
    }));

    let animationFrameId: number;

    const drawJasminePetal = (size: number, opacity: number) => {
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(size * 0.7, -size * 0.5, size * 0.8, size * 0.4, 0, size);
      ctx.bezierCurveTo(-size * 0.8, size * 0.4, -size * 0.7, -size * 0.5, 0, -size);

      const grad = ctx.createLinearGradient(0, -size, 0, size);
      grad.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
      grad.addColorStop(0.7, `rgba(253, 248, 235, ${opacity * 0.95})`);
      grad.addColorStop(1, `rgba(240, 220, 180, ${opacity * 0.8})`);

      ctx.fillStyle = grad;
      ctx.fill();
      ctx.strokeStyle = `rgba(212, 175, 55, ${opacity * 0.3})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    };

    const drawRosePetal = (size: number, opacity: number) => {
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.8);
      ctx.bezierCurveTo(size, -size * 0.3, size * 0.9, size * 0.8, 0, size * 0.9);
      ctx.bezierCurveTo(-size * 0.9, size * 0.8, -size, -size * 0.3, 0, -size * 0.8);

      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
      grad.addColorStop(0, `rgba(255, 245, 238, ${opacity})`);
      grad.addColorStop(0.6, `rgba(250, 230, 210, ${opacity * 0.9})`);
      grad.addColorStop(1, `rgba(225, 190, 160, ${opacity * 0.75})`);

      ctx.fillStyle = grad;
      ctx.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const elapsed = (Date.now() - startTime) / 1000;

      // Define central Dissolve Zone bounding box
      const dissolveLeft = width * 0.2;
      const dissolveRight = width * 0.8;
      const dissolveTop = height * 0.3;
      const dissolveBottom = height * 0.7;

      petals.forEach((p) => {
        p.y += p.speedY;
        p.step += p.swayFreq;
        p.x += Math.sin(p.step) * p.swayAmp + p.speedX;
        p.rotation += p.rotationSpeed;
        p.rotationY += 0.02;

        // Reset off-screen particles
        if (p.y > height + 30) {
          p.y = -30;
          p.x = Math.random() * width;
          p.opacity = Math.random() * 0.7 + 0.3;
          p.blur = 0;
        }

        let currentOpacity = p.opacity;

        // Phase 2 & 3: Apply Dissolve Zone blur and fade when entering central bounding box
        if (
          elapsed > 2.0 &&
          p.x > dissolveLeft &&
          p.x < dissolveRight &&
          p.y > dissolveTop &&
          p.y < dissolveBottom
        ) {
          // Rapidly dissolve opacity
          currentOpacity *= 0.75;
          p.blur = Math.min(p.blur + 0.5, 6);
        } else {
          p.blur = Math.max(p.blur - 0.2, 0);
        }

        if (currentOpacity < 0.02) return;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        // Apply 3D tumbling scaleY simulation
        const scaleY = Math.cos(p.rotationY);
        ctx.scale(1, Math.abs(scaleY) < 0.1 ? 0.1 : scaleY);

        if (p.blur > 0.5) {
          ctx.filter = `blur(${p.blur}px)`;
        }

        if (p.type === "jasmine") {
          drawJasminePetal(p.size, currentOpacity);
        } else {
          drawRosePetal(p.size, currentOpacity);
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-20" />
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN HERO VIDEO SECTION (100VH LUXURY CINEMATIC EXPERIENCE)                */
/* -------------------------------------------------------------------------- */
export function HeroVideoSection({ onReopenEnvelope }: HeroVideoSectionProps) {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [phase, setPhase] = useState<1 | 2 | 3>(1);

  // 3-Phase Animation Sequence Timers
  useEffect(() => {
    const timerPhase2 = setTimeout(() => setPhase(2), 2200);
    const timerPhase3 = setTimeout(() => setPhase(3), 3800);

    return () => {
      clearTimeout(timerPhase2);
      clearTimeout(timerPhase3);
    };
  }, []);

  const toggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
    // Dispatch global event for AudioPlayer
    window.dispatchEvent(new CustomEvent("toggle-royal-audio"));
  };

  const handleReopen = () => {
    if (onReopenEnvelope) {
      onReopenEnvelope();
    } else {
      window.dispatchEvent(new CustomEvent("reopen-envelope"));
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="sticky top-0 w-full h-[100dvh] min-h-[100dvh] overflow-hidden flex flex-col items-center justify-between select-none z-0 bg-black">
      {/* LAYER 1: Full-Screen Grayscale Cinematic Background Video (Rotated 90 Deg Left) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          willChange: "transform",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100dvh] h-[100dvw] min-w-[100dvh] min-h-[100dvw] object-cover -rotate-90 scale-125 sm:scale-100 filter grayscale contrast-125 pointer-events-none z-0 transform-gpu"
      >
        {/* User uploaded video file from public directory */}
        <source src="/engagement video template.mp4" type="video/mp4" />
        <source src="/hero-video.mp4" type="video/mp4" />
        <source src="/video.mp4" type="video/mp4" />
        <source src="/hero.mp4" type="video/mp4" />
        <source src="/couple-video.mp4" type="video/mp4" />
        <source src="/couple.mp4" type="video/mp4" />
        <source src="/background.mp4" type="video/mp4" />
        {/* Online stock video fallbacks */}
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-walking-on-the-beach-at-sunset-41584-large.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.coverr.co/videos/coverr-romantic-couple-in-sunset-5231/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* LAYER 2: Dark Overlay Vignette (50% Black) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/80 pointer-events-none z-10" />

      {/* LAYER 3: Full-Screen Canvas Particle Engine (Cinematic Petal Shower) */}
      <CinematicPetalCanvas />

      {/* LAYER 5: Fixed Top Navigation Header */}
      <header className="fixed top-0 left-0 right-0 w-full grid grid-cols-3 items-center px-3 py-3 sm:px-10 sm:py-6 z-40 pointer-events-none">
        {/* Left Column Spacer */}
        <div />

        {/* Center Column: 100% Dead-Centered Interlocking "AA" Monogram Logo */}
        <div className="flex justify-center pointer-events-auto">
          <InterlockingAAMonogram />
        </div>

        {/* Right Column: Right Pill Button: RE-OPEN ENVELOPE */}
        <div className="flex justify-end pointer-events-auto">
          <button
            onClick={handleReopen}
            className="px-2.5 py-1.5 xs:px-3.5 xs:py-1.5 sm:px-5 sm:py-2 rounded-full bg-black/50 border border-[#D4AF37]/35 text-[#FFF1B0] text-[9px] xs:text-[10px] uppercase tracking-[0.15em] xs:tracking-[0.25em] font-semibold hover:bg-black/80 transition-colors duration-200 flex items-center gap-1.5 shadow-lg cursor-pointer group shrink-0"
          >
            <Mail className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-[#FFD700] group-hover:rotate-12 transition-transform" />
            <span className="hidden xs:inline">RE-OPEN ENVELOPE</span>
            <span className="xs:hidden">ENVELOPE</span>
          </button>
        </div>
      </header>

      {/* LAYER 4: Center Typography Container (3-Phase Reveal) */}
      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto pt-14 pb-12 sm:pt-0 sm:pb-0">
        <AnimatePresence>
          {phase >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 25, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center space-y-1.5 sm:space-y-3"
            >
              {/* Top Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-[0.25em] xs:tracking-[0.45em] text-amber-200/90 font-semibold mb-1 sm:mb-3 drop-shadow-md flex items-center justify-center"
              >
                <span>THE ROYAL ENGAGEMENT CELEBRATION</span>
              </motion.p>

              {/* Central Metallic Gold Calligraphy Names */}
              <motion.h1
                initial={{ scale: 0.96 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-[family-name:var(--font-couple)] text-[34px] xs:text-5xl sm:text-7xl md:text-8xl py-1 my-1 sm:my-3 leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] tracking-normal max-w-full"
                style={{
                  background:
                    "linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Arjun &amp; Ananya
              </motion.h1>

              {/* Phase 3 Date & Venue Reveal */}
              {phase >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.3 }}
                  className="mt-3 sm:mt-8 flex flex-col items-center space-y-1.5 sm:space-y-3"
                >
                  {/* Gold Filigree Line Divider */}
                  <div className="flex items-center gap-3 sm:gap-4 text-amber-200/80 my-0.5 sm:my-1">
                    <span className="h-[1px] w-8 sm:w-24 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                      SAVE THE DATE
                    </span>
                    <span className="h-[1px] w-8 sm:w-24 bg-gradient-to-l from-transparent to-[#D4AF37]" />
                  </div>

                  {/* Date in Minimal Tracked Sans-Serif */}
                  <p className="font-[family-name:var(--font-heading)] text-xs xs:text-sm sm:text-2xl text-amber-100 font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase drop-shadow-md">
                    AUGUST 26-28, 2026
                  </p>

                  <p className="text-[9px] sm:text-xs text-stone-200/90 tracking-[0.15em] sm:tracking-[0.25em] uppercase drop-shadow-sm font-light">
                    FATEH PALACE ESTATE · UDAIPUR, RAJASTHAN
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Bouncing Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        onClick={scrollToContent}
        className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 text-stone-200 hover:text-amber-300 transition-colors duration-200 cursor-pointer group mb-1 sm:mb-0"
      >
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] font-semibold text-amber-200/90 transition-colors duration-200">
          Scroll to explore
        </span>
        <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full border border-amber-200/40 flex items-center justify-center bg-black/40 animate-bounce shadow-lg">
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-amber-200" />
        </div>
      </motion.button>
    </section>
  );
}
