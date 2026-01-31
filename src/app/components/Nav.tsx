import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useReservationForm } from '@/app/context/ReservationFormContext';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { openForm } = useReservationForm();

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = transparent
    ? 'text-white/90 hover:text-white'
    : 'text-stone-600 hover:text-emerald-800';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent ? 'bg-transparent py-6' : 'bg-white/95 backdrop-blur-md shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              transparent ? 'bg-white/20 backdrop-blur-sm' : 'bg-emerald-800'
            }`}
          >
            <span className="font-display text-lg font-semibold text-white">N</span>
          </div>
          <span
            className={`font-display text-xl tracking-wide transition-colors ${
              transparent ? 'text-white text-shadow-hero' : 'text-stone-900'
            }`}
          >
            Necker Cup 26
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <Link to="/#experience" className={`font-body text-sm tracking-wide transition-colors ${linkClass}`}>
            Experience
          </Link>
          <Link to="/#packages" className={`font-body text-sm tracking-wide transition-colors ${linkClass}`}>
            Packages
          </Link>
          <Link to="/#artists" className={`font-body text-sm tracking-wide transition-colors ${linkClass}`}>
            Talent
          </Link>
          <Link to="/gallery" className={`font-body text-sm tracking-wide transition-colors ${linkClass}`}>
            Gallery
          </Link>
          <Link to="/sponsorship" className={`font-body text-sm tracking-wide transition-colors ${linkClass}`}>
            Sponsorship
          </Link>
          <Link to="/charity" className={`font-body text-sm tracking-wide transition-colors ${linkClass}`}>
            Charity
          </Link>
          <Link to="/agenda" className={`font-body text-sm tracking-wide transition-colors ${linkClass}`}>
            Agenda
          </Link>
        </div>

        <button
          onClick={openForm}
          className={`font-body text-sm px-6 py-2.5 rounded-full transition-all duration-300 ${
            transparent
              ? 'bg-white text-stone-900 hover:bg-stone-100 hover:shadow-lg'
              : 'bg-emerald-800 text-white hover:bg-emerald-900 hover:shadow-lg'
          }`}
        >
          Reserve Your Spot
        </button>
      </div>
    </nav>
  );
}
