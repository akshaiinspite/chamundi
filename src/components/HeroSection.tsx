import { useEffect, useState } from 'react';
import { ChevronDown, Clock3, Globe2, Star, MapPin } from 'lucide-react';

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
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-dark">
      {/* Hero Animation Rules */}
      <style>{`
        @keyframes heroZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        .animate-hero-zoom {
          animation: heroZoom 25s ease-in-out infinite;
        }
      `}</style>

      {/* Background Video with slow cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/img/banner-1.jpg"
          className="w-full h-full object-cover"
        >
          <source 
            src="/img/videos/mainbackground.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Deep darken gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-dark/50" />
      </div>

      {/* Atmospheric ambient glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary rounded-full blur-[160px] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        {/* Eyebrow label */}
        <p
          className={`text-accent text-xs sm:text-sm font-body font-semibold tracking-[0.25em] uppercase mb-6 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Heritage Ayurveda Resort · Nadukani Hills, Kerala
        </p>

        {/* H1 Heading */}
        <h1
          className={`font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[72px] font-semibold text-white leading-[1.1] mb-6 transition-all duration-700 delay-150 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Chamundi Hill Palace
        </h1>

        {/* Subtitle statement */}
        <p
          className={`font-heading text-xl sm:text-2xl md:text-[26px] italic text-white/90 mb-10 transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Where Ancient Wisdom Meets Modern Wellness
        </p>

        {/* Staggered Floating Stats Cards */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 transition-all duration-700 delay-[400ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            {
              icon: Clock3,
              value: '25+',
              label: 'Years',
            },
            {
              icon: Globe2,
              value: '40+',
              label: 'Countries',
            },
            {
              icon: Star,
              value: '4.9',
              label: 'Rated',
            },
            {
              icon: MapPin,
              value: 'Kerala',
              label: 'Hills',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            // Distribute float cycles out of sync for organic sways
            const floatClass = idx % 3 === 0 
              ? 'animate-gentle-float-1' 
              : idx % 3 === 1 
                ? 'animate-gentle-float-2' 
                : 'animate-gentle-float-3';

            return (
              <div
                key={item.label}
                className={`group bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-4 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/15 hover:border-accent/40 hover:shadow-2xl hover:shadow-black/35 ${floatClass}`}
              >
                <div className="flex-shrink-0">
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="text-accent transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="text-left select-none">
                  <div className="text-white font-heading text-xl font-semibold leading-none">
                    {item.value}
                  </div>
                  <div className="text-white/80 text-[10px] uppercase tracking-widest mt-1 font-body">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-[450ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => handleScroll('#treatments')}
            className="bg-primary hover:bg-primary/95 text-white font-body text-sm font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Explore Treatments
          </button>
          
          <button
            onClick={() => handleScroll('#contact')}
            className="border-2 border-accent text-white hover:bg-accent hover:text-white font-body text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg shadow-accent/5"
          >
            Book a Stay
          </button>
        </div>
      </div>

      {/* Scroll Down chevron */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-[600ms] ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <button
          onClick={() => handleScroll('#trust')}
          className="text-white/70 hover:text-accent transition-all duration-300 animate-bounce cursor-pointer scale-100 hover:scale-110"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </button>
      </div>

    </section>
  );
}
