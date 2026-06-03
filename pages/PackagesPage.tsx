import { Trophy, Eye, MapPin, Check, ArrowRight, Anchor, Utensils, Music } from 'lucide-react';
import { useReservationForm } from '@/app/context/ReservationFormContext';

const NECKER_IMG  = '/images/necker.jpg';
const MOSKITO_IMG = '/images/moskito.jpg';
const TENNIS_IMG  = '/images/crowd-pavilion-court.jpg';
const BEACH_IMG   = '/images/beach-dock-group.jpg';

interface Package {
  id: string;
  type: 'player' | 'spectator';
  location: 'necker' | 'moskito';
  name: string;
  tagline: string;
  image: string;
  desc: string;
  uniqueInclude: string;
  featured?: boolean;
}

const packages: Package[] = [
  {
    id: 'player-necker',
    type: 'player',
    location: 'necker',
    name: 'Player — Necker Island',
    tagline: 'Stay on the island. Play in the Cup.',
    image: NECKER_IMG,
    desc: 'Five nights on Sir Richard Branson\'s legendary private island. You\'re not just watching — you have a 2-person playing team spot in the Necker Cup itself.',
    uniqueInclude: 'One 2-person playing team spot in the Necker Cup',
    featured: true,
  },
  {
    id: 'player-moskito',
    type: 'player',
    location: 'moskito',
    name: 'Player — Branson Estate, Moskito',
    tagline: 'Boutique estate. Still in the game.',
    image: MOSKITO_IMG,
    desc: 'Stay at the exclusive Branson Beach Estate on neighbouring Moskito Island (5–7 min boat ride). All events on Necker, with a playing spot in the tournament.',
    uniqueInclude: 'One 2-person playing team spot in the Necker Cup',
  },
  {
    id: 'spectator-necker',
    type: 'spectator',
    location: 'necker',
    name: 'Spectator — Necker Island',
    tagline: 'Front-row access to everything.',
    image: TENNIS_IMG,
    desc: 'Be on Necker Island for every match, every dinner, every party. Mix and mingle with pros, legends and celebrities across all five nights.',
    uniqueInclude: 'Full access to watch all matches & mix with pros, legends and celebrities',
  },
  {
    id: 'spectator-moskito',
    type: 'spectator',
    location: 'moskito',
    name: 'Spectator — Branson Estate, Moskito',
    tagline: 'Private villa feel, island access.',
    image: BEACH_IMG,
    desc: 'Stay at the Branson Beach Estate on Moskito Island and take the daily boat over to Necker for all Necker Cup events, dinners and parties.',
    uniqueInclude: 'Full access to watch all matches & mix with pros, legends and celebrities',
  },
];

const sharedIncludes = [
  '5 nights accommodation (Nov 29 – Dec 4, 2026)',
  'All meals, events & parties on Necker Island',
  'The End of the World party',
  'Boat transfers between islands',
];

const includedCategories = [
  {
    icon: Anchor,
    title: 'Accommodation',
    items: ['Private villa or resort stay', 'Luxury amenities & daily housekeeping', 'Concierge service', 'Necker or Moskito Island'],
  },
  {
    icon: Utensils,
    title: 'Dining & Beverages',
    items: ['All meals included throughout', 'Premium open bar', 'Private dining experiences', 'End of the World party'],
  },
  {
    icon: Music,
    title: 'Activities & Access',
    items: ['All tournament matches', 'Live musical performances', 'Island activities & water sports', 'Boat transfers included'],
  },
];

