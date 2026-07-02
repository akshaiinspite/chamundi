import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Award, Star, Leaf, HeartPulse, Soup, Smile, Play, X } from 'lucide-react';

const badges = [
  { icon: Award, label: 'TripAdvisor Certificate of Excellence' },
  { icon: Star, label: "Travellers' Choice Award 2024" },
  { icon: Leaf, label: 'Green Leaf Certified Resort' },
  { icon: HeartPulse, label: '25+ Years of Authentic Ayurveda' },
  { icon: Soup, label: '100% Organic Farm-to-Table Kitchen' },
  { icon: Smile, label: '98% Guest Return & Satisfaction Rate' },
];

interface Badge {
  icon: typeof Award;
  label: string;
}

function BadgeCard({ badge, idx }: { badge: Badge; idx: number }) {
  const Icon = badge.icon;
  // Stagger floating delay based on index
  const floatClass = idx % 3 === 0 
    ? 'animate-gentle-float-1' 
    : idx % 3 === 1 
      ? 'animate-gentle-float-2' 
      : 'animate-gentle-float-3';

  return (
    <div className="w-72 shrink-0 group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:border-accent/40 hover:bg-white/15 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] select-none">
      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

      {/* Icon */}
      <div className="relative flex justify-center mb-4">
        <div className={`w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center ${floatClass}`}>
          <Icon
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
  );
}

export default function TrustBadges() {
  const { ref, isVisible } = useScrollReveal(0.2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="trust"
      ref={ref}
      className={`relative py-14 sm:py-20 overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Deep forest background matching brand */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-dark" />

      {/* Atmospheric blur effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-accent/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="text-center mb-12 px-4">
          <span className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">
            Recognition & Excellence
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mt-3 font-semibold">
            Trusted by Guests Worldwide
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-5 rounded-full"></div>
          <p className="text-white/80 text-center mt-6 max-w-3xl mx-auto font-body text-sm sm:text-base leading-relaxed">
            For over 25 years, Chamundi Hill Palace has welcomed guests from 40+ countries 
            to experience the beauty of Kerala's hills. With a 4.9-star rating and 98% of guests returning, 
            we are proud to offer warm hospitality and authentic Ayurvedic healthcare.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent/95 text-white font-body text-sm font-semibold px-6 py-3.5 rounded-full mt-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-105 group cursor-pointer"
          >
            <Play size={16} fill="white" className="group-hover:translate-x-0.5 transition-transform" />
            Discover Chamundi Hill Palace: Video Walkthrough
          </button>
        </div>

        {/* Dynamic Infinite Marquee Scroll Container */}
        <div className="relative w-full overflow-hidden py-4 mt-8">
          {/* Subtle edge blur overlays */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-primary via-primary/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-primary via-primary/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee slider track */}
          <div className="flex w-max gap-6 animate-marquee-scroll hover:[animation-play-state:paused] py-4">
            {/* Iteration 1 */}
            {badges.map((badge, idx) => (
              <BadgeCard key={`item-1-${idx}`} badge={badge} idx={idx} />
            ))}
            {/* Iteration 2 (seamless connector duplicate) */}
            {badges.map((badge, idx) => (
              <BadgeCard key={`item-2-${idx}`} badge={badge} idx={idx} />
            ))}
          </div>
        </div>

      </div>

      {/* Video Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-[#1A150E] max-w-4xl w-full rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 backdrop-blur-md transition-all duration-200 z-10 cursor-pointer"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            
            {/* 16:9 Video Embed */}
            <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black">
              <iframe
                src="https://www.youtube.com/embed/B-5vcic6zl8?start=55&autoplay=1"
                title="Mrs. Pilar's Testimonial"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
