import { useScrollReveal } from '../hooks/useScrollReveal';
import { Leaf, Droplet, Sparkles, Sun, Flame, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Offering {
  icon: LucideIcon;
  title: string;
  description: string;
}

const offerings: Offering[] = [
  {
    icon: Leaf,
    title: 'Panchakarma',
    description: '28-day classical detox purifying body, mind & spirit through five therapeutic actions.',
  },
  {
    icon: Droplet,
    title: 'Shirodhara',
    description: 'Warm herbal oil poured on the forehead for deep nervous system relaxation.',
  },
  {
    icon: Sparkles,
    title: 'Rejuvenation Program',
    description: '7 to 28-day Rasayana therapy to restore energy, balance, and inner harmony.',
  },
  {
    icon: Sun,
    title: 'Yoga & Meditation',
    description: 'Daily guided sessions tailored to your Ayurvedic constitution and fitness level.',
  },
  {
    icon: Flame,
    title: 'Weight Loss Program',
    description: '28-day Ayurvedic weight management combining Udvartana therapy and diet.',
  },
  {
    icon: Heart,
    title: 'Stress Relief',
    description: '14–21 day program with Abhyanga & Shirodhara to ease anxiety and fatigue.',
  },
];

function OfferingCard({ offering, index }: { offering: Offering; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const Icon = offering.icon;

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-xl py-8 px-6 text-center transition-all duration-500 border border-border hover:shadow-xl hover:shadow-primary/5 hover:border-t-3 hover:border-t-primary cursor-default ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
        <Icon size={24} className="text-accent" />
      </div>
      <h3 className="font-heading text-xl font-bold text-dark mb-3">{offering.title}</h3>
      <p className="font-body text-sm text-text/70 leading-relaxed">{offering.description}</p>
    </div>
  );
}

export default function OfferingsGrid() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);

  return (
    <section id="offerings" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">What We Offer</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold text-dark mt-3">
            Our Signature Offerings
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, i) => (
            <OfferingCard key={offering.title} offering={offering} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
