import PageHero from '../components/PageHero';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BookOpen, Users, Clock, Home, UtensilsCrossed, MapPin } from 'lucide-react';

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
      <PageHero
        title="Yoga Course in Kerala"
        subtitle="Intensive Hatha Yoga Training at Chamundi Hill Palace"
        backgroundImage="/img/yoga.jpg"
        breadcrumb="Yoga Course"
      />

      {/* Intro */}
      <section className="py-20 bg-background">
        <div ref={introRef} className={`max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-700 ${introVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
      <section className="py-20 bg-surface">
        <div ref={detailRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${detailVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-14">
            <span className="section-label">Course Details</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-3">4-Week Immersive Experience</h2>
            <p className="font-body text-base text-text/70 mt-4 max-w-2xl mx-auto">
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
                <div key={i} className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-dark mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-text/70 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="py-20 bg-background">
        <div ref={syllRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${syllVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-14">
            <span className="section-label">Curriculum</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-3">Yoga Course Syllabus</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {syllabusItems.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-heading text-sm font-bold text-primary">{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-dark">{s.title}</h3>
                </div>
                <p className="font-body text-sm text-text/70 leading-relaxed ml-11">{s.desc}</p>
              </div>
            ))}
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
              <div key={i} className="flex items-center gap-6 bg-white/5 rounded-xl px-6 py-4 border border-white/10">
                <span className="font-body text-sm font-semibold text-accent w-32 shrink-0">{s.time}</span>
                <span className="font-body text-sm text-white/80">{s.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-background">
        <div ref={locRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${locVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="section-label">Location</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark leading-tight">A Sanctuary for Yoga</h2>
              <p className="font-body text-base text-text/80 leading-relaxed">
                Chamundi Hill Palace is quietly and beautifully nestled atop the Nadukani Hills, offering breathtaking
                views in every direction. The entire campus is adorned with lush greenery, medicinal plants, and vibrant
                flora — ideal for hosting even a complete spice garden tour within the premises.
              </p>
              <p className="font-body text-base text-text/80 leading-relaxed">
                The natural peace and silence in this blessed setting will serve as a powerful inspiration throughout
                your yoga journey. There are many walking trails around, and day visits can be made to the backwater
                heartland of Alleppey or Kumarakom, or excursions to Kuttikanam or Periyar.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/img/banner-4.jpg" alt="Nadukani Hills surrounding Chamundi Hill Palace" className="w-full h-[400px] object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <VideoTestimonials />
      <CTABanner />
    </>
  );
}
