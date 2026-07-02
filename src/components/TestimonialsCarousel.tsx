import { useState, useCallback, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronLeft, ChevronRight, Star, Quote, Play, X } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'I had 3 wonderful weeks at Chamundi Hills Palace. A beautiful place in the hills — the view is stunning. After 3 weeks I achieved a change for my life, loving myself again after some difficult years. I am happy, positive and calm.',
    name: 'Tina J',
    location: 'Copenhagen, Denmark',
    initials: 'TJ'
  },
  {
    quote: "More than a hotel, it's living in a large plantation house. It was really like staying with friends. The treatments are of quality and the food is flavourful and perfectly adapted to non-Indian taste buds.",
    name: 'Sergio K',
    location: 'Marseille, France',
    initials: 'SK'
  },
  {
    quote: 'A hidden gem. I have visited 5 or 6 times — it is my favourite centre in Kerala. Very authentic. The entire staff (or rather family) are wonderful and really cannot do enough for you.',
    name: 'Maria Caroline',
    location: 'London, United Kingdom',
    initials: 'MC'
  },
];

interface TestimonialsCarouselProps {
  showGermanVideo?: boolean;
}

export default function TestimonialsCarousel({ showGermanVideo = false }: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.15);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, goTo]);

  // Auto-advance every 7 seconds
  useEffect(() => {
    intervalRef.current = setInterval(next, 7000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [next]);

  // Touch support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <section className="bg-[#FAF7F2] py-20 sm:py-28 relative overflow-hidden">
      {/* Testimonials Animation Keyframes */}
      <style>{`
        @keyframes starPop {
          0% { transform: scale(0) rotate(-15deg); opacity: 0; }
          70% { transform: scale(1.2) rotate(5deg); }
          100% { transform: scale(1) rotate(0); opacity: 1; }
        }
        .animate-star-pop {
          opacity: 0;
          animation: starPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes leafSwaySlow {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(15px, -10px) rotate(10deg) scale(1.03); }
        }
        .animate-leaf-sway-slow {
          animation: leafSwaySlow 12s ease-in-out infinite;
        }

        @keyframes progressFill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-progress-fill {
          animation: progressFill 7s linear forwards;
          transform-origin: left;
        }
      `}</style>

      {/* Swaying decorative leaves in the background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-25 overflow-hidden">
        {/* Top Left Leaf */}
        <div className="absolute top-12 left-12 w-20 h-20 animate-leaf-sway-slow">
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full text-primary">
            <path d="M12 48 C 24 36 36 24 48 12 M48 12 C 36 28 24 40 12 48 Z" fill="currentColor" opacity="0.15" />
            <path d="M12 48 Q 28 42 48 12" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        {/* Bottom Right Leaf */}
        <div className="absolute bottom-16 right-16 w-24 h-24 animate-leaf-sway-slow" style={{ animationDelay: '-4s' }}>
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full text-accent">
            <path d="M16 48 C 28 36 40 24 48 16 M48 16 C 36 32 28 44 16 48 Z" fill="currentColor" opacity="0.15" />
            <path d="M16 48 Q 30 42 48 16" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 sm:px-6 transition-all duration-700 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="section-label">Guest Stories</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-dark mt-3">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Flex Wrapper for optional Video */}
        <div className={showGermanVideo ? "grid grid-cols-1 lg:grid-cols-3 gap-8 items-center" : ""}>
          
          {/* Testimonial Cards Carousel Container */}
          <div className={showGermanVideo ? "lg:col-span-2" : "w-full"}>
            {/* Carousel Window */}
            <div
              className="relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative min-h-[460px] sm:min-h-[380px] md:min-h-[300px]">
                {testimonials.map((t, i) => {
                  const isActive = i === current;
                  return (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        isActive
                          ? 'opacity-100 scale-100 pointer-events-auto'
                          : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white rounded-3xl shadow-xl border border-border/40 p-8 sm:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center relative overflow-hidden h-full">
                        
                        {/* Active Timer Progress Line */}
                        {isActive && (
                          <div key={current} className="absolute bottom-0 left-0 right-0 h-1 bg-accent/20">
                            <div className="h-full bg-accent animate-progress-fill" />
                          </div>
                        )}

                        {/* Left: Guest Initials */}
                        <div className="w-full md:w-1/3 flex flex-col items-center shrink-0">
                          <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                            <div className="absolute inset-0 rounded-full border border-dashed border-accent/40 animate-spin" style={{ animationDuration: '30s' }} />
                            <div className="absolute inset-2 rounded-full border border-primary/20" />
                            <div className="w-18 h-18 rounded-full bg-surface flex items-center justify-center shadow-inner">
                              <span className="font-heading text-2xl font-semibold text-primary tracking-wide">
                                {t.initials}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-center gap-1">
                            {[...Array(5)].map((_, s) => (
                              <Star 
                                key={s} 
                                size={16} 
                                className={`fill-accent text-accent ${isActive ? 'animate-star-pop' : ''}`}
                                style={{
                                  animationDelay: `${s * 80}ms`
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Right: Testimonial Narrative */}
                        <div className="flex-1 text-center md:text-left relative space-y-4">
                          <Quote className="absolute -top-6 -left-6 w-12 h-12 text-accent/10 pointer-events-none hidden md:block" />
                          
                          <p className="font-body text-base sm:text-lg text-text/80 leading-relaxed italic relative z-10">
                            "{t.quote}"
                          </p>

                          <div>
                            <h4 className="font-heading text-lg font-bold text-dark">
                              {t.name}
                            </h4>
                            <p className="font-body text-xs sm:text-sm text-accent uppercase tracking-wider font-semibold mt-0.5">
                              {t.location}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center text-text hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-sm hover:shadow-md"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      i === current ? 'w-8 h-2.5 bg-accent' : 'w-2.5 h-2.5 bg-border hover:bg-muted'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center text-text hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-sm hover:shadow-md"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Optional German Video Card */}
          {showGermanVideo && (
            <div className="w-full flex justify-center animate-fade-in lg:mt-0 mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative rounded-3xl overflow-hidden shadow-xl border border-border/40 w-full max-w-[320px] h-[380px] block cursor-pointer text-left outline-none"
              >
                <img 
                  src="/img/banner-4.jpg" 
                  alt="Guest Review" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-accent/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </div>
                  <span className="mt-4 text-[10px] font-bold text-accent uppercase tracking-widest bg-dark/65 px-3 py-1 rounded-full backdrop-blur-sm">
                    Watch Video
                  </span>
                  <p className="mt-2 text-base font-bold text-white leading-tight max-w-[200px] font-heading">
                    Guest Review
                  </p>
                </div>
              </button>
            </div>
          )}

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
                src="https://www.youtube.com/embed/pfIWKk6vBTQ?autoplay=1"
                title="Guest Review Video"
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
