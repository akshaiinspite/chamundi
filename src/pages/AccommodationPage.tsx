import PageHero from '../components/PageHero';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Bed, UtensilsCrossed, Wifi, TreePine, MapPin, Sprout, Clock3, Star, BadgeCheck, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const facilityGallery = [
  '/img/rooms.jpg',
  '/img/accomodation-facilities.jpg',
  '/img/excursion.jpg',
  '/img/meals.jpg',
  '/img/yoga.jpg',
  '/img/organic.jpg',
];

const heroStats = [
  {
    icon: Clock3,
    value: '25+',
    label: 'Years',
  },
  {
    icon: Star,
    value: '4.9',
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
  const { ref: introRef, isVisible: introVis } = useScrollReveal(0.1);
  const { ref: gridRef, isVisible: gridVis } = useScrollReveal(0.1);
  const { ref: yogaRef, isVisible: yogaVis } = useScrollReveal(0.1);
  const [currentSlide, setCurrentSlide] = useState(0);

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % facilityGallery.length);
};

const prevSlide = () => {
  setCurrentSlide(
    (prev) => (prev - 1 + facilityGallery.length) % facilityGallery.length
  );
};
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % facilityGallery.length);
  }, 4000); // changes every 4 seconds

  return () => clearInterval(interval);
}, []);

  return (
    <>
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

      {/* Intro */}
     <section className="py-24 bg-background overflow-hidden">
  <div
    ref={introRef}
    className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
      introVis
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'
    }`}
  >
    <div className="relative flex flex-col lg:block lg:min-h-[650px]">

      {/* IMAGE */}
      <div className="w-full lg:w-[58%]">
        <div className="relative overflow-hidden rounded-tl-[80px] rounded-bl-[80px] rounded-tr-[30px] rounded-br-[30px] shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
          <img
            src="/img/accomodation-facilities.jpg"
            alt="Heritage accommodation rooms at Chamundi Hill Palace"
            className="w-full h-[420px] lg:h-[650px] object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
<div className="absolute left-10 bottom-3 md:left-6  md:bottom-6 bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl px-2 py-2 md:px-4 md:py-3 shadow-xl border border-[#E8E0D1] z-10">
  <div className="flex items-center gap-2 md:gap-3">
    <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-accent/10 flex items-center justify-center">
      <Star className="w-3 h-3 md:w-5 md:h-5 text-accent fill-accent" />
    </div>

    <div>
      <div className="flex items-center gap-1">
        <span className="font-heading text-lg md:text-2xl text-dark">
          4.9
        </span>
        <span className="text-[10px] md:text-sm text-text/60">
          /5
        </span>
      </div>

      <p className="text-[8px] md:text-xs uppercase tracking-[0.12em] md:tracking-[0.15em] text-text/60">
        Guest Rating
      </p>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* CONTENT CARD */}
      <div className="w-full mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[48%]">
        <div className="bg-white p-8 sm:p-10 lg:p-14 rounded-tr-[80px] rounded-br-[80px] rounded-tl-[30px] rounded-bl-[30px] shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-[#E8E0D1]">

          <span className="section-label">
            Your Stay
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark leading-tight mt-4 mb-6">
            Comfortable Living in a Heritage Setting
          </h2>

          <p className="font-body text-base text-text/80 leading-relaxed mb-5">
            All rooms are spacious and comfortable, with private bathrooms.
            Some rooms are within the main building and some are even more
            quietly located with beautiful views.
          </p>

          <p className="font-body text-base text-text/80 leading-relaxed">
            Nourishment is a vital part of healing, and our cuisine is
            thoughtfully crafted to support your wellness journey. Food is
            served in a common dining table so that you have a good
            opportunity to mingle with guests and experience the warm,
            community atmosphere of Chamundi Hill Palace.
          </p>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* Facilities Grid */}
      <section className="py-20 bg-dark">
        <div ref={gridRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${gridVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-14">
            <span className="section-label">Facilities</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mt-3">Everything You Need</h2>
          </div>
          {/* carousel */}
          <div className="relative mb-16">
  <div className="overflow-hidden rounded-[32px] shadow-[0_25px_70px_rgba(0,0,0,0.15)]">
    <img
      src={facilityGallery[currentSlide]}
      alt="Accommodation Gallery"
      className="w-full h-[250px] sm:h-[350px] lg:h-[500px] object-cover transition-all duration-500"
    />
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
   <section className="py-24 bg-background overflow-hidden">
  <div
    ref={yogaRef}
    className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
      yogaVis
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'
    }`}
  >
    <div className="relative flex flex-col lg:block lg:min-h-[650px]">

      {/* IMAGE */}
      <div className="w-full lg:w-[58%] lg:ml-auto">
        <div className="relative overflow-hidden rounded-tr-[80px] rounded-br-[80px] rounded-tl-[30px] rounded-bl-[30px] shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
          <img
            src="/img/yoga.jpg"
            alt="Yoga hall at Chamundi Hill Palace"
            className="w-full h-[420px] lg:h-[650px] object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute right-10 bottom-3 md:right-6  md:bottom-6 bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl px-2 py-2 md:px-4 md:py-3 shadow-xl border border-[#E8E0D1] z-10">
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

      {/* CONTENT CARD */}
      <div className="w-full mt-8 lg:mt-0 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[48%]">
        <div className="bg-white p-8 sm:p-10 lg:p-14 rounded-tl-[80px] rounded-bl-[80px] rounded-tr-[30px] rounded-br-[30px] shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-[#E8E0D1]">

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
    </>
  );
}
