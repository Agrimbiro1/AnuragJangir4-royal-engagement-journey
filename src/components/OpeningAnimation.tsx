import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Sparkles, Crown, ArrowRight, Calendar, MapPin } from "lucide-react";
import royalSealPhoto from "../assets/royal_seal.png";

interface OpeningAnimationProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName?: string;
}

/* -------------------------------------------------------------------------- */
/* ROYAL MONOGRAM INSIGNIA SEAL                                              */
/* -------------------------------------------------------------------------- */
function InterlockingAAMonogram() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full p-0 bg-transparent shadow-[0_4px_20px_rgba(212,175,55,0.5)] overflow-hidden">
        <img
          src={royalSealPhoto}
          alt="Arjun & Ananya Royal Seal"
          className="w-full h-full object-contain rounded-full scale-100"
        />
      </div>
      <span className="font-[family-name:var(--font-heading)] text-[9px] sm:text-xs tracking-[0.35em] text-[#D4AF37] uppercase font-bold mt-1.5 sm:mt-3 md:mt-3.5 drop-shadow-md">
        ARJUN &amp; ANANYA
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CINEMATIC 3D PERSPECTIVE PETAL SHOWER — PETALS RUSH TOWARD VIEWER'S FACE  */
/* -------------------------------------------------------------------------- */

interface CinematicPetal {
  wx: number;
  wy: number;
  wz: number;
  baseSize: number;
  rotation: number;
  rotationSpeed: number;
  rotationY: number;
  swayAmp: number;
  swayFreq: number;
  swayStep: number;
  speedZ: number;
  accelZ: number;
  driftX: number;
  driftY: number;
  opacity: number;
  type: "gold" | "white" | "rose";
}

