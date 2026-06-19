import { useScrollReveal } from '../hooks/useScrollReveal';
import {  Award, Star, Leaf, HeartPulse,} from 'lucide-react';

const badges = [
  { icon: Award, label: 'TripAdvisor Certificate of Excellence' },
  { icon: Star, label: "Travellers' Choice Award 2024" },
  { icon: Leaf, label: 'Green Leaf Certified Resort' },
  { icon: HeartPulse, label: '25+ Years of Authentic Ayurveda' },
];

export default function TrustBadges() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      id="trust"
      ref={ref}
      className={`relative py-10 sm:py-14 overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-dark" />

<div className="absolute inset-0 opacity-20">
  <div className="absolute top-10 left-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
  <div className="absolute bottom-10 right-10 w-56 h-56 bg-accent/50 rounded-full blur-3xl" />
</div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 relative z-10">
  <span className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">
    Recognition & Excellence
  </span>

  <h2 className="font-heading text-3xl md:text-4xl text-white mt-3">
    Trusted by Guests Worldwide
  </h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
  {badges.map((badge, i) => (
    <div
      key={i}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:border-accent/40 hover:bg-white/15 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${i * 150}ms`,
      }}
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

      {/* Icon */}
      <div className="relative flex justify-center mb-4">
        <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center animate-float-slow">
          <badge.icon
            className="w-7 h-7 text-accent transition-transform duration-500 group-hover:rotate-6"
            strokeWidth={1.8}
          />
        </div>
      </div>

      {/* Text */}
      <p className="relative text-white font-medium text-sm leading-relaxed">
        {badge.label}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
