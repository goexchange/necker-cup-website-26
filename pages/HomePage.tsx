import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ChevronDown, Check } from 'lucide-react';
import { useReservationForm } from '@/app/context/ReservationFormContext';

const packages = [
  { name: 'Pro-Am: Player — Necker Island', price: '$109,750', nights: '5 Nights / couple', desc: 'Stay on Necker Island for 5 nights (November 29 - December 4, 2026). Enjoy meals, events and parties, including the End of the World party, on Necker Island. One 2-person playing team spot to play in the Necker Cup.' },
  { name: 'Pro-Am: Player — Branson Estate, Moskito', price: '$99,250', nights: '5 Nights / couple', desc: 'Stay at the Branson Estate on Moskito Island for 5 nights (November 29 - December 4, 2026). Enjoy meals, events and parties, including the End of the World party, on Necker Island. One 2-person playing team spot to play in the Necker Cup.' },
  { name: 'Pro-Am: Spectator — Necker Island', price: '$78,750', nights: '5 Nights / couple', desc: 'Stay on Necker Island for 5 nights (November 29 - December 4, 2026). Enjoy meals, events and parties, including the End of the World party, on Necker Island. Watch all the fun of the Necker Cup while mixing and mingling with pros, legends and celebrities.' },
  { name: 'Pro-Am: Spectator — Branson Estate, Moskito', price: '$67,250', nights: '5 Nights / couple', desc: 'Stay at the Branson Estate on Moskito Island for 5 nights (November 29 - December 4, 2026). Enjoy meals, events and parties, including the End of the World party, on Necker Island. Watch all the fun of the Necker Cup while mixing and mingling with pros, legends and celebrities.' },
];

const galleryImages = [
  'https://www.virginlimitededition.com/media/fqxjncjn/necker-island-aerial-6.jpg',
  'https://www.virgin.com/sites/virgin.com/files/necker-cup-2019-courts-night.jpg',
  'https://www.virginlimitededition.com/media/kz0fgcjl/necker-island-great-house-exterior.jpg',
  'https://www.virginlimitededition.com/media/r1qphnpn/moskito-island-aerial.jpg',
  'https://www.virgin.com/sites/virgin.com/files/necker-cup-2022-group.jpg',
  'https://www.virgin.com/sites/virgin.com/files/necker-cup-end-of-world-party.jpg',
];

const agenda = [
  { day: 'Monday', date: 'November 30', events: [{ time: '2:00 PM', title: 'Guest Arrival & Welcome', desc: 'Check-in to your private villa' }, { time: '6:00 PM', title: 'Opening Reception', desc: 'Champagne welcome on the beach' }, { time: '8:00 PM', title: 'Welcome Dinner', desc: 'Beachside dining under the stars' }] },
  { day: 'Tuesday', date: 'December 1', events: [{ time: '8:00 AM', title: 'Breakfast & Warm-up', desc: 'Light training session' }, { time: '10:00 AM', title: 'Pro-Am Matches Begin', desc: 'Round-robin tournament starts' }, { time: '1:00 PM', title: 'Lunch on the Lawn', desc: 'Casual island cuisine' }, { time: '4:00 PM', title: 'Afternoon Matches', desc: 'Doubles competition' }, { time: '7:00 PM', title: 'Cocktails & Sunset', desc: 'Clifftop bar gathering' }] },
  { day: 'Wednesday', date: 'December 2', events: [{ time: '9:00 AM', title: 'Tennis Clinic', desc: 'Private coaching with pros' }, { time: '12:00 PM', title: 'Free Time', desc: 'Beach, spa, or water sports' }, { time: '6:00 PM', title: 'Bocelli Rehearsal', desc: 'Exclusive behind-the-scenes access' }, { time: '8:30 PM', title: 'Andrea Bocelli Concert', desc: 'Intimate performance on the Great Lawn' }] },
  { day: 'Thursday', date: 'December 3', events: [{ time: '10:00 AM', title: 'Semi-Final Matches', desc: 'Championship bracket begins' }, { time: '2:00 PM', title: 'Island Excursion', desc: 'Snorkeling & sailing adventure' }, { time: '7:00 PM', title: 'Darius Rucker Performance', desc: 'Acoustic beachside concert' }, { time: '10:00 PM', title: 'Bonfire & Stargazing', desc: 'Beach celebration' }] },
  { day: 'Friday', date: 'December 4', events: [{ time: '10:00 AM', title: 'Championship Finals', desc: 'Trophy matches' }, { time: '1:00 PM', title: 'Awards Luncheon', desc: 'Celebration & trophy presentation' }, { time: '4:00 PM', title: 'Free Afternoon', desc: 'Relax and enjoy the island' }, { time: '8:00 PM', title: 'Farewell Gala', desc: 'Black-tie dinner celebration' }] },
  { day: 'Saturday', date: 'December 5', events: [{ time: '10:00 AM', title: 'Departure Day', desc: 'Breakfast & fond farewells' }] },
];

