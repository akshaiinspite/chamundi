import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTABanner() {
  const { ref, isVisible } = useScrollReveal(0.15);

  const LeafWatermark = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
    <svg
      className={`h-auto opacity-[0.06] text-white absolute ${className || ''}`}
      style={style}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M160 180C160 180 140 120 100 80C60 40 20 20 20 20C20 20 60 60 80 100C100 140 100 180 100 180"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className={isVisible ? 'animate-draw-stroke' : ''}
      />
      <path
        d="M100 180C100 180 100 140 90 100C80 60 50 30 50 30"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className={isVisible ? 'animate-draw-stroke' : ''}
        style={{ animationDelay: '0.5s' }}
      />
      <path
        d="M100 180C100 180 110 140 130 110C150 80 170 60 170 60"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className={isVisible ? 'animate-draw-stroke' : ''}
        style={{ animationDelay: '0.8s' }}
      />
      <path
        d="M100 130C100 130 80 110 60 100C40 90 20 90 20 90"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className={isVisible ? 'animate-draw-stroke' : ''}
        style={{ animationDelay: '1.2s' }}
      />
      <path
        d="M100 130C100 130 120 120 140 120C160 120 180 130 180 130"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        className={isVisible ? 'animate-draw-stroke' : ''}
        style={{ animationDelay: '1.5s' }}
      />
      <ellipse 
        cx="100" 
        cy="50" 
        rx="30" 
        ry="40" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none" 
        opacity="0.5" 
        className={isVisible ? 'animate-draw-stroke' : ''}
        style={{ animationDelay: '2s' }}
      />
      <ellipse cx="60" cy="70" rx="20" ry="30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
      <ellipse cx="140" cy="70" rx="20" ry="30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );

  return (
    <section className="relative bg-gradient-to-br from-primary via-[#2A3F1B] to-primary py-20 sm:py-28 overflow-hidden animate-gradient-flow">
      {/* Visual Animation styles */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradientMove 12s ease infinite;
        }

        @keyframes ctaRipple {
          0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(1.3); opacity: 0; }
        }
        .animate-cta-ripple {
          animation: ctaRipple 6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }

        @keyframes leafDrift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-10px, 10px) rotate(4deg); }
        }
        .animate-leaf-drift {
          animation: leafDrift 10s ease-in-out infinite;
        }

        /* SVG drawing animation */
        @keyframes drawStroke {
          from { stroke-dashoffset: 600; }
          to { stroke-dashoffset: 0; }
        }
        .animate-draw-stroke {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawStroke 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Rising gold sparks */
        @keyframes ctaSparkle {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.4; }
          100% { transform: translateY(-240px) scale(1.3); opacity: 0; }
        }
        .animate-cta-sparkle {
          animation: ctaSparkle 7s ease-in-out infinite;
        }

        /* Expanding letter spacing on header text */
        @keyframes headerReveal {
          from { letter-spacing: -0.03em; filter: blur(3px); opacity: 0; }
          to { letter-spacing: 0; filter: blur(0); opacity: 1; }
        }
        .animate-header-reveal {
          animation: headerReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Swaying & Drawing Leaf Watermarks */}
      <LeafWatermark className="-top-12 -left-12 w-64 sm:w-80 rotate-180 animate-leaf-drift" />
      <LeafWatermark className="-bottom-12 -right-12 w-64 sm:w-80 animate-leaf-drift" style={{ animationDelay: '-5s' }} />

      {/* Rising golden wellness sparks */}
      <div className="absolute inset-x-0 bottom-0 top-0 pointer-events-none overflow-hidden z-0 select-none">
        {[...Array(8)].map((_, idx) => (
          <div
            key={idx}
            className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-accent/35 animate-cta-sparkle"
            style={{
              left: `${12 + idx * 11}%`,
              animationDelay: `${idx * 0.8}s`,
              animationDuration: `${5 + (idx % 3) * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Expanding concentric energy ripples */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-white/20 animate-cta-ripple" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-white/10 animate-cta-ripple" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-white/5 animate-cta-ripple" style={{ animationDelay: '4s' }} />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-4 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="section-label text-accent font-body mb-2 inline-block">Retreat Booking</span>
        
        <h2 className={`font-heading text-4xl sm:text-5xl lg:text-[52px] font-semibold text-white leading-tight mb-5 ${
          isVisible ? 'animate-header-reveal' : 'opacity-0'
        }`}>
          Begin Your Healing Journey Today
        </h2>
        
        <p className="font-body text-sm sm:text-base text-white/70 mb-10 tracking-wide font-medium">
          Panchakarma · Yoga · Rejuvenation · Detox
        </p>
        
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block bg-accent hover:bg-accent/90 text-white font-body text-base font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-0.5 shadow-lg shadow-accent/20 animate-pulse hover:[animation-play-state:paused]"
          style={{ animationDuration: '3s' }}
        >
          Book Your Stay
        </a>
      </div>
    </section>
  );
}
