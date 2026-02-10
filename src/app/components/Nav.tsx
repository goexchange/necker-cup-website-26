import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useReservationForm } from '@/app/context/ReservationFormContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/packages', label: 'Packages' },
  { to: '/talent', label: 'Talent' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/sponsorship', label: 'Sponsorship' },
  { to: '/charity', label: 'Charity' },
  { to: '/agenda', label: 'Agenda' },
];

export function Nav() {
  const { openForm } = useReservationForm();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === '/';
  const floating = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = floating
    ? 'font-body text-sm tracking-wide text-white/90 hover:text-white transition-colors'
    : 'font-body text-sm tracking-wide text-stone-600 hover:text-emerald-800 transition-colors';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        floating ? 'bg-transparent py-6' : 'bg-white/95 backdrop-blur-md shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              floating ? 'bg-white/20 backdrop-blur-sm' : 'bg-emerald-800'
            }`}
          >
            <span className="font-display text-lg font-semibold text-white">N</span>
          </div>
          <span
            className={`font-display text-xl tracking-wide transition-colors ${
              floating ? 'text-white' : 'text-stone-900'
            }`}
          >
            Necker Cup 26
          </span>
        </Link>

        {/* Desktop: inline links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className={linkClass}>
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`lg:hidden p-2 transition-colors ${floating ? 'text-white/90 hover:text-white' : 'text-stone-600 hover:text-emerald-800'}`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <button
            onClick={openForm}
            className={`font-body text-sm px-4 py-2.5 sm:px-6 rounded-full transition-all duration-300 whitespace-nowrap ${
              floating
                ? 'bg-white text-stone-900 hover:bg-stone-100 hover:shadow-lg'
                : 'bg-emerald-800 text-white hover:bg-emerald-900 hover:shadow-lg'
            }`}
          >
            Reserve Your Spot
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl z-50 lg:hidden flex flex-col p-6 pt-16">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col gap-2">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-body text-lg py-3 text-stone-700 hover:text-emerald-800 border-b border-stone-100 last:border-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
            <button
              onClick={() => { setMobileMenuOpen(false); openForm(); }}
              className="font-body mt-6 w-full py-3 rounded-full bg-emerald-800 text-white hover:bg-emerald-900"
            >
              Reserve Your Spot
            </button>
          </div>
        </>
      )}
    </nav>
  );
}
