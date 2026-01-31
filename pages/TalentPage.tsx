import { useReservationForm } from '@/app/context/ReservationFormContext';

const tennisLegendsAndPros = [
  'Bjorn Borg', 'Juan Martin Del Potro', 'Tommy Haas', 'Rod Laver', 'Caroline Wozniacki',
  'Heather Watson', 'Rafael Nadal', 'Novak Djokovic', 'Jack Sock', 'Vasek Pospisil (Tournament Director)',
];
const musiciansAndCelebrities = [
  'Andrea Bocelli', 'Florida Georgia Line', 'Jamie Foxx', 'Kate Upton', 'Pitbull', 'Kenny Chesney', 'Jimmy Buffett',
];

export function TalentPage() {
  const { openForm } = useReservationForm();

  return (
    <div className="min-h-screen bg-stone-50 antialiased pt-[72px]">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      {/* HERO */}
      <section className="relative py-24 lg:py-40 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-body text-stone-400 text-sm tracking-[0.2em] uppercase mb-8">Past Pros, Musicians & Celebrity Guests</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-12 leading-tight">
            Tennis Legends & Pros · <span className="italic text-emerald-400">Musicians & Celebrities</span>
          </h1>
        </div>
      </section>

      {/* TWO COLUMNS: TENNIS + MUSICIANS/CELEBS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl text-stone-900 mb-8">Tennis Legends & Pros</h2>
              <div className="space-y-3">
                {tennisLegendsAndPros.map((name) => (
                  <p key={name} className="font-body text-lg text-stone-700 hover:text-emerald-800 transition-colors">
                    {name}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl text-stone-900 mb-8">Musicians & Celebrities</h2>
              <div className="space-y-3">
                {musiciansAndCelebrities.map((name) => (
                  <p key={name} className="font-body text-lg text-stone-700 hover:text-emerald-800 transition-colors">
                    {name}
                  </p>
                ))}
              </div>
              <p className="font-body text-stone-500 text-sm mt-8">
                For a complete list of past guests, visit{' '}
                <a href="https://premierlive.com" target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:text-emerald-900 underline font-medium">premierlive.com</a>
              </p>
            </div>
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
