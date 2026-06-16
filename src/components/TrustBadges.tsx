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
      className={`bg-surface py-6 sm:py-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">          
          {badges.map((badge, i) => (
            <div
  key={i}
  className="bg-white rounded-xl border border-border shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
>
  <span className="text-2xl mb-2"><badge.icon
  className="w-8 h-8 text-accent mb-2"
  strokeWidth={1.75}
/></span>

  <span className="font-body text-xs sm:text-sm font-semibold text-text leading-relaxed">
    {badge.label}
  </span>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}
