import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';

// Dynamic self-contained Count Up component
function Counter({ end, duration = 2000, suffix = "", isVisible }: { end: number; duration?: number; suffix?: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let start = 0;
    const endVal = end;
    if (start === endVal) return;

    const totalMiliseconds = duration;
    // Tick at least every 20ms for smooth visuals
    const incrementTime = Math.max(Math.floor(totalMiliseconds / endVal), 20);
    
    const timer = setInterval(() => {
      // Scale increment relative to value size
      const step = Math.max(Math.ceil(endVal / (totalMiliseconds / incrementTime)), 1);
      start += step;
      if (start >= endVal) {
        clearInterval(timer);
        setCount(endVal);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

// Custom Vector SVG Micro-Animations
const ScienceSVG = () => (
  <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="26" stroke="#C4873B" strokeWidth="1.5" strokeDasharray="4 4" className="animate-spin" style={{ animationDuration: '15s' }} />
    <circle cx="32" cy="32" r="18" stroke="#85B267" strokeWidth="1.2" />
    <path className="svg-pulse" d="M32 16 L32 20 M32 44 L32 48 M16 32 H20 M44 32 H48" stroke="#C4873B" strokeWidth="2" strokeLinecap="round" />
    <circle className="svg-pulse" cx="32" cy="32" r="5" fill="#C4873B" />
  </svg>
);

const GuestsSVG = () => (
  <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="svg-pulse" d="M32 46 C32 46 18 35 18 24 C18 17 23 12 32 19 C41 12 46 17 46 24 C46 35 32 46 32 46 Z" fill="#85B267" opacity="0.8" />
    <circle className="svg-ripple" cx="32" cy="24" r="4" stroke="#C4873B" strokeWidth="1" />
    <circle className="svg-ripple delay-500" cx="32" cy="24" r="10" stroke="#C4873B" strokeWidth="1" />
  </svg>
);

const DoctorsSVG = () => (
  <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="svg-draw-path" d="M16 12 C16 12 32 8 32 8 C32 8 48 12 48 12 V32 C48 44 32 54 32 54 C32 54 16 44 16 32 V12 Z" stroke="#85B267" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path className="svg-pop-leaf" d="M24 30 L30 36 L40 24" stroke="#C4873B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" style={{ animationDelay: '0.6s' }} />
  </svg>
);

const ProgramSVG = () => (
  <svg className="w-12 h-12 mx-auto mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="18" fill="#C4873B" />
    <g className="svg-moon-mask">
      <circle cx="48" cy="32" r="18" fill="#1E1810" />
    </g>
    <circle cx="32" cy="32" r="18" stroke="#FAF7F2" strokeWidth="1.2" opacity="0.3" />
  </svg>
);

export default function StatsSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal(0.15);

  const stats = [
    { value: 3000, suffix: '+', label: t('stats.items.science'), svg: ScienceSVG },
    { value: 2500, suffix: '+', label: t('stats.items.guests'), svg: GuestsSVG },
    { value: 100, suffix: '%', label: t('stats.items.doctors'), svg: DoctorsSVG },
    { value: 28, suffix: ' Days', label: t('stats.items.program'), svg: ProgramSVG },
  ];

  const features = (t('stats.features', { returnObjects: true }) as string[]) || [];

  return (
    <section className="bg-[#1E1810] py-20 sm:py-28 relative overflow-hidden text-white">
      <style>{`
        @keyframes moonShadow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-16px); }
        }
        .svg-moon-mask {
          animation: moonShadow 6s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="section-label">{t('stats.label')}</span>
        
        <h2 className="font-heading text-4xl sm:text-5xl mt-3 mb-16 text-white font-semibold">
          {t('stats.title')}
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-16">
          {stats.map((stat, i) => {
            const SvgComponent = stat.svg;
            return (
              <div 
                key={i} 
                className="space-y-2 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/20 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="h-16 flex items-center justify-center">
                  <SvgComponent />
                </div>

                <span className="block font-heading text-4xl sm:text-5xl lg:text-[56px] font-semibold text-accent leading-none group-hover:scale-105 transition-transform duration-300">
                  <Counter end={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </span>

                <span className="block font-body text-xs sm:text-sm text-white/70 mt-2 font-medium">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Feature Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {Array.isArray(features) && features.map((feature, i) => (
            <span
              key={i}
              className="border border-accent/30 text-white/80 font-body text-xs sm:text-sm px-6 py-2.5 rounded-full bg-white/5 hover:bg-accent/10 hover:border-accent hover:text-white transition-all duration-300 hover:-translate-y-0.5 cursor-default select-none shadow-sm"
              style={{
                transitionDelay: `${i * 100}ms`
              }}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
