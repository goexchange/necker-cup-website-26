import { Award, TrendingUp, Users, Mail } from 'lucide-react';
import { useReservationForm } from '@/app/context/ReservationFormContext';

const sponsors = {
  presenting: [
    { name: 'Virgin Limited Edition', tier: 'Platinum Sponsor' },
    { name: 'Premier Live', tier: 'Platinum Sponsor' }
  ],
  premier: [
    { name: 'IGY Trident', tier: 'Premier Partner', logo: '/sponsors/trident.png' },
    { name: 'Northrop & Johnson', tier: 'Premier Partner', logo: '/sponsors/northrop-johnson.png' },
    { name: 'Fraser Yachts', tier: 'Premier Partner', logo: '/sponsors/fraser-yachts.png' },
    { name: 'MarineMax', tier: 'Premier Partner', logo: '/sponsors/marinemax.png' }
  ],
  partners: [
    'Inglot Cosmetics', 'Mallory Agency', 'Red Hospitality'
  ]
};

const tiers = [
  {
    name: 'Platinum Sponsor',
    price: '$500,000+',
    icon: Award,
    benefits: [
      'Exclusive title partnership of tournament or concert',
      'Top-tier branding across all event materials',
      'VIP hospitality for up to 10 guests with full island access',
      'Speaking opportunity at opening ceremony',
      'Private meet & greet with artists and tennis legends',
      'Custom activation space on island',
      'Year-round digital marketing partnership',
      'Logo placement on all broadcast and streaming content'
    ]
  },
  {
    name: 'Premier Partner',
    price: '$250,000',
    icon: TrendingUp,
    benefits: [
      'Premium brand visibility throughout the week',
      'VIP hospitality for up to 6 guests',
      'Logo on tournament apparel and merchandise',
      'Social media promotion and content features',
      'Access to exclusive networking events',
      'Product placement opportunities',
      'Digital content package with photo and video rights',
      'Recognition during artist performances'
    ]
  },
  {
    name: 'Event Partner',
    price: '$100,000',
    icon: Users,
    benefits: [
      'Brand recognition on event website and materials',
      'VIP hospitality for up to 4 guests',
      'Logo placement at designated event areas',
      'Social media mentions and recognition',
      'Access to selected networking events',
      'Digital marketing materials',
      'Invitation to farewell gala',
      'Event recap content package'
    ]
  }
];

const stats = [
  { value: '48', label: 'Elite Guests', desc: 'High-net-worth attendees' },
  { value: '2M+', label: 'Media Reach', desc: 'Global impressions' },
  { value: '15', label: 'Countries', desc: 'International audience' },
  { value: '$50M+', label: 'Aggregate Wealth', desc: 'Combined net worth' }
];

