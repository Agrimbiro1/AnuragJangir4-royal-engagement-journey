import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
      { title: "Alexander & Victoria — Royal Wedding Invitation" },
      {
        name: "description",
        content:
          "Join Alexander & Victoria for their royal wedding celebration on August 28, 2025 at Villa Love Estate. Video hero, events, family details, gallery, countdown, RSVP & venue map.",
      },
      { property: "og:title", content: "Alexander & Victoria — Royal Wedding Invitation" },
      {
        property: "og:description",
        content: "A royal invitation to celebrate our eternal love — 28.08.2025",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Invitation,
});

function Invitation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-[color:var(--color-ink)] font-[family-name:var(--font-body)] relative selection:bg-[color:var(--color-gold-light)]">
      {/* 1. 3D LASER-CUT PAPER MANDAP ENVELOPE OPENING OVERLAY */}
      <OpeningAnimation isOpen={isOpen} onOpen={() => setIsOpen(true)} />

      {/* STICKY TOP CONTROL HEADER */}
      {isOpen && (
        <header className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-md border-b border-amber-200/20 px-4 py-3 shadow-md">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-300 animate-pulse" />
              <span className="font-[family-name:var(--font-heading)] font-bold text-lg tracking-widest text-amber-100">
                ALEXANDER & VICTORIA
              </span>
            </div>

            {/* Sticky Controls: Audio Toggle + Re-open Envelope */}
            <div className="flex items-center gap-3">
              <AudioPlayer />

              <button
                onClick={() => setIsOpen(false)}
                className="px-3.5 py-1.5 rounded-full bg-amber-200/20 text-amber-100 text-xs font-bold uppercase tracking-wider hover:bg-amber-200/30 transition-colors flex items-center gap-1.5 border border-amber-200/40 shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Re-open Envelope</span>
              </button>
            </div>
          </div>
        </header>
      )}

      {/* 2. PINNED FULL-SCREEN 100VH HERO SECTION (SLIDES UNDER CURTAIN) */}
      <HeroVideoSection />

      {/* 3. CURTAIN SCROLL OVERLAY MAIN CONTENT (SLIDES UP COVERING HERO COMPLETELY) */}
      <main className="relative z-10 w-full bg-cream py-16 space-y-16 rounded-t-[40px] sm:rounded-t-[60px] shadow-[0_-30px_70px_rgba(76,52,47,0.35)] border-t-2 border-[color:var(--color-gold)]/40">
        {/* EVENTS SECTION */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <EventsSection />
        </div>

        {/* FAMILY SECTION */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FamilySection />
        </div>

        {/* GALLERY SECTION */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
