import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Trophy, Star, ShieldCheck, Award } from 'lucide-react';

export default function AwardSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal(0.15);

  const awardYears = ['2024', '2025', '2026'];

  return (
    <section id="award-section" className="py-16 lg:py-24 bg-[#16120C] text-white relative overflow-hidden">
      {/* Ambient decorative lighting */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#85B267] rounded-full blur-[140px]" />
      </div>

      {/* Decorative top/bottom subtle borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT: Award Badge Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group w-full max-w-md">
              {/* Subtle ambient glow behind image */}
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/30 via-[#85B267]/25 to-accent/30 rounded-[32px] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Award Image */}
              <img
                src="/img/award.png"
                alt={t('award.title')}
                className="relative z-10 w-full h-auto object-cover rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: Content & Years Showcase */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Sub-label */}
            <div>
              <span className="section-label text-accent font-semibold tracking-widest uppercase text-xs">
                {t('award.label')}
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-3 leading-tight">
                {t('award.title')}
              </h2>
              
              <p className="font-body text-accent text-lg sm:text-xl font-medium mt-2">
                {t('award.subtitle')}
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="font-body text-white/80 leading-relaxed text-base sm:text-lg">
              {t('award.description')}
            </p>

            {/* YEAR BADGES SHOWCASE */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-white/60 mb-4 font-body">
                {t('award.consecutive')}
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                {awardYears.map((year) => (
                  <div
                    key={year}
                    className="relative group/year bg-[#1E1810] border border-accent/40 rounded-2xl px-6 py-4 flex items-center gap-3 shadow-lg hover:border-accent hover:bg-accent/10 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0">
                      <Trophy size={18} />
                    </div>
                    
                    <div className="text-left">
                      <span className="block text-[10px] uppercase font-bold text-accent tracking-wider font-body">
                        {t('award.winner')}
                      </span>
                      <span className="font-heading text-2xl font-bold text-white leading-none">
                        {year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Award Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 text-left">
                <ShieldCheck size={24} className="text-accent shrink-0" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">{t('award.top10')}</h4>
                  <p className="font-body text-xs text-white/70">{t('award.top10Sub')}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 text-left">
                <Star size={24} className="text-accent shrink-0" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">{t('award.fiveStar')}</h4>
                  <p className="font-body text-xs text-white/70">{t('award.fiveStarSub')}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 text-left">
                <Award size={24} className="text-accent shrink-0" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">{t('award.authenticCare')}</h4>
                  <p className="font-body text-xs text-white/70">{t('award.authenticCareSub')}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
