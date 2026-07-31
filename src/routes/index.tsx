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

function Invitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuickNav, setShowQuickNav] = useState(false);

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

  // Initialize Lenis Inertial Smooth Scrolling Physics
  useEffect(() => {
    if (!isOpen) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
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
      if (window.scrollY > window.innerHeight * 0.7) {
        setShowQuickNav(true);
      } else {
        setShowQuickNav(false);
      }
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
      <OpeningAnimation isOpen={isOpen} onOpen={handleOpen} />



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
      <div className="fixed top-0 left-0 w-full h-[100dvh] z-0 pointer-events-auto">
        <HeroVideoSection onReopenEnvelope={handleReopen} />
      </div>

      {/* 3. CURTAIN SCROLL OVERLAY MAIN CONTENT (SLIDES UP & OVERLAPS FIXED HERO COMPLETELY) */}
      <main className="relative z-20 w-full mt-[100dvh] rounded-t-[48px] sm:rounded-t-[68px] shadow-[0_-40px_100px_rgba(0,0,0,0.75)] border-t-2 border-[#D4AF37] overflow-hidden bg-transparent">
        {/* EVENTS SECTION - RICH EMERALD MINT GRADIENT OVERLAPPING HERO */}
        <section id="events-section" className="relative w-full bg-gradient-to-br from-[#DCECE0] via-[#C9E2CF] to-[#B8D7BF] textured-bg pt-14 sm:pt-20 pb-16 sm:pb-20 overflow-hidden rounded-t-[48px] sm:rounded-t-[68px]">
          <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <EventsSection />
          </div>
        </section>

        {/* WAVE: Events (Green) → Family (Pink) */}
        <WaveDivider variant={1} />

        {/* FAMILY SECTION - RICH ROSE BLUSH CHAMPAGNE GRADIENT */}
        <section id="family-section" className="relative w-full bg-gradient-to-br from-[#F7E2E6] via-[#EBCDD4] to-[#DFB9C3] textured-bg py-16 sm:py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <FamilySection />
          </div>
        </section>

        {/* WAVE: Family (Pink) → Gallery (Blue) */}
        <WaveDivider variant={2} />

        {/* GALLERY SECTION - RICH SAPPHIRE POWDER BLUE GRADIENT */}
        <section id="gallery-section" className="relative w-full bg-gradient-to-br from-[#DAE9F7] via-[#C4DDED] to-[#B0CFE4] textured-bg py-16 sm:py-20 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 overflow-hidden relative z-10">
            <GallerySection />
          </div>
        </section>

        {/* WAVE: Gallery (Blue) → Countdown (Lavender) */}
        <WaveDivider variant={3} />

        {/* WEDDING COUNTDOWN - RICH ROYAL LAVENDER IRIS GRADIENT */}
        <section id="countdown-section" className="relative w-full bg-gradient-to-br from-[#EAE2F7] via-[#D8C9EF] to-[#C7B2E5] textured-bg py-16 sm:py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <CountdownSection />
          </div>
        </section>

        {/* WAVE: Countdown (Lavender) → RSVP (Peach) */}
        <WaveDivider variant={1} />

        {/* RSVP INVITATION - RICH PEACH AMBER GOLD GRADIENT */}
        <section id="rsvp-section" className="relative w-full bg-gradient-to-br from-[#F7E6D7] via-[#EED1BD] to-[#E3BAA2] textured-bg py-16 sm:py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <RsvpSection />
          </div>
        </section>

        {/* WAVE: RSVP (Peach) → Blessings (Jade) */}
        <WaveDivider variant={2} />

        {/* BLESSINGS SHOWCASE - RICH JADE SEAFOAM GRADIENT */}
        <section id="blessings-section" className="relative w-full bg-gradient-to-br from-[#DCEDE5] via-[#C6E2D4] to-[#B0D7C4] textured-bg py-24 sm:py-32 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
            <BlessingsSection />
          </div>
        </section>

        {/* WAVE: Blessings (Jade) → Venue (Sandstone) */}
        <WaveDivider variant={3} strokeGlow />

        {/* VENUE MAP & REPRESENTATIVES CONTACTS - RICH PALACE SANDSTONE GRADIENT */}
        <section id="venue-section" className="relative w-full bg-gradient-to-br from-[#F7EAD7] via-[#EED7BF] to-[#E4C3A6] textured-bg py-16 sm:py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <VenueContactSection />
          </div>
        </section>

        {/* WAVE: Venue (Sandstone) → Footer (Rose) */}
        <WaveDivider variant={1} />

        {/* THANK YOU FOOTER - RICH DUSK VELVET ROSE GRADIENT */}
        <footer className="relative w-full bg-gradient-to-br from-[#EFE1EA] via-[#DEC5D5] to-[#CCA8BF] textured-bg pt-4 pb-6 sm:py-12 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <FooterSection />
          </div>
        </footer>
      </main>
    </div>
  );
}
