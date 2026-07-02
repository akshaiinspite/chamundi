import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="about" className="bg-dark text-white py-20 sm:py-28 px-4 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent rounded-full blur-[140px]" />
      </div>

      <div
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-700 relative z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Wrapper for lg absolute positioning */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Image with gentle floating motion */}
          <div className="overflow-hidden rounded-3xl shadow-xl animate-gentle-float-1">
            <img
              src="/img/banner-2.jpg"
              alt="Chamundi Hill Palace"
              className="w-full h-[550px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <span className="section-label text-accent font-body">
              Our Story
            </span>

            <h2 className="font-heading text-4xl mt-4 mb-6 text-white font-semibold">
              Nestled in the Hills of Kerala
            </h2>

            <p className="text-white/80 leading-8 mb-8 font-body">
              Nestled atop the serene Nadukani Hills, Chamundi Hill Palace is a heritage Ayurveda
              resort in Kerala offering authentic Panchakarma and rejuvenation therapies. Surrounded by spice plantations, fruit trees, and cool mountain air, our retreat provides a tranquil sanctuary where nature itself becomes part of your therapy.
            </p>
            
            <blockquote className="border-l-4 border-accent pl-6 py-2">
              <p className="font-heading text-xl sm:text-[22px] italic text-accent leading-relaxed">
                "Nature itself becomes part of your therapy."
              </p>
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-white/10 mt-8">
              {/* Experience Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shrink-0">
                  <span className="font-heading text-xl text-white font-semibold">
                    25+
                  </span>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                    Experience
                  </p>
                  <p className="font-heading text-xl text-white font-semibold">
                    Years of Healing
                  </p>
                </div>
              </div>

              {/* Action Link CTA */}
              <a
                href="#treatments"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#treatments')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-accent text-white font-semibold transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer"
              >
                Learn About Us
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

          </div>

        </div>
        
        {/* Bottom grid sways */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          <Link to='/ayurveda' className="animate-gentle-float-1">
            <div className="group relative overflow-hidden rounded-2xl shadow-md border border-white/5">
              <img src="/img/rejuvenation.jpg" className="w-full h-72 object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-2xl font-heading">Ayurveda</h3>
              </div>
            </div>
          </Link>
          
          <Link to={'/what-we-offer'} className="animate-gentle-float-2">
            <div className="group relative overflow-hidden rounded-2xl shadow-md border border-white/5">
              <img src="/img/weight-loss.jpg" className="w-full h-72 object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-2xl font-heading">What We Offer</h3>
              </div>
            </div>
          </Link>
          
          <Link to={'/accommodation'} className="animate-gentle-float-3">
            <div className="group relative overflow-hidden rounded-2xl shadow-md border border-white/5">
              <img src="/img/rooms.jpg" className="w-full h-72 object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-2xl font-heading">Accommodation</h3>
              </div>
            </div>
          </Link>
          
          <Link to={'/yoga-course'} className="animate-gentle-float-1">
            <div className="group relative overflow-hidden rounded-2xl shadow-md border border-white/5">
              <img src="/img/yoga.jpg" className="w-full h-72 object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-2xl font-heading">Yoga Course</h3>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}