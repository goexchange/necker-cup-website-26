import { useState, useEffect } from 'react';

interface TalentPageProps {
  onNavigateHome: () => void;
  onNavigate: (page: 'home' | 'agenda' | 'sponsorship' | 'gallery' | 'charity' | 'experience' | 'packages' | 'talent') => void;
}

export function TalentPage({ onNavigateHome, onNavigate }: TalentPageProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tennisLegendsAndPros = [
    'Bjorn Borg', 'Juan Martin Del Potro', 'Tommy Haas', 'Rod Laver', 'Caroline Wozniacki',
    'Heather Watson', 'Rafael Nadal', 'Novak Djokovic', 'Jack Sock', 'Vasek Pospisil (Tournament Director)',
  ];
  const musiciansAndCelebrities = [
    'Andrea Bocelli', 'Florida Georgia Line', 'Jamie Foxx', 'Kate Upton', 'Pitbull', 'Kenny Chesney', 'Jimmy Buffett',
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
              <button onClick={() => { onNavigateHome(); setTimeout(() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="font-body text-sm tracking-wide transition-colors text-stone-600 hover:text-emerald-800">Packages</button>
              <button onClick={() => { onNavigateHome(); setTimeout(() => document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="font-body text-sm tracking-wide transition-colors text-emerald-800 font-medium">Talent</button>
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
      <section className="relative py-24 lg:py-40 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-body text-stone-400 text-sm tracking-[0.2em] uppercase mb-8">Past Pros, Musicians & Celebrity Guests</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-12 leading-tight">
            Tennis Legends & Pros · <span className="italic text-emerald-400">Musicians & Celebrities</span>
          </h1>
        </div>
      </section>

      {/* TWO COLUMNS: TENNIS + MUSICIANS/CELEBS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl text-stone-900 mb-8">Tennis Legends & Pros</h2>
              <div className="space-y-3">
                {tennisLegendsAndPros.map((name) => (
                  <p key={name} className="font-body text-lg text-stone-700 hover:text-emerald-800 transition-colors">
                    {name}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl text-stone-900 mb-8">Musicians & Celebrities</h2>
              <div className="space-y-3">
                {musiciansAndCelebrities.map((name) => (
                  <p key={name} className="font-body text-lg text-stone-700 hover:text-emerald-800 transition-colors">
                    {name}
                  </p>
                ))}
              </div>
              <p className="font-body text-stone-500 text-sm mt-8">
                For a complete list of past guests, visit{' '}
                <a href="https://premierlive.com" target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:text-emerald-900 underline font-medium">premierlive.com</a>
              </p>
            </div>
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
          <button className="font-body bg-white text-stone-900 px-10 py-4 rounded-full font-medium hover:bg-stone-100 transition-all duration-300 hover:shadow-2xl hover:scale-105">
            Reserve Your Spot Now
          </button>
        </div>
      </section>
    </div>
  );
}
