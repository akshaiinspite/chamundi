import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2800);
    const timer2 = setTimeout(() => setVisible(false), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* 🌿 Soft White Base */}
      <div className="absolute inset-0 backdrop-blur-md" />

      {/* 🌿 Blurred Luxury Background */}
      <div className="absolute inset-0 scale-[1.6] bg-stone-200/40 blur-[180px] rounded-full" />

<div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-100/35 blur-[180px] rounded-full" />

<div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-100/35 blur-[180px] rounded-full" />

      {/* 🌿 Floating Glow Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-40 h-40 bg-green-100/20 rounded-full blur-[120px] top-10 left-10 animate-pulse" />
        <div className="absolute w-48 h-48 bg-amber-100/20 rounded-full blur-[140px] bottom-20 right-20 animate-pulse" />
      </div>

      {/* 🌿 CONTENT */}
      <div className="relative">
        {/* Main Smoke Layer */}
      <div className="absolute inset-0 scale-[1.6] bg-stone-200/40 blur-[180px] rounded-full" />

<div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-100/35 blur-[180px] rounded-full" />

<div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-100/35 blur-[180px] rounded-full" />

        {/* Main Card */}
        <div className="relative text-center px-10 py-10 rounded-[32px] bg-white/80 backdrop-blur-3xl border border-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          {/* Anniversary Badge */}
          <div className="relative mx-auto mb-8 h-40 w-40">
            {/* rotating ring */}
            <div className="absolute inset-0 rounded-full border border-amber-300/60 animate-[spin_10s_linear_infinite]" />

            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-amber-200/30 blur-2xl" />

            {/* inner badge */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 shadow-2xl flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-amber-700">25</span>
              <span className="text-[11px] tracking-[4px] uppercase text-amber-600">
                Years
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-serif font-semibold text-gray-950">
            Celebrating
          </h1>

          <h2 className="mt-2 text-xl md:text-3xl font-light text-gray-800">
            25 Years of Healing & Excellence
          </h2>

          <p className="mt-4 text-gray-600 max-w-md mx-auto">
            Trusted Ayurvedic Care • Wellness • Transformation
          </p>

          {/* Loader */}
          <div className="mt-10 w-72 max-w-full mx-auto">
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-full origin-left animate-[loading_3.5s_linear_forwards] bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}