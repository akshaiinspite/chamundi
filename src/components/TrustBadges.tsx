import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Award, Star, Leaf, HeartPulse, Soup, Smile, Play, X, Trophy, Sparkles, Home, GraduationCap, UserCheck, Stethoscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Badge {
  icon: typeof Award;
  highlight: string;
  text: string;
  bgImage?: string;
  imgPosition?: string;
  badgeTag?: string;
  onClick?: () => void;
  extraContent?: React.ReactNode;
}

function BadgeCard({ badge, idx }: { badge: Badge; idx: number }) {
  const { t } = useTranslation();
  const Icon = badge.icon;
  const floatClass = idx % 3 === 0
    ? 'animate-gentle-float-1'
    : idx % 3 === 1
      ? 'animate-gentle-float-2'
      : 'animate-gentle-float-3';

  // If card has a full photo background image, render with photo fully visible at top and text below
  if (badge.bgImage) {
    return (
      <div
        onClick={badge.onClick}
        className={`w-80 shrink-0 group relative overflow-hidden rounded-3xl border border-accent/30 bg-[#1E1810]/95 backdrop-blur-md p-4 text-center flex flex-col items-center transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-accent/80 hover:shadow-[0_20px_50px_rgba(196,135,59,0.25)] select-none ${badge.onClick ? 'cursor-pointer' : ''}`}
      >
        {/* Corner Accents */}
        <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-accent/50 group-hover:border-accent transition-all duration-500 z-10" />
        <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-accent/50 group-hover:border-accent transition-all duration-500 z-10" />
        <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-accent/50 group-hover:border-accent transition-all duration-500 z-10" />
        <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-accent/50 group-hover:border-accent transition-all duration-500 z-10" />

        {/* Top Fully Visible Photo Container */}
        <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden mb-3 border border-accent/40 shadow-md bg-[#16120C]">
          <img
            src={badge.bgImage}
            alt={badge.highlight}
            className={`w-full h-full object-cover ${badge.imgPosition || 'object-[center_28%]'} transition-transform duration-700 group-hover:scale-105`}
          />
          {/* Floating TripAdvisor Tag */}
          <div className="absolute top-2.5 right-2.5 bg-[#140F0A]/95 backdrop-blur-md border border-accent/60 rounded-full px-2.5 py-1 flex items-center gap-1.5 text-accent text-[11px] font-extrabold uppercase tracking-wider shadow-lg z-10">
            <Award size={13} className="text-accent" />
            <span>TripAdvisor</span>
          </div>
        </div>

        {/* Text Details Below Photo */}
        <div className="w-full font-body px-1 pb-1">
          <h3 className="font-heading text-xl sm:text-2xl text-white font-extrabold tracking-wide mb-1">
            {badge.highlight}
          </h3>

          <p className="text-accent font-heading text-sm sm:text-base font-bold leading-snug mb-2.5">
            {badge.text}
          </p>

          {badge.extraContent && (
            <div className="mb-2.5">
              {badge.extraContent}
            </div>
          )}

          {badge.onClick && (
            <div className="text-[11px] uppercase tracking-widest text-accent font-bold group-hover:text-white transition-colors flex items-center justify-center gap-1">
              {t('trust.viewDetails')}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={badge.onClick}
      className={`w-80 shrink-0 group relative overflow-hidden rounded-3xl border border-accent/30 bg-[#1E1810]/85 backdrop-blur-md p-6 sm:p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-accent/80 hover:bg-[#1E1810]/95 hover:shadow-[0_20px_50px_rgba(196,135,59,0.25)] select-none ${badge.onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Decorative Corner Accents */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-accent/40 group-hover:border-accent transition-all duration-500 z-10" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-accent/40 group-hover:border-accent transition-all duration-500 z-10" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-accent/40 group-hover:border-accent transition-all duration-500 z-10" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-accent/40 group-hover:border-accent transition-all duration-500 z-10" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent group-hover:via-accent transition-all duration-500 z-10" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/15 via-transparent to-transparent z-10" />

      {/* Top Icon Badge */}
      <div className="relative z-10 flex justify-center mb-4">
        <svg viewBox="0 0 100 100" className="absolute w-24 h-24 -top-4 text-accent/20 group-hover:text-accent/45 group-hover:scale-110 transition-all duration-700 fill-none stroke-current" strokeWidth="1.2">
          <path d="M 35 75 C 20 60, 20 40, 35 25 M 65 75 C 80 60, 80 40, 65 25" />
          <path d="M 28 65 L 22 62 M 25 53 L 18 53 M 28 41 L 22 44 M 32 31 L 28 35" />
          <path d="M 72 65 L 78 62 M 75 53 L 82 53 M 72 41 L 78 44 M 68 31 L 72 35" />
        </svg>
        <div className="absolute w-16 h-16 rounded-full bg-accent/15 group-hover:bg-accent/30 blur-md transition-all duration-500" />
        <div className={`relative w-14 h-14 rounded-full border-2 border-accent/50 flex items-center justify-center bg-[#1E1810]/95 group-hover:border-accent group-hover:scale-105 transition-all duration-500 shadow-[0_0_15px_rgba(196,135,59,0.3)] group-hover:shadow-[0_0_25px_rgba(196,135,59,0.5)] ${floatClass}`}>
          <Icon className="w-7 h-7 text-accent transition-transform duration-500 group-hover:rotate-6" strokeWidth={1.8} />
        </div>
      </div>

      <div className="relative z-10 font-body">
        {badge.badgeTag && (
          <span className="inline-block bg-accent/25 border border-accent/50 text-accent text-[11px] uppercase font-extrabold tracking-wider px-3.5 py-0.5 rounded-full mb-2 shadow-sm">
            {badge.badgeTag}
          </span>
        )}

        <h3 className="font-heading text-xl sm:text-2xl text-accent font-extrabold tracking-wide mb-2">
          {badge.highlight}
        </h3>

        <p className="text-white font-body text-sm sm:text-base leading-snug max-w-full mx-auto font-semibold">
          {badge.text}
        </p>

        {badge.extraContent && (
          <div className="mt-4 pt-3 border-t border-white/20">
            {badge.extraContent}
          </div>
        )}

        {badge.onClick && (
          <div className="mt-3.5 text-[11px] uppercase tracking-widest text-accent/90 group-hover:text-white transition-colors font-extrabold flex items-center justify-center gap-1">
            {t('trust.viewDetails')}
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
    <div className="flex flex-col items-center gap-3 pt-1.5 w-full">
      {/* TripAdvisor Logo */}
      <img
        src="/img/ChatGPT Image Jul 30, 2026, 10_54_32 AM.png"
        alt="Travellers' Choice Award"
        className="w-20 h-20 sm:w-22 sm:h-22 rounded-full object-cover object-center shadow-[0_0_25px_rgba(196,135,59,0.4)] border-2 border-accent shrink-0 hover:scale-105 transition-transform"
      />

      {/* 3 Prominent Full-Width Year Badges */}
      <div className="flex items-center justify-between gap-2 w-full pt-0.5">
        {['2024', '2025', '2026'].map((yr) => (
          <div
            key={yr}
            className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-accent/35 via-accent/25 to-accent/15 border-2 border-accent/70 rounded-xl py-2 px-1 shadow-md hover:border-accent hover:scale-105 transition-all"
          >
            <Trophy size={16} className="text-accent mb-0.5" />
            <span className="font-heading text-base sm:text-lg font-black text-white leading-none tracking-tight">{yr}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const jeannieExtra = (
    <div className="inline-flex items-center justify-center gap-2 bg-accent/25 border border-accent/50 rounded-full py-1.5 px-4 shadow-sm mt-0.5">
      <Award size={16} className="text-accent shrink-0" />
      <span className="text-sm text-white font-bold font-body">{t('trust.jeannieRetreatVisits')}</span>
    </div>
  );

  const cureCardExtra = (
    <div className="flex flex-col gap-2 pt-2 text-left w-full font-body">
      {[
        { icon: Home, text: 'Palace Stay & In-House Organic Diet' },
        { icon: HeartPulse, text: 'Daily 2 4-Hand Therapies & 2 Yoga' },
        { icon: GraduationCap, text: 'Ayurvedic Lectures & Cooking Class' },
        { icon: UserCheck, text: 'Prakruti (Vata, Pitta, Kapha) Analysis' },
        { icon: Stethoscope, text: '24/7 Doctor Care, Temple & Nature Walks' },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2.5 bg-accent/10 border border-accent/25 rounded-xl px-3 py-1.5 hover:bg-accent/20 hover:border-accent/50 transition-colors">
          <div className="w-6 h-6 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0 shadow-sm">
            <item.icon size={13} strokeWidth={2} />
          </div>
          <span className="text-xs font-bold leading-snug text-white tracking-wide">{item.text}</span>
        </div>
      ))}
    </div>
  );

  const badges: Badge[] = [
    {
      icon: Award,
      badgeTag: 'TripAdvisor Excellence',
      highlight: 'Jeannie · UK 🇬🇧',
      text: t('trust.jeannieTag'),
      bgImage: '/img/clinet.jpeg',
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
    {
      icon: Sparkles,
      badgeTag: t('trust.cureInclusions.badge'),
      highlight: 'Personalized Ayurvedic Cure',
      text: 'All-inclusive authentic healing retreat in Kerala',
      extraContent: cureCardExtra,
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
