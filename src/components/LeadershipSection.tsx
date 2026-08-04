import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Award, ShieldCheck, HeartPulse, Star } from 'lucide-react';

export default function LeadershipSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal(0.15);

  const leaders = [
    {
      id: 'saroja',
      name: t('leadership.members.saroja.name'),
      role: t('leadership.members.saroja.role'),
      badge: t('leadership.members.saroja.badge'),
      desc: t('leadership.members.saroja.desc'),
      image: '/img/saroja-thampi.jpeg',
      icon: Star,
      highlight: 'Founder',
      imageClass: 'w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105'
    },
    {
      id: 'sheela',
      name: t('leadership.members.sheela.name'),
      role: t('leadership.members.sheela.role'),
      badge: t('leadership.members.sheela.badge'),
      desc: t('leadership.members.sheela.desc'),
      image: '/img/dr-sheela.png',
      icon: HeartPulse,
      highlight: '23 Years at Chamundi',
      imageClass: 'w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105'
    },
    {
      id: 'jibu',
      name: t('leadership.members.jibu.name'),
      role: t('leadership.members.jibu.role'),
      badge: t('leadership.members.jibu.badge'),
      desc: t('leadership.members.jibu.desc'),
      image: '/img/jibu c joseph.png',
      icon: ShieldCheck,
      highlight: '25 Years Leadership',
      imageClass: 'w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105'
    }
  ];

  return (
    <section id="leadership" className="py-16 sm:py-20 lg:py-28 bg-[#FAF7F2] text-dark relative overflow-hidden border-t border-border/40">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-accent/20 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-primary/20 rounded-full blur-[100px] sm:blur-[140px]" />
      </div>

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="section-label text-accent font-semibold tracking-widest uppercase text-xs">
            {t('leadership.label')}
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-semibold text-primary mt-2 sm:mt-3 mb-4 sm:mb-6">
            {t('leadership.title')}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="font-body text-sm sm:text-base text-text/80 leading-relaxed max-w-2xl mx-auto">
            {t('leadership.subtitle')}
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {leaders.map((leader) => {
            const Icon = leader.icon;
            return (
              <div
                key={leader.id}
                className="bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 lg:p-8 border border-border/50 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Professional Aspect Framing */}
                  <div className="relative aspect-[4/5] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#F5F0E8] border border-border/40 shadow-inner mb-5 sm:mb-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className={leader.imageClass}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    
                    {/* Badge Overlay */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-10">
                      <span className="bg-white/95 backdrop-blur-md text-primary font-body text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-md border border-border/40 flex items-center gap-1.5">
                        <Icon size={13} className="text-accent shrink-0" />
                        <span className="truncate max-w-[170px] sm:max-w-none">{leader.highlight}</span>
                      </span>
                      <Award size={18} className="text-accent drop-shadow-md shrink-0 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Leader Info */}
                  <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-[11px] font-body uppercase tracking-wider text-accent font-bold">
                      {leader.role}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {leader.name}
                    </h3>
                  </div>

                  {/* Experience Tag */}
                  <div className="mb-3 sm:mb-4">
                    <span className="inline-block bg-surface/80 border border-accent/20 text-accent font-body text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-lg">
                      {leader.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-body text-xs sm:text-sm text-text/80 leading-relaxed">
                    {leader.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
