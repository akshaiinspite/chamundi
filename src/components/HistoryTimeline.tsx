import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, X, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  caption: string;
  description: string;
  infographicLabel: string;
  infographicValue: string;
  badge: string;
  image: string;
  timelineImage: string;
}

export default function HistoryTimeline() {
  const { t } = useTranslation();
  const { ref: timelineRef } = useScrollReveal(0.15);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [activeYear, setActiveYear] = useState<string>('1935');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const timelineData: TimelineEvent[] = [
    {
      id: '1935',
      year: t('history.timeline.1935.year'),
      title: t('history.timeline.1935.title'),
      caption: t('history.timeline.1935.caption'),
      description: t('history.timeline.1935.description'),
      infographicLabel: t('history.timeline.1935.infographicLabel'),
      infographicValue: t('history.timeline.1935.infographicValue'),
      badge: t('history.timeline.1935.badge'),
      image: '/img/banner-1.jpg',
      timelineImage: '/img/historyline/img193.jpeg'
    },
    {
      id: '1945',
      year: t('history.timeline.1945.year'),
      title: t('history.timeline.1945.title'),
      caption: t('history.timeline.1945.caption'),
      description: t('history.timeline.1945.description'),
      infographicLabel: t('history.timeline.1945.infographicLabel'),
      infographicValue: t('history.timeline.1945.infographicValue'),
      badge: t('history.timeline.1945.badge'),
      image: '/img/banner-2.jpg',
      timelineImage: '/img/historyline/img194.png'
    },
    {
      id: '1963',
      year: t('history.timeline.1963.year'),
      title: t('history.timeline.1963.title'),
      caption: t('history.timeline.1963.caption'),
      description: t('history.timeline.1963.description'),
      infographicLabel: t('history.timeline.1963.infographicLabel'),
      infographicValue: t('history.timeline.1963.infographicValue'),
      badge: t('history.timeline.1963.badge'),
      image: '/img/kerala-ayurveda-2.jpg',
      timelineImage: '/img/historyline/img19six.png'
    },
    {
      id: '1990',
      year: t('history.timeline.1990.year'),
      title: t('history.timeline.1990.title'),
      caption: t('history.timeline.1990.caption'),
      description: t('history.timeline.1990.description'),
      infographicLabel: t('history.timeline.1990.infographicLabel'),
      infographicValue: t('history.timeline.1990.infographicValue'),
      badge: t('history.timeline.1990.badge'),
      image: '/img/rooms.jpg',
      timelineImage: '/img/historyline/img1990.jpeg'
    },
    {
      id: '1999',
      year: t('history.timeline.1999.year'),
      title: t('history.timeline.1999.title'),
      caption: t('history.timeline.1999.caption'),
      description: t('history.timeline.1999.description'),
      infographicLabel: t('history.timeline.1999.infographicLabel'),
      infographicValue: t('history.timeline.1999.infographicValue'),
      badge: t('history.timeline.1999.badge'),
      image: '/img/banner-3.jpg',
      timelineImage: '/img/historyline/1999.jpeg'
    },
    {
      id: '2000',
      year: t('history.timeline.2000.year'),
      title: t('history.timeline.2000.title'),
      caption: t('history.timeline.2000.caption'),
      description: t('history.timeline.2000.description'),
      infographicLabel: t('history.timeline.2000.infographicLabel'),
      infographicValue: t('history.timeline.2000.infographicValue'),
      badge: t('history.timeline.2000.badge'),
      image: '/img/organic.jpg',
      timelineImage: '/img/historyline/img2000.jpeg'
    },
    {
      id: 'global-era',
      year: t('history.timeline.global-era.year'),
      title: t('history.timeline.global-era.title'),
      caption: t('history.timeline.global-era.caption'),
      description: t('history.timeline.global-era.description'),
      infographicLabel: t('history.timeline.global-era.infographicLabel'),
      infographicValue: t('history.timeline.global-era.infographicValue'),
      badge: t('history.timeline.global-era.badge'),
      image: '/img/rejuvenation.jpg',
      timelineImage: '/img/historyline/imglobalera.jpeg'
    },
    {
      id: '2024',
      year: t('history.timeline.2024.year'),
      title: t('history.timeline.2024.title'),
      caption: t('history.timeline.2024.caption'),
      description: t('history.timeline.2024.description'),
      infographicLabel: t('history.timeline.2024.infographicLabel'),
      infographicValue: t('history.timeline.2024.infographicValue'),
      badge: t('history.timeline.2024.badge'),
      image: '/img/yoga.jpg',
      timelineImage: '/img/historyline/imgyears.jpeg'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!cardsContainerRef.current) return;
      const rect = cardsContainerRef.current.getBoundingClientRect();
      const timelineHeight = rect.height;
      const relativeScroll = -rect.top + window.innerHeight / 2;
      const progress = Math.min(Math.max((relativeScroll / timelineHeight) * 100, 0), 100);
      setScrollProgress(progress);

      let currentActive = '1935';
      for (const event of timelineData) {
        const el = cardsRef.current[event.id];
        if (el) {
          const cardRect = el.getBoundingClientRect();
          if (cardRect.top < window.innerHeight / 2) {
            currentActive = event.id;
          }
        }
      }
      setActiveYear(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (id: string) => {
    const cardElement = cardsRef.current[id];
    if (cardElement) {
      const headerOffset = 140; // Avoid navbar overlap
      const elementPosition = cardElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveYear(id);
    }
  };

  return (
    <section id="our-history" ref={timelineRef} className="py-20 lg:py-28 px-4 bg-primary relative overflow-hidden text-white">

      {/* Background drifting particles/glows for depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-0 select-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-3xl animate-particle-drift-1" />
        <div className="absolute top-2/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#85B267]/15 to-transparent blur-3xl animate-particle-drift-2" />
        <div className="absolute bottom-10 left-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-accent/15 to-transparent blur-3xl animate-particle-drift-1" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="section-label text-accent">{t('history.label')}</span>
          <h2 className="font-heading text-4xl sm:text-5xl mt-3 mb-6 text-white font-semibold">
            {t('history.title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-white/80 leading-relaxed font-body">
            {t('history.description')}
          </p>
        </div>

        {/* YEAR NAVIGATOR BAR */}
        <div className="sticky top-20 z-40 bg-primary/95 backdrop-blur-md py-4 border-y border-white/10 mb-16 overflow-x-auto scrollbar-none flex justify-start lg:justify-center gap-1 sm:gap-2">
          <div className="flex px-4 min-w-max lg:mx-auto">
            {timelineData.map((event) => (
              <button
                key={event.id}
                onClick={() => scrollToCard(event.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full tracking-wide transition-all duration-300 font-body cursor-pointer ${activeYear === event.id
                  ? 'bg-accent text-white shadow-md shadow-accent/20 scale-105'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
              >
                {event.year}
              </button>
            ))}
          </div>
        </div>

        {/* TIMELINE WRAPPER */}
        <div ref={cardsContainerRef} className="relative mt-8">

          {/* Central Vertical Connector Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-white/20 -translate-x-1/2">
            <div
              className="absolute top-0 left-0 w-full bg-accent rounded-full transition-all duration-150"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Timeline Cards */}
          <div className="space-y-16 lg:space-y-24">
            {timelineData.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={event.id}
                  ref={(el) => { cardsRef.current[event.id] = el; }}
                  className={`flex flex-col lg:flex-row items-start relative ${isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                >

                  {/* Left / Right Card Container */}
                  <div className="w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)] ml-16 lg:ml-0">

                    {/* The Frosted Glass Style Card */}
                    <div
                      onClick={() => setSelectedEvent(event)}
                      className="group bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-8 shadow-md hover:shadow-xl hover:bg-white/10 hover:border-accent/40 transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col md:flex-row gap-6 items-center text-white"
                    >
                      {/* Decorative corner accents */}
                      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/20 rounded-tr-3xl group-hover:border-accent/80 transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent/20 rounded-bl-3xl group-hover:border-accent/80 transition-colors duration-300" />

                      {/* Timeline Image */}
                      <div className="w-32 h-32 md:w-44 md:h-44 shrink-0 bg-dark rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/5 group-hover:border-accent/20 transition-all duration-500 mx-auto md:mx-0 shadow-inner">
                        <img
                          src={event.timelineImage}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-35 transition-opacity duration-500" />
                      </div>

                      {/* Content details */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Custom Badge & Year */}
                        <div className="flex flex-wrap items-center gap-2 mb-2 justify-center md:justify-start">
                          <span className="bg-[#85B267]/25 text-[#85B267] text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full">
                            {event.badge}
                          </span>
                          <span className="font-heading text-xl font-bold text-accent">
                            {event.year}
                          </span>
                        </div>

                        <h3 className="font-heading text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                          {event.title}
                        </h3>

                        <p className="text-white/80 italic text-sm border-l-2 border-[#85B267]/50 pl-3 py-1 mb-4 text-left font-body">
                          "{event.caption}"
                        </p>

                        <div className="flex items-center gap-6 justify-between border-t border-white/10 pt-4 mt-2">
                          <div>
                            <span className="block text-[9px] uppercase tracking-wider text-white/60 font-bold">
                              {event.infographicLabel}
                            </span>
                            <span className="font-heading text-base font-bold text-accent">
                              {event.infographicValue}
                            </span>
                          </div>

                          <span className="text-xs font-semibold text-accent hover:text-accent/80 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform duration-300">
                            {t('history.exploreHistory')}
                            <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Circle Year Node on Timeline */}
                  <div className="absolute left-8 lg:left-1/2 w-8 h-8 rounded-full border-4 border-primary bg-accent shadow-md -translate-x-1/2 top-6 z-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Detail Modal Overlay */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white max-w-lg w-full rounded-3xl shadow-2xl border border-border/40 overflow-hidden relative flex flex-col max-h-[90vh] animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-56 shrink-0 bg-dark overflow-hidden">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-black/45 hover:bg-black/60 text-white rounded-full p-2.5 backdrop-blur-sm transition-all duration-200 cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Title & Badge */}
              <div className="absolute bottom-4 left-6 right-6">
                <span className="bg-[#85B267] text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full inline-block mb-2 shadow-md">
                  {selectedEvent.badge}
                </span>
                <h3 className="font-heading text-2xl font-bold text-white leading-tight">
                  {selectedEvent.title} ({selectedEvent.year})
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <p className="font-body text-sm text-text/80 italic leading-relaxed">
                "{selectedEvent.caption}"
              </p>

              {/* Graphic + Stat grid */}
              <div className="grid sm:grid-cols-2 gap-6 items-center bg-surface p-5 rounded-2xl border border-border/60">
                <div className="flex justify-center bg-dark rounded-xl overflow-hidden shadow-sm border border-border/10 h-32 sm:h-36 relative">
                  <img
                    src={selectedEvent.timelineImage}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#85B267]/15 flex items-center justify-center text-[#85B267]">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-text/50 uppercase font-bold tracking-wider">
                        {selectedEvent.infographicLabel}
                      </p>
                      <p className="font-heading text-lg font-bold text-accent">
                        {selectedEvent.infographicValue}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-text/50 uppercase font-bold tracking-wider">
                        {t('history.retreatFocus')}
                      </p>
                      <p className="font-body text-sm font-semibold text-text">
                        {t('history.retreatFocusVal')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="space-y-4 font-body leading-relaxed text-text/90">
                <h4 className="font-heading text-xl font-bold text-accent">{t('history.historicalNarrative')}</h4>
                <p className="text-sm sm:text-base">{selectedEvent.description}</p>
                <p className="text-xs text-text/50 leading-relaxed italic border-t border-border/60 pt-4">
                  "{t('history.foundingPrinciples')}"
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-border/60 bg-surface flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2 text-xs text-[#85B267] font-semibold">
                <ShieldCheck size={16} />
                {t('history.authenticLegacy')}
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-6 py-2 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/95 transition-all duration-200 cursor-pointer"
              >
                {t('history.closeView')}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
