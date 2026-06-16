import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Ayurveda', to: '/ayurveda' },
  { label: 'What We Offer', to: '/what-we-offer' },
  { label: 'Accommodation', to: '/accommodation' },
  { label: 'Yoga Course', to: '/yoga-course' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

const treatmentLinks = [
  { label: 'Panchakarma', to: '/panchakarma' },
  { label: 'Rejuvenation', to: '/ayurveda' },
  { label: 'Stress Relief', to: '/ayurveda' },
  { label: 'Weight Loss', to: '/ayurveda' },
  { label: 'Yoga & Meditation', to: '/yoga-course' },
  { label: 'Guest Feedback', to: '/feedback' },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t-2 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 — Brand */}
          <div className="space-y-5 text-center md:text-left">
            <img src="/img/logo.png" alt="Chamundi Hill Palace Logo" className="h-14 w-auto mx-auto md:mx-0" loading="lazy" />
            <p className="font-body text-sm text-muted leading-relaxed">Authentic Ayurveda in the Hills of Kerala</p>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-muted/30 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-muted/30 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-muted/30 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-lg font-semibold text-white mb-5">Quick Links</h4>
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
            <h4 className="font-heading text-lg font-semibold text-white mb-5">Treatments</h4>
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
            <h4 className="font-heading text-lg font-semibold text-white mb-5">Contact</h4>
            <div className="space-y-3 text-center md:text-left">
              <p className="font-body text-sm text-muted leading-relaxed">Nadukani Hills, Kanjirapally,<br />Kottayam, Kerala – 686512</p>
             <a
  href="tel:+919447870346"
  className="flex items-center justify-center md:justify-start gap-2 font-body text-sm text-muted hover:text-accent transition-colors"
>
  <Phone size={14} />
  +91 94478 70346
</a>

<a
  href="mailto:info@chamundihillpalace.org"
  className="flex items-center justify-center md:justify-start gap-2 font-body text-sm text-muted hover:text-accent transition-colors"
>
  <Mail size={14} />
  info@chamundihillpalace.org
</a>

<a
  href="https://wa.me/9447870346"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center md:justify-start gap-2 font-body text-sm text-muted hover:text-accent transition-colors"
>
  <MessageCircle size={14} />
  WhatsApp
</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2A2118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="font-body text-xs text-muted/60 text-center">
            &copy; 2025 Chamundi Hill Palace Ayurveda Treatment Centre · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
