import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="about" className="px-4 mb-11 lg:mb-16 mt-8 lg:mt-16">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Wrapper for lg absolute positioning */}
        <div className="relative">
          {/* Image only — stacked on top below lg */}
          <div className="rounded-[28px] lg:rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="/img/banner-2.jpg"
              alt="Chamundi Hill Palace heritage building surrounded by lush Kerala greenery"
              className="w-full h-[360px] sm:h-[480px] lg:h-[830px] object-cover object-[center_30%]"
              loading="lazy"
            />
          </div>

          {/* Card — below image on md/sm, absolute on lg */}
          <div className="relative mt-6 lg:mt-0 lg:absolute lg:inset-x-8 lg:bottom-8 lg:max-w-2xl">
            <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-[28px] lg:rounded-3xl shadow-2xl space-y-6 relative z-10">
              <span className="section-label">Our Story</span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold text-dark leading-tight">
                Nestled in the Hills of Kerala
              </h2>

              <p className="font-body sm:text-lg text-[15px] lg:text-base text-text/80 leading-relaxed">
                Nestled atop the serene Nadukani Hills, Chamundi Hill Palace is a heritage Ayurveda
                resort in Kerala offering authentic Panchakarma and rejuvenation therapies. Surrounded
                by spice plantations, fruit trees, and cool mountain air, our retreat provides a tranquil
                sanctuary where nature itself becomes part of your therapy.
              </p>

              <blockquote className="border-l-3 border-primary pl-6 py-2">
                <p className="font-heading text-xl sm:text-[22px] italic text-primary leading-relaxed">
                  "Nature itself becomes part of your therapy."
                </p>
              </blockquote>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-[#E8E1D4]">
  {/* Experience */}
  <div className="flex items-center gap-4">
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
      <span className="font-heading text-xl text-white font-semibold">
        25+
      </span>
    </div>

    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-text/50">
        Experience
      </p>

      <p className="font-heading text-xl text-primary">
        Years of Healing
      </p>
    </div>
  </div>

  {/* CTA */}
  <a
    href="#treatments"
    onClick={(e) => {
      e.preventDefault();
      document
        .querySelector('#treatments')
        ?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-white font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 group">
    Learn About Us

    <ArrowRight
      size={16}
      className="group-hover:translate-x-1 transition-transform"
    />
  </a>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}