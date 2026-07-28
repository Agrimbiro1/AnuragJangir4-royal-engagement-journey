import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Crown, X, Sparkles, ChevronRight } from "lucide-react";
import groomFamilyPhoto from "../assets/groom_family.png";
import brideFamilyPhoto from "../assets/bride_family.png";

interface FamilyMember {
  name: string;
  relation: string;
  description: string;
  quote: string;
}

const GROOM_FAMILY_MEMBERS: FamilyMember[] = [
  {
    name: "Lord Richard & Lady Margaret",
    relation: "Parents of the Groom",
    description: "Guiding Alexander with wisdom, strength, and unwavering warmth throughout his life journey.",
    quote: "Love is not about looking at each other, but looking together in the same direction.",
  },
  {
    name: "Sir Edward & Lady Eleanor",
    relation: "Grandparents",
    description: "Pillars of heritage and tradition, passing down golden values of love and honor.",
    quote: "May your bond grow stronger with each passing sunrise.",
  },
  {
    name: "Sebastian & Clara",
    relation: "Brother & Sister-in-Law",
    description: "Alexander's lifelong confidants and partners in adventure.",
    quote: "Welcome to the family, Victoria! Our home is complete with you.",
  },
  {
    name: "Princess Sophia",
    relation: "Sister of the Groom",
    description: "Spreading joy, laughter, and floral grace across the wedding festivities.",
    quote: "So thrilled for my brother and my new sister!",
  },
];

const BRIDE_FAMILY_MEMBERS: FamilyMember[] = [
  {
    name: "Dr. Arthur & Elizabeth Montgomery",
    relation: "Parents of the Bride",
    description: "Nurturing Victoria's dreams with endless kindness, grace, and devotion.",
    quote: "Seeing Victoria's smile brighten beside Alexander fills our hearts with pride.",
  },
  {
    name: "Grandmother Beatrice",
    relation: "Grandmother",
    description: "Bestowing heritage wisdom, blessed heirloom jewels, and unconditional blessings.",
    quote: "True love is a flower that blooms forever in the garden of the heart.",
  },
  {
    name: "Isabella & William",
    relation: "Sister & Brother-in-Law",
    description: "Victoria's beloved sister, maid of honor, and cherished anchor.",
    quote: "You two are made for each other. Let the royal celebrations begin!",
  },
  {
    name: "Henry Montgomery",
    relation: "Brother of the Bride",
    description: "The groom's sidekick and guardian of wedding dance floor energy.",
    quote: "Cheers to the best couple in the world!",
  },
];

function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 30" className={className} fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M10 15 Q40 5 70 15" />
      <path d="M22 13 q3 -6 8 -6" />
      <path d="M32 10 q3 -6 8 -6" />
      <path d="M42 9 q3 -6 8 -6" />
      <path d="M52 10 q3 -6 8 -6" />
      <path d="M22 17 q3 6 8 6" />
      <path d="M32 20 q3 6 8 6" />
      <path d="M42 21 q3 6 8 6" />
      <path d="M52 20 q3 6 8 6" />
    </svg>
  );
}

