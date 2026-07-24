import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
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

          {/* Left Image with gentle floating motion */}
          <div className="overflow-hidden rounded-3xl shadow-xl animate-gentle-float-1">
            <img
              src="/img/saroja-thampi.jpg"
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
              The History of Chamundi Hill Palace
            </h2>

            <p className="text-white/80 leading-8 mb-8 font-body">
              Nestled amidst the lush green hills of Kerala, Chamundi Hill Palace Ayurveda Treatment Centre is a sanctuary of peace, healing, and timeless beauty. Perched on a secluded hilltop, the retreat offers an atmosphere where nature, spirituality, and wellness exist in perfect harmony, reflecting a legacy of faith, resilience, and authentic Ayurvedic care.
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
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-accent text-white font-semibold transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer border-0"
              >
                Read Our Story
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
              <span className="section-label text-accent">Our Heritage</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mt-2">
                The History of Chamundi Hill Palace
              </h2>
              <p className="text-xs uppercase tracking-[0.2em] text-muted mt-2">Ayurveda Treatment Centre</p>
            </div>

            {/* Modal Body Content */}
            <div className="space-y-6 text-text leading-relaxed font-body text-sm sm:text-base pr-2 text-left">
              <p className="first-letter:text-5xl first-letter:font-heading first-letter:font-semibold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Nestled amidst the lush green hills of Kerala, Chamundi Hill Palace Ayurveda Treatment Centre is a sanctuary of peace, healing, and timeless beauty. Perched on a secluded hilltop overlooking fertile valleys, the retreat offers an atmosphere where nature, spirituality, and wellness exist in perfect harmony. Visitors are often captivated by the serenity of this hidden gem, where the sounds of temple conches, church bells, and the call to prayer blend together, reflecting the remarkable harmony among different faiths and communities that have coexisted here for generations.
              </p>

              <h3 className="font-heading text-2xl font-bold text-primary pt-4 border-t border-border/20">A Royal Heritage</h3>
              <p>
                The magnificent palace was originally built over 85 years ago by Mr. G N Thampi and his brother. At that time, the hill stood nearly twenty feet higher than it does today. Through the tireless efforts of local workers, the hill was carefully levelled, and a road was carved through solid rock entirely by hand, making this remarkable estate accessible while preserving its natural surroundings.
              </p>
              <p>
                In 1963, Mrs. Saroja Thampi arrived at Chamundi Hill Palace as the young bride of Mr. C. G. Thampi, son of Sri. G N Thampi. From the moment she entered the estate, she fell in love with its breathtaking landscapes, changing seasons, and peaceful atmosphere. Each season painted the hills with new colours and fresh life, deepening her affection for this extraordinary place.
              </p>

              {/* 📸 Mrs. Saroja Thampi Portrait */}
              <div className="my-6 flex flex-col md:flex-row gap-6 items-center bg-surface/40 p-6 rounded-2xl border border-border/20 max-w-2xl mx-auto">
                <img 
                  src="/img/saroja-thampi.jpg" 
                  alt="Mrs. Saroja Thampi" 
                  className="w-40 h-48 object-cover rounded-xl shadow-md border border-border/30 shrink-0" 
                />
                <div className="text-center md:text-left">
                  <p className="font-heading text-lg font-bold text-primary">Mrs. Saroja Thampi</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-accent font-semibold mt-1">Founder & Visionary</p>
                  <p className="text-sm mt-3 text-text/80 leading-relaxed font-body">
                    Whose life-changing recovery through Ayurveda and unwavering faith inspired the transformation of her ancestral palace into a sanctuary of healing for guests worldwide.
                  </p>
                </div>
              </div>

              <p>
                Over the years, Mrs. Thampi nurtured a dream—that the beauty, tranquillity, and positive energy of Chamundi Hill Palace should not remain a privilege for her family alone but should be shared with people from around the world seeking peace, healing, and renewal.
              </p>

              <h3 className="font-heading text-2xl font-bold text-primary pt-4 border-t border-border/20">A Life-Changing Miracle</h3>
              <p>
                In 1989, Mrs. Saroja Thampi faced the greatest challenge of her life. She suffered severe kidney failure that left her partially paralysed. Medical specialists gave little hope for her recovery and believed she had only a short time to live.
              </p>
              <p>
                Yet, what followed was nothing short of extraordinary. Without further medical intervention, her kidney function gradually returned, and with the help of Ayurvedic treatment, she regained her strength and resumed an active life within a few months. For Mrs. Thampi, this remarkable recovery was both the result of Ayurvedic treatment and divine blessing of Goddess Chamundi.
              </p>
              <p>
                The Thampi family has always been devoted to Goddess Chamundi, their family deity, who symbolises strength, protection, and compassion. Mrs. Thampi firmly believed that her recovery was a miracle granted through the blessings of the Goddess, together with the healing power of Ayurveda.
              </p>
              <p>
                Soon after her recovery, she experienced a vivid dream in which Goddess Chamundi guided her to transform her ancestral home into a traditional Ayurvedic healing centre. The vision was clear—to create a place where authentic Ayurveda, compassionate care, and the healing power of nature would come together to restore health and wellbeing. The Goddess also inspired the name Chamundi Hill Palace.
              </p>
              <p>
                Although Mrs. Thampi had lived the life of a traditional homemaker and had no experience in architecture, construction, or hospitality, she accepted this divine mission with unwavering faith. Supported by her husband and inspired by her vision, she assembled a team of experienced Ayurvedic physicians, therapists, and dedicated staff. Authentic treatment rooms were established, an herbal pharmacy was created, and every aspect of the retreat was thoughtfully designed to provide genuine Ayurvedic healing.
              </p>
              <p className="italic font-medium text-primary">
                Remarkably, within just few months, her vision became a reality.
              </p>
              <p>
                Tragically her husband Mr. C. G. Thampi passed away only a year later. Despite this profound personal loss, Mrs. Thampi found the strength to continue her mission, believing that the blessings of Goddess Chamundi would guide and protect the retreat for generations to come.
              </p>

              <h3 className="font-heading text-2xl font-bold text-primary pt-4 border-t border-border/20">A Legacy of Healing</h3>
              <p>
                Today, Chamundi Hill Palace Ayurveda Treatment Centre stands as a symbol of faith, resilience, and authentic Ayurvedic healing. For over 25 years, the centre has welcomed guests from across the globe, offering personalised Ayurvedic treatments, Panchakarma therapies, yoga, meditation, nutritious Ayurvedic cuisine, and heartfelt hospitality in a serene natural environment.
              </p>
              <p>
                What began as a miraculous journey of personal healing has grown into a destination where thousands of guests have experienced transformation, wellness, and inner peace. Every corner of Chamundi Hill Palace reflects the vision of Mrs. Saroja Thampi—to share the healing power of Ayurveda and the tranquillity of this sacred hill with all who seek health, balance, and renewal.
              </p>
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
                <h3 className="text-white text-2xl font-heading">Ayurveda</h3>
              </div>
            </div>
          </Link>
          
          <Link to={'/what-we-offer'} className="animate-gentle-float-2">
            <div className="group relative overflow-hidden rounded-2xl shadow-md border border-white/5">
              <img src="/img/yogaretreat.jpg" className="w-full h-72 object-cover transition duration-500 group-hover:scale-110" />
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
        </div>

      </div>
    </section>
  );
}