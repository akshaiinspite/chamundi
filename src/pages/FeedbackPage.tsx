import { useState } from 'react';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star, Quote, Leaf, Users, BadgeCheck, Play, X } from 'lucide-react';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const heroStats = [
  {
    icon: Star,
    value: '4.9',
    label: 'Rated',
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

const videoTestimonials = [
  {
    title: "Guest Experience Review",
    url: "https://www.youtube.com/embed/pfIWKk6vBTQ",
    isYoutube: true,
    poster: "/img/banner-4.jpg",
    description: "An in-depth guest testimonial sharing their transformative healing journey and experience.",
  },
  {
    title: "Ayurveda Wellness Journey",
    url: "/img/videos/videotestimonal2.mp4",
    isYoutube: false,
    poster: "/img/kerala-ayurveda-2.jpg",
    description: "A guest reflecting on their authentic Panchakarma and rejuvenation treatments.",
  },
  {
    title: "Guest Review",
    url: "/img/videos/videotestimonialgerman.mp4",
    isYoutube: false,
    poster: "/img/banner-2.jpg",
    description: "An authentic video testimonial from our German-speaking guest describing their stay.",
  },
];

export default function FeedbackPage() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const { ref: videoRef, isVisible: videoVisible } = useScrollReveal(0.1);
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string; isYoutube: boolean } | null>(null);

  return (
    <>
      {/* Styles Block */}
      <style>{`
        @keyframes floatLeaf {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(4deg); }
        }
        @keyframes floatLeafOpposite {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-4deg); }
        }
        .animate-float-slow {
          animation: floatLeaf 7s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatLeafOpposite 6s ease-in-out infinite 1.2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <PageHero
        title="Guest Experiences & Testimonials"
        subtitle="Real Stories from Real Guests"
        backgroundImage="/img/banner-2.jpg"
        breadcrumb="Feedback"
      />
      
      {/* Stats row */}
      <section className="bg-primary py-12 md:py-20 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute inset-0 opacity-15 pointer-events-none select-none z-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {heroStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl md:rounded-3xl px-3 py-3 md:px-5 md:py-5 text-white shadow-xl hover:bg-white/15 hover:-translate-y-1.5 transition-all duration-300 group/stat hover:shadow-accent/5 hover:border-accent/30"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <Icon className="w-4 h-4 md:w-6 md:h-6 text-accent shrink-0 group-hover/stat:scale-110 group-hover/stat:rotate-12 transition-all duration-300" />

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

      <TestimonialsCarousel />

      {/* Video Reviews Grid Section */}
      <section className="py-20 bg-surface relative overflow-hidden">
        <div 
          ref={videoRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
            videoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <span className="section-label">Video Reviews</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark mt-3">
              Watch Guest Testimonials
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-5 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-text/80 leading-relaxed font-body mt-4 text-sm sm:text-base">
              Listen directly to our guests share their transformational experiences, wellness outcomes, and highlights of their stay at Chamundi Hill Palace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveVideo({ url: video.url, title: video.title, isYoutube: video.isYoutube })}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border/40 group cursor-pointer"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full bg-dark overflow-hidden">
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="fill-current text-dark ml-1 w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials cards section */}
      <section className="py-20 sm:py-28 bg-dark relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 z-0 select-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />
        </div>
        
        <div className="absolute top-1/3 right-10 text-white/5 pointer-events-none select-none animate-float-slow hidden lg:block z-0">
          <Leaf size={140} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-1/3 left-10 text-white/5 pointer-events-none select-none animate-float-delayed hidden lg:block z-0">
          <Leaf size={120} strokeWidth={0.5} />
        </div>

        <div
          ref={ref}
          className="mx-5 lg:mx-20 px-4 sm:px-6 relative z-10"
        >
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="section-label">Reviews</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-3">Feedback</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {feedbacks.map((f, i) => (
              <div 
                key={i}  
                className={`bg-white/5 backdrop-blur-sm rounded-[32px] p-8 border border-white/10 shadow-md hover:shadow-2xl hover:border-accent/40 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <Quote size={22} className="text-accent group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
                        {f.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} size={14} className="fill-accent text-accent"/>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed italic mb-6">
                    "{f.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-2 text-white/50 font-body text-sm border-t border-white/10 pt-4">
                  <span className="font-semibold text-white">{f.name}</span>
                  {f.location && <span>· {f.location}</span>}
                  <span>· {f.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />

      {/* Video Modal Overlay */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="bg-dark max-w-4xl w-full rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh] animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-white/10 flex justify-between items-center shrink-0">
              <h3 className="font-heading text-xl font-bold text-white font-semibold">{activeVideo.title}</h3>
              <button 
                onClick={() => setActiveVideo(null)}
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-200 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Player */}
            <div className={`w-full bg-black relative flex items-center justify-center overflow-hidden ${
              activeVideo.isYoutube ? 'aspect-video' : 'flex-1 min-h-[300px] p-2'
            }`}>
              {activeVideo.isYoutube ? (
                <iframe
                  src={`${activeVideo.url}?autoplay=1`}
                  title={activeVideo.title}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={activeVideo.url}
                  autoPlay
                  controls
                  playsInline
                  className="max-w-full max-h-[65vh] rounded-lg object-contain shadow-inner"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
