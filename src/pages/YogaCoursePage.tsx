import PageHero from '../components/PageHero';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BookOpen, Users, Clock, Home, UtensilsCrossed, MapPin, Leaf, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function YogaCoursePage() {
  const { t } = useTranslation();
  const { ref: introRef, isVisible: introVis } = useScrollReveal(0.1);
  const { ref: detailRef, isVisible: detailVis } = useScrollReveal(0.1);
  const { ref: syllRef, isVisible: syllVis } = useScrollReveal(0.1);
  const { ref: schedRef, isVisible: schedVis } = useScrollReveal(0.1);
  const { ref: locRef, isVisible: locVis } = useScrollReveal(0.1);

  const schedule = [
    { time: '06:00 – 06:30', activity: t('yogaCoursePage.schedule.pranayama') },
    { time: '06:30 – 08:00', activity: t('yogaCoursePage.schedule.asanas') },
    { time: '08:00', activity: t('yogaCoursePage.schedule.breakfast') },
    { time: '10:00 – 12:00', activity: t('yogaCoursePage.schedule.theory') },
    { time: '12:30', activity: t('yogaCoursePage.schedule.lunch') },
    { time: '15:30 – 17:30', activity: t('yogaCoursePage.schedule.asanas2') },
    { time: '18:30 – 19:00', activity: t('yogaCoursePage.schedule.meditation') },
    { time: '19:00 – 19:30', activity: t('yogaCoursePage.schedule.chanting') },
    { time: '19:30', activity: t('yogaCoursePage.schedule.dinner') },
  ];

  const syllabusItems = [
    { title: t('yogaCoursePage.syllabus.philosophy.title'), desc: t('yogaCoursePage.syllabus.philosophy.desc') },
    { title: t('yogaCoursePage.syllabus.anatomy.title'), desc: t('yogaCoursePage.syllabus.anatomy.desc') },
    { title: t('yogaCoursePage.syllabus.therapy.title'), desc: t('yogaCoursePage.syllabus.therapy.desc') },
    { title: t('yogaCoursePage.syllabus.asanas.title'), desc: t('yogaCoursePage.syllabus.asanas.desc') },
    { title: t('yogaCoursePage.syllabus.pranayama.title'), desc: t('yogaCoursePage.syllabus.pranayama.desc') },
    { title: t('yogaCoursePage.syllabus.meditation.title'), desc: t('yogaCoursePage.syllabus.meditation.desc') },
  ];

  const pranayamaList = [
    t('yogaCoursePage.pranayamaList.0'),
    t('yogaCoursePage.pranayamaList.1'),
    t('yogaCoursePage.pranayamaList.2'),
    t('yogaCoursePage.pranayamaList.3'),
    t('yogaCoursePage.pranayamaList.4'),
    t('yogaCoursePage.pranayamaList.5'),
    t('yogaCoursePage.pranayamaList.6'),
    t('yogaCoursePage.pranayamaList.7'),
    t('yogaCoursePage.pranayamaList.8'),
  ];

  const meditationList = [
    t('yogaCoursePage.meditationList.0'),
    t('yogaCoursePage.meditationList.1'),
    t('yogaCoursePage.meditationList.2'),
    t('yogaCoursePage.meditationList.3'),
    t('yogaCoursePage.meditationList.4'),
    t('yogaCoursePage.meditationList.5'),
  ];

  const detailItems = [
    { icon: BookOpen, title: t('yogaCoursePage.items.classesTitle'), desc: t('yogaCoursePage.items.classesDesc') },
    { icon: Users, title: t('yogaCoursePage.items.smallGroupsTitle'), desc: t('yogaCoursePage.items.smallGroupsDesc') },
    { icon: Clock, title: t('yogaCoursePage.items.holisticTitle'), desc: t('yogaCoursePage.items.holisticDesc') },
    { icon: Home, title: t('yogaCoursePage.items.accommodationTitle'), desc: t('yogaCoursePage.items.accommodationDesc') },
    { icon: UtensilsCrossed, title: t('yogaCoursePage.items.mealsTitle'), desc: t('yogaCoursePage.items.mealsDesc') },
    { icon: MapPin, title: t('yogaCoursePage.items.workshopsTitle'), desc: t('yogaCoursePage.items.workshopsDesc') },
  ];

  return (
    <>
      {/* Floating animation keyframes */}
      <style>{`
        @keyframes gentleFloat1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(6deg); }
        }
        @keyframes gentleFloat2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
        }
        @keyframes gentlePulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        .animate-gentle-float-1 {
          animation: gentleFloat1 8s ease-in-out infinite;
        }
        .animate-gentle-float-2 {
          animation: gentleFloat2 7s ease-in-out infinite 1.5s;
        }
        .animate-gentle-pulse {
          animation: gentlePulse 6s ease-in-out infinite;
        }
      `}</style>

      <PageHero
        title={t('yogaCoursePage.title')}
        subtitle={t('yogaCoursePage.subtitle')}
        backgroundImage="/img/yoga.jpg"
        backgroundVideo="/img/videos/yoganew.mp4"
        breadcrumb={t('yogaCoursePage.breadcrumb')}
      />

      {/* Intro */}
      <section className="py-20 bg-surface relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute top-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-gentle-pulse" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-gentle-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating Icons */}
        <div className="absolute top-12 right-12 text-primary/5 pointer-events-none select-none animate-gentle-float-1 z-0">
          <Leaf size={70} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-12 left-12 text-accent/5 pointer-events-none select-none animate-gentle-float-2 z-0">
          <Leaf size={50} strokeWidth={0.5} />
        </div>

        <div ref={introRef} className={`max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-700 relative z-10 ${introVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-base sm:text-lg text-text/80 leading-relaxed mb-6">
            {t('yogaCoursePage.intro1')}
          </p>
          <p className="font-body text-base sm:text-lg text-text/80 leading-relaxed">
            {t('yogaCoursePage.intro2')}
          </p>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-gentle-pulse" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-gentle-pulse" style={{ animationDelay: '3s' }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-8 right-12 text-white/5 pointer-events-none select-none animate-gentle-float-2 z-0">
          <Sparkles size={80} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-8 left-12 text-white/5 pointer-events-none select-none animate-gentle-float-1 z-0">
          <Leaf size={90} strokeWidth={0.5} />
        </div>

        <div ref={detailRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-14 transition-all duration-700 ${detailVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-label">{t('yogaCoursePage.detailsLabel')}</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mt-3">{t('yogaCoursePage.detailsTitle')}</h2>
            <p className="font-body text-base text-white mt-4 max-w-2xl mx-auto">
              {t('yogaCoursePage.detailsDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i} 
                  className={`group bg-white rounded-xl p-8 border border-border hover:shadow-2xl hover:border-accent/40 transition-all duration-500 transform hover:-translate-y-2 ${
                    detailVis 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 400}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon size={22} className="text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="font-body text-sm text-text/70 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="py-20 bg-background">
        <div ref={syllRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${syllVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-label">{t('yogaCoursePage.curriculumLabel')}</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-3">{t('yogaCoursePage.curriculumTitle')}</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-20">
            {/* Left Image */}
            <div className={`h-full transition-all duration-700 ${syllVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <img src="/img/yoga.jpg" alt="Yoga Course" className="w-full h-full min-h-[450px] lg:min-h-[900px] object-cover rounded-3xl" loading="lazy" />
            </div>
            {/* Right Syllabus */}
            <div className="space-y-5">
              {syllabusItems.map((s, i) => (
                <div 
                  key={i} 
                  className={`group bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-xl hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-500 transform ${
                    syllVis 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 400}ms` }}
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold shrink-0 group-hover:bg-accent transition-colors duration-300">{i + 1}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                      <p className="text-text/70 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pranayama & Meditation Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface rounded-xl p-8">
              <h3 className="font-heading text-xl font-bold text-dark mb-5">{t('yogaCoursePage.pranayamaTitle')}</h3>
              <ul className="space-y-2">
                {pranayamaList.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-sm text-text/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface rounded-xl p-8">
              <h3 className="font-heading text-xl font-bold text-dark mb-5">{t('yogaCoursePage.meditationTitle')}</h3>
              <ul className="space-y-2">
                {meditationList.map((m, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-sm text-text/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" /> {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-dark">
        <div ref={schedRef} className={`max-w-3xl mx-auto px-4 sm:px-6 transition-all duration-700 ${schedVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <span className="text-accent font-body text-xs font-semibold tracking-[0.15em] uppercase">{t('yogaCoursePage.dailyRoutineLabel')}</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mt-3">{t('yogaCoursePage.dailyScheduleTitle')}</h2>
          </div>
          <div className="space-y-3">
            {schedule.map((s, i) => (
              <div 
                key={i} 
                className="flex items-center gap-6 bg-white/5 rounded-xl px-6 py-4 border border-white/10 hover:bg-white/10 hover:border-accent/40 hover:translate-x-2 transition-all duration-300 group/item"
              >
                <span className="font-body text-sm font-semibold text-accent w-32 shrink-0 group-hover/item:scale-105 transition-transform duration-300">{s.time}</span>
                <span className="font-body text-sm text-white/80 group-hover/item:text-white transition-colors duration-300">{s.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 lg:py-24 bg-primary lg:bg-transparent w-full relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background Video (Only on Desktop >= lg) */}
        <div className="hidden lg:block absolute inset-0 w-full h-full z-0">
          <video
            src="/img/videos/calmness.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/img/banner-4.jpg"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div 
          ref={locRef} 
          className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full transition-all duration-1000 ease-out ${
            locVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Responsive Grid: Stacks on mobile/tablet, single card on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:block">
            
            {/* Left-aligned Glassmorphism Content Card */}
            <div className="bg-white/5 backdrop-blur-md rounded-[32px] p-6 sm:p-10 lg:p-12 border border-white/10 text-white space-y-5 shadow-2xl lg:max-w-xl lg:bg-black/40">
              <span className="section-label text-accent font-semibold tracking-wider block">{t('yogaCoursePage.locationLabel')}</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                {t('yogaCoursePage.locationTitle')}
              </h2>
              <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed">
                {t('yogaCoursePage.locationP1')}
              </p>
              <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                {t('yogaCoursePage.locationP2')}
              </p>
            </div>

            {/* Video Box (Only on mobile/tablet < lg to make the video fully visible) */}
            <div className="block lg:hidden rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
              <video
                src="/img/videos/calmness.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[300px] sm:h-[450px] object-cover"
                poster="/img/banner-4.jpg"
              />
            </div>

          </div>
        </div>
      </section>

      <VideoTestimonials />
      <CTABanner />
    </>
  );
}
