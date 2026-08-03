import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Plane, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t('footer.links.home'), to: '/' },
    { label: t('footer.links.ayurveda'), to: '/ayurveda' },
    { label: t('footer.links.whatWeOffer'), to: '/what-we-offer' },
    { label: t('footer.links.accommodation'), to: '/accommodation' },
    { label: t('footer.links.yogaCourse'), to: '/yoga-course' },
    { label: t('footer.links.gallery'), to: '/gallery' },
    { label: t('footer.links.contact'), to: '/contact' },
  ];

  const treatmentLinks = [
    { label: t('footer.treatments_links.panchakarma'), to: '/panchakarma' },
    { label: t('footer.treatments_links.rejuvenation'), to: '/ayurveda' },
    { label: t('footer.treatments_links.stressRelief'), to: '/ayurveda' },
    { label: t('footer.treatments_links.weightLoss'), to: '/ayurveda' },
    { label: t('footer.treatments_links.yogaMeditation'), to: '/yoga-course' },
    { label: t('footer.treatments_links.guestFeedback'), to: '/feedback' },
  ];

  return (
    <footer className="bg-dark border-t-2 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 — Brand & Social */}
          <div className="space-y-5 text-center md:text-left">
            <img src="/img/logo.png" alt="Chamundi Hill Palace Logo" className="h-14 w-auto mx-auto md:mx-0" loading="lazy" />
            <p className="font-body text-sm text-muted leading-relaxed">{t('footer.tagline')}</p>

            <div className="pt-2 flex justify-center md:justify-start">
              <SocialLinks title="Stay Connected with Chamundi" dark={true} />
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-lg font-semibold text-white mb-5">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-body text-sm text-muted hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Treatments */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-lg font-semibold text-white mb-5">{t('footer.treatments')}</h4>
            <ul className="space-y-2.5">
              {treatmentLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-body text-sm text-muted hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-lg font-semibold text-white mb-5">{t('footer.contact')}</h4>
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-start justify-center md:justify-start gap-2">
                <MapPin size={14} className="text-muted shrink-0 mt-0.5" />
                <p className="font-body text-sm text-muted leading-relaxed">Nadukani Hills, Kanjirapally,<br />Kottayam, Kerala – 686512</p>
              </div>

              <a href="tel:+919447870346" className="flex items-center justify-center md:justify-start gap-2 font-body text-sm text-muted hover:text-accent transition-colors">
                <Phone size={14} />
                +91 94478 70346
              </a>

              <a href="mailto:info@chamundihillpalace.org" className="flex items-center justify-center md:justify-start gap-2 font-body text-sm text-muted hover:text-accent transition-colors">
                <Mail size={14} />
                info@chamundihillpalace.org
              </a>

              <a href="https://wa.me/9447870346" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 font-body text-sm text-muted hover:text-accent transition-colors">
                <MessageCircle size={14} />
                WhatsApp
              </a>

              {/* Airport Notice */}
              <div className="flex items-center justify-center md:justify-start gap-2 pt-1 text-accent/80 border-t border-white/5 mt-2">
                <Plane size={14} className="text-accent shrink-0" />
                <span className="font-body text-xs font-medium">Nearest to Cochin International Airport (COK)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2A2118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="font-body text-xs text-muted/60 text-center">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
