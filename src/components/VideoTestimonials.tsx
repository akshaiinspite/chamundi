import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const videoTestimonials = [
  { title: 'Ayurveda Experience', url: 'https://www.youtube.com/watch?v=pfIWKk6vBTQ', thumb: '/img/banner-1.jpg' },
  { title: 'Ayurveda Treatments', url: 'https://www.youtube.com/shorts/iE9MgpBtz-Q', thumb: '/img/banner-2.jpg' },
  { title: 'Mrs. Pilar — Panchakarma', url: 'https://www.youtube.com/watch?v=B-5vcic6zl8&t=55s', thumb: '/img/banner-3.jpg' },
  { title: 'Guest Review (German)', url: 'https://youtube.com/shorts/tQDnXW9aqXw?si=NMLxn9Z-vaeKU61n', thumb: '/img/banner-4.jpg' },
];

interface TextTestimonial {
  quote: string;
  name: string;
  location?: string;
  date?: string;
}

export default function VideoTestimonials() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal(0.1);

  const rawTextTestimonials = t('testimonialsList', { returnObjects: true });
  const textTestimonials: TextTestimonial[] = Array.isArray(rawTextTestimonials) ? rawTextTestimonials : [];

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16">
          <span className="section-label">{t('videoTestimonialsComponent.label')}</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold text-dark mt-3">
            {t('videoTestimonialsComponent.title')}
          </h2>
        </div>

        {/* Video Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {videoTestimonials.map((v, i) => (
            <a
              key={i}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-video"
            >
              <img src={v.thumb} alt={v.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/30 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={20} className="text-white ml-0.5" fill="white" />
                </div>
              </div>
              <p className="absolute bottom-3 left-3 right-3 font-body text-xs font-semibold text-white">{v.title}</p>
            </a>
          ))}
        </div>

        {/* Text Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {textTestimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-sm text-text/80 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-heading text-base font-semibold text-dark">{t.name}</p>
                <p className="font-body text-xs text-muted">{t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
