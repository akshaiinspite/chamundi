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
      {/* 🌿 Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#f7f2e8,transparent_40%),radial-gradient(circle_at_80%_30%,#e6d6b8,transparent_40%),radial-gradient(circle_at_50%_80%,#efe6d3,transparent_40%)] animate-[pulse_8s_ease-in-out_infinite]" />

      {/* 🌿 Soft Noise Texture (optional image) */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/img/noise.png')]" />

      {/* 🌿 Floating Glow Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-24 h-24 bg-green-200/20 rounded-full blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-32 h-32 bg-amber-300/20 rounded-full blur-3xl bottom-20 right-20 animate-pulse" />
      </div>

      {/* 🌿 CONTENT */}
      <div className="relative text-center px-6">
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
        <h1 className="text-3xl md:text-5xl font-serif font-semibold text-gray-900">
          Celebrating
        </h1>

        <h2 className="mt-2 text-xl md:text-3xl font-light text-gray-700">
          25 Years of Healing & Excellence
        </h2>

        <p className="mt-4 text-gray-500 max-w-md mx-auto">
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
  );
}