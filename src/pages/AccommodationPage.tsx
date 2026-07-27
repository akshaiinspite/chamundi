import PageHero from '../components/PageHero';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import RoomsSection from '../components/RoomsSection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Bed, UtensilsCrossed, Wifi, TreePine, MapPin, Sprout, Clock3, Star, BadgeCheck, Users, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const facilityGallery = [
  '/img/videos/chamundiroomsnew.mp4',
  '/img/videos/ayurveda2.mp4',
  '/img/videos/organicfarm.mp4',
  '/img/videos/meals.mp4',
  '/img/videos/yoganew.mp4',
  '/img/videos/calmness.mp4',
];

const heroStats = [
  {
    icon: Clock3,
    value: '25+',
    label: 'Years',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Rated',
  },
  {
    icon: BadgeCheck,
    value: '100%',
    label: 'Certified Doctors',
  },
  {
    icon: Users,
    value: '15+',
    label: 'Repeat Guests',
  },
];

const facilities = [
  { icon: Bed, title: 'Spacious Rooms', desc: 'All rooms are spacious and comfortable, with private bathrooms. Some rooms are within the main building and some are even more quietly located with beautiful views.' },
  { icon: UtensilsCrossed, title: 'Ayurvedic Cuisine', desc: 'Sumptuous Keralan vegetarian food served for all three meals, in addition to morning and evening tea/coffee. Ayurvedic Herbal water available throughout the day.' },
  { icon: Wifi, title: 'Modern Amenities', desc: 'Free Wi-Fi 24 hours. Assistance is assured by our loving staff all along your stay. Free Cooking Demonstration done once every 15 days.' },
  { icon: TreePine, title: 'Nature Experiences', desc: 'Rubber Plantation Visit, 100+ years old Hindu temple visit, and spice tours within the centre premises.' },
  { icon: MapPin, title: 'Excursions', desc: 'Thekkady visit including Tea Plantation & factory, Elephant Ride, Boat ride, Spice garden visit. Kumarakom backwater half-day trip.' },
  { icon: Sprout, title: 'Organic Farm', desc: 'Spices, vegetables, fruits sourced from our own organic farm. Five cows on-site producing fresh milk, ghee, curd, and paneer. Farm-to-table approach enhances purity.' },
];

export default function AccommodationPage() {
  const { ref: gridRef, isVisible: gridVis } = useScrollReveal(0.1);
  const { ref: yogaRef, isVisible: yogaVis } = useScrollReveal(0.1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('/img/videos/Accommadation.mp4');

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % facilityGallery.length);
};