function FallingLeavesCanvas({ isBursting }: { isBursting: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<CinematicPetal[]>([]);
  const burstingRef = useRef(false);

  const makePetal = (width: number, height: number, spawnFar = true): CinematicPetal => {
    const randType = Math.random();
    const type = randType > 0.65 ? "gold" : randType > 0.3 ? "white" : "rose";
    return {
      wx: (Math.random() - 0.5) * width * 1.7,
      wy: (Math.random() - 0.5) * height * 1.5,
      wz: spawnFar ? Math.random() * 500 + 100 : Math.random() * 200 + 400,
      baseSize: Math.random() * 16 + 9,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.03,
      rotationY: Math.random() * Math.PI,
      swayAmp: Math.random() * 20 + 8,
      swayFreq: Math.random() * 0.009 + 0.003,
      swayStep: Math.random() * 100,
      speedZ: Math.random() * 0.9 + 0.5,
      accelZ: 0,
      driftX: (Math.random() - 0.5) * 0.35,
      driftY: (Math.random() - 0.5) * 0.25,
      opacity: 0,
      type,
    };
  };

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
    const isMobile = width < 768;
    const particleCount = isMobile ? 25 : 60;
    petalsRef.current = Array.from({ length: particleCount }, () => makePetal(width, height, true));

    let animationFrameId: number;

    const drawGoldPetal = (size: number, opacity: number) => {
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.9);
      ctx.bezierCurveTo(size * 0.85, -size * 0.45, size * 0.8, size * 0.6, 0, size);
      ctx.bezierCurveTo(-size * 0.8, size * 0.6, -size * 0.85, -size * 0.45, 0, -size * 0.9);

      const grad = ctx.createLinearGradient(0, -size, 0, size);
      grad.addColorStop(0, `rgba(255, 248, 220, ${opacity})`);
      grad.addColorStop(0.35, `rgba(255, 215, 0, ${opacity * 0.95})`);
      grad.addColorStop(0.75, `rgba(212, 175, 55, ${opacity * 0.9})`);
      grad.addColorStop(1, `rgba(170, 119, 28, ${opacity * 0.75})`);

      ctx.fillStyle = grad;
      ctx.fill();

      // Specular gold rib highlight
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.7);
      ctx.lineTo(0, size * 0.7);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.65})`;
      ctx.lineWidth = 0.9;
      ctx.stroke();
    };

    const drawWhiteLeaf = (size: number, opacity: number) => {
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(size * 0.75, -size * 0.4, size * 0.75, size * 0.5, 0, size);
      ctx.bezierCurveTo(-size * 0.75, size * 0.5, -size * 0.75, -size * 0.4, 0, -size);

      const grad = ctx.createLinearGradient(0, -size, 0, size);
      grad.addColorStop(0, `rgba(255,255,255,${opacity})`);
      grad.addColorStop(0.5, `rgba(253,249,238,${opacity * 0.95})`);
      grad.addColorStop(1, `rgba(238,218,183,${opacity * 0.85})`);

      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, -size * 0.75);
      ctx.lineTo(0, size * 0.75);
      ctx.strokeStyle = `rgba(212,175,55,${opacity * 0.45})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    };

    const drawRosePetal = (size: number, opacity: number) => {
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.8);
      ctx.bezierCurveTo(size * 0.9, -size * 0.3, size * 0.85, size * 0.8, 0, size * 0.9);
      ctx.bezierCurveTo(-size * 0.85, size * 0.8, -size * 0.9, -size * 0.3, 0, -size * 0.8);

      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
      grad.addColorStop(0, `rgba(255,245,238,${opacity})`);
      grad.addColorStop(0.5, `rgba(250,225,210,${opacity * 0.92})`);
      grad.addColorStop(1, `rgba(225,180,165,${opacity * 0.8})`);

      ctx.fillStyle = grad;
      ctx.fill();
    };

    const FOCAL = 500;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const isBurst = burstingRef.current;

      petalsRef.current.forEach((p) => {
        p.speedZ += p.accelZ;
        p.wz -= p.speedZ;

        p.swayStep += p.swayFreq;
        if (isBurst) {
          p.wx += p.driftX * 0.45;
          p.wy += p.driftY * 0.45;
        } else {
          p.wx += Math.sin(p.swayStep) * (p.swayAmp * 0.05) + p.driftX;
          p.wy += Math.cos(p.swayStep * 0.7) * (p.swayAmp * 0.03) + p.driftY;
        }
        p.rotation += p.rotationSpeed;
        p.rotationY += isBurst ? 0.05 : 0.022;

        if (p.wz <= 0) {
          const np = makePetal(width, height, false);
          if (isBurst) {
            np.wz = Math.random() * 520 + 80;
            np.speedZ = Math.random() * 5.0 + 6.0;
            np.accelZ = Math.random() * 0.25 + 0.1;
            np.wx = (Math.random() - 0.5) * width * 1.6;
            np.wy = (Math.random() - 0.5) * height * 1.4;
            np.swayAmp = Math.random() * 8 + 2;
            np.driftX = (Math.random() - 0.5) * 1.2;
            np.driftY = (Math.random() - 0.5) * 0.8;
          }
          Object.assign(p, np);
          return;
        }

        const scale = FOCAL / (FOCAL + p.wz);
        const sx = cx + p.wx * scale;
        const sy = cy + p.wy * scale;
        const drawSize = p.baseSize * scale;

        const nearThreshold = isBurst ? 6 : 40;
        const nearFade = p.wz < nearThreshold ? p.wz / nearThreshold : 1;
        const farFade = p.wz > 420 ? Math.max(0, 1 - (p.wz - 420) / 180) : 1;
        const depthOpacity = Math.min(nearFade, farFade);
        const finalOpacity = depthOpacity * (isBurst ? 1.0 : 0.88);

        if (finalOpacity < 0.02 || drawSize < 1) return;

        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(p.rotation);
        const scaleY = Math.cos(p.rotationY);
        ctx.scale(scale, scale * (Math.abs(scaleY) < 0.06 ? 0.06 : scaleY));

        if (p.type === "gold") {
          drawGoldPetal(p.baseSize, finalOpacity);
        } else if (p.type === "white") {
          drawWhiteLeaf(p.baseSize, finalOpacity);
        } else {
          drawRosePetal(p.baseSize, finalOpacity);
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

  useEffect(() => {
    if (!isBursting) return;
    burstingRef.current = true;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const waveA: CinematicPetal[] = Array.from({ length: 90 }, () => {
      const p = makePetal(width, height, false);
      p.wx = (Math.random() - 0.5) * width * 0.9;
      p.wy = (Math.random() - 0.5) * height * 0.85;
      p.wz = Math.random() * 250 + 400;
      p.speedZ = Math.random() * 4.0 + 8.0;
      p.accelZ = Math.random() * 0.3 + 0.15;
      p.baseSize = Math.random() * 22 + 14;
      p.swayAmp = Math.random() * 6 + 2;
      p.swayFreq = 0.002;
      p.driftX = (Math.random() - 0.5) * 1.5;
      p.driftY = (Math.random() - 0.5) * 1.0;
      p.rotationSpeed = (Math.random() - 0.5) * 0.09;
      return p;
    });

    const waveB: CinematicPetal[] = Array.from({ length: 90 }, () => {
      const p = makePetal(width, height, false);
      p.wx = (Math.random() - 0.5) * width * 1.8;
      p.wy = (Math.random() - 0.5) * height * 1.6;
      p.wz = Math.random() * 200 + 250;
      p.speedZ = Math.random() * 4.5 + 7.0;
      p.accelZ = Math.random() * 0.25 + 0.1;
      p.baseSize = Math.random() * 18 + 11;
      p.swayAmp = Math.random() * 8 + 3;
      p.swayFreq = 0.003;
      p.driftX = (Math.random() - 0.5) * 1.8;
      p.driftY = (Math.random() - 0.5) * 1.2;
      p.rotationSpeed = (Math.random() - 0.5) * 0.08;
      return p;
    });

    const waveC: CinematicPetal[] = Array.from({ length: 60 }, () => {
      const p = makePetal(width, height, false);
      p.wx = (Math.random() - 0.5) * width * 2.4;
      p.wy = (Math.random() - 0.5) * height * 2.2;
      p.wz = Math.random() * 160 + 80;
      p.speedZ = Math.random() * 5.0 + 9.0;
      p.accelZ = Math.random() * 0.35 + 0.2;
      p.baseSize = Math.random() * 16 + 10;
      p.swayAmp = Math.random() * 5 + 2;
      p.swayFreq = 0.002;
      p.driftX = (Math.random() - 0.5) * 2.0;
      p.driftY = (Math.random() - 0.5) * 1.5;
      p.rotationSpeed = (Math.random() - 0.5) * 0.1;
      return p;
    });

    petalsRef.current = [...petalsRef.current, ...waveA, ...waveB, ...waveC];

    petalsRef.current.forEach((p) => {
      if (p.speedZ < 5.0) {
        p.speedZ = Math.random() * 4.0 + 6.0;
        p.accelZ = Math.random() * 0.2 + 0.08;
        p.swayAmp = Math.min(p.swayAmp * 0.3, 5);
        p.rotationSpeed *= 3.0;
      }
    });
  }, [isBursting]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-20" />
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN OPENING ANIMATION COMPONENT (CARD-LESS DIRECT OVERLAY)               */
/* -------------------------------------------------------------------------- */
export function OpeningAnimation({ isOpen, onOpen, guestName }: OpeningAnimationProps) {
  const displayGuestName = guestName || "Priyadarshini Sharma";
  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isBursting, setIsBursting] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleOpenInvitation = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);
    setIsBursting(true);

    const tl = gsap.timeline({
      onComplete: () => {
        onOpen();
      },
    });

    tl.to({}, { duration: 0.45 })
      .to(contentRef.current, {
        scale: 1.18,
        opacity: 0,
        y: -35,
        duration: 0.9,
        ease: "power2.inOut",
      })
      .to(
        backdropRef.current,
        {
          opacity: 0,
          duration: 0.7,
          ease: "power2.inOut",
        },
        "-=0.5",
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.4",
      );
  };

  if (isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 overflow-hidden select-none bg-black flex items-center justify-center"
    >
      {/* LAYER 1: Full-Screen Grayscale Background Video */}
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vh] h-[100vw] min-w-[100vh] min-h-[100vw] object-cover -rotate-90 scale-125 pointer-events-none z-0 transform-gpu"
      >
        <source src="/engagement video template.mp4" type="video/mp4" />
        <source src="/hero-video.mp4" type="video/mp4" />
        <source src="/video.mp4" type="video/mp4" />
        <source src="/hero.mp4" type="video/mp4" />
        <source src="/couple-video.mp4" type="video/mp4" />
        <source src="/couple.mp4" type="video/mp4" />
        <source src="/background.mp4" type="video/mp4" />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-walking-on-the-beach-at-sunset-41584-large.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.coverr.co/videos/coverr-romantic-couple-in-sunset-5231/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* LAYER 2: Blurred Dark Vignette Overlay Backdrop */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/65 backdrop-blur-md pointer-events-none z-10"
      />

      {/* LAYER 3: Falling White Leaves & Petals Canvas Engine */}
      <FallingLeavesCanvas isBursting={isBursting} />

      {/* LAYER 4: Floating Central Content */}
      <div
        ref={contentRef}
        className="relative z-30 w-full max-w-2xl px-4 py-6 sm:px-4 sm:py-8 text-center flex flex-col items-center justify-center space-y-5 sm:space-y-7 md:space-y-8"
      >
        {/* 1. Header Monogram */}
        <div className="mb-2 sm:mb-3 md:mb-4">
          <InterlockingAAMonogram />
        </div>

        {/* 2. Calligraphic Invitation Content */}
        <div className="space-y-3.5 sm:space-y-5 md:space-y-6 flex flex-col items-center max-w-full">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 sm:px-4 sm:py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#D4AF37]/50 shadow-md mb-1 sm:mb-2 md:mb-3">
            <Crown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD700] animate-pulse" />
            <span className="text-[8.5px] xs:text-[9.5px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] font-extrabold text-[#FFF1B0]">
              ROYAL ENGAGEMENT INVITATION
            </span>
            <Crown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD700] animate-pulse" />
          </div>

          <p className="font-[family-name:var(--font-script)] text-2xl xs:text-2.5xl sm:text-4xl text-[#FFF1B0] drop-shadow-md my-1 sm:my-2 md:my-3">
            Together With Their Families
          </p>

          <h1
            className="font-[family-name:var(--font-couple)] text-[30px] xs:text-[38px] sm:text-6xl md:text-7xl py-1 my-2 sm:my-3 md:my-4 leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)] max-w-full"
            style={{
              background:
                "linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Arjun &amp; Ananya
          </h1>

          <p className="text-[11px] xs:text-xs sm:text-sm text-stone-200/90 font-light max-w-xs sm:max-w-md mx-auto italic leading-relaxed drop-shadow-sm my-2 sm:my-2 md:my-3">
            Request the honor of your presence to celebrate their royal engagement and eternal union
          </p>

          <div className="pt-3 sm:pt-3 md:pt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-2.5 text-[10px] sm:text-xs font-bold text-[#FFF1B0] uppercase tracking-wider sm:tracking-widest">
            <span className="flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD700]" />
              <span>AUG 26-28, 2026</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD700]" />
              <span>FATEH PALACE, UDAIPUR</span>
            </span>
          </div>
        </div>

        {/* 3. Grand OPEN INVITATION Button */}
        <div className="pt-5 sm:pt-4 w-full flex flex-col items-center">
          <div className="relative inline-flex items-center justify-center w-full max-w-[260px] sm:max-w-xs">
            {/* Outer Shimmer Rings */}
            <div className="absolute -inset-2 rounded-full border border-[#D4AF37]/60 animate-ping opacity-60 pointer-events-none" />
            <div className="absolute -inset-3.5 rounded-full border border-[#C5A059]/30 animate-pulse pointer-events-none" />

            <button
              onClick={handleOpenInvitation}
              disabled={isAnimating}
              className="w-full py-3.5 sm:py-4.5 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] text-[#FFF1B0] font-extrabold text-[10.5px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] border-2 border-[#D4AF37] shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:bg-[#3A2320] transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2 sm:gap-2.5 group"
            >
              <span>OPEN INVITATION</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD700] group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mt-3 sm:mt-3.5 drop-shadow-sm">
            Tap to enter the celebration
          </p>
        </div>
      </div>
    </div>
  );
}
