import { useState } from 'react';
import PageHero from '../components/PageHero';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Sparkles, Heart, Leaf, Flame, Clock3, Users, BadgeCheck, Soup, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroStats = [
  {
    icon: Clock3,
    value: '3000+',
    label: 'Years of Ayurveda',
  },
  {
    icon: Users,
    value: '15+',
    label: 'Repeat Guests',
  },
  {
    icon: BadgeCheck,
    value: '100%',
    label: 'Certified Doctors',
  },
  {
    icon: Leaf,
    value: '28',
    label: 'Day Panchakarma',
  },
];

const treatments = [
  {
    icon: Sparkles,
    duration: '7, 14, 21 or 28 Days',
    title: 'Rejuvenation Program',
    body: 'Experience authentic Ayurvedic rejuvenation in Kerala at Chamundi Hill Palace, where ancient healing meets serene natural beauty. Our programs are designed to restore energy, balance, and inner harmony through traditional Rasayana therapy. Each program begins with a doctor\'s consultation and includes detoxification, oil massages, herbal steam baths, Panchakarma, and Ayurvedic meals complemented by yoga and meditation. Treatments are personalized according to your body type (Prakriti) and health goals.',
    image: '/img/ayurvedapage/rejuvenation.jpg',
    number: '3000+',
    years: 'Years of',
    subtitle: 'Ayurvedic Science',
  },
  {
    icon: Heart,
    duration: '14 or 21 Days',
    title: 'Stress Relief Program',
    body: 'Find calm and clarity with the Stress Relief Program at Chamundi Hill Palace. Designed to ease tension, anxiety, and fatigue, this program blends time-tested Ayurvedic therapies with a holistic healing approach. Each treatment plan includes Abhyanga (herbal oil massage), Shirodhara (oil pouring therapy), herbal steam baths, and detoxification therapies — all tailored to restore balance to your body and mind. Guided yoga and meditation sessions, along with a nutritious Ayurvedic diet, support deep relaxation and better sleep.',
    image: '/img/ayurvedapage/stress-relief.jpg',
    number: '15+',
    years: 'Repeat Guests',
    subtitle: ' Every Year',
  },
  {
    icon: Leaf,
    duration: '28 Days',
    title: 'Panchakarma Treatment',
    body: 'Experience authentic Panchakarma treatment in Kerala at Chamundi Hill Palace, a renowned Ayurvedic wellness retreat dedicated to deep detoxification and rejuvenation. This 28-day program follows classical Ayurvedic purification therapies that cleanse the body, balance the Doshas, and restore lasting vitality. Your treatment plan may include Vamana (emesis), Virechana (purgation), Nasya (nasal therapy), Basti (medicated enemas), and Raktamokshana (blood purification).',
    image: '/img/ayurvedapage/314962107_566571368608410_5904308292292831319_n.jpg',
    link: '/panchakarma',
    number: '28',
    years: 'Days Full',
    subtitle: 'Panchakarma Program',
  },
  {
    icon: Flame,
    duration: '28 Days',
    title: 'Weight Loss Program',
    body: 'Discover natural weight management through Ayurveda with the 28-Day Weight Loss Program. This holistic program combines Ayurvedic therapies, balanced nutrition, and mindful practices to promote sustainable fat reduction and overall vitality. Your personalized plan may include Udvartana (herbal powder massage) and Abhyanga (oil massage) to improve circulation and break down excess fat, along with herbal steam baths for detoxification and metabolism enhancement.',
    image: '/img/ayurvedapage/weight-loss.jpg',
    number: '100%',
    years: 'Certified',
    subtitle: 'Ayurvedic Doctors',
  },
];