export function FamilySection() {
  const [activeModal, setActiveModal] = useState<"groom" | "bride" | null>(null);

  return (
    <section className="mt-24 sm:mt-32 py-12 sm:py-20 relative select-none w-full">
      {/* SECTION HEADER (SLIDE FROM TOP) */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto px-4 mb-16 sm:mb-20"
      >
        <p className="tracking-[0.35em] text-xs uppercase text-[color:var(--color-gold-deep)] font-bold mb-3">
          HERITAGE & LINEAGE
        </p>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase text-[color:var(--color-mauve-deep)] font-bold">
          ROYAL FAMILIES OF BRIDE & GROOM
        </h2>
        <div className="mt-4 flex justify-center text-[color:var(--color-mauve)]">
          <Sprig className="w-24 h-8" />
        </div>
      </motion.div>

      {/* CARDS GRID (GROOM SLIDES LEFT, BRIDE SLIDES RIGHT) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        
        {/* GROOM FAMILY CARD (SLIDE FROM LEFT) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="soft-card rounded-[36px] p-8 sm:p-10 md:p-12 flex flex-col items-center justify-between text-center relative overflow-hidden border-2 border-[color:var(--color-gold)]/40 shadow-[0_25px_60px_rgba(76,52,47,0.14)] hover:border-[color:var(--color-gold)] transition-all duration-300 min-h-[520px] sm:min-h-[580px] md:min-h-[620px]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none" />

          <div className="flex flex-col items-center z-10 w-full">
            <span className="px-4 py-1.5 rounded-full bg-[color:var(--color-gold-light)]/80 border border-[color:var(--color-gold)]/50 text-[color:var(--color-gold-deep)] text-xs uppercase font-bold tracking-widest mb-6 flex items-center gap-1.5 shadow-xs">
              <Crown className="w-4 h-4 text-[#AA771C]" /> The Groom's Dynasty
            </span>

            <motion.div
              whileHover={{ scale: 1.06, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-gradient-to-tr from-white via-[#F5EBE1] to-[color:var(--color-gold-light)] border-2 border-[color:var(--color-gold)] shadow-xl mb-6 cursor-pointer"
              onClick={() => setActiveModal("groom")}
            >
              <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                <img
                  src={groomFamilyPhoto}
                  alt="Groom Alexander & Family"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[color:var(--color-mauve-deep)]">
              Alexander's Family
            </h3>
            <p className="text-xs sm:text-sm text-[color:var(--color-muted-ink)] mt-3 max-w-sm leading-relaxed font-normal">
              Son of Lord Richard & Lady Margaret. Carrying forward a proud royal legacy of honor, integrity, and warmth across generations.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-white/40 border border-[color:var(--color-gold)]/30 max-w-sm">
              <p className="font-[family-name:var(--font-script)] text-xl text-[color:var(--color-mauve-deep)] italic">
                "Love is not about looking at each other, but looking together in the same direction."
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveModal("groom")}
            className="mt-8 z-10 w-full sm:w-auto px-8 py-4 rounded-full bg-[color:var(--color-mauve-deep)] text-amber-50 text-xs font-bold uppercase tracking-widest hover:bg-[color:var(--color-mauve)] transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 border border-amber-200/30 cursor-pointer"
          >
            <Users className="w-4 h-4 text-[color:var(--color-gold-light)]" />
            <span>Explore Groom Family Tree</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* BRIDE FAMILY CARD (SLIDE FROM RIGHT) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="soft-card rounded-[36px] p-8 sm:p-10 md:p-12 flex flex-col items-center justify-between text-center relative overflow-hidden border-2 border-[color:var(--color-gold)]/40 shadow-[0_25px_60px_rgba(76,52,47,0.14)] hover:border-[color:var(--color-gold)] transition-all duration-300 min-h-[520px] sm:min-h-[580px] md:min-h-[620px]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none" />

          <div className="flex flex-col items-center z-10 w-full">
            <span className="px-4 py-1.5 rounded-full bg-[color:var(--color-gold-light)]/80 border border-[color:var(--color-gold)]/50 text-[color:var(--color-gold-deep)] text-xs uppercase font-bold tracking-widest mb-6 flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#AA771C]" /> The Bride's Dynasty
            </span>

            <motion.div
              whileHover={{ scale: 1.06, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 bg-gradient-to-tr from-white via-[#F5EBE1] to-[color:var(--color-gold-light)] border-2 border-[color:var(--color-gold)] shadow-xl mb-6 cursor-pointer"
              onClick={() => setActiveModal("bride")}
            >
              <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                <img
                  src={brideFamilyPhoto}
                  alt="Bride Victoria & Family"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <h3 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[color:var(--color-mauve-deep)]">
              Victoria's Family
            </h3>
            <p className="text-xs sm:text-sm text-[color:var(--color-muted-ink)] mt-3 max-w-sm leading-relaxed font-normal">
              Daughter of Dr. Arthur & Elizabeth Montgomery. A family renowned for academic brilliance, royal grace, and joy.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-white/40 border border-[color:var(--color-gold)]/30 max-w-sm">
              <p className="font-[family-name:var(--font-script)] text-xl text-[color:var(--color-mauve-deep)] italic">
                "Seeing Victoria's smile brighten beside Alexander fills our hearts with pride."
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveModal("bride")}
            className="mt-8 z-10 w-full sm:w-auto px-8 py-4 rounded-full bg-[color:var(--color-mauve-deep)] text-amber-50 text-xs font-bold uppercase tracking-widest hover:bg-[color:var(--color-mauve)] transition-all shadow-md hover:shadow-xl flex items-center justify-center gap-2 border border-amber-200/30 cursor-pointer"
          >
            <Users className="w-4 h-4 text-[color:var(--color-gold-light)]" />
            <span>Explore Bride Family Tree</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>

      {/* FAMILY TREE MODAL */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[color:var(--color-gold)] p-6 md:p-8 relative max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[color:var(--color-mauve-deep)] text-white flex items-center justify-center hover:bg-[color:var(--color-mauve)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-widest text-[color:var(--color-gold-deep)] font-bold">
                  {activeModal === "groom" ? "Alexander's Heritage" : "Victoria's Heritage"}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[color:var(--color-mauve-deep)]">
                  {activeModal === "groom" ? "Groom Family Tree & Blessings" : "Bride Family Tree & Blessings"}
                </h3>
              </div>

              <div className="relative h-60 rounded-2xl overflow-hidden mb-6 border border-[color:var(--color-gold)]/40 shadow-md">
                <img
                  src={activeModal === "groom" ? groomFamilyPhoto : brideFamilyPhoto}
                  alt="Family Portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                {(activeModal === "groom" ? GROOM_FAMILY_MEMBERS : BRIDE_FAMILY_MEMBERS).map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="soft-card rounded-xl p-4 border border-[color:var(--color-gold)]/20"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-[color:var(--color-mauve-deep)] text-base">
                        {member.name}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[color:var(--color-gold-light)] text-[color:var(--color-gold-deep)]">
                        {member.relation}
                      </span>
                    </div>
                    <p className="text-xs text-[color:var(--color-ink)] mb-2 leading-relaxed">
                      {member.description}
                    </p>
                    <p className="font-[family-name:var(--font-script)] text-lg text-[color:var(--color-mauve)] italic">
                      "{member.quote}"
                    </p>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={() => setActiveModal(null)}
                className="mt-6 w-full py-3 rounded-xl bg-[color:var(--color-mauve-deep)] text-amber-50 text-xs font-semibold uppercase tracking-widest hover:bg-[color:var(--color-mauve)] transition-colors shadow-md cursor-pointer"
              >
                Close Family Window
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
