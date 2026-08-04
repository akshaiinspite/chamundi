import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Leaf, Droplet, Sparkles, Sun, Flame, Heart, Calendar, HelpCircle, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface OfferingStep {
  number: number;
  description: string;
}

interface Offering {
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
  duration: string;
  steps: OfferingStep[];
}

export default function OfferingsGrid() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.15);

  const offerings: Offering[] = [
    {
      icon: Leaf,
      image: '/img/314962107_566571368608410_5904308292292831319_n.jpg',
      title: t('offeringsSection.items.panchakarma.title'),
      description: t('offeringsSection.items.panchakarma.description'),
      duration: t('offeringsSection.items.panchakarma.duration'),
      steps: [
        { number: 1, description: t('offeringsSection.items.panchakarma.step1') },
        { number: 2, description: t('offeringsSection.items.panchakarma.step2') },
        { number: 3, description: t('offeringsSection.items.panchakarma.step3') },
      ]
    },
    {
      icon: Droplet,
      image: '/img/rejuvenation.jpg',
      title: t('offeringsSection.items.detox.title'),
      description: t('offeringsSection.items.detox.description'),
      duration: t('offeringsSection.items.detox.duration'),
      steps: [
        { number: 1, description: t('offeringsSection.items.detox.step1') },
        { number: 2, description: t('offeringsSection.items.detox.step2') },
        { number: 3, description: t('offeringsSection.items.detox.step3') },
      ]
    },
    {
      icon: Sparkles,
      image: '/img/kerala-ayurveda-2.jpg',
      title: t('offeringsSection.items.rejuvenation.title'),
      description: t('offeringsSection.items.rejuvenation.description'),
      duration: t('offeringsSection.items.rejuvenation.duration'),
      steps: [
        { number: 1, description: t('offeringsSection.items.rejuvenation.step1') },
        { number: 2, description: t('offeringsSection.items.rejuvenation.step2') },
        { number: 3, description: t('offeringsSection.items.rejuvenation.step3') },
      ]
    },
    {
      icon: Sun,
      image: '/img/yoga.jpg',
      title: t('offeringsSection.items.yoga.title'),
      description: t('offeringsSection.items.yoga.description'),
      duration: t('offeringsSection.items.yoga.duration'),
      steps: [
        { number: 1, description: t('offeringsSection.items.yoga.step1') },
        { number: 2, description: t('offeringsSection.items.yoga.step2') },
        { number: 3, description: t('offeringsSection.items.yoga.step3') },
      ]
    },
    {
      icon: Flame,
      image: '/img/weight-loss.jpg',
      title: t('offeringsSection.items.weightLoss.title'),
      description: t('offeringsSection.items.weightLoss.description'),
      duration: t('offeringsSection.items.weightLoss.duration'),
      steps: [
        { number: 1, description: t('offeringsSection.items.weightLoss.step1') },
        { number: 2, description: t('offeringsSection.items.weightLoss.step2') },
        { number: 3, description: t('offeringsSection.items.weightLoss.step3') },
      ]
    },
    {
      icon: Heart,
      image: '/img/stress-relief.jpg',
      title: t('offeringsSection.items.stressRelief.title'),
      description: t('offeringsSection.items.stressRelief.description'),
      duration: t('offeringsSection.items.stressRelief.duration'),
      steps: [
        { number: 1, description: t('offeringsSection.items.stressRelief.step1') },
        { number: 2, description: t('offeringsSection.items.stressRelief.step2') },
        { number: 3, description: t('offeringsSection.items.stressRelief.step3') },
      ]
    }
  ];

  const activeOffering = offerings[activeIndex] || offerings[0];
  const ActiveIcon = activeOffering.icon;

  return (
    <section id="offerings" className="py-20 sm:py-28 bg-dark relative overflow-hidden text-white">
      {/* Dynamic Connector Line Animation Styles */}
      <style>{`
        @keyframes flowDash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-flow-dash {
          stroke-dasharray: 6 4;
          animation: flowDash 1.2s linear infinite;
        }

        .showcase-fade-in {
          animation: slideUpShowcase 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideUpShowcase {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .offering-tab-active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 20%;
          bottom: 20%;
          width: 3px;
          background-color: var(--color-accent, #C4873B);
          border-radius: 9999px;
        }

        /* Custom scrollbar for offerings horizontal menu */
        @media (max-width: 1023px) {
          .offering-menu-scrollbar::-webkit-scrollbar {
            height: 5px;
          }
          .offering-menu-scrollbar::-webkit-scrollbar-track {
            background: rgba(61, 90, 39, 0.05);
            border-radius: 9999px;
          }
          .offering-menu-scrollbar::-webkit-scrollbar-thumb {
            background: #C4873B;
            border-radius: 9999px;
          }
          .offering-menu-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #A06D2E;
          }
        }
      `}</style>

      {/* Decorative ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#85B267]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C4873B]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">{t('offeringsSection.label')}</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-white mt-3">
            {t('offeringsSection.title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Layout Container */}
        <div
          ref={contentRef}
          className={`flex flex-col lg:flex-row gap-8 items-stretch transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* LEFT: Offering Selectors Menu */}
          {/* Desktop Menu (vertical) & Mobile Menu (horizontal scroll) */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 offering-menu-scrollbar snap-x shrink-0">
            {offerings.map((offering, idx) => {
              const Icon = offering.icon;
              const isActive = activeIndex === idx;
              return (
                <button
                  key={offering.title}
                  onClick={() => {
                    setActiveIndex(idx);
                    setHoveredStep(null);
                  }}
                  className={`snap-center shrink-0 min-w-[200px] sm:min-w-[240px] lg:min-w-0 text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-4 relative outline-none ${
                    isActive
                      ? 'bg-[#3D5A27] border-accent/40 shadow-lg shadow-primary/10 lg:translate-x-2 text-white offering-tab-active'
                      : 'bg-white/5 border-white/10 text-white/75 hover:bg-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'bg-white/10 text-white scale-110' : 'bg-white/5 text-white/60'
                  }`}>
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  
                  <div>
                    <h3 className="font-heading text-lg font-bold leading-tight">
                      {offering.title}
                    </h3>
                    <p className={`text-[10px] uppercase tracking-wider font-body mt-0.5 ${
                      isActive ? 'text-white/60' : 'text-accent'
                    }`}>
                      {offering.duration}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Active Offering Detail Showcase */}
          {/* React key resets container to re-trigger slideUp animations on tab switch */}
          <div 
            key={activeOffering.title}
            className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-stretch min-h-[500px] showcase-fade-in text-white"
          >
            
            {/* Split 1: Large Media Area */}
            <div className="w-full md:w-1/2 flex flex-col justify-between relative overflow-hidden rounded-2xl border border-white/10 bg-dark">
              <div className="relative w-full h-full min-h-[240px] md:min-h-0 overflow-hidden">
                <img
                  src={activeOffering.image}
                  alt={activeOffering.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Floating Category Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-accent shadow-lg flex items-center justify-center text-white">
                  <ActiveIcon size={22} strokeWidth={2} />
                </div>
              </div>
            </div>

            {/* Split 2: Details and Treatment Flowchart */}
            <div className="flex-1 flex flex-col justify-between space-y-6">
              
              {/* Header block */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={14} className="text-accent" />
                  <span className="text-accent text-xs font-semibold tracking-wider uppercase font-body">
                    {t('offeringsSection.duration')}: {activeOffering.duration}
                  </span>
                </div>

                <h3 className="font-heading text-3xl font-bold text-white mb-3">
                  {activeOffering.title}
                </h3>

                <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                  {activeOffering.description}
                </p>
              </div>

              {/* Dynamic Treatment Flowchart */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-6 flex items-center gap-2">
                  <span>{t('offeringsSection.flowTitle')}</span>
                  <HelpCircle size={12} className="text-white/30" />
                </h4>

                <div className="relative">
                  {/* Flow Nodes flex container */}
                  <div className="flex flex-col gap-5 relative z-10">
                    {activeOffering.steps.map((step) => {
                      const isHovered = hoveredStep === step.number;
                      return (
                        <div
                          key={step.number}
                          onMouseEnter={() => setHoveredStep(step.number)}
                          onMouseLeave={() => setHoveredStep(null)}
                          className="flex items-center gap-4 cursor-pointer group/step"
                        >
                          {/* Step circular bubble */}
                          <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-heading font-bold text-sm shrink-0 transition-all duration-300 ${
                            isHovered 
                              ? 'border-accent bg-accent text-white scale-110 shadow-lg shadow-accent/20' 
                              : 'border-white/20 bg-white/5 text-white/70 group-hover/step:border-accent group-hover/step:bg-accent group-hover/step:text-white'
                          }`}>
                            {step.number}
                          </div>

                          {/* Step description */}
                          <div className="space-y-1 flex-1">
                            <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed group-hover/step:text-accent transition-colors duration-200">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom CTA block */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-xs text-white/40 italic">
                  {t('offeringsSection.supervised')}
                </span>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 group whitespace-nowrap"
                >
                  {t('offeringsSection.bookFlow')}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
