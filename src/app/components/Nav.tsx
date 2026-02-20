import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  { to: '/tennis', label: 'Tennis' },
];

export function Nav() {
  const { openForm } = useReservationForm();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const floating = !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = floating
    ? 'font-body text-sm tracking-wide text-white/90 hover:text-white transition-colors whitespace-nowrap'
    : 'font-body text-sm tracking-wide text-stone-600 hover:text-emerald-800 transition-colors whitespace-nowrap';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        floating ? 'bg-transparent py-4 xl:py-6' : 'bg-white/95 backdrop-blur-md shadow-sm py-3 xl:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img
            src="/images/nclogo.png"
            alt="Necker Cup 2026"
            className={`h-14 sm:h-16 xl:h-20 w-auto transition-all duration-300 ${
              floating ? 'drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]' : ''
            }`}
          />
        </Link>

        {/* Desktop: inline links */}
        <div className="hidden xl:flex items-center gap-5">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className={linkClass}>
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`xl:hidden p-2 transition-colors ${floating ? 'text-white/90 hover:text-white' : 'text-stone-600 hover:text-emerald-800'}`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <a
            href="https://portal.neckercup.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:inline-flex font-body text-sm px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
              floating
                ? 'border border-white/40 text-white hover:bg-white/10'
                : 'border border-stone-300 text-stone-600 hover:text-emerald-800 hover:border-emerald-800'
            }`}
          >
            Login
          </a>
          <button
            onClick={openForm}
            className={`font-body text-sm px-4 py-2 sm:px-6 rounded-full transition-all duration-300 whitespace-nowrap ${
              floating
                ? 'bg-white text-stone-900 hover:bg-stone-100 hover:shadow-lg'
                : 'bg-emerald-800 text-white hover:bg-emerald-900 hover:shadow-lg'
            }`}
          >
            Reserve Your Spot
          </button>
        </div>
      </div>

      {/* Mobile menu - full screen overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-white xl:hidden flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-4 border-b border-stone-100">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
              <img src="/images/nclogo.png" alt="Necker Cup 2026" className="h-12 w-auto" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-stone-500 hover:text-stone-900"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col px-6 py-4">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-body text-lg py-4 text-stone-700 hover:text-emerald-800 border-b border-stone-100 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="px-6 mt-auto pb-8 flex flex-col gap-3">
            <a
              href="https://portal.neckercup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body w-full py-3 rounded-full border border-stone-300 text-stone-700 hover:text-emerald-800 hover:border-emerald-800 text-center block"
            >
              Login
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); openForm(); }}
              className="font-body w-full py-3 rounded-full bg-emerald-800 text-white hover:bg-emerald-900"
            >
              Reserve Your Spot
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
