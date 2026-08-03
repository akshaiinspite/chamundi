import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal(0.15);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

          <div className="overflow-hidden rounded-3xl shadow-xl animate-gentle-float-1">
            <img
              src="/img/saroja-thampi.jpeg"
              alt="Chamundi Hill Palace"
              className="w-full"
            />
          </div>

          {/* Right Content */}
          <div>
            <span className="section-label text-accent font-body">
              {t('about.label')}
            </span>

            <h2 className="font-heading text-4xl mt-4 mb-6 text-white font-semibold">
              {t('about.title')}
            </h2>

            <p className="text-white/80 leading-8 mb-8 font-body">
              {t('about.description')}
            </p>

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
                    {t('about.experienceLabel')}
                  </p>
                  <p className="font-heading text-xl text-white font-semibold">
                    {t('about.experienceValue')}
                  </p>
                </div>
              </div>

              {/* Action Link CTA */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-accent text-white font-semibold transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer border-0"
              >
                {t('about.readStory')}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

          </div>

        </div>

      {/* 📜 Full Story Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-dark/85 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Container */}
          <div className="relative bg-background text-dark w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[32px] shadow-2xl border border-border/40 p-6 sm:p-10 animate-fade-in-up scrollbar-thin">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface text-muted hover:text-dark transition-colors cursor-pointer border-0 bg-transparent"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Title */}
            <div className="text-center mb-8 border-b border-border/45 pb-6">
            <span className="section-label text-accent">{ t('about.modal.label')}</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mt-2">
                {t('about.modal.title')}
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] text-muted mt-2">{t('about.modal.subtitle')}</p>
            </div>

            {/* Modal Body Content */}
            <div className="space-y-6 text-text leading-relaxed font-body text-sm sm:text-base pr-2 text-left">
              <h3 className="font-heading text-2xl font-bold text-primary pt-2">{t('about.modal.royalHeritage')}</h3>
              <p className="first-letter:text-5xl first-letter:font-heading first-letter:font-semibold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                {t('about.modal.p1')}
              </p>
              <p>
                {t('about.modal.p2')}
              </p>

              {/* 📸 Mrs. Saroja Thampi Portrait */}
              <div className="my-6 flex flex-col md:flex-row gap-6 items-center bg-surface/40 p-6 rounded-2xl border border-border/20 max-w-2xl mx-auto">
                <img 
                  src="/img/saroja-thampi.jpeg" 
                  alt="Mrs. Saroja Thampi" 
                  className="w-40 h-48 object-cover object-top rounded-xl shadow-md border border-border/30 shrink-0" 
                />
                <div className="text-center md:text-left">
                  <p className="font-heading text-lg font-bold text-primary">{t('about.modal.founderName')}</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-accent font-semibold mt-1">{t('about.modal.founderTitle')}</p>
                  <p className="text-sm mt-3 text-text/80 leading-relaxed font-body">
                    {t('about.modal.founderDesc')}
                  </p>
                </div>
              </div>

              <p>
                {t('about.modal.p3')}
              </p>

              <h3 className="font-heading text-2xl font-bold text-primary pt-4 border-t border-border/20">{t('about.modal.miracle')}</h3>
              <p>{t('about.modal.p4')}</p>
              <p>{t('about.modal.p5')}</p>
              <p>{t('about.modal.p6')}</p>
              <p>{t('about.modal.p7')}</p>
              <p>{t('about.modal.p8')}</p>
              <p className="italic font-medium text-primary">{t('about.modal.p9')}</p>
              <p>{t('about.modal.p10')}</p>

              <h3 className="font-heading text-2xl font-bold text-primary pt-4 border-t border-border/20">{t('about.modal.legacy')}</h3>
              <p>{t('about.modal.p11')}</p>
              <p>{t('about.modal.p12')}</p>
            </div>
          </div>
        </div>
      )}
        
        {/* Bottom grid sways */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16">
          <Link to='/ayurveda' className="animate-gentle-float-1">
            <div className="group relative overflow-hidden rounded-2xl shadow-md border border-white/5">
              <img src="/img/rejuvenation.jpg" className="w-full h-72 object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-2xl font-heading">{t('about.links.ayurveda')}</h3>
              </div>
            </div>
          </Link>
          
          <Link to={'/what-we-offer'} className="animate-gentle-float-2">
            <div className="group relative overflow-hidden rounded-2xl shadow-md border border-white/5">
              <img src="/img/what we offer.png" alt="What We Offer" className="w-full h-72 object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-2xl font-heading">{t('about.links.whatWeOffer')}</h3>
              </div>
            </div>
          </Link>
          
          <Link to={'/accommodation'} className="animate-gentle-float-3">
            <div className="group relative overflow-hidden rounded-2xl shadow-md border border-white/5">
              <img src="/img/roomwith balcony.jpeg" alt="Accommodation" className="w-full h-72 object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-2xl font-heading">{t('about.links.accommodation')}</h3>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}