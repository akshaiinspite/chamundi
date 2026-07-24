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
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-700 bg-[#1c2e10] ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* 🌿 Intense Green Smoke & Glow Layers */}
      <div className="absolute inset-0 opacity-80 pointer-events-none z-0">
        {/* Deep primary smoke */}
        <div className="absolute w-[600px] h-[600px] bg-primary/80 rounded-full blur-[140px] -top-40 -left-40 animate-[spin_30s_linear_infinite]" />
        
        {/* Intense vibrant green smoke */}
        <div className="absolute w-[500px] h-[500px] bg-[#46692f]/70 rounded-full blur-[160px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        
        {/* Darker green contrast smoke */}
        <div className="absolute w-[550px] h-[550px] bg-[#12200a]/90 rounded-full blur-[120px] -bottom-30 -right-30" />

        {/* Soft gold accent smoke overlay */}
        <div className="absolute w-[350px] h-[350px] bg-accent/30 rounded-full blur-[120px] top-20 right-10 animate-[pulse_6s_ease-in-out_infinite]" />
        
        {/* Extra glowing green cloud */}
        <div className="absolute w-[400px] h-[400px] bg-[#537e38]/50 rounded-full blur-[130px] bottom-10 left-1/4" />
      </div>

      {/* 🌿 CONTENT */}
      <div className="relative z-10">
        {/* Card Background Glow */}
        <div className="absolute inset-0 scale-[1.2] bg-primary/30 blur-[150px] rounded-full" />

        {/* Main Card */}
        <div className="relative text-center px-6 sm:px-12 py-10 rounded-[32px] bg-dark/90 backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] w-[calc(100vw-32px)] max-w-3xl mx-auto">
          {/* Anniversary Badge */}
          <div className="relative mx-auto mb-8 h-40 w-40">
            {/* rotating ring */}
            <div className="absolute inset-0 rounded-full border border-accent/40 animate-[spin_10s_linear_infinite]" />

            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-accent/15 blur-2xl" />

            {/* inner badge */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-2xl flex flex-col items-center justify-center border border-accent/20">
              <span className="text-5xl font-heading font-bold text-accent">25</span>
              <span className="text-[11px] tracking-[4px] uppercase text-white font-medium">
                Years
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-heading font-semibold text-accent">
            Celebrating
          </h1>

          <h2 className="mt-2 text-xl md:text-3xl font-light text-white">
            25 Years of Healing & Excellence
          </h2>

          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed flex flex-wrap justify-center gap-x-2 gap-y-1">
            <span className="whitespace-nowrap">Trusted Ayurvedic Care</span>
            <span className="text-white/40">•</span>
            <span className="whitespace-nowrap">Personalized Ayurvedic Care</span>
            <span className="text-white/40">•</span>
            <span className="whitespace-nowrap">Yoga & Meditation</span>
          </p>

          {/* Loader */}
          <div className="mt-10 w-72 max-w-full mx-auto">
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-full origin-left animate-[loading_3.5s_linear_forwards] bg-gradient-to-r from-accent via-primary to-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}