export function PackagesPage() {
  const { openForm } = useReservationForm();

  const playerPackages    = packages.filter(p => p.type === 'player');
  const spectatorPackages = packages.filter(p => p.type === 'spectator');

  return (
    <div className="min-h-screen bg-stone-50 antialiased">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'DM Sans', system-ui, sans-serif; }
        .pkg-img { transition: transform 0.6s ease; }
        .pkg-card:hover .pkg-img { transform: scale(1.04); }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative pt-40 lg:pt-52 pb-24 lg:pb-32 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_55%)]" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-stone-50/20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center text-white">
          <p className="font-body text-white/60 text-xs tracking-[0.35em] uppercase mb-5">
            Necker Cup 2026 &nbsp;·&nbsp; November 29 – December 4
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-7 leading-[0.95]">
            Choose Your <br /><span className="italic">Experience</span>
          </h1>
          <p className="font-body text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Four packages. Two islands. One week you'll never forget.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 text-sm font-body text-white/90">
            <MapPin className="w-4 h-4 text-emerald-300 flex-shrink-0" />
            Necker Island &amp; Moskito Island, British Virgin Islands
          </div>
        </div>
      </section>

      {/* ── PLAYER PACKAGES ── */}
      <PackageGroup
        type="player"
        icon={<Trophy className="w-5 h-5" />}
        label="Pro-Am Player"
        headline="You're in the tournament"
        sub="Both player packages include a 2-person playing team spot in the Necker Cup."
        pkgs={playerPackages}
        onInquire={openForm}
      />

      {/* ── SPECTATOR PACKAGES ── */}
      <PackageGroup
        type="spectator"
        icon={<Eye className="w-5 h-5" />}
        label="Pro-Am Spectator"
        headline="The best seat on the island"
        sub="Watch world-class tennis, mingle with pros and celebrities, enjoy every event."
        pkgs={spectatorPackages}
        onInquire={openForm}
        shade
      />

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-24 lg:py-32 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="font-body text-emerald-800 text-xs tracking-[0.25em] uppercase mb-3">Included in Every Package</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900">Everything taken care of</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {includedCategories.map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-2xl border border-stone-200 bg-stone-50 p-8">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-emerald-800" />
                </div>
                <h3 className="font-display text-xl text-stone-900 mb-4">{title}</h3>
                <div className="space-y-3">
                  {items.map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <p className="font-body text-stone-600 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="font-body text-stone-400 text-xs text-center mt-8">
            Amenities and activities are included (spa treatments extra). Day 6: depart after breakfast — boats to Terrance B. Lettsome Airport (Beef Island) by 12 noon. All packages per couple.
          </p>
        </div>
      </section>

      {/* ── ISLAND COMPARE ── */}
      <section className="py-24 lg:py-32 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="font-body text-emerald-800 text-xs tracking-[0.25em] uppercase mb-3">Location Guide</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900">Necker vs. Moskito</h2>
            <p className="font-body text-stone-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Both islands are world-class. Here's how to choose.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <IslandCard
              image={NECKER_IMG}
              name="Necker Island"
              badge="At the heart of it all"
              badgeColor="bg-emerald-800"
              points={[
                'Branson\'s legendary private island',
                'Steps from every court and event',
                'The End of the World party is right here',
                'Original Necker Cup experience',
              ]}
            />
            <IslandCard
              image={MOSKITO_IMG}
              name="Branson Beach Estate, Moskito"
              badge="Boutique & exclusive"
              badgeColor="bg-teal-700"
              points={[
                'Private estate on neighbouring Moskito Island',
                '5–7 minute boat ride to Necker',
                'More intimate, villa-style setting',
                'Full access to all Necker Cup events',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-body text-white/60 text-xs tracking-[0.3em] uppercase mb-5">Spaces are Limited</p>
          <h2 className="font-display text-4xl md:text-6xl mb-6 leading-tight">
            Ready to join us<br />at Necker Cup 2026?
          </h2>
          <p className="font-body text-white/75 text-lg mb-10 max-w-xl mx-auto">
            Reach out and we'll send you full pricing and availability for your preferred package.
          </p>
          <button
            onClick={openForm}
            className="font-body inline-flex items-center gap-2 bg-white text-stone-900 px-10 py-4 rounded-full font-medium hover:bg-stone-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 text-base"
          >
            Inquire &amp; Reserve Your Spot
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   PackageGroup — a labelled row of 2 package cards
───────────────────────────────────────────────────────── */
function PackageGroup({
  type, icon, label, headline, sub, pkgs, onInquire, shade = false,
}: {
  type: 'player' | 'spectator';
  icon: React.ReactNode;
  label: string;
  headline: string;
  sub: string;
  pkgs: Package[];
  onInquire: () => void;
  shade?: boolean;
}) {
  return (
    <section className={`py-20 lg:py-28 ${shade ? 'bg-stone-100' : 'bg-white'} border-t border-stone-100`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Row header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-body font-semibold tracking-wide uppercase mb-4 ${
              type === 'player'
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-stone-200 text-stone-600'
            }`}>
              {icon}
              {label}
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-stone-900">{headline}</h2>
            <p className="font-body text-stone-500 text-sm mt-2 max-w-lg">{sub}</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pkgs.map(pkg => (
            <PackageCard key={pkg.id} pkg={pkg} onInquire={onInquire} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   PackageCard
───────────────────────────────────────────────────────── */
function PackageCard({ pkg, onInquire }: { pkg: Package; onInquire: () => void }) {
  const isNecker = pkg.location === 'necker';

  return (
    <div className="pkg-card group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="pkg-img w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/10 to-transparent" />

        {/* Location badge */}
        <div className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-semibold text-white ${
          isNecker ? 'bg-emerald-800/90' : 'bg-teal-700/90'
        }`}>
          <MapPin className="w-3 h-3" />
          {isNecker ? 'Necker Island' : 'Moskito Island'}
        </div>

        {/* Featured badge */}
        {pkg.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-body font-semibold bg-amber-400 text-stone-900">
            Most Popular
          </div>
        )}

        {/* Name on image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-2xl text-white leading-tight drop-shadow">{pkg.name}</h3>
          <p className="font-body text-white/75 text-xs mt-0.5">{pkg.tagline}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-8 flex flex-col flex-1">
        <p className="font-body text-stone-500 text-sm leading-relaxed mb-6">{pkg.desc}</p>

        {/* Shared includes */}
        <div className="space-y-2.5 mb-5">
          {[...sharedIncludes, pkg.uniqueInclude].map(item => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
              </div>
              <p className={`font-body text-sm leading-relaxed ${
                item === pkg.uniqueInclude ? 'text-stone-800 font-medium' : 'text-stone-500'
              }`}>{item}</p>
            </div>
          ))}
        </div>

        {/* Nights label */}
        <p className="font-body text-stone-400 text-xs tracking-widest uppercase mt-auto mb-5">
          5 Nights / Couple
        </p>

        <button
          onClick={onInquire}
          className="font-body w-full bg-emerald-800 text-white px-6 py-3.5 rounded-full font-medium hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg text-sm tracking-wide flex items-center justify-center gap-2 group/btn"
        >
          Inquire for Pricing
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   IslandCard — comparison section
───────────────────────────────────────────────────────── */
function IslandCard({
  image, name, badge, badgeColor, points,
}: {
  image: string;
  name: string;
  badge: string;
  badgeColor: string;
  points: string[];
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-200">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
        <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-body font-semibold text-white ${badgeColor}`}>
          {badge}
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-display text-2xl text-stone-900 mb-5">{name}</h3>
        <div className="space-y-3">
          {points.map(pt => (
            <div key={pt} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <p className="font-body text-stone-600 text-sm">{pt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
