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
      <div className="aspect-square overflow-hidden rounded-md">
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
      <p className="mt-3 text-center font-display text-lg font-semibold text-stone-800">{artist.name}</p>
      <p className="text-center font-body text-[11px] uppercase tracking-[0.12em] text-stone-500">{artist.genre}</p>
    </div>
  );
}

export function ArtistInvitePage() {
  return (
    <div className="min-h-screen bg-[#0a1a1f] py-10 md:py-14 antialiased">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      <main className="mx-auto w-[94%] max-w-4xl overflow-hidden rounded-md bg-white shadow-2xl">
        {/* Hero */}
        <section className="relative h-[320px] md:h-[360px]">
          <img
            src={publicImages.necker}
            alt="Necker Island"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a1f]/95 via-[#0a1a1f]/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-10 px-6 md:px-10 text-center">
            <div className="mx-auto inline-block rounded-md border border-[#4ecdc4]/40 bg-[#0a1a1f]/75 px-6 py-5 md:px-10">
              <h1 className="font-display text-3xl uppercase tracking-[0.2em] text-white md:text-4xl">Necker Cup</h1>
              <p className="mt-2 font-body text-[11px] uppercase tracking-[0.18em] text-[#4ecdc4] md:text-xs">
                Richard Branson&apos;s Necker Island · 15th Year
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="px-6 py-10 md:px-10">
          <p className="font-body text-base leading-7 text-stone-700">
            Some of the best performances most people never see happen on a private island in the BVI every
            December. Andrea Bocelli, Jimmy Buffett, Kenny Chesney, Jamie Foxx, Pitbull, and more. All on Richard
            Branson&apos;s Necker Island.
          </p>

          <p className="mt-5 font-body text-base leading-7 text-stone-700">
            We&apos;re booking music for the 15th Necker Cup, <strong>November 29 to December 4, 2026</strong>, and would
            love to speak about one of your artists.
          </p>
        </section>

        {/* Artist Grid */}
        <section className="px-6 pb-6 md:px-10">
          <p className="mb-4 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4ecdc4]">
            Who has played the island
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {pastArtists.map((artist) => (
              <ArtistCard key={artist.name} artist={artist} />
            ))}
          </div>
        </section>

        {/* Details */}
        <section className="px-6 py-8 md:px-10">
          <p className="font-body text-base leading-7 text-stone-700">
            Here&apos;s what the week actually is: six days, one private island, 150 to 200 guests. Golf on a nearby
            championship course, snorkeling, sailing, beach dinners, and music every night. It&apos;s a vacation, not a
            traditional gig schedule.
          </p>

          <p className="mt-5 font-body text-base leading-7 text-stone-700">
            <strong className="text-stone-900">Past tennis guests include:</strong> Novak Djokovic, Rafael Nadal, Bjorn
            Borg, John McEnroe, Rod Laver, Martina Navratilova, Boris Becker, Dominic Thiem, Caroline Wozniacki, Kim
            Clijsters, and Grigor Dimitrov.
          </p>

          <p className="mt-3 font-body text-base leading-7 text-stone-700">
            <strong className="text-stone-900">Past golf guests include:</strong> Greg Norman, Sir Nick Faldo, Bryson
            DeChambeau, Matt Kuchar, Tommy Fleetwood, and Sam Burns.
          </p>

          <p className="mt-3 font-body text-base leading-7 text-stone-700">
            <strong className="text-stone-900">Past celebrities include:</strong> Kevin Costner, Chevy Chase, Kate
            Upton, and Sean Paul.
          </p>

          <p className="mt-5 font-body text-base leading-7 text-stone-700">
            Artists stay on the island with everyone else and bring a guest. The performance slot is the closing
            night, the end-of-the-world party after the charity auction. It&apos;s the highest-energy night of the week
            with everyone in one place.
          </p>

          <div className="mt-7 rounded-r-md border-l-[3px] border-[#4ecdc4] bg-[#0a1a1f]/5 p-5">
            <p className="font-display text-xl italic leading-8 text-[#1a3a3f]">
              The audience is founders, CEOs, family offices, and industry leaders. The kind of room where artists
              build real business relationships, brand partnerships, and long-term friendships. No press, no badges,
              no phones out.
            </p>
          </div>

          <p className="mt-6 font-body text-base leading-7 text-stone-700">
            The event has raised over <strong>$12M</strong> for the National Tennis Foundation and Virgin Unite across
            15 years.
          </p>
        </section>

        {/* Stats */}
        <section className="mx-6 my-3 border-y border-stone-200 py-6 md:mx-10">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-display text-4xl font-semibold text-[#1a3a3f]">15</p>
              <p className="font-body mt-1 text-[11px] uppercase tracking-[0.1em] text-stone-500">Years</p>
            </div>
            <div>
              <p className="font-display text-4xl font-semibold text-[#1a3a3f]">$12M+</p>
              <p className="font-body mt-1 text-[11px] uppercase tracking-[0.1em] text-stone-500">Raised for Charity</p>
            </div>
            <div>
              <p className="font-display text-4xl font-semibold text-[#1a3a3f]">150-200</p>
              <p className="font-body mt-1 text-[11px] uppercase tracking-[0.1em] text-stone-500">Elite Guests</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-8 text-center md:px-10">
          <p className="font-body text-base leading-7 text-stone-700">
            If you&apos;ve got an artist who would love a week like this with an audience like this, grab 15 minutes and
            we can walk through fees, dates, and how past artists have approached the week.
          </p>
          <a
            href="https://calendly.com/rem-goexchange"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded bg-[#1a3a3f] px-8 py-3 font-body text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#163136]"
          >
            Schedule a Conversation
          </a>

          <p className="mt-8 font-body text-sm text-stone-800">Rem Reynolds</p>
          <p className="font-body text-xs leading-5 text-stone-500">
            Co-Founder, Necker Cup
            <br />
            rem@premierlive.com · 678.478.6649
          </p>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a1a1f] px-6 py-7 text-center md:px-10">
          <p className="font-body text-xs leading-6 text-stone-400">
            Necker Cup — 15th Annual · Necker Island, BVI
            <br />
            <a href="https://neckercup.com" className="text-[#4ecdc4] hover:underline">
              Visit Website
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
