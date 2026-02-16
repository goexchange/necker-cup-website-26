import { useReservationForm } from '@/app/context/ReservationFormContext';
import { publicImages } from '@/app/lib/publicImages';
import { Calendar, Clock } from 'lucide-react';

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
      { time: '9:00 AM', title: 'Golf Nail Bay', desc: 'Head to Red Dock to catch a boat to Nail Bay Resort. No clubs required. Barefoot golf with a Butler to cater to your every need.', icon: '⛳', location: 'Nail Bay Golf Course' },
      { time: '9:30 AM', title: 'Leisure Day - Water Sports - Tennis - Beach', desc: 'Open leisure day where guests can enjoy water sports, tennis activities, or time at the beach.', icon: '🏖️', location: 'Various Locations' },
      { time: '10:00 AM', title: 'Tennis Clinic', desc: 'Instructional tennis clinic led by professionals to help guests improve their skills.', icon: '🎾', location: 'Tennis Courts' },
      { time: '12:00 PM', title: 'Sailboat Race to Turtle Beach', desc: 'Sail around Necker to lunch at Turtle Beach.', icon: '⛵', location: 'Watersports Center' },
      { time: '12:45 PM', title: 'Lunch - Turtle Beach', desc: 'Turtle Beach; Pizza Inspired, Family Style.', icon: '🍕', location: 'Turtle Beach' },
      { time: '3:00 PM', title: 'Lemur Feeding', desc: 'Interactive lemur-feeding experience. (Two groups if needed)', icon: '🐒', location: 'Lemur Habitat' },
      { time: '3:00 PM', title: 'Meditation', desc: "Join us at Eve's Memorial for an afternoon Guided Meditation.", icon: '🧘', location: 'Temple' },
      { time: '3:15 PM', title: 'Amateur Tennis Tryout and Rating for Pro-Am', desc: 'If you are playing in the pro-am for the first time, please come to the courts to get rated.', icon: '🎾', location: 'Tennis Courts' },
      { time: '4:00 PM', title: 'Tipsy Team Tennis', desc: 'Enjoy lighthearted, cocktail-inspired tennis games with a mix of fun activities, open to all levels.', icon: '🎾', location: 'Centre Court' },
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
      { time: '8:00 AM', title: 'Yoga', desc: 'Morning yoga session.', icon: '🧘', location: 'Temple' },
      { time: '8:00 AM', title: 'Breakfast', desc: 'Start your day with a delicious breakfast', icon: '☕', location: 'Great House' },
      { time: '8:30 AM', title: 'Start of Necker Cup - Tennis Session 1', desc: 'Watch the opening rounds of the 2026 Necker Cup Pro-Am.', icon: '🏆', location: 'Centre Court' },
      { time: '9:00 AM', title: 'Inspire Cards', desc: 'Start your day with meaningful conversation led by Foundation youth and staff.', icon: '💬', location: 'Great House' },
      { time: '12:30 PM', title: 'Lunch', desc: 'Light and Fresh; Family Style', icon: '🥗', location: 'Crocodile Table & Upper Beach House' },
      { time: '1:30 PM', title: 'Necker Cup - Day 1 - Afternoon Rounds', desc: 'Continue watching the exciting Pro-Am tournament matches.', icon: '🎾', location: 'Tennis Courts' },
      { time: '4:00 PM', title: 'Meditation', desc: 'Afternoon meditation session for relaxation and mindfulness.', icon: '🧘', location: 'Temple' },
      { time: '6:00 PM', title: 'Cocktails', desc: 'Evening cocktails at the Great House', icon: '🍸', location: 'Great House' },
      { time: '7:00 PM', title: 'Bocelli Dinner', desc: 'Special dinner before the evening performance', icon: '🍽️', location: 'Great House Upper Roof Deck' },
      { time: '9:00 PM', title: 'Bocelli Performance', desc: 'Join us for an intimate live performance by Andrea Bocelli.', icon: '🎤', location: 'Great House' },
    ]
  },
  {
    day: 'Wednesday',
    date: 'December 2',
    events: [
      { time: '7:30 AM', title: 'Breakfast', desc: 'Morning breakfast to fuel your day', icon: '☕', location: 'Great House' },
      { time: '8:00 AM', title: 'Yoga', desc: 'Morning yoga session', icon: '🧘', location: 'Great House' },
      { time: '8:45 AM', title: 'Necker Cup – Day 2 - Morning Rounds', desc: 'Day 2 of the Necker Cup Pro-Am tournament', icon: '🎾', location: 'Tennis Courts' },
      { time: '9:00 AM', title: 'Inspire Cards', desc: 'Meaningful conversation led by Foundation youth and staff.', icon: '💬', location: 'Great House' },
      { time: '12:30 PM', title: 'Lunch', desc: 'Eastern Med, Buffet', icon: '🥙', location: 'Crocodile Pool' },
      { time: '2:00 PM', title: 'Padel Tournament', desc: 'Join us for a competitive padel tournament - teams of two.', icon: '🎾', location: 'Padel Court' },
      { time: '3:00 PM', title: 'Great House Golf Challenge', desc: 'Hit balls off the great house to a floating target.', icon: '⛳', location: 'Great House' },
      { time: '3:00 PM', title: 'Tennis Clinic w Tim Blenkiron', desc: 'Professional tennis clinic with Tim Blenkiron', icon: '🎾', location: 'Centre Court' },
      { time: '5:00 PM', title: 'Soul Bowl Hot Tub Meet Up', desc: 'Relax and connect at the hot tub', icon: '🛁', location: 'Crocodile Pool & Bar Hot Tub' },
      { time: '7:00 PM', title: 'Cocktails', desc: 'Evening cocktails', icon: '🍹', location: 'Turtle Beach' },
      { time: '8:00 PM', title: 'White Night Dinner', desc: 'Caribbean, Buffet (White Clothing Night)', icon: '🍽️', location: 'Turtle Beach' },
      { time: '9:30 PM', title: 'Live Performance TBD', desc: 'Evening live performance', icon: '🎵', location: 'Turtle Beach' },
      { time: '9:30 PM', title: 'After Party', desc: 'Continue the celebration', icon: '🎉', location: 'Turtle Beach' },
    ]
  },
  {
    day: 'Thursday',
    date: 'December 3',
    events: [
      { time: '7:30 AM', title: 'Breakfast', desc: 'Morning breakfast', icon: '☕', location: 'Great House' },
      { time: '8:00 AM', title: 'Yoga', desc: 'Morning yoga and meditation.', icon: '🧘', location: 'Great House' },
      { time: '9:00 AM', title: 'Golf Nail Bay', desc: 'Head to Red Dock to catch a boat to Nail Bay Resort. Barefoot golf with a Butler.', icon: '⛳', location: 'Red Dock' },
      { time: '9:00 AM', title: 'Inspire Cards', desc: 'Meaningful conversation led by Foundation youth and staff.', icon: '💬', location: 'Great House' },
      { time: '9:30 AM', title: 'At Leisure / Treatments / Water Sports', desc: 'Free time for spa treatments, water sports, or relaxation', icon: '🏖️', location: 'Various Locations' },
      { time: '12:30 PM', title: 'Sushi Lunch', desc: 'Relaxed sushi lunch with a DJ.', icon: '🍣', location: 'Crocodile Pool' },
      { time: '1:30 PM', title: 'Beach Volleyball', desc: 'Beach volleyball tournament', icon: '🏐', location: 'Beach Volleyball Court' },
      { time: '3:45 PM', title: 'Necker Cup Finals & Exhibition Match', desc: 'Watch the championship matches and exhibition games', icon: '🏆', location: 'Centre Court' },
      { time: '4:15 PM', title: 'Live Video From Richard', desc: 'Special message from Richard Branson', icon: '📹', location: 'Beach House Pavilion' },
      { time: '4:20 PM', title: 'Group Picture All Guests', desc: 'Group photo with all Necker Cup guests', icon: '📸', location: 'Centre Court' },
      { time: '4:30 PM', title: "Men's Exo", desc: "Men's exhibition match", icon: '🎾', location: 'Centre Court' },
      { time: '5:00 PM', title: 'Necker Cup Finals', desc: 'The championship finals of the Necker Cup', icon: '🏆', location: 'Centre Court' },
      { time: '5:45 PM', title: 'Necker Cup Group Picture', desc: 'All group picture after the Pro-Exo.', icon: '📸', location: 'Centre Court' },
      { time: '6:00 PM', title: 'Cocktails Reception', desc: 'Meet at the Great House to kick off the Charity Dinner and Auction.', icon: '🍸', location: 'Great House' },
      { time: '7:00 PM', title: 'Charity Dinner & Live Auction', desc: 'Charity dinner and live auction to support our charitable partners.', icon: '🎗️', location: 'Great House' },
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

const agendaHighlights = [
  { icon: Calendar, title: '6 Days', desc: 'November 29 - December 4, 2026' },
  { icon: Clock, title: '50+ Events', desc: 'Curated experiences' },
];

const highlights = [
  { number: '148', label: 'Elite Guests', desc: 'High-net-worth attendees' },
  { number: '5', label: 'Days of Tennis', desc: 'World-class competition and Pro-Am matches' },
  { number: '2', label: 'World-Class Artists', desc: 'Intimate performances under Caribbean stars' },
  { number: '1', label: 'Private Island', desc: "Sir Richard Branson's exclusive Necker Island" },
];

const experiences = [
  {
    title: 'Tennis Excellence',
    description: 'ATP and WTA tour players and legends are paired with amateur teams of all skill levels. A handicapped scoring format keeps things competitive for everyone. The tournament director is Vasek Pospisil, 2014 Wimbledon doubles champion. The week builds toward a Pro Exhibition match on the final day, then the Charity Dinner & Auction.',
    image: publicImages.tennisActionBlue,
    features: ['Pro-Am round-robin tournament', 'Handicapped scoring for all levels', 'Pro Exhibition match', 'Necker Cup trophy finals']
  },
  {
    title: 'The End of the World Party',
    description: 'The signature closing event of every Necker Cup. Past performances have included Florida Georgia Line on the beach, Pitbull, Jamie Foxx DJing and performing, and Kenny Chesney under the stars. Followed by the Charity Dinner & Auction.',
    image: publicImages.legendsMusicBand,
    features: ['Exhibition match', 'Charity Dinner & Auction', 'Legendary closing party', 'World-class live performances']
  },
  {
    title: 'Necker Island',
    description: 'A 74-acre private island in turquoise Caribbean waters with the iconic Great House, Balinese-style villas, championship tennis courts, coral reefs, and white sandy beaches. All tennis, meals, dinners, and parties take place on Necker.',
    image: publicImages.groupPhotoMoskito,
    features: ['Great House & villas', 'Championship courts', 'Beach and water activities', 'All events on-island']
  },
  {
    title: 'Golf at Nail Bay',
    description: 'Head to Red Dock and catch a short boat ride over to Nail Bay Resort on Virgin Gorda for a round of barefoot golf unlike any other. With a personal butler catering to your every need, stunning ocean views from every hole, and some of the biggest names in golf joining the fun, the Necker Open Pro-Am is a highlight of the week. Past participants include Greg Norman, Sir Nick Faldo, and Bryson DeChambeau.',
    image: '/images/nail-bay-golf.jpg',
    features: ['Barefoot golf with a butler', 'Short boat ride to Virgin Gorda', 'Necker Open Pro-Am tournament', 'World-class golf pros joining the fun']
  },
  {
    title: 'Moskito Island & Beyond',
    description: 'Guests can stay at The Branson Beach Estate on Moskito Island -- just a 5-7 minute boat ride away. Moskito offers private pools, ocean views, and a serene retreat between the action on Necker.',
    image: publicImages.moskito,
    features: ['Branson Beach Estate option', 'Boat transfer to Necker', 'Private pools & ocean views', 'Serene island retreat']
  },
];

export function ExperiencePage() {
  const { openForm } = useReservationForm();

  return (
    <div className="min-h-screen bg-stone-50 antialiased pt-[72px]">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      {/* HERO */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center text-white">
          <p className="font-body text-white/70 text-sm tracking-[0.3em] uppercase mb-6">
            The Experience
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.95]">
            More than a tournament. <br /><span className="italic">A transformation.</span>
          </h1>
          <p className="font-body text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            For one extraordinary week, the world's most exclusive private island becomes
            the backdrop for tennis excellence, musical performances that move the soul,
            and connections that last a lifetime.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {highlights.map((item, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-5xl lg:text-6xl text-emerald-800 mb-2">{item.number}</p>
                <p className="font-body text-stone-900 font-medium mb-1">{item.label}</p>
                <p className="font-body text-stone-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE DETAILS */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">What Awaits You</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              Every Moment <span className="italic text-emerald-800">Designed</span>
            </h2>
            <p className="font-body text-stone-600 max-w-2xl mx-auto">
              Six days, five nights. Pro-Am tennis, the End of the World party, world-class
              entertainment, and the full Necker Island experience.
            </p>
          </div>

          <div className="space-y-24">
            {experiences.map((experience, idx) => (
              <div
                key={idx}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    className="aspect-[4/3] rounded-3xl bg-cover bg-center shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                    style={{ backgroundImage: `url('${experience.image}')` }}
                  />
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-display text-4xl md:text-5xl text-stone-900 mb-6">
                    {experience.title}
                  </h3>
                  <p className="font-body text-stone-600 text-lg leading-relaxed mb-8">
                    {experience.description}
                  </p>
                  <div className="space-y-3">
                    {experience.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-800 flex-shrink-0" />
                        <p className="font-body text-stone-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES BEYOND TENNIS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">At Leisure</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              Activities <span className="italic text-emerald-800">Beyond Tennis</span>
            </h2>
            <p className="font-body text-stone-600 max-w-2xl mx-auto">
              When they say "at leisure," guests have full access to everything the island has to offer.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Kiteboarding and kite surfing', 'Sailing (Hobie Cat races)', 'Wakeboarding', 'Snorkeling and scuba diving', 'Paddleboarding', 'Beach tennis and pickleball', 'Swimming pools and hot tubs', 'Lemur feeding', 'Tortoise encounters', 'Island walks and hiking'].map((activity) => (
              <span key={activity} className="font-body bg-stone-100 text-stone-700 px-5 py-2.5 rounded-full text-sm">{activity}</span>
            ))}
          </div>
          <p className="font-body text-stone-500 text-sm text-center mt-6">Spa services are one of the few things not included.</p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 lg:py-32 bg-stone-100">
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

      {/* AGENDA / DAILY SCHEDULE */}
      <section className="py-24 lg:py-32 bg-white" id="agenda">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-8">
            <p className="font-body text-emerald-800 text-sm tracking-[0.3em] uppercase mb-4">November 29 - December 4, 2026</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              Your Week in <span className="italic text-emerald-800">Paradise</span>
            </h2>
            <p className="font-body text-stone-600 max-w-2xl mx-auto mb-8">
              A carefully orchestrated schedule of tennis excellence, world-class performances,
              island adventures, and moments you'll treasure forever.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {agendaHighlights.map((item, i) => (
                <div key={i} className="bg-stone-100 rounded-2xl p-5 border border-stone-200 min-w-[180px]">
                  <item.icon className="w-7 h-7 text-emerald-800 mb-2 mx-auto" />
                  <p className="font-display text-2xl text-stone-900 mb-1">{item.title}</p>
                  <p className="font-body text-stone-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {agenda.map((day, idx) => (
              <div key={idx} className="relative">
                <div className="mb-8 pb-6 border-b-2 border-emerald-800">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                      <h3 className="font-display text-4xl md:text-5xl text-stone-900 mb-2">{day.day}</h3>
                      <p className="font-body text-emerald-800 text-xl font-medium">{day.date}, 2026</p>
                    </div>
                    <p className="font-body text-stone-500">Day {idx + 1} of 6</p>
                  </div>
                </div>

                <div className="space-y-6 relative pl-6 md:pl-16">
                  <div className="absolute left-0 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-800 via-emerald-600 to-transparent" />

                  {day.events.map((event, eventIdx) => (
                    <div key={eventIdx} className="group relative">
                      <div className="absolute -left-[26px] md:-left-[26px] top-3 w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-800 ring-4 ring-white group-hover:ring-emerald-100 transition-all" />

                      <div className="bg-stone-50 rounded-2xl p-4 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.01] border border-stone-100 group-hover:border-emerald-200">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                          <div className="flex items-center gap-3 md:flex-col md:items-start md:w-32 flex-shrink-0">
                            <div className="text-2xl md:text-3xl">{event.icon}</div>
                            <p className="font-body text-emerald-800 font-bold text-base md:text-lg tracking-wide">{event.time}</p>
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className="font-display text-xl md:text-3xl text-stone-900 mb-2 md:mb-3 group-hover:text-emerald-800 transition-colors">
                              {event.title}
                            </h4>
                            <p className="font-body text-stone-600 text-base md:text-lg leading-relaxed mb-2">{event.desc}</p>
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
              <p className="font-body text-stone-600 text-sm">All activities are optional. Create your own perfect experience.</p>
            </div>
            <div>
              <h4 className="font-display text-xl text-stone-900 mb-2">Weather Dependent</h4>
              <p className="font-body text-stone-600 text-sm">Some activities may change based on conditions. We adapt seamlessly.</p>
            </div>
            <div>
              <h4 className="font-display text-xl text-stone-900 mb-2">All Times AST</h4>
              <p className="font-body text-stone-600 text-sm">Atlantic Standard Time. Please adjust accordingly.</p>
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
            Limited to 148 guests. Spaces fill quickly for this once-in-a-lifetime experience.
          </p>
          <button
            onClick={openForm}
            className="font-body bg-white text-stone-900 px-10 py-4 rounded-full font-medium hover:bg-stone-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Reserve Your Spot Now
          </button>
        </div>
      </section>
    </div>
  );
}
