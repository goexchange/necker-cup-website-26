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
    <div className="min-h-screen bg-stone-100 antialiased">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>
      <main className="mx-auto max-w-[780px] bg-white shadow-[0_18px_60px_rgba(10,26,31,0.10)]">
        {/* HERO */}
        <section className="relative flex h-[560px] items-center justify-center">
          <img
            src={publicImages.islandGolfCourse}
            alt="Necker Island"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a1f]/35 to-[#0a1a1f]/75" />
          <div className="relative max-w-[620px] px-8 text-center text-white">
            <p className="font-body mb-7 text-[11px] font-medium uppercase tracking-[0.25em] text-[#4ecdc4]">
              Private Artist Invitation
            </p>
            <h1 className="font-display mb-6 text-4xl leading-tight md:text-5xl">
              A week on Richard Branson&apos;s private island.
              <br />
              <em className="font-normal italic">One performance. The rest is yours.</em>
            </h1>
            <p className="font-body mx-auto mb-8 max-w-[520px] text-base leading-7 text-white/90">
              Six days in the British Virgin Islands. Tennis, golf, ocean, and a charity dinner with one of the most
              interesting rooms you&apos;ll walk into all year. Bring your plus-one. Unplug.
            </p>
            <p className="font-display inline-block border-t border-white/25 px-8 pt-5 text-base uppercase tracking-[0.12em] text-white/90 md:px-16 md:text-lg">
              November 29 – December 4, 2026
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-3 border-y border-stone-200">
          <div className="px-3 py-9 text-center">
            <p className="font-display text-4xl font-semibold text-[#1a3a3f]">15</p>
            <p className="font-body mt-2 text-[11px] uppercase tracking-[0.16em] text-stone-500">Years</p>
          </div>
          <div className="border-x border-stone-200 px-3 py-9 text-center">
            <p className="font-display text-4xl font-semibold text-[#1a3a3f]">$12M+</p>
            <p className="font-body mt-2 text-[11px] uppercase tracking-[0.16em] text-stone-500">Raised for Charity</p>
          </div>
          <div className="px-3 py-9 text-center">
            <p className="font-display text-4xl font-semibold text-[#1a3a3f]">150–200</p>
            <p className="font-body mt-2 text-[11px] uppercase tracking-[0.16em] text-stone-500">Guests</p>
          </div>
        </section>

        {/* THE INVITATION */}
        <section className="px-7 py-14 md:px-[60px] md:py-[70px]">
          <p className="font-body mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4ecdc4]">The Invitation</p>
          <h2 className="font-display mb-6 text-3xl leading-tight text-[#1a3a3f] md:text-4xl">
            A week off the grid, with a room worth showing up for.
          </h2>
          <p className="font-body mb-5 text-base leading-7 text-stone-700">
            Some of the best performances most people have never seen happen on a private island in the BVI every
            December. Andrea Bocelli, Jimmy Buffett, Kenny Chesney, Jamie Foxx, Pitbull. All on Richard Branson&apos;s
            Necker.
          </p>
          <p className="font-body text-base leading-7 text-stone-700">
            We&apos;re booking music for the 15th Necker Cup and would love to discuss one of your artists. This isn&apos;t a
            tour stop or a corporate booking. It&apos;s a week with their family on a private island, with one performance
            slot on the final night.
          </p>
        </section>

        {/* THE WEEK */}
        <section className="bg-[#0a1a1f] px-7 py-14 text-[#e8e5df] md:px-[60px] md:py-[70px]">
          <p className="font-body mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4ecdc4]">The Week</p>
          <h2 className="font-display mb-6 text-3xl leading-tight text-white md:text-4xl">
            A vacation that happens to include
            <br />
            <em className="font-normal italic">one unforgettable night.</em>
          </h2>
          <p className="font-body text-base leading-7 text-stone-300">
            Artists stay on the island with everyone else. They bring a guest, they get a villa, and they have the
            week. No press. No schedules. No early lobby calls. Just six days on Necker with the kind of quiet most
            touring artists can&apos;t find at home.
          </p>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {[
              {
                title: 'Tennis & Golf',
                text: 'Pro-am tennis with touring players and legends. Rounds on one of the Caribbean’s most beautiful championship courses nearby.'
              },
              {
                title: 'The Water',
                text: 'Snorkeling, sailing, paddleboarding, kiteboarding. Beach hours that do not end until you say so.'
              },
              {
                title: 'Island Life',
                text: 'Great House dinners, beach bonfires, and walking trails across 74 acres of private island.'
              },
              {
                title: 'The Performance',
                text: 'Closing night, the End of the World party after the charity auction. The whole island in one place.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded border border-[#4ecdc4]/20 bg-white/[0.04] px-6 py-6">
                <h3 className="font-display mb-2 text-2xl text-white">{item.title}</h3>
                <p className="font-body text-sm leading-6 text-stone-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ARTISTS */}
        <section className="px-7 py-14 md:px-[60px] md:py-[70px]">
          <p className="font-body mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4ecdc4]">Past Performers</p>
          <h2 className="font-display mb-8 text-3xl leading-tight text-[#1a3a3f] md:text-4xl">Who has played the island.</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {pastArtists.map((artist) => (
              <ArtistCard key={artist.name} artist={artist} />
            ))}
          </div>
        </section>

        {/* THE ROOM */}
        <section className="bg-stone-50 px-7 py-14 md:px-[60px] md:py-[70px]">
          <p className="font-body mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4ecdc4]">The Room</p>
          <h2 className="font-display mb-6 text-3xl leading-tight text-[#1a3a3f] md:text-4xl">A guest list worth flying for.</h2>
          <p className="font-body mb-4 text-base leading-7 text-stone-700">
            The audience is founders, CEOs, family offices, and industry leaders. The kind of room where artists leave
            with real business relationships, brand partnerships, and friendships that outlast the week.
          </p>
          <p className="font-body text-base leading-7 text-stone-700">On court and on course over the years:</p>
          <div className="mt-8">
            {[
              {
                label: 'Tennis',
                names: 'Novak Djokovic, Rafael Nadal, Bjorn Borg, John McEnroe, Rod Laver, Martina Navratilova, Boris Becker, Dominic Thiem, Caroline Wozniacki, Kim Clijsters, Grigor Dimitrov'
              },
              {
                label: 'Golf',
                names: 'Greg Norman, Sir Nick Faldo, Bryson DeChambeau, Matt Kuchar, Tommy Fleetwood, Sam Burns'
              },
              {
                label: 'Celebrities',
                names: 'Kevin Costner, Chevy Chase, Kate Upton, Sean Paul'
              }
            ].map((group, index) => (
              <div
                key={group.label}
                className={`py-5 ${index === 0 ? 'border-t border-stone-200' : ''} border-b border-stone-200`}
              >
                <p className="font-body mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4ecdc4]">{group.label}</p>
                <p className="font-display text-xl leading-8 text-[#1a3a3f]">{group.names}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="bg-[#f5f2ed] px-7 py-14 text-center md:px-[60px] md:py-[70px]">
          <p className="font-display mx-auto max-w-[620px] text-3xl italic leading-[1.45] text-[#1a3a3f]">
            &ldquo;Necker is a place where some of the world&apos;s biggest stars can decompress for a week in a perfect
            island setting - then share one unforgettable night of music.&rdquo;
          </p>
          <p className="font-body mt-6 text-xs uppercase tracking-[0.16em] text-stone-500">Richard Branson</p>
        </section>

        {/* THE CAUSE */}
        <section className="bg-stone-100 px-7 py-14 md:px-[60px] md:py-[70px]">
          <p className="font-body mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4ecdc4]">The Cause</p>
          <h2 className="font-display mb-6 text-3xl leading-tight text-[#1a3a3f] md:text-4xl">Why the week matters.</h2>
          <p className="font-body text-base leading-7 text-stone-700">
            Over 15 years, the Necker Cup has raised more than $12M for causes the guests and hosts care deeply about.
            Every year, a portion of what&apos;s raised at the closing night auction goes directly to these partners.
          </p>
          <div className="mt-7">
            {[
              {
                name: 'Virgin Unite',
                desc: 'Richard Branson’s nonprofit foundation, funding frontline entrepreneurs and leaders tackling global challenges.'
              },
              {
                name: 'National Tennis Foundation',
                desc: 'Growing the game through grassroots programs that put tennis in reach for kids who otherwise would not get near a court.'
              }
            ].map((item, index) => (
              <div
                key={item.name}
                className={`flex flex-col gap-1 py-4 md:flex-row md:gap-6 ${index === 0 ? 'border-t border-stone-200' : ''} border-b border-stone-200`}
              >
                <p className="font-display w-full shrink-0 text-xl font-semibold text-[#1a3a3f] md:w-[220px]">{item.name}</p>
                <p className="font-body text-[15px] leading-7 text-stone-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-7 py-16 text-center md:px-[60px] md:py-20">
          <p className="font-body mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4ecdc4]">Let&apos;s Talk</p>
          <h2 className="font-display mb-5 text-4xl leading-tight text-[#1a3a3f]">Bring your artist to the island.</h2>
          <p className="font-body mx-auto mb-8 max-w-[540px] text-[17px] leading-8 text-stone-700">
            If you think this is a week your artist would actually enjoy, let&apos;s have a real conversation. No deck,
            no pitch. Just 15 minutes to see if it fits.
          </p>
          <a
            href="https://calendly.com/rem-goexchange"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-block rounded bg-[#1a3a3f] px-10 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#0a1a1f]"
          >
            Schedule a Conversation
          </a>
          <div className="mx-auto mt-12 max-w-[420px] border-t border-stone-200 pt-8">
            <p className="font-display text-2xl font-semibold text-[#1a3a3f]">Rem Reynolds</p>
            <p className="font-body mt-1 text-sm leading-6 text-stone-500">
              Co-Founder, Necker Cup
              <br />
              rem@premierlive.com · 678.478.6649
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#0a1a1f] px-7 py-10 text-center text-xs tracking-[0.08em] text-stone-500 md:px-[60px]">
          Necker Cup · Necker Island, BVI · 15th Annual
          <br />
          <a href="https://neckercup.com" className="text-[#4ecdc4] hover:underline">
            neckercup.com
          </a>
        </footer>
      </main>
    </div>
  );
}
