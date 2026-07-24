import { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Plus, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  title: string;
  subtitle: string;
}

const images: GalleryItem[] = [
  { 
    src: '/img/banner-1.jpg', 
    alt: 'Panoramic view of Chamundi Hill Palace retreat', 
    category: 'Views', 
    title: '', 
    subtitle: 'Lush Green Hills' 
  },
  { 
    src: '/img/banner-2.jpg', 
    alt: 'Lush greenery surrounding the heritage palace', 
    category: 'Views', 
    title: 'Heritage Gardens', 
    subtitle: 'Sacred Grove Walkways' 
  },
  { 
    src: '/img/kerala-ayurveda-2.jpg', 
    alt: 'Traditional Ayurvedic treatment session', 
    category: 'Wellness', 
    title: 'Ayurvedic Therapy', 
    subtitle: 'Doctor-guided Healing' 
  },
   { 
    src: '/img/stress-relief.jpg', 
    alt: 'Traditional Ayurvedic treatment session', 
    category: 'Wellness', 
    title: 'Ayurvedic Therapy', 
    subtitle: 'Doctor-guided Healing' 
  },
  { 
    src: '/img/accomodation-facilities.jpg', 
    alt: 'Heritage accommodation at Chamundi Hill Palace', 
    category: 'Rooms', 
    title: 'Palace Suite', 
    subtitle: 'Traditional Architecture' 
  },
  { 
    src: '/img/yoga.jpg', 
    alt: 'Yoga practice in the natural Kerala setting', 
    category: 'Rooms', 
    title: 'Yoga Shala', 
    subtitle: 'Sunrise Meditation' 
  },
   { 
    src: '/img/yogaretreat.jpg', 
    alt: 'Yoga practice in the natural Kerala setting', 
    category: 'Rooms', 
    title: 'Yoga', 
    subtitle: '' 
  },
   { 
    src: '/img/rooms.jpg', 
    alt: 'Yoga practice in the natural Kerala setting', 
    category: 'Rooms', 
    title: 'Palace Suite', 
    subtitle: 'Rooms' 
  },
];

const categories = ['All', 'Views', 'Wellness', 'Rooms'];

export default function GalleryGrid() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal(0.1);
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  // Filter images based on category selection
  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  // Lightbox navigation controls relative to filtered list
  const handlePrev = useCallback(() => {
    if (activePhoto === null) return;
    setActivePhoto((activePhoto - 1 + filteredImages.length) % filteredImages.length);
  }, [activePhoto, filteredImages]);

  const handleNext = useCallback(() => {
    if (activePhoto === null) return;
    setActivePhoto((activePhoto + 1) % filteredImages.length);
  }, [activePhoto, filteredImages]);

  const handleClose = useCallback(() => {
    setActivePhoto(null);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    if (activePhoto === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto, handleNext, handlePrev, handleClose]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      
      {/* Lightbox & Gallery CSS Animations */}
      <style>{`
        @keyframes lightboxFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes lightboxZoom {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-lightbox-fade {
          animation: lightboxFade 0.3s ease-out forwards;
        }
        .animate-lightbox-zoom {
          animation: lightboxZoom 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .gallery-grid-fade-in {
          animation: gridFadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes gridFadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`text-center mb-10 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">Gallery Portfolio</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-dark mt-3">
            Moments from Chamundi
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActivePhoto(null);
                }}
                className={`px-6 py-2 rounded-full font-body text-xs sm:text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-primary border-primary text-white shadow-md shadow-primary/10'
                    : 'bg-white border-border/40 text-text/80 hover:bg-[#F2EDE4] hover:text-dark hover:border-accent/35'
                }`}
              >
                {cat === 'All' ? 'All Photos' : cat === 'Views' ? 'Retreat & Views' : cat === 'Wellness' ? 'Ayurveda & Wellness' : 'Rooms & Yoga'}
              </button>
            );
          })}
        </div>

        {/* Masonry Grid (key={activeCategory} forces re-render on change to re-trigger delays) */}
        <div
          ref={gridRef}
          key={activeCategory}
          className="columns-2 md:columns-3 gap-4 space-y-4 gallery-grid-fade-in"
        >
          {filteredImages.map((img, i) => (
            <div
              key={img.src}
              onClick={() => setActivePhoto(i)}
              className={`group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-700 ease-out ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${i * 80}ms`
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Hover Card Overlay System */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                
                {/* Thin Drawing Border Frame */}
                <div className="absolute inset-3 border border-accent/40 rounded-xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />

                {/* Floating Action Button */}
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 transition-all duration-500 delay-75 w-10 h-10 rounded-full bg-white/95 flex items-center justify-center shadow-lg text-dark hover:bg-accent hover:text-white">
                  <Plus size={18} />
                </div>

                {/* Slide Up Details */}
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 relative z-10">
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-accent font-body">
                    {img.subtitle}
                  </span>
                  <h4 className="text-white text-base sm:text-lg font-heading font-bold mt-0.5 leading-tight">
                    {img.title}
                  </h4>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center mt-14">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-accent transition-colors group"
          >
            View Full Gallery
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* High-Fidelity Lightbox Modal */}
      {activePhoto !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-lightbox-fade select-none"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 cursor-pointer"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Navigation - Left Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Active Image container */}
          <div 
            className="max-w-[90vw] max-h-[80vh] flex flex-col items-center animate-lightbox-zoom"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[activePhoto].src}
              alt={filteredImages[activePhoto].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            {/* Image Details Caption & Counter */}
            <div className="w-full flex items-center justify-between text-white/80 mt-4 text-xs sm:text-sm px-1 font-body">
              <div>
                <span className="font-semibold text-white mr-2">{filteredImages[activePhoto].title}</span>
                <span className="opacity-75">| {filteredImages[activePhoto].alt}</span>
              </div>
              <span className="font-semibold shrink-0 ml-4">
                {activePhoto + 1} / {filteredImages.length}
              </span>
            </div>
          </div>

          {/* Navigation - Right Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

    </section>
  );
}
