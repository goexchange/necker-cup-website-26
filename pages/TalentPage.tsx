import { useReservationForm } from '@/app/context/ReservationFormContext';
import { publicImages } from '@/app/lib/publicImages';

const tennisPros = [
  { name: 'Novak Djokovic', achievement: '24-time Grand Slam champion' },
  { name: 'Rafael Nadal', achievement: '22-time Grand Slam champion' },
  { name: 'Bjorn Borg', achievement: '11-time Grand Slam champion' },
  { name: 'Rod Laver', achievement: 'Only player to win two calendar-year Grand Slams' },
  { name: 'Caroline Wozniacki', achievement: 'Former World No. 1, Australian Open champion' },
  { name: 'Juan Martin Del Potro', achievement: '2009 US Open champion' },
  { name: 'Dominic Thiem', achievement: '2020 US Open champion' },
  { name: 'Martina Navratilova', achievement: '18-time Grand Slam singles champion' },
  { name: 'Jack Sock', achievement: 'Olympic Gold Medalist, 3-time Grand Slam doubles champion' },
  { name: 'Mike Bryan', achievement: 'Most successful doubles player in history' },
  { name: 'Stefan Edberg', achievement: '6-time Grand Slam champion' },
  { name: 'Boris Becker', achievement: '6-time Grand Slam champion' },
  { name: 'Tommy Haas', achievement: 'Former World No. 2' },
  { name: 'Heather Watson', achievement: 'Grand Slam doubles champion' },
  { name: 'Vasek Pospisil', achievement: 'Tournament Director, Wimbledon doubles champion' },
  { name: 'Kim Clijsters', achievement: '4-time Grand Slam champion' },
  { name: 'Grigor Dimitrov', achievement: 'Former World No. 3' },
  { name: 'Eugenie Bouchard', achievement: '2014 Wimbledon finalist' },
  { name: 'Kevin Anderson', achievement: '2-time Grand Slam finalist' },
  { name: 'Arantxa Sanchez-Vicario', achievement: '4-time Grand Slam champion' },
];

const musiciansAndEntertainers = [
  { name: 'Andrea Bocelli', knownFor: 'Legendary Italian tenor, 90M+ records sold' },
  { name: 'Kenny Chesney', knownFor: 'Country music superstar' },
  { name: 'Florida Georgia Line', knownFor: 'Country music duo' },
  { name: 'Pitbull', knownFor: 'Global pop/hip-hop artist' },
  { name: 'Jamie Foxx', knownFor: 'Actor, musician, comedian' },
  { name: 'Jimmy Buffett', knownFor: 'Singer-songwriter (late)' },
  { name: 'Darius Rucker', knownFor: 'Hootie & the Blowfish, country solo career' },
  { name: 'Jewel', knownFor: 'Singer-songwriter' },
  { name: 'Michael Franti', knownFor: 'Singer-songwriter, Spearhead' },
  { name: 'Redfoo (LMFAO)', knownFor: 'DJ, musician' },
  { name: 'Sean Paul', knownFor: 'Dancehall/reggae artist' },
];

const celebrityGuests = [
  { name: 'Kate Upton' },
  { name: 'Kevin Costner' },
];

const celebrityGuestsText = 'Kate Upton, Kevin Costner, and numerous high-profile entrepreneurs and business leaders from around the world.';

const golfPros = [
  { name: 'Greg Norman', achievement: '2-time Open Championship winner, "The Great White Shark"' },
  { name: 'Sir Nick Faldo', achievement: '6-time Major champion, World Golf Hall of Fame' },
  { name: 'Bryson DeChambeau', achievement: '2-time US Open champion' },
  { name: 'Tommy Fleetwood', achievement: 'Ryder Cup star, European Tour winner' },
  { name: 'Sam Burns', achievement: 'PGA Tour multi-winner, Ryder Cup player' },
];

function TalentCard({ name, subtitle }: { name: string; subtitle?: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 rounded-xl bg-stone-100 border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 text-center aspect-square"
    >
      <span className="font-body text-stone-900 font-medium text-sm leading-tight">{name}</span>
      {subtitle && (
        <span className="font-body text-stone-500 text-xs mt-2 line-clamp-3">{subtitle}</span>
      )}
    </div>
  );
}

export function TalentPage() {
  const { openForm } = useReservationForm();

  return (
    <div className="min-h-screen bg-stone-50 antialiased pt-[72px]">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      {/* HERO */}
      <section className="relative py-24 lg:py-40 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('${publicImages.necker}')` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800/95 to-stone-900" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-body text-stone-400 text-sm tracking-[0.2em] uppercase mb-8">Talent</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-12 leading-tight">
            Tennis, Golf & <span className="italic text-emerald-400">Entertainment</span>
          </h1>
          <p className="font-body text-lg text-white/80 max-w-2xl">Over 14 years, the Necker Cup has attracted an incredible roster of tennis and golf talent, musicians, and celebrities.</p>
        </div>
      </section>

      {/* 2026 TALENT - GOLF */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">2026 Necker Cup</p>
          <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">This Year's Golf Pros</h2>
          <p className="font-body text-stone-500 text-lg mb-10">Joining us for the 2026 Necker Cup</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {golfPros.map((pro, i) => (
              <TalentCard key={i} name={pro.name} subtitle={pro.achievement} />
            ))}
          </div>
        </div>
      </section>

      {/* PAST TENNIS PROS */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-body text-stone-400 text-sm tracking-[0.2em] uppercase mb-4">Past Necker Cup Talent</p>
          <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-10">Past Tennis Legends & Pros</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {tennisPros.map((row, i) => (
              <TalentCard key={i} name={row.name} subtitle={row.achievement} />
            ))}
          </div>
        </div>
      </section>

      {/* PAST MUSICIANS & CELEBRITIES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-body text-stone-400 text-sm tracking-[0.2em] uppercase mb-4">Past Necker Cup Talent</p>
          <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-10">Past Musicians & Celebrities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {musiciansAndEntertainers.map((row, i) => (
              <TalentCard key={i} name={row.name} subtitle={row.knownFor} />
            ))}
            {celebrityGuests.map((row, i) => (
              <TalentCard key={`celebrity-${i}`} name={row.name} />
            ))}
          </div>
          <p className="font-body text-stone-500 text-sm mt-8">
            Plus numerous high-profile entrepreneurs and business leaders from around the world. For more, visit{' '}
            <a href="https://premierlive.com" target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:text-emerald-900 underline font-medium">premierlive.com</a>
          </p>
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
