import PageHero from '../components/PageHero';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Check } from 'lucide-react';

const offerCategories = [
  {
    title: 'Ayurvedic Care',
    items: [
      'During treatments, Ayurvedic diet is ensured',
      'A detailed Ayurvedic consultation with our resident doctor upon arrival',
      'Our doctor is always available, attentive to every concern, during your whole stay',
      'Ayurvedic treatments, twice a day, as prescribed by the doctor',
      'Ayurvedic medicines prescribed by the doctor as part of your treatment plan',
      'Abdominal cleansing every 8th day of treatment, or as recommended by doctor',
      'On the last day of your stay, Doctor will give you a specific diet chart to follow',
    ],
  },
  {
    title: 'Accommodation',
    items: [
      'Comfortable ensuite rooms at the Ayurvedic Treatment Centre',
      'Airport pick up and drop (free one way for min 1 week, free both ways for min 2 weeks)',
      'Assistance with your travel needs before/after your stay in the centre',
    ],
  },
  {
    title: 'Yoga & Wellness',
    items: [
      'Daily morning and evening Yoga sessions, 6 days a week, free for all guests',
    ],
  },
  {
    title: 'Meals & Diet',
    items: [
      'All meals — vegetarian & freshly cooked, made from organically grown vegetables and spices',
      'During treatments, Ayurvedic diet is ensured',
    ],
  },
];

export default function WhatWeOfferPage() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <>
      <PageHero
        title="What We Offer"
        subtitle="Authentic Ayurvedic Treatments & Healing Retreat"
        backgroundImage="/img/banner-3.jpg"
        breadcrumb="What We Offer"
      />

      <section className="py-20 sm:py-28 bg-background">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-14">
            <span className="section-label">Inclusions</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-3">
              Chamundi Hill Palace Ayurveda Treatment Centre
            </h2>
            <p className="font-body text-base text-text/70 mt-4 max-w-2xl mx-auto">
              Everything you need for a complete healing journey — included in your stay.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
  {offerCategories.map((category, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <h3 className="font-heading text-2xl font-semibold text-dark mb-6">
        {category.title}
      </h3>

      <div className="space-y-4">
        {category.items.map((item, itemIndex) => (
          <div key={itemIndex} className="flex gap-3 items-start">
            <Check
              size={16}
              className="text-primary mt-1 shrink-0"
            />

            <p className="text-text/80 leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      <VideoTestimonials />
      <CTABanner />
    </>
  );
}
