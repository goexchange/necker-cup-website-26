import { useState, useEffect } from 'react';
import { Play, ChevronDown, Check } from 'lucide-react';
import { AgendaPage } from '@/app/components/AgendaPage';
import { SponsorshipPage } from '@/app/components/SponsorshipPage';
import { GalleryPage } from '@/app/components/GalleryPage';
import { CharityPage } from '@/app/components/CharityPage';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activePackage, setActivePackage] = useState(1);
  const [currentPage, setCurrentPage] = useState<'home' | 'agenda' | 'sponsorship' | 'gallery' | 'charity'>('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const packages = [
    { 
      name: 'The Island Experience', 
      price: '$18,500', 
      nights: '5 Nights', 
      desc: 'Full immersion on Necker Island with private villa accommodation, all meals, and complete access to tennis matches and evening performances.' 
    },
    { 
      name: 'The Spectator Suite', 
      price: '$12,500', 
      nights: '4 Nights', 
      desc: 'Premium courtside access with nearby island resort stay. Daily boat transfers, VIP seating, and artist meet & greet included.' 
    },
    { 
      name: 'The Ultimate Package', 
      price: '$28,000', 
      nights: '6 Nights', 
      desc: 'Everything included plus exclusive artist rehearsal access, private tennis clinic with pros, and extended island stay.' 
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1622816951464-df6fc7ab2ced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3Njk0NTMzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1761286753856-2f39b4413c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBwbGF5ZXJzJTIwYWN0aW9ufGVufDF8fHx8MTc2OTQ1MzM2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1767634854859-db8255389e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0ZW5uaXMlMjBjb3VydHxlbnwxfHx8fDE3Njk0NTMzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1722409195473-d322e99621e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDF8fHx8MTc2OTQ0MDUxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1759819699495-d112601c0d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjByYWNrZXQlMjBjbG9zZXVwfGVufDF8fHx8MTc2OTQwMzAyMnww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const agenda = [
    {
      day: 'Monday',
      date: 'November 30',
      events: [
        { time: '2:00 PM', title: 'Guest Arrival & Welcome', desc: 'Check-in to your private villa' },
        { time: '6:00 PM', title: 'Opening Reception', desc: 'Champagne welcome on the beach' },
        { time: '8:00 PM', title: 'Welcome Dinner', desc: 'Beachside dining under the stars' },
      ]
    },
    {
      day: 'Tuesday',
      date: 'December 1',
      events: [
        { time: '8:00 AM', title: 'Breakfast & Warm-up', desc: 'Light training session' },
        { time: '10:00 AM', title: 'Pro-Am Matches Begin', desc: 'Round-robin tournament starts' },
        { time: '1:00 PM', title: 'Lunch on the Lawn', desc: 'Casual island cuisine' },
        { time: '4:00 PM', title: 'Afternoon Matches', desc: 'Doubles competition' },
        { time: '7:00 PM', title: 'Cocktails & Sunset', desc: 'Clifftop bar gathering' },
      ]
    },
    {
      day: 'Wednesday',
      date: 'December 2',
      events: [
        { time: '9:00 AM', title: 'Tennis Clinic', desc: 'Private coaching with pros' },
        { time: '12:00 PM', title: 'Free Time', desc: 'Beach, spa, or water sports' },
        { time: '6:00 PM', title: 'Bocelli Rehearsal', desc: 'Exclusive behind-the-scenes access' },
        { time: '8:30 PM', title: 'Andrea Bocelli Concert', desc: 'Intimate performance on the Great Lawn' },
      ]
    },
    {
      day: 'Thursday',
      date: 'December 3',
      events: [
        { time: '10:00 AM', title: 'Semi-Final Matches', desc: 'Championship bracket begins' },
        { time: '2:00 PM', title: 'Island Excursion', desc: 'Snorkeling & sailing adventure' },
        { time: '7:00 PM', title: 'Darius Rucker Performance', desc: 'Acoustic beachside concert' },
        { time: '10:00 PM', title: 'Bonfire & Stargazing', desc: 'Beach celebration' },
      ]
    },
    {
      day: 'Friday',
      date: 'December 4',
      events: [
        { time: '10:00 AM', title: 'Championship Finals', desc: 'Trophy matches' },
        { time: '1:00 PM', title: 'Awards Luncheon', desc: 'Celebration & trophy presentation' },
        { time: '4:00 PM', title: 'Free Afternoon', desc: 'Relax and enjoy the island' },
        { time: '8:00 PM', title: 'Farewell Gala', desc: 'Black-tie dinner celebration' },
      ]
    },
    {
      day: 'Saturday',
      date: 'December 5',
      events: [
        { time: '10:00 AM', title: 'Departure Day', desc: 'Breakfast & fond farewells' },
      ]
    },
  ];

  const sponsors = {
    presenting: ['Virgin Limited Edition', 'Rolex'],
    premier: ['NetJets', 'Dom Pérignon', 'American Express', 'Four Seasons'],
    partners: ['Wilson', 'Lacoste', 'Molton Brown', 'Land Rover', 'Bose', 'Tiffany & Co.']
  };

  // Handle page routing
  if (currentPage === 'agenda') {
    return <AgendaPage onNavigateHome={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'sponsorship') {
    return <SponsorshipPage onNavigateHome={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'gallery') {
    return <GalleryPage onNavigateHome={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'charity') {
    return <CharityPage onNavigateHome={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
  }

  return (
    <div className="min-h-screen bg-stone-50 antialiased">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-up { animation: fadeUp 1s ease-out forwards; }
        .animate-fade-up-delay-1 { animation: fadeUp 1s ease-out 0.2s forwards; opacity: 0; }
        .animate-fade-up-delay-2 { animation: fadeUp 1s ease-out 0.4s forwards; opacity: 0; }
        .animate-fade-up-delay-3 { animation: fadeUp 1s ease-out 0.6s forwards; opacity: 0; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        
        .text-shadow-hero { text-shadow: 0 2px 40px rgba(0,0,0,0.3); }
        
        .gradient-radial {
          background: radial-gradient(ellipse at top right, rgba(255,255,255,0.1) 0%, transparent 50%);
        }
      `}</style>

      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              scrolled ? 'bg-emerald-800' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <span className="font-display text-lg font-semibold text-white">N</span>
            </div>
            <span className={`font-display text-xl tracking-wide transition-colors ${
              scrolled ? 'text-stone-900' : 'text-white text-shadow-hero'
            }`}>
              Necker Cup
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <a href="#experience" className={`font-body text-sm tracking-wide transition-colors ${
              scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
            }`}>Experience</a>
            <a href="#packages" className={`font-body text-sm tracking-wide transition-colors ${
              scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
            }`}>Packages</a>
            <a href="#artists" className={`font-body text-sm tracking-wide transition-colors ${
              scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
            }`}>Talent</a>
            <button onClick={() => setCurrentPage('gallery')} className={`font-body text-sm tracking-wide transition-colors ${
              scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
            }`}>Gallery</button>
            <button onClick={() => setCurrentPage('sponsorship')} className={`font-body text-sm tracking-wide transition-colors ${
              scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
            }`}>Sponsorship</button>
            <button onClick={() => setCurrentPage('charity')} className={`font-body text-sm tracking-wide transition-colors ${
              scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
            }`}>Charity</button>
            <button onClick={() => setCurrentPage('agenda')} className={`font-body text-sm tracking-wide transition-colors ${
              scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
            }`}>Agenda</button>
          </div>
          
          <button className={`font-body text-sm px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled 
              ? 'bg-emerald-800 text-white hover:bg-emerald-900 hover:shadow-lg' 
              : 'bg-white text-stone-900 hover:bg-stone-100 hover:shadow-lg'
          }`}>
            Reserve Your Spot
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1729645014815-b9dbc61809de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMGFlcmlhbHxlbnwxfHx8fDE3Njk0NTMzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-teal-800/50 to-cyan-900/60" />
          <div className="absolute inset-0 gradient-radial" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-32">
          <div className="max-w-3xl">
            <p className="font-body text-white/70 text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up">
              November 30 – December 5, 2026
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-8 animate-fade-up-delay-1 text-shadow-hero">
              Where Tennis <br /><span className="italic">Meets Paradise</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mb-10 animate-fade-up-delay-2">
              An exclusive week on Sir Richard Branson's Necker Island. 
              World-class tennis. Legendary performances. Unforgettable connections.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <button className="font-body bg-white text-stone-900 px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-stone-100 transition-all duration-300 hover:shadow-xl hover:scale-105">
                Explore Packages
              </button>
              <button className="font-body border-2 border-white/40 text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 hover:shadow-lg">
                <Play className="w-4 h-4" />
                Watch Film
              </button>
            </div>
          </div>
          
          <div className="absolute right-6 lg:right-12 bottom-20 lg:bottom-32 hidden lg:block animate-fade-up-delay-3">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <p className="font-body text-white/60 text-xs tracking-widest uppercase mb-2">Featuring</p>
              <p className="font-display text-white text-2xl mb-1">Andrea Bocelli</p>
              <p className="font-display text-white/80 text-lg italic">& Darius Rucker</p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <ChevronDown className="w-6 h-6 text-white/60" />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-6">The Experience</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.1] mb-8">
                More than a tournament. <br /><span className="italic text-emerald-800">A transformation.</span>
              </h2>
              <p className="font-body text-stone-600 text-lg leading-relaxed mb-6">
                For one extraordinary week, the world's most exclusive private island becomes 
                the backdrop for tennis excellence, musical performances that move the soul, 
                and connections that last a lifetime.
              </p>
              <p className="font-body text-stone-600 text-lg leading-relaxed mb-10">
                Play alongside tennis legends, relax on pristine beaches, and experience 
                intimate concerts under Caribbean stars. This is luxury redefined.
              </p>
              <div className="flex gap-12">
                {[['48', 'Exclusive Guests'], ['5', 'Days of Tennis'], ['2', 'World-Class Artists']].map(([num, label]) => (
                  <div key={label}>
                    <p className="font-display text-5xl text-emerald-800 mb-1">{num}</p>
                    <p className="font-body text-stone-500 text-sm">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div 
                className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-emerald-800/20 to-teal-700/30 overflow-hidden shadow-2xl bg-cover bg-center hover:scale-[1.02] transition-transform duration-500"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1767634854859-db8255389e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0ZW5uaXMlMjBjb3VydHxlbnwxfHx8fDE3Njk0NTMzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080')`
                }}
              />
              <div 
                className="absolute -bottom-8 -left-8 w-48 h-64 rounded-2xl shadow-xl hidden lg:block bg-cover bg-center hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1622816951464-df6fc7ab2ced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3Njk0NTMzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080')`
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-24 lg:py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">Packages</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              Choose Your <span className="italic">Experience</span>
            </h2>
            <p className="font-body text-stone-600 max-w-2xl mx-auto">
              Each package is carefully curated to deliver an unforgettable experience, 
              limited to just 48 guests for ultimate exclusivity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
            <p className="font-body text-stone-500 text-sm">
              All packages include meals, activities, and exclusive access to performances. 
              <a href="#" className="text-emerald-800 hover:text-emerald-900 ml-1 underline">View full details</a>
            </p>
          </div>
        </div>
      </section>

      {/* ARTISTS */}
      <section id="artists" className="py-24 lg:py-40 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-body text-stone-400 text-sm tracking-[0.2em] uppercase mb-8">Performing Live</p>
          <div className="mb-20">
            <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] mb-4 hover:text-emerald-400 transition-colors duration-500">
              Andrea
            </h2>
            <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] italic text-stone-500 hover:text-stone-400 transition-colors duration-500">
              Bocelli
            </h2>
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
                  <span className="font-display text-lg">+</span>
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
                {['John Mellencamp', 'Bono', 'Elton John', 'Annie Lennox'].map(artist => (
                  <p key={artist} className="font-display text-lg text-stone-600 hover:text-stone-400 transition-colors cursor-pointer">
                    {artist}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">Gallery</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900">
              A Glimpse of <span className="italic">Paradise</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {galleryImages.map((img, i) => (
              <div 
                key={i}
                className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group ${
                  i === 0 || i === 3 ? 'md:row-span-2' : ''
                }`}
              >
                <div 
                  className="w-full h-full bg-cover bg-center aspect-square md:aspect-auto min-h-[200px] md:min-h-[300px] group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url('${img}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-px bg-emerald-800 mx-auto mb-12" />
          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-[1.2] mb-10">
            "A mix of tennis legends, current stars, and a wonderful group of amateurs 
            playing our favourite sport in the most <span className="italic text-emerald-800">perfect setting</span>."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-px h-12 bg-stone-200" />
            <div className="text-left">
              <p className="font-body text-stone-900 font-medium">Richard Branson</p>
              <p className="font-body text-stone-500 text-sm">Founder, Necker Cup</p>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORSHIP */}
      <section id="sponsors" className="py-24 lg:py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">Partners</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              In Partnership with <span className="italic">Excellence</span>
            </h2>
            <p className="font-body text-stone-600 max-w-2xl mx-auto">
              The Necker Cup is proudly supported by world-class brands that share our commitment to exceptional experiences.
            </p>
          </div>

          {/* Presenting Sponsors */}
          <div className="mb-16">
            <p className="font-body text-stone-400 text-xs tracking-[0.25em] uppercase text-center mb-8">Presenting Sponsors</p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
              {sponsors.presenting.map((sponsor) => (
                <div 
                  key={sponsor}
                  className="group relative bg-white rounded-2xl px-12 py-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <p className="font-display text-2xl md:text-3xl text-stone-800 group-hover:text-emerald-800 transition-colors">
                    {sponsor}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Premier Partners */}
          <div className="mb-16">
            <p className="font-body text-stone-400 text-xs tracking-[0.25em] uppercase text-center mb-8">Premier Partners</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {sponsors.premier.map((sponsor) => (
                <div 
                  key={sponsor}
                  className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center hover:scale-105"
                >
                  <p className="font-display text-lg md:text-xl text-stone-700 group-hover:text-emerald-800 transition-colors text-center">
                    {sponsor}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Event Partners */}
          <div>
            <p className="font-body text-stone-400 text-xs tracking-[0.25em] uppercase text-center mb-8">Event Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {sponsors.partners.map((sponsor) => (
                <div 
                  key={sponsor}
                  className="group relative"
                >
                  <p className="font-body text-sm md:text-base text-stone-500 group-hover:text-emerald-800 transition-colors">
                    {sponsor}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 pt-12 border-t border-stone-200">
            <p className="font-body text-stone-600 mb-4">
              Interested in partnering with the Necker Cup?
            </p>
            <button 
              onClick={() => setCurrentPage('sponsorship')}
              className="font-body bg-emerald-800 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-900 transition-all hover:shadow-lg hover:scale-105"
            >
              View Partnership Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready to join us in <span className="italic">paradise</span>?
          </h2>
          <p className="font-body text-white/80 text-lg mb-10">
            Limited to 48 guests. Spaces fill quickly for this once-in-a-lifetime experience.
          </p>
          <button className="font-body bg-white text-stone-900 px-10 py-4 rounded-full font-medium hover:bg-stone-100 transition-all duration-300 hover:shadow-2xl hover:scale-105">
            Reserve Your Spot Now
          </button>
          <p className="font-body text-white/60 text-sm mt-6">
            Questions? <a href="mailto:info@neckercup.com" className="underline hover:text-white">Get in touch</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center">
                  <span className="font-display text-lg font-semibold">N</span>
                </div>
                <span className="font-display text-xl">Necker Cup 2026</span>
              </div>
              <p className="font-body text-stone-400 text-sm leading-relaxed">
                Where tennis legends and music icons gather for an unforgettable week 
                on the world's most exclusive private island.
              </p>
            </div>
            
            <div>
              <h3 className="font-body text-sm tracking-wider uppercase mb-4 text-stone-500">Quick Links</h3>
              <div className="space-y-3">
                {['Experience', 'Packages', 'Talent', 'Gallery', 'About'].map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="font-body text-stone-300 hover:text-white transition-colors block">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-body text-sm tracking-wider uppercase mb-4 text-stone-500">Contact</h3>
              <div className="space-y-3">
                <a href="mailto:info@neckercup.com" className="font-body text-stone-300 hover:text-white transition-colors block">
                  info@neckercup.com
                </a>
                <a href="tel:+1234567890" className="font-body text-stone-300 hover:text-white transition-colors block">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-stone-800">
            <div className="flex gap-8">
              {['Privacy Policy', 'Terms & Conditions', 'Contact'].map(link => (
                <a key={link} href="#" className="font-body text-sm text-stone-400 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
            <p className="font-body text-sm text-stone-500">© 2026 Necker Cup. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}