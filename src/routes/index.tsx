import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Mail, Crown } from "lucide-react";

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
        content: "A royal invitation to celebrate our eternal love — 28.08.2026",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Invitation,
});

function Invitation() {
  const [isOpen, setIsOpen] = useState(false);

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

    window.addEventListener("reopen-envelope", handleCustomReopen);

    return () => {
      window.removeEventListener("reopen-envelope", handleCustomReopen);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-[color:var(--color-ink)] font-[family-name:var(--font-body)] relative selection:bg-[color:var(--color-gold-light)]">
      {/* 1. 3D ENVELOPE OPENING OVERLAY */}
      <OpeningAnimation isOpen={isOpen} onOpen={handleOpen} />

      {/* 2. PINNED FULL-SCREEN 100VH HERO SECTION (FIXED BEHIND SCROLLING CURTAIN) */}
      <div className="fixed top-0 left-0 w-full h-[100dvh] z-0 pointer-events-auto">
        <HeroVideoSection onReopenEnvelope={handleReopen} />
      </div>

      {/* 3. CURTAIN SCROLL OVERLAY MAIN CONTENT (SLIDES UP & OVERLAPS FIXED HERO COMPLETELY) */}
      <main className="relative z-20 w-full mt-[100dvh] rounded-t-[48px] sm:rounded-t-[68px] shadow-[0_-40px_100px_rgba(0,0,0,0.75)] border-t-2 border-[#D4AF37] overflow-hidden bg-transparent">
        {/* EVENTS SECTION - RICH EMERALD MINT GRADIENT OVERLAPPING HERO */}
        <section className="relative w-full bg-gradient-to-br from-[#DCECE0] via-[#C9E2CF] to-[#B8D7BF] textured-bg pt-14 sm:pt-20 pb-16 sm:pb-20 overflow-hidden rounded-t-[48px] sm:rounded-t-[68px]">
          <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <EventsSection />
          </div>
        </section>

        {/* WAVE: Events (Green) → Family (Pink) */}
        <WaveDivider variant={1} />

        {/* FAMILY SECTION - RICH ROSE BLUSH CHAMPAGNE GRADIENT */}
        <section className="relative w-full bg-gradient-to-br from-[#F7E2E6] via-[#EBCDD4] to-[#DFB9C3] textured-bg py-16 sm:py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <FamilySection />
          </div>
        </section>

        {/* WAVE: Family (Pink) → Gallery (Blue) */}
        <WaveDivider variant={2} />

        {/* GALLERY SECTION - RICH SAPPHIRE POWDER BLUE GRADIENT */}
        <section className="relative w-full bg-gradient-to-br from-[#DAE9F7] via-[#C4DDED] to-[#B0CFE4] textured-bg py-16 sm:py-20 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 overflow-hidden relative z-10">
            <GallerySection />
          </div>
        </section>

        {/* WAVE: Gallery (Blue) → Countdown (Lavender) */}
        <WaveDivider variant={3} />

        {/* WEDDING COUNTDOWN - RICH ROYAL LAVENDER IRIS GRADIENT */}
        <section className="relative w-full bg-gradient-to-br from-[#EAE2F7] via-[#D8C9EF] to-[#C7B2E5] textured-bg py-16 sm:py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <CountdownSection />
          </div>
        </section>

        {/* WAVE: Countdown (Lavender) → RSVP (Peach) */}
        <WaveDivider variant={1} />

        {/* RSVP INVITATION - RICH PEACH AMBER GOLD GRADIENT */}
        <section className="relative w-full bg-gradient-to-br from-[#F7E6D7] via-[#EED1BD] to-[#E3BAA2] textured-bg py-16 sm:py-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <RsvpSection />
          </div>
        </section>

        {/* WAVE: RSVP (Peach) → Blessings (Jade) */}
        <WaveDivider variant={2} />

        {/* BLESSINGS SHOWCASE - RICH JADE SEAFOAM GRADIENT */}
        <section className="relative w-full bg-gradient-to-br from-[#DCEDE5] via-[#C6E2D4] to-[#B0D7C4] textured-bg py-24 sm:py-32 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
            <BlessingsSection />
          </div>
        </section>

        {/* WAVE: Blessings (Jade) → Venue (Sandstone) */}
        <WaveDivider variant={3} strokeGlow />

        {/* VENUE MAP & REPRESENTATIVES CONTACTS - RICH PALACE SANDSTONE GRADIENT */}
        <section className="relative w-full bg-gradient-to-br from-[#F7EAD7] via-[#EED7BF] to-[#E4C3A6] textured-bg py-16 sm:py-20 overflow-hidden">
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
