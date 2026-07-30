import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Award, Star, Leaf, HeartPulse, Soup, Smile, Play, X, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Badge {
  icon: typeof Award;
  highlight: string;
  text: string;
  onClick?: () => void;
  extraContent?: React.ReactNode;
}

function BadgeCard({ badge, idx }: { badge: Badge; idx: number }) {
  const Icon = badge.icon;
  const floatClass = idx % 3 === 0
    ? 'animate-gentle-float-1'
    : idx % 3 === 1
      ? 'animate-gentle-float-2'
      : 'animate-gentle-float-3';

  return (
    <div
      onClick={badge.onClick}
      className={`w-80 shrink-0 group relative overflow-hidden rounded-3xl border border-white/5 bg-[#1E1810]/60 backdrop-blur-md p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-accent/40 hover:bg-[#1E1810]/80 hover:shadow-[0_20px_50px_rgba(196,135,59,0.15)] select-none ${badge.onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-accent/20 group-hover:border-accent/60 transition-all duration-500" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-accent/20 group-hover:border-accent/60 transition-all duration-500" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-accent/20 group-hover:border-accent/60 transition-all duration-500" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-accent/20 group-hover:border-accent/60 transition-all duration-500" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/15 to-transparent group-hover:via-accent/60 transition-all duration-500" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

      <div className="relative flex justify-center mb-6">
        <svg viewBox="0 0 100 100" className="absolute w-24 h-24 -top-4 text-accent/10 group-hover:text-accent/25 group-hover:scale-110 transition-all duration-700 fill-none stroke-current" strokeWidth="1.2">
          <path d="M 35 75 C 20 60, 20 40, 35 25 M 65 75 C 80 60, 80 40, 65 25" />
          <path d="M 28 65 L 22 62 M 25 53 L 18 53 M 28 41 L 22 44 M 32 31 L 28 35" />
          <path d="M 72 65 L 78 62 M 75 53 L 82 53 M 72 41 L 78 44 M 68 31 L 72 35" />
        </svg>
        <div className="absolute w-16 h-16 rounded-full bg-accent/5 group-hover:bg-accent/10 blur-md transition-all duration-500" />
        <div className={`relative w-16 h-16 rounded-full border border-accent/25 flex items-center justify-center bg-[#1E1810] group-hover:border-accent group-hover:scale-105 transition-all duration-500 shadow-[inset_0_0_15px_rgba(196,135,59,0.05)] group-hover:shadow-[0_0_20px_rgba(196,135,59,0.25)] ${floatClass}`}>
          <Icon className="w-7 h-7 text-accent transition-transform duration-500 group-hover:rotate-6" strokeWidth={1.5} />
        </div>
      </div>

      <div className="relative font-body">
        <h3 className="font-heading text-xl lg:text-2xl text-accent font-semibold tracking-wide mb-3">
          {badge.highlight}
        </h3>
        <p className="text-white/70 font-body text-sm leading-relaxed max-w-[240px] mx-auto">
          {badge.text}
        </p>

        {badge.extraContent && (
          <div className="mt-5 pt-4 border-t border-white/10">
            {badge.extraContent}
          </div>
        )}

        {badge.onClick && (
          <div className="mt-3 text-[10px] uppercase tracking-widest text-accent/50 group-hover:text-accent/80 transition-colors font-semibold">
            View Details →
          </div>
        )}
      </div>
    </div>
  );
}

export default function TrustBadges() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal(0.2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const travellersChoiceExtra = (
    <div className="flex items-center justify-center gap-3">
      <img
        src="/img/ChatGPT Image Jul 30, 2026, 10_54_32 AM.png"
        alt="Travellers' Choice Award"
        className="w-10 h-10 rounded-full object-cover object-center shadow-md border border-accent/30"
      />
      <div className="flex gap-1.5">
        {['2024', '2025', '2026'].map((yr) => (
          <div
            key={yr}
            className="flex flex-col items-center bg-accent/15 border border-accent/30 rounded-lg px-2 py-1"
          >
            <Trophy size={10} className="text-accent mb-0.5" />
            <span className="font-heading text-xs font-bold text-white leading-none">{yr}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const jeannieExtra = (
    <div className="flex items-center justify-center gap-3">
      <img
        src="/img/clinet.jpeg"
        alt="Jeannie from UK — 18 Visits"
        className="w-10 h-10 rounded-full object-cover object-top shadow-md border-2 border-accent/50"
      />
      <div className="text-left">
        <p className="font-heading text-sm font-semibold text-white leading-tight">Jeannie · UK 🇬🇧</p>
        <p className="font-body text-[11px] text-accent font-semibold">18 Annual Retreat Visits</p>
      </div>
    </div>
  );

  const badges: Badge[] = [
    {
      icon: Award,
      highlight: t('trust.badges.tripadvisor.highlight'),
      text: t('trust.badges.tripadvisor.text'),
      extraContent: jeannieExtra,
      onClick: () => scrollTo('jeannie-spotlight'),
    },
    {
      icon: Star,
      highlight: t('trust.badges.travellersChoice.highlight'),
      text: t('trust.badges.travellersChoice.text'),
      extraContent: travellersChoiceExtra,
      onClick: () => scrollTo('award-section'),
    },
    { icon: Leaf,       highlight: t('trust.badges.greenLeaf.highlight'),   text: t('trust.badges.greenLeaf.text') },
    { icon: HeartPulse, highlight: t('trust.badges.years.highlight'),       text: t('trust.badges.years.text') },
    { icon: Soup,       highlight: t('trust.badges.organic.highlight'),     text: t('trust.badges.organic.text') },
    { icon: Smile,      highlight: t('trust.badges.returnRate.highlight'),  text: t('trust.badges.returnRate.text') },
  ];

  return (
    <section
      id="trust"
      ref={ref}
      className={`relative py-20 sm:py-28 overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-[#16120C]" />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/50 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 px-4">
          <span className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">
            {t('trust.label')}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mt-3 font-semibold">
            {t('trust.title')}
          </h2>
          <div className="w-24 h-0.5 bg-accent/60 mx-auto mt-5 rounded-full"></div>
          <p className="text-white/80 text-center mt-6 max-w-3xl mx-auto font-body text-sm sm:text-base leading-relaxed">
            {t('trust.description')}
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent/95 text-white font-body text-sm font-semibold px-6 py-3.5 rounded-full mt-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-105 group cursor-pointer"
          >
            <Play size={16} fill="white" className="group-hover:translate-x-0.5 transition-transform" />
            {t('trust.videoButton')}
          </button>
        </div>

        <div className="relative w-full overflow-hidden py-4 mt-8">
          <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-primary/80 via-primary/30 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-primary/80 via-primary/30 to-transparent z-20 pointer-events-none" />
          <div className="flex w-max gap-6 animate-marquee-scroll hover:[animation-play-state:paused] py-4">
            {badges.map((badge, idx) => (
              <BadgeCard key={`item-1-${idx}`} badge={badge} idx={idx} />
            ))}
            {badges.map((badge, idx) => (
              <BadgeCard key={`item-2-${idx}`} badge={badge} idx={idx} />
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#1A150E] max-w-4xl w-full rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 backdrop-blur-md transition-all duration-200 z-10 cursor-pointer"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black">
              <iframe
                src="https://www.youtube.com/embed/B-5vcic6zl8?start=55&autoplay=1"
                title="Mrs. Pilar's Testimonial"
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
