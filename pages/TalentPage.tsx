import { useReservationForm } from '@/app/context/ReservationFormContext';
import { publicImages } from '@/app/lib/publicImages';

const tennisPros: { name: string; achievement: string; image?: string }[] = [
  { name: 'Novak Djokovic', achievement: '24-time Grand Slam champion', image: publicImages.novak },
  { name: 'Rafael Nadal', achievement: '22-time Grand Slam champion', image: publicImages.rafa },
  { name: 'Bjorn Borg', achievement: '11-time Grand Slam champion', image: publicImages.borg },
  { name: 'Rod Laver', achievement: 'Only player to win two calendar-year Grand Slams', image: publicImages.rodlaver },
  { name: 'Caroline Wozniacki', achievement: 'Former World No. 1, Australian Open champion', image: publicImages.carolinewozniacki },
  { name: 'Juan Martin Del Potro', achievement: '2009 US Open champion' },
  { name: 'Dominic Thiem', achievement: '2020 US Open champion' },
  { name: 'John McEnroe', achievement: '7-time Grand Slam champion', image: publicImages.johnmcenroe },
  { name: 'Martina Navratilova', achievement: '18-time Grand Slam singles champion', image: publicImages.martina },
  { name: 'Jack Sock', achievement: 'Olympic Gold Medalist, 3-time Grand Slam doubles champion' },
  { name: 'Mike Bryan', achievement: 'Most successful doubles player in history', image: publicImages.mikebryan },
  { name: 'Stefan Edberg', achievement: '6-time Grand Slam champion' },
  { name: 'Boris Becker', achievement: '6-time Grand Slam champion' },
  { name: 'Tommy Haas', achievement: 'Former World No. 2', image: publicImages.tommyhaas },
  { name: 'Brad Gilbert', achievement: 'Former World No. 4, legendary coach', image: publicImages.bradgilbert },
  { name: 'Donald Young', achievement: 'Former ATP pro, Necker Cup champion', image: publicImages.donaldyoung },
  { name: 'Heather Watson', achievement: 'Grand Slam doubles champion' },
  { name: 'Vasek Pospisil', achievement: 'Tournament Director, Wimbledon doubles champion', image: publicImages.vasek },
  { name: 'Kim Clijsters', achievement: '4-time Grand Slam champion', image: publicImages.kim },
  { name: 'Grigor Dimitrov', achievement: 'Former World No. 3' },
  { name: 'Eugenie Bouchard', achievement: '2014 Wimbledon finalist', image: publicImages.bouchard },
  { name: 'Kevin Anderson', achievement: '2-time Grand Slam finalist' },
];

const musiciansAndEntertainers: { name: string; knownFor: string; image?: string }[] = [
  { name: 'Andrea Bocelli', knownFor: 'Legendary Italian tenor, 90M+ records sold' },
  { name: 'Kenny Chesney', knownFor: 'Country music superstar', image: publicImages.kennychesney },
  { name: 'Florida Georgia Line', knownFor: 'Country music duo', image: publicImages.floridageorgialine },
  { name: 'Pitbull', knownFor: 'Global pop/hip-hop artist' },
  { name: 'Jamie Foxx', knownFor: 'Actor, musician, comedian', image: publicImages.jamiefoxx },
  { name: 'Jimmy Buffett', knownFor: 'Singer-songwriter (late)', image: publicImages.jimmybuffett },
  { name: 'Darius Rucker', knownFor: 'Hootie & the Blowfish, country solo career' },
  { name: 'Jewel', knownFor: 'Singer-songwriter', image: publicImages.jewel },
  { name: 'Michael Franti', knownFor: 'Singer-songwriter, Spearhead' },
  { name: 'Redfoo (LMFAO)', knownFor: 'DJ, musician', image: publicImages.redfoo },
  { name: 'Sean Paul', knownFor: 'Dancehall/reggae artist', image: publicImages.seanpaul },
];

const celebrityGuests: { name: string; image?: string }[] = [
  { name: 'Kate Upton', image: publicImages.kateupton },
  { name: 'Chevy Chase', image: publicImages.chevychase },
  { name: 'Kevin Costner' },
];

const celebrityGuestsText = 'Kate Upton, Kevin Costner, and numerous high-profile entrepreneurs and business leaders from around the world.';

const golfPros: { name: string; achievement: string; image?: string }[] = [
  { name: 'Greg Norman', achievement: '2-time Open Championship winner, "The Great White Shark"', image: publicImages.gregnorman },
  { name: 'Sir Nick Faldo', achievement: '6-time Major champion, World Golf Hall of Fame' },
  { name: 'Bryson DeChambeau', achievement: '2-time US Open champion', image: publicImages.brysondechambeau },
  { name: 'Matt Kuchar', achievement: '9-time PGA Tour winner, Olympic bronze medalist', image: publicImages.mattkuchar },
  { name: 'Tommy Fleetwood', achievement: 'Ryder Cup star, European Tour winner', image: publicImages.tommyfleetwood },
  { name: 'Sam Burns', achievement: 'PGA Tour multi-winner, Ryder Cup player', image: publicImages.samburns },
];

function TalentCard({ name, subtitle, image }: { name: string; subtitle?: string; image?: string }) {
  return (
    <div className="group relative rounded-xl overflow-hidden border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 aspect-square">
      {image ? (
        <>
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
            <span className="font-body text-white font-medium text-sm leading-tight block">{name}</span>
            {subtitle && (
              <span className="font-body text-white/60 text-xs mt-1 line-clamp-2 block">{subtitle}</span>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-4 bg-stone-100 text-center">
          <span className="font-body text-stone-900 font-medium text-sm leading-tight">{name}</span>
          {subtitle && (
            <span className="font-body text-stone-500 text-xs mt-2 line-clamp-3">{subtitle}</span>
          )}
        </div>
      )}
    </div>
  );
}

export function TalentPage() {
  const { openForm } = useReservationForm();

  return (
    <div className="min-h-screen bg-stone-50 antialiased">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      {/* HERO */}
      <section className="relative pt-40 lg:pt-52 pb-24 lg:pb-40 bg-stone-900 text-white overflow-hidden">
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

      {/* PAST TENNIS PROS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-body text-stone-400 text-sm tracking-[0.2em] uppercase mb-4">Past Necker Cup Talent</p>
          <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-10">Past Tennis Legends & Pros</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {tennisPros.map((row, i) => (
              <TalentCard key={i} name={row.name} subtitle={row.achievement} image={row.image} />
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
              <TalentCard key={i} name={row.name} subtitle={row.knownFor} image={row.image} />
            ))}
            {celebrityGuests.map((row, i) => (
              <TalentCard key={`celebrity-${i}`} name={row.name} image={row.image} />
            ))}
          </div>
          <p className="font-body text-stone-500 text-sm mt-8">
            Plus numerous high-profile entrepreneurs and business leaders from around the world. For more, visit{' '}
            <a href="https://premierlive.com" target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:text-emerald-900 underline font-medium">premierlive.com</a>
          </p>
        </div>
      </section>

      {/* PAST GOLF PROS */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-body text-stone-400 text-sm tracking-[0.2em] uppercase mb-4">Past Necker Cup Talent</p>
          <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-10">Past Golf Pros</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {golfPros.map((pro, i) => (
              <TalentCard key={i} name={pro.name} subtitle={pro.achievement} image={pro.image} />
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
