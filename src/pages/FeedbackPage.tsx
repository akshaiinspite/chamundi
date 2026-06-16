import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star, Quote } from 'lucide-react';

const feedbacks = [
  {
    name: 'Wander23307748133',
    date: 'July 2023',
    title: 'A blessing in disguise',
    quote: "I was initially apprehensive about going to Chamundi Hill Palace as I knew absolutely nothing about it prior to going. I now write this on my 21st day here, and I can say that coming here was such a blessing. The location is absolutely scenic with breathtaking views. I walked in the jungle pathways almost every day. The staff was so kind and helpful, and they ensured that every need of mine was met. Dr. Sheela checked in on me daily. I came mainly for an eczema issue, and my skin has much improved since my arrival three weeks ago. Overall it was a rejuvenating experience, and I hope to return one day.",
  },
  {
    name: 'Barbs H',
    date: 'Jan 2023',
    title: 'Healthy, happy and homely',
    quote: "Thank you for making my second visit to Chamundi Hill Palace even more memorable than the first. I am in awe of the dedication and kindness of everyone there. The Ayurveda treatments are carried out with precision, and always with a smile. The yoga teacher has great knowledge and techniques that allow all the guests to participate whatever their level. The hilltop setting provides magnificent views. But it's the family atmosphere that Jibu, Dr. Sheela and all the team create that makes it so special. I feel rejuvenated and replenished!",
  },
  {
    name: 'Guest Review',
    date: 'Dec 2022',
    title: 'Getting near to paradise!',
    quote: "Great and best place to recover and relax from all stress caused from speeding in this new world. Go back to earth with your soul and body. Gaining back your health with healing Ayurveda therapy and enjoying the beautiful tropical forest from Chamundi Hill Palace. A great team from Ayurveda Dr Sheela, whose experience and knowledge in this 5000 yrs old natural medicine brings the whole visit a worth of traveling half of the world for it. I am returning home with a happy heart.",
  },
  {
    name: 'Tina J',
    date: 'Aug 2022',
    title: 'I achieved a beautiful change in my life',
    quote: "I had 3 wonderful weeks at Chamundi Hills Palace in July 2022, a beautiful place in the hills, the view is stunning and the sounds of the birds capture you. I was met with genuine warm hospitality, even before I arrived. The team around you are heartfelt, competent, helpful and supportive. After 3 weeks I achieved a change for my life, loving myself again after some difficult years, I am happy, positive and calm. My skin and eyes are pure and I have lost kilos.",
  },
  {
    name: 'Sergio K',
    date: 'Dec 2019',
    location: 'Marseille',
    title: 'A miraculous haven of peace',
    quote: "This is not our first ayurvedic stay in Kerala but the contrast with our previous experiences could not be greater. During our stay we were alone and this was wonderful! Total peace, with the staff doing wonders for our welfare. It was really like staying with friends. More than a hotel, it's living in a large plantation house which provides ayurvedic treatment. The treatments are of quality and the food is flavourful and perfectly adapted to non Indian taste buds.",
  },
  {
    name: 'Maria Caroline',
    date: 'Dec 2019',
    title: 'This place should have a waiting list',
    quote: "A hidden gem. I have visited this place 5 or 6 times. It is my favourite Centre in Kerala. Very authentic. The entire staff (or rather family) are wonderful and really cannot do enough for you. The treatments are powerful and unlike other centres they take their time. You have two treatments a day at least one 90mins to 2 hour treatment. Also 2x a day yoga/meditation. If you want some serious R&R in beautiful peaceful grounds in the hills then this is your place.",
  },
];

export default function FeedbackPage() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <>
      <PageHero
        title="Guest Experiences & Testimonials"
        subtitle="Real Stories from Real Guests"
        backgroundImage="/img/banner-2.jpg"
        breadcrumb="Feedback"
      />

      <section className="py-20 sm:py-28 bg-background">
        <div
          ref={ref}
          className={`max-w-5xl mx-auto px-4 sm:px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-16">
            <span className="section-label">Reviews</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-3">Feedback</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {feedbacks.map((f, i) => (
              <div key={i}  className="h-full min-h-[420px] bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Quote size={22} className="text-accent" /></div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-dark">{f.title}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} size={14} className="fill-accent text-accent"/>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="font-body text-sm sm:text-base text-text/80 leading-relaxed italic mb-6">
                  "{f.quote}"
                </p>
                <div className="flex items-center gap-2 text-muted font-body text-sm">
                  <span className="font-semibold text-dark">{f.name}</span>
                  {f.location && <span>· {f.location}</span>}
                  <span>· {f.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
