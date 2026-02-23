import { useSearchParams } from 'react-router-dom';

export function SponsorThankYouPage() {
  const [searchParams] = useSearchParams();
  const response = searchParams.get('response') || 'interested';
  const name = searchParams.get('name') || '';

  const isInterested = response === 'interested';

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        {/* Logo */}
        <img src="/images/nclogo.png" alt="Necker Cup" className="h-20 w-auto mx-auto mb-10" />

        {isInterested ? (
          <>
            <h1 className="font-heading text-3xl md:text-4xl text-stone-900 mb-4">
              Great to Hear{name ? `, ${name}` : ''}!
            </h1>
            <p className="font-body text-stone-600 text-lg leading-relaxed mb-8">
              Thank you for your interest in partnering with the Necker Cup. Rem will be in touch within 24 hours to schedule a quick call and explore what a partnership could look like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/rem-goexchange"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-emerald-900 text-white font-body font-medium rounded-full hover:bg-emerald-800 transition-colors"
              >
                Book a Call Now
              </a>
              <a
                href="https://www.neckercup.com"
                className="inline-block px-8 py-3 border-2 border-stone-300 text-stone-700 font-body font-medium rounded-full hover:border-stone-400 transition-colors"
              >
                Visit NeckerCup.com
              </a>
            </div>
          </>
        ) : (
          <>
            <h1 className="font-heading text-3xl md:text-4xl text-stone-900 mb-4">
              No Problem{name ? `, ${name}` : ''}
            </h1>
            <p className="font-body text-stone-600 text-lg leading-relaxed mb-8">
              We appreciate you letting us know. If anything changes or you'd like to learn more in the future, we're always here.
            </p>
            <a
              href="https://www.neckercup.com"
              className="inline-block px-8 py-3 border-2 border-stone-300 text-stone-700 font-body font-medium rounded-full hover:border-stone-400 transition-colors"
            >
              Visit NeckerCup.com
            </a>
          </>
        )}

        <p className="font-body text-stone-400 text-sm mt-12">
          Questions? Reach out to <a href="mailto:rem@goexchange.ai" className="text-emerald-800 underline">rem@goexchange.ai</a>
        </p>
      </div>
    </div>
  );
}
