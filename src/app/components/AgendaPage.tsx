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
      day: 'Sunday',
      date: 'November 29',
      events: [
        { time: '4:00 PM', title: 'Champagne Arrival - Beach House', desc: 'Welcome to Necker Island! Arrive at the Beach House Pavilion for champagne reception.', icon: '🥂', location: 'Beach House Pavilion' },
        { time: '4:30 PM', title: 'Pick Up Tennis', desc: 'Gather tennis equipment and make final preparations before the tournament briefing.', icon: '🎾', location: 'Beach House Pavilion' },
        { time: '7:00 PM', title: 'Welcome Cocktails', desc: 'Welcome cocktails will be served at the Great House ahead of the evening program.', icon: '🍸', location: 'Great House' },
        { time: '8:00 PM', title: 'Welcome Dinner Served', desc: 'Join us for the Opening Night Dinner at the Great House — a great chance to meet fellow guests and pros, and get a quick overview of the exciting five days of tennis and fun ahead. Great House Family Style (Dessert served around bar area to get everyone up and dancing!)', icon: '🍽️', location: 'Great House' },
        { time: '8:30 PM', title: 'Welcome Speech', desc: 'Listen to Richard and the Founders welcome all guests to the 15th annual Necker Cup.', icon: '🎤', location: 'Great House' },
        { time: '10:00 PM', title: 'After Party with DJ - Will', desc: 'After-Party to close out the evening.', icon: '🎵', location: 'Great House' },
      ]
    },
    {
      day: 'Monday',
      date: 'November 30',
      events: [
        { time: '7:30 AM', title: 'Breakfast on Necker Island', desc: 'Enjoy Breakfast at the Great House on Necker Island', icon: '☕', location: 'Great House' },
        { time: '8:00 AM', title: 'Yoga', desc: 'Morning yoga session to help guests relax and start the day with focus and energy.', icon: '🧘', location: 'Great House' },
        { time: '8:00 AM', title: 'Guided Island Walk & Animal Tour', desc: 'Guided walk around Necker Island. Approximately 90 minutes - wear your sneakers.', icon: '🚶', location: 'Great House' },
        { time: '9:00 AM', title: 'Inspire Cards', desc: 'Start your day with meaningful conversation led by Foundation youth and staff.', icon: '💬', location: 'Great House' },
        { time: '9:00 AM', title: 'Golf Nail Bay', desc: 'Head to Red Dock to catch a boat to Nail Bay Resort. No clubs required. Barefoot golf with a Butler to cater to your every need. Semi-competitive format and rules. Spots are limited, so call the concierge to reserve your spot. First come, first served.', icon: '⛳', location: 'Nail Bay Golf Course' },
        { time: '9:30 AM', title: 'Leisure Day - Water Sports - Tennis - Beach', desc: 'Open leisure day where guests can enjoy water sports, tennis activities, or time at the beach.', icon: '🏖️', location: 'Various Locations' },
        { time: '10:00 AM', title: 'Tennis Clinic', desc: 'Instructional tennis clinic led by professionals to help guests improve their skills.', icon: '🎾', location: 'Tennis Courts' },
        { time: '12:00 PM', title: 'Sailboat Race to Turtle Beach', desc: 'Sail around Necker to lunch at Turtle Beach.', icon: '⛵', location: 'Watersports Center' },
        { time: '12:45 PM', title: 'Lunch - Turtle Beach', desc: 'Turtle Beach; Pizza Inspired, Family Style.', icon: '🍕', location: 'Turtle Beach' },
        { time: '3:00 PM', title: 'Lemur Feeding', desc: 'Interactive lemur-feeding experience. (Two groups if needed)', icon: '🐒', location: 'Lemur Habitat' },
        { time: '3:00 PM', title: 'Meditation', desc: 'Join us at Eve\'s Memorial for an afternoon Guided Meditation.', icon: '🧘', location: 'Temple' },
        { time: '3:15 PM', title: 'Amateur Tennis Tryout and Rating for Pro-Am', desc: 'If you are playing in the pro-am for the first time, please come to the courts to get rated. You can join the tennis clinic afterward at 3 PM.', icon: '🎾', location: 'Tennis Courts' },
        { time: '4:00 PM', title: 'Tipsy Team Tennis', desc: 'Enjoy lighthearted, cocktail-inspired tennis games with a mix of fun activities, open to all levels from 4 p.m. onwards.', icon: '🎾', location: 'Centre Court' },
        { time: '5:00 PM', title: 'Soul Bowl Hot Tub Meet Up', desc: 'Casual meet-up at the Soul Bowl hot tub for guests to relax and connect.', icon: '🛁', location: 'Crocodile Pool' },
        { time: '7:00 PM', title: 'Poker', desc: 'If you like Poker, let us know and we will add you to the game. (Limited to 8 Guests)', icon: '🃏', location: 'Beach House Pavilion' },
        { time: '7:00 PM', title: 'Cocktails at Palm Beach', desc: 'Evening cocktails at Palm Beach', icon: '🍹', location: 'Beach House Pavilion' },
        { time: '8:00 PM', title: 'Dinner – Palm Beach', desc: 'Mexican Inspired, Buffet', icon: '🌮', location: 'Palm Beach' },
        { time: '9:00 PM', title: 'Sax & DJ Afterparty', desc: 'Kam and his DJ bring energy to any party. Get ready to dance.', icon: '🎷', location: 'Palm Beach' },
      ]
    },
    {
      day: 'Tuesday',
      date: 'December 1',
      events: [
        { time: '8:00 AM', title: 'Yoga', desc: 'Morning yoga session to help guests relax and start the day with focus and energy.', icon: '🧘', location: 'Temple' },
        { time: '8:00 AM', title: 'Breakfast', desc: 'Start your day with a delicious breakfast', icon: '☕', location: 'Great House' },
        { time: '8:30 AM', title: 'Start of Necker Cup - Tennis Session 1', desc: 'Watch the opening rounds of the 2026 Necker Cup Pro-Am.', icon: '🏆', location: 'Centre Court' },
        { time: '9:00 AM', title: 'Inspire Cards', desc: 'Start your day with meaningful conversation led by Foundation youth and staff.', icon: '💬', location: 'Great House' },
        { time: '12:30 PM', title: 'Lunch – Crocodile Table & Upper Beach House', desc: 'Light and Fresh; Family Style', icon: '🥗', location: 'Crocodile Table & Upper Beach House' },
        { time: '1:30 PM', title: 'Necker Cup - Day 1 - Afternoon Rounds', desc: 'Continue watching the exciting Pro-Am tournament matches.', icon: '🎾', location: 'Tennis Courts' },
        { time: '4:00 PM', title: 'Meditation', desc: 'Afternoon meditation session for relaxation and mindfulness.', icon: '🧘', location: 'Temple' },
        { time: '6:00 PM', title: 'Cocktails – Great House', desc: 'Evening cocktails at the Great House', icon: '🍸', location: 'Great House' },
        { time: '7:00 PM', title: 'Bocelli Dinner', desc: 'Special dinner before the evening performance', icon: '🍽️', location: 'Great House Upper Roof Deck' },
        { time: '9:00 PM', title: 'Bocelli Performance', desc: 'Join us in the Great House after dinner for an intimate live performance by Andrea Bocelli. It will be a rare and unforgettable evening of music in one of the most magical settings on Necker Island.', icon: '🎤', location: 'Great House' },
      ]
    },
    {
      day: 'Wednesday',
      date: 'December 2',
      events: [
        { time: '7:30 AM', title: 'Breakfast', desc: 'Morning breakfast to fuel your day', icon: '☕', location: 'Great House' },
        { time: '8:00 AM', title: 'Yoga', desc: 'Morning yoga session', icon: '🧘', location: 'Great House' },
        { time: '8:45 AM', title: 'Necker Cup – Day 2 - Morning Rounds', desc: 'Day 2 of the Necker Cup Pro-Am tournament', icon: '🎾', location: 'Tennis Courts' },
        { time: '9:00 AM', title: 'Inspire Cards', desc: 'Start your day with meaningful conversation led by Foundation youth and staff.', icon: '💬', location: 'Great House' },
        { time: '12:30 PM', title: 'Lunch', desc: 'Eastern Med, Buffet', icon: '🥙', location: 'Crocodile Pool' },
        { time: '2:00 PM', title: 'Padel Tournament', desc: 'Join us for a competitive padel tournament - teams of two.', icon: '🎾', location: 'Padel Court' },
        { time: '3:00 PM', title: 'Great House Golf Challenge', desc: 'Compete in the Great House Golf Challenge. Hit balls off the great house to a floating target.', icon: '⛳', location: 'Great House' },
        { time: '3:00 PM', title: 'Tennis Clinic w Tim Blenkiron', desc: 'Professional tennis clinic with Tim Blenkiron', icon: '🎾', location: 'Centre Court' },
        { time: '5:00 PM', title: 'Soul Bowl Hot Tub Meet Up', desc: 'Relax and connect at the hot tub', icon: '🛁', location: 'Crocodile Pool & Bar Hot Tub' },
        { time: '7:00 PM', title: 'Cocktails', desc: 'Evening cocktails', icon: '🍹', location: 'Turtle Beach' },
        { time: '8:00 PM', title: 'White Night Dinner', desc: 'Turtle Beach, Caribbean, Buffet (White Clothing Night)', icon: '🍽️', location: 'Turtle Beach' },
        { time: '9:30 PM', title: 'Live Performance TBD', desc: 'Evening live performance', icon: '🎵', location: 'Turtle Beach' },
        { time: '9:30 PM', title: 'After Party', desc: 'Continue the celebration with the after party', icon: '🎉', location: 'Turtle Beach' },
      ]
    },
    {
      day: 'Thursday',
      date: 'December 3',
      events: [
        { time: '7:30 AM', title: 'Breakfast', desc: 'Morning breakfast', icon: '☕', location: 'Great House' },
        { time: '8:00 AM', title: 'Yoga', desc: 'Join us for morning yoga and meditation.', icon: '🧘', location: 'Great House' },
        { time: '9:00 AM', title: 'Golf Nail Bay', desc: 'Head to Red Dock to catch a boat to Nail Bay Resort. No clubs required. Barefoot golf with a Butler to cater to your every need. Semi-competitive format and rules. Spots are limited, so call the concierge to reserve your spot. First come, first served.', icon: '⛳', location: 'Red Dock' },
        { time: '9:00 AM', title: 'Inspire Cards', desc: 'Start your day with meaningful conversation led by Foundation youth and staff.', icon: '💬', location: 'Great House' },
        { time: '9:30 AM', title: 'At Leisure / Treatments / Water Sports', desc: 'Free time for spa treatments, water sports, or relaxation', icon: '🏖️', location: 'Various Locations' },
        { time: '12:30 PM', title: 'Sushi Lunch', desc: 'Join us at the Crocodile Pool for a relaxed sushi lunch with a DJ.', icon: '🍣', location: 'Crocodile Pool' },
        { time: '1:30 PM', title: 'Beach Volleyball', desc: 'Beach volleyball tournament', icon: '🏐', location: 'Beach Volleyball Court' },
        { time: '3:45 PM', title: 'Necker Cup Finals & Exhibition Match', desc: 'Watch the championship matches and exhibition games', icon: '🏆', location: 'Centre Court' },
        { time: '4:15 PM', title: 'Live Video From Richard', desc: 'Special message from Richard Branson', icon: '📹', location: 'Beach House Pavilion' },
        { time: '4:20 PM', title: 'Group Picture All Guests', desc: 'Group photo with all Necker Cup guests', icon: '📸', location: 'Centre Court' },
        { time: '4:30 PM', title: 'Men\'s Exo', desc: 'Men\'s exhibition match', icon: '🎾', location: 'Centre Court' },
        { time: '5:00 PM', title: 'Necker Cup Finals', desc: 'The championship finals of the Necker Cup', icon: '🏆', location: 'Centre Court' },
        { time: '5:45 PM', title: 'Necker Cup Group Picture', desc: 'Come out to center court right after the Pro-Exo for the Necker Cup all group picture.', icon: '📸', location: 'Centre Court' },
        { time: '6:00 PM', title: 'Cocktails Reception', desc: 'Meet at the Great House after the tennis exhibition to get the Charity Dinner and Auction kicked off.', icon: '🍸', location: 'Great House' },
        { time: '7:00 PM', title: 'Charity Dinner & Live Auction', desc: 'Join us for the charity dinner and live auction to support our charitable partners.', icon: '🎗️', location: 'Great House' },
        { time: '9:30 PM', title: 'End of the World Party with Darius Rucker and DJ Mehow', desc: 'The ultimate celebration with live performance by Darius Rucker and DJ Mehow', icon: '🎸', location: 'Cabana Stage / Pool Bar' },
      ]
    },
    {
      day: 'Friday',
      date: 'December 4',
      events: [
        { time: '8:00 AM', title: 'Breakfast & Checkout Support', desc: 'Final breakfast and assistance with checkout', icon: '☕', location: 'Great House' },
        { time: '8:30 AM', title: 'Boat transfers to respective airports based on flights', desc: 'Departure transfers arranged based on your flight schedule', icon: '⛵', location: 'Red Dock' },
      ]
    },
  ];

  const highlights = [
    { icon: Calendar, title: '6 Days', desc: 'November 29 - December 4, 2026' },
    { icon: Clock, title: '50+ Events', desc: 'Curated experiences' },
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
            November 29 – December 4, 2026
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
                            <p className="font-body text-stone-600 text-lg leading-relaxed mb-2">{event.desc}</p>
                            {event.location && (
                              <p className="font-body text-stone-500 text-sm italic">📍 {event.location}</p>
                            )}
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
