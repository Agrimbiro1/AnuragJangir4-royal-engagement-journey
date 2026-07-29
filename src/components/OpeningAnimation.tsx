import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Sparkles, Crown, ArrowRight, Calendar, MapPin } from "lucide-react";
import couplePhoto from "../assets/couple.jpg";

interface OpeningAnimationProps {
  isOpen: boolean;
  onOpen: () => void;
}

/* -------------------------------------------------------------------------- */
/* INTERLOCKING "AA" MONOGRAM LOGO SVG                                        */
/* -------------------------------------------------------------------------- */
function InterlockingAAMonogram() {
  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 100 100"
        className="w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37] drop-shadow-[0_4px_14px_rgba(212,175,55,0.7)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {/* Double Gold Outer Ring */}
        <circle cx="50" cy="50" r="46" stroke="#D4AF37" strokeWidth="1.2" opacity="0.9" />
        <circle cx="50" cy="50" r="42" stroke="#FFF1B0" strokeWidth="0.8" opacity="0.65" />

        {/* First 'A' */}
        <path
          d="M 32 68 L 44 32 L 56 68 M 36 56 L 52 56"
          stroke="#D4AF37"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Interlocking Second 'A' */}
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
      <span className="font-[family-name:var(--font-heading)] text-[10px] sm:text-xs tracking-[0.35em] text-[#D4AF37] uppercase font-bold mt-1.5 drop-shadow-md">
        ARJUN & ANANYA
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CINEMATIC 3D PERSPECTIVE PETAL SHOWER — PETALS RUSH TOWARD VIEWER'S FACE  */
/* -------------------------------------------------------------------------- */

interface CinematicPetal {
  // 3D world-space position (z goes from 600 deep → 0 = viewer face)
  wx: number; // world x offset from center
  wy: number; // world y offset from center
  wz: number; // depth: 600 = far, 0 = at face
  baseSize: number;
  rotation: number;
  rotationSpeed: number;
  rotationY: number;
  swayAmp: number;
  swayFreq: number;
  swayStep: number;
  speedZ: number; // how fast it zooms toward viewer
  accelZ: number; // per-frame acceleration (0 = constant, >0 = accelerating throw)
  driftX: number; // lateral X drift in world space
  driftY: number; // lateral Y drift in world space
  opacity: number;
  isWhiteLeaf: boolean;
}

