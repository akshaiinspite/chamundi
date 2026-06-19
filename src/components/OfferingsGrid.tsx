import { useScrollReveal } from '../hooks/useScrollReveal';
import { Leaf, Droplet, Sparkles, Sun, Flame, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Offering {
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
}

const offerings: Offering[] = [
  {
    icon: Leaf,
    image:'/img/314962107_566571368608410_5904308292292831319_n.jpg',
    title: 'Panchakarma',
    description: '28-day classical detox purifying body, mind & spirit through five therapeutic actions.',
  },
  {
    icon: Droplet,
    image:'/img/rejuvenation.jpg',
    title: 'Shirodhara',
    description: 'Warm herbal oil poured on the forehead for deep nervous system relaxation.',
  },
  {
    icon: Sparkles,
    image:'/img/kerala-ayurveda-2.jpg',
    title: 'Rejuvenation Program',
    description: '7 to 28-day Rasayana therapy to restore energy, balance, and inner harmony.',
  },
  {
    icon: Sun,
    image:'/img/yoga.jpg',
    title: 'Yoga & Meditation',
    description: 'Daily guided sessions tailored to your Ayurvedic constitution and fitness level.',
  },
  {
    icon: Flame,
    image:'/img/weight-loss.jpg',
    title: 'Weight Loss Program',
    description: '28-day Ayurvedic weight management combining Udvartana therapy and diet.',
  },
  {
    icon: Heart,
    image:'/img/stress-relief.jpg',
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
      className={`group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 border border-[#E8E1D4] hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}>
      <div className="relative mb-5 overflow-hidden rounded-xl">
  <img
    src={offering.image}
    alt={offering.title}
    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
  />

  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center">
    <Icon
      size={22}
      className="text-accent"
      strokeWidth={2}
    />
  </div>
</div>
      <h3 className="font-heading text-xl font-bold text-dark mb-3 text-center px-4 pb-4">{offering.title}</h3>
      <p className="font-body text-sm text-text/70 leading-relaxed text-center px-4 pb-4">{offering.description}</p>
    </div>
  );
}

export default function OfferingsGrid() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);

  return (
    <section id="offerings" className="py-20 sm:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">What We Offer</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white mt-3">
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
