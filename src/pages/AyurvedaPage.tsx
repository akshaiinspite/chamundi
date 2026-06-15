import PageHero from '../components/PageHero';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Sparkles, Heart, Leaf, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const treatments = [
  {
    icon: Sparkles,
    duration: '7, 14, 21 or 28 Days',
    title: 'Rejuvenation Program',
    body: 'Experience authentic Ayurvedic rejuvenation in Kerala at Chamundi Hill Palace, where ancient healing meets serene natural beauty. Our programs are designed to restore energy, balance, and inner harmony through traditional Rasayana therapy. Each program begins with a doctor\'s consultation and includes detoxification, oil massages, herbal steam baths, Panchakarma, and Ayurvedic meals complemented by yoga and meditation. Treatments are personalized according to your body type (Prakriti) and health goals.',
    image: '/img/ayurvedapage/rejuvenation.jpg',
  },
  {
    icon: Heart,
    duration: '14 or 21 Days',
    title: 'Stress Relief Program',
    body: 'Find calm and clarity with the Stress Relief Program at Chamundi Hill Palace. Designed to ease tension, anxiety, and fatigue, this program blends time-tested Ayurvedic therapies with a holistic healing approach. Each treatment plan includes Abhyanga (herbal oil massage), Shirodhara (oil pouring therapy), herbal steam baths, and detoxification therapies — all tailored to restore balance to your body and mind. Guided yoga and meditation sessions, along with a nutritious Ayurvedic diet, support deep relaxation and better sleep.',
    image: '/img/ayurvedapage/stress-relief.jpg',
  },
  {
    icon: Leaf,
    duration: '28 Days',
    title: 'Panchakarma Treatment',
    body: 'Experience authentic Panchakarma treatment in Kerala at Chamundi Hill Palace, a renowned Ayurvedic wellness retreat dedicated to deep detoxification and rejuvenation. This 28-day program follows classical Ayurvedic purification therapies that cleanse the body, balance the Doshas, and restore lasting vitality. Your treatment plan may include Vamana (emesis), Virechana (purgation), Nasya (nasal therapy), Basti (medicated enemas), and Raktamokshana (blood purification).',
    image: '/img/ayurvedapage/314962107_566571368608410_5904308292292831319_n.jpg',
    link: '/panchakarma',
  },
  {
    icon: Flame,
    duration: '28 Days',
    title: 'Weight Loss Program',
    body: 'Discover natural weight management through Ayurveda with the 28-Day Weight Loss Program. This holistic program combines Ayurvedic therapies, balanced nutrition, and mindful practices to promote sustainable fat reduction and overall vitality. Your personalized plan may include Udvartana (herbal powder massage) and Abhyanga (oil massage) to improve circulation and break down excess fat, along with herbal steam baths for detoxification and metabolism enhancement.',
    image: '/img/ayurvedapage/weight-loss.jpg',
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

  const reverse = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`relative py-16 lg:py-24 transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Soft herbal background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-green-100/40 blur-[120px]" />
      </div>

      <div
        className={`relative grid lg:grid-cols-2 gap-10 xl:gap-16 items-center ${
          reverse ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
  <div
    className="hidden lg:block absolute left-1/2 top-16 bottom-16 w-[6px] -translate-x-1/2 rounded-full"
    style={{
      background:
        'linear-gradient(to bottom, transparent, #C8A96B 15%, #E8D29A 50%, #C8A96B 85%, transparent)',
      boxShadow:
        '0 0 12px rgba(200,169,107,0.4), 0 0 24px rgba(200,169,107,0.2)',
    }}
  />
        {/* IMAGE */}
        <div className="relative">
          <div
            className={`overflow-hidden shadow-2xl ${
              reverse
                ? 'rounded-l-[30px] rounded-tr-[90px] rounded-br-[90px]'
                : 'rounded-r-[30px] rounded-tl-[90px] rounded-bl-[90px]'
            }`}
          >
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-[450px] lg:h-[600px] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative">


          <div className="bg-white/95 backdrop-blur-sm rounded-[36px] p-8 sm:p-10 lg:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-[#E9E0CF]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon size={20} className="text-accent" />
              </div>

              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                {treatment.duration}
              </span>
            </div>

            <h3 className="font-heading text-3xl lg:text-[42px] leading-tight text-dark mb-6">
              {treatment.title}
            </h3>

            <p className="font-body text-text/80 leading-relaxed mb-8 text-lg">
              {treatment.body}
            </p>

            {treatment.link && (
              <Link
                to={treatment.link}
                className="inline-flex items-center gap-2 text-primary font-semibold"
              >
                Read More →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default function AyurvedaPage() {
  const { ref: introRef, isVisible: introVisible } = useScrollReveal(0.1);

  return (
    <>
      <PageHero
        title="Ayurvedic Treatments in Kerala"
        subtitle="Ancient Wisdom · Modern Healing"
        backgroundImage="/img/kerala-ayurveda-2.jpg"
        breadcrumb="Ayurveda"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div
          ref={introRef}
          className={`max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-700 ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-body text-base sm:text-lg text-text/80 leading-relaxed">
            Welcome to Chamundi Hill Palace, where ancient Ayurvedic wisdom meets serene Kerala landscapes.
            Recognized as one of the best Ayurvedic retreats in Kerala, we offer a complete range of authentic
            Ayurvedic treatments designed to purify, rejuvenate, and restore the body's natural harmony.
            Every therapy begins with an individual Ayurvedic consultation led by our resident doctor, who
            carefully studies your body constitution (Dosha), health history, and lifestyle. Based on this,
            a personalized treatment plan is crafted — ensuring every guest receives care suited to their unique needs.
          </p>
        </div>
      </section>

      {/* Treatment Cards */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="section-label">Programs</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-3">Our Signature Ayurvedic Treatments</h2>
          </div>
          {treatments.map((t, i) => (
            <TreatmentCard key={t.title} treatment={t} index={i} />
          ))}
        </div>
      </section>

      <VideoTestimonials />
      <CTABanner />
    </>
  );
}
