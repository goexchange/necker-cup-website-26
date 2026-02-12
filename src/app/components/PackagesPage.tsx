import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';

interface PackagesPageProps {
  onNavigateHome: () => void;
  onNavigate: (page: 'home' | 'agenda' | 'sponsorship' | 'gallery' | 'charity' | 'experience' | 'packages') => void;
}

export function PackagesPage({ onNavigateHome, onNavigate }: PackagesPageProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activePackage, setActivePackage] = useState(1);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sharedIncludes = [
    'Stay on Necker Island or Branson Beach Estate on Moskito Island (5 nights, Nov 29 – Dec 4, 2026)',
    'Enjoy meals, events and parties, including the End of the World party, on Necker Island',
  ];
  const packages = [
    { name: 'Pro-Am: Player — Necker Island', price: '$109,750', nights: '5 Nights / couple', desc: 'Stay on Necker Island. Meals, events & parties including the End of the World party. One 2-person playing team spot in the Necker Cup.', includes: [...sharedIncludes, 'One 2-person playing team spot to play in the Necker Cup'] },
    { name: 'Pro-Am: Player — Branson Estate, Moskito', price: '$99,250', nights: '5 Nights / couple', desc: 'Stay at the Branson Beach Estate on Moskito Island (5–7 min boat ride). Meals, events & parties on Necker. One 2-person playing team spot.', includes: [...sharedIncludes, 'One 2-person playing team spot to play in the Necker Cup'] },
    { name: 'Pro-Am: Spectator — Necker Island', price: '$78,750', nights: '5 Nights / couple', desc: 'Stay on Necker Island. Meals, events & parties including the End of the World party. Watch and mix with pros, legends and celebrities.', includes: [...sharedIncludes, 'Watch all the fun of the Necker Cup and mix with pros, legends and celebrities'] },
    { name: 'Pro-Am: Spectator — Branson Estate, Moskito', price: '$67,250', nights: '5 Nights / couple', desc: 'Stay at the Branson Beach Estate on Moskito Island. Meals, events & parties on Necker. Watch and mix with pros, legends and celebrities.', includes: [...sharedIncludes, 'Watch all the fun of the Necker Cup and mix with pros, legends and celebrities'] },
  ];

  return (
    <div className="min-h-screen bg-stone-50 antialiased">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      {/* HEADER */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-white/95 backdrop-blur-md shadow-sm py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <button 
              onClick={onNavigateHome}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center">
                <span className="font-display text-lg font-semibold text-white">N</span>
              </div>
              <span className="font-display text-xl tracking-wide text-stone-900">Necker Cup 26</span>
            </button>
            
            <div className="hidden lg:flex items-center gap-6">
              <button onClick={() => { onNavigateHome(); setTimeout(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="font-body text-sm tracking-wide transition-colors text-stone-600 hover:text-emerald-800">Experience</button>
              <button onClick={() => { onNavigateHome(); setTimeout(() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="font-body text-sm tracking-wide transition-colors text-emerald-800 font-medium">Packages</button>
              <button onClick={() => { onNavigateHome(); setTimeout(() => document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="font-body text-sm tracking-wide transition-colors text-stone-600 hover:text-emerald-800">Talent</button>
              <button onClick={() => onNavigate('gallery')} className="font-body text-sm tracking-wide transition-colors text-stone-600 hover:text-emerald-800">Gallery</button>
              <button onClick={() => onNavigate('sponsorship')} className="font-body text-sm tracking-wide transition-colors text-stone-600 hover:text-emerald-800">Sponsorship</button>
              <button onClick={() => onNavigate('charity')} className="font-body text-sm tracking-wide transition-colors text-stone-600 hover:text-emerald-800">Charity</button>
              <button onClick={() => onNavigate('agenda')} className="font-body text-sm tracking-wide transition-colors text-stone-600 hover:text-emerald-800">Agenda</button>
            </div>

            <button className="font-body text-sm px-6 py-2.5 rounded-full bg-emerald-800 text-white hover:bg-emerald-900 transition-all hover:shadow-lg">
              Reserve Your Spot
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center text-white">
          <p className="font-body text-white/70 text-sm tracking-[0.3em] uppercase mb-6">
            Packages
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.95]">
            Choose Your <br /><span className="italic">Experience</span>
          </h1>
          <p className="font-body text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            November 29 – December 4, 2026. Stay on Necker Island or at the Branson Beach Estate on Moskito Island (5–7 min boat ride).
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {packages.map((pkg, i) => (
              <div key={i}
                className={`group relative bg-white rounded-3xl p-8 lg:p-10 transition-all duration-500 cursor-pointer ${
                  activePackage === i 
                    ? 'shadow-2xl shadow-emerald-900/10 scale-[1.02] ring-2 ring-emerald-800/20' 
                    : 'shadow-lg hover:shadow-xl hover:scale-[1.01]'
                }`}
                onClick={() => setActivePackage(i)}>
                {activePackage === i && (
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                )}
                <p className="font-body text-stone-400 text-xs tracking-widest uppercase mb-4">{pkg.nights}</p>
                <h3 className="font-display text-2xl lg:text-3xl text-stone-900 mb-4 leading-tight">{pkg.name}</h3>
                <p className="font-body text-stone-500 mb-8 leading-relaxed text-sm">{pkg.desc}</p>
                
                <div className="space-y-3 mb-8">
                  {pkg.includes.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-800" />
                      </div>
                      <p className="font-body text-stone-600 text-sm">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-end justify-between pt-6 border-t border-stone-100">
                  <div>
                    <p className="font-body text-stone-400 text-xs uppercase tracking-wider mb-1">From</p>
                    <p className="font-display text-3xl lg:text-4xl text-emerald-800">{pkg.price}</p>
                  </div>
                  <button className="font-body text-sm text-emerald-800 font-medium flex items-center gap-2 group-hover:gap-3 transition-all hover:text-emerald-900">
                    Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-body text-stone-500 text-sm mb-4">
              When we say at leisure—amenities and activities are included (except the Spa). Day 6: depart after breakfast; boats to Terrance B. Lettsome Airport (Beef Island) by 12 noon.
            </p>
            <p className="font-body text-stone-400 text-xs">
              All prices per couple. Powered by Premier Live & Mehow.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24 lg:py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">What's Included</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              Every Package Includes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Accommodation',
                items: ['Private villa or resort stay', 'Luxury amenities', 'Daily housekeeping', 'Concierge service']
              },
              {
                title: 'Dining & Beverages',
                items: ['All meals included', 'Premium beverages', 'Private dining experiences', 'Dietary accommodations']
              },
              {
                title: 'Activities & Access',
                items: ['Tennis match access', 'Performance tickets', 'Island activities', 'Water sports equipment']
              }
            ].map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="font-display text-2xl text-stone-900 mb-6">{category.title}</h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-800 flex-shrink-0" />
                      <p className="font-body text-stone-600 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Join Us at the 2026 Necker Cup
          </h2>
          <p className="font-body text-white/80 text-lg mb-10">
            November 29 – December 4, 2026 · Necker Island, BVI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="font-body bg-white text-stone-900 px-10 py-4 rounded-full font-medium hover:bg-stone-100 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Reserve Your Spot Now
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
