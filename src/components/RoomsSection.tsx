import { useScrollReveal } from '../hooks/useScrollReveal';
import { Bed, Wifi, Trees, Compass, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface RoomType {
  name: string;
  tag: string;
  image: string;
  description: string;
  amenities: { icon: any; text: string }[];
  size: string;
  view: string;
}



export default function RoomsSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal(0.1);

  const roomTypes: RoomType[] = [
    {
      name: t('rooms.types.standard.name'),
      tag: t('rooms.types.standard.tag'),
      image: '/img/standardroom.jpeg',
      description: t('rooms.types.standard.description'),
      size: t('rooms.types.standard.size'),
      view: t('rooms.types.standard.view'),
      amenities: [
        { icon: Bed, text: t('rooms.types.standard.amenities.0') },
        { icon: Wifi, text: t('rooms.types.standard.amenities.1') },
        { icon: Layers, text: t('rooms.types.standard.amenities.2') },
      ],
    },
    {
      name: t('rooms.types.balcony.name'),
      tag: t('rooms.types.balcony.tag'),
      image: '/img/rooms.jpg',
      description: t('rooms.types.balcony.description'),
      size: t('rooms.types.balcony.size'),
      view: t('rooms.types.balcony.view'),
      amenities: [
        { icon: Bed, text: t('rooms.types.balcony.amenities.0') },
        { icon: Wifi, text: t('rooms.types.balcony.amenities.1') },
        { icon: Compass, text: t('rooms.types.balcony.amenities.2') },
      ],
    },
    {
      name: t('rooms.types.cottage.name'),
      tag: t('rooms.types.cottage.tag'),
      image: '/img/gardencottage.jpeg',
      description: t('rooms.types.cottage.description'),
      size: t('rooms.types.cottage.size'),
      view: t('rooms.types.cottage.view'),
      amenities: [
        { icon: Bed, text: t('rooms.types.cottage.amenities.0') },
        { icon: Trees, text: t('rooms.types.cottage.amenities.1') },
        { icon: Compass, text: t('rooms.types.cottage.amenities.2') },
      ],
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label text-accent font-semibold tracking-widest uppercase text-xs">
            {t('rooms.label')}
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-dark mt-3 mb-6">
            {t('rooms.title')}
          </h2>
          <p className="font-body text-base text-text/85 leading-relaxed">
            {t('rooms.description')}
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] overflow-hidden border border-[#E8E0D1] shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full"
            >
              {/* Image Container with Zoom & Tag */}
              <div className="relative h-64 sm:h-72 overflow-hidden shrink-0">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-primary font-body text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm border border-[#E8E0D1]">
                  {room.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                    {room.name}
                  </h3>
                  
                  {/* Size and View Badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="text-[11px] font-body uppercase tracking-wider text-text/60 bg-surface px-2.5 py-1 rounded-md">
                      {room.size}
                    </span>
                    <span className="text-[11px] font-body uppercase tracking-wider text-text/60 bg-surface px-2.5 py-1 rounded-md">
                      {room.view}
                    </span>
                  </div>

                  <p className="font-body text-sm text-text/75 leading-relaxed mb-6">
                    {room.description}
                  </p>
                </div>

                <div>
                  {/* Amenities List */}
                  <div className="border-t border-[#E8E0D1] pt-5 mb-6">
                    <div className="flex flex-col gap-3">
                      {room.amenities.map((amenity, i) => {
                        const Icon = amenity.icon;
                        return (
                          <div key={i} className="flex items-center gap-3 text-text/70">
                            <Icon size={16} className="text-accent shrink-0" />
                            <span className="text-xs font-body">{amenity.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-surface text-primary hover:bg-primary hover:text-white font-semibold transition-all duration-300 group/btn"
                  >
                    <span className="text-xs uppercase tracking-wider">{t('rooms.enquireNow')}</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
