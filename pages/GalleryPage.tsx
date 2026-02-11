import { X } from 'lucide-react';
import { useState } from 'react';
import { useReservationForm } from '@/app/context/ReservationFormContext';
import { publicImages } from '@/app/lib/publicImages';

// All images from public/images for reliable loading
const GALLERY_IMAGES = {
  neckerAerial: publicImages.necker,
  greatHouse: publicImages.necker,
  moskitoAerial: publicImages.moskito,
  courtsNight: publicImages.banner,
  groupPhoto: publicImages.necker,
  endOfWorldParty: publicImages.banner,
  charityAuction: publicImages.moskito,
};

const galleryCategories = [
  {
    title: 'The Island',
    subtitle: 'Paradise Found',
    images: [
      GALLERY_IMAGES.neckerAerial,
      GALLERY_IMAGES.greatHouse,
      GALLERY_IMAGES.moskitoAerial,
      GALLERY_IMAGES.courtsNight,
      GALLERY_IMAGES.groupPhoto,
    ]
  },
  {
    title: 'On Court',
    subtitle: 'Where Legends Play',
    images: [
      GALLERY_IMAGES.courtsNight,
      GALLERY_IMAGES.groupPhoto,
      GALLERY_IMAGES.greatHouse,
      GALLERY_IMAGES.neckerAerial,
    ]
  },
  {
    title: 'Parties & Events',
    subtitle: 'End of the World',
    images: [
      GALLERY_IMAGES.endOfWorldParty,
      GALLERY_IMAGES.charityAuction,
      GALLERY_IMAGES.groupPhoto,
      GALLERY_IMAGES.courtsNight,
    ]
  },
];

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { openForm } = useReservationForm();
  return (
    <div className="min-h-screen bg-stone-50">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      {/* HERO BANNER - Necker Island from MD */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden pt-[72px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${GALLERY_IMAGES.neckerAerial}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-teal-800/50 to-cyan-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
          <p className="font-body text-white/80 text-sm tracking-[0.3em] uppercase mb-6">
            Visual Journey
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-8">
            Capturing <br />
            <span className="italic">Paradise</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
            Relive the magic through stunning imagery from past Necker Cup tournaments.
            From championship matches to sunset performances, these moments tell our story.
          </p>
        </div>
      </section>

      {/* GALLERY CATEGORIES */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        {galleryCategories.map((category, categoryIdx) => (
          <div key={categoryIdx} className={categoryIdx > 0 ? 'mt-32' : ''}>
            <div className="mb-12">
              <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-2">
                {category.subtitle}
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-900">
                {category.title}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {category.images.map((img, imgIdx) => (
                <div
                  key={imgIdx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group ${
                    imgIdx === 0 && category.images.length > 3 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center aspect-square group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url('${img}')`,
                      minHeight: imgIdx === 0 && category.images.length > 3 ? '400px' : '250px'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="font-body text-sm">Click to view</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* STATS SECTION */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              ['1,000+', 'Captured Moments'],
              ['12', 'Years of History'],
              ['48', 'Exclusive Guests'],
              ['100%', 'Unforgettable']
            ].map(([stat, label], idx) => (
              <div key={idx} className="text-center">
                <p className="font-display text-5xl lg:text-6xl text-emerald-400 mb-3">{stat}</p>
                <p className="font-body text-stone-400 text-sm tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-6">
            Ready to create your own <span className="italic text-emerald-800">memories</span>?
          </h2>
          <p className="font-body text-stone-600 text-lg mb-10">
            Join us for Necker Cup 2026 and become part of this exclusive story.
          </p>
          <button
            onClick={openForm}
            className="font-body bg-emerald-800 text-white px-10 py-4 rounded-full font-medium hover:bg-emerald-900 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Reserve Your Spot
          </button>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
