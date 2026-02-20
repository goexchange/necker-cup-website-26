import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="py-16 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <img src="/images/nclogo.png" alt="Necker Cup 2026" className="h-16 w-auto" />
            </div>
            <p className="font-body text-stone-400 text-sm leading-relaxed">
              Tennis Pro-Am &middot; November 29 – December 4, 2026 &middot; Necker Island, BVI. Benefits National Tennis Foundation &amp; Virgin Unite.
            </p>
          </div>
          <div>
            <h3 className="font-body text-sm tracking-wider uppercase mb-4 text-stone-500">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/experience" className="font-body text-stone-300 hover:text-white transition-colors block">Experience</Link>
              <Link to="/packages" className="font-body text-stone-300 hover:text-white transition-colors block">Packages</Link>
              <Link to="/talent" className="font-body text-stone-300 hover:text-white transition-colors block">Talent</Link>
              <Link to="/gallery" className="font-body text-stone-300 hover:text-white transition-colors block">Gallery</Link>
              <Link to="/charity" className="font-body text-stone-300 hover:text-white transition-colors block">Charity</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 pt-10 border-t border-stone-800 mb-10">
          <p className="font-body text-sm text-stone-400 tracking-wide uppercase">Owned &amp; Produced by</p>
          <a href="https://www.premierlive.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/premier-live-logo.png" alt="Premier Live - Be Your Passion" className="h-20 w-auto" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-stone-800">
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <a href="tel:+16784786649" className="font-body text-sm text-white hover:text-stone-300 transition-colors">CALL: 678.478.6649</a>
            {['Privacy Policy', 'Terms & Conditions', 'Contact'].map(link => (
              <a key={link} href="#" className="font-body text-sm text-white hover:text-stone-300 transition-colors">{link}</a>
            ))}
          </div>
          <p className="font-body text-sm text-white">
            © 2026{' '}
            <a href="https://www.premierlive.com" target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors underline">
              Premier Live
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
