import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';


interface TreatmentBlock {
  image: string;
  imageAlt: string;
  tag: string;
  title: string;
  body: string;
  cta: string;
  ctaHref: string;
  imageRight: boolean;
  number: string;
  subtitle: string;
}

const treatments: TreatmentBlock[] = [
  {
    image: '/img/yoga.jpg',
    imageAlt: 'Yoga session at sunrise in the Kerala hills at Chamundi Hill Palace',
    tag: 'Daily Sessions',
    title: 'Yoga Retreat in Kerala',
    body: 'Yoga is integral to every wellness program at Chamundi. Each day begins and ends with guided yoga sessions tailored by experienced instructors. Guests can join our immersive Yoga Course covering asanas, pranayama, and meditation.',
    cta: 'View Yoga Courses',
    number: '50+',
    subtitle: 'Countries Welcomed',
    ctaHref: '/yoga-course',
    imageRight: false,
  },
  {
    image: '/img/accomodation-facilities.jpg',
    imageAlt: 'Heritage accommodation rooms with hillside views at Chamundi Hill Palace',
    tag: 'Heritage Rooms & Cottages',
    title: 'Stay at Chamundi Hill Palace',
    body: 'Spacious ensuite rooms offer fresh air, natural light, and stunning hillside views. Choose the heritage palace or garden cottages — each blending traditional Kerala architecture with modern amenities. Every detail supports deep rest and rejuvenation.',
    cta: 'View Accommodation',
    number: '98%',
    subtitle: 'Guests Who Return',
    ctaHref: '/accommodation',
    imageRight: true,
  },
];

function TreatmentRow({
  treatment,
  index,
}: {
  treatment: TreatmentBlock;
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <>
     <section
      ref={ref}
      id={index === 2 ? "accommodation" : index === 1 ? "yoga" : undefined}
      className={`px-4 relative lg:min-h-[700px] mb-11 mt-20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Background Image */}
      <div className="hidden lg:block absolute inset-y-6 left-[137px] right-[137px] rounded-[40px] overflow-hidden">
        <img
          src={treatment.image}
          alt={treatment.imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30 rounded-[32px] lg:rounded-[40px]" />
      </div>
      {/* medium screen  */}
      <div className="lg:hidden mb-6">
        <div className="rounded-[28px] overflow-hidden">
          <img
            src={treatment.image}
            alt={treatment.imageAlt}
            className="w-full h-[320px] sm:h-[420px] object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-0 lg:px-8 pb-6 lg:pb-0 lg:flex lg:items-center lg:min-h-[700px]">
        <div
          className={`w-full lg:max-w-xl ${treatment.imageRight ? "lg:ml-auto" : "lg:mr-auto"}`}
        >
          <div className="bg-white lg:bg-black/40 lg:backdrop-blur-md border border-[#E8E1D4] lg:border-white/10 p-6 sm:p-8 lg:p-12 rounded-[28px] lg:rounded-3xl shadow-xl lg:shadow-2xl max-w-full lg:max-w-none mx-auto">
            <span className="inline-block bg-accent/15 text-accent font-body text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              {treatment.tag}
            </span>

            <h3 className="font-heading text-[32px] sm:text-3xl lg:text-[36px] font-semibold text-dark lg:text-white leading-tight mb-5">
              {treatment.title}
            </h3>

            <p className="font-body text-[15px] lg:text-base text-text/80 lg:text-white/80 leading-8 mb-8">
              {treatment.body}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-[#E8E1D4] lg:border-white/10">
              {/* Experience */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                  <span className="font-heading text-xl text-white font-semibold">
                    {treatment.number}
                  </span>
                </div>

                <div>
                  <p className="font-heading text-xl text-primary lg:text-white">
                    {treatment.subtitle}
                  </p>
                </div>
              </div>

              {/* CTA */}
              {treatment.ctaHref.startsWith('#') ? (
                <a
                  href={treatment.ctaHref}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(treatment.ctaHref)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary lg:text-accent hover:text-primary/80 lg:hover:text-accent/80 transition-colors group"
                >
                  {treatment.cta}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              ) : (
                <Link
                  to={treatment.ctaHref}
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary lg:text-accent hover:text-primary/80 lg:hover:text-accent/80 transition-colors group"
                >
                  {treatment.cta}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>

   
  );
}

export default function TreatmentBlocks() {
  return (
    <section id="treatments">
      {treatments.map((treatment, i) => (
        <TreatmentRow key={treatment.title} treatment={treatment} index={i} />
      ))}
    </section>
  );
}
