import { useReservationForm } from '@/app/context/ReservationFormContext';
import { publicImages } from '@/app/lib/publicImages';
import { useState } from 'react';

const courtFeatures = [
  'Championship-grade hard courts',
  'Floodlit for evening play',
  'Panoramic ocean views',
  'Professional ball kids',
  'Courtside refreshments',
  'Full pro-shop equipment',
];

const tennisGallery = [
  { src: publicImages.crowdPavilionCourt, alt: 'Packed crowd at the Tennis Pavilion watching a match' },
  { src: publicImages.bransonBorgCelebrate, alt: 'Branson and Borg celebrating on court' },
  { src: publicImages.tennisActionBlue, alt: 'Tennis action on the Necker Island court' },
  { src: publicImages.trophyCeremonyCourt, alt: 'Trophy ceremony on court with legends' },
  { src: publicImages.tennisCourtPlayer, alt: 'Player on the championship court' },
  { src: publicImages.bransonCourtsideMic, alt: 'Branson courtside addressing the crowd' },
  { src: publicImages.tennisActionBackhand, alt: 'Backhand action shot on court' },
  { src: publicImages.groupPhotoCourt, alt: 'All participants gathered on the court' },
  { src: publicImages.neckerOpenChampion, alt: 'Necker Open champion with trophy' },
  { src: publicImages.groupPhotoMoskito, alt: 'Group photo on the Moskito court' },
  { src: publicImages.proPortraitFila, alt: 'Tennis pro portrait' },
  { src: publicImages.matchAnnouncer, alt: 'Match announcer courtside' },
];

export function TennisPage() {
  const { openForm } = useReservationForm();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-stone-50 antialiased pt-[72px]">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      {/* HERO -- full-bleed tennis banner */}
      <section className="relative py-24 lg:py-40 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url('${publicImages.crowdPavilionCourt}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/30" />
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

      {/* TENNIS GALLERY */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">On Court</p>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900">
              Tennis at <span className="italic text-emerald-800">Necker</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {tennisGallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIdx(i)}
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    i === 0 ? 'h-full min-h-[320px] md:min-h-[420px]' : 'aspect-square'
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl font-light transition-colors"
            onClick={() => setLightboxIdx(null)}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl font-light transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + tennisGallery.length) % tennisGallery.length); }}
            aria-label="Previous image"
          >
            &#8249;
          </button>
          <img
            src={tennisGallery[lightboxIdx].src}
            alt={tennisGallery[lightboxIdx].alt}
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl font-light transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % tennisGallery.length); }}
            aria-label="Next image"
          >
            &#8250;
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-white/50 text-sm">
            {lightboxIdx + 1} / {tennisGallery.length}
          </p>
        </div>
      )}

      {/* TWO TOURNAMENT FORMATS */}
      <section className="py-24 lg:py-32 bg-stone-50">
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
            <div className="relative bg-stone-900 text-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-stone-700 hover:border-emerald-500">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('${publicImages.tennisActionBlue}')` }} />
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
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
            <div className="relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-stone-200 hover:border-emerald-300">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('${publicImages.bransonBorgCelebrate}')` }} />
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
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
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-4">Necker Island</p>
              <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-6">
                The <span className="italic text-emerald-800">Courts</span>
              </h2>
              <p className="font-body text-stone-600 text-lg leading-relaxed mb-8">
                We have three tennis courts on Necker Island -- two at the Tennis Pavilion and one at the Branson Residence. 
                All are championship-grade with stunning Caribbean ocean views. 
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
              style={{ backgroundImage: `url('${publicImages.groupPhotoMoskito}')` }}
            />
          </div>
        </div>
      </section>

      {/* ADDITIONAL RACQUET SPORTS */}
      <section className="py-24 lg:py-32 bg-stone-50">
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
            <div className="relative rounded-2xl overflow-hidden group">
              <img src={publicImages.tennisActionBackhand} alt="Padel on Necker Island" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl text-white mb-1">Padel</h3>
                <p className="font-body text-white/70 text-sm">Competitive padel tournament with teams of two</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img src={publicImages.proPortraitSmile} alt="Pickleball at Necker" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl text-white mb-1">Pickleball</h3>
                <p className="font-body text-white/70 text-sm">Beach pickleball for all skill levels</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img src={publicImages.proPortraitFila} alt="Pro tennis clinic" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl text-white mb-1">Pro Clinics</h3>
                <p className="font-body text-white/70 text-sm">Instructional clinics led by ATP/WTA professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('${publicImages.trophyCeremonyCourt}')` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-teal-800" style={{ mixBlendMode: 'multiply' }} />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center text-white">
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