const prevSlide = () => {
  setCurrentSlide(
    (prev) => (prev - 1 + facilityGallery.length) % facilityGallery.length
  );
};
  useEffect(() => {
    const isVideo = facilityGallery[currentSlide].endsWith('.mp4');
    if (isVideo) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // changes every 4 seconds if it is a static image

    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVideoModalOpen]);

  return (
    <>
      {/* Styles Block */}
      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 0.4; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        .animate-pulse-ring {
          animation: pulseRing 2.2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
      `}</style>
      <PageHero
        title="Accommodation & Facilities"
        subtitle="Heritage Rooms Designed for Peace, Comfort & Recovery"
        backgroundImage="/img/accomodation-facilities.jpg"
        breadcrumb="Accommodation"
      />
      <section className="bg-primary py-12 md:py-20 px-4 sm:px-6 lg:px-20">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
      {heroStats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={index}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl md:rounded-3xl px-3 py-3 md:px-5 md:py-5 text-white shadow-xl hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-2 md:gap-3">
              <Icon className="w-4 h-4 md:w-6 md:h-6 text-accent shrink-0" />

              <div>
                <div className="font-heading text-lg md:text-3xl leading-none">
                  {stat.value}
                </div>

                <div className="text-[10px] md:text-sm uppercase tracking-wide text-white/80">
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>



      {/* Room Showcase */}
      <RoomsSection />

      {/* Facilities Grid */}
      <section className="py-20 bg-dark">
        <div ref={gridRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${gridVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-14">
            <span className="section-label">Facilities</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mt-3">Everything You Need</h2>
          </div>
          {/* carousel */}
          <div className="relative mb-16">
  <div className="overflow-hidden rounded-[32px] shadow-[0_25px_70px_rgba(0,0,0,0.15)] h-[250px] sm:h-[350px] lg:h-[500px] relative bg-black/10">
    {facilityGallery[currentSlide].endsWith('.mp4') ? (
      <video
        key={facilityGallery[currentSlide]}
        src={facilityGallery[currentSlide]}
        autoPlay
        muted
        playsInline
        onEnded={nextSlide}
        className="w-full h-full object-cover transition-all duration-500"
      />
    ) : (
      <img
        src={facilityGallery[currentSlide]}
        alt="Accommodation Gallery"
        className="w-full h-full object-cover transition-all duration-500"
      />
    )}
  </div>

  {/* Left Arrow */}
  <button
    onClick={prevSlide}
    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center hover:bg-white transition"
  >
    <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
  </button>

  {/* Right Arrow */}
  <button
    onClick={nextSlide}
    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center hover:bg-white transition"
  >
    <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
  </button>

  {/* Dots */}
  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
    {facilityGallery.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-3 h-3 rounded-full transition-all ${
          currentSlide === index
            ? 'bg-white w-8'
            : 'bg-white/60'
        }`}
      />
    ))}
  </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-8 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-dark mb-3">{f.title}</h3>
                  <p className="font-body text-sm text-text/70 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Yoga Hall */}
    <section className="py-24 bg-background overflow-hidden relative">
      <div
        ref={yogaRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="relative flex flex-col lg:block lg:min-h-[650px]">

          {/* IMAGE/VIDEO (Slides in from Right) */}
          <div 
            className={`w-full lg:w-[58%] lg:ml-auto transition-all duration-1000 ease-out ${
              yogaVis ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            <div 
              onClick={() => {
                setVideoUrl('/img/videos/yoganew.mp4');
                setIsVideoModalOpen(true);
              }}
              className="relative overflow-hidden rounded-tr-[80px] rounded-br-[80px] rounded-tl-[30px] rounded-bl-[30px] shadow-[0_30px_80px_rgba(0,0,0,0.15)] cursor-pointer group"
            >
              <img
                src="/img/yoga.jpg"
                alt="Yoga hall at Chamundi Hill Palace"
                className="w-full h-[420px] lg:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Play Button Overlay with Pulsing Rings */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors duration-500 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  {/* Pulsing ring 1 */}
                  <div className="absolute w-28 h-28 rounded-full bg-accent/30 animate-pulse-ring" />
                  {/* Pulsing ring 2 (delayed) */}
                  <div className="absolute w-28 h-28 rounded-full bg-accent/20 animate-pulse-ring" style={{ animationDelay: '0.6s' }} />
                  
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:bg-accent transition-all duration-300 relative z-10">
                    <Play className="w-6 h-6 md:w-8 md:h-8 ml-1 fill-white text-white" />
                  </div>
                </div>
              </div>

              {/* Rating Badge (Pops up with delay) */}
              <div className={`absolute right-10 bottom-3 md:right-6 md:bottom-6 bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl px-2 py-2 md:px-4 md:py-3 shadow-xl border border-[#E8E0D1] z-10 transition-all duration-700 delay-500 ${
                yogaVis ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'
              }`}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Star className="w-3 h-3 md:w-5 md:h-5 text-accent fill-accent" />
                  </div>

                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-heading text-base md:text-2xl text-dark">
                        4.9
                      </span>
                      <span className="text-[10px] md:text-sm text-text/60">
                        /5
                      </span>
                    </div>

                    <p className="text-[7px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.15em] text-text/60">
                      Guest Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT CARD (Slides in from Left) */}
          <div className="w-full mt-8 lg:mt-0 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[48%] overflow-visible z-20 pointer-events-none">
            <div className={`bg-white p-8 sm:p-10 lg:p-14 rounded-tl-[80px] rounded-bl-[80px] rounded-tr-[30px] rounded-br-[30px] shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-[#E8E0D1] pointer-events-auto transition-all duration-1000 ease-out delay-200 ${
              yogaVis ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}>

              <span className="section-label">
                Yoga Hall
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark leading-tight mt-4 mb-6">
                Practice in a Peaceful Setting
              </h2>

              <p className="font-body text-base text-text/80 leading-relaxed mb-5">
                Yoga is a major element of our treatment programs. During the
                treatment period, our yoga teacher will set up personalized
                sessions based on your fitness level and the doctor's
                recommendation.
              </p>

              <p className="font-body text-base text-text/80 leading-relaxed">
                Daily yoga helps improve flexibility, reduce stress, and support
                the body's natural detoxification process. Breathing techniques
                and guided meditation are also included to enhance mental clarity
                and emotional calm. Whether you're a beginner or an advanced
                practitioner, our yoga retreats are tailored to elevate your
                overall wellness.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>

      <VideoTestimonials />
      <CTABanner />

      {/* Video Modal Overlay */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="bg-[#1A150E] max-w-4xl w-full rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 backdrop-blur-md transition-all duration-200 z-10 cursor-pointer"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            
            {/* 16:9 Video Player */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video
                key={videoUrl}
                src={videoUrl}
                controls
                autoPlay
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
