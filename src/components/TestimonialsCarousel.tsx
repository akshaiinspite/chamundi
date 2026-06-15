import { useState, useCallback, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'I had 3 wonderful weeks at Chamundi Hills Palace. A beautiful place in the hills — the view is stunning. After 3 weeks I achieved a change for my life, loving myself again after some difficult years. I am happy, positive and calm.',
    name: 'Tina J',
    location: 'Copenhagen, Denmark',
  },
  {
    quote: "More than a hotel, it's living in a large plantation house. It was really like staying with friends. The treatments are of quality and the food is flavourful and perfectly adapted to non-Indian taste buds.",
    name: 'Sergio K',
    location: 'Marseille, France',
  },
  {
    quote: 'A hidden gem. I have visited 5 or 6 times — it is my favourite centre in Kerala. Very authentic. The entire staff (or rather family) are wonderful and really cannot do enough for you.',
    name: 'Maria Caroline',
    location: 'London, United Kingdom',
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const { ref, isVisible } = useScrollReveal(0.15);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, -1);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
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
    <section className="bg-surface py-20 sm:py-28">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="section-label">Testimonials</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold text-dark mt-3">
            What Our Guests Say
          </h2>
        </div>

        {/* Decorative Quote */}
        <div className="text-center mb-8">
          <span className="font-heading text-8xl sm:text-9xl text-accent/30 leading-none select-none">"</span>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  i === current
                    ? 'opacity-100 translate-x-0'
                    : i < current || (current === 0 && i === testimonials.length - 1 && direction === -1)
                    ? `opacity-0 ${direction >= 0 ? '-translate-x-full' : 'translate-x-full'}`
                    : `opacity-0 ${direction >= 0 ? 'translate-x-full' : '-translate-x-full'}`
                }`}
              >
                <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 text-center">
                  <p className="font-body text-base sm:text-lg text-text/80 leading-relaxed mb-8 italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="font-heading text-lg font-semibold text-dark">{t.name}</p>
                  <p className="font-body text-sm text-muted">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center text-text hover:text-primary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 h-2.5 bg-accent' : 'w-2.5 h-2.5 bg-border hover:bg-muted'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center text-text hover:text-primary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
