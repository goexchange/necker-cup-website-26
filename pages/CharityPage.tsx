import { useReservationForm } from '@/app/context/ReservationFormContext';
import virginUniteLogo from '@/app/logos/virgin_unite.png';
import ntfLogo from '@/app/logos/ntf.png';
import icfLogo from '@/app/logos/icf.png';

const beneficiaries = [
  { name: 'Virgin Unite', logo: virginUniteLogo, description: 'The entrepreneurial foundation of the Virgin Group. Richard Branson and the Virgin Group cover all overheads, meaning 100% of donations go directly to the frontline. Virgin Unite focuses on shining a spotlight on unacceptable issues, incubating disruptive collaborations, and empowering entrepreneurs to change business for good.', link: 'https://www.virgin.com/virgin-unite', color: 'bg-red-600', isCircular: true },
  { name: 'National Tennis Foundation (NTF)', logo: ntfLogo, description: 'A nationally recognized 501(c)(3) that provides scholarships and training opportunities to exceptional student athletes regardless of race or economic means. NTF is based in Las Vegas and has been supported at every single Necker Cup since the event\'s founding.', link: 'https://www.nationaltennisfoundation.org', color: 'bg-emerald-600', isCircular: false },
  { name: 'BVI Lawn Tennis Association', description: 'Dedicated to youth tennis development in the British Virgin Islands territory.', link: null, color: 'bg-amber-600', isCircular: false },
  { name: 'Inspiring Children Foundation', logo: icfLogo, description: 'Co-founded by Ryan Wolfington, focused on providing comprehensive programs for underprivileged young people in academics, athletics, leadership and character development. Has provided over 70 scholarships to colleges including Harvard, Stanford, West Point, Princeton, and Georgetown.', link: 'https://inspiringchildren.org', color: 'bg-blue-600', isCircular: false },
];

const stories = [
  { year: '2022', title: 'Single Edition Impact', description: 'In 2022 alone, over $900,000 was raised in a single edition of the Necker Cup through the Charity Dinner & Auction and guest generosity.', image: 'https://www.virgin.com/sites/virgin.com/files/necker-cup-charity-auction.jpg' },
  { year: '2017', title: 'Hurricane Irma & BVI Rebuilding', description: 'When Hurricane Irma destroyed much of Necker Island, the Cup temporarily relocated to Baha Mar Resort in Nassau, Bahamas, and directed the majority of that year\'s fundraising toward Virgin Unite\'s BVI Community Support Appeal for rebuilding efforts.', image: 'https://www.virgin.com/sites/virgin.com/files/necker-cup-charity-auction.jpg' },
];

