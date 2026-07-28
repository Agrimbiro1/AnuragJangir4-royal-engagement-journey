import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import confetti from "canvas-confetti";
import { Sparkles, Crown, Heart } from "lucide-react";

interface OpeningAnimationProps {
  isOpen: boolean;
  onOpen: () => void;
}

/* SVG Laser-Cut Mandap Floral Arbor Component */
function PaperMandapArbor() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between p-4 preserve-3d">
      {/* Laser-Cut Outer Gold Frame & Arch */}
      <svg
        viewBox="0 0 300 240"
        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_4px_12px_rgba(122,75,70,0.15)]"
        fill="none"
      >
        {/* Layer 1: Mandap Dome Arch Outline */}
        <path
          d="M30 220 V80 Q30 20 150 20 Q270 20 270 80 V220"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
        {/* Inner Laser-Cut Floral Lattice */}
        <path
          d="M50 220 V90 Q50 40 150 40 Q250 40 250 90 V220"
          stroke="#A87F7A"
          strokeWidth="1"
          opacity="0.6"
        />
        {/* Hanging Floral Vines */}
        <path d="M70 45 Q75 70 70 95" stroke="#D4AF37" strokeWidth="1" />
        <path d="M90 35 Q95 65 90 85" stroke="#D4AF37" strokeWidth="1" />
        <path d="M210 35 Q205 65 210 85" stroke="#D4AF37" strokeWidth="1" />
        <path d="M230 45 Q225 70 230 95" stroke="#D4AF37" strokeWidth="1" />
        {/* Top Mandap Floral Kalash Crest */}
        <circle cx="150" cy="20" r="6" fill="#D4AF37" />
        <path d="M150 8 V20" stroke="#AA771C" strokeWidth="1.5" />
      </svg>

      {/* 3D Pop-Up Paper Layer 1: Mandap Canopy Header */}
      <div className="relative z-10 text-center pt-2">
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-[color:var(--color-gold-deep)] block">
          3D Laser-Cut Paper Arbor
        </span>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--color-gold)] to-transparent mx-auto my-1" />
      </div>

      {/* 3D Pop-Up Paper Layer 2: Gold-Embossed Couple Names Inside Mandap */}
      <div className="relative z-20 text-center my-auto px-4 py-2 bg-cream-soft/80 backdrop-blur-xs rounded-2xl border border-[color:var(--color-gold)]/40 shadow-sm">
        <p className="font-[family-name:var(--font-script)] text-2xl sm:text-3xl text-[color:var(--color-mauve)] leading-none">
          The Wedding of
        </p>
        <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold tracking-[0.2em] text-[color:var(--color-mauve-deep)] uppercase gold-text my-1">
          Alexander & Victoria
        </h3>
        <p className="text-[10px] tracking-[0.3em] font-semibold text-[color:var(--color-muted-ink)] uppercase">
          August 28, 2025 · Villa Love
        </p>
      </div>

      {/* 3D Pop-Up Paper Layer 3: Blooming Floral Base & Mandap Steps */}
      <div className="relative z-10 w-full flex items-center justify-between px-6 pb-2 text-[color:var(--color-mauve)]">
        <div className="flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[color:var(--color-gold-deep)]" />
          <span className="text-[9px] font-bold uppercase tracking-wider text-[color:var(--color-gold-deep)]">
            Royal Mandap
          </span>
        </div>
        <Heart className="w-3.5 h-3.5 fill-current text-[color:var(--color-mauve)]" />
        <div className="flex items-center gap-1">
          <span className="text-[9px] font-bold uppercase tracking-wider text-[color:var(--color-gold-deep)]">
            Save The Date
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[color:var(--color-gold-deep)]" />
        </div>
      </div>
    </div>
  );
}

