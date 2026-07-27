import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Wine,
  Gem,
  UtensilsCrossed,
  Music,
  Sparkles,
  MapPin,
  Phone,
  Heart,
} from "lucide-react";
import couplePhoto from "../assets/couple.jpg";
import ringsPhoto from "../assets/rings.jpg";
import venuePhoto from "../assets/venue.jpg";
import floralArt from "../assets/floral.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexander & Victoria — Wedding Invitation" },
      {
        name: "description",
        content:
          "Join Alexander & Victoria for their wedding celebration on August 28, 2025 at Villa Love. Program, venue, RSVP and more.",
      },
      { property: "og:title", content: "Alexander & Victoria — Wedding Invitation" },
      {
        property: "og:description",
        content: "A gentle invitation to celebrate our love — 28.08.2025",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

const BRIDE = "Виктория";
const GROOM = "Александр";
// Countdown target (display date on the card stays 28·08·2025 as designed).
const EVENT_DATE = new Date(Date.now() + 65 * 86400000 + 18 * 3600000);

const PROGRAM = [
  { time: "15:00", title: "Сбор гостей", subtitle: "Welcome-фуршет", Icon: Wine },
  { time: "15:30", title: "Церемония", subtitle: "регистрации", Icon: Gem },
  { time: "16:10", title: "Поздравления", subtitle: "и фуршет", Icon: Sparkles },
  { time: "17:00", title: "Банкет", subtitle: "", Icon: UtensilsCrossed },
  { time: "22:00", title: "Танцы", subtitle: "и веселье", Icon: Music },
  { time: "23:30", title: "Завершение", subtitle: "вечера", Icon: Sparkles },
];

const DRESS_CODE = ["#EFE3CF", "#C7A9A0", "#A87F7A", "#6E7B5E", "#2C2620"];

/* ---------- Decorative bits ---------- */
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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl tracking-[0.15em] uppercase text-[color:var(--color-mauve-deep)]">
        {children}
      </h2>
      <div className="mt-3 flex justify-center text-[color:var(--color-mauve)]">
        <Sprig className="w-16 h-6" />
      </div>
    </div>
  );
}

