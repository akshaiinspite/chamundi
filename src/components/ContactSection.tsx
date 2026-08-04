import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, Phone, Mail, MessageCircle, Leaf, Loader2 } from 'lucide-react';
import SocialLinks from './SocialLinks';
import LeadershipSection from './LeadershipSection';

export default function ContactSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal(0.1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', treatment: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', treatment: '', message: '' });
      }, 3000);
    }, 1500);
  };

  return (
    <>
    <section id="contact" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Encapsulated animations block */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(6deg); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-6deg); }
        }
        @keyframes pinBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes phoneWiggle {
          0%, 100% { transform: rotate(0); }
          25% { transform: rotate(-12deg); }
          75% { transform: rotate(12deg); }
        }
        @keyframes mailPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-float-slow {
          animation: floatSlow 7s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatDelayed 6s ease-in-out infinite 1.2s;
        }
        .group:hover .animate-hover-pin {
          animation: pinBounce 0.8s ease-in-out infinite;
        }
        .group:hover .animate-hover-phone {
          animation: phoneWiggle 0.6s ease-in-out infinite;
        }
        .group:hover .animate-hover-mail {
          animation: mailPulse 0.8s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative floating leaves in the background */}
      <div className="absolute top-1/4 right-10 text-primary/5 animate-float-slow pointer-events-none select-none hidden lg:block">
        <Leaf size={140} strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-1/4 left-10 text-accent/5 animate-float-delayed pointer-events-none select-none hidden lg:block">
        <Leaf size={120} strokeWidth={0.5} />
      </div>

      {/* Ambient background light glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 select-none z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-3xl" />
      </div>

      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="section-label">{t('contactSection.label')}</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold text-dark mt-3">{t('contactSection.title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Interactive Form */}
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-8 bg-white/40 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-border/50 shadow-md">
            
            {/* Full Name */}
            <div className="relative group">
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="w-full bg-transparent border-b-2 border-border/50 focus:border-primary px-0 py-3 font-body text-text outline-none transition-all duration-300 peer placeholder-transparent"
                placeholder={t('contactSection.name')}
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 top-3 font-body text-xs font-semibold text-muted uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:text-text/40 peer-placeholder-shown:top-3.5 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold"
              >
                {t('contactSection.name')}
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-1/2 peer-focus:w-full transition-all duration-500" />
            </div>

            {/* Email Address */}
            <div className="relative group">
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="w-full bg-transparent border-b-2 border-border/50 focus:border-primary px-0 py-3 font-body text-text outline-none transition-all duration-300 peer placeholder-transparent"
                placeholder={t('contactSection.email')}
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-3 font-body text-xs font-semibold text-muted uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:text-text/40 peer-placeholder-shown:top-3.5 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold"
              >
                {t('contactSection.email')}
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-1/2 peer-focus:w-full transition-all duration-500" />
            </div>

            {/* Phone Number */}
            <div className="relative group">
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full bg-transparent border-b-2 border-border/50 focus:border-primary px-0 py-3 font-body text-text outline-none transition-all duration-300 peer placeholder-transparent"
                placeholder={t('contactSection.phone')}
              />
              <label 
                htmlFor="phone" 
                className="absolute left-0 top-3 font-body text-xs font-semibold text-muted uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:text-text/40 peer-placeholder-shown:top-3.5 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold"
              >
                {t('contactSection.phone')}
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-1/2 peer-focus:w-full transition-all duration-500" />
            </div>

            {/* Treatment dropdown */}
            <div className="relative group">
              <label htmlFor="treatment" className="block font-body text-xs font-semibold text-muted uppercase tracking-wider mb-1">{t('contactSection.treatment')}</label>
              <select id="treatment" name="treatment" value={formData.treatment} onChange={handleChange} className="w-full bg-transparent border-b-2 border-border/50 focus:border-primary px-0 py-3 font-body text-text outline-none transition-all duration-300 cursor-pointer">
                <option value="">{t('contactSection.treatment')}</option>
                <option value="panchakarma">{t('nav.panchakarma')}</option>
                <option value="rejuvenation">{t('nav.rejuvenation')}</option>
                <option value="stress-relief">{t('nav.stressRelief')}</option>
                <option value="weight-loss">{t('nav.weightLoss')}</option>
                <option value="yoga">{t('nav.yogaMeditation')}</option>
              </select>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-1/2 focus-within:w-full transition-all duration-500" />
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows={4} 
                className="w-full bg-transparent border-b-2 border-border/50 focus:border-primary px-0 py-3 font-body text-text outline-none transition-all duration-300 peer placeholder-transparent resize-none"
                placeholder={t('contactSection.message')}
              />
              <label 
                htmlFor="message" 
                className="absolute left-0 top-3 font-body text-xs font-semibold text-muted uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:text-text/40 peer-placeholder-shown:top-3.5 peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold"
              >
                {t('contactSection.message')}
              </label>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-1/2 peer-focus:w-full transition-all duration-500" />
            </div>

            {/* Dynamic Submit Button */}
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className={`font-body text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer select-none ${
                status === 'success' 
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/20 hover:scale-105' 
                  : 'bg-primary hover:bg-primary/95 text-white hover:shadow-lg hover:shadow-primary/20 hover:scale-105 disabled:bg-primary/50 disabled:scale-100 disabled:cursor-not-allowed'
              }`}
            >
              {status === 'sending' && <Loader2 size={16} className="animate-spin" />}
              {status === 'sending' ? t('contactSection.sending') : status === 'success' ? t('contactSection.success') : t('contactSection.submit')}
            </button>
          </form>

          {/* Contact Details & Map Card */}
          <div className="space-y-8">
            <div className="space-y-6 bg-white/40 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-border/50 shadow-md">
              <h3 className="font-heading text-2xl font-semibold text-dark leading-snug">Chamundi Hill Palace Ayurveda Centre</h3>
              
              <div className="space-y-5">
                {/* Address Group */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <MapPin size={18} className="animate-hover-pin" />
                  </div>
                  <p className="font-body text-sm text-text/80 leading-relaxed pt-1.5">
                    Rajkumar Estate, Nadukani, Edakkunnam P.O.,<br />Kanjirapally, Kottayam, Kerala – 686512
                  </p>
                </div>

                {/* Phone Group */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Phone size={18} className="animate-hover-phone" />
                  </div>
                  <a href="tel:+919447870346" className="font-body text-sm text-text/80 hover:text-primary transition-colors font-semibold">
                    +91 94478 70346
                  </a>
                </div>

                {/* Mail Group */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Mail size={18} className="animate-hover-mail" />
                  </div>
                  <a href="mailto:info@chamundihillpalace.org" className="font-body text-sm text-text/80 hover:text-primary transition-colors font-semibold">
                    info@chamundihillpalace.org
                  </a>
                </div>
              </div>

              {/* Chat Button & Social Links */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <a 
                  href="https://wa.me/9447870346" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-body text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 group overflow-hidden"
                >
                  <MessageCircle size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                  {t('contactSection.whatsappTitle')}
                </a>

                <SocialLinks title="Stay Connected with Chamundi" dark={false} />
              </div>
            </div>

            {/* Map Area with locator animation overlays */}
            <div className="rounded-3xl overflow-hidden border border-border/50 shadow-md relative group h-[300px]">
              {/* Radar pulse effect centered on Map Location */}
              <div className="absolute top-[53%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-accent/40 pointer-events-none z-10 animate-ping opacity-60" />
              <div className="absolute top-[53%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-accent pointer-events-none z-10 shadow-lg shadow-accent/50 animate-pulse border-2 border-white" />
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.8!2d76.78!3d9.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07c5d9e7f12345%3A0xabcdef!2sChamundi+Hill+Palace!5e0!3m2!1sen!2sin!4v1609459200000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Chamundi Hill Palace location on Google Maps" 
                className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

          </div>
        </div>
      </div>
    </section>

    {/* Leadership & Owners Showcase */}
    <LeadershipSection />
    </>
  );
}
