import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Clock, Utensils, Home, Compass, Coffee, Check, ShieldCheck, HeartPulse, ChevronRight } from 'lucide-react';

interface TimelineItem {
  time: string;
  title: string;
  desc: string;
  icon: typeof Clock;
}

interface ActivityItem {
  title: string;
  desc: string;
}

const dailySchedule: TimelineItem[] = [
  {
    time: "06:00 AM – 07:30 AM",
    title: "Morning Yoga & Meditation",
    desc: "Start your day in our peaceful nature shala. Gentle Hatha yoga, pranayama, and guided meditation to prepare your body and mind for healing.",
    icon: Coffee,
  },
  {
    time: "08:00 AM – 09:00 AM",
    title: "Fresh Organic Breakfast",
    desc: "A freshly cooked, organic vegetarian breakfast served in our communal dining area, fostering connections with fellow seekers.",
    icon: Utensils,
  },
  {
    time: "09:30 AM – 12:00 PM",
    title: "Morning Treatment Session",
    desc: "Your first personalized Ayurvedic therapy of the day (e.g. Abhyanga or Body Detoxification), precisely prescribed by the resident doctor.",
    icon: HeartPulse,
  },
  {
    time: "01:00 PM – 02:00 PM",
    title: "Ayurvedic Lunch & Herbal Water",
    desc: "Sumptuous Keralan vegetarian cuisine matched to your diet plan. Infused Ayurvedic herbal water is served throughout the day.",
    icon: Utensils,
  },
  {
    time: "02:30 PM – 04:00 PM",
    title: "Doctor Consultation & Rest",
    desc: "Meet with our resident doctor, always available to monitor your progress and tailor your treatment plan.",
    icon: ShieldCheck,
  },
  {
    time: "04:30 PM – 06:00 PM",
    title: "Evening Treatment & Care",
    desc: "Your second daily therapy session, supporting deep biological purification. Cleanse your channels and release blockages.",
    icon: HeartPulse,
  },
  {
    time: "06:15 PM – 07:15 PM",
    title: "Evening Meditation & Sunset Yoga",
    desc: "A restorative evening session to integrate the physical benefits of the day's treatments and quiet the nervous system.",
    icon: Coffee,
  },
  {
    time: "07:30 PM – 08:30 PM",
    title: "Community Vegetarian Dinner",
    desc: "Wind down with a nourishing dinner. Share experiences and mingle with the regular clientele in our friendly dining space.",
    icon: Utensils,
  },
];

const inclusions = [
  "Spacious ensuite room with private bathroom (in the main palace or quiet hillside view cottages)",
  "All freshly cooked vegetarian meals sourced from our organic gardens and spice plantations",
  "Tailored Ayurvedic diet plans supervised directly by our resident doctors",
  "Daily Ayurvedic treatments twice a day, plus natural medicines included in your plan",
  "Abdominal cleansing every 8th day of treatment (or as recommended by doctor)",
  "Detailed Ayurvedic consultation upon arrival and 24/7 doctor availability",
  "Specific take-home diet chart provided by the doctor on your departure day",
  "Daily morning & evening Yoga sessions (6 days a week, free for all residents)",
  "Airport pick up and drop (free one way for minimum 1 week, free both ways for min 2 weeks stay)",
  "Loving staff assistance 24 hours a day during your entire stay",
  "Complimentary Wi-Fi access available 24/7 throughout the premises",
  "Assistance with travel planning before and after your stay at the centre",
];

const weeklyActivities: ActivityItem[] = [
  {
    title: "Spice Tour",
    desc: "Explore spice tours directly within our lush centre premises, discovering fresh cardamom, pepper, and local herbs."
  },
  {
    title: "Rubber Plantation Visit",
    desc: "Walk through the serene local rubber plantations, learning about the local agriculture and agricultural heritage."
  },
  {
    title: "Ancient Temple Excursion",
    desc: "Visit a historic, more than 100-year-old Hindu temple nearby to experience traditional spirituality and local culture."
  },
  {
    title: "Cooking Demonstration",
    desc: "Join our interactive Ayurvedic cooking classes held once every 15 days to learn how to prepare healthy meals back home."
  }
];

