import React from "react";
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
} from "lucide-react";
import venuePhoto from "../assets/venue.jpg";
import groomFamilyPhoto from "../assets/groom_family.png";
import brideFamilyPhoto from "../assets/bride_family.png";

// Gold Filigree Line Flourish SVG
function GoldFlourish() {
  return (
    <svg
      viewBox="0 0 160 24"
      className="w-36 sm:w-44 h-6 mx-auto text-[#C5A059] opacity-85 my-3"
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
  const googleMapsUrl = "https://maps.google.com/?q=Fateh+Palace+Udaipur";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Fateh+Palace+Udaipur";

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

      {/* 2. LUXURY VENUE CARD */}
      <div className="space-y-16">
        {/* MAIN VENUE DETAILS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="soft-card rounded-[36px] overflow-hidden border-2 border-[color:var(--color-gold)]/50 shadow-[0_25px_60px_rgba(76,52,47,0.18)] p-6 sm:p-10 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* VENUE PHOTO & BADGE (5 COLS) */}
            <div className="lg:col-span-5 relative group">
              <div className="w-full h-72 sm:h-80 rounded-3xl overflow-hidden border-2 border-white shadow-xl relative">
                <img
                  src={venuePhoto}
                  alt="Fateh Palace Estate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <span className="absolute bottom-4 left-4 right-4 px-4 py-2 rounded-2xl bg-black/50 backdrop-blur-md border border-white/30 text-amber-100 text-xs font-bold uppercase tracking-wider flex items-center justify-between shadow-lg">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#FFD700]" />
                    <span>5-Star Royal Sanctuary</span>
                  </span>
                  <span className="text-[10px] text-amber-200">Exclusive Estate</span>
                </span>
              </div>
            </div>

            {/* VENUE TEXT & HIGHLIGHTS (7 COLS) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBDBC9] border border-[#C5A059]/40 text-[#4C342F] font-bold text-xs uppercase tracking-widest">
                <MapPin className="w-4 h-4 text-[#AA771C]" />
                <span>OFFICIAL CEREMONY VENUE</span>
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#4C342F] leading-tight">
                Fateh Palace Estate & Lakefront Gardens
              </h3>

              <div className="p-4 rounded-2xl bg-white/60 border border-[#D4C3B5] space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8B5E5A]">
                  Full Address:
                </p>
                <p className="text-sm font-semibold text-[#3A2E2A] leading-relaxed">
                  Fateh Palace Estate, 12 Raj Mahal Boulevard, Udaipur, Rajasthan
                </p>
              </div>

              {/* HIGHLIGHTS GRID */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2 text-xs font-medium text-[#5C4D46] bg-white/40 p-2.5 rounded-xl border border-white/60">
                  <TreePine className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Pine Forest Surrounded</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#5C4D46] bg-white/40 p-2.5 rounded-xl border border-white/60">
                  <Building2 className="w-4 h-4 text-[#AA771C] shrink-0" />
                  <span>Royal Glass Gazebo</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#5C4D46] bg-white/40 p-2.5 rounded-xl border border-white/60">
                  <Car className="w-4 h-4 text-[#8B5E5A] shrink-0" />
                  <span>Valet & Helipad Access</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-[#5C4D46] bg-white/40 p-2.5 rounded-xl border border-white/60">
                  <ShieldCheck className="w-4 h-4 text-[#AA771C] shrink-0" />
                  <span>Private VIP Suites</span>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#4C342F] text-amber-50 text-xs font-bold uppercase tracking-widest hover:bg-[#3A2320] transition-all shadow-md flex items-center gap-2 border border-[#D4AF37]"
                >
                  <Navigation className="w-4 h-4 text-[#FFD700]" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white text-[#4C342F] text-xs font-bold uppercase tracking-widest hover:bg-stone-50 transition-all border border-[#D4C3B5] shadow-sm flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-[#AA771C]" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. UNIQUE & ELEGANT DUAL FAMILY REPRESENTATIVES LAYOUT (EXACTLY 1 FROM GROOM SIDE & 1 FROM BRIDE SIDE) */}
        <div className="pt-8">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="tracking-[0.3em] text-xs uppercase text-[#C5A059] font-bold mb-2">
              WE ARE AT YOUR SERVICE
            </p>
            <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold uppercase text-[#4C342F]">
              FAMILY REPRESENTATIVES
            </h3>
            <div className="mt-2 flex justify-center text-[#C5A059]">
              <Heart className="w-5 h-5 fill-current text-[#8B5E5A] animate-pulse" />
            </div>
          </motion.div>

          {/* DUAL PORTRAIT REPRESENTATIVE CARDS (1 GROOM REPRESENTATIVE & 1 BRIDE REPRESENTATIVE) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 1. GROOM SIDE REPRESENTATIVE: MAHARAJA VIKRAM SINGH */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="soft-card rounded-[32px] p-6 sm:p-8 border-2 border-[color:var(--color-gold)]/50 shadow-xl text-center flex flex-col items-center justify-between relative overflow-hidden group"
            >
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#EBDBC9] border border-[#C5A059]/40 text-[#4C342F] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
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
                  className="py-3 rounded-full bg-[#4C342F] text-amber-50 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#3A2320] transition-colors border border-[#D4AF37] shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFD700]" />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/18005550199"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 rounded-full bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-emerald-800 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* 2. BRIDE SIDE REPRESENTATIVE: SUNITA SHARMA */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="soft-card rounded-[32px] p-6 sm:p-8 border-2 border-[color:var(--color-gold)]/50 shadow-xl text-center flex flex-col items-center justify-between relative overflow-hidden group"
            >
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#EBDBC9] border border-[#C5A059]/40 text-[#4C342F] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
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
                  className="py-3 rounded-full bg-[#4C342F] text-amber-50 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#3A2320] transition-colors border border-[#D4AF37] shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFD700]" />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/18005550277"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 rounded-full bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-emerald-800 transition-colors shadow-sm"
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