export function OpeningAnimation({ isOpen, onOpen }: OpeningAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const envelopeRef = useRef<HTMLDivElement>(null);
  const topFlapRef = useRef<HTMLDivElement>(null);
  const waxSealRef = useRef<HTMLDivElement>(null);
  const mandapSculptureRef = useRef<HTMLDivElement>(null);
  const hintTextRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isAnimating, setIsAnimating] = useState(false);

  // Soft Ambient Golden Particles Background
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

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
      speedY: Math.random() * 0.3 + 0.1,
      speedX: (Math.random() - 0.5) * 0.2,
    }));

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#D4AF37";
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // GSAP 3D Laser-Cut Paper Mandap Pop-Up Sequence
  const handleOpenEnvelope = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);

    // Soft Gold Sparkle Burst
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.55 },
      colors: ["#D4AF37", "#F3E5AB", "#AA771C", "#FFFFFF", "#E8D5CC"],
      shapes: ["circle", "star"],
    });

    const tl = gsap.timeline({
      onComplete: () => {
        onOpen();
      },
    });

    // 1. Fade hint text & lift wax seal
    tl.to(hintTextRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.3,
      ease: "power2.out",
    })
      .to(
        waxSealRef.current,
        {
          scale: 1.5,
          opacity: 0,
          rotate: 30,
          duration: 0.5,
          ease: "back.in(1.7)",
        },
        "-=0.1"
      )

      // 2. 3D Triangular Flap Opens Upward (rotateX: -180deg)
      .to(topFlapRef.current, {
        rotateX: -180,
        duration: 0.85,
        ease: "power2.inOut",
        onUpdate: function () {
          if (topFlapRef.current) {
            const progress = this.progress();
            if (progress > 0.5) {
              topFlapRef.current.style.zIndex = "1";
            }
          }
        },
      })

      // 3. Delicate 3D Laser-Cut Paper Mandap Arbor Rises Vertically
      .to(
        mandapSculptureRef.current,
        {
          y: "-115%",
          rotateX: 5,
          scale: 1.05,
          zIndex: 10,
          duration: 1.1,
          ease: "power2.out",
        },
        "-=0.3"
      )

      // 4. Smooth 3D Camera Zoom & Fullscreen Fade Reveal
      .to(
        mandapSculptureRef.current,
        {
          scale: 2.4,
          opacity: 0,
          duration: 0.8,
          ease: "power3.inOut",
        },
        "+=0.2"
      )

      .to(
        envelopeRef.current,
        {
          scale: 0.7,
          opacity: 0,
          duration: 0.7,
          ease: "power3.inOut",
        },
        "-=0.7"
      )

      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.4"
      );
  };

  if (isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-royal-dark px-4 overflow-hidden select-none"
    >
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Soft Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,rgba(32,19,17,0.96)_75%)] pointer-events-none" />

      {/* Envelope 3D Container */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md flex flex-col items-center">
        <div
          ref={envelopeRef}
          onClick={handleOpenEnvelope}
          className="relative w-[320px] sm:w-[400px] h-[220px] sm:h-[260px] cursor-pointer perspective-1000 group drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
        >
          {/* 1. Envelope Back Base (pocket interior) */}
          <div className="absolute inset-0 bg-[#E8D9CB] rounded-2xl border-2 border-[color:var(--color-gold)]/40 shadow-inner z-1 overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#AA771C_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>

          {/* 2. 3D Laser-Cut Paper Sculpture: Blooming Floral Mandap (Arbor) */}
          <div
            ref={mandapSculptureRef}
            className="absolute top-2 left-2 right-2 bottom-2 bg-gradient-to-b from-[#FDF9F3] via-[#F5EBE1] to-[#E8D5CC] rounded-2xl border-2 border-[color:var(--color-gold)] shadow-2xl z-2 preserve-3d"
          >
            <PaperMandapArbor />
          </div>

          {/* 3. Envelope Front Pocket (V-Shape Side Flaps) */}
          <div className="absolute inset-0 z-3 pointer-events-none">
            <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#EFE3CF] border-r border-amber-900/10 [clip-path:polygon(0_0,100%_50%,0_100%)] shadow-md" />
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#EFE3CF] border-l border-amber-900/10 [clip-path:polygon(100%_0,0_50%,100%_100%)] shadow-md" />
            <div className="absolute left-0 right-0 bottom-0 h-3/5 bg-[#F5EBE1] border-t border-[color:var(--color-gold)]/30 [clip-path:polygon(0_100%,50%_0,100%_100%)] shadow-lg" />
          </div>

          {/* 4. Top Triangular Flap */}
          <div
            ref={topFlapRef}
            className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#F5EBE1] to-[#E8D5CC] border-b-2 border-[color:var(--color-gold)]/50 [clip-path:polygon(0_0,50%_100%,100%_0)] origin-top preserve-3d z-4 shadow-md"
          >
            <div className="absolute top-2 left-4 right-4 h-full [clip-path:polygon(0_0,50%_80%,100%_0)] border-t border-[color:var(--color-gold)]/40 opacity-70" />
          </div>

          {/* 5. Metallic Gold Wax Seal */}
          <div
            ref={waxSealRef}
            className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-5 cursor-pointer"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#AA771C] border-2 border-[#FFF8DC] shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-amber-950 wax-seal-pulse relative group-hover:scale-105 transition-transform">
              <Crown className="w-4 h-4 text-amber-900 mb-0.5" />
              <span className="font-[family-name:var(--font-heading)] font-extrabold text-sm sm:text-base tracking-widest text-amber-950">
                A & V
              </span>
              <Sparkles className="w-3 h-3 text-amber-200 absolute top-1 right-1 animate-spin" style={{ animationDuration: "8s" }} />
            </div>
          </div>
        </div>

        {/* Pulsing Hint Text */}
        <div ref={hintTextRef} className="mt-8 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-gold-light)] font-bold animate-pulse flex items-center gap-2 justify-center">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tap Wax Seal to Unfold 3D Paper Mandap</span>
            <Sparkles className="w-3.5 h-3.5" />
          </p>
          <p className="text-[10px] text-amber-200/60 uppercase tracking-widest mt-1 font-medium">
            3D Laser-Cut Paper Arbor & Royal Invitation
          </p>
        </div>
      </div>
    </div>
  );
}
