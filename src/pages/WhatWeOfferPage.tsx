import PageHero from '../components/PageHero';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { HeartPulse, BedDouble, Dumbbell, UtensilsCrossed,Check, ChevronLeft, ChevronRight  } from 'lucide-react';
import { useEffect, useState } from 'react';

const heroStats = [
  {
    icon: HeartPulse,
    label: 'Ayurvedic Care',
  },
  {
    icon: BedDouble,
    label: 'Accommodation',
  },
  {
    icon: Dumbbell,
    label: 'Yoga & Wellness',
  },
  {
    icon: UtensilsCrossed,
    label: 'Meals & Diet',
  },
];


const offerCategories = [
  {
    title: 'Ayurvedic Care',
    image: '/img/rejuvenation.jpg',
    items: [
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
    image: '/img/rooms.jpg',
    items: [
      'Comfortable ensuite rooms at the Ayurvedic Treatment Centre',
      'Airport pick up and drop (free one way for min 1 week, free both ways for min 2 weeks)',
      'Assistance with your travel needs before/after your stay in the centre',
    ],
  },
  {
    title: 'Yoga & Wellness',
    image: '/img/yoga.jpg',
    items: [
      'Daily morning and evening Yoga sessions, 6 days a week, free for all guests',
      'We also cover Yoga philosophy, anatomy, and its therapeutic benefits.',
    ],
  },
  {
    title: 'Meals & Diet',
    image: '/img/meals.jpg',
    items: [
      'All meals — vegetarian & freshly cooked, made from organically grown vegetables and spices',
      'During treatments, Ayurvedic diet is ensured',
      '3 meals including morning and evening tea/coffee. Ayurvedic Herbal water available all day.'
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
      <section className='bg-primary py-20 px-4 sm:px-6 lg:px-20'>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
  {heroStats.map((stat, index) => {
    const Icon = stat.icon;

    return (
      <div
        key={index}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-4 md:p-5 text-white shadow-xl hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
      >
        <div className="flex flex-col items-center text-center gap-3">
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />

          <span className="font-heading text-base md:text-xl">
            {stat.label}
          </span>
        </div>
      </div>
    );
  })}
</div>
      </section>

      <section className="py-20 sm:py-28 bg-dark">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-14">
            <span className="section-label">Inclusions</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mt-3">
              Chamundi Hill Palace Ayurveda Treatment Centre
            </h2>
            <p className="font-body text-base text-white/70 mt-4 max-w-2xl mx-auto">
              Everything you need for a complete healing journey — included in your stay.
            </p>
          </div>
          </div>
   

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {offerCategories.map((category, index) => (
    <div key={index} className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-dark mb-6">{category.title}</h3>
        <img src={category.image} alt={category.title} className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-xl mb-6"/>

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
     
      </section>

      <VideoTestimonials />
      <CTABanner />
    </>
  );
}