function FallingLeavesCanvas({ isBursting }: { isBursting: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<CinematicPetal[]>([]);
  const burstingRef = useRef(false);

  const makePetal = (width: number, height: number, spawnFar = true): CinematicPetal => ({
    wx: (Math.random() - 0.5) * width * 1.6,
    wy: (Math.random() - 0.5) * height * 1.4,
    wz: spawnFar ? Math.random() * 500 + 100 : Math.random() * 200 + 400,
    baseSize: Math.random() * 14 + 8,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.025,
    rotationY: Math.random() * Math.PI,
    swayAmp: Math.random() * 18 + 6,
    swayFreq: Math.random() * 0.008 + 0.003,
    swayStep: Math.random() * 100,
    speedZ: Math.random() * 0.8 + 0.4, // ambient: slow cinematic drift
    accelZ: 0,                          // no acceleration for ambient petals
    driftX: (Math.random() - 0.5) * 0.3,
    driftY: (Math.random() - 0.5) * 0.2,
    opacity: 0,
    isWhiteLeaf: Math.random() > 0.3,
  });

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

    // Seed 55 ambient petals spread at varying depths
    petalsRef.current = Array.from({ length: 55 }, () => makePetal(width, height, true));

    let animationFrameId: number;

    /* ---- Draw helpers ---- */
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
      // gold vein
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.75);
      ctx.lineTo(0, size * 0.75);
      ctx.strokeStyle = `rgba(212,175,55,${opacity * 0.4})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    };

    const drawRosePetal = (size: number, opacity: number) => {
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.8);
      ctx.bezierCurveTo(size * 0.9, -size * 0.3, size * 0.85, size * 0.8, 0, size * 0.9);
      ctx.bezierCurveTo(-size * 0.85, size * 0.8, -size * 0.9, -size * 0.3, 0, -size * 0.8);
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
      grad.addColorStop(0, `rgba(255,253,248,${opacity})`);
      grad.addColorStop(0.7, `rgba(250,235,220,${opacity * 0.9})`);
      grad.addColorStop(1, `rgba(225,195,170,${opacity * 0.75})`);
      ctx.fillStyle = grad;
      ctx.fill();
    };

    /* ---- Perspective projection constants ---- */
    const FOCAL = 500; // focal length for perspective

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const isBurst = burstingRef.current;

      petalsRef.current.forEach((p) => {
        // Accelerate speed (thrown petals get faster every frame, like a projectile)
        p.speedZ += p.accelZ;

        // Move petal toward viewer along Z axis
        p.wz -= p.speedZ;

        // Lateral drift (much less during burst — thrown things go mostly straight)
        p.swayStep += p.swayFreq;
        if (isBurst) {
          // Thrown: tiny lateral drift, feels like flying straight at face
          p.wx += p.driftX * 0.4;
          p.wy += p.driftY * 0.4;
        } else {
          p.wx += Math.sin(p.swayStep) * (p.swayAmp * 0.05) + p.driftX;
          p.wy += Math.cos(p.swayStep * 0.7) * (p.swayAmp * 0.03) + p.driftY;
        }
        p.rotation += p.rotationSpeed;
        p.rotationY += isBurst ? 0.045 : 0.02; // tumble fast when thrown

        // When petal passes through camera plane, immediately respawn as a fresh thrown petal
        if (p.wz <= 0) {
          const np = makePetal(width, height, false);
          if (isBurst) {
            // Respawn deep, still fast — sustain the storm
            np.wz = Math.random() * 520 + 80;
            np.speedZ = Math.random() * 5.0 + 6.0;  // straight back to throw speed
            np.accelZ = Math.random() * 0.25 + 0.1;
            np.wx = (Math.random() - 0.5) * width * 1.6;
            np.wy = (Math.random() - 0.5) * height * 1.4;
            np.swayAmp = Math.random() * 8 + 2;     // minimal sway
            np.driftX = (Math.random() - 0.5) * 1.2;
            np.driftY = (Math.random() - 0.5) * 0.8;
          }
          Object.assign(p, np);
          return;
        }

        // Perspective projection
        const scale = FOCAL / (FOCAL + p.wz);
        const sx = cx + p.wx * scale;
        const sy = cy + p.wy * scale;
        const drawSize = p.baseSize * scale;

        // Opacity: during burst petals stay fully opaque until they literally touch the lens
        const nearThreshold = isBurst ? 6 : 40;
        const nearFade = p.wz < nearThreshold ? p.wz / nearThreshold : 1;
        const farFade = p.wz > 420 ? Math.max(0, 1 - (p.wz - 420) / 180) : 1;
        const depthOpacity = Math.min(nearFade, farFade);
        const finalOpacity = depthOpacity * (isBurst ? 1.0 : 0.82);

        if (finalOpacity < 0.02 || drawSize < 1) return;

        // Depth-of-field blur only for ambient mode (too fast during burst to look good)
        if (!isBurst) {
          const blurAmount = p.wz > 380 ? ((p.wz - 380) / 120) * 2.5 : 0;
          ctx.filter = blurAmount > 0.3 ? `blur(${blurAmount.toFixed(1)}px)` : "none";
        } else {
          ctx.filter = "none";
        }

        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(p.rotation);
        const scaleY = Math.cos(p.rotationY);
        ctx.scale(scale, scale * (Math.abs(scaleY) < 0.06 ? 0.06 : scaleY));

        if (p.isWhiteLeaf) {
          drawWhiteLeaf(p.baseSize, finalOpacity);
        } else {
          drawRosePetal(p.baseSize, finalOpacity);
        }

        ctx.restore();
        ctx.filter = "none";
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // THROWN-AT-FACE BURST: high-velocity projectile petals launched straight toward viewer
  useEffect(() => {
    if (!isBursting) return;
    burstingRef.current = true;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // WAVE A — 90 petals, deep spawn (wz 400–650), high initial speed + acceleration
    // Like the first handful thrown hard — arrive in ~0.8s
    const waveA: CinematicPetal[] = Array.from({ length: 90 }, () => {
      const p = makePetal(width, height, false);
      p.wx = (Math.random() - 0.5) * width * 0.9;   // mostly center coverage
      p.wy = (Math.random() - 0.5) * height * 0.85;
      p.wz = Math.random() * 250 + 400;              // very deep spawn
      p.speedZ = Math.random() * 4.0 + 8.0;          // 8–12: fast throw speed
      p.accelZ = Math.random() * 0.3 + 0.15;         // accelerates every frame
      p.baseSize = Math.random() * 22 + 14;           // large — close up = huge
      p.swayAmp = Math.random() * 6 + 2;             // minimal sway — straight throw
      p.swayFreq = 0.002;
      p.driftX = (Math.random() - 0.5) * 1.5;        // tiny lateral drift
      p.driftY = (Math.random() - 0.5) * 1.0;
      p.rotationSpeed = (Math.random() - 0.5) * 0.09; // tumbling mid-air
      return p;
    });

    // WAVE B — 90 petals, mid-deep spawn (wz 250–450), slightly staggered arrival
    // Like the second wave of throw — fills the screen edges
    const waveB: CinematicPetal[] = Array.from({ length: 90 }, () => {
      const p = makePetal(width, height, false);
      p.wx = (Math.random() - 0.5) * width * 1.8;   // wider spread to all edges
      p.wy = (Math.random() - 0.5) * height * 1.6;
      p.wz = Math.random() * 200 + 250;              // mid-depth, arrives sooner
      p.speedZ = Math.random() * 4.5 + 7.0;          // 7–11.5
      p.accelZ = Math.random() * 0.25 + 0.1;
      p.baseSize = Math.random() * 18 + 11;
      p.swayAmp = Math.random() * 8 + 3;
      p.swayFreq = 0.003;
      p.driftX = (Math.random() - 0.5) * 1.8;
      p.driftY = (Math.random() - 0.5) * 1.2;
      p.rotationSpeed = (Math.random() - 0.5) * 0.08;
      return p;
    });

    // WAVE C — 60 petals, close spawn (wz 80–240), appear instantly filling screen
    // The petals that are already "in front" of you — immediate visual impact
    const waveC: CinematicPetal[] = Array.from({ length: 60 }, () => {
      const p = makePetal(width, height, false);
      p.wx = (Math.random() - 0.5) * width * 2.4;   // full-screen scatter
      p.wy = (Math.random() - 0.5) * height * 2.2;
      p.wz = Math.random() * 160 + 80;              // already close
      p.speedZ = Math.random() * 5.0 + 9.0;          // 9–14: fastest wave
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

    // Convert ALL existing ambient petals into projectiles immediately
    petalsRef.current.forEach((p) => {
      if (p.speedZ < 5.0) {
        p.speedZ = Math.random() * 4.0 + 6.0; // straight to throw speed
        p.accelZ = Math.random() * 0.2 + 0.08;
        p.swayAmp = Math.min(p.swayAmp * 0.3, 5); // suppress floating sway
        p.rotationSpeed *= 3.0;                    // tumble hard
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBursting]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-20" />
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN OPENING ANIMATION COMPONENT (CARD-LESS DIRECT OVERLAY)               */
/* -------------------------------------------------------------------------- */
export function OpeningAnimation({ isOpen, onOpen }: OpeningAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const [isAnimating, setIsAnimating] = useState(false);
  const [isBursting, setIsBursting] = useState(false);

  const handleOpenInvitation = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);
    setIsBursting(true);

    const tl = gsap.timeline({
      onComplete: () => {
        onOpen();
      },
    });

    // Brief hold so petal burst is fully visible before any transition starts
    tl.to({}, { duration: 0.45 })

      // 1. Scale and fade out center typography while petal storm floods the screen
      .to(contentRef.current, {
        scale: 1.18,
        opacity: 0,
        y: -35,
        duration: 0.9,
        ease: "power2.inOut",
      })
      // 2. Unblur & fade out dark backdrop to reveal homepage beneath
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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none bg-black px-4"
    >
      {/* LAYER 1: Full-Screen Grayscale Background Video (Same as Homepage) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={couplePhoto}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vh] h-[100vw] min-w-[100vh] min-h-[100vw] object-cover -rotate-90 filter grayscale contrast-125 scale-125 pointer-events-none z-0"
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

      {/* LAYER 2: Blurred Dark Vignette Overlay Backdrop */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/65 backdrop-blur-md pointer-events-none z-10 transition-all duration-700"
      />

      {/* LAYER 3: Powerful Falling White Leaves & Petals Canvas Engine */}
      <FallingLeavesCanvas isBursting={isBursting} />

      {/* LAYER 4: Floating Central Content (CARD REMOVED - FLOATING DIRECTLY OVER BLURRED VIDEO) */}
      <div
        ref={contentRef}
        className="relative z-30 w-full max-w-2xl px-4 py-8 text-center flex flex-col items-center justify-center space-y-5"
      >
        {/* 1. Header Monogram */}
        <InterlockingAAMonogram />

        {/* 2. Calligraphic Invitation Content */}
        <div className="space-y-3 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#D4AF37]/50 shadow-md">
            <Crown className="w-3.5 h-3.5 text-[#FFD700] animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-extrabold text-[#FFF1B0]">
              ROYAL ENGAGEMENT INVITATION
            </span>
            <Crown className="w-3.5 h-3.5 text-[#FFD700] animate-pulse" />
          </div>

          <p className="font-[family-name:var(--font-script)] text-3xl sm:text-4xl text-[#FFF1B0] drop-shadow-md">
            Together With Their Families
          </p>

          <h1
            className="font-[family-name:var(--font-couple)] text-4xl xs:text-5xl sm:text-6xl md:text-7xl py-1 my-1 leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)] whitespace-nowrap"
            style={{
              background:
                "linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Arjun &amp; Ananya
          </h1>

          <p className="text-xs sm:text-sm text-stone-200/90 font-light max-w-md mx-auto italic leading-relaxed drop-shadow-sm">
            Request the honor of your presence to celebrate their royal engagement and eternal union
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold text-[#FFF1B0] uppercase tracking-widest">
            <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-[#FFD700]" />
              <span>AUG 26-28, 2026</span>
            </span>
            <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#FFD700]" />
              <span>FATEH PALACE, UDAIPUR</span>
            </span>
          </div>
        </div>

        {/* 3. Grand OPEN INVITATION Button */}
        <div className="pt-4 w-full flex flex-col items-center">
          <div className="relative inline-flex items-center justify-center w-full max-w-xs">
            {/* Outer Shimmer Rings */}
            <div className="absolute -inset-2.5 rounded-full border border-[#D4AF37]/60 animate-ping opacity-60 pointer-events-none" />
            <div className="absolute -inset-4.5 rounded-full border border-[#C5A059]/30 animate-pulse pointer-events-none" />

            <button
              onClick={handleOpenInvitation}
              disabled={isAnimating}
              className="w-full py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] text-[#FFF1B0] font-extrabold text-xs sm:text-sm uppercase tracking-[0.35em] border-2 border-[#D4AF37] shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:scale-104 hover:bg-[#3A2320] transition-all cursor-pointer flex items-center justify-center gap-3 group"
            >
              <Sparkles className="w-4 h-4 text-[#FFD700] group-hover:rotate-45 transition-transform" />
              <span>OPEN INVITATION</span>
              <ArrowRight className="w-4 h-4 text-[#FFD700] group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mt-3.5 drop-shadow-sm">
            Tap to enter the celebration
          </p>
        </div>
      </div>
    </div>
  );
}
