import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTABanner() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section className="relative bg-primary py-20 sm:py-24 overflow-hidden">
      {/* SVG Botanical Leaf Watermark */}
      <svg
        className="absolute bottom-0 right-0 w-64 sm:w-80 h-auto opacity-[0.08] text-white"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M160 180C160 180 140 120 100 80C60 40 20 20 20 20C20 20 60 60 80 100C100 140 100 180 100 180"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M100 180C100 180 100 140 90 100C80 60 50 30 50 30"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M100 180C100 180 110 140 130 110C150 80 170 60 170 60"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M100 130C100 130 80 110 60 100C40 90 20 90 20 90"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M100 130C100 130 120 120 140 120C160 120 180 130 180 130"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <ellipse cx="100" cy="50" rx="30" ry="40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        <ellipse cx="60" cy="70" rx="20" ry="30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
        <ellipse cx="140" cy="70" rx="20" ry="30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
      </svg>

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-4 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[52px] font-semibold text-white leading-tight mb-5">
          Begin Your Healing Journey Today
        </h2>
        <p className="font-body text-sm sm:text-base text-white/60 mb-10 tracking-wide">
          Panchakarma · Yoga · Rejuvenation · Detox
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block bg-accent hover:bg-accent/90 text-white font-body text-base font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
        >
          Book Your Stay
        </a>
      </div>
    </section>
  );
}
