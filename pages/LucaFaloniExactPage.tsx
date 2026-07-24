import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import deckHtml from '../src/app/content/luca-faloni-deck.html?raw';

const ACCESS_KEY = 'luca-faloni-proposal-access';
const PASSCODE = '2026';

export function LucaFaloniExactPage() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState('100vh');
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [hasAccess, setHasAccess] = useState(
    () => window.sessionStorage.getItem(ACCESS_KEY) === 'granted',
  );

  const syncHeight = useCallback(() => {
    const document = frameRef.current?.contentDocument;
    if (!document) return;

    const nextHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    );

    setHeight(`${nextHeight}px`);
  }, []);

  useEffect(() => {
    document.title = 'Luca Faloni x Necker Cup | Partnership Deck';
    window.addEventListener('resize', syncHeight);

    return () => {
      window.removeEventListener('resize', syncHeight);
      document.title = 'Necker Cup';
    };
  }, [syncHeight]);

  const handleUnlock = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (passcode !== PASSCODE) {
      setError('That passcode is not correct. Please try again.');
      setPasscode('');
      return;
    }

    window.sessionStorage.setItem(ACCESS_KEY, 'granted');
    setError('');
    setHasAccess(true);
  };

  if (!hasAccess) {
    return (
      <main
        style={{
          minHeight: '100svh',
          display: 'grid',
          placeItems: 'center',
          padding: '24px',
          background: '#efebe4',
          color: '#1e1c18',
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <section
          aria-labelledby="proposal-access-title"
          style={{
            width: 'min(100%, 440px)',
            padding: 'clamp(32px, 7vw, 52px)',
            background: '#fbfaf6',
            border: '1px solid rgba(30, 28, 24, 0.14)',
            boxShadow: '0 18px 55px rgba(52, 48, 41, 0.12)',
          }}
        >
          <p
            style={{
              margin: '0 0 24px',
              color: '#9a2e2b',
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '20px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textAlign: 'center',
            }}
          >
            LUCA FALONI
          </p>
          <p
            style={{
              margin: 0,
              color: '#9a7d54',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            Private partnership proposal
          </p>
          <h1
            id="proposal-access-title"
            style={{
              margin: '14px 0 12px',
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(38px, 10vw, 52px)',
              fontWeight: 600,
              lineHeight: 0.98,
              textAlign: 'center',
            }}
          >
            Luca Faloni × Necker Cup
          </h1>
          <p
            style={{
              margin: '0 auto 28px',
              color: '#777168',
              fontSize: '14px',
              lineHeight: 1.55,
              textAlign: 'center',
            }}
          >
            Enter the proposal passcode to continue.
          </p>
          <form onSubmit={handleUnlock}>
            <label
              htmlFor="proposal-passcode"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Passcode
            </label>
            <input
              id="proposal-passcode"
              type="password"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={4}
              value={passcode}
              onChange={(event) => {
                setPasscode(event.target.value.replace(/\D/g, ''));
                setError('');
              }}
              aria-describedby={error ? 'proposal-passcode-error' : undefined}
              aria-invalid={Boolean(error)}
              autoFocus
              style={{
                width: '100%',
                height: '52px',
                padding: '0 16px',
                border: `1px solid ${error ? '#9a2e2b' : 'rgba(30, 28, 24, 0.24)'}`,
                borderRadius: 0,
                background: '#fffefa',
                color: '#1e1c18',
                font: '600 22px/1 "Inter", sans-serif',
                letterSpacing: '0.32em',
                outlineColor: '#9a7d54',
                textAlign: 'center',
              }}
            />
            {error && (
              <p
                id="proposal-passcode-error"
                role="alert"
                style={{
                  margin: '9px 0 0',
                  color: '#9a2e2b',
                  fontSize: '12px',
                }}
              >
                {error}
              </p>
            )}
            <button
              type="submit"
              style={{
                width: '100%',
                minHeight: '52px',
                marginTop: '14px',
                border: 0,
                background: '#1e1c18',
                color: '#fffefa',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              View proposal
            </button>
          </form>
          <p
            style={{
              margin: '24px 0 0',
              color: '#918a80',
              fontSize: '10px',
              letterSpacing: '0.08em',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            Confidential · Necker Cup 2026
          </p>
        </section>
      </main>
    );
  }

  return (
    <iframe
      ref={frameRef}
      srcDoc={deckHtml}
      title="Luca Faloni x Necker Cup partnership deck"
      onLoad={syncHeight}
      style={{
        display: 'block',
        width: '100%',
        height,
        border: 0,
        background: '#efebe4',
      }}
    />
  );
}
