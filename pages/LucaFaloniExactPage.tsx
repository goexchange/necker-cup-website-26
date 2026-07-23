import { useCallback, useEffect, useRef, useState } from 'react';
import deckHtml from '../src/app/content/luca-faloni-deck.html?raw';

export function LucaFaloniExactPage() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState('100vh');

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
