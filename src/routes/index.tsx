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

      {/* 2. PINNED FULL-SCREEN 100VH HERO SECTION (SLIDES UNDER CURTAIN) */}
      <HeroVideoSection onReopenEnvelope={handleReopen} />

      {/* 3. CURTAIN SCROLL OVERLAY MAIN CONTENT (SLIDES UP COVERING HERO COMPLETELY) */}
      <main className="relative z-10 w-full bg-cream textured-bg py-16 space-y-16 rounded-t-[40px] sm:rounded-t-[60px] shadow-[0_-30px_70px_rgba(76,52,47,0.35)] border-t-2 border-[color:var(--color-gold)]/40">
        {/* EVENTS SECTION */}
        <div className="max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6">
          <EventsSection />
        </div>

        {/* FAMILY SECTION */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FamilySection />
        </div>

        {/* GALLERY SECTION (EXPANDED CONTAINER FOR MORE HORIZONTAL GAPS) */}
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 overflow-visible">
          <GallerySection />
        </div>

        {/* WEDDING COUNTDOWN */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <CountdownSection />
        </div>

        {/* RSVP INVITATION WITH PARTY-BOMB */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <RsvpSection />
        </div>

        {/* BLESSINGS SHOWCASE (FULL SCREEN WIDTH UNBOUNDED) */}
        <div className="w-full">
          <BlessingsSection />
        </div>

        {/* VENUE MAP & REPRESENTATIVES CONTACTS */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <VenueContactSection />
        </div>

        {/* THANK YOU FOOTER */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FooterSection />
        </div>
      </main>
    </div>
  );
}
