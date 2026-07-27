import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  ChevronLeft,
  ChevronRight,
  Gem,
  Wine,
  Camera,
  UtensilsCrossed,
  Music,
  MapPin,
  Phone,
  MessageCircle,
  Heart,
  Users,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rachelle & Michael — A Royal Engagement" },
      {
        name: "description",
        content:
          "Join Rachelle & Michael for a royal Indian engagement celebration — itinerary, RSVP, gallery, blessings and more.",
      },
      { property: "og:title", content: "Rachelle & Michael — A Royal Engagement" },
      {
        property: "og:description",
        content: "A royal invitation to our engagement celebration.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

const TOTAL = 9;
const BRIDE = "Rachelle";
const GROOM = "Michael";
const EVENT_DATE = new Date("2026-12-14T18:00:00");

/* ---------- Small decorative SVGs ---------- */
function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 30" className={className} fill="none">
      <path d="M0 15 H120" stroke="url(#g)" strokeWidth="1" />
      <path d="M180 15 H300" stroke="url(#g)" strokeWidth="1" />
      <path
        d="M150 5 L155 12 L165 13 L157 19 L160 28 L150 23 L140 28 L143 19 L135 13 L145 12 Z"
        stroke="#D4AF37"
        strokeWidth="1"
        fill="#D4AF3722"
      />
      <circle cx="125" cy="15" r="2" fill="#D4AF37" />
      <circle cx="175" cy="15" r="2" fill="#D4AF37" />
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#D4AF3700" />
          <stop offset="1" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Mandala({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" stroke="#D4AF37">
      <g strokeWidth="0.8" opacity="0.6">
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="150" />
        <circle cx="200" cy="200" r="110" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="70" />
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={i}
            x1="200"
            y1="10"
            x2="200"
            y2="70"
            transform={`rotate(${i * 15} 200 200)`}
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={i}
            d="M200 90 Q220 130 200 170 Q180 130 200 90 Z"
            transform={`rotate(${i * 30} 200 200)`}
          />
        ))}
      </g>
    </svg>
  );
}

function RoyalCrest({ className = "", animated = false }: { className?: string; animated?: boolean }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <defs>
        <linearGradient id="gold-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFD700" />
          <stop offset="0.5" stopColor="#D4AF37" />
          <stop offset="1" stopColor="#8B6914" />
        </linearGradient>
      </defs>
      <motion.g
        stroke="url(#gold-g)"
        strokeWidth="1.5"
        fill="none"
        initial={animated ? { pathLength: 0 } : false}
        animate={animated ? { pathLength: 1 } : {}}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      >
        <circle cx="100" cy="100" r="80" />
        <circle cx="100" cy="100" r="65" strokeDasharray="2 3" />
        <path d="M100 25 L108 45 L100 40 L92 45 Z" fill="url(#gold-g)" />
        <circle cx="85" cy="100" r="18" />
        <circle cx="115" cy="100" r="18" />
        <path d="M60 150 Q100 175 140 150" />
        <path d="M100 40 L100 30" strokeWidth="2" />
      </motion.g>
      <text
        x="100"
        y="107"
        textAnchor="middle"
        fill="#FFD700"
        fontSize="14"
        fontFamily="Cinzel Decorative, serif"
        fontWeight="700"
      >
        R & M
      </text>
    </svg>
  );
}

/* ---------- Nav Bar ---------- */
function NavBar({
  page,
  setPage,
}: {
  page: number;
  setPage: (n: number) => void;
}) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-black/40">
        <motion.div
          className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37]"
          animate={{ width: `${((page + 1) / TOTAL) * 100}%` }}
          transition={{ type: "spring", damping: 20 }}
        />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-3 pt-2 bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-sm">
        <div className="mx-auto max-w-3xl flex items-center justify-between gap-3">
          <button
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
            className="flex items-center gap-1 min-h-12 px-4 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] text-sm font-heading tracking-widest uppercase disabled:opacity-30 disabled:pointer-events-none hover:bg-[#D4AF37]/10 transition"
          >
            <ChevronLeft size={18} /> Prev
          </button>
          <div className="font-heading text-xs sm:text-sm tracking-[0.3em] text-[#E8C86A]">
            {page + 1} / {TOTAL}
          </div>
          <button
            onClick={() => setPage(Math.min(TOTAL - 1, page + 1))}
            disabled={page === TOTAL - 1}
            className="flex items-center gap-1 min-h-12 px-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#5B0E2D] text-sm font-heading tracking-widest uppercase disabled:opacity-30 disabled:pointer-events-none shadow-[0_0_20px_rgba(255,215,0,0.5)]"
          >
            Next <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </>
  );
}

