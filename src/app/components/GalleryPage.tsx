import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface GalleryPageProps {
  onNavigateHome: () => void;
  onNavigate: (page: 'home' | 'agenda' | 'sponsorship' | 'gallery' | 'charity') => void;
}

export function GalleryPage({ onNavigateHome, onNavigate }: GalleryPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryCategories = [
    {
      title: 'The Island',
      subtitle: 'Paradise Found',
      images: [
        '/images/group-photo-moskito.jpg',
        '/images/necker.jpg',
        '/images/island-golf-course.jpg',
        '/images/golf-swing-ocean.jpg',
        '/images/beach-dock-group.jpg',
        '/images/beach-jump-fun.jpg',
        '/images/island-dog.jpg',
        '/images/island-dining-guest.jpg',
      ]
    },
    {
      title: 'On Court',
      subtitle: 'Where Legends Play',
      images: [
        '/images/branson-borg-celebrate.jpg',
        '/images/tennis-action-blue.jpg',
        '/images/trophy-ceremony-court.jpg',
        '/images/necker-open-champion.jpg',
        '/images/crowd-pavilion-court.jpg',
        '/images/branson-courtside-mic.jpg',
        '/images/tennis-court-player.jpg',
        '/images/group-photo-court.jpg',
      ]
    },
    {
      title: 'Performances',
      subtitle: 'Music Under the Stars',
      images: [
        '/images/singer-guitar-stage.jpg',
        '/images/legends-music-band.jpg',
        '/images/guitar-performance.jpg',
        '/images/branson-piano-group.jpg',
        '/images/dj-legends-music.jpg',
        '/images/event-live-music.jpg',
      ]
    },
    {
      title: 'The Experience',
      subtitle: 'Moments to Remember',
      images: [
        '/images/dinner-table-guests.jpg',
        '/images/dinner-beach-evening.jpg',
        '/images/dinner-wide-palms.jpg',
        '/images/island-dining-guest.jpg',
        '/images/beach-dock-group.jpg',
        '/images/island-dog.jpg',
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <style>{`
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
      `}</style>

      {/* VIDEO BANNER HEADER */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/4053080/4053080-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-teal-800/60 to-cyan-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
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
                scrolled ? 'text-emerald-800 font-medium' : 'text-white font-medium'
              }`}>Gallery</button>
              <button onClick={() => onNavigate('sponsorship')} className={`font-body text-sm tracking-wide transition-colors ${
                scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
              }`}>Sponsorship</button>
              <button onClick={() => onNavigate('charity')} className={`font-body text-sm tracking-wide transition-colors ${
                scrolled ? 'text-stone-600 hover:text-emerald-800' : 'text-white/90 hover:text-white'
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
            {/* Category Header */}
            <div className="mb-12">
              <p className="font-body text-emerald-800 text-sm tracking-[0.2em] uppercase mb-2">
                {category.subtitle}
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-900">
                {category.title}
              </h2>
            </div>

            {/* Images Grid */}
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
              ['148', 'Elite Guests'],
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
          <button className="font-body bg-emerald-800 text-white px-10 py-4 rounded-full font-medium hover:bg-emerald-900 transition-all duration-300 hover:shadow-xl hover:scale-105">
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
