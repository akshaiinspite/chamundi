import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧', short: 'EN' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', short: 'FR' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', short: 'DE' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const langRef = useRef<HTMLDivElement>(null);
  const isHome = location.pathname === '/';
  const isScrolled = scrollY > 50;
  const showSolid = isScrolled || !isHome;

  const currentLang = languages.find(l => l.code === i18n.language) ?? languages[0];

  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.ayurveda'), href: '/ayurveda' },
    { label: t('nav.whatWeOffer'), href: '/what-we-offer' },
    { label: t('nav.accommodation'), href: '/accommodation' },
    { label: t('nav.feedback'), href: '/feedback' },
    { label: t('nav.gallery'), href: '/gallery' },
    { label: t('nav.yogaCourse'), href: '/yoga-course' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === '/contact') {
      const el = document.getElementById('contact-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      navigate('/contact#contact-form');
      setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 250);
    }
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLangChange = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/img/logo.png"
              alt="Chamundi Hill Palace Logo"
              className="h-12 w-auto"
              loading="lazy"
            />
            <span
              className={`font-heading text-xl font-semibold hidden sm:block transition-colors duration-300 ${
                showSolid ? 'text-dark' : 'text-white'
              }`}
            >
              Chamundi Hill Palace
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body text-[13px] font-medium transition-all duration-300 relative pb-1 ${
                  showSolid ? 'text-text hover:text-primary' : 'text-white/90 hover:text-white'
                } ${
                  location.pathname === link.href
                    ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Book Now */}
            <Link
              to="/contact#contact-form"
              onClick={handleBookNow}
              className="bg-accent hover:bg-accent/90 text-white font-body text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              {t('nav.bookNow')}
            </Link>

            {/* Language Switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(prev => !prev)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full border transition-all duration-300 font-body text-xs font-semibold cursor-pointer ${
                  showSolid
                    ? 'border-border text-text hover:border-primary hover:text-primary bg-background'
                    : 'border-white/30 text-white hover:border-white hover:bg-white/10'
                } ${langOpen ? (showSolid ? 'border-primary text-primary' : 'border-white bg-white/10') : ''}`}
                aria-label="Select language"
                aria-expanded={langOpen}
              >
                <Globe size={14} />
                <span>{currentLang.flag}</span>
                <span>{currentLang.short}</span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Panel */}
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-background border border-border rounded-2xl shadow-xl shadow-dark/10 overflow-hidden z-50 animate-in">
                  <div className="p-1.5 flex flex-col gap-0.5">
                    {languages.map((lang) => {
                      const isActive = i18n.language === lang.code;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => handleLangChange(lang.code)}
                          className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer font-body text-sm ${
                            isActive
                              ? 'bg-primary/10 text-primary font-semibold'
                              : 'text-text hover:bg-surface hover:text-dark'
                          }`}
                        >
                          <span className="text-lg leading-none">{lang.flag}</span>
                          <div className="flex-1">
                            <span className="block font-semibold text-[13px]">{lang.label}</span>
                          </div>
                          {isActive && (
                            <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showSolid ? 'text-dark hover:bg-surface' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          mobileOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-background/98 backdrop-blur-xl border-t border-border px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block px-4 py-3 rounded-xl font-body text-sm font-medium transition-all duration-200 ${
                location.pathname === link.href
                  ? 'bg-primary/10 text-primary border-l-3 border-primary'
                  : 'text-text hover:bg-surface hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 px-4">
            <Link
              to="/contact#contact-form"
              onClick={handleBookNow}
              className="block w-full text-center bg-accent hover:bg-accent/90 text-white font-body text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              {t('nav.bookNow')}
            </Link>
          </div>

          {/* Mobile Language Switcher */}
          <div className="pt-3 px-4">
            <p className="text-text/60 font-body text-xs font-semibold uppercase tracking-widest mb-2 flex items-center gap-2">
              <Globe size={12} /> Language
            </p>
            <div className="flex gap-2">
              {languages.map((lang) => {
                const isActive = i18n.language === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleLangChange(lang.code)}
                    className={`flex-1 flex flex-col items-center gap-1 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer font-body text-xs font-semibold ${
                      isActive
                        ? 'bg-primary/10 border-primary text-primary'
                        : 'bg-surface border-border text-text hover:border-accent/40'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.short}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