export default function DayAtChamundi() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.15);
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.15);
  const [activeTab, setActiveTab] = useState<'schedule' | 'nourishment' | 'rooms' | 'excursions'>('schedule');

  return (
    <section id="treatments" className="py-20 sm:py-28 bg-[#FAF7F2] text-dark relative overflow-hidden">
      
      {/* Soft natural ambient background glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">A Typical Day</span>
          <h2 className="font-heading text-4xl sm:text-5xl mt-3 mb-6 text-primary font-semibold">
            A Day at Chamundi Hill Palace
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="max-w-2xl mx-auto text-text leading-relaxed font-body">
            Experience a perfectly structured routine that harmonizes traditional treatments, 
            organic nutrition, healing yoga, and enriching activities on our sacred hill.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 max-w-4xl mx-auto">
          {[
            { id: 'schedule', label: 'Daily Schedule', icon: Clock },
            { id: 'nourishment', label: 'Organic Food', icon: Utensils },
            { id: 'rooms', label: 'Accommodation', icon: Home },
            { id: 'excursions', label: 'Activities & Excursions', icon: Compass },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-body text-xs sm:text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105'
                    : 'bg-white border-border/40 text-text hover:bg-surface hover:text-dark hover:border-accent/40'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Display */}
        <div 
          ref={contentRef}
          className={`transition-all duration-500 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          
          {/* TAB 1: Daily Schedule Timeline */}
          {activeTab === 'schedule' && (
            <div className="max-w-4xl mx-auto bg-white rounded-[32px] p-6 sm:p-10 border border-border/40 shadow-xl shadow-stone-100">
              <div className="relative border-l-2 border-primary/25 pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-12">
                {dailySchedule.map((item, idx) => {
                  return (
                    <div key={idx} className="relative group">
                      
                      {/* Timeline dot */}
                      <div className="absolute -left-[35px] sm:-left-[51px] w-6 h-6 rounded-full border-4 border-white bg-accent shadow-md flex items-center justify-center top-1 transition-all duration-300 group-hover:scale-125">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                        <span className="font-body text-xs uppercase tracking-wider text-accent font-semibold shrink-0 sm:w-44 pt-1">
                          {item.time}
                        </span>
                        
                        <div className="flex-1">
                          <h4 className="font-heading text-lg sm:text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
                            {item.title}
                          </h4>
                          <p className="text-text/80 text-sm leading-relaxed mt-2 font-body">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: Organic Food & Nutrition */}
          {activeTab === 'nourishment' && (
            <div className="grid lg:grid-cols-12 gap-10 items-center bg-white rounded-[32px] p-6 sm:p-10 border border-border/40 shadow-xl">
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md h-80 lg:h-[450px]">
                <img src="/img/meals.jpg" alt="Organic Keralan vegetarian food" className="w-full h-full object-cover" />
              </div>
              
              <div className="lg:col-span-7 space-y-6">
                <span className="bg-accent/15 text-accent font-body text-xs font-semibold px-4 py-1.5 rounded-full">Organic Dining</span>
                <h3 className="font-heading text-3xl font-bold text-primary">Nourishment For Healing</h3>
                <p className="font-body text-text/80 leading-relaxed text-sm sm:text-base">
                  Nourishment is a vital part of healing, and our cuisine is thoroughly and thoughtfully crafted to support your wellness journey. Sumptuous Keralan vegetarian food is served for all three meals, in addition to refreshing morning and evening tea or coffee.
                </p>
                <div className="space-y-4 pt-4 border-t border-border/30">
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-accent shrink-0 mt-1" />
                    <p className="text-sm font-body text-text/90">Freshly cooked vegetarian food made from organically grown vegetables and spices.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-accent shrink-0 mt-1" />
                    <p className="text-sm font-body text-text/90">Ayurvedic Herbal water is prepared fresh and available throughout the day.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-accent shrink-0 mt-1" />
                    <p className="text-sm font-body text-text/90">Food is served on a common dining table, offering a wonderful opportunity to mingle with fellow guests and class mates.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Accommodation */}
          {activeTab === 'rooms' && (
            <div className="grid lg:grid-cols-12 gap-10 items-center bg-white rounded-[32px] p-6 sm:p-10 border border-border/40 shadow-xl">
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md h-80 lg:h-[450px]">
                <img src="/img/rooms.jpg" alt="Comfortable accommodation at Chamundi" className="w-full h-full object-cover" />
              </div>
              
              <div className="lg:col-span-7 space-y-6">
                <span className="bg-accent/15 text-accent font-body text-xs font-semibold px-4 py-1.5 rounded-full">Ensuite Living Spaces</span>
                <h3 className="font-heading text-3xl font-bold text-primary">Comfortable Ensuite Accommodation</h3>
                <p className="font-body text-text/80 leading-relaxed text-sm sm:text-base">
                  All rooms are spacious and comfortable, featuring private bathrooms and supporting deep rest. Some rooms are located within the heritage main palace building, while others are situated in quiet cottages with beautiful hillside views.
                </p>
                <p className="font-body text-text/80 leading-relaxed text-sm sm:text-base">
                  As a luxury Ayurveda retreat, we ensure serene, peaceful living spaces that assist your recovery and rejuvenation. Chamundi Palace stands out as the best Ayurvedic retreat in Kerala and is widely recognized as the best Ayurvedic retreat in India.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-accent shrink-0" />
                    <span className="text-sm text-text font-body">Spacious Suites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-accent shrink-0" />
                    <span className="text-sm text-text font-body">Ensuite Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-accent shrink-0" />
                    <span className="text-sm text-text font-body">Main Palace or Cottages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-accent shrink-0" />
                    <span className="text-sm text-text font-body">Stunning Hill Views</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Weekly Activities & Inclusions */}
          {activeTab === 'excursions' && (
            <div className="space-y-12">
              {/* Excursions Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {weeklyActivities.map((act, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-border/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-accent font-semibold font-body">Activity</span>
                      <h4 className="font-heading text-lg font-bold text-primary mt-2 mb-3">{act.title}</h4>
                      <p className="text-text/80 text-sm leading-relaxed font-body">{act.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 text-accent text-xs font-semibold mt-4">
                      <span>Complimentary</span>
                      <ChevronRight size={14} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Inclusions List */}
              <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-border/40 shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-primary mb-8 text-center">What is Included in Your Stay</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {inclusions.map((inc, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-surface/30 p-4 rounded-xl border border-border/10">
                      <Check size={18} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-text leading-relaxed font-body">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
