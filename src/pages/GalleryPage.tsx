import { useEffect, useState } from 'react';
import PageHero from '../components/PageHero';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { X, Plus, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { src: '/img/banner-1.jpg', alt: 'Panoramic view of Chamundi Hill Palace' },
  { src: '/img/banner-2.jpg', alt: 'Lush greenery around the heritage palace' },
  { src: '/img/banner-3.jpg', alt: 'Heritage building of Chamundi Hill Palace' },
  { src: '/img/banner-4.jpg', alt: 'Sunset views from Nadukani Hills' },
  { src: '/img/kerala-ayurveda-2.jpg', alt: 'Ayurvedic treatment session' },
  { src: '/img/accomodation-facilities.jpg', alt: 'Heritage accommodation rooms' },
  { src: '/img/yoga.jpg', alt: 'Yoga session in Kerala' },
  { src: '/img/ayurvedapage/314962107_566571368608410_5904308292292831319_n.jpg', alt: 'Panchakarma treatment' },
  { src: '/img/banner-1.jpg', alt: 'Resort aerial view' },
  { src: '/img/banner-2.jpg', alt: 'Tropical gardens' },
  { src: '/img/banner-3.jpg', alt: 'Heritage architecture' },
  { src: '/img/banner-4.jpg', alt: 'Mountain views' },
];

const videos = [
  { title: 'Chamundi Hill Palace Experience', url: 'https://www.youtube.com/watch?v=pfIWKk6vBTQ', thumb: '/img/banner-1.jpg' },
  { title: 'Ayurveda Treatments Showcase', url: 'https://www.youtube.com/shorts/iE9MgpBtz-Q', thumb: '/img/banner-2.jpg' },
  { title: 'Mrs. Pilar — Guest Testimonial', url: 'https://www.youtube.com/watch?v=B-5vcic6zl8&t=55s', thumb: '/img/banner-3.jpg' },
  { title: 'Guest Review (German)', url: 'https://youtube.com/shorts/tQDnXW9aqXw?si=NMLxn9Z-vaeKU61n', thumb: '/img/banner-4.jpg' },
];
const facilityGallery = [
  '/img/banner-1.jpg',
  '/img/banner-2.jpg',
  '/img/rejuvenation.jpg',
  '/img/rooms.jpg',
  '/img/accomodation-facilities.jpg',
  '/img/kerala-ayurveda-2.jpg',
  '/img/excursion.jpg',
  '/img/yoga.jpg',
  '/img/organic.jpg',
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref: photoRef, isVisible: photoVis } = useScrollReveal(0.1);
  const { ref: videoRef, isVisible: videoVis } = useScrollReveal(0.1);
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
        title="Photo Gallery"
        subtitle="Explore the Beauty of Chamundi Hill Palace"
        backgroundImage="/img/banner-4.jpg"
        breadcrumb="Gallery"
      />

      {/* Photo Grid */}
      <section className="py-20 sm:py-28 bg-background">
        <div ref={photoRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${photoVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-14">
            <span className="section-label">Photos</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-3">Our Resort Views</h2>
          </div>
                 {/* carousel */}
                <div className="relative mb-16 w-full  max-w-6xl mx-auto px-4 sm:px-6">
                  <div className="overflow-hidden rounded-[32px] shadow-[0_25px_70px_rgba(0,0,0,0.15)]">
                    <img src={facilityGallery[currentSlide]} alt="Accommodation Gallery" className="w-full h-[250px] sm:h-[350px] lg:h-[550px] object-cover"/>
                  </div>
                 
                   {/* Left Arrow */}
                   <button onClick={prevSlide} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center hover:bg-white transition">
                   <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                   </button>
                   {/* Right Arrow */}
                   <button onClick={nextSlide} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center hover:bg-white transition">
                   <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                   </button>
                
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                  {facilityGallery.map((_, index) => (
                    <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all ${ currentSlide === index ? 'bg-white w-8' : 'bg-white/60'}`}
                />
              ))}
            </div>
              </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {photos.map((img, i) => (
              <div
                key={i}
                className="group relative break-inside-avoid overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <img src={img.src} alt={img.alt} className="w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/30 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <Plus size={20} className="text-dark" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-surface">
        <div ref={videoRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${videoVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-14">
            <span className="section-label">Videos</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-3">Experience Chamundi Hill Palace</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {videos.map((v, i) => (
              <a key={i} href={v.url} target="_blank" rel="noopener noreferrer" className="group relative rounded-xl overflow-hidden aspect-video">
                <img src={v.thumb} alt={v.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/30 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={22} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>
                <p className="absolute bottom-3 left-3 right-3 font-body text-xs font-semibold text-white">{v.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <VideoTestimonials />
      <CTABanner />

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-dark/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white/70 hover:text-white" aria-label="Close lightbox">
            <X size={32} />
          </button>
          <img src={photos[lightbox].src} alt={photos[lightbox].alt} className="max-w-full max-h-[85vh] object-contain rounded-xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
