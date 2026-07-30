import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Web Audio Synthesizer producing soft royal harp chimes
  const startChimeSequence = () => {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Pentatonic harp note frequencies (Hz): D4, F#4, A4, C#5, E5, F#5, A5
      const notes = [293.66, 369.99, 440.0, 554.37, 659.25, 739.99, 880.0];

      const playNextNote = () => {
        if (!ctx || ctx.state === "closed") return;

        const noteIndex = Math.floor(Math.random() * notes.length);
        const freq = notes[noteIndex];

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Soft bell envelope
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 2.5);

        // Schedule next random note in 1.2s - 2.8s
        const nextTime = 1200 + Math.random() * 1600;
        timerRef.current = window.setTimeout(playNextNote, nextTime);
      };

      playNextNote();
    } catch (err) {
      console.error("Audio error", err);
    }
  };

  const stopChimeSequence = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "running") {
      audioCtxRef.current.suspend();
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopChimeSequence();
      setIsPlaying(false);
    } else {
      startChimeSequence();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const handleCustomToggle = () => {
      toggleAudio();
    };

    window.addEventListener("toggle-royal-audio", handleCustomToggle);

    return () => {
      window.removeEventListener("toggle-royal-audio", handleCustomToggle);
      stopChimeSequence();
    };
  }, [isPlaying]);

  return (
    <button
      onClick={toggleAudio}
      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border-2 shadow-xl cursor-pointer select-none ${
        isPlaying
          ? "bg-gradient-to-r from-[#4C342F] via-[#3A2320] to-[#4C342F] text-[#FFD700] border-[#D4AF37] shadow-[0_10px_25px_rgba(212,175,55,0.4)]"
          : "bg-black/80 backdrop-blur-md text-[#FFF1B0] border-[#D4AF37]/50 hover:bg-black/95 shadow-md"
      }`}
      title={isPlaying ? "Mute Royal Chimes" : "Play Royal Chimes"}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-[#FFD700]" />
          <span>ROYAL MUSIC ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-[#D4AF37]" />
          <span>ROYAL MUSIC OFF</span>
        </>
      )}
    </button>
  );
}