/* ---------- PAGE 1 ---------- */
function Page1({ next }: { next: () => void }) {
  const [opened, setOpened] = useState(false);
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-royal">
      <div className="absolute inset-0 opacity-20">
        <Mandala className="absolute -top-40 -left-40 w-[600px] h-[600px] animate-spin-slow" />
      </div>
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.button
            key="seal"
            onClick={() => setOpened(true)}
            exit={{ scale: 20, rotate: 180, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="relative z-10 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="animate-pulse-glow">
              <RoyalCrest className="w-56 h-56 sm:w-72 sm:h-72" animated />
            </div>
            <p className="mt-8 font-heading tracking-[0.4em] text-[#E8C86A] text-xs sm:text-sm animate-pulse">
              TAP THE SEAL TO OPEN
            </p>
          </motion.button>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10 text-center px-6 pb-32"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Ornament className="w-64 mx-auto mb-6" />
              <p className="font-body italic text-[#E8C86A] text-lg tracking-wide">
                Together with their families
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="font-script text-6xl sm:text-8xl my-6 text-gold-shine leading-tight"
            >
              {BRIDE}
              <span className="block text-4xl sm:text-5xl font-display my-2 text-[#D4AF37]">&</span>
              {GROOM}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="font-body text-[#FDFBF7]/90 text-lg tracking-wide"
            >
              invite you to celebrate their
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="font-heading text-2xl sm:text-3xl mt-2 tracking-[0.3em] text-[#FFD700]"
            >
              ENGAGEMENT
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="mt-8 font-body text-[#FDFBF7]"
            >
              <p className="text-xl">14th December 2026</p>
              <p className="text-sm mt-1 tracking-widest text-[#E8C86A]">THE TAJ PALACE • MUMBAI</p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5 }}
              onClick={next}
              className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#5B0E2D] font-heading tracking-[0.25em] text-sm shadow-[0_0_30px_rgba(255,215,0,0.5)]"
            >
              BEGIN JOURNEY →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- PAGE 2 ---------- */
const EVENTS = [
  { icon: Gem, title: "Ring Ceremony", time: "6:00 PM", venue: "Durbar Hall", dress: "Royal Traditional" },
  { icon: Camera, title: "Photo Session", time: "7:15 PM", venue: "Rose Courtyard", dress: "Bring Your Smile" },
  { icon: Wine, title: "Cocktail Hour", time: "8:00 PM", venue: "Emerald Lounge", dress: "Semi-Formal" },
  { icon: UtensilsCrossed, title: "Royal Dinner", time: "9:00 PM", venue: "Grand Ballroom", dress: "Traditional" },
  { icon: Music, title: "Sangeet & Dance", time: "10:30 PM", venue: "Sky Terrace", dress: "Festive Chic" },
];
function Page2() {
  return (
    <div className="relative min-h-screen bg-royal px-4 pt-16 pb-32 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <Ornament className="w-56 mx-auto mb-4" />
          <h2 className="font-display text-4xl sm:text-5xl text-gold-shine">The Program</h2>
          <p className="font-body italic text-[#E8C86A] mt-2">An evening of joy & tradition</p>
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="space-y-4"
        >
          {EVENTS.map((e, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.02 }}
              className="royal-card rounded-2xl p-5 flex items-center gap-4 group cursor-pointer"
            >
              <div className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center border border-[#D4AF37] bg-[#5B0E2D] text-[#FFD700] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] transition">
                <e.icon size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-heading tracking-widest text-[#FFD700] text-sm sm:text-base">
                  {e.title.toUpperCase()}
                </h3>
                <p className="font-body text-[#FDFBF7] text-sm sm:text-base">
                  {e.time} · {e.venue}
                </p>
                <p className="font-body italic text-xs text-[#E8C86A] mt-1">Dress: {e.dress}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- PAGE 3 ---------- */
function Page3() {
  const [modal, setModal] = useState<"bride" | "groom" | null>(null);
  const families = {
    bride: {
      name: BRIDE,
      title: "Meet the Bride's Family",
      members: [
        { name: "Mr. Anand Sharma", role: "Father" },
        { name: "Mrs. Priya Sharma", role: "Mother" },
        { name: "Rohan Sharma", role: "Brother" },
        { name: "Kavya Sharma", role: "Sister" },
      ],
    },
    groom: {
      name: GROOM,
      title: "Meet the Groom's Family",
      members: [
        { name: "Mr. Vikram Kapoor", role: "Father" },
        { name: "Mrs. Meera Kapoor", role: "Mother" },
        { name: "Arjun Kapoor", role: "Brother" },
        { name: "Ananya Kapoor", role: "Sister" },
      ],
    },
  };
  return (
    <div className="relative min-h-screen bg-royal px-4 pt-16 pb-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <Ornament className="w-56 mx-auto mb-4" />
          <h2 className="font-display text-4xl sm:text-5xl text-gold-shine">Our Families</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {(["bride", "groom"] as const).map((side) => {
            const f = families[side];
            return (
              <motion.div
                key={side}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="royal-card rounded-2xl p-6 text-center"
              >
                <div className="mx-auto w-32 h-40 rounded-t-full border-2 border-[#D4AF37] overflow-hidden bg-gradient-to-b from-[#0F382C] to-[#5B0E2D] flex items-end justify-center">
                  <div className="text-6xl font-script text-[#FFD700]">{f.name[0]}</div>
                </div>
                <h3 className="font-display text-2xl text-[#FFD700] mt-4">{f.name}</h3>
                <p className="font-body italic text-[#FDFBF7]/80 text-sm mt-2 px-2">
                  {side === "bride"
                    ? "A soul of grace and laughter, an artist at heart."
                    : "A gentleman of warmth and wit, an old soul with big dreams."}
                </p>
                <button
                  onClick={() => setModal(side)}
                  className="mt-5 min-h-12 px-5 rounded-full border border-[#D4AF37] text-[#FFD700] font-heading tracking-widest text-xs hover:bg-[#D4AF37]/10"
                >
                  MEET FAMILY
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="royal-card rounded-3xl p-6 max-w-md w-full max-h-[80vh] overflow-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display text-2xl text-[#FFD700]">{families[modal].title}</h3>
                <button onClick={() => setModal(null)} className="text-[#FFD700]"><X /></button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {families[modal].members.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="mx-auto w-20 h-24 rounded-t-full border border-[#D4AF37] bg-gradient-to-b from-[#0F382C] to-[#5B0E2D] flex items-end justify-center pb-1">
                      <span className="text-2xl font-script text-[#FFD700]">{m.name[4] ?? m.name[0]}</span>
                    </div>
                    <p className="font-heading text-xs tracking-widest text-[#FFD700] mt-2">{m.name}</p>
                    <p className="font-body italic text-xs text-[#E8C86A]">{m.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- PAGE 4 ---------- */
const IMAGES = [
  { cat: "couple", hue: 340 },
  { cat: "couple", hue: 15 },
  { cat: "family", hue: 150 },
  { cat: "couple", hue: 40 },
  { cat: "family", hue: 280 },
  { cat: "couple", hue: 200 },
  { cat: "family", hue: 90 },
  { cat: "couple", hue: 320 },
  { cat: "family", hue: 60 },
];
function Page4() {
  const [filter, setFilter] = useState<"all" | "couple" | "family">("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = IMAGES.map((im, i) => ({ ...im, i })).filter(
    (im) => filter === "all" || im.cat === filter,
  );
  const tabs = ["all", "couple", "family"] as const;
  return (
    <div className="relative min-h-screen bg-royal px-4 pt-16 pb-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Ornament className="w-56 mx-auto mb-4" />
          <h2 className="font-display text-4xl sm:text-5xl text-gold-shine">Memories</h2>
        </div>
        <div className="flex justify-center gap-2 mb-6">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className="relative px-5 min-h-12 font-heading tracking-widest text-xs text-[#FFD700]"
            >
              {filter === t && (
                <motion.div
                  layoutId="filter-tab"
                  className="absolute inset-0 rounded-full border border-[#D4AF37] bg-[#D4AF37]/15"
                />
              )}
              <span className="relative">{t.toUpperCase()}</span>
            </button>
          ))}
        </div>
        <div className="columns-2 sm:columns-3 gap-3 space-y-3">
          {filtered.map((im) => (
            <motion.div
              key={im.i}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setLightbox(im.i)}
              className="break-inside-avoid overflow-hidden rounded-xl border border-[#D4AF37]/40 cursor-pointer relative group"
              style={{
                aspectRatio: (im.i % 2 ? 3 : 4) / (im.i % 3 ? 4 : 3),
                background: `linear-gradient(135deg, hsl(${im.hue} 60% 30%), hsl(${im.hue + 30} 70% 20%))`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition">
                <Heart className="text-[#FFD700]" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + IMAGES.length) % IMAGES.length); }}
              className="absolute left-4 text-[#FFD700] p-3"
            ><ChevronLeft size={32} /></button>
            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-lg aspect-square rounded-2xl border-2 border-[#D4AF37]"
              style={{
                background: `linear-gradient(135deg, hsl(${IMAGES[lightbox].hue} 60% 30%), hsl(${IMAGES[lightbox].hue + 30} 70% 20%))`,
              }}
            />
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % IMAGES.length); }}
              className="absolute right-4 text-[#FFD700] p-3"
            ><ChevronRight size={32} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- PAGE 5 ---------- */
function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
function Page5() {
  const c = useCountdown(EVENT_DATE);
  const boxes = [
    { label: "Days", val: c.days },
    { label: "Hours", val: c.hours },
    { label: "Minutes", val: c.minutes },
    { label: "Seconds", val: c.seconds },
  ];
  return (
    <div className="relative min-h-screen bg-royal px-4 pt-16 pb-32 flex flex-col items-center justify-center overflow-hidden">
      <Mandala className="absolute w-[700px] h-[700px] opacity-20 animate-spin-slow" />
      <div className="relative z-10 text-center">
        <Ornament className="w-56 mx-auto mb-6" />
        <h2 className="font-display text-4xl sm:text-5xl text-gold-shine mb-2">The Countdown</h2>
        <p className="font-body italic text-[#E8C86A] mb-10">Until our forever begins</p>
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
          {boxes.map((b) => (
            <div key={b.label} className="royal-card rounded-xl p-3 sm:p-4">
              <div className="h-12 sm:h-16 overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={b.val}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    className="font-display text-3xl sm:text-5xl text-[#FFD700]"
                  >
                    {String(b.val).padStart(2, "0")}
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="font-heading tracking-widest text-[9px] sm:text-xs text-[#E8C86A] mt-2">
                {b.label.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- PAGE 6 ---------- */
function Page6() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", count: "1", food: "veg" });
  const fire = () => {
    const shoot = (angle: number, origin: { x: number; y: number }) => {
      confetti({
        particleCount: 80,
        spread: 70,
        angle,
        origin,
        colors: ["#D4AF37", "#FFD700", "#5B0E2D", "#FDFBF7"],
      });
    };
    shoot(60, { x: 0, y: 1 });
    shoot(120, { x: 1, y: 1 });
    setTimeout(() => {
      confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 }, colors: ["#D4AF37", "#FFD700", "#5B0E2D"] });
    }, 400);
    setTimeout(() => shoot(90, { x: 0.5, y: 0.7 }), 900);
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    fire();
    setDone(true);
  };
  return (
    <div className="relative min-h-screen bg-royal px-4 pt-16 pb-32 flex items-center justify-center">
      <div className="royal-card rounded-3xl p-6 sm:p-8 max-w-md w-full">
        <Ornament className="w-40 mx-auto mb-4" />
        <h2 className="font-display text-3xl sm:text-4xl text-gold-shine text-center">RSVP</h2>
        <p className="font-body italic text-center text-[#E8C86A] mb-6">Kindly grace us with your reply</p>
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.form
              key="form"
              onSubmit={submit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4"
            >
              <input
                required
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full min-h-12 px-4 rounded-lg bg-[#5B0E2D]/60 border border-[#D4AF37]/50 text-[#FDFBF7] placeholder-[#E8C86A]/60 font-body"
              />
              <input
                required
                type="number"
                min={1}
                placeholder="Number of guests"
                value={form.count}
                onChange={(e) => setForm({ ...form, count: e.target.value })}
                className="w-full min-h-12 px-4 rounded-lg bg-[#5B0E2D]/60 border border-[#D4AF37]/50 text-[#FDFBF7] placeholder-[#E8C86A]/60 font-body"
              />
              <div className="flex gap-2">
                {["veg", "non-veg"].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setForm({ ...form, food: f })}
                    className={`flex-1 min-h-12 rounded-lg border font-heading text-xs tracking-widest ${
                      form.food === f
                        ? "bg-[#D4AF37] text-[#5B0E2D] border-[#D4AF37]"
                        : "border-[#D4AF37]/50 text-[#E8C86A]"
                    }`}
                  >
                    {f.toUpperCase()}
                  </button>
                ))}
              </div>
              <button
                type="submit"
                className="w-full min-h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#5B0E2D] font-heading tracking-[0.2em] text-sm shadow-[0_0_25px_rgba(255,215,0,0.4)]"
              >
                ACCEPT INVITATION
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <Heart className="mx-auto text-[#FFD700]" size={48} />
              <p className="font-display text-2xl text-[#FFD700] mt-4">Thank you, {form.name}!</p>
              <p className="font-body italic text-[#FDFBF7]/90 mt-2">
                We can't wait to celebrate with you!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---------- PAGE 7 ---------- */
function Page7() {
  const [messages, setMessages] = useState<{ name: string; msg: string }[]>([
    { name: "Aunty Meera", msg: "May your love be as timeless as the stars. Blessings always!" },
    { name: "Rohan", msg: "So proud of you both. Wishing you a lifetime of laughter." },
    { name: "The Kapoors", msg: "Welcome to the family, dearest. Our joy knows no bounds." },
  ]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !msg) return;
    setMessages([{ name, msg }, ...messages]);
    setName(""); setMsg("");
  };
  return (
    <div className="relative min-h-screen bg-royal px-4 pt-16 pb-32">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Ornament className="w-56 mx-auto mb-4" />
          <h2 className="font-display text-4xl sm:text-5xl text-gold-shine">Wall of Blessings</h2>
        </div>
        <form onSubmit={submit} className="royal-card rounded-2xl p-5 mb-6 space-y-3">
          <input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full min-h-12 px-4 rounded-lg bg-[#5B0E2D]/60 border border-[#D4AF37]/50 text-[#FDFBF7] placeholder-[#E8C86A]/60 font-body"
          />
          <textarea
            placeholder="Leave a blessing..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-lg bg-[#5B0E2D]/60 border border-[#D4AF37]/50 text-[#FDFBF7] placeholder-[#E8C86A]/60 font-body"
          />
          <button className="w-full min-h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#5B0E2D] font-heading tracking-widest text-sm">
            SEND BLESSING
          </button>
        </form>
        <div className="space-y-3">
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <motion.div
                key={m.name + i}
                layout
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="rounded-xl p-4 border border-[#D4AF37]/40"
                style={{
                  background: "linear-gradient(145deg, #f5e6c8, #e8d5a3)",
                  color: "#5B0E2D",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                <p className="font-body italic text-base">"{m.msg}"</p>
                <p className="font-heading tracking-widest text-xs mt-2 text-[#5B0E2D]">— {m.name.toUpperCase()}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ---------- PAGE 8 ---------- */
function Page8() {
  const contacts = [
    { side: "Bride's Side", name: "Rohan Sharma", role: "Brother of Bride", phone: "+919876543210" },
    { side: "Groom's Side", name: "Arjun Kapoor", role: "Brother of Groom", phone: "+919812345678" },
  ];
  return (
    <div className="relative min-h-screen bg-royal px-4 pt-16 pb-32">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Ornament className="w-56 mx-auto mb-4" />
          <h2 className="font-display text-4xl sm:text-5xl text-gold-shine">Venue & Contacts</h2>
        </div>
        <div className="royal-card rounded-2xl p-4 mb-6">
          <div className="rounded-xl overflow-hidden border border-[#D4AF37] aspect-video">
            <iframe
              title="Venue"
              src="https://www.google.com/maps?q=Taj+Mahal+Palace+Mumbai&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-between mt-4 gap-3">
            <div className="min-w-0">
              <p className="font-heading tracking-widest text-[#FFD700] text-sm">THE TAJ PALACE</p>
              <p className="font-body text-[#FDFBF7]/80 text-sm truncate">Apollo Bunder, Mumbai</p>
            </div>
            <a
              href="https://maps.google.com/?q=Taj+Mahal+Palace+Mumbai"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 flex items-center gap-1 min-h-12 px-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#5B0E2D] font-heading text-xs tracking-widest"
            >
              <MapPin size={16} /> OPEN
            </a>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((c) => (
            <div key={c.name} className="royal-card rounded-2xl p-5">
              <p className="font-heading tracking-widest text-xs text-[#E8C86A]">{c.side.toUpperCase()}</p>
              <p className="font-display text-xl text-[#FFD700] mt-1">{c.name}</p>
              <p className="font-body italic text-[#FDFBF7]/80 text-sm">{c.role}</p>
              <div className="flex gap-2 mt-4">
                <a
                  href={`tel:${c.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 min-h-12 rounded-full border border-[#D4AF37] text-[#FFD700] font-heading text-xs tracking-widest"
                >
                  <Phone size={16} /> CALL
                </a>
                <a
                  href={`https://wa.me/${c.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 min-h-12 rounded-full bg-[#0F382C] border border-[#D4AF37] text-[#FFD700] font-heading text-xs tracking-widest"
                >
                  <MessageCircle size={16} /> WHATSAPP
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- PAGE 9 ---------- */
function Page9() {
  return (
    <div className="relative min-h-screen bg-royal px-4 pt-16 pb-32 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <RoyalCrest className="w-[500px] h-[500px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-xl"
      >
        <div className="animate-pulse-glow inline-block">
          <RoyalCrest className="w-32 h-32 mx-auto" />
        </div>
        <p className="font-body italic text-xl sm:text-2xl text-[#FDFBF7] mt-8 leading-relaxed">
          "Two families join, two hearts unite,<br />
          one journey begins beneath a golden light."
        </p>
        <div className="my-10">
          <Ornament className="w-56 mx-auto" />
        </div>
        <h3 className="font-script text-6xl sm:text-7xl text-gold-shine">
          {GROOM} & {BRIDE}
        </h3>
        <p className="font-heading tracking-[0.3em] text-[#E8C86A] mt-8 text-xs sm:text-sm">
          THANK YOU FOR BEING A PART OF OUR MAGICAL BEGINNING
        </p>
      </motion.div>
    </div>
  );
}

/* ---------- Root ---------- */
function Invitation() {
  const [page, setPage] = useState(0);
  const pages = useMemo(
    () => [
      <Page1 next={() => setPage(1)} />,
      <Page2 />,
      <Page3 />,
      <Page4 />,
      <Page5 />,
      <Page6 />,
      <Page7 />,
      <Page8 />,
      <Page9 />,
    ],
    [],
  );
  return (
    <div className="min-h-screen bg-[#3d0820] text-[#FDFBF7] overflow-x-hidden font-body">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {pages[page]}
        </motion.div>
      </AnimatePresence>
      <NavBar page={page} setPage={setPage} />
    </div>
  );
}