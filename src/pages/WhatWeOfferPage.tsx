import { useState } from 'react';
import PageHero from '../components/PageHero';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { HeartPulse, BedDouble, Dumbbell, UtensilsCrossed, Check, Leaf } from 'lucide-react';

const heroStats = [
  {
    icon: HeartPulse,
    label: 'Ayurvedic Care',
  },
  {
    icon: BedDouble,
    label: 'Accommodation',
  },
  {
    icon: Dumbbell,
    label: 'Yoga & Wellness',
  },
  {
    icon: UtensilsCrossed,
    label: 'Meals & Diet',
  },
];

const offerCategories = [
  {
    title: 'Ayurvedic Care',
    image: '/img/rejuvenation.jpg',
    video: '/img/videos/ayurveda.mp4',
    items: [
      'A detailed Ayurvedic consultation with our resident doctor upon arrival.',
      'Our doctor is always available, attentive to every concern of yours, during your whole stay.',
      'Ayurvedic treatments, twice a day, as prescribed by the doctor.',
      'Ayurvedic medicines which are prescribed by the doctor as part of your treatment plan.',
      'Abdominal cleansing every 8th day of treatment, or as recommended by doctor.',
      'On the last day of your stay, Doctor will give you a specific diet chart for you to follow.',
    ],
  },
  {
    title: 'Accommodation',
    image: '/img/rooms.jpg',
    video: '/img/videos/accomadation.mp4',
    items: [
      'Accommodation inside our premises - Comfortable ensuite rooms at Ayurvedic Treatment Centre.',
      'Airport pick up and drop (free one way for minimum 1 week, free both ways for min 2 weeks).',
      'Assistance with your travel needs before/after your stay in the centre.',
    ],
  },
  {
    title: 'Yoga & Wellness',
    image: '/img/yoga.jpg',
    video: '/img/videos/yoga.mp4',
    items: [
      'Daily morning and evening Yoga sessions, 6 days a week, which are free for all who live in the centre.',
      'Spice tours within the Centre.',
    ],
  },
  {
    title: 'Meals & Diet',
    image: '/img/meals.jpg',
    video: '/img/videos/meals.mp4',
    items: [
      'All meals, vegetarian & freshly cooked, made from organically grown vegetables and spices.',
      'During treatments, Ayurvedic diet is ensured.',
    ],
  },
];

export default function WhatWeOfferPage() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = offerCategories[activeIndex] || offerCategories[0];

  return (
    <>
      {/* Styles Block */}
      <style>{`
        @keyframes floatLeaf {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(4deg); }
        }
        @keyframes floatLeafOpposite {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-4deg); }
        }
        .animate-float-slow {
          animation: floatLeaf 7s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatLeafOpposite 6s ease-in-out infinite 1.2s;
        }
      `}</style>

      <PageHero
        title="What We Offer"
        subtitle="Authentic Ayurvedic Treatments & Healing Retreat"
        backgroundImage="/img/banner-3.jpg"
        backgroundVideo="/img/videos/organicfarm.mp4"
        breadcrumb="What We Offer"
      />
      
      {/* Hero Stats Icons Row */}
      <section className="bg-primary py-20 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute inset-0 opacity-15 pointer-events-none select-none z-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10 max-w-7xl mx-auto">
          {heroStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-5 md:p-6 text-white shadow-xl hover:bg-white/15 hover:-translate-y-1.5 transition-all duration-300 group/stat hover:shadow-accent/5 hover:border-accent/30"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent group-hover/stat:scale-110 group-hover/stat:rotate-12 transition-all duration-300" />

                  <span className="font-heading text-base md:text-xl font-semibold">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Inclusions Detail Section */}
      <section className="py-20 sm:py-28 bg-dark relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 z-0 select-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />
        </div>
        
        <div className="absolute top-1/3 right-10 text-white/5 pointer-events-none select-none animate-float-slow hidden lg:block z-0">
          <Leaf size={140} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-1/3 left-10 text-white/5 pointer-events-none select-none animate-float-delayed hidden lg:block z-0">
          <Leaf size={120} strokeWidth={0.5} />
        </div>

        <div
          ref={ref}
          className={`max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-700 relative z-10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-14">
            <span className="section-label">Inclusions</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-3 leading-snug">
              Chamundi Hill Palace Ayurveda Treatment Centre
            </h2>
            <p className="font-body text-base text-white/70 mt-4 max-w-2xl mx-auto leading-relaxed">
              Everything you need for a complete healing journey — included in your stay.
            </p>
          </div>
        </div>

        {/* Responsive Content Display */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* DESKTOP VIEW: Interactive Sidebar Explorer */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 xl:gap-12 items-start">
            
            {/* Sidebar Selectors */}
            <div className="flex flex-col gap-4">
              {offerCategories.map((category, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                      isActive
                        ? 'bg-primary border-accent/40 text-white shadow-lg shadow-primary/10'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className={`block text-xs uppercase tracking-widest font-semibold mb-1 ${isActive ? 'text-white/60' : 'text-accent'}`}>
                      Category 0{idx + 1}
                    </span>
                    <h3 className="font-heading text-xl font-bold">
                      {category.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Showcase Display Area */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-md rounded-[32px] border border-white/10 p-8 flex flex-col md:flex-row gap-8 items-stretch min-h-[520px] shadow-2xl relative overflow-hidden">
              
              {/* Left Column: Image or Video */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden relative shrink-0 shadow-inner">
                {activeCategory.video ? (
                  <video key={activeCategory.video} src={activeCategory.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster={activeCategory.image}
                  />
                ) : (
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.title}
                    className="w-full h-full object-cover transition-transform duration-750 hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
              </div>

              {/* Right Column: Inclusions List */}
              <div className="flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="font-heading text-2xl font-bold text-accent mb-6">
                    {activeCategory.title} Inclusions
                  </h4>
                  <div className="space-y-4">
                    {activeCategory.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex gap-4 items-start group/item">
                        <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-accent/25 transition-colors">
                          <Check size={12} className="text-accent" />
                        </div>
                        <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* MOBILE & TABLET VIEW: Interactive Accordions */}
          <div className="lg:hidden space-y-4">
            {offerCategories.map((category, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? -1 : idx)}
                    className="w-full text-left p-5 flex items-center justify-between font-heading font-bold text-lg text-white outline-none cursor-pointer"
                  >
                    <span>{category.title}</span>
                    <span className={`text-accent font-body text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isOpen ? 'max-h-[800px] border-t border-white/10' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 space-y-6">
                      <div className="h-48 rounded-xl overflow-hidden shadow-md">
                        {category.video ? (
                          <video
                            key={category.video}
                            src={category.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            poster={category.image}
                          />
                        ) : (
                          <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex gap-3 items-start">
                            <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={12} className="text-accent" />
                            </div>
                            <p className="text-white/80 leading-relaxed text-sm">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <VideoTestimonials />
      <CTABanner />
    </>
  );
}
