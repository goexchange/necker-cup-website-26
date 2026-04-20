import { publicImages } from '@/app/lib/publicImages';

type Artist = {
  name: string;
  genre: string;
  image?: string;
};

const pastArtists: Artist[] = [
  { name: 'Andrea Bocelli', genre: 'Opera', image: publicImages.andreabocelli },
  { name: 'Jimmy Buffett', genre: 'Island', image: publicImages.jimmybuffett },
  { name: 'Kenny Chesney', genre: 'Country', image: publicImages.kennychesney },
  { name: 'Jamie Foxx', genre: 'R&B / Soul', image: publicImages.jamiefoxx },
  { name: 'Pitbull', genre: 'Pop / Latin', image: publicImages.pitbull },
  { name: 'Darius Rucker', genre: 'Country / Rock', image: publicImages.dariusrucker },
  { name: 'Jewel', genre: 'Folk / Singer-Songwriter', image: publicImages.jewel },
  { name: 'Florida Georgia Line', genre: 'Country', image: publicImages.floridageorgialine }
];

function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="group">
      <div className="aspect-square overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
        {artist.image ? (
          <img
            src={artist.image}
            alt={artist.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-stone-100" />
        )}
      </div>
      <p className="font-display mt-3 text-center text-lg font-semibold text-stone-900">{artist.name}</p>
      <p className="font-body text-center text-[11px] uppercase tracking-[0.14em] text-stone-500">{artist.genre}</p>
    </div>
  );
}

export function ArtistInvitePage() {
  return (
    <div className="min-h-screen bg-stone-50 antialiased">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 pb-24 pt-40 lg:pb-32 lg:pt-52">
        <div className="absolute inset-0 opacity-20">
          <img src={publicImages.necker} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.18)_0%,_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-6 text-center text-white lg:px-12">
          <p className="font-body mb-6 text-sm uppercase tracking-[0.28em] text-white/70">Private Artist Invitation</p>
          <h1 className="font-display mx-auto max-w-4xl text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            Play the <span className="italic text-emerald-300">Necker Cup</span>
          </h1>
          <p className="font-body mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/90">
            A one-of-a-kind performance opportunity on Richard Branson&apos;s Necker Island with a curated, high-impact
            audience of founders, investors, and global leaders.
          </p>
          <div className="mt-10 inline-flex rounded-full border border-white/35 bg-white/10 px-6 py-2 backdrop-blur-sm">
            <p className="font-body text-xs uppercase tracking-[0.22em] text-emerald-200">November 29 to December 4, 2026</p>
          </div>
        </div>
      </section>

      {/* INTRO + STATS */}
      <section className="border-b border-stone-200 bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr] lg:px-12">
          <div>
            <p className="font-body mb-4 text-sm uppercase tracking-[0.22em] text-stone-400">The Opportunity</p>
            <p className="font-body text-lg leading-8 text-stone-700">
              Some of the best performances most people have never seen happen on a private island in the BVI every
              December. Andrea Bocelli, Jimmy Buffett, Kenny Chesney, Jamie Foxx, Pitbull, and more. All on Richard
              Branson&apos;s Necker.
            </p>
            <p className="font-body mt-5 text-lg leading-8 text-stone-700">
              We&apos;re booking music for the 15th Necker Cup and would love to discuss one of your artists.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
            <div className="text-center">
              <p className="font-display text-4xl text-emerald-900">15</p>
              <p className="font-body mt-1 text-[11px] uppercase tracking-[0.1em] text-stone-500">Years</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl text-emerald-900">$12M+</p>
              <p className="font-body mt-1 text-[11px] uppercase tracking-[0.1em] text-stone-500">Raised</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl text-emerald-900">150-200</p>
              <p className="font-body mt-1 text-[11px] uppercase tracking-[0.1em] text-stone-500">Guests</p>
            </div>
          </div>
        </div>
      </section>

      {/* ARTISTS */}
      <section className="bg-stone-50 py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="mb-10 text-center">
            <p className="font-body mb-3 text-sm uppercase tracking-[0.24em] text-stone-400">Who has played the island</p>
            <h2 className="font-display text-4xl text-stone-900 md:text-5xl">
              Past <span className="italic text-emerald-800">Performers</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {pastArtists.map((artist) => (
              <ArtistCard key={artist.name} artist={artist} />
            ))}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="rounded-3xl border border-stone-200 bg-stone-50/70 p-8 md:p-10">
            <p className="font-body text-base leading-8 text-stone-700">
              Here&apos;s what the week actually is: six days, one private island, 150 to 200 guests. Golf on a nearby
              championship course, snorkeling, sailing, beach dinners, and music every night. It&apos;s a vacation, not a
              traditional gig schedule.
            </p>
            <p className="font-body mt-5 text-base leading-8 text-stone-700">
              <strong className="text-stone-900">Past tennis guests include:</strong> Novak Djokovic, Rafael Nadal, Bjorn
              Borg, John McEnroe, Rod Laver, Martina Navratilova, Boris Becker, Dominic Thiem, Caroline Wozniacki, Kim
              Clijsters, and Grigor Dimitrov.
            </p>
            <p className="font-body mt-3 text-base leading-8 text-stone-700">
              <strong className="text-stone-900">Past golf guests include:</strong> Greg Norman, Sir Nick Faldo, Bryson
              DeChambeau, Matt Kuchar, Tommy Fleetwood, and Sam Burns.
            </p>
            <p className="font-body mt-3 text-base leading-8 text-stone-700">
              <strong className="text-stone-900">Past celebrities include:</strong> Kevin Costner, Chevy Chase, Kate
              Upton, and Sean Paul.
            </p>
            <p className="font-body mt-5 text-base leading-8 text-stone-700">
              Artists stay on the island with everyone else and bring a guest. The performance slot is the closing
              night, the end-of-the-world party after the charity auction.
            </p>
          </div>

          <div className="mt-8 rounded-r-2xl border-l-4 border-emerald-500 bg-emerald-50/60 p-7">
            <p className="font-display text-2xl italic leading-9 text-emerald-950">
              The audience is founders, CEOs, family offices, and industry leaders. Artists often leave with real
              business relationships, brand partnerships, and friendships that outlast the week.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-emerald-900 to-teal-800 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl">
            Bring Your Artist to the <span className="italic">Island</span>
          </h2>
          <p className="font-body mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">
            If you have an artist who would love this kind of week with this kind of room, grab 15 minutes and we can
            walk through fees, dates, and how past artists have approached it.
          </p>
          <a
            href="https://calendly.com/rem-goexchange"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body mt-9 inline-block rounded-full bg-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-stone-900 transition-all duration-300 hover:scale-105 hover:bg-stone-100 hover:shadow-2xl"
          >
            Schedule a Conversation
          </a>
          <p className="font-body mt-9 text-base text-white">Rem Reynolds</p>
          <p className="font-body mt-1 text-sm leading-6 text-white/70">
            Co-Founder, Necker Cup
            <br />
            rem@premierlive.com · 678.478.6649
          </p>
          <p className="font-body mt-8 text-xs uppercase tracking-[0.18em] text-white/55">
            Necker Cup · Necker Island, BVI · 15th Annual
          </p>
          <p className="font-body mt-2 text-xs text-white/55">
            <a href="https://neckercup.com" className="text-emerald-200 hover:text-white">
              Visit Website
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
