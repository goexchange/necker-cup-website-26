import { useState, useEffect } from 'react';
import { Music, Award, Users } from 'lucide-react';

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

  const featuredArtists = [
    {
      name: 'Andrea Bocelli',
      role: 'World-Renowned Tenor',
      description: 'The world\'s most beloved tenor returns to Necker Island for an intimate performance under the Caribbean stars. Experience the magic of Andrea Bocelli\'s voice in the most exclusive setting imaginable.',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY29uY2VydCUyMGV2ZW5pbmd8ZW58MXx8fHwxNzM3OTU3MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      achievements: [
        'Grammy Award Winner',
        'Over 90 million records sold worldwide',
        'Performed for popes, presidents, and royalty',
        'One of the most recognizable voices in classical music'
      ]
    },
    {
      name: 'Darius Rucker',
      role: 'Country Music Legend',
      description: 'From Hootie & the Blowfish to country music stardom, Darius Rucker brings his soulful voice and timeless hits to Necker Island for an unforgettable acoustic performance.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3Mzc5NTcyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      achievements: [
        '3x Grammy Award Winner',
        'Multi-platinum recording artist',
        'Country Music Hall of Fame',
        'Chart-topping hits across genres'
      ]
    }
  ];

  const pastPerformers = [
    { name: 'John Mellencamp', year: '2023' },
    { name: 'Bono', year: '2022' },
    { name: 'Elton John', year: '2021' },
    { name: 'Annie Lennox', year: '2020' },
    { name: 'Sting', year: '2019' },
    { name: 'Stevie Wonder', year: '2018' },
  ];

  const tennisLegends = [
    {
      name: 'John McEnroe',
      title: 'Tennis Legend',
      description: '7-time Grand Slam singles champion and 9-time Grand Slam doubles champion',
      image: 'https://images.unsplash.com/photo-1761286753856-2f39b4413c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBwbGF5ZXJzJTIwYWN0aW9ufGVufDF8fHx8MTc2OTQ1MzM2NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Martina Navratilova',
      title: 'Tennis Icon',
      description: '18-time Grand Slam singles champion and one of the greatest players in tennis history',
      image: 'https://images.unsplash.com/photo-1759819699495-d112601c0d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjByYWNrZXQlMjBjbG9zZXVwfGVufDF8fHx8MTc2OTQwMzAyMnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Andy Roddick',
      title: 'Former World No. 1',
      description: 'US Open champion and Davis Cup winner, known for his powerful serve and competitive spirit',
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBuZXQlMjBjb3VydHxlbnwxfHx8fDE3Mzc5NTcxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Venus Williams',
      title: '7-Time Grand Slam Champion',
      description: 'Olympic gold medalist and one of the most successful players in women\'s tennis',
      image: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBtYXRjaCUyMGFjdGlvbnxlbnwxfHx8MTczNzk1NzE2OHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
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
              <span className="font-display text-xl tracking-wide text-stone-900">Necker Cup</span>
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
          <p className="font-body text-stone-400 text-sm tracking-[0.2em] uppercase mb-8">Performing Live</p>
          <div className="mb-20">
            <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] mb-4 hover:text-emerald-400 transition-colors duration-500">
              Andrea
            </h1>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] italic text-stone-500 hover:text-stone-400 transition-colors duration-500">
              Bocelli
            </h1>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div className="max-w-lg lg:ml-auto">
              <p className="font-body text-stone-300 text-lg leading-relaxed mb-8">
                The world's most beloved tenor returns to Necker Island for an intimate 
                performance under the Caribbean stars. Experience the magic of Andrea Bocelli's 
                voice in the most exclusive setting imaginable.
              </p>
              <div className="flex items-center gap-4 p-6 bg-stone-800/50 rounded-2xl border border-stone-700/50 hover:bg-stone-800 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-stone-700 flex items-center justify-center group-hover:bg-emerald-800 transition-colors">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-display text-xl text-white">Darius Rucker</p>
                  <p className="font-body text-stone-400 text-sm">Country Music Legend</p>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <p className="font-body text-stone-500 text-sm mb-4">Past Performers Include</p>
              <div className="space-y-2">
                {pastPerformers.slice(0, 4).map((artist, idx) => (
                  <p key={idx} className="font-display text-lg text-stone-600 hover:text-stone-400 transition-colors cursor-pointer">
                    {artist.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTISTS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">2026 Performers</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              World-Class <span className="italic text-emerald-800">Talent</span>
            </h2>
            <p className="font-body text-stone-600 max-w-2xl mx-auto">
              Experience intimate performances from legendary artists in the most exclusive setting on earth.
            </p>
          </div>

          <div className="space-y-24">
            {featuredArtists.map((artist, idx) => (
              <div 
                key={idx}
                className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div 
                    className="aspect-[4/3] rounded-3xl bg-cover bg-center shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                    style={{ backgroundImage: `url('${artist.image}')` }}
                  />
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="font-body text-emerald-800 text-sm tracking-wider uppercase mb-3">{artist.role}</p>
                  <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-6">
                    {artist.name}
                  </h3>
                  <p className="font-body text-stone-600 text-lg leading-relaxed mb-8">
                    {artist.description}
                  </p>
                  <div className="space-y-3">
                    {artist.achievements.map((achievement, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-emerald-800 flex-shrink-0" />
                        <p className="font-body text-stone-700">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TENNIS LEGENDS */}
      <section className="py-24 lg:py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">Tennis Legends</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              Play Alongside <span className="italic text-emerald-800">The Greats</span>
            </h2>
            <p className="font-body text-stone-600 max-w-2xl mx-auto">
              Compete in Pro-Am matches with tennis legends and receive coaching from the world's best.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tennisLegends.map((legend, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                <div 
                  className="aspect-[3/4] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${legend.image}')` }}
                />
                <div className="p-6">
                  <h3 className="font-display text-2xl text-stone-900 mb-2">{legend.name}</h3>
                  <p className="font-body text-emerald-800 text-sm font-medium mb-3">{legend.title}</p>
                  <p className="font-body text-stone-600 text-sm leading-relaxed">{legend.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST PERFORMERS */}
      <section className="py-24 lg:py-32 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-stone-400 text-sm tracking-[0.2em] uppercase mb-4">Legacy of Excellence</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Past <span className="italic text-emerald-400">Performers</span>
            </h2>
            <p className="font-body text-stone-300 max-w-2xl mx-auto">
              The Necker Cup has hosted some of the world's most iconic artists over the years.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {pastPerformers.map((performer, idx) => (
              <div 
                key={idx}
                className="group bg-stone-800/50 rounded-xl p-6 border border-stone-700/50 hover:bg-stone-800 hover:border-emerald-800/50 transition-all duration-300 text-center"
              >
                <Users className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-display text-lg text-white mb-1">{performer.name}</p>
                <p className="font-body text-stone-400 text-xs">{performer.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Experience <span className="italic">legendary talent</span>
          </h2>
          <p className="font-body text-white/80 text-lg mb-10">
            Join us for intimate performances and Pro-Am matches with tennis legends. 
            Limited to 48 guests for the ultimate exclusive experience.
          </p>
          <button className="font-body bg-white text-stone-900 px-10 py-4 rounded-full font-medium hover:bg-stone-100 transition-all duration-300 hover:shadow-2xl hover:scale-105">
            Reserve Your Spot Now
          </button>
        </div>
      </section>
    </div>
  );
}
