import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Heart, MapPin, Award, Star, Quote } from 'lucide-react';

export default function LoyalGuestSpotlight() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="jeannie-spotlight" className="py-20 lg:py-28 bg-[#18130C] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 opacity-25 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/6 w-96 h-96 bg-accent/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-primary/20 rounded-full blur-[160px]" />
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Portrait & Floating Badge Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Outer decorative ambient border */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-accent/40 via-primary/30 to-accent/20 rounded-[36px] blur-xl opacity-70 group-hover:opacity-100 transition-all duration-700" />

              {/* Main Image Container */}
              <div className="relative z-10 rounded-[30px] overflow-hidden border border-white/15 bg-white/5 shadow-2xl">
                <img
                  src="/img/clinet.jpeg"
                  alt={t('spotlight.guestName')}
                  className="w-full h-[480px] sm:h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient bottom shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-80" />

                {/* Floating Badge on Image */}
                <div className="absolute bottom-6 left-6 right-6 bg-dark/80 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0">
                      <Award size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-wider font-body">
                        <Star size={12} fill="currentColor" /> {t('spotlight.badge')}
                      </div>
                      <h4 className="font-heading text-lg font-semibold text-white mt-0.5">
                        {t('spotlight.guestName')}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Story & Testimonial Details */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Header Labels */}
            <div>
              <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent font-semibold tracking-widest uppercase text-xs px-4 py-1.5 rounded-full mb-4">
                <Heart size={13} fill="currentColor" /> {t('spotlight.label')}
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                {t('spotlight.title')}
              </h2>

              <p className="font-body text-white/70 text-lg mt-3 flex items-center justify-center lg:justify-start gap-2">
                <MapPin size={18} className="text-accent shrink-0" />
                {t('spotlight.subtitle')}
              </p>
            </div>

            {/* Main Quote Block */}
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 text-left shadow-xl">
              <Quote size={40} className="text-accent/30 absolute top-4 right-6 pointer-events-none" />
              
              <p className="font-heading text-lg sm:text-xl text-white/95 italic leading-relaxed relative z-10">
                "{t('spotlight.quote')}"
              </p>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-body text-xs text-white/70">
                <div>
                  <span className="block font-bold text-accent uppercase tracking-wider text-[11px]">{t('spotlight.profileLabel')}</span>
                  <span className="text-sm text-white font-medium">{t('spotlight.profileVal')}</span>
                </div>
                <div>
                  <span className="block font-bold text-accent uppercase tracking-wider text-[11px]">{t('spotlight.retreatLabel')}</span>
                  <span className="text-sm text-white font-medium">{t('spotlight.retreatVal')}</span>
                </div>
                <div>
                  <span className="block font-bold text-accent uppercase tracking-wider text-[11px]">{t('spotlight.therapiesLabel')}</span>
                  <span className="text-sm text-white font-medium">{t('spotlight.therapiesVal')}</span>
                </div>
              </div>
            </div>

            {/* 3 Metric Pill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center lg:text-left">
                <div className="font-heading text-3xl font-bold text-accent">18</div>
                <div className="font-body text-xs text-white/80 mt-1 uppercase tracking-wider">{t('spotlight.annualRetreats')}</div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center lg:text-left">
                <div className="font-heading text-3xl font-bold text-accent">20+</div>
                <div className="font-body text-xs text-white/80 mt-1 uppercase tracking-wider">{t('spotlight.yearsTrust')}</div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center lg:text-left">
                <div className="font-heading text-3xl font-bold text-accent">100%</div>
                <div className="font-body text-xs text-white/80 mt-1 uppercase tracking-wider">{t('spotlight.authenticAyurveda')}</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