const sponsors = { presenting: ['Virgin Limited Edition', 'Rolex'], premier: ['NetJets', 'Dom Pérignon', 'American Express', 'Four Seasons'], partners: ['Wilson', 'Lacoste', 'Molton Brown', 'Land Rover', 'Bose', 'Tiffany & Co.'] };

export function HomePage() {
  const [activePackage, setActivePackage] = useState(1);
  const { openForm } = useReservationForm();

  useEffect(() => {
    const hash = window.location.hash?.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 antialiased">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .animate-fade-up { animation: fadeUp 1s ease-out forwards; }
        .animate-fade-up-delay-1 { animation: fadeUp 1s ease-out 0.2s forwards; opacity: 0; }
        .animate-fade-up-delay-2 { animation: fadeUp 1s ease-out 0.4s forwards; opacity: 0; }
        .animate-fade-up-delay-3 { animation: fadeUp 1s ease-out 0.6s forwards; opacity: 0; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .text-shadow-hero { text-shadow: 0 2px 40px rgba(0,0,0,0.3); }
        .gradient-radial { background: radial-gradient(ellipse at top right, rgba(255,255,255,0.1) 0%, transparent 50%); }
      `}</style>

      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://www.virginlimitededition.com/media/fqxjncjn/necker-island-aerial-6.jpg')` }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-teal-800/50 to-cyan-900/60" />
          <div className="absolute inset-0 gradient-radial" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-32">
          <div className="max-w-3xl">
            <p className="font-body text-white/70 text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up">November 29 – December 4, 2026</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-4 animate-fade-up-delay-1 text-shadow-hero">Necker Cup 26</h1>
            <p className="font-display text-xl md:text-2xl text-white/90 mb-8 animate-fade-up-delay-1">Tennis Pro-Am | Necker Island, BVI</p>
            <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mb-10 animate-fade-up-delay-2">Will you join us on Necker Island? World-class pro-am tennis, charity dinner & End of the World party—and much more.</p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <button onClick={openForm} className="font-body bg-white text-stone-900 px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-stone-100 transition-all duration-300 hover:shadow-xl hover:scale-105">Explore Packages</button>
              <button className="font-body border-2 border-white/40 text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 hover:shadow-lg"><Play className="w-4 h-4" />Watch Film</button>
            </div>
          </div>
          <div className="absolute right-6 lg:right-12 bottom-20 lg:bottom-32 hidden lg:block animate-fade-up-delay-3">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <p className="font-body text-white/60 text-xs tracking-widest uppercase mb-2">Past guests</p>
              <p className="font-display text-white text-2xl mb-1">Andrea Bocelli</p>
              <p className="font-display text-white/80 text-lg italic">Florida Georgia Line · Jamie Foxx · Pitbull</p>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"><ChevronDown className="w-6 h-6 text-white/60" /></div>
        </div>
      </section>

      <section id="experience" className="py-24 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-6">About the Necker Cup</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.1] mb-8">Fun, friendship, networking—<br /><span className="italic text-emerald-800">and tennis.</span></h2>
              <p className="font-body text-stone-600 text-lg leading-relaxed mb-6">The Necker Cup is a six-day, five-night all-inclusive pro-am tennis tournament on Sir Richard Branson's private Necker Island in the British Virgin Islands. Founded in 2011 by <strong>Remington Reynolds</strong>, <strong>Trevor Short</strong>, and <strong>Mike Richards (DJ Mehow)</strong>, the event is organized by <strong>Premier Live</strong> and <strong>Mehow</strong>—part vacation, part networking summit, part music festival, and part charity fundraiser.</p>
              <p className="font-body text-stone-600 text-lg leading-relaxed mb-6">ATP and WTA tour players and legends are paired with amateur teams of all skill levels. A handicapped scoring format keeps things competitive for everyone. Teams of up to two amateurs partner with a pro; over several days of round-robin play, the top teams advance to compete for the coveted Necker Cup trophy. The tournament director is <strong>Vasek Pospisil</strong>, 2014 Wimbledon doubles champion and Davis Cup winner.</p>
              <p className="font-body text-stone-600 text-lg leading-relaxed mb-10">The week builds toward a Pro Exhibition match on the final day, then the Charity Dinner & Auction and the legendary End of the World party. The 2026 Necker Cup benefits the National Tennis Foundation and Virgin Unite.</p>
              <div className="flex gap-12">
                {[['5', 'Nights'], ['6', 'Days'], ['Pro-Am', 'Tennis']].map(([num, label]) => (
                  <div key={label}><p className="font-display text-5xl text-emerald-800 mb-1">{num}</p><p className="font-body text-stone-500 text-sm">{label}</p></div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-emerald-800/20 to-teal-700/30 overflow-hidden shadow-2xl bg-cover bg-center hover:scale-[1.02] transition-transform duration-500" style={{ backgroundImage: `url('https://www.virgin.com/sites/virgin.com/files/necker-cup-2019-courts-night.jpg')` }} />
              <div className="absolute -bottom-8 -left-8 w-48 h-64 rounded-2xl shadow-xl hidden lg:block bg-cover bg-center hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('https://www.virginlimitededition.com/media/kz0fgcjl/necker-island-great-house-exterior.jpg')` }} />
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="py-24 lg:py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">Event Packages & Pricing</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">Necker Cup Pro-Am <span className="italic">Player & Spectator</span></h2>
            <p className="font-body text-stone-600 max-w-2xl mx-auto">November 29 – December 4, 2026. Stay on Necker Island or at the Branson Beach Estate on Moskito Island (5–7 min boat ride).</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {packages.map((pkg, i) => (
              <div key={i} className={`group relative bg-white rounded-3xl p-8 lg:p-10 transition-all duration-500 cursor-pointer ${activePackage === i ? 'shadow-2xl shadow-emerald-900/10 scale-[1.02] ring-2 ring-emerald-800/20' : 'shadow-lg hover:shadow-xl hover:scale-[1.01]'}`} onClick={() => setActivePackage(i)}>
                {activePackage === i && <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center"><Check className="w-5 h-5 text-white" /></div>}
                <p className="font-body text-stone-400 text-xs tracking-widest uppercase mb-4">{pkg.nights}</p>
                <h3 className="font-display text-2xl lg:text-3xl text-stone-900 mb-4 leading-tight">{pkg.name}</h3>
                <p className="font-body text-stone-500 mb-8 leading-relaxed text-sm">{pkg.desc}</p>
                <div className="flex items-end justify-between pt-6 border-t border-stone-100">
                  <div><p className="font-body text-stone-400 text-xs uppercase tracking-wider mb-1">From</p><p className="font-display text-3xl lg:text-4xl text-emerald-800">{pkg.price}</p></div>
                  <Link to="/packages" className="font-body text-sm text-emerald-800 font-medium flex items-center gap-2 group-hover:gap-3 transition-all hover:text-emerald-900">Details →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12"><p className="font-body text-stone-500 text-sm">When we say at leisure—amenities and activities are included (except the Spa). Day 6: depart after breakfast; boats to Terrance B. Lettsome Airport (Beef Island) by 12 noon.</p></div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-6">Activities Beyond Tennis</p>
          <p className="font-body text-stone-600 text-lg md:text-xl leading-relaxed max-w-3xl mb-8">When they say "at leisure," guests have full access to everything the island has to offer: kiteboarding and kite surfing, sailing (including Hobie Cat races), wakeboarding, snorkeling and scuba diving, paddleboarding, beach tennis and pickleball, swimming pools and hot tubs, lemur feeding, tortoise encounters, island walks and hiking. Spa services are one of the few things not included.</p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-8">Accommodations</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-stone-200">
                <img src="https://www.virginlimitededition.com/media/kz0fgcjl/necker-island-great-house-exterior.jpg" alt="Necker Island Great House" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-2xl text-stone-900 mb-4">Necker Island</h3>
              <p className="font-body text-stone-600 leading-relaxed">Necker Island is a 74-acre private island owned by Sir Richard Branson, with turquoise Caribbean waters, coral reefs, and white sandy beaches. The island features the iconic Great House, multiple Balinese-style villas, championship tennis courts, and endless activities. All tennis, meals, dinners, and parties take place on Necker Island.</p>
            </div>
            <div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-stone-200">
                <img src="https://www.virginlimitededition.com/media/r1qphnpn/moskito-island-aerial.jpg" alt="Moskito Island - The Branson Beach Estate" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-2xl text-stone-900 mb-4">The Branson Beach Estate on Moskito Island</h3>
              <p className="font-body text-stone-600 leading-relaxed">Moskito Island is Branson's neighboring private island, home to The Branson Beach Estate. The property offers stunning accommodation with private pools, ocean views, and the same level of luxury you'd expect—just a 5–7 minute boat ride from Necker Island.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="artists" className="py-24 lg:py-40 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-body text-stone-400 text-sm tracking-[0.2em] uppercase mb-6">Past Pros, Musicians & Celebrity Guests</p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-10">Tennis Legends & Pros</h2>
          <div className="flex flex-wrap gap-4 justify-start mb-16">
            {['Novak Djokovic', 'Rafael Nadal', 'Bjorn Borg', 'Rod Laver', 'Caroline Wozniacki', 'Juan Martin Del Potro', 'Dominic Thiem', 'Martina Navratilova', 'Jack Sock', 'Mike Bryan', 'Stefan Edberg', 'Boris Becker', 'Tommy Haas', 'Heather Watson', 'Vasek Pospisil (Tournament Director)', 'Kim Clijsters', 'Grigor Dimitrov', 'Eugenie Bouchard', 'Kevin Anderson', 'Arantxa Sanchez-Vicario'].map(name => (
              <div key={name} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-emerald-400/50 transition-all duration-300 text-center shrink-0" style={{ width: 200, height: 200 }}>
                <span className="font-body text-white font-medium text-sm leading-tight">{name}</span>
              </div>
            ))}
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-10">Musicians & Celebrities</h2>
          <div className="flex flex-wrap gap-4 justify-start">
            {['Andrea Bocelli', 'Kenny Chesney', 'Florida Georgia Line', 'Pitbull', 'Jamie Foxx', 'Jimmy Buffett', 'Darius Rucker', 'Jewel', 'Michael Franti', 'Redfoo (LMFAO)', 'Sean Paul', 'Kate Upton', 'Kevin Costner'].map(name => (
              <div key={name} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-emerald-400/50 transition-all duration-300 text-center shrink-0" style={{ width: 200, height: 200 }}>
                <span className="font-body text-white font-medium text-sm leading-tight">{name}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-stone-400 text-sm mt-10">
            For the full list with details, visit <Link to="/talent" className="text-emerald-400 hover:text-emerald-300 underline">Talent</Link> or <a href="https://premierlive.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline">premierlive.com</a>
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-stone-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-stone-900 leading-[1.2] mb-8">"So much fun, so relaxed. We are here for a good reason and I think the people who are here are all passionate about tennis, sports and young people going into sports."</blockquote>
          <p className="font-body text-stone-600 font-medium">Caroline Wozniacki</p><p className="font-body text-stone-500 text-sm">Necker Cup Two Time Pro</p>
        </div>
      </section>

      <section id="gallery" className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16"><p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">Gallery</p><h2 className="font-display text-4xl md:text-5xl text-stone-900">A Glimpse of <span className="italic">Paradise</span></h2></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group ${i === 0 || i === 3 ? 'md:row-span-2' : ''}`}>
                <div className="w-full h-full bg-cover bg-center aspect-square md:aspect-auto min-h-[200px] md:min-h-[300px] group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${img}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-px bg-emerald-800 mx-auto mb-12" />
          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-[1.2] mb-10">"Hall of fame tennis legends, current stars, and a wonderful group of amateurs playing our favourite sport in the most <span className="italic text-emerald-800">perfect setting</span>. It really is tennis paradise."</blockquote>
          <div className="flex items-center justify-center gap-4"><div className="w-px h-12 bg-stone-200" /><div className="text-left"><p className="font-body text-stone-900 font-medium">Sir Richard Branson</p><p className="font-body text-stone-500 text-sm">Founder, Necker Cup</p></div></div>
        </div>
      </section>

      <section id="sponsors" className="py-24 lg:py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16"><p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">Partners</p><h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">In Partnership with <span className="italic">Excellence</span></h2><p className="font-body text-stone-600 max-w-2xl mx-auto">The Necker Cup is proudly supported by world-class brands that share our commitment to exceptional experiences.</p></div>
          <div className="mb-16"><p className="font-body text-stone-400 text-xs tracking-[0.25em] uppercase text-center mb-8">Presenting Sponsors</p><div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">{sponsors.presenting.map(sp => <div key={sp} className="group relative bg-white rounded-2xl px-12 py-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"><p className="font-display text-2xl md:text-3xl text-stone-800 group-hover:text-emerald-800 transition-colors">{sp}</p></div>)}</div></div>
          <div className="mb-16"><p className="font-body text-stone-400 text-xs tracking-[0.25em] uppercase text-center mb-8">Premier Partners</p><div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">{sponsors.premier.map(sp => <div key={sp} className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center hover:scale-105"><p className="font-display text-lg md:text-xl text-stone-700 group-hover:text-emerald-800 transition-colors text-center">{sp}</p></div>)}</div></div>
          <div><p className="font-body text-stone-400 text-xs tracking-[0.25em] uppercase text-center mb-8">Event Partners</p><div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">{sponsors.partners.map(sp => <div key={sp} className="group relative"><p className="font-body text-sm md:text-base text-stone-500 group-hover:text-emerald-800 transition-colors">{sp}</p></div>)}</div></div>
          <div className="text-center mt-16 pt-12 border-t border-stone-200"><p className="font-body text-stone-600 mb-4">Interested in partnering with the Necker Cup?</p><Link to="/sponsorship" className="font-body bg-emerald-800 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-900 transition-all hover:shadow-lg hover:scale-105 inline-block">View Partnership Opportunities</Link></div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Join Us at the 2026 Necker Cup</h2>
          <p className="font-body text-white/80 text-lg mb-10">November 29 – December 4, 2026 · Necker Island, BVI</p>
          <button onClick={openForm} className="font-body bg-white text-stone-900 px-10 py-4 rounded-full font-medium hover:bg-stone-100 transition-all duration-300 hover:shadow-2xl hover:scale-105">Reserve Your Spot Now</button>
          <div className="mt-12 pt-12 border-t border-white/20 text-left max-w-2xl mx-auto">
            <p className="font-body text-white/90 font-medium mb-4">Contact</p>
            <p className="font-body text-white/80 text-sm mb-2"><strong>Remington Reynolds</strong> · <a href="mailto:rem@premierlive.com" className="underline hover:text-white">rem@premierlive.com</a> · <a href="tel:+16784786649" className="underline hover:text-white">+1 678.478.6649</a></p>
            <p className="font-body text-white/80 text-sm mb-2"><strong>Trevor Short</strong> · <a href="mailto:trevor@inspiringdreams.com" className="underline hover:text-white">trevor@inspiringdreams.com</a> · <a href="tel:+16154989087" className="underline hover:text-white">+1 615.498.9087</a></p>
            <p className="font-body text-white/80 text-sm"><strong>Mike Richards</strong> · <a href="mailto:mike@djmehow.com" className="underline hover:text-white">mike@djmehow.com</a> · <a href="tel:+447956305647" className="underline hover:text-white">+44 (0) 7956 305 647</a></p>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center"><span className="font-display text-lg font-semibold">N</span></div><span className="font-display text-xl">Necker Cup 26</span></div>
              <p className="font-body text-stone-400 text-sm leading-relaxed">Tennis Pro-Am · November 29 – December 4, 2026 · Necker Island, BVI. Benefits National Tennis Foundation & Virgin Unite.</p>
            </div>
            <div>
              <h3 className="font-body text-sm tracking-wider uppercase mb-4 text-stone-500">Quick Links</h3>
              <div className="space-y-3">
                <Link to="/experience" className="font-body text-stone-300 hover:text-white transition-colors block">Experience</Link>
                <Link to="/packages" className="font-body text-stone-300 hover:text-white transition-colors block">Packages</Link>
                <Link to="/talent" className="font-body text-stone-300 hover:text-white transition-colors block">Talent</Link>
                <Link to="/gallery" className="font-body text-stone-300 hover:text-white transition-colors block">Gallery</Link>
                <Link to="/charity" className="font-body text-stone-300 hover:text-white transition-colors block">Charity</Link>
              </div>
            </div>
            <div>
              <h3 className="font-body text-sm tracking-wider uppercase mb-4 text-stone-500">Contact</h3>
              <div className="space-y-2 text-sm">
                <p className="font-body text-stone-300">Remington Reynolds · <a href="mailto:rem@premierlive.com" className="hover:text-white transition-colors">rem@premierlive.com</a></p>
                <p className="font-body text-stone-300">Trevor Short · <a href="mailto:trevor@inspiringdreams.com" className="hover:text-white transition-colors">trevor@inspiringdreams.com</a></p>
                <p className="font-body text-stone-300">Mike Richards · <a href="mailto:mike@djmehow.com" className="hover:text-white transition-colors">mike@djmehow.com</a></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-stone-800">
            <div className="flex gap-8">{['Privacy Policy', 'Terms & Conditions', 'Contact'].map(link => <a key={link} href="#" className="font-body text-sm text-stone-400 hover:text-white transition-colors">{link}</a>)}</div>
            <p className="font-body text-sm text-stone-500">© 2026 Necker Cup. All rights reserved. Powered by Premier Live & Mehow</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
