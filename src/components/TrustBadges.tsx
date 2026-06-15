import { useScrollReveal } from '../hooks/useScrollReveal';

const badges = [
  { icon: '🏆', label: 'TripAdvisor Certificate of Excellence' },
  { icon: '⭐', label: "Travellers' Choice Award 2024" },
  { icon: '🌿', label: 'Green Leaf Certified Resort' },
  { icon: '🩺', label: '25+ Years of Authentic Ayurveda' },
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
        <div className="flex items-center justify-start sm:justify-center gap-6 sm:gap-8 overflow-x-auto scrollbar-hide pb-2 sm:pb-0">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-4 shrink-0">
              {i > 0 && (
                <div className="w-px h-10 bg-accent/40 hidden sm:block" />
              )}
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{badge.icon}</span>
                <span className="font-body text-xs sm:text-sm font-semibold text-text whitespace-nowrap">
                  {badge.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
