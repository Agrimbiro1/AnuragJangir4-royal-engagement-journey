import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageSquare,
  Navigation,
  Crown,
  Sparkles,
  Car,
  Compass,
  Building2,
  TreePine,
  ShieldCheck,
  Heart,
  Copy,
  Check,
  Sun,
  Camera,
} from "lucide-react";
import venuePhoto from "../assets/venue.jpg";
import groomFamilyPhoto from "../assets/groom_family.png";
import brideFamilyPhoto from "../assets/bride_family.png";

// Gold Filigree Line Flourish SVG
function GoldFlourish() {
  return (
    <svg
      viewBox="0 0 160 24"
      className="w-36 sm:w-44 h-5 mx-auto text-[#C5A059] opacity-85 my-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M 80 12 Q 60 4, 30 12 Q 10 20, 0 12" />
      <path d="M 80 12 Q 100 4, 130 12 Q 150 20, 160 12" />
      <path d="M 50 12 Q 40 8, 30 12" />
      <path d="M 110 12 Q 120 8, 130 12" />
      <circle cx="80" cy="12" r="2.5" fill="#D4AF37" />
    </svg>
  );
}

export function VenueContactSection() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const addressText = "Fateh Palace Estate, 12 Raj Mahal Boulevard, Udaipur, Rajasthan 313001";
  const googleMapsUrl = "https://maps.google.com/?q=Fateh+Palace+Udaipur";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Fateh+Palace+Udaipur";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section className="mt-20 sm:mt-28 py-10 relative select-none w-full max-w-6xl mx-auto px-4">
      {/* 1. VENUE LOCATION HEADER (SLIDE FROM TOP) */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <p className="font-[family-name:var(--font-heading)] text-xs sm:text-sm uppercase tracking-[0.35em] text-[#C5A059] font-bold mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          LOCATION & DESTINATION
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
        </p>

        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-[#4C342F]">
          ROYAL VENUE SANCTUARY
        </h2>

        <GoldFlourish />
      </motion.div>

      <div className="space-y-16 sm:space-y-20">
        {/* 2. ULTRA-LUXURY ROYAL VENUE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="soft-card rounded-[40px] overflow-hidden border-2 border-[#D4AF37] shadow-[0_30px_70px_rgba(76,52,47,0.22)] p-6 sm:p-12 relative bg-gradient-to-br from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8]"
        >
          {/* Inner Decorative Gold Filigree Border Frame */}
          <div className="absolute inset-3 rounded-[32px] border border-[#C5A059]/30 pointer-events-none" />

          {/* Corner Filigree Ornaments */}
          <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none rounded-tl-xl" />
          <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none rounded-tr-xl" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none rounded-bl-xl" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none rounded-br-xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center relative z-10">
            {/* VENUE HERO PHOTOGRAPHY (5 COLS) */}
            <div className="lg:col-span-5 relative group">
              <div className="w-full h-80 sm:h-[420px] rounded-3xl overflow-hidden border-2 border-[#D4AF37] shadow-[0_15px_35px_rgba(0,0,0,0.25)] relative">
                <img
                  src={venuePhoto}
                  alt="Fateh Palace Estate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-[#D4AF37]/70 text-amber-200 text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                  <Crown className="w-3.5 h-3.5 text-[#FFD700] animate-pulse" />
                  <span>Heritage Palace Estate</span>
                </div>

                {/* Bottom Photo Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/65 backdrop-blur-md border border-white/30 text-amber-100 text-xs font-bold uppercase tracking-wider flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FFD700]" />
                    <div>
                      <p className="text-white text-xs font-extrabold">Fateh Palace Estate</p>
                      <p className="text-[9.5px] text-amber-200/90 font-medium">Udaipur, Rajasthan</p>
                    </div>
                  </div>
                  <span className="text-[9.5px] font-bold text-amber-100 px-2.5 py-1 rounded-lg bg-amber-900/60 border border-amber-400/40">
                    5-Star Luxury
                  </span>
                </div>
              </div>
            </div>

            {/* VENUE TEXT & SPECIFICATIONS (7 COLS) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EBE1] border border-[#C5A059]/40 text-[#4C342F] font-bold text-xs uppercase tracking-widest shadow-xs mb-3">
                  <MapPin className="w-4 h-4 text-[#AA771C]" />
                  <span>OFFICIAL CEREMONY SANCTUARY</span>
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#4C342F] leading-tight drop-shadow-xs">
                  Fateh Palace Estate &amp; Lakefront Gardens
                </h3>
                <p className="font-[family-name:var(--font-script)] text-xl sm:text-2xl text-[#AA771C] mt-1">
                  A Royal Heritage Sanctuary Overlooking Lake Pichola
                </p>
              </div>

              {/* Address Container with Copy Button */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/85 border border-[#C5A059]/40 space-y-2 relative shadow-xs">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8B5E5A] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#AA771C]" />
                    <span>Estate Address &amp; Location:</span>
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#4C342F] bg-[#F5EBE1] hover:bg-[#EBDBC9] px-3 py-1 rounded-xl border border-[#C5A059]/50 transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#AA771C]" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs sm:text-base font-semibold text-[#3A2E2A] leading-relaxed font-[family-name:var(--font-body)]">
                  {addressText}
                </p>
              </div>

              {/* 6 ROYAL HIGHLIGHT CHIPS */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#5C4D46] bg-white/80 p-3 rounded-2xl border border-[#C5A059]/30 shadow-2xs">
                  <TreePine className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="text-[11px]">Pine Forest Gardens</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#5C4D46] bg-white/80 p-3 rounded-2xl border border-[#C5A059]/30 shadow-2xs">
                  <Building2 className="w-4 h-4 text-[#AA771C] shrink-0" />
                  <span className="text-[11px]">Glass Mandap Pavilion</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#5C4D46] bg-white/80 p-3 rounded-2xl border border-[#C5A059]/30 shadow-2xs">
                  <Car className="w-4 h-4 text-[#8B5E5A] shrink-0" />
                  <span className="text-[11px]">Valet &amp; Helipad</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#5C4D46] bg-white/80 p-3 rounded-2xl border border-[#C5A059]/30 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#AA771C] shrink-0" />
                  <span className="text-[11px]">Private VIP Suites</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#5C4D46] bg-white/80 p-3 rounded-2xl border border-[#C5A059]/30 shadow-2xs">
                  <Sun className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-[11px]">Lakefront Sunset View</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#5C4D46] bg-white/80 p-3 rounded-2xl border border-[#C5A059]/30 shadow-2xs">
                  <Crown className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="text-[11px]">Heritage Royal Decor</span>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#2C1815] text-amber-50 text-xs font-extrabold uppercase tracking-widest hover:brightness-110 active:scale-[0.99] transition-all shadow-md flex items-center gap-2 border-2 border-[#D4AF37]"
                >
                  <Navigation className="w-4 h-4 text-[#FFD700]" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-white text-[#4C342F] text-xs font-bold uppercase tracking-widest hover:bg-stone-50 transition-all border border-[#D4C3B5] shadow-sm flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-[#AA771C]" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. DUAL FAMILY REPRESENTATIVES HOST CARDS */}
        <div className="pt-4">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="tracking-[0.3em] text-xs uppercase text-[#C5A059] font-bold mb-2 flex items-center justify-center gap-2">
              <Crown className="w-4 h-4 text-[#D4AF37]" />
              WE ARE AT YOUR SERVICE
              <Crown className="w-4 h-4 text-[#D4AF37]" />
            </p>
            <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold uppercase text-[#4C342F]">
              FAMILY REPRESENTATIVES
            </h3>
            <div className="mt-2 flex justify-center text-[#C5A059]">
              <Heart className="w-5 h-5 fill-current text-[#8B5E5A] animate-pulse" />
            </div>
          </motion.div>

          {/* DUAL PORTRAIT REPRESENTATIVE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 1. GROOM SIDE REPRESENTATIVE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
              className="soft-card backdrop-blur-none rounded-[32px] p-6 sm:p-8 border-2 border-[color:var(--color-gold)]/50 shadow-xl text-center flex flex-col items-center justify-between relative overflow-hidden group transform-gpu will-change-transform bg-gradient-to-br from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8]"
            >
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#EBDBC9] border border-[#C5A059]/40 text-[#4C342F] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Crown className="w-3.5 h-3.5 text-[#AA771C]" />
                <span>Groom Side Host</span>
              </div>

              <div className="mt-6 flex flex-col items-center w-full">
                {/* Circular Portrait Avatar */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-gradient-to-tr from-[#D4AF37] via-white to-[#AA771C] border-2 border-[#C5A059] shadow-lg mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                    <img
                      src={groomFamilyPhoto}
                      alt="Maharaja Vikram Singh"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <h4 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#4C342F]">
                  Maharaja Vikram Singh
                </h4>
                <p className="text-xs uppercase font-bold tracking-widest text-[#AA771C] mt-1">
                  Father of the Groom
                </p>
                <p className="text-xs text-[#5C4D46] mt-2 max-w-xs leading-relaxed italic">
                  "For accommodation, guest arrivals, or VIP hospitality enquiries."
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 w-full grid grid-cols-2 gap-3">
                <a
                  href="tel:+18005550199"
                  className="py-3 rounded-2xl bg-[#4C342F] text-amber-50 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#3A2320] transition-colors border border-[#D4AF37] shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFD700]" />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/18005550199"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 rounded-2xl bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* 2. BRIDE SIDE REPRESENTATIVE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
              className="soft-card backdrop-blur-none rounded-[32px] p-6 sm:p-8 border-2 border-[color:var(--color-gold)]/50 shadow-xl text-center flex flex-col items-center justify-between relative overflow-hidden group transform-gpu will-change-transform bg-gradient-to-br from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8]"
            >
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#EBDBC9] border border-[#C5A059]/40 text-[#4C342F] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#AA771C]" />
                <span>Bride Side Host</span>
              </div>

              <div className="mt-6 flex flex-col items-center w-full">
                {/* Circular Portrait Avatar */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-gradient-to-tr from-[#D4AF37] via-white to-[#AA771C] border-2 border-[#C5A059] shadow-lg mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                    <img
                      src={brideFamilyPhoto}
                      alt="Sunita Sharma"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <h4 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#4C342F]">
                  Sunita Sharma
                </h4>
                <p className="text-xs uppercase font-bold tracking-widest text-[#AA771C] mt-1">
                  Mother of the Bride
                </p>
                <p className="text-xs text-[#5C4D46] mt-2 max-w-xs leading-relaxed italic">
                  "For RSVP guidance, seating care, and general guest support."
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 w-full grid grid-cols-2 gap-3">
                <a
                  href="tel:+18005550277"
                  className="py-3 rounded-2xl bg-[#4C342F] text-amber-50 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#3A2320] transition-colors border border-[#D4AF37] shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFD700]" />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/18005550277"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 rounded-2xl bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