function TreatmentCard({
  treatment,
  index,
}: {
  treatment: typeof treatments[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const Icon = treatment.icon;

  return (
    <div
      ref={ref}
      className={`group bg-white/5 backdrop-blur-sm rounded-[32px] border border-white/10 overflow-hidden shadow-md hover:shadow-2xl hover:border-accent/40 transition-all duration-500 flex flex-col hover:-translate-y-2 text-white ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Image Header area */}
      <div className="relative h-64 sm:h-80 overflow-hidden shrink-0">
        <img
          src={treatment.image}
          alt={treatment.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

        {/* Floating Duration Badge */}
        <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md">
          {treatment.duration}
        </div>

        {/* Floating Ayurveda Stats Badge */}
        <div 
          className={`absolute right-4 bottom-4 z-20 transition-all duration-500 ${
            index % 2 === 0 ? 'animate-float-slow' : 'animate-float-delayed'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 border border-[#E9E0CF] shadow-lg">
            <div className="font-heading text-lg leading-none text-accent font-bold">
              {treatment.number}
            </div>
            <p className="mt-0.5 text-[8px] uppercase tracking-wider text-primary/60 font-semibold">
              {treatment.years}
            </p>
            <p className="font-heading text-[10px] text-primary leading-tight font-semibold">
              {treatment.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Body Content area */}
      <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between space-y-6">
        <div>
          {/* Icon header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center animate-pulse" style={{ animationDuration: '3s' }}>
              <Icon size={18} className="text-accent" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
              {treatment.title}
            </h3>
          </div>

          {/* Description */}
          <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
            {treatment.body}
          </p>
        </div>

        {/* Action link */}
        <div className="pt-2">
          {treatment.link ? (
            <Link
              to={treatment.link}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/95 text-white font-body text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 group/btn"
            >
              Read More
              <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          ) : (
            <span className="inline-flex items-center text-xs text-white/40 italic">
              *Consultation included
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function PackageInclusions() {
  return (
    <div className="my-16 lg:my-24 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-2xl text-white">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start relative z-10">
        
        {/* Left and Center: Details of Inclusions */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <span className="text-accent uppercase tracking-widest text-xs font-semibold font-body">All-Inclusive Packages</span>
            <h3 className="font-heading text-3xl sm:text-4xl text-white mt-2 mb-4 font-bold">
              What is Included in Your Package
            </h3>
            <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
              On arrival a free consultation for Kerala ayurvedic treatments will be arranged with our resident ayurveda doctor, who will patiently listen to you. Based on the consultation the best treatment will be discussed. The duration of the treatment will be 7 to 28 days.
            </p>
          </div>

          {/* Key Inclusions Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:border-accent/30 transition-all duration-300">
              <h4 className="font-heading text-lg font-bold text-accent mb-2">Various Treatments</h4>
              <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed">
                As discussed during consultation you will be given the opportunity to choose different ayurveda treatment programs that suits you. You will experience various ayurveda treatments that is suitable for you. Accommodation will be arranged to suit you treatment program.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:border-accent/30 transition-all duration-300">
              <h4 className="font-heading text-lg font-bold text-accent mb-2">Food</h4>
              <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed">
                3 meals including morning and evening tea / coffee and the best organic food grown in the surrounding area.
              </p>
            </div>
          </div>

          {/* Included Icons Row (Just like in the screenshot) */}
          <div className="pt-6 border-t border-white/10">
            <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest block mb-6">Package Highlights</span>
            
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 text-center">
              {[
                { icon: Sparkles, label: 'Daily Treatments' },
                { icon: Heart, label: 'Yoga & Meditation' },
                { icon: Soup, label: 'Ayurvedic Diet' },
                { icon: Users, label: 'Medical Exams' },
                { icon: Leaf, label: 'Doctor Consulting' },
                { icon: Clock3, label: '7-28 Days Stay' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center gap-2 group/icon">
                    <div className="w-12 h-12 rounded-full border-2 border-[#C4873B]/40 bg-[#1A150E] flex items-center justify-center text-accent transition-all duration-300 group-hover/icon:border-accent group-hover/icon:bg-accent group-hover/icon:text-white group-hover/icon:scale-110 shadow-md">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white/60 leading-tight block max-w-[80px] mx-auto">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Programs Seal / Display Box */}
        <div className="bg-[#1C2618]/60 border border-[#85B267]/20 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#85B267]/10 rounded-full blur-2xl" />
          
          <div className="space-y-4">
            <span className="bg-[#85B267]/20 text-[#85B267] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full inline-block">
              Treatments List
            </span>
            <h4 className="font-heading text-xl font-bold text-white">
              Kerala Ayurvedic Treatment Programs
            </h4>
            <div className="w-12 h-0.5 bg-[#85B267]"></div>
          </div>

          <ul className="space-y-4 text-sm text-white/90 font-body">
            <li className="flex items-start gap-3">
              <span className="text-accent text-base mt-0.5">✓</span>
              <span>7, 14, 28, days Rejuvanation Program.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-base mt-0.5">✓</span>
              <span>14 to 21 days stress Relief Program</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-base mt-0.5">✓</span>
              <span>28 Days Panchakarma Treatment Program</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-base mt-0.5">✓</span>
              <span>28 Days Weight Loss Program</span>
            </li>
          </ul>

          <div className="pt-4 border-t border-white/10">
            <p className="text-xs text-white/50 italic leading-relaxed">
              These are some of the Ayurvedic treatment programs that are being practiced at Chamundi Hill Palace
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function AyurvedaPage() {
  const { ref: introRef, isVisible: introVisible } = useScrollReveal(0.1);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      {/* Dynamic leaf floating keyframe styles */}
      <style>{`
        @keyframes floatLeaf {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(4deg); }
        }
        @keyframes floatLeafOpposite {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-4deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-float-slow {
          animation: floatLeaf 7s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatLeafOpposite 6s ease-in-out infinite 1.2s;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <PageHero
        title="Ayurvedic Treatments in Kerala"
        subtitle="Ancient Wisdom · Modern Healing"
        backgroundImage="/img/kerala-ayurveda-2.jpg"
        backgroundVideo="/img/videos/ayurveda.mp4"
        breadcrumb="Ayurveda"
      />

      {/* Intro Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute inset-0 opacity-20 pointer-events-none select-none z-0">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-accent/60 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        </div>
        
        {/* Background leaves */}
        <div className="absolute top-8 right-8 text-white/5 pointer-events-none select-none animate-float-slow z-0">
          <Leaf size={100} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-8 left-8 text-white/5 pointer-events-none select-none animate-float-delayed z-0">
          <Leaf size={80} strokeWidth={0.5} />
        </div>

        <div
          ref={introRef}
          className={`max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-700 relative z-10 ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-body text-base sm:text-lg text-white leading-relaxed">
            Welcome to Chamundi Hill Palace, where ancient Ayurvedic wisdom meets serene Kerala landscapes.
            Recognized as one of the best Ayurvedic retreats in Kerala, we offer a complete range of authentic
            Ayurvedic treatments designed to purify, rejuvenate, and restore the body's natural harmony.
            Every therapy begins with an individual Ayurvedic consultation led by our resident doctor, who
            carefully studies your body constitution (Dosha), health history, and lifestyle. Based on this,
            a personalized treatment plan is crafted — ensuring every guest receives care suited to their unique needs.
          </p>

          {/* Watch Guest Testimonials Button */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="mt-8 px-8 py-3.5 bg-accent hover:bg-accent/95 text-dark font-semibold rounded-full shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto cursor-pointer group relative z-20"
          >
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
              <Play className="fill-current w-4 h-4" />
            </div>
            <span>Watch Guest Testimonials</span>
          </button>
          
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 pt-20">
              {heroStats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl px-4 py-4 md:px-6 md:py-5 text-white shadow-xl hover:bg-white/15 hover:-translate-y-1.5 transition-all duration-300 group/stat hover:shadow-accent/5 hover:border-accent/30"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-accent shrink-0 group-hover/stat:scale-110 group-hover/stat:rotate-12 transition-all duration-300" />

                      <div className="text-left">
                        <div className="font-heading text-xl md:text-3xl leading-none">
                          {stat.value}
                        </div>

                        <div className="text-xs md:text-sm text-white/80 leading-snug">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Cards Grid */}
      <section className="bg-dark py-20 lg:py-28 relative overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute top-1/4 left-10 text-primary/5 pointer-events-none select-none hidden lg:block animate-float-slow z-0">
          <Leaf size={160} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-1/4 right-10 text-accent/5 pointer-events-none select-none hidden lg:block animate-float-delayed z-0">
          <Leaf size={140} strokeWidth={0.5} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="section-label">Programs</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-3">
              Our Signature Ayurvedic Treatments
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-5 rounded-full"></div>
          </div>

          {/* First Row of Treatments (Rejuvenation & Stress Relief) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {treatments.slice(0, 2).map((treatment, i) => (
              <TreatmentCard key={treatment.title} treatment={treatment} index={i} />
            ))}
          </div>

          {/* New Custom Inclusions Section */}
          <PackageInclusions />

          {/* Second Row of Treatments (Panchakarma & Weight Loss) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
            {treatments.slice(2, 4).map((treatment, i) => (
              <TreatmentCard key={treatment.title} treatment={treatment} index={i + 2} />
            ))}
          </div>
        </div>
      </section>

      <VideoTestimonials />
      <CTABanner />

      {/* Video Modal Overlay */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="bg-dark max-w-4xl w-full rounded-[32px] overflow-hidden shadow-2xl border border-white/10 relative flex flex-col max-h-[90vh] animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-white/10 flex justify-between items-center shrink-0">
              <h3 className="font-heading text-xl font-bold text-white font-semibold">Guest Video Testimonials</h3>
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-200 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Player */}
            <div className="aspect-video w-full bg-black relative flex items-center justify-center">
              <video
                src="/img/videos/videotestimonials.mp4"
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
