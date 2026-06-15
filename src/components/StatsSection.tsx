import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { number: '3,000+', label: 'Years of Ayurvedic Science' },
  { number: '15+', label: 'Repeat Guests Every Year' },
  { number: '100%', label: 'Certified Ayurvedic Doctors' },
  { number: '28', label: 'Days Full Panchakarma Program' },
];

const features = [
  'Personalized Treatment Plans',
  'Organic Ayurvedic Meals',
  'Hilltop Natural Setting',
];

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="bg-dark py-20 sm:py-28">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white mb-16 leading-tight">
          Why Guests Return — Again and Again
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-14">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2">
              <span className="block font-heading text-4xl sm:text-5xl lg:text-[56px] font-semibold text-accent leading-none">
                {stat.number}
              </span>
              <span className="block font-body text-xs sm:text-sm text-white/60 mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Feature Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {features.map((feature, i) => (
            <span
              key={i}
              className="border border-accent/50 text-white/80 font-body text-xs sm:text-sm px-5 py-2 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
