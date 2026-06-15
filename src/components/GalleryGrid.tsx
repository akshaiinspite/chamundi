import { useScrollReveal } from '../hooks/useScrollReveal';
import { Plus, ArrowRight } from 'lucide-react';

const images = [
  { src: '/img/banner-1.jpg', alt: 'Panoramic view of Chamundi Hill Palace resort' },
  { src: '/img/banner-2.jpg', alt: 'Lush greenery surrounding the heritage palace' },
  { src: '/img/banner-4.jpg', alt: 'Sunset views from Nadukani Hills' },
  { src: '/img/kerala-ayurveda-2.jpg', alt: 'Traditional Ayurvedic treatment session' },
  { src: '/img/accomodation-facilities.jpg', alt: 'Heritage accommodation at Chamundi Hill Palace' },
  { src: '/img/yoga.jpg', alt: 'Yoga practice in the natural Kerala setting' },
];

export default function GalleryGrid() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal(0.1);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">Gallery</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold text-dark mt-3">
            Moments from Chamundi
          </h2>
        </div>

        {/* Masonry Grid */}
        <div
          ref={gridRef}
          className={`columns-2 md:columns-3 gap-3 space-y-3 transition-all duration-700 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative break-inside-avoid overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/30 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <Plus size={20} className="text-dark" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
          >
            View Full Gallery
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
