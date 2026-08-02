import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle2, X, Edit3, Send } from "lucide-react";
import royalSealPhoto from "../assets/royal_seal.png";
import {
  defaultRsvpSettings,
  getEffectiveRsvpSettingsAndStage,
  RsvpSettings,
  RsvpStage,
  RsvpFieldConfig,
} from "../config/rsvpConfig";

// Line-Art Engraved Bottom Border SVG
function EngravedBottomBorder() {
  return (
    <svg
      viewBox="0 0 700 90"
      className="w-full max-w-3xl h-20 sm:h-24 my-4 pointer-events-none select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="rsvpGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#AA771C" stopOpacity="0.2" />
          <stop offset="20%" stopColor="#D4AF37" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#FFF1B0" stopOpacity="1" />
          <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="60%" stopColor="#FFF1B0" stopOpacity="1" />
          <stop offset="80%" stopColor="#D4AF37" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#AA771C" stopOpacity="0.2" />
        </linearGradient>

        <filter id="rsvpGlow" x="-20%" y="-50%" width="140%" height="200%">
          <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#FFD700" floodOpacity="0.5" />
        </filter>
      </defs>

      <g stroke="url(#rsvpGoldGrad)" strokeWidth="1.5" filter="url(#rsvpGlow)">
        <path d="M 350 35 C 270 10, 190 55, 70 30 C 40 20, 20 35, 10 30" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 350 35 C 430 10, 510 55, 630 30 C 660 20, 680 35, 690 30" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 350 42 C 290 25, 220 50, 120 35" strokeWidth="1" strokeDasharray="4 3" opacity="0.8" />
        <path d="M 350 42 C 410 25, 480 50, 580 35" strokeWidth="1" strokeDasharray="4 3" opacity="0.8" />
        <path d="M 230 26 Q 210 12, 190 26 Q 210 38, 230 26 Z" fill="#D4AF37" fillOpacity="0.2" strokeWidth="1" />
        <path d="M 470 26 Q 490 12, 510 26 Q 490 38, 470 26 Z" fill="#D4AF37" fillOpacity="0.2" strokeWidth="1" />
        <path d="M 80 65 Q 350 90, 620 65" strokeWidth="1.2" strokeDasharray="2 8" strokeLinecap="round" />
        <circle cx="190" cy="26" r="2.5" fill="#FFD700" stroke="#AA771C" strokeWidth="0.5" />
        <circle cx="510" cy="26" r="2.5" fill="#FFD700" stroke="#AA771C" strokeWidth="0.5" />
        <circle cx="120" cy="35" r="2" fill="#D4AF37" />
        <circle cx="580" cy="35" r="2" fill="#D4AF37" />
        <circle cx="40" cy="25" r="1.5" fill="#D4AF37" />
        <circle cx="660" cy="25" r="1.5" fill="#D4AF37" />
      </g>

      <g transform="translate(350, 35)" filter="url(#rsvpGlow)">
        <polygon points="0,-18 14,0 0,18 -14,0" fill="#FFFDF9" stroke="url(#rsvpGoldGrad)" strokeWidth="1.6" />
        <polygon points="0,-10 8,0 0,10 -8,0" fill="#D4AF37" fillOpacity="0.3" stroke="#AA771C" strokeWidth="1" />
        <circle cx="0" cy="0" r="2.5" fill="#FFD700" />
        <path d="M 0,-24 L 0,24 M -24,0 L 24,0" stroke="url(#rsvpGoldGrad)" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Gold Filigree Line Flourish SVG
function GoldFlourish() {
  return (
    <svg
      viewBox="0 0 240 30"
      className="w-44 sm:w-56 h-6 mx-auto my-2 pointer-events-none select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="flourishGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#AA771C" stopOpacity="0.3" />
          <stop offset="30%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFF1B0" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA771C" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <g stroke="url(#flourishGrad)" strokeWidth="1.4" strokeLinecap="round">
        <path d="M 120 15 Q 90 2, 50 15 Q 20 28, 0 15" />
        <path d="M 100 15 Q 80 8, 60 15" strokeWidth="0.9" opacity="0.7" />
        <path d="M 120 15 Q 150 2, 190 15 Q 220 28, 240 15" />
        <path d="M 140 15 Q 160 8, 180 15" strokeWidth="0.9" opacity="0.7" />
        <polygon points="120,8 125,15 120,22 115,15" fill="#FFFDF9" stroke="#D4AF37" strokeWidth="1.2" />
        <circle cx="120" cy="15" r="1.8" fill="#FFD700" />
      </g>
    </svg>
  );
}

// Interactive Royal Wax Seal Crest
function RoyalWaxSeal({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto cursor-pointer group transform hover:scale-105 transition-transform duration-300 select-none"
      title="Click to Accept Royal Invitation"
    >
      <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#AA771C] via-[#FFD700] to-[#D4AF37] blur-md opacity-60 group-hover:opacity-95 transition-opacity" />
      <div className="relative w-full h-full rounded-full p-0 bg-transparent shadow-[0_15px_40px_rgba(120,75,40,0.35)] overflow-hidden">
        <img
          src={royalSealPhoto}
          alt="Arjun & Ananya Royal Seal"
          className="w-full h-full object-contain rounded-full scale-100 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

export function RsvpSection() {
  // Settings state (initialized with URL params if present)
  const [settings, setSettings] = useState<RsvpSettings>(() => {
    return getEffectiveRsvpSettingsAndStage().settings;
  });

  // Stage state: 'not_responded' | 'accepted' | 'submitted'
  const [stage, setStage] = useState<RsvpStage>(() => {
    const { initialStage } = getEffectiveRsvpSettingsAndStage();
    return initialStage || "not_responded";
  });

  // Modal open state for form / confirmation
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showFormModal, setShowFormModal] = useState<boolean>(false);

  // Saved answers memory
  const [formData, setFormData] = useState<Record<string, any>>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = sessionStorage.getItem("royal_rsvp_answers");
        if (saved) return JSON.parse(saved);
      } catch (e) {
        // ignore
      }
    }
    return {
      guestCount: "2",
      arrivalTime: "18:00",
      mealPreference: "Veg",
    };
  });

  // Validation errors state
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync stage from URL search changes in preview mode
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleUrlChange = () => {
      const { settings: newSettings, initialStage } = getEffectiveRsvpSettingsAndStage(window.location.search);
      setSettings(newSettings);
      if (initialStage) {
        setStage(initialStage);
      }
    };
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  // Confetti Helper
  const triggerConfetti = () => {
    confetti({
      particleCount: 160,
      spread: 120,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#8B5E5A", "#E8D5CC", "#FFD700", "#AA771C"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 120,
        angle: 60,
        spread: 85,
        origin: { x: 0.1, y: 0.6 },
        colors: ["#D4AF37", "#AA771C", "#FFFFFF", "#E8D5CC"],
      });
    }, 200);

    setTimeout(() => {
      confetti({
        particleCount: 180,
        spread: 140,
        origin: { y: 0.3 },
        colors: ["#D4AF37", "#F3E5AB", "#AA771C"],
        shapes: ["star", "circle"],
      });
    }, 450);
  };

  // STEP 1: Accept Invitation Action
  const handleAccept = () => {
    setStage("accepted");
    triggerConfetti();

    if (settings.rsvpType === "simple") {
      setShowModal(true);
    } else {
      // Detailed type: open RSVP details form modal directly
      setShowFormModal(true);
    }
  };

  // STEP 2: Submit Form Action
  const handleSubmitForm = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Validate required fields
    const newErrors: Record<string, string> = {};
    settings.form.fields.forEach((field) => {
      if (field.required && (!formData[field.id] || String(formData[field.id]).trim() === "")) {
        newErrors[field.id] = `${field.label} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStage("submitted");

    // Save to temporary memory
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem("royal_rsvp_answers", JSON.stringify(formData));
      } catch (e) {
        // ignore
      }
    }

    setShowFormModal(false);
    setShowModal(true);
    triggerConfetti();
  };

  // Handle Field Value Input Changes
  const handleFieldChange = (fieldId: string, value: any) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
    if (errors[fieldId]) {
      setErrors((prev) => ({ ...prev, [fieldId]: "" }));
    }
  };

  // Render Form Input Fields dynamically per Section 5 & 6
  const renderFieldInput = (field: RsvpFieldConfig) => {
    const value = formData[field.id] !== undefined ? formData[field.id] : field.defaultValue || "";
    const hasError = !!errors[field.id];

    const baseInputStyle = `w-full px-4 py-3 rounded-2xl bg-[#FFFDF9] border text-[#3A2E2A] placeholder-[#8C7A70] text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 ${
      hasError ? "border-red-500 bg-red-50/50" : "border-[#D4AF37]/60 hover:border-[#D4AF37]"
    }`;

    switch (field.type) {
      case "select":
        return (
          <select
            id={field.id}
            value={value}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            className={baseInputStyle}
          >
            <option value="" disabled>
              Select {field.label}
            </option>
            {field.options?.map((opt) => {
              const optLabel = typeof opt === "string" ? opt : opt.label;
              const optValue = typeof opt === "string" ? opt : opt.value;
              return (
                <option key={optValue} value={optValue}>
                  {optLabel}
                </option>
              );
            })}
          </select>
        );

      case "textarea":
        return (
          <textarea
            id={field.id}
            rows={3}
            value={value}
            placeholder={field.placeholder || `Enter ${field.label}...`}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            className={baseInputStyle}
          />
        );

      case "checkbox":
        return (
          <label className="flex items-center gap-3 cursor-pointer py-2">
            <input
              type="checkbox"
              id={field.id}
              checked={!!value}
              onChange={(e) => handleFieldChange(field.id, e.target.checked)}
              className="w-5 h-5 accent-[#D4AF37] rounded-md cursor-pointer"
            />
            <span className="text-sm font-medium text-[#4C342F]">{field.placeholder || "Yes, I agree"}</span>
          </label>
        );

      case "number":
      case "time":
      case "date":
      case "phone":
      case "email":
      case "text":
      default:
        return (
          <input
            type={field.type === "phone" ? "tel" : field.type === "number" ? "number" : field.type}
            id={field.id}
            value={value}
            min={field.type === "number" ? 1 : undefined}
            placeholder={field.placeholder || `Enter ${field.label}`}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            className={baseInputStyle}
          />
        );
    }
  };

  return (
    <section className="my-16 sm:my-28 py-10 sm:py-16 relative select-none w-full max-w-5xl mx-auto px-4 overflow-hidden">
      {/* Soft Ambient Gold Glow Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,225,160,0.35)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        {/* 1. ROYAL WAX SEAL EMBLEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <RoyalWaxSeal onClick={handleAccept} />
        </motion.div>

        {/* 2. SECTION HEADER & FORMAL INVITATION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] border-2 border-[#D4AF37] text-[#FFF1B0] text-xs sm:text-sm font-extrabold tracking-[0.35em] uppercase shadow-lg mb-3">
            <span>ROYAL INVITATION & RSVP</span>
          </div>

          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-[#3A2E2A] drop-shadow-[0_1.5px_3px_rgba(255,255,255,0.7)]">
            JOIN US IN CELEBRATING
          </h2>

          <GoldFlourish />

          <p className="text-sm sm:text-base text-[#4C342F] max-w-2xl mx-auto leading-relaxed font-serif">
            Their Highnesses <strong>Maharaja Vikram Singh & Maharani Gayatri Devi</strong> and{" "}
            <strong>Dr. Harshvardhan Sharma & Sunita Sharma</strong> request the honor of your presence at the grand
            engagement celebration of their children <strong>Arjun & Ananya</strong>.
          </p>

          <div className="pt-2 inline-block">
            <span className="px-4 py-1.5 rounded-full bg-[#EBDBC9] border border-[#C5A059]/60 text-[#4C342F] font-bold text-xs uppercase tracking-widest shadow-xs">
              Kindly Respond by August 15, 2026
            </span>
          </div>
        </motion.div>

        {/* 3. DYNAMIC RSVP STAGE ACTION CONTAINER (per Sections 3 & 4) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="pt-3 flex flex-col items-center w-full max-w-lg mx-auto"
        >
          {/* STAGE A: NOT RESPONDED */}
          {stage === "not_responded" && (
            <div className="flex flex-col items-center">
              <button
                onClick={handleAccept}
                className="relative px-12 sm:px-18 py-4.5 sm:py-5 rounded-full font-[family-name:var(--font-heading)] font-bold text-xs sm:text-sm uppercase tracking-[0.35em] sm:tracking-[0.4em] bg-[#4C342F] text-[#FFF1B0] border-2 border-[#D4AF37] shadow-[0_12px_35px_rgba(76,52,47,0.25)] hover:bg-[#3A2320] hover:shadow-[0_16px_45px_rgba(212,175,55,0.35)] hover:border-[#FFD700] transition-all duration-300 cursor-pointer select-none overflow-hidden group"
              >
                <div className="absolute inset-1 rounded-full border border-[#D4AF37]/40 pointer-events-none group-hover:border-[#FFD700]/70 transition-colors" />
                <span className="relative z-10">ACCEPT INVITATION</span>
              </button>

              <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#3A2E2A] font-extrabold mt-4 px-4 py-1.5 rounded-full bg-[#FFFDF9]/95 border border-[#D4AF37]/60 shadow-xs">
                Tap to confirm your royal attendance
              </p>
            </div>
          )}

          {/* STAGE B: ACCEPTED (Simple or Detailed before form submit) */}
          {stage === "accepted" && (
            <div className="flex flex-col items-center space-y-4 w-full">
              <div className="w-full p-6 sm:p-7 rounded-[28px] bg-gradient-to-b from-[#FFFDF9] to-[#FDF8F0] border-2 border-[#D4AF37] shadow-[0_15px_40px_rgba(212,175,55,0.25)] flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#2A4D3A] text-[#FFF1B0] flex items-center justify-center mb-3 shadow-md">
                  <CheckCircle2 className="w-7 h-7 text-[#FFD700]" />
                </div>
                <h4 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-[#4C342F] uppercase tracking-wide">
                  INVITATION GRACEFULLY ACCEPTED
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4033] mt-1.5 font-serif">
                  {settings.rsvpType === "simple"
                    ? "Your acceptance has been recorded. We look forward to welcoming you!"
                    : "Your attendance is confirmed! Please submit your guest details below."}
                </p>

                {settings.rsvpType === "detailed" && (
                  <button
                    onClick={() => setShowFormModal(true)}
                    className="mt-5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#AA771C] to-[#8B5E5A] text-[#FFFDF9] font-extrabold text-xs uppercase tracking-[0.25em] border border-[#FFD700] shadow-[0_8px_25px_rgba(212,175,55,0.35)] hover:brightness-110 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#FFF1B0]" />
                    <span>SUBMIT RSVP DETAILS</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* STAGE C: SUBMITTED (Detailed mode with recorded summary & edit capability) */}
          {stage === "submitted" && (
            <div className="flex flex-col items-center space-y-4 w-full">
              <div className="w-full p-6 sm:p-8 rounded-[32px] bg-gradient-to-b from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8] border-2 border-[#D4AF37] shadow-[0_20px_50px_rgba(212,175,55,0.3)] flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-[#2A4D3A] text-[#FFF1B0] flex items-center justify-center mb-3 shadow-md">
                  <CheckCircle2 className="w-7 h-7 text-[#FFD700]" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-[#AA771C] mb-1">
                  STATUS: SUBMITTED
                </span>
                <h4 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold text-[#4C342F] uppercase tracking-wide">
                  RSVP DETAILS RECORDED
                </h4>

                <div className="w-full my-4 p-4 rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/40 text-left space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#AA771C] border-b border-[#D4AF37]/30 pb-1.5 flex items-center justify-between">
                    <span>Summary of Responses</span>
                    <span className="text-[10px] text-[#2A4D3A] bg-[#E8F3EB] px-2 py-0.5 rounded-full font-sans">
                      Confirmed
                    </span>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                    <div className="bg-[#FDF8F0] p-2.5 rounded-xl border border-[#EBDBC9]">
                      <span className="text-[10px] uppercase tracking-wider text-[#8C7A70] block">Guests</span>
                      <span className="font-bold text-[#4C342F] text-sm">{formData.guestCount || 1} Person(s)</span>
                    </div>

                    <div className="bg-[#FDF8F0] p-2.5 rounded-xl border border-[#EBDBC9]">
                      <span className="text-[10px] uppercase tracking-wider text-[#8C7A70] block">Arrival Time</span>
                      <span className="font-bold text-[#4C342F] text-sm">{formData.arrivalTime || "TBD"}</span>
                    </div>

                    <div className="bg-[#FDF8F0] p-2.5 rounded-xl border border-[#EBDBC9]">
                      <span className="text-[10px] uppercase tracking-wider text-[#8C7A70] block">Meal Pref</span>
                      <span className="font-bold text-[#4C342F] text-sm">{formData.mealPreference || "Standard"}</span>
                    </div>
                  </div>
                </div>

                {/* Edit RSVP Button (Only rendered if allowEditRsvp === true per Section 3 & 4) */}
                {settings.allowEditRsvp ? (
                  <button
                    onClick={() => setShowFormModal(true)}
                    className="mt-2 px-7 py-3 rounded-full bg-[#FFFDF9] border-2 border-[#D4AF37] text-[#4C342F] font-bold text-xs uppercase tracking-[0.25em] hover:bg-[#F5EBE1] hover:border-[#AA771C] transition-all cursor-pointer flex items-center gap-2 shadow-sm"
                  >
                    <Edit3 className="w-4 h-4 text-[#AA771C]" />
                    <span>EDIT RSVP DETAILS</span>
                  </button>
                ) : (
                  <p className="text-[11px] italic text-[#8C7A70] mt-1 font-serif">
                    RSVP submissions are locked by the host. Contact host directly for modifications.
                  </p>
                )}
              </div>
            </div>
          )}
        </motion.div>

        {/* 4. ENGRAVED BOTTOM BORDER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full flex justify-center pt-2"
        >
          <EngravedBottomBorder />
        </motion.div>
      </div>

      {/* ROYAL RSVP DETAILED FORM POPUP MODAL (per Section 4 & 5) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {showFormModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowFormModal(false)}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="p-1 rounded-[40px] bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] shadow-[0_30px_90px_rgba(212,175,55,0.45)] max-w-lg w-full relative my-8"
                >
                  <div className="rounded-[36px] p-6 sm:p-9 bg-gradient-to-b from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8] text-left relative overflow-hidden">
                    {/* Close X Button */}
                    <button
                      onClick={() => setShowFormModal(false)}
                      className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#D4AF37] bg-[#FFFDF9] text-[#4C342F] flex items-center justify-center hover:bg-[#F5EBE1] hover:scale-105 transition-all cursor-pointer z-20 shadow-sm"
                    >
                      <X className="w-4 h-4 text-[#AA771C]" />
                    </button>

                    <div className="text-center mb-6">
                      <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-1">
                        ROYAL GUEST REGISTRATION
                      </p>
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[#4C342F] uppercase tracking-wide">
                        {stage === "submitted" ? "EDIT YOUR RSVP DETAILS" : "CONFIRM ATTENDANCE DETAILS"}
                      </h3>
                      <GoldFlourish />
                    </div>

                    <form onSubmit={handleSubmitForm} className="space-y-4">
                      {settings.form.fields.map((field) => (
                        <div key={field.id} className="space-y-1.5">
                          <label
                            htmlFor={field.id}
                            className="block text-xs font-extrabold uppercase tracking-wider text-[#4C342F]"
                          >
                            {field.label} {field.required && <span className="text-red-500">*</span>}
                          </label>
                          {renderFieldInput(field)}
                          {field.hint && <p className="text-[11px] text-[#8C7A70] italic font-serif">{field.hint}</p>}
                          {errors[field.id] && (
                            <p className="text-xs text-red-600 font-medium">{errors[field.id]}</p>
                          )}
                        </div>
                      ))}

                      <div className="pt-4 flex flex-col gap-2">
                        <button
                          type="submit"
                          className="w-full py-4 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] text-[#FFF1B0] font-extrabold text-xs uppercase tracking-[0.3em] border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(76,52,47,0.3)] hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4 text-[#FFD700]" />
                          <span>{stage === "submitted" ? "UPDATE RSVP DETAILS" : "SUBMIT RSVP DETAILS"}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setShowFormModal(false)}
                          className="w-full py-2.5 text-xs uppercase tracking-widest font-bold text-[#8C7A70] hover:text-[#4C342F] transition-colors cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

      {/* ROYAL THANK YOU CONFIRMATION POP-UP MODAL */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {showModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowModal(false)}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 20 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="p-1 sm:p-1.5 rounded-[44px] bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#AA771C] shadow-[0_30px_90px_rgba(212,175,55,0.4)] max-w-lg w-full relative select-none"
                >
                  <div className="rounded-[40px] p-7 sm:p-11 bg-gradient-to-b from-[#FFFDF9] via-[#FDF8F0] to-[#FBF4E8] flex flex-col items-center text-center relative overflow-hidden">
                    <button
                      onClick={() => setShowModal(false)}
                      className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[#D4AF37] bg-[#FFFDF9] text-[#4C342F] flex items-center justify-center hover:bg-[#F5EBE1] hover:scale-110 transition-all cursor-pointer z-20 shadow-sm"
                    >
                      <X className="w-5 h-5 text-[#AA771C]" />
                    </button>

                    <div className="absolute inset-3 rounded-[32px] border-2 border-[#D4AF37]/35 pointer-events-none" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[radial-gradient(circle,rgba(255,220,150,0.5)_0%,transparent_75%)] pointer-events-none blur-2xl" />

                    <div className="z-10 relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-0 bg-transparent shadow-[0_10px_30px_rgba(212,175,55,0.35)] mb-4 overflow-hidden">
                      <img
                        src={royalSealPhoto}
                        alt="Royal Seal"
                        className="w-full h-full object-contain rounded-full scale-100"
                      />
                    </div>

                    <p className="z-10 font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.35em] text-[#C5A059] font-bold mb-1.5">
                      ROYAL CONFIRMATION & BLESSINGS
                    </p>

                    <h3 className="z-10 font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#4C342F] uppercase tracking-wide mb-2">
                      THANK YOU FOR ACCEPTING!
                    </h3>

                    <div className="z-10">
                      <GoldFlourish />
                    </div>

                    <p className="z-10 text-sm sm:text-base text-[#4C342F] leading-relaxed font-serif my-3.5 max-w-sm">
                      Your gracious presence fills our hearts with immense joy and honor. We look forward to celebrating
                      this royal milestone alongside you.
                    </p>

                    <div className="z-10 my-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#FFFDF9] via-[#F5EBE1] to-[#FFFDF9] border border-[#D4AF37]/70 text-[#4C342F] text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] shadow-xs">
                      SATURDAY, NOVEMBER 28, 2026 • THE CITY PALACE
                    </div>

                    <button
                      onClick={() => setShowModal(false)}
                      className="z-10 mt-6 px-10 sm:px-12 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#201311] text-[#FFF1B0] font-extrabold text-xs uppercase tracking-[0.3em] border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(76,52,47,0.3)] hover:brightness-110 transition-all cursor-pointer"
                    >
                      EXPLORE CELEBRATION JOURNEY
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
