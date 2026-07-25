import PageHero from '../components/PageHero';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BookOpen, Users, Clock, Home, UtensilsCrossed, MapPin, Leaf, Sparkles } from 'lucide-react';

const schedule = [
  { time: '06:00 – 06:30', activity: 'Pranayama' },
  { time: '06:30 – 08:00', activity: 'Asanas' },
  { time: '08:00', activity: 'Breakfast' },
  { time: '10:00 – 12:00', activity: 'Theory' },
  { time: '12:30', activity: 'Lunch' },
  { time: '15:30 – 17:30', activity: 'Asanas' },
  { time: '18:30 – 19:00', activity: 'Meditation' },
  { time: '19:00 – 19:30', activity: 'Chanting' },
  { time: '19:30', activity: 'Dinner' },
];

const syllabusItems = [
  { title: 'Yoga Philosophy', desc: 'Introduction to Yoga Darshana of Patanjali — Chitta, Chitta Bhumis, Chitta Vrittis, Niropdhopaya, Samadhi, Sadhana, Vibhuti and Kaivalya pada.' },
  { title: 'Yogic Anatomy & Physiology', desc: 'Understanding Chakras, Koshas, Pranas, Nadis, and the Vayus — how these elements work together to influence health and well-being.' },
  { title: 'Yoga Therapy', desc: 'Learn how Yoga addresses common ailments, both physical and mental, promoting psychological healing through natural, holistic approaches.' },
  { title: 'Asanas', desc: 'Seated, Backward bending, Forward bending, Twisting, Inverted, Balancing — minimum 40 asanas plus Surya Namaskar variations including Kalari Namaskaram.' },
  { title: 'Pranayama', desc: 'Basic breathing, Kapalbhati, Nadi Shodhana, Bhastrika, Bhramari, Ujjai, Shitali, Shithkaari, and Nada pranayama — 30 minutes daily.' },
  { title: 'Meditation', desc: 'Mantra, Breath watching, Visualization, Body scan, Walking, and Chakra awareness meditation — 30 minutes daily.' },
];

const pranayamaList = ['Basic breathing practice', 'Kapalbhati', 'Nadi Shodhana', 'Bhastrika', 'Bhramari', 'Ujjai', 'Shitali', 'Shithkaari', 'Nada Pranayama'];
const meditationList = ['Mantra meditation', 'Breath watching', 'Visualization', 'Body scan', 'Walking meditation', 'Chakra awareness'];

export default function YogaCoursePage() {
  const { ref: introRef, isVisible: introVis } = useScrollReveal(0.1);
  const { ref: detailRef, isVisible: detailVis } = useScrollReveal(0.1);
  const { ref: syllRef, isVisible: syllVis } = useScrollReveal(0.1);
  const { ref: schedRef, isVisible: schedVis } = useScrollReveal(0.1);
  const { ref: locRef, isVisible: locVis } = useScrollReveal(0.1);

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
        title="Yoga Course in Kerala"
        subtitle="Intensive Hatha Yoga Training at Chamundi Hill Palace"
        backgroundImage="/img/yoga.jpg"
        backgroundVideo="/img/videos/yoganew.mp4"
        breadcrumb="Yoga Course"
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
            Join us for an Intense Hatha Yoga Training Course in Kerala at Chamundi Hill Palace, where the true essence
            of Yoga is realized. This immersive course offers practical and theoretical knowledge, suitable for beginners
            and experienced practitioners. Learn core principles of Hatha Yoga, including asanas, pranayama, and mindfulness.
          </p>
          <p className="font-body text-base sm:text-lg text-text/80 leading-relaxed">
            This Hatha Yoga course is the perfect starting point for advancing your practice and becoming a certified instructor.
            Upon completion, you'll be eligible for our Yoga Teacher Training Course (TTC) to further develop your skills.
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
            <span className="section-label">Course Details</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mt-3">4-Week Immersive Experience</h2>
            <p className="font-body text-base text-white mt-4 max-w-2xl mx-auto">
              6 hours of lessons daily (Mon–Fri) and 2 hours on Saturdays. Sundays are free for rest and integration.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: 'Yoga Classes', desc: 'Traditional Hatha Yoga training with expert instructors in our dedicated yoga hall.' },
              { icon: Users, title: 'Small Groups', desc: 'Personalized attention with a maximum of 10 participants, ensuring high-quality training.' },
              { icon: Clock, title: 'Holistic Learning', desc: 'Combine yoga practice with Ayurveda workshops, meditation sessions, and spiritual teachings.' },
              { icon: Home, title: 'Accommodation', desc: 'Twin-sharing basis in ensuite double bed rooms in our new Villa, 250m from the yoga hall.' },
              { icon: UtensilsCrossed, title: 'Meals Included', desc: '3 meals including morning and evening tea/coffee. Ayurvedic Herbal water available all day.' },
              { icon: MapPin, title: 'Workshops', desc: 'Additional workshops on Ayurveda awareness (4h), Carnatic Vocal Music breathing (4h), and Ayurvedic Cooking (4h).' },
            ].map((item, i) => {
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
            <span className="section-label">Curriculum</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-3">Yoga Course Syllabus</h2>
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
              <h3 className="font-heading text-xl font-bold text-dark mb-5">Pranayama Practice</h3>
              <ul className="space-y-2">
                {pranayamaList.map((p, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-sm text-text/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface rounded-xl p-8">
              <h3 className="font-heading text-xl font-bold text-dark mb-5">Meditation Practice</h3>
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
            <span className="text-accent font-body text-xs font-semibold tracking-[0.15em] uppercase">Daily Routine</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mt-3">Daily Schedule</h2>
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
              <span className="section-label text-accent font-semibold tracking-wider block">Location</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                A Sanctuary for Yoga
              </h2>
              <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed">
                Chamundi Hill Palace is quietly and beautifully nestled atop the Nadukani Hills, offering breathtaking
                views in every direction. The entire campus is adorned with lush greenery, medicinal plants, and vibrant
                flora — ideal for hosting even a complete spice garden tour within the premises.
              </p>
              <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                The natural peace and silence in this blessed setting will serve as a powerful inspiration throughout
                your yoga journey. There are many walking trails around, and day visits can be made to the backwater
                heartland of Alleppey or Kumarakom, or excursions to Kuttikanam or Periyar.
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