function useCountdown(target: Date) {
  const [now, setNow] = useState<number>(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

function Invitation() {
  return (
    <div className="min-h-screen bg-cream text-[color:var(--color-ink)] font-[family-name:var(--font-body)]">
      <div className="mx-auto max-w-[440px] px-5 py-10 md:py-14 relative overflow-hidden">
        <Hero />
        <Greeting />
        <Program />
        <Venue />
        <DressCode />
        <Rsvp />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const { d, h, m, s } = useCountdown(EVENT_DATE);
  return (
    <section className="relative">
      <p className="text-center tracking-[0.35em] text-xs text-[color:var(--color-mauve)] uppercase mb-4">
        Наша свадьба
      </p>
      <div className="relative rounded-[220px] overflow-hidden shadow-[0_10px_40px_rgba(139,94,90,0.15)]">
        <img
          src={couplePhoto}
          alt="Александр и Виктория"
          width={800}
          height={1000}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="text-center mt-8 relative">
        <div className="divider-ornament text-[color:var(--color-mauve)] text-xs tracking-[0.3em]">
          ♡
        </div>
        <h1 className="mt-5 font-[family-name:var(--font-heading)] text-4xl tracking-[0.25em] text-[color:var(--color-mauve-deep)]">
          {GROOM.toUpperCase()}
        </h1>
        <p className="my-2 font-[family-name:var(--font-script)] text-3xl text-[color:var(--color-mauve)]">
          и
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl tracking-[0.25em] text-[color:var(--color-mauve-deep)]">
          {BRIDE.toUpperCase()}
        </h1>
        <p className="mt-6 tracking-[0.4em] text-sm text-[color:var(--color-muted-ink)]">
          28 · 08 · 2025
        </p>
        <p className="mt-6 italic text-lg text-[color:var(--color-muted-ink)]">
          С нетерпением ждём
          <br />
          встречи с вами!
        </p>
      </div>

      <div className="mt-10 text-center">
        <p className="tracking-[0.25em] text-xs uppercase text-[color:var(--color-mauve)] mb-3">
          До свадьбы осталось:
        </p>
        <div className="grid grid-cols-4 gap-2">
          {[
            { v: d, l: "дней" },
            { v: h, l: "часов" },
            { v: m, l: "минут" },
            { v: s, l: "секунд" },
          ].map((it) => (
            <div
              key={it.l}
              className="soft-card rounded-md py-3 flex flex-col items-center"
            >
              <span className="font-[family-name:var(--font-heading)] text-2xl text-[color:var(--color-mauve-deep)]">
                {String(it.v).padStart(2, "0")}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[color:var(--color-muted-ink)] mt-1">
                {it.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Greeting ---------- */
function Greeting() {
  return (
    <section className="mt-16">
      <div className="rounded-t-[180px] overflow-hidden shadow-[0_10px_40px_rgba(139,94,90,0.12)]">
        <img
          src={ringsPhoto}
          alt="Обручальные кольца"
          width={800}
          height={700}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="text-center mt-8 relative">
        <h3 className="font-[family-name:var(--font-heading)] tracking-[0.25em] text-xl text-[color:var(--color-mauve-deep)]">
          ДОРОГИЕ ДРУЗЬЯ!
        </h3>
        <div className="mt-3 flex justify-center text-[color:var(--color-mauve)]">
          <Sprig className="w-14 h-5" />
        </div>
        <p className="mt-5 italic text-[color:var(--color-muted-ink)] leading-relaxed">
          Мы будем счастливы разделить
          <br />
          этот особенный день вместе с вами.
          <br />
          Приглашаем вас на нашу свадьбу!
        </p>
        <div className="mt-6 text-[color:var(--color-mauve)] text-2xl">♡</div>
        <img
          src={floralArt}
          alt=""
          aria-hidden
          className="mt-4 mx-auto w-40 opacity-90"
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* ---------- Program ---------- */
function Program() {
  return (
    <section className="mt-20">
      <SectionTitle>Программа дня</SectionTitle>
      <div className="mt-10 relative">
        <div className="absolute left-6 top-4 bottom-4 border-l border-dashed border-[color:var(--color-mauve)]/40" />
        <div className="space-y-7">
          {PROGRAM.map(({ time, title, subtitle, Icon }, i) => (
            <motion.div
              key={time}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-5 relative"
            >
              <div className="h-12 w-12 rounded-full bg-[color:var(--color-mauve)] text-[color:var(--color-cream-soft)] flex items-center justify-center shadow-md shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="font-[family-name:var(--font-heading)] text-xl text-[color:var(--color-mauve-deep)]">
                  {time}
                </div>
                <div className="text-[color:var(--color-muted-ink)] leading-tight">
                  {title}
                  {subtitle && (
                    <>
                      <br />
                      {subtitle}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Venue ---------- */
function Venue() {
  return (
    <section className="mt-20">
      <SectionTitle>Место проведения</SectionTitle>
      <div className="mt-8 text-center">
        <p className="flex items-center justify-center gap-2 text-[color:var(--color-muted-ink)]">
          <MapPin className="w-4 h-4 text-[color:var(--color-mauve)]" />
          Загородный отель «Villa Love»
        </p>
        <p className="text-sm text-[color:var(--color-muted-ink)]/80 mt-1">
          Московская область, д. Лапино
        </p>
        <a
          href="https://maps.google.com/?q=Villa+Love+Lapino"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 px-6 py-3 rounded-sm bg-[color:var(--color-mauve)] text-[color:var(--color-cream-soft)] tracking-[0.2em] text-xs uppercase hover:bg-[color:var(--color-mauve-deep)] transition-colors"
        >
          Посмотреть на карте
        </a>
        <div className="mt-6 rounded-t-[120px] overflow-hidden shadow-[0_10px_30px_rgba(139,94,90,0.15)]">
          <img
            src={venuePhoto}
            alt="Villa Love"
            width={800}
            height={600}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Dress code ---------- */
function DressCode() {
  return (
    <section className="mt-20">
      <SectionTitle>Дресс-код</SectionTitle>
      <p className="text-center mt-6 text-[color:var(--color-muted-ink)] italic">
        Мы будем рады, если вы
        <br />
        поддержите цветовую гамму
        <br />
        нашей свадьбы
      </p>
      <div className="mt-6 flex justify-center gap-3">
        {DRESS_CODE.map((c) => (
          <div
            key={c}
            className="h-10 w-10 rounded-full border border-white shadow-md"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------- RSVP ---------- */
function Rsvp() {
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [drink, setDrink] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#A87F7A", "#E8D5CC", "#9AA88E", "#EFE3CF"],
    });
  };

  return (
    <section className="mt-20">
      <SectionTitle>Анкета гостя</SectionTitle>
      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <div>
          <p className="text-[color:var(--color-muted-ink)] mb-3 italic">
            Подтвердите, пожалуйста,
            <br />
            ваше присутствие
          </p>
          <div className="space-y-2">
            {[
              { v: "yes", l: "С радостью приду" },
              { v: "no", l: "К сожалению, не смогу" },
            ].map((o) => (
              <label key={o.v} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="attend"
                  className="accent-[color:var(--color-mauve)]"
                  checked={attending === o.v}
                  onChange={() => setAttending(o.v as "yes" | "no")}
                />
                <span className="text-[color:var(--color-muted-ink)]">{o.l}</span>
              </label>
            ))}
          </div>
        </div>

        <Field label="Ваше имя и фамилия" placeholder="Введите текст" />

        <div>
          <p className="text-center tracking-[0.2em] text-xs uppercase text-[color:var(--color-mauve-deep)]">
            Напитки
          </p>
          <p className="text-center text-sm text-[color:var(--color-muted-ink)] mt-1 mb-3">
            Что бы вы предпочли?
          </p>
          <div className="space-y-2">
            {["Вино (белое / красное)", "Шампанское", "Без алкоголя"].map((o) => (
              <label key={o} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="drink"
                  className="accent-[color:var(--color-mauve)]"
                  checked={drink === o}
                  onChange={() => setDrink(o)}
                />
                <span className="text-[color:var(--color-muted-ink)]">{o}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="text-center tracking-[0.2em] text-xs uppercase text-[color:var(--color-mauve-deep)]">
            Ваши пожелания
          </p>
          <p className="text-center text-sm text-[color:var(--color-muted-ink)] mt-1 mb-3">
            Напишите несколько тёплых слов
          </p>
          <textarea
            maxLength={500}
            rows={4}
            placeholder="Введите текст"
            className="w-full soft-card rounded-md px-4 py-3 outline-none focus:border-[color:var(--color-mauve)] resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-sm bg-[color:var(--color-mauve)] text-[color:var(--color-cream-soft)] tracking-[0.2em] text-xs uppercase hover:bg-[color:var(--color-mauve-deep)] transition-colors"
        >
          {sent ? "Спасибо!" : "Отправить ответ"}
        </button>
      </form>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <p className="text-center tracking-[0.2em] text-xs uppercase text-[color:var(--color-mauve-deep)] mb-3">
        {label}
      </p>
      <input
        maxLength={100}
        placeholder={placeholder}
        className="w-full soft-card rounded-md px-4 py-3 outline-none focus:border-[color:var(--color-mauve)]"
      />
    </div>
  );
}

/* ---------- Contacts ---------- */
function Contacts() {
  return (
    <section className="mt-20 text-center">
      <SectionTitle>Контакты</SectionTitle>
      <p className="mt-6 italic text-[color:var(--color-muted-ink)]">
        Если у вас возникнут вопросы,
        <br />
        мы всегда на связи!
      </p>
      <div className="mt-6 space-y-4">
        {[
          { name: "Александр", phone: "+7 999 123-45-67" },
          { name: "Виктория", phone: "+7 999 765-43-21" },
        ].map((c) => (
          <a
            key={c.name}
            href={`tel:${c.phone.replace(/\s|-/g, "")}`}
            className="flex items-center justify-center gap-3 text-[color:var(--color-mauve-deep)]"
          >
            <span className="h-10 w-10 rounded-full bg-[color:var(--color-mauve)] text-[color:var(--color-cream-soft)] flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </span>
            <span className="text-left">
              <div className="font-medium">{c.phone}</div>
              <div className="text-sm text-[color:var(--color-muted-ink)]">
                ({c.name})
              </div>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section className="mt-16 text-center relative">
      <p className="font-[family-name:var(--font-script)] text-3xl leading-tight text-[color:var(--color-mauve-deep)]">
        Спасибо, что будете
        <br />с нами в этот
        <br />
        особенный день!
      </p>
      <div className="mt-6 text-[color:var(--color-mauve)] text-xl flex items-center justify-center gap-2">
        <Heart className="w-4 h-4 fill-current" />
      </div>
      <img
        src={floralArt}
        alt=""
        aria-hidden
        className="mt-4 mx-auto w-40 opacity-90"
        loading="lazy"
      />
    </section>
  );
}
