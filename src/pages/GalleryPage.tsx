import { useEffect, useState, useCallback } from 'react';
import PageHero from '../components/PageHero';
import VideoTestimonials from '../components/VideoTestimonials';
import CTABanner from '../components/CTABanner';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { X, Plus, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PhotoItem {
  src: string;
  alt: string;
  category: string;
  title: string;
  subtitle: string;
  objectPosition?: string;
  fit?: 'contain' | 'cover';
}

const photos: PhotoItem[] = [
  // Ayurveda & Wellness (Authentic Treatment Images)
  {
    src: '/img/WhatsApp Image 2026-08-04 at 12.33.24 PM.jpeg',
    alt: 'Authentic Ayurvedic Abhyanga massage therapy session by expert therapists on wooden Droni table',
    category: 'Ayurveda & Wellness',
    title: 'Abhyanga Oil Massage',
    subtitle: 'Synchronized Body Therapy',
    objectPosition: 'object-top'
  },
  {
    src: '/img/WhatsApp Image 2026-08-04 at 12.33.24 PM (1).jpeg',
    alt: 'Therapist performing targeted Ayurvedic herbal oil massage for joint and muscle revitalization',
    category: 'Ayurveda & Wellness',
    title: 'Herbal Oil Therapy',
    subtitle: 'Targeted Body Healing',
    fit: 'contain'
  },
  {
    src: '/img/kerala-ayurveda-2.jpg',
    alt: 'Ayurvedic body therapy session with traditional oils',
    category: 'Ayurveda & Wellness',
    title: 'Classic Rejuvenation Care',
    subtitle: 'Holistic Body Healing'
  },
  {
    src: '/img/ayurvedapage/314962107_566571368608410_5904308292292831319_n.jpg',
    alt: 'Specialized Panchakarma oil pouring treatment',
    category: 'Ayurveda & Wellness',
    title: 'Panchakarma Detox',
    subtitle: 'Authentic Herbal Healing'
  },
  {
    src: '/img/rejuvenation.jpg',
    alt: 'Steam bath chamber for herbal ayurvedic detox',
    category: 'Ayurveda & Wellness',
    title: 'Herbal Steam Chamber',
    subtitle: 'Natural Purification'
  },

  // Retreat & Nature
  {
    src: '/img/WhatsApp Image 2026-08-04 at 12.33.22 PM (1).jpeg',
    alt: 'Guests relaxing on deck chairs taking in the breathtaking sunset over western ghats mountain valleys',
    category: 'Retreat & Nature',
    title: 'Sunset Viewpoint Lounge',
    subtitle: 'Panoramic Mountain Horizon'
  },
  {
    src: '/img/WhatsApp Image 2026-08-04 at 12.33.22 PM (2).jpeg',
    alt: 'Guest enjoying peaceful moments at the hilltop pagoda gazebo overlooking forest canopy',
    category: 'Retreat & Nature',
    title: 'Hilltop Pagoda Pavilion',
    subtitle: 'Panoramic Forest Viewpoint'
  },
  {
    src: '/img/WhatsApp Image 2026-08-04 at 12.33.19 PM.jpeg',
    alt: 'Chamundi Hill Palace main entrance portico illuminated at twilight',
    category: 'Retreat & Nature',
    title: 'Palace Estate at Twilight',
    subtitle: 'Illuminated Heritage Portico'
  },
  {
    src: '/img/WhatsApp Image 2026-08-04 at 12.24.53 PM.jpeg',
    alt: 'Lush green tropical garden pathway bordered by vibrant flora',
    category: 'Retreat & Nature',
    title: 'Tropical Botanical Pathway',
    subtitle: 'Lush Nature Walkways'
  },
  {
    src: '/img/020.jpg',
    alt: 'Heritage wooden staircase with traditional lamps and antique clock interior',
    category: 'Retreat & Nature',
    title: 'Heritage Palace Interior',
    subtitle: 'Teak Architecture & Artifacts'
  },
  {
    src: '/img/053.jpg',
    alt: 'Staff member assisting guest down the traditional wooden staircase',
    category: 'Retreat & Nature',
    title: 'Warm Palace Hospitality',
    subtitle: 'Personalized Guest Care'
  },
  {
    src: '/img/property1.jpg',
    alt: 'Exterior facade and front entrance driveway of Chamundi Hill Palace',
    category: 'Retreat & Nature',
    title: 'Palace Heritage Facade',
    subtitle: 'Main Estate Entrance'
  },
  {
    src: '/img/banner-1.jpg',
    alt: 'Panoramic mountain and valley view from retreat peak',
    category: 'Retreat & Nature',
    title: 'Mist-Covered Valleys',
    subtitle: 'Nadukani Hills Landscape'
  },
  {
    src: '/img/banner-2.jpg',
    alt: 'Lush green tropical gardens and medicinal flora pathways',
    category: 'Retreat & Nature',
    title: 'Sacred Botanical Gardens',
    subtitle: 'Medicinal Herb Walks'
  },
  {
    src: '/img/banner-3.jpg',
    alt: 'Traditional Kerala style wooden architecture and courtyard',
    category: 'Retreat & Nature',
    title: 'Heritage Courtyard',
    subtitle: 'Kerala Craftsmanship'
  },
  {
    src: '/img/banner-4.jpg',
    alt: 'Sunset over western ghats mountain horizon',
    category: 'Retreat & Nature',
    title: 'Golden Hour Horizon',
    subtitle: 'Sunset Viewpoint'
  },
  {
    src: '/img/excursion.jpg',
    alt: 'Guided plantation walk and sightseeing excursion',
    category: 'Retreat & Nature',
    title: 'Nature Plantation Walk',
    subtitle: 'Guided Excursions'
  },

  // Yoga & Meditation
  {
    src: '/img/WhatsApp Image 2026-08-04 at 12.33.21 PM.jpeg',
    alt: 'Yoga master and guest practicing Virabhadrasana warrior pose on elevated treehouse deck',
    category: 'Yoga & Meditation',
    title: 'Treehouse Deck Yoga',
    subtitle: 'Warrior Asana Practice',
    fit: 'contain'
  },
  {
    src: '/img/WhatsApp Image 2026-08-04 at 12.33.20 PM.jpeg',
    alt: 'Group meditation and yoga session in traditional hall beneath Nataraja artwork',
    category: 'Yoga & Meditation',
    title: 'Meditation Hall Session',
    subtitle: 'Guided Group Practice'
  },
  {
    src: '/img/WhatsApp Image 2026-08-04 at 12.33.22 PM.jpeg',
    alt: 'Guest practicing lotus meditation on hilltop platform overlooking forested valley',
    category: 'Yoga & Meditation',
    title: 'Hilltop Mindful Meditation',
    subtitle: 'Lotus Pose in Nature',
    fit: 'contain'
  },
  {
    src: '/img/091.jpg',
    alt: 'Yoga instructor performing Natarajasana posture on wooden deck under ancient banyan trees',
    category: 'Yoga & Meditation',
    title: 'Banyan Tree Asana',
    subtitle: 'Natarajasana Balance',
    objectPosition: 'object-top'
  },
  {
    src: '/img/yoga.jpg',
    alt: 'Morning yoga practice on deck in nature',
    category: 'Yoga & Meditation',
    title: 'Sunrise Yoga Practice',
    subtitle: 'Pranayama & Asanas'
  },

  // Accommodation
  {
    src: '/img/WhatsApp Image 2026-08-04 at 12.33.18 PM.jpeg',
    alt: 'Garden cottage exterior illuminated with warm lights amidst serene plantation grounds',
    category: 'Accommodation',
    title: 'Garden Cottage Sanctuary',
    subtitle: 'Private Eco-Cottage'
  },
  {
    src: '/img/WhatsApp Image 2026-08-04 at 12.24.54 PM.jpeg',
    alt: 'Paved stone pathway and veranda under traditional tiled roof',
    category: 'Accommodation',
    title: 'Cottage Verandah Walkway',
    subtitle: 'Peaceful Outdoor Spaces'
  },
  {
    src: '/img/028.jpg',
    alt: 'Veranda sitting balcony with white cane chair overlooking tropical greenery',
    category: 'Accommodation',
    title: 'Veranda Balcony View',
    subtitle: 'Private Nature Seating'
  },
  {
    src: '/img/037.jpg',
    alt: 'Modern spacious ensuite bathroom with floral tiled walls and premium vanity',
    category: 'Accommodation',
    title: 'Luxury Suite Bathroom',
    subtitle: 'Ensuite Bath Facilities'
  },
  {
    src: '/img/042.jpg',
    alt: 'Spacious tiled bath chamber with rainfall shower and modern fittings',
    category: 'Accommodation',
    title: 'Spacious Bath Chamber',
    subtitle: 'Private Rejuvenation Room'
  },
  {
    src: '/img/accomodation-facilities.jpg',
    alt: 'Heritage bedroom suite with traditional wooden furniture',
    category: 'Accommodation',
    title: 'Heritage Palace Suite',
    subtitle: 'Luxury Accommodation'
  },
  {
    src: '/img/gardencottage.jpeg',
    alt: 'Secluded garden cottage exterior with lush flora',
    category: 'Accommodation',
    title: 'Garden Cottage Retreat',
    subtitle: 'Private Sanctuary'
  },
  {
    src: '/img/rooms.jpg',
    alt: 'Royal suite bedroom interior with forest views',
    category: 'Accommodation',
    title: 'Royal View Suite',
    subtitle: 'Tranquil Interiors'
  },
  {
    src: '/img/roomwith balcony.jpeg',
    alt: 'Deluxe room opening onto private mountain view balcony',
    category: 'Accommodation',
    title: 'Private Balcony Room',
    subtitle: 'Panoramas of the Hills'
  },

  // Dining & Organic
  {
    src: '/img/WhatsApp Image 2026-08-04 at 12.24.53 PM (1).jpeg',
    alt: 'Authentic Kerala Sattvic vegetarian thali served in traditional copper tableware',
    category: 'Dining & Organic',
    title: 'Traditional Sattvic Thali',
    subtitle: 'Balanced Ayurvedic Meal'
  },
  {
    src: '/img/WhatsApp Image 2026-08-04 at 12.33.19 PM (1).jpeg',
    alt: 'Guest holding fresh organic harvest of nutmeg, cashew apples, and yardlong beans from estate farm',
    category: 'Dining & Organic',
    title: 'Estate Organic Harvest',
    subtitle: 'Farm-Fresh Herbal Produce',
    fit: 'contain'
  },
  {
    src: '/img/045.jpg',
    alt: 'Elegant wooden dining table set with fresh fruits and brass urns in heritage dining room',
    category: 'Dining & Organic',
    title: 'Heritage Dining Space',
    subtitle: 'Private Herbal Dining'
  },
  {
    src: '/img/meals.jpg',
    alt: 'Authentic Kerala Sattvic vegetarian meals served fresh',
    category: 'Dining & Organic',
    title: 'Sattvic Ayurvedic Dining',
    subtitle: 'Pure Herbal Cuisine'
  },
  {
    src: '/img/organic.jpg',
    alt: 'In-house organic farm produce harvest',
    category: 'Dining & Organic',
    title: 'Organic Food & Herb Farm',
    subtitle: 'Farm-To-Table Ingredients'
  }
];


const videos = [
  { title: 'Chamundi Hill Palace Experience', url: 'https://www.youtube.com/watch?v=pfIWKk6vBTQ', thumb: '/img/banner-1.jpg' },
  { title: 'Ayurveda Treatments Showcase', url: 'https://www.youtube.com/shorts/iE9MgpBtz-Q', thumb: '/img/WhatsApp Image 2026-08-04 at 12.33.24 PM.jpeg' },
  { title: 'Mrs. Pilar — Guest Testimonial', url: 'https://www.youtube.com/watch?v=B-5vcic6zl8&t=55s', thumb: '/img/028.jpg' },
  { title: 'Guest Review (German)', url: 'https://youtube.com/shorts/tQDnXW9aqXw?si=NMLxn9Z-vaeKU61n', thumb: '/img/091.jpg' },
];

const facilityGallery = [
  { src: '/img/WhatsApp Image 2026-08-04 at 12.33.24 PM.jpeg', title: 'Authentic Abhyanga Oil Therapy' },
  { src: '/img/WhatsApp Image 2026-08-04 at 12.33.21 PM.jpeg', title: 'Treehouse Outdoor Yoga' },
  { src: '/img/WhatsApp Image 2026-08-04 at 12.24.53 PM (1).jpeg', title: 'Fresh Sattvic Thali Dining' },
  { src: '/img/WhatsApp Image 2026-08-04 at 12.33.22 PM (1).jpeg', title: 'Sunset Mountain View Lounge' },
  { src: '/img/028.jpg', title: 'Serene Balcony Viewpoint Deck' },
  { src: '/img/WhatsApp Image 2026-08-04 at 12.33.18 PM.jpeg', title: 'Garden Cottage Sanctuary' },
  { src: '/img/property1.jpg', title: 'Chamundi Palace Main Estate' },
  { src: '/img/banner-1.jpg', title: 'Panoramic Nadukani Hills' },
  { src: '/img/accomodation-facilities.jpg', title: 'Heritage Palace Suites' },
  { src: '/img/WhatsApp Image 2026-08-04 at 12.33.19 PM (1).jpeg', title: 'Estate Organic Farm Harvest' },
];

export default function GalleryPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref: photoRef, isVisible: photoVis } = useScrollReveal(0.1);
  const { ref: videoRef, isVisible: videoVis } = useScrollReveal(0.1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categoryList = [
    { key: 'All', label: t('galleryPage.categories.all') },
    { key: 'Retreat & Nature', label: t('galleryPage.categories.nature') },
    { key: 'Ayurveda & Wellness', label: t('galleryPage.categories.ayurveda') },
    { key: 'Yoga & Meditation', label: t('galleryPage.categories.yoga') },
    { key: 'Accommodation', label: t('galleryPage.categories.accommodation') },
    { key: 'Dining & Organic', label: t('galleryPage.categories.dining') },
  ];

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevLightbox = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [lightbox, filteredPhotos]);

  const handleNextLightbox = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % filteredPhotos.length);
  }, [lightbox, filteredPhotos]);

  useEffect(() => {
    if (lightbox === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNextLightbox();
      if (e.key === 'ArrowLeft') handlePrevLightbox();
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, handleNextLightbox, handlePrevLightbox]);

  return (
    <>
      <PageHero
        title={t('galleryPage.title')}
        subtitle={t('galleryPage.subtitle')}
        backgroundImage="/img/020.jpg"
        breadcrumb={t('galleryPage.breadcrumb')}
      />

      {/* Featured Carousel */}
      <section className="py-16 bg-surface border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="section-label">{t('galleryPage.highlightsLabel')}</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-2">
              {t('galleryPage.highlightsTitle')}
            </h2>
          </div>

          <div className="relative w-full max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl relative group">
              <img
                src={facilityGallery[currentSlide].src}
                alt={facilityGallery[currentSlide].title}
                className="w-full h-[300px] sm:h-[450px] lg:h-[550px] object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-6 sm:p-10">
                <span className="text-white font-heading text-xl sm:text-2xl font-semibold tracking-wide">
                  {facilityGallery[currentSlide].title}
                </span>
              </div>
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all cursor-pointer z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all cursor-pointer z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {facilityGallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white w-8' : 'bg-white/50 w-2.5'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Photo Gallery */}
      <section className="py-20 sm:py-28 bg-background">
        <div
          ref={photoRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            photoVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-10">
            <span className="section-label">{t('galleryPage.photosLabel')}</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-2">
              {t('galleryPage.photosTitle')}
            </h2>
            <p className="text-text/80 max-w-xl mx-auto mt-3 text-sm sm:text-base">
              {t('galleryPage.photosDesc')}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categoryList.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setLightbox(null);
                  }}
                  className={`px-5 py-2 rounded-full font-body text-xs sm:text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-primary border-primary text-white shadow-md shadow-primary/20 scale-105'
                      : 'bg-white border-border text-text/80 hover:bg-surface hover:text-dark hover:border-accent/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Grid Layout (Uniform responsive columns with no duplicates) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPhotos.map((img, i) => (
              <div
                key={img.src}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-surface border border-border/40 flex flex-col"
                onClick={() => setLightbox(i)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-dark/90 flex items-center justify-center">
                  {img.fit === 'contain' ? (
                    <>
                      <img
                        src={img.src}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 scale-125"
                      />
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="relative z-10 max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out p-1"
                        loading="lazy"
                      />
                    </>
                  ) : (
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={`w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out ${img.objectPosition || 'object-center'}`}
                      loading="lazy"
                    />
                  )}

                  {/* Gradient & Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <div className="w-11 h-11 rounded-full bg-white/90 text-dark flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                      <Plus size={20} />
                    </div>
                  </div>

                  {/* Category tag on image top left */}
                  <span className="absolute top-3 left-3 bg-dark/60 backdrop-blur-md text-white text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full border border-white/10 tracking-wider">
                    {img.category}
                  </span>
                </div>

                {/* Card Title Footer */}
                <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block">
                      {img.subtitle}
                    </span>
                    <h3 className="font-heading font-semibold text-dark text-base mt-0.5 group-hover:text-primary transition-colors">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-surface border-t border-border/40">
        <div
          ref={videoRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            videoVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-14">
            <span className="section-label">{t('galleryPage.videosLabel')}</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-3">
              {t('galleryPage.videosTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {videos.map((v, i) => (
              <a
                key={i}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden aspect-video shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={v.thumb}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark/45 group-hover:bg-dark/30 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play size={22} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-dark/90 to-transparent">
                  <p className="font-body text-xs sm:text-sm font-semibold text-white">
                    {v.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <VideoTestimonials />
      <CTABanner />

      {/* Interactive Lightbox Modal */}
      {lightbox !== null && filteredPhotos[lightbox] && (
        <div
          className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fadeIn"
          onClick={() => setLightbox(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all cursor-pointer z-50"
            aria-label="Close lightbox"
          >
            <X size={26} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevLightbox();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer z-50"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Modal Content */}
          <div
            className="max-w-[92vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[lightbox].src}
              alt={filteredPhotos[lightbox].alt}
              className="max-w-full max-h-[72vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            {/* Caption & Counter */}
            <div className="w-full text-center text-white mt-4 font-body">
              <span className="text-accent text-xs uppercase tracking-wider font-semibold block">
                {filteredPhotos[lightbox].subtitle} • {filteredPhotos[lightbox].category}
              </span>
              <h4 className="font-heading text-lg sm:text-xl font-bold mt-0.5">
                {filteredPhotos[lightbox].title}
              </h4>
              <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
                {filteredPhotos[lightbox].alt}
              </p>
              <div className="mt-2 text-xs text-white/50 font-mono">
                {lightbox + 1} of {filteredPhotos.length}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextLightbox();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer z-50"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
}