export function SponsorshipPage() {
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
            Partnership Opportunities
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.95]">
            Partner with <br /><span className="italic">Excellence</span>
          </h1>
          <p className="font-body text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join an elite group of global brands supporting the world's most exclusive
            tennis and music event on Richard Branson's private island.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-4xl md:text-5xl text-emerald-800 mb-2">{stat.value}</p>
                <p className="font-body text-stone-900 font-medium mb-1">{stat.label}</p>
                <p className="font-body text-stone-500 text-sm">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT SPONSORS */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              Our <span className="italic text-emerald-800">2026 Partners</span>
            </h2>
            <p className="font-body text-stone-600 max-w-2xl mx-auto">
              World-class brands that share our commitment to exceptional experiences.
            </p>
          </div>

          <div className="mb-16">
            <p className="font-body text-stone-400 text-xs tracking-[0.25em] uppercase text-center mb-8">Platinum Sponsors</p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
              {sponsors.presenting.map((sponsor) => (
                <div key={sponsor.name} className="group relative bg-white rounded-2xl px-12 py-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <p className="font-display text-3xl md:text-4xl text-stone-800 group-hover:text-emerald-800 transition-colors mb-2">{sponsor.name}</p>
                  <p className="font-body text-stone-500 text-sm text-center">{sponsor.tier}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <p className="font-body text-stone-400 text-xs tracking-[0.25em] uppercase text-center mb-8">Premier Partners</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {sponsors.premier.map((sponsor) => (
                <div key={sponsor.name} className="group relative bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center hover:scale-105">
                  <p className="font-display text-xl md:text-2xl text-stone-700 group-hover:text-emerald-800 transition-colors text-center mb-2">{sponsor.name}</p>
                  <p className="font-body text-stone-500 text-xs text-center">{sponsor.tier}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body text-stone-400 text-xs tracking-[0.25em] uppercase text-center mb-8">Event Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {sponsors.partners.map((sponsor) => (
                <div key={sponsor} className="group relative">
                  <p className="font-body text-base md:text-lg text-stone-500 group-hover:text-emerald-800 transition-colors">{sponsor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TIERS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              Partnership <span className="italic text-emerald-800">Packages</span>
            </h2>
            <p className="font-body text-stone-600 max-w-2xl mx-auto">
              Customizable packages designed to maximize your brand exposure and deliver unforgettable experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-stone-50 rounded-3xl p-8 lg:p-10 border-2 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${i === 0 ? 'border-emerald-800 lg:-mt-8' : 'border-stone-200'}`}
              >
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${i === 0 ? 'bg-emerald-800' : 'bg-stone-300'}`}>
                    <tier.icon className={`w-8 h-8 ${i === 0 ? 'text-white' : 'text-stone-700'}`} />
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl text-stone-900 mb-2">{tier.name}</h3>
                  <p className="font-display text-4xl text-emerald-800 mb-1">{tier.price}</p>
                  {i === 0 && <p className="font-body text-stone-500 text-sm">Investment</p>}
                </div>
                <div className="space-y-4">
                  {tier.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-800" />
                      </div>
                      <p className="font-body text-stone-700 text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
                <button className={`w-full mt-8 px-6 py-3 rounded-full font-body font-medium transition-all ${i === 0 ? 'bg-emerald-800 text-white hover:bg-emerald-900 hover:shadow-lg' : 'bg-white text-stone-900 border-2 border-stone-200 hover:border-emerald-800 hover:text-emerald-800'}`}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                Why Partner with <span className="italic text-emerald-400">Necker Cup?</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl text-white mb-2">Unparalleled Access</h3>
                  <p className="font-body text-stone-400 leading-relaxed">
                    Connect with ultra-high-net-worth individuals, celebrity athletes, and global artists
                    in the most intimate and exclusive setting imaginable.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white mb-2">Global Recognition</h3>
                  <p className="font-body text-stone-400 leading-relaxed">
                    Align your brand with excellence, luxury, and the legendary Virgin brand while
                    reaching millions through strategic media partnerships.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white mb-2">Authentic Engagement</h3>
                  <p className="font-body text-stone-400 leading-relaxed">
                    Move beyond traditional advertising. Create memorable brand experiences in an
                    environment where genuine connections flourish.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-stone-800/50 rounded-3xl p-6 md:p-10 border border-stone-700">
              <h3 className="font-display text-3xl text-white mb-6">Past Event Highlights</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-1 border-b border-stone-700 pb-3">
                  <span className="font-body text-stone-400 text-sm sm:text-base">Media Coverage</span>
                  <span className="font-display text-xl sm:text-2xl text-emerald-400">150+ outlets</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-1 border-b border-stone-700 pb-3">
                  <span className="font-body text-stone-400 text-sm sm:text-base">Social Reach</span>
                  <span className="font-display text-xl sm:text-2xl text-emerald-400">5M+ impressions</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-1 border-b border-stone-700 pb-3">
                  <span className="font-body text-stone-400 text-sm sm:text-base">Celebrity Attendees</span>
                  <span className="font-display text-xl sm:text-2xl text-emerald-400">20+</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-1">
                  <span className="font-body text-stone-400 text-sm sm:text-base">Brand Satisfaction</span>
                  <span className="font-display text-xl sm:text-2xl text-emerald-400">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <Mail className="w-16 h-16 mx-auto mb-6 text-white/80" />
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Let's Create Something <span className="italic">Extraordinary</span>
          </h2>
          <p className="font-body text-white/80 text-lg mb-10">
            Our partnerships team is ready to create a custom package that aligns perfectly with your brand objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openForm} className="font-body bg-white text-stone-900 px-10 py-4 rounded-full font-medium hover:bg-stone-100 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Schedule a Call
            </button>
            <button className="font-body border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white/10 transition-all">
              Download Partnership Deck
            </button>
          </div>
          <p className="font-body text-white/60 text-sm mt-8">
            Contact: <a href="mailto:partnerships@neckercup.com" className="underline hover:text-white">partnerships@neckercup.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
