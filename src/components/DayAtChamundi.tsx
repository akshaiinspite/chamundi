import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Clock, Utensils, Home, Compass, Coffee, Check, ShieldCheck, HeartPulse, ChevronRight } from 'lucide-react';

interface TimelineItem {
  time: string;
  title: string;
  desc: string;
  icon: typeof Clock;
}

interface ActivityItem {
  title: string;
  desc: string;
}

const scheduleIcons = [Coffee, Utensils, HeartPulse, Utensils, ShieldCheck, HeartPulse, Coffee, Utensils, HeartPulse];

export default function DayAtChamundi() {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.15);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.15);
  const [activeTab, setActiveTab] = useState<'schedule' | 'nourishment' | 'rooms' | 'excursions'>('schedule');

  const dailySchedule: TimelineItem[] = (t('dayAtChamundi.schedule', { returnObjects: true }) as any[] || []).map((item, idx) => ({
    ...item,
    icon: scheduleIcons[idx % scheduleIcons.length]
  }));

  const inclusions: string[] = t('dayAtChamundi.inclusionsList', { returnObjects: true }) as string[] || [];
  const weeklyActivities: ActivityItem[] = t('dayAtChamundi.activitiesList', { returnObjects: true }) as ActivityItem[] || [];

  return (
    <section id="treatments" className="py-20 sm:py-28 bg-[#FAF7F2] text-dark relative overflow-hidden">
      
      {/* Soft natural ambient background glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">{t('dayAtChamundi.label')}</span>
          <h2 className="font-heading text-4xl sm:text-5xl mt-3 mb-6 text-primary font-semibold">
            {t('dayAtChamundi.title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="max-w-2xl mx-auto text-text leading-relaxed font-body">
            {t('dayAtChamundi.description')}
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 max-w-4xl mx-auto">
          {[
            { id: 'schedule', label: t('dayAtChamundi.tabs.schedule'), icon: Clock },
            { id: 'nourishment', label: t('dayAtChamundi.tabs.nourishment'), icon: Utensils },
            { id: 'rooms', label: t('dayAtChamundi.tabs.rooms'), icon: Home },
            { id: 'excursions', label: t('dayAtChamundi.tabs.excursions'), icon: Compass },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-body text-xs sm:text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105'
                    : 'bg-white border-border/40 text-text hover:bg-surface hover:text-dark hover:border-accent/40'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Display */}
        <div 
          ref={contentRef}
          className={`transition-all duration-500 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          
          {/* TAB 1: Daily Schedule Timeline */}
          {activeTab === 'schedule' && (
            <div className="max-w-4xl mx-auto bg-white rounded-[32px] p-6 sm:p-10 border border-border/40 shadow-xl shadow-stone-100">
              <div className="relative border-l-2 border-primary/25 pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-12">
                {dailySchedule.map((item, idx) => {
                  return (
                    <div key={idx} className="relative group">
                      
                      {/* Timeline dot */}
                      <div className="absolute -left-[35px] sm:-left-[51px] w-6 h-6 rounded-full border-4 border-white bg-accent shadow-md flex items-center justify-center top-1 transition-all duration-300 group-hover:scale-125">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                        <span className="font-body text-xs uppercase tracking-wider text-accent font-semibold shrink-0 sm:w-44 pt-1">
                          {item.time}
                        </span>
                        
                        <div className="flex-1">
                          <h4 className="font-heading text-lg sm:text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
                            {item.title}
                          </h4>
                          <p className="text-text/80 text-sm leading-relaxed mt-2 font-body">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: Organic Food & Nutrition */}
          {activeTab === 'nourishment' && (
            <div className="grid lg:grid-cols-12 gap-10 items-center bg-white rounded-[32px] p-6 sm:p-10 border border-border/40 shadow-xl">
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md h-80 lg:h-[450px]">
                <img src="/img/meals.jpg" alt="Organic Keralan vegetarian food" className="w-full h-full object-cover" />
              </div>
              
              <div className="lg:col-span-7 space-y-6">
                <span className="bg-accent/15 text-accent font-body text-xs font-semibold px-4 py-1.5 rounded-full">{t('dayAtChamundi.nourishmentTag')}</span>
                <h3 className="font-heading text-3xl font-bold text-primary">{t('dayAtChamundi.nourishmentTitle')}</h3>
                <p className="font-body text-text/80 leading-relaxed text-sm sm:text-base">
                  {t('dayAtChamundi.nourishmentDesc')}
                </p>
                <div className="space-y-4 pt-4 border-t border-border/30">
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-accent shrink-0 mt-1" />
                    <p className="text-sm font-body text-text/90">{t('dayAtChamundi.nourishmentBullet1')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-accent shrink-0 mt-1" />
                    <p className="text-sm font-body text-text/90">{t('dayAtChamundi.nourishmentBullet2')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-accent shrink-0 mt-1" />
                    <p className="text-sm font-body text-text/90">{t('dayAtChamundi.nourishmentBullet3')}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Accommodation */}
          {activeTab === 'rooms' && (
            <div className="grid lg:grid-cols-12 gap-10 items-center bg-white rounded-[32px] p-6 sm:p-10 border border-border/40 shadow-xl">
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md h-80 lg:h-[450px]">
                <img src="/img/roomwith balcony.jpeg" alt="Comfortable accommodation at Chamundi" className="w-full h-full object-cover" />
              </div>
              
              <div className="lg:col-span-7 space-y-6">
                <span className="bg-accent/15 text-accent font-body text-xs font-semibold px-4 py-1.5 rounded-full">{t('dayAtChamundi.roomsTag')}</span>
                <h3 className="font-heading text-3xl font-bold text-primary">{t('dayAtChamundi.roomsTitle')}</h3>
                <p className="font-body text-text/80 leading-relaxed text-sm sm:text-base">
                  {t('dayAtChamundi.roomsDesc1')}
                </p>
                <p className="font-body text-text/80 leading-relaxed text-sm sm:text-base">
                  {t('dayAtChamundi.roomsDesc2')}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-accent shrink-0" />
                    <span className="text-sm text-text font-body">{t('dayAtChamundi.roomsBullet1')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-accent shrink-0" />
                    <span className="text-sm text-text font-body">{t('dayAtChamundi.roomsBullet2')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-accent shrink-0" />
                    <span className="text-sm text-text font-body">{t('dayAtChamundi.roomsBullet3')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-accent shrink-0" />
                    <span className="text-sm text-text font-body">{t('dayAtChamundi.roomsBullet4')}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Weekly Activities & Inclusions */}
          {activeTab === 'excursions' && (
            <div className="space-y-12">
              {/* Excursions Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {weeklyActivities.map((act, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-border/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-accent font-semibold font-body">{t('dayAtChamundi.activity')}</span>
                      <h4 className="font-heading text-lg font-bold text-primary mt-2 mb-3">{act.title}</h4>
                      <p className="text-text/80 text-sm leading-relaxed font-body">{act.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 text-accent text-xs font-semibold mt-4">
                      <span>{t('dayAtChamundi.complimentary')}</span>
                      <ChevronRight size={14} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Inclusions List */}
              <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-border/40 shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-primary mb-8 text-center">{t('dayAtChamundi.includedTitle')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {inclusions.map((inc, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-surface/30 p-4 rounded-xl border border-border/10">
                      <Check size={18} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-text leading-relaxed font-body">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
