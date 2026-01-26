import { ArrowLeft, Download, Calendar, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AgendaPageProps {
  onNavigateHome: () => void;
  onNavigate: (page: 'home' | 'agenda' | 'sponsorship' | 'gallery' | 'charity') => void;
}

export function AgendaPage({ onNavigateHome, onNavigate }: AgendaPageProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const agenda = [
    {
      day: 'Monday',
      date: 'November 30',
      events: [
        { time: '2:00 PM', title: 'Guest Arrival & Welcome', desc: 'Check-in to your private villa with personal concierge greeting', icon: '🏝️' },
        { time: '6:00 PM', title: 'Opening Reception', desc: 'Champagne welcome on the beach with canapés and live steel drums', icon: '🥂' },
        { time: '8:00 PM', title: 'Welcome Dinner', desc: 'Beachside dining under the stars featuring Caribbean-fusion cuisine', icon: '🍽️' },
      ]
    },
    {
      day: 'Tuesday',
      date: 'December 1',
      events: [
        { time: '8:00 AM', title: 'Breakfast & Warm-up', desc: 'Light training session with professional coaches on the practice court', icon: '🎾' },
        { time: '10:00 AM', title: 'Pro-Am Matches Begin', desc: 'Round-robin tournament starts - Play alongside tennis legends', icon: '🏆' },
        { time: '1:00 PM', title: 'Lunch on the Lawn', desc: 'Casual island cuisine with fresh seafood and tropical refreshments', icon: '🌴' },
        { time: '4:00 PM', title: 'Afternoon Matches', desc: 'Doubles competition with rotating partnerships', icon: '🎾' },
        { time: '7:00 PM', title: 'Cocktails & Sunset', desc: 'Clifftop bar gathering with signature island cocktails', icon: '🌅' },
      ]
    },
    {
      day: 'Wednesday',
      date: 'December 2',
      events: [
        { time: '9:00 AM', title: 'Tennis Clinic', desc: 'Private coaching with pros - technique refinement and strategy sessions', icon: '🎾' },
        { time: '12:00 PM', title: 'Free Time', desc: 'Beach, spa treatments, water sports, or simply relax by the pool', icon: '☀️' },
        { time: '6:00 PM', title: 'Bocelli Rehearsal', desc: 'Exclusive behind-the-scenes access to Andrea Bocelli\'s soundcheck', icon: '🎵' },
        { time: '8:30 PM', title: 'Andrea Bocelli Concert', desc: 'Intimate performance on the Great Lawn under Caribbean stars', icon: '🎤' },
      ]
    },
    {
      day: 'Thursday',
      date: 'December 3',
      events: [
        { time: '10:00 AM', title: 'Semi-Final Matches', desc: 'Championship bracket begins - The competition heats up', icon: '🔥' },
        { time: '2:00 PM', title: 'Island Excursion', desc: 'Snorkeling & sailing adventure around the British Virgin Islands', icon: '⛵' },
        { time: '7:00 PM', title: 'Darius Rucker Performance', desc: 'Acoustic beachside concert featuring country and Hootie classics', icon: '🎸' },
        { time: '10:00 PM', title: 'Bonfire & Stargazing', desc: 'Beach celebration with s\'mores and rum cocktails', icon: '🔥' },
      ]
    },
    {
      day: 'Friday',
      date: 'December 4',
      events: [
        { time: '10:00 AM', title: 'Championship Finals', desc: 'Trophy matches - Singles and doubles championships decided', icon: '🏆' },
        { time: '1:00 PM', title: 'Awards Luncheon', desc: 'Celebration & trophy presentation with Richard Branson', icon: '🥇' },
        { time: '4:00 PM', title: 'Free Afternoon', desc: 'Relax and enjoy the island - final moments in paradise', icon: '🌺' },
        { time: '8:00 PM', title: 'Farewell Gala', desc: 'Black-tie dinner celebration with live music and dancing', icon: '🎩' },
      ]
    },
    {
      day: 'Saturday',
      date: 'December 5',
      events: [
        { time: '10:00 AM', title: 'Departure Day', desc: 'Breakfast & fond farewells - Until we meet again', icon: '👋' },
      ]
    },
  ];

  const highlights = [
    { icon: Calendar, title: '6 Days', desc: 'Of unforgettable moments' },
    { icon: Clock, title: '40+ Events', desc: 'Curated experiences' },
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
              <button onClick={() => { onNavigateHome(); setTimeout(() => document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="font-body text-sm tracking-wide transition-colors text-stone-600 hover:text-emerald-800">Talent</button>
              <button onClick={() => onNavigate('gallery')} className="font-body text-sm tracking-wide transition-colors text-stone-600 hover:text-emerald-800">Gallery</button>
              <button onClick={() => onNavigate('sponsorship')} className="font-body text-sm tracking-wide transition-colors text-stone-600 hover:text-emerald-800">Sponsorship</button>
              <button onClick={() => onNavigate('charity')} className="font-body text-sm tracking-wide transition-colors text-stone-600 hover:text-emerald-800">Charity</button>
              <button onClick={() => onNavigate('agenda')} className="font-body text-sm tracking-wide transition-colors text-emerald-800 font-medium">Agenda</button>
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
            November 30 – December 5, 2026
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.95]">
            Your Week in <br /><span className="italic">Paradise</span>
          </h1>
          <p className="font-body text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
            A carefully orchestrated schedule of tennis excellence, world-class performances, 
            island adventures, and moments you'll treasure forever.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {highlights.map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 min-w-[200px]">
                <item.icon className="w-8 h-8 text-white mb-3 mx-auto" />
                <p className="font-display text-3xl text-white mb-1">{item.title}</p>
                <p className="font-body text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <button className="font-body bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-stone-100 transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Full Schedule PDF
          </button>
        </div>
      </section>

      {/* DAILY SCHEDULE */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              Day by Day <span className="italic text-emerald-800">Schedule</span>
            </h2>
            <p className="font-body text-stone-600 max-w-2xl mx-auto">
              Every detail has been thoughtfully planned to create the perfect balance 
              of competition, entertainment, and relaxation.
            </p>
          </div>

          <div className="space-y-16">
            {agenda.map((day, idx) => (
              <div key={idx} className="relative">
                {/* Day Header */}
                <div className="mb-8 pb-6 border-b-2 border-emerald-800">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                      <h3 className="font-display text-4xl md:text-5xl text-stone-900 mb-2">{day.day}</h3>
                      <p className="font-body text-emerald-800 text-xl font-medium">{day.date}, 2026</p>
                    </div>
                    <p className="font-body text-stone-500">Day {idx + 1} of 6</p>
                  </div>
                </div>

                {/* Events Timeline */}
                <div className="space-y-6 relative pl-8 md:pl-16">
                  {/* Vertical line */}
                  <div className="absolute left-0 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-800 via-emerald-600 to-transparent" />
                  
                  {day.events.map((event, eventIdx) => (
                    <div 
                      key={eventIdx}
                      className="group relative"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-[34px] md:-left-[26px] top-3 w-4 h-4 rounded-full bg-emerald-800 ring-4 ring-stone-50 group-hover:ring-emerald-100 transition-all" />
                      
                      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.01] border border-stone-100 group-hover:border-emerald-200">
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Time & Icon */}
                          <div className="flex items-center gap-4 md:flex-col md:items-start md:w-32 flex-shrink-0">
                            <div className="text-3xl">{event.icon}</div>
                            <p className="font-body text-emerald-800 font-bold text-lg tracking-wide">{event.time}</p>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-grow">
                            <h4 className="font-display text-2xl md:text-3xl text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors">
                              {event.title}
                            </h4>
                            <p className="font-body text-stone-600 text-lg leading-relaxed">{event.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT INFO */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-display text-xl text-stone-900 mb-2">Flexible Schedule</h4>
              <p className="font-body text-stone-600 text-sm">
                All activities are optional. Create your own perfect experience.
              </p>
            </div>
            <div>
              <h4 className="font-display text-xl text-stone-900 mb-2">Weather Dependent</h4>
              <p className="font-body text-stone-600 text-sm">
                Some activities may change based on conditions. We adapt seamlessly.
              </p>
            </div>
            <div>
              <h4 className="font-display text-xl text-stone-900 mb-2">All Times AST</h4>
              <p className="font-body text-stone-600 text-sm">
                Atlantic Standard Time. Please adjust accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready to experience <span className="italic">paradise</span>?
          </h2>
          <p className="font-body text-white/80 text-lg mb-10">
            Limited spaces available. Join us for the most exclusive week of 2026.
          </p>
          <button className="font-body bg-white text-stone-900 px-10 py-4 rounded-full font-medium hover:bg-stone-100 transition-all duration-300 hover:shadow-2xl hover:scale-105">
            Reserve Your Spot Now
          </button>
        </div>
      </section>
    </div>
  );
}