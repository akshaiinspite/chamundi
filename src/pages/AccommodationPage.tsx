import PageHero from '../components/PageHero';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Bed, UtensilsCrossed, Wifi, TreePine, MapPin, Sprout } from 'lucide-react';

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

  return (
    <>
      <PageHero
        title="Accommodation & Facilities"
        subtitle="Heritage Rooms Designed for Peace, Comfort & Recovery"
        backgroundImage="/img/accomodation-facilities.jpg"
        breadcrumb="Accommodation"
      />

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
        <div className="overflow-hidden rounded-tl-[80px] rounded-bl-[80px] rounded-tr-[30px] rounded-br-[30px] shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
          <img
            src="/img/accomodation-facilities.jpg"
            alt="Heritage accommodation rooms at Chamundi Hill Palace"
            className="w-full h-[420px] lg:h-[650px] object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
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
      <section className="py-20 bg-surface">
        <div ref={gridRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${gridVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-14">
            <span className="section-label">Facilities</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-3">Everything You Need</h2>
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
        <div className="overflow-hidden rounded-tr-[80px] rounded-br-[80px] rounded-tl-[30px] rounded-bl-[30px] shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
          <img
            src="/img/yoga.jpg"
            alt="Yoga hall at Chamundi Hill Palace"
            className="w-full h-[420px] lg:h-[650px] object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
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
