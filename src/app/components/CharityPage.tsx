import { useState, useEffect } from 'react';
import virginUniteLogo from '@/app/logos/virgin_unite.png';
import oceanUniteLogo from '@/app/logos/icf.png';
import bransonCentreLogo from '@/app/logos/ntf.png';
import eldersLogo from '@/app/logos/sfct.png';

interface CharityPageProps {
  onNavigateHome: () => void;
  onNavigate: (page: 'home' | 'agenda' | 'sponsorship' | 'gallery' | 'charity') => void;
}

export function CharityPage({ onNavigateHome, onNavigate }: CharityPageProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const beneficiaries = [
    {
      name: 'Virgin Unite',
      logo: virginUniteLogo,
      logoText: 'VU',
      description: 'Supporting entrepreneurial approaches to social and environmental issues',
      impact: '$2.4M raised since 2012',
      color: 'bg-red-600',
      isCircular: true
    },
    {
      name: 'Ocean Unite',
      logo: oceanUniteLogo,
      logoText: 'OU',
      description: 'Protecting and restoring the ocean for future generations',
      impact: '15 marine reserves established',
      color: 'bg-blue-600',
      isCircular: false
    },
    {
      name: 'National Tennis Foundation',
      logo: bransonCentreLogo,
      logoText: 'NTF',
      description: 'Supporting Caribbean entrepreneurs through mentorship and funding',
      impact: '450+ businesses supported',
      color: 'bg-emerald-600',
      isCircular: false
    },
    {
      name: 'Community Tennis',
      logo: eldersLogo,
      logoText: 'CT',
      description: 'Independent leaders working for peace, justice and human rights',
      impact: 'Global conflict resolution',
      color: 'bg-amber-600',
      isCircular: false
    },
  ];

  const initiatives = [
    {
      title: 'Pro-Am Tournament',
      description: 'All entry fees contribute directly to our charitable partners',
      amount: '$850K'
    },
    {
      title: 'Exclusive Auction',
      description: 'Unique experiences and memorabilia donated by artists and athletes',
      amount: '$620K'
    },
    {
      title: 'Performance Donations',
      description: 'Artists donate proceeds from exclusive concerts',
      amount: '$380K'
    },
    {
      title: 'Sponsor Matching',
      description: 'Premier partners match guest contributions dollar-for-dollar',
      amount: '$550K'
    },
  ];

  const stories = [
    {
      year: '2024',
      title: 'Caribbean Youth Education Fund',
      description: 'Provided scholarships to 150 students across the British Virgin Islands, enabling access to higher education and vocational training.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTczNzk1NzgzNHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      year: '2023',
      title: 'Coral Reef Restoration',
      description: 'Funded the restoration of 5 hectares of coral reef around Necker Island, creating sustainable marine habitats.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JhbCUyMHJlZWYlMjB1bmRlcndhdGVyfGVufDF8fHx8MTczNzk1Nzg1N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      year: '2022',
      title: 'Small Business Recovery',
      description: 'Supported 75 island businesses with recovery grants following hurricane season, preserving local livelihoods.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzM3OTU3ODgyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
        
        .text-shadow-hero { text-shadow: 0 2px 40px rgba(0,0,0,0.3); }
      `}</style>

      {/* HERO BANNER */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwaW5nJTIwaGFuZHMlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzM3OTU3OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-teal-800/70 to-cyan-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        {/* Navigation */}
        <nav className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-3 group"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                scrolled ? 'bg-emerald-800' : 'bg-white/20 backdrop-blur-sm group-hover:bg-white/30'
              }`}>
                <span className="font-display text-lg font-semibold text-white">N</span>
              </div>
              <span className={`font-display text-xl tracking-wide transition-colors ${
                scrolled ? 'text-stone-900' : 'text-white'
              }`}>
                Necker Cup
              </span>
            </button>
            
            <div className="hidden lg:flex items-center gap-6">
              <button onClick={() => { onNavigateHome(); setTimeout(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className={`font-body text-sm tracking-wide transition-colors ${
                scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
              }`}>Experience</button>
              <button onClick={() => { onNavigateHome(); setTimeout(() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className={`font-body text-sm tracking-wide transition-colors ${
                scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
              }`}>Packages</button>
              <button onClick={() => { onNavigateHome(); setTimeout(() => document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className={`font-body text-sm tracking-wide transition-colors ${
                scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
              }`}>Talent</button>
              <button onClick={() => onNavigate('gallery')} className={`font-body text-sm tracking-wide transition-colors ${
                scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
              }`}>Gallery</button>
              <button onClick={() => onNavigate('sponsorship')} className={`font-body text-sm tracking-wide transition-colors ${
                scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
              }`}>Sponsorship</button>
              <button onClick={() => onNavigate('charity')} className={`font-body text-sm tracking-wide transition-colors ${
                scrolled ? 'text-emerald-800 font-medium' : 'text-white font-medium'
              }`}>Charity</button>
              <button onClick={() => onNavigate('agenda')} className={`font-body text-sm tracking-wide transition-colors ${
                scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
              }`}>Agenda</button>
            </div>
            
            <button className={`font-body text-sm px-6 py-2.5 rounded-full transition-all duration-300 ${
              scrolled 
                ? 'bg-emerald-800 text-white hover:bg-emerald-900 hover:shadow-lg' 
                : 'bg-white text-stone-900 hover:bg-stone-100 hover:shadow-lg'
            }`}>
              Reserve Your Spot
            </button>
          </div>
        </nav>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
          <p className="font-body text-white/80 text-sm tracking-[0.3em] uppercase mb-6">
            Giving Back
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-8 text-shadow-hero">
            Tennis with <br />
            <span className="italic">Purpose</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
            Every serve, every match, every moment contributes to creating lasting change. 
            Since 2012, the Necker Cup has raised over $12 million for charitable causes.
          </p>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              ['$12M+', 'Total Raised'],
              ['24', 'Charities Supported'],
              ['12', 'Years of Impact'],
              ['100%', 'Funds Donated']
            ].map(([stat, label], idx) => (
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
            meaningful change. Every year, we bring together tennis legends, world-class artists, 
            and philanthropic guests to create unforgettable experiences while generating 
            significant impact for communities and causes that need it most.
          </p>
          <p className="font-body text-stone-600 text-lg leading-relaxed">
            From ocean conservation to education initiatives, from supporting local Caribbean 
            entrepreneurs to global peace efforts, every dollar raised goes directly to our 
            charitable partners with zero administrative overhead.
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
              <div 
                key={idx}
                className="group bg-stone-50 rounded-3xl p-8 lg:p-10 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-6 mb-6">
                  {charity.isCircular ? (
                    <div className={`w-20 h-20 rounded-full ${charity.color} flex items-center justify-center flex-shrink-0 p-3`}>
                      <img 
                        src={charity.logo} 
                        alt={`${charity.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-40 h-28 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-5 shadow-md border border-stone-200 hover:shadow-lg transition-shadow">
                      <img 
                        src={charity.logo} 
                        alt={`${charity.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-stone-900 mb-2">{charity.name}</h3>
                    <p className="font-body text-emerald-700 text-sm font-medium mb-3">{charity.impact}</p>
                  </div>
                </div>
                <p className="font-body text-stone-600 leading-relaxed">{charity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE RAISE FUNDS */}
      <section className="py-24 lg:py-32 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-stone-400 text-sm tracking-[0.2em] uppercase mb-4">How We Give</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Every Moment <span className="italic">Matters</span>
            </h2>
            <p className="font-body text-stone-300 max-w-2xl mx-auto">
              From tournament entry fees to exclusive auctions, every aspect of the Necker Cup 
              contributes to our charitable mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, idx) => (
              <div 
                key={idx}
                className="bg-stone-800/50 border border-stone-700/50 rounded-2xl p-8 hover:bg-stone-800 transition-all duration-300"
              >
                <p className="font-display text-4xl text-emerald-400 mb-4">{initiative.amount}</p>
                <h3 className="font-display text-xl text-white mb-3">{initiative.title}</h3>
                <p className="font-body text-stone-400 text-sm leading-relaxed">{initiative.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-body text-stone-400 text-lg mb-2">2024 Total Impact</p>
            <p className="font-display text-6xl lg:text-7xl text-emerald-400">$2.4 Million</p>
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
              <div 
                key={idx}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div 
                    className="aspect-[4/3] rounded-3xl bg-cover bg-center shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                    style={{ backgroundImage: `url('${story.image}')` }}
                  />
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
            <button className="font-body bg-white text-stone-900 px-10 py-4 rounded-full font-medium hover:bg-stone-100 transition-all duration-300 hover:shadow-xl hover:scale-105">
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