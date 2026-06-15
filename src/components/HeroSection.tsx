import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/img/banner-1.jpg"
          alt="Aerial view of Chamundi Hill Palace nestled in the Kerala hills"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-dark/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className={`text-accent text-xs sm:text-sm font-body font-semibold tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Heritage Ayurveda Resort · Nadukani Hills, Kerala
        </p>

        {/* H1 */}
        <h1
          className={`font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[72px] font-semibold text-white leading-[1.1] mb-6 transition-all duration-700 delay-150 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Chamundi Hill Palace
        </h1>

        {/* Subtitle */}
        <p
          className={`font-heading text-xl sm:text-2xl md:text-[26px] italic text-white/90 mb-10 transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Where Ancient Wisdom Meets Modern Wellness
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-[450ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => handleScroll('#treatments')}
            className="bg-primary hover:bg-primary/90 text-white font-body text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto"
          >
            Explore Treatments
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="border-2 border-accent text-white hover:bg-accent hover:text-white font-body text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300 w-full sm:w-auto"
          >
            Book a Stay
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-[600ms] ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <button
          onClick={() => handleScroll('#trust')}
          className="text-white/70 hover:text-white transition-colors animate-bounce-subtle"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