export function CharityPage() {
  const { openForm } = useReservationForm();

  return (
    <div className="min-h-screen bg-stone-50 pt-[72px]">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
        .text-shadow-hero { text-shadow: 0 2px 40px rgba(0,0,0,0.3); }
      `}</style>

      {/* HERO BANNER */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.virgin.com/sites/virgin.com/files/necker-cup-charity-auction.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-teal-800/70 to-cyan-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
          <p className="font-body text-white/80 text-sm tracking-[0.3em] uppercase mb-6">Giving Back</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-8 text-shadow-hero">
            Tennis with <br /><span className="italic">Purpose</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
            Every serve, every match, every moment contributes to creating lasting change.
            The Necker Cup has distributed over $7 million to charitable causes over its first decade-plus. In 2022 alone, over $900,000 was raised in a single edition.
          </p>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12">
            {[['$7M+', 'Total Distributed'], ['$900K+', '2022 Single Edition'], ['15', 'Years of Impact'], ['100%', 'To Frontline (Virgin Unite)']].map(([stat, label], idx) => (
              <div key={idx} className="text-center">
                <p className="font-display text-5xl lg:text-6xl text-emerald-800 mb-3">{stat}</p>
                <p className="font-body text-stone-600 text-sm tracking-wide uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-6">Our Mission</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.1] mb-8">
            Play for a <span className="italic text-emerald-800">Greater Purpose</span>
          </h2>
          <p className="font-body text-stone-600 text-lg leading-relaxed mb-6">
            The Necker Cup is more than an exclusive tennis tournament—it's a platform for
            meaningful change. The primary beneficiaries include Virgin Unite (100% of donations
            go to the frontline; Branson and Virgin Group cover all overheads), the National Tennis
            Foundation, the BVI Lawn Tennis Association, and the Inspiring Children Foundation.
          </p>
          <p className="font-body text-stone-600 text-lg leading-relaxed">
            In 2017, when Hurricane Irma destroyed much of Necker Island, the Cup temporarily
            relocated to Baha Mar Resort in Nassau, Bahamas, and directed the majority of that
            year's fundraising toward Virgin Unite's BVI Community Support Appeal for rebuilding efforts.
          </p>
        </div>
      </section>

      {/* BENEFICIARIES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">Our Partners</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              Supporting <span className="italic">World-Class</span> Charities
            </h2>
            <p className="font-body text-stone-600 max-w-2xl mx-auto">
              We partner with organizations making real, measurable impact across the globe.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {beneficiaries.map((charity, idx) => (
              <div key={idx} className="group bg-stone-50 rounded-3xl p-8 lg:p-10 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-start gap-6 mb-6">
                  {charity.logo && (charity.isCircular ? (
                    <div className={`w-20 h-20 rounded-full ${charity.color} flex items-center justify-center flex-shrink-0 p-3`}>
                      <img src={charity.logo} alt={`${charity.name} logo`} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-40 h-28 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-5 shadow-md border border-stone-200 hover:shadow-lg transition-shadow">
                      <img src={charity.logo} alt={`${charity.name} logo`} className="max-w-full max-h-full object-contain" />
                    </div>
                  ))}
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-stone-900 mb-2">
                      {charity.link ? <a href={charity.link} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800">{charity.name}</a> : charity.name}
                    </h3>
                  </div>
                </div>
                <p className="font-body text-stone-600 leading-relaxed">{charity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT HIGHLIGHT */}
      <section className="py-24 lg:py-32 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-stone-400 text-sm tracking-[0.2em] uppercase mb-4">How We Give</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Every Moment <span className="italic">Matters</span>
            </h2>
            <p className="font-body text-stone-300 max-w-2xl mx-auto">
              The Charity Dinner & Auction on the final evening, together with guest generosity and event initiatives,
              drives the Necker Cup's impact. 100% of Virgin Unite donations go directly to the frontline.
            </p>
          </div>
          <div className="text-center">
            <p className="font-body text-stone-400 text-lg mb-2">Total distributed over the first decade-plus</p>
            <p className="font-display text-6xl lg:text-7xl text-emerald-400">$7 Million+</p>
            <p className="font-body text-stone-400 text-sm mt-4">2022 single edition: $900,000+</p>
          </div>
        </div>
      </section>

      {/* IMPACT STORIES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">Impact Stories</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              Real Change, <span className="italic">Real Lives</span>
            </h2>
          </div>
          <div className="space-y-16">
            {stories.map((story, idx) => (
              <div key={idx} className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] rounded-3xl bg-cover bg-center shadow-2xl hover:scale-[1.02] transition-transform duration-500" style={{ backgroundImage: `url('${story.image}')` }} />
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="font-body text-emerald-800 font-medium mb-3">{story.year}</p>
                  <h3 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">{story.title}</h3>
                  <p className="font-body text-stone-600 text-lg leading-relaxed">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-16 h-px bg-emerald-800 mx-auto mb-12" />
          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-[1.2] mb-10">
            "The beauty of the Necker Cup is that people come together, have an incredible time,
            and create <span className="italic text-emerald-800">life-changing impact</span> for communities around the world."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-px h-12 bg-stone-200" />
            <div className="text-left">
              <p className="font-body text-stone-900 font-medium">Sir Richard Branson</p>
              <p className="font-body text-stone-500 text-sm">Founder, Necker Cup</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Join us in making a <span className="italic">difference</span>
          </h2>
          <p className="font-body text-white/80 text-lg mb-10">
            Your participation in the Necker Cup directly supports our charitable partners.
            Together, we can create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openForm} className="font-body bg-white text-stone-900 px-10 py-4 rounded-full font-medium hover:bg-stone-100 transition-all duration-300 hover:shadow-xl hover:scale-105">
              Reserve Your Spot
            </button>
            <button className="font-body border-2 border-white/40 text-white px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Make a Donation
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="py-12 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-body text-stone-500 text-sm leading-relaxed">
            The Necker Cup is a registered 501(c)(3) charitable organization. 100% of funds raised
            go directly to our charitable partners with zero administrative overhead. All operational
            costs are covered by our generous sponsors.
          </p>
        </div>
      </section>
    </div>
  );
}
