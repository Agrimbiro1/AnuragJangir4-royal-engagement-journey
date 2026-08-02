import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Lenis from "lenis";

// Import feature components
import { OpeningAnimation } from "../components/OpeningAnimation";
import { AudioPlayer } from "../components/AudioPlayer";
import { HeroVideoSection } from "../components/HeroVideoSection";
import { EventsSection } from "../components/EventsSection";
import { FamilySection } from "../components/FamilySection";
import { GallerySection } from "../components/GallerySection";
import { CountdownSection } from "../components/CountdownSection";
import { RsvpSection } from "../components/RsvpSection";
import { BlessingsSection } from "../components/BlessingsSection";
import { VenueContactSection } from "../components/VenueContactSection";
import { FooterSection } from "../components/FooterSection";
import { WaveDivider } from "../components/WaveDivider";
import { RoyalRightProgressBar } from "../components/RoyalRightProgressBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arjun & Ananya — Royal Engagement Invitation" },
      {
        name: "description",
        content:
          "Join Arjun & Ananya for their royal engagement celebration on August 28, 2026 at Fateh Palace Estate, Udaipur. Video hero, events, family details, gallery, countdown, RSVP & venue details.",
      },
      { property: "og:title", content: "Arjun & Ananya — Royal Engagement Invitation" },
      {
        property: "og:description",
        content: "Join Arjun & Ananya for their royal engagement celebration on August 28, 2026 at Fateh Palace Estate, Udaipur. Video hero, events, family details, gallery, countdown, RSVP & venue details.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Invitation,
});

function getGuestNameFromUrl(): string {
  if (typeof window === "undefined") return "Priyadarshini Sharma";
  const params = new URLSearchParams(window.location.search);
  const name = params.get("guest") || params.get("name");
  return name ? decodeURIComponent(name) : "Priyadarshini Sharma";
}

function Invitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuickNav, setShowQuickNav] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [guestName] = useState(() => getGuestNameFromUrl());

  // Manage Body Scroll Lock & Force Top Scroll when Opening Animation is Active
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      document.body.style.overflow = "";
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Initialize Lenis Inertial Smooth Scrolling Physics (Desktop / Mouse Wheel only)
  useEffect(() => {
    if (!isOpen) return;

    // Disable JS smooth scroll engine on mobile/touch screens to preserve 60/120fps native touch momentum scroll
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);

    if (isTouchDevice) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 0,
    });

    (window as any).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, [isOpen]);

  const handleOpen = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setIsOpen(true);
  };

  const handleReopen = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleCustomReopen = () => {
      handleReopen();
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      const shouldShowNav = scrollY > heroHeight * 0.7;
      setShowQuickNav((prev) => (prev !== shouldShowNav ? shouldShowNav : prev));

      const shouldHeroBeVisible = scrollY <= heroHeight * 1.05;
      setIsHeroVisible((prev) => (prev !== shouldHeroBeVisible ? shouldHeroBeVisible : prev));
    };

    window.addEventListener("reopen-envelope", handleCustomReopen);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("reopen-envelope", handleCustomReopen);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(el, { duration: 1.2, offset: -20 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-[color:var(--color-ink)] font-[family-name:var(--font-body)] relative selection:bg-[color:var(--color-gold-light)]">
      {/* 1. 3D ENVELOPE OPENING OVERLAY */}
      <OpeningAnimation isOpen={isOpen} onOpen={handleOpen} guestName={guestName} />

      {/* ROYAL ULTRA-LUXURY RIGHT-SIDE SCROLL PROGRESS BAR */}
      {isOpen && <RoyalRightProgressBar />}

      {/* FLOATING QUICK NAV BAR ON SCROLL */}
      {isOpen && showQuickNav && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/80 backdrop-blur-xl border border-[#D4AF37]/50 shadow-[0_15px_35px_rgba(0,0,0,0.6)] text-xs uppercase tracking-widest text-[#FFF1B0] animate-fade-in select-none">
          <button
            onClick={() => scrollToSection("events-section")}
            className="px-3 py-1 rounded-full hover:bg-white/15 hover:text-[#FFD700] transition-colors cursor-pointer"
          >
            Events
          </button>
          <span className="text-[#D4AF37]/40">•</span>
          <button
            onClick={() => scrollToSection("family-section")}
            className="px-3 py-1 rounded-full hover:bg-white/15 hover:text-[#FFD700] transition-colors cursor-pointer"
          >
            Family
          </button>
          <span className="text-[#D4AF37]/40">•</span>
          <button
            onClick={() => scrollToSection("gallery-section")}
            className="px-3 py-1 rounded-full hover:bg-white/15 hover:text-[#FFD700] transition-colors cursor-pointer"
          >
            Gallery
          </button>
          <span className="text-[#D4AF37]/40">•</span>
          <button
            onClick={() => scrollToSection("rsvp-section")}
            className="px-3.5 py-1 rounded-full bg-[#D4AF37] text-[#4C342F] font-extrabold hover:bg-[#FFD700] transition-colors shadow-sm cursor-pointer ml-1"
          >
            RSVP
          </button>
        </div>
      )}

      {/* 2. PINNED FULL-SCREEN 100VH HERO SECTION (FIXED BEHIND SCROLLING CURTAIN) */}
      <div
        className="fixed top-0 left-0 w-full h-[100dvh] z-0 pointer-events-auto"
        style={{
          display: isHeroVisible ? "block" : "none",
        }}
      >
        <HeroVideoSection onReopenEnvelope={handleReopen} guestName={guestName} />
      </div>

      {/* 3. CURTAIN SCROLL OVERLAY MAIN CONTENT (SLIDES UP & OVERLAPS FIXED HERO COMPLETELY) */}
      <main className="relative z-20 w-full mt-[100dvh] rounded-t-[48px] sm:rounded-t-[68px] shadow-[0_-40px_100px_rgba(0,0,0,0.75)] border-t-2 border-[#D4AF37] overflow-hidden bg-transparent">
        {/* EVENTS SECTION - RICH EMERALD MINT GRADIENT OVERLAPPING HERO */}
        <section id="events-section" className="relative w-full bg-gradient-to-br from-[#96BC9D] via-[#75A37D] to-[#54875D] textured-bg pt-14 sm:pt-20 pb-16 sm:pb-20 overflow-hidden rounded-t-[48px] sm:rounded-t-[68px]">
          <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <EventsSection />
          </div>
        </section>

        {/* WAVE: Events (Green) → Family (Pink) */}
        <WaveDivider variant={3} />

        {/* FAMILY SECTION - RICH ROSE BLUSH CHAMPAGNE GRADIENT */}
        <section id="family-section" className="relative w-full bg-gradient-to-br from-[#C4929D] via-[#A87480] to-[#87515D] textured-bg py-16 sm:py-20 overflow-visible">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <FamilySection />
          </div>
        </section>

        {/* WAVE: Family (Pink) → Gallery (Blue) */}
        <WaveDivider variant={3} />

        {/* GALLERY SECTION - RICH SAPPHIRE POWDER BLUE GRADIENT */}
        <section id="gallery-section" className="relative w-full bg-gradient-to-br from-[#96B8D9] via-[#749BBD] to-[#517BA0] textured-bg py-16 sm:py-20 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 overflow-hidden relative z-10">
            <GallerySection />
          </div>
        </section>

        {/* WAVE: Gallery (Blue) → Countdown (Lavender) */}
        <WaveDivider variant={3} />

        {/* WEDDING COUNTDOWN - RICH ROYAL LAVENDER IRIS GRADIENT */}
        <section id="countdown-section" className="relative w-full bg-gradient-to-br from-[#AD98CF] via-[#8D75B2] to-[#6C5091] textured-bg py-16 sm:py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <CountdownSection />
          </div>
        </section>

        {/* WAVE: Countdown (Lavender) → RSVP (Peach) */}
        <WaveDivider variant={3} />

        {/* RSVP INVITATION - RICH PEACH AMBER GOLD GRADIENT */}
        <section id="rsvp-section" className="relative w-full bg-gradient-to-br from-[#C4A086] via-[#A88065] to-[#875E43] textured-bg py-16 sm:py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <RsvpSection />
          </div>
        </section>

        {/* WAVE: RSVP (Peach) → Blessings (Jade) */}
        <WaveDivider variant={3} />

        {/* BLESSINGS SHOWCASE - RICH JADE SEAFOAM GRADIENT */}
        <section id="blessings-section" className="relative w-full bg-gradient-to-br from-[#91BFA7] via-[#6FA68B] to-[#4B876B] textured-bg py-24 sm:py-32 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
            <BlessingsSection guestName={guestName} />
          </div>
        </section>

        {/* WAVE: Blessings (Jade) → Venue (Sandstone) */}
        <WaveDivider variant={3} strokeGlow />

        {/* VENUE MAP & REPRESENTATIVES CONTACTS - RICH PALACE SANDSTONE GRADIENT */}
        <section id="venue-section" className="relative w-full bg-gradient-to-br from-[#C4A686] via-[#A88665] to-[#876543] textured-bg py-16 sm:py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <VenueContactSection />
          </div>
        </section>

        {/* WAVE: Venue (Sandstone) → Footer (Rose) */}
        <WaveDivider variant={3} />

        {/* THANK YOU FOOTER - RICH DUSK VELVET ROSE GRADIENT */}
        <footer className="relative w-full bg-gradient-to-br from-[#BA96AC] via-[#9B758D] to-[#79526B] textured-bg pt-10 pb-16 sm:py-16 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <FooterSection />
          </div>
        </footer>
      </main>
    </div>
  );
}
