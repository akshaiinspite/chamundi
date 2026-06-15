import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Ayurveda', href: '/ayurveda' },
  { label: 'What We Offer', href: '/what-we-offer' },
  { label: 'Accommodation', href: '/accommodation' },
  { label: 'Feedback', href: '/feedback' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Yoga Course', href: '/yoga-course' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isScrolled = scrollY > 50;
  const showSolid = isScrolled || !isHome;

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
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent/90 text-white font-body text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              Book Now
            </Link>
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
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
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
              to="/contact"
              className="block w-full text-center bg-accent hover:bg-accent/90 text-white font-body text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
