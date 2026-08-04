import { useState, useEffect } from 'react';
import PageHero from '../components/PageHero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';
import LeadershipSection from '../components/LeadershipSection';
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal(0.1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', treatment: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#contact-form' || window.location.hash === '#contact') {
      setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 200);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = "w-full bg-transparent border-b-2 border-border focus:border-primary px-0 py-3 font-body text-text outline-none transition-colors";

  return (
    <>
      <PageHero
        title={t('contactPage.title')}
        subtitle={t('contactPage.subtitle')}
        backgroundImage="/img/banner-1.jpg"
        breadcrumb={t('contactPage.breadcrumb')}
      />

      <section className="py-20 sm:py-28 bg-background">
        <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="section-label">{t('contactPage.getInTouch')}</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark mt-3">{t('contactPage.connectTitle')}</h2>
            <p className="font-body text-base text-text/70 mt-4 max-w-2xl mx-auto">
              {t('contactPage.connectDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div>
              <h3 className="font-heading text-2xl font-semibold text-dark mb-8">{t('contactPage.quickContact')}</h3>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block font-body text-xs font-semibold text-muted uppercase tracking-wider mb-2">{t('contactPage.fullName')}</label>
                  <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder={t('contactPage.namePlaceholder')} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-body text-xs font-semibold text-muted uppercase tracking-wider mb-2">{t('contactPage.emailAddress')}</label>
                  <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block font-body text-xs font-semibold text-muted uppercase tracking-wider mb-2">{t('contactPage.phone')}</label>
                  <input type="tel" id="contact-phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label htmlFor="contact-treatment" className="block font-body text-xs font-semibold text-muted uppercase tracking-wider mb-2">{t('contactPage.interest')}</label>
                  <select id="contact-treatment" name="treatment" value={formData.treatment} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                    <option value="">{t('contactPage.selectTreatment')}</option>
                    <option value="panchakarma">Panchakarma</option>
                    <option value="rejuvenation">Rejuvenation</option>
                    <option value="stress-relief">Stress Relief</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="yoga">Yoga Course</option>
                    <option value="general">{t('contactPage.generalEnquiry')}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block font-body text-xs font-semibold text-muted uppercase tracking-wider mb-2">{t('contactPage.message')}</label>
                  <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} rows={4} className={`${inputClass} resize-none`} placeholder={t('contactPage.msgPlaceholder')} />
                </div>
                <button type="submit" className={`font-body text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300 ${submitted ? 'bg-primary/80 text-white' : 'bg-primary hover:bg-primary/90 text-white hover:shadow-lg hover:shadow-primary/25'}`}>
                  {submitted ? t('contactPage.sent') : t('contactPage.send')}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-dark mb-6">{t('contactPage.centerTitle')}</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4 bg-surface rounded-xl p-5">
                    <MapPin size={20} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body text-xs font-semibold text-muted uppercase tracking-wider mb-1">{t('contactPage.addressLabel')}</p>
                      <p className="font-body text-sm text-text/80 leading-relaxed">Rajkumar Estate, Nadukani, Edakkunnam P.O.,<br />Kanjirapally, Kottayam, Kerala – 686512</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-surface rounded-xl p-5">
                    <Phone size={20} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body text-xs font-semibold text-muted uppercase tracking-wider mb-1">{t('contactPage.phoneLabel')}</p>
                      <a href="tel:+919447870346" className="font-body text-sm text-text/80 hover:text-primary transition-colors">+91 94478 70346</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-surface rounded-xl p-5">
                    <Mail size={20} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body text-xs font-semibold text-muted uppercase tracking-wider mb-1">{t('contactPage.emailLabel')}</p>
                      <a href="mailto:info@chamundihillpalace.org" className="font-body text-sm text-text/80 hover:text-primary transition-colors">info@chamundihillpalace.org</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-surface rounded-xl p-5">
                    <Clock size={20} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body text-xs font-semibold text-muted uppercase tracking-wider mb-1">{t('contactPage.availabilityLabel')}</p>
                      <p className="font-body text-sm text-text/80">{t('contactPage.openYearRound')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-surface rounded-xl p-5">
                    <Globe size={20} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-body text-xs font-semibold text-muted uppercase tracking-wider mb-1">{t('contactPage.websiteLabel')}</p>
                      <a href="https://chamundihillpalace.org" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-text/80 hover:text-primary transition-colors">chamundihillpalace.org</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp & Social Media */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <a href="https://wa.me/9447870346" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-body text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg">
                  <MessageCircle size={18} />
                  {t('contactPage.chatWhatsapp')}
                </a>

                <SocialLinks title="Stay Connected with Chamundi" dark={false} />
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.8!2d76.78!3d9.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07c5d9e7f12345%3A0xabcdef!2sChamundi+Hill+Palace!5e0!3m2!1sen!2sin!4v1609459200000!5m2!1sen!2sin" width="100%" height="280" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Chamundi Hill Palace location on Google Maps" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Owners Section */}
      <LeadershipSection />
    </>
  );
}
