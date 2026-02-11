import { useReservationForm } from '@/app/context/ReservationFormContext';
import { publicImages } from '@/app/lib/publicImages';

const highlights = [
  { number: '48', label: 'Exclusive Guests', desc: 'Ultra-high-net-worth individuals and celebrities' },
  { number: '5', label: 'Days of Tennis', desc: 'World-class competition and Pro-Am matches' },
  { number: '2', label: 'World-Class Artists', desc: 'Intimate performances under Caribbean stars' },
  { number: '1', label: 'Private Island', desc: "Sir Richard Branson's exclusive Necker Island" },
];

const experiences = [
  {
    title: 'Tennis Excellence',
    description: 'ATP and WTA tour players and legends are paired with amateur teams of all skill levels. A handicapped scoring format keeps things competitive for everyone. The tournament director is Vasek Pospisil, 2014 Wimbledon doubles champion. The week builds toward a Pro Exhibition match on the final day, then the Charity Dinner & Auction.',
    image: publicImages.necker,
    features: ['Pro-Am round-robin tournament', 'Handicapped scoring for all levels', 'Pro Exhibition match', 'Necker Cup trophy finals']
  },
  {
    title: 'The End of the World Party',
    description: 'The signature closing event of every Necker Cup. Past performances have included Florida Georgia Line on the beach, Pitbull, Jamie Foxx DJing and performing, and Kenny Chesney under the stars. Followed by the Charity Dinner & Auction.',
    image: publicImages.banner,
    features: ['Exhibition match', 'Charity Dinner & Auction', 'Legendary closing party', 'World-class live performances']
  },
  {
    title: 'Necker Island',
    description: 'A 74-acre private island in turquoise Caribbean waters with the iconic Great House, Balinese-style villas, championship tennis courts, coral reefs, and white sandy beaches. All tennis, meals, dinners, and parties take place on Necker.',
    image: publicImages.necker,
    features: ['Great House & villas', 'Championship courts', 'Beach and water activities', 'All events on-island']
  },
  {
    title: 'Moskito Island & Beyond',
    description: 'Guests can stay at The Branson Beach Estate on Moskito Island—just a 5–7 minute boat ride away. The Necker Open Pro-Am golf runs alongside the tennis at Nail Bay\'s private course; past participants include Sir Nick Faldo, Greg Norman, and Bryson DeChambeau.',
    image: publicImages.moskito,
    features: ['Branson Beach Estate option', 'Necker Open golf', 'Boat transfer to Necker', 'Private pools & ocean views']
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready to experience <span className="italic">paradise</span>?
          </h2>
          <p className="font-body text-white/80 text-lg mb-10">
            Limited to 48 guests. Spaces fill quickly for this once-in-a-lifetime experience.
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
