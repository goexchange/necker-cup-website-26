import { X } from 'lucide-react';
import { useState } from 'react';
import { useReservationForm } from '@/app/context/ReservationFormContext';

const galleryCategories = [
  {
    title: 'The Island',
    subtitle: 'Paradise Found',
    images: [
      'https://images.unsplash.com/photo-1729645014815-b9dbc61809de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMGFlcmlhbHxlbnwxfHx8fDE3Njk0NTMzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1622816951464-df6fc7ab2ced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3Njk0NTMzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1722409195473-d322e99621e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDF8fHx8MTc2OTQ0MDUxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFsbXN8ZW58MXx8fHwxNzM3OTU3MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpc2xhbmQlMjB2aWxsYXxlbnwxfHx8fDE3Mzc5NTcwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBvY2VhbiUyMHZpZXd8ZW58MXx8fHwxNzM3OTU3MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ]
  },
  {
    title: 'On Court',
    subtitle: 'Where Legends Play',
    images: [
      'https://images.unsplash.com/photo-1767634854859-db8255389e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0ZW5uaXMlMjBjb3VydHxlbnwxfHx8fDE3Njk0NTMzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1761286753856-2f39b4413c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBwbGF5ZXJzJTIwYWN0aW9ufGVufDF8fHx8MTc2OTQ1MzM2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759819699495-d112601c0d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjByYWNrZXQlMjBjbG9zZXVwfGVufDF8fHx8MTc2OTQwMzAyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBuZXQlMjBjb3VydHxlbnwxfHx8fDE3Mzc5NTcxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBtYXRjaCUyMGFjdGlvbnxlbnwxfHx8fDE3Mzc5NTcxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ]
  },
  {
    title: 'Performances',
    subtitle: 'Music Under the Stars',
    images: [
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY29uY2VydCUyMGV2ZW5pbmd8ZW58MXx8fHwxNzM3OTU3MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3Mzc5NTcyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzM3OTU3MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY291c3RpYyUyMGd1aXRhciUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTczNzk1NzI2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    ]
  },
  {
    title: 'The Experience',
    subtitle: 'Moments to Remember',
    images: [
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaW5pbmclMjBvdXRkb29yfGVufDF8fHx8MTczNzk1NzI5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFtcGFnbmUlMjB0b2FzdCUyMHN1bnNldHxlbnwxfHx8fDE3Mzc5NTczMTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlbGF4YXRpb258ZW58MXx8fHwxNzM3OTU3MzMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMHNhaWxpbmd8ZW58MXx8fHwxNzM3OTU3MzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1578675437406-d5eb7726c6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBsdXh1cnklMjB3ZWxsbmVzc3xlbnwxfHx8fDE3Mzc5NTczNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
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

      {/* VIDEO BANNER - Nav is in Layout */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden pt-[72px]">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/4053080/4053080-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-teal-800/60 to-cyan-900/70" />
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
