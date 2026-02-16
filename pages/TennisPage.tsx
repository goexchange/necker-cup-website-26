import { useReservationForm } from '@/app/context/ReservationFormContext';
import { publicImages } from '@/app/lib/publicImages';



const courtFeatures = [
  'Championship-grade hard courts',
  'Floodlit for evening play',
  'Panoramic ocean views',
  'Professional ball kids',
  'Courtside refreshments',
  'Full pro-shop equipment',
];

export function TennisPage() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-emerald-900/80 to-stone-900" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-body text-emerald-400 text-sm tracking-[0.2em] uppercase mb-8">The Tournament</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-[0.95]">
            World-Class Tennis <br /><span className="italic text-emerald-400">in Paradise</span>
          </h1>
          <p className="font-body text-xl text-white/80 max-w-2xl leading-relaxed">
            ATP and WTA tour players and legends are paired with amateur teams of all skill levels
            for an unforgettable week of competitive yet fun tennis on Necker Island.
          </p>
        </div>
      </section>

      {/* TWO TOURNAMENT FORMATS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">Two Ways to Play</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              Choose Your <span className="italic text-emerald-800">Format</span>
            </h2>
            <p className="font-body text-stone-600 max-w-2xl mx-auto">
              The Necker Cup offers two distinct Pro-Am tournament experiences. Whether you thrive on fierce competition or prefer a fun, spirited atmosphere, there's a format for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ADVANCED / COMPETITIVE */}
            <div className="relative bg-stone-900 text-white rounded-3xl p-8 md:p-12 border border-stone-700 hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-800/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div className="bg-emerald-800/30 text-emerald-400 font-body text-xs tracking-widest uppercase px-3 py-1 rounded-full">Limited to 5 Amateur Spots</div>
                </div>
                <h3 className="font-display text-3xl md:text-4xl mb-4">Necker Cup</h3>
                <p className="font-body text-emerald-400 text-lg font-medium mb-6">NTRP 4.5 or Higher</p>
                <p className="font-body text-white/80 text-lg leading-relaxed mb-8">
                  For the serious competitor. This is an all-out, high-level Pro-Am format where advanced amateurs are paired with ATP and WTA professionals. Expect intense rallies, tight matches, and a fiercely competitive atmosphere. Round-robin play leads to the championship finals and the coveted Necker Cup trophy.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                    <p className="font-body text-white/70">Advanced competitive format with all-out play</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                    <p className="font-body text-white/70">Paired with touring ATP/WTA professionals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                    <p className="font-body text-white/70">Round-robin advancing to championship finals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0" />
                    <p className="font-body text-white/70">Compete for the Necker Cup trophy</p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="font-display text-2xl text-emerald-400">5</p>
                  <p className="font-body text-white/60 text-sm">Amateur spots available</p>
                </div>
              </div>
            </div>

            {/* SPIRITED / TRADITIONAL */}
            <div className="relative bg-white rounded-3xl p-8 md:p-12 border-2 border-stone-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-xl">🎾</span>
                  </div>
                  <div className="bg-emerald-100 text-emerald-800 font-body text-xs tracking-widest uppercase px-3 py-1 rounded-full">Up to 10 Amateur Spots</div>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-stone-900 mb-4">Necker Cup Spirited</h3>
                <p className="font-body text-emerald-800 text-lg font-medium mb-6">NTRP 4.5 or Lower</p>
                <p className="font-body text-stone-600 text-lg leading-relaxed mb-8">
                  The traditional Necker Cup experience. A spirited, handicapped Pro-Am format designed for players of all levels to enjoy competitive yet accessible tennis. The emphasis is on fun, camaraderie, and the joy of playing alongside legends. Teams of up to two amateurs partner with a pro for round-robin play.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-800 mt-2.5 flex-shrink-0" />
                    <p className="font-body text-stone-600">Handicapped scoring keeps it competitive for all levels</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-800 mt-2.5 flex-shrink-0" />
                    <p className="font-body text-stone-600">Paired with tennis legends and touring pros</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-800 mt-2.5 flex-shrink-0" />
                    <p className="font-body text-stone-600">Fun, spirited atmosphere with all skill levels welcome</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-800 mt-2.5 flex-shrink-0" />
                    <p className="font-body text-stone-600">Round-robin play with top teams advancing to finals</p>
                  </div>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 text-center">
                  <p className="font-display text-2xl text-emerald-800">10</p>
                  <p className="font-body text-stone-500 text-sm">Amateur spots available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE COURTS */}
      <section className="py-24 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">Necker Island</p>
              <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-6">
                The <span className="italic text-emerald-800">Courts</span>
              </h2>
              <p className="font-body text-stone-600 text-lg leading-relaxed mb-8">
                Play on championship-grade courts with stunning Caribbean ocean views. 
                Whether it's an early morning clinic, afternoon Pro-Am match, or twilight exhibition, 
                every moment on court is unforgettable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {courtFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-800 flex-shrink-0" />
                    <p className="font-body text-stone-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="aspect-[4/3] rounded-3xl bg-cover bg-center shadow-2xl"
              style={{ backgroundImage: `url('${publicImages.necker}')` }}
            />
          </div>
        </div>
      </section>

      {/* ADDITIONAL RACQUET SPORTS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">Beyond Tennis</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">
              Padel, Pickleball & <span className="italic text-emerald-800">More</span>
            </h2>
            <p className="font-body text-stone-600 max-w-2xl mx-auto">
              In addition to the main Pro-Am tournament, guests can enjoy padel tournaments, 
              beach tennis, pickleball, and tennis clinics led by touring professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-8 text-center border border-stone-200">
              <div className="text-4xl mb-4">🎾</div>
              <h3 className="font-display text-2xl text-stone-900 mb-2">Padel</h3>
              <p className="font-body text-stone-600 text-sm">Competitive padel tournament with teams of two</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-8 text-center border border-stone-200">
              <div className="text-4xl mb-4">🏓</div>
              <h3 className="font-display text-2xl text-stone-900 mb-2">Pickleball</h3>
              <p className="font-body text-stone-600 text-sm">Beach pickleball for all skill levels</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-8 text-center border border-stone-200">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-display text-2xl text-stone-900 mb-2">Pro Clinics</h3>
              <p className="font-body text-stone-600 text-sm">Instructional clinics led by ATP/WTA professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Ready to play in <span className="italic">paradise</span>?
          </h2>
          <p className="font-body text-white/80 text-lg mb-10">
            Limited to 148 guests. Pro-Am spots fill quickly for this once-in-a-lifetime tournament.
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
