import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, Menu, X } from 'lucide-react';
import '../src/styles/luca-faloni-proposal.css';

const image = (name: string) => `/images/${name}`;

const fitCards = [
  ['Founder story', 'Luca personally loves tennis. The strongest version puts him on court in the pro-am, not simply on a logo wall.'],
  ['Category white space', 'A protected lifestyle-apparel lane: refined menswear, no technical-sportswear conflict and no loud branding.'],
  ['US growth', 'Necker content can support Miami, New York, California and Austin with a premium story that feels lived—not bought.'],
];

const activationCards = [
  ['Retail pop-up', 'A refined island boutique for linen shirts, resort tailoring, knitwear and the limited Necker collection.'],
  ['Founder pro-am slot', 'Give Luca the story he cannot buy elsewhere: playing tennis on Necker with pros and Richard’s circle.'],
  ['Pro masterclass', 'An intimate tennis or style session with attending pros: useful, social and distinctly Luca Faloni.'],
  ['Court wardrobe', 'Dress officials and the ball crew in tasteful Luca looks where practical, keeping the tournament relaxed and premium.'],
  ['Dinner + coin toss', 'Anchor the partnership with a hosted dinner, ceremonial coin toss, sailing race or End of the World party moment.'],
  ['Guest room drop', 'Place a Luca item or private fitting invitation in the celebrated Necker Cup gift and room-drop program.'],
];

const packages = [
  {
    name: 'Supporting apparel partner',
    price: '$100K',
    items: ['Apparel category exclusivity', 'VIP attendance for two guests', 'Charity gala auction donation', 'Event-material presence', 'Content photography access'],
  },
  {
    name: 'Official apparel partner',
    price: '$200K',
    featured: true,
    items: ['Official partner designation', 'Retail pop-up across the week', 'Custom Necker Cup jacket activation', 'CEO pro-am participation', 'Ceremonial coin toss', '12-month content license', 'Guest communications + recap'],
  },
  {
    name: 'Presenting partner',
    price: '$300K–$500K',
    items: ['Presenting partner designation', 'Premium pop-up placement', 'Intimate hosted dinner', 'Founder pro-am + VIP hospitality', 'Winner / gala auction jacket', 'Dedicated highlight reel + PR package'],
  },
];

function Eyebrow({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="lfp-eyebrow">
      <span>{index}</span>
      <span>{children}</span>
    </div>
  );
}

export function LucaFaloniProposalPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Luca Faloni × Necker Cup 2026';
    return () => {
      document.title = 'Necker Cup';
    };
  }, []);

  return (
    <main className="lfp">
      <header className="lfp-header">
        <nav className="lfp-nav" aria-label="Proposal navigation">
          <button className="lfp-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <div className={`lfp-nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#fit" onClick={() => setMenuOpen(false)}>The fit</a>
            <a href="#wardrobe" onClick={() => setMenuOpen(false)}>Wardrobe</a>
            <a href="#investment" onClick={() => setMenuOpen(false)}>Investment</a>
          </div>
          <a className="lfp-wordmark" href="#top">LUCA FALONI</a>
          <div className="lfp-nav-meta"><span>Necker Cup</span><span>2026</span></div>
        </nav>
        <div className="lfp-confidential">
          <strong>LUCA FALONI × NECKER CUP</strong>
          <span>Confidential partnership concept</span>
        </div>
      </header>

      <section className="lfp-lookbook" id="top" aria-label="Necker Cup lookbook">
        <figure className="lfp-tile lfp-tile-main">
          <img src={image('necker.jpg')} alt="Aerial view of Necker Island" />
          <figcaption><span>Necker Island</span><ArrowUpRight size={17} /></figcaption>
        </figure>
        {[
          ['rafa.jpg', 'Rafa'],
          ['novak.jpg', 'Novak'],
          ['andreabocelli.jpg', 'Bocelli'],
          ['golf-swing-ocean.jpg', 'Island golf'],
        ].map(([src, label]) => (
          <figure className="lfp-tile" key={label}>
            <img src={image(src)} alt={`${label} at Necker Cup`} />
            <figcaption><span>{label}</span><span className="lfp-plus">+</span></figcaption>
          </figure>
        ))}
      </section>

      <section className="lfp-hero">
        <div className="lfp-pill">Official apparel partner · 2026</div>
        <h1>Private-island tennis,<br /><em>dressed with Italian restraint.</em></h1>
        <div className="lfp-hero-copy">
          <p>A partnership platform built around six days of pro-am tennis, island golf, sailing, live music, founder access and considered guest gifting.</p>
          <p>A lifestyle-apparel partnership—distinct from technical sportswear—made for the island moments where Luca Faloni naturally belongs.</p>
        </div>
        <div className="lfp-facts">
          <div><strong>NOV 29</strong><span>Opening day</span></div>
          <div><strong>DEC 4</strong><span>Final gala</span></div>
          <div><strong>$40K–$140K</strong><span>Guest couple buy-in</span></div>
          <div><strong>$12M+</strong><span>Raised for charity</span></div>
        </div>
        <div className="lfp-credit"><span>Prepared for James Turner and Luca Faloni</span><span>Rem Reynolds · GoExchange</span></div>
      </section>

      <section className="lfp-section lfp-fit" id="fit">
        <Eyebrow index="01">The fit</Eyebrow>
        <div className="lfp-intro-grid">
          <p className="lfp-kicker">Strategic alignment</p>
          <div>
            <h2>Tennis is already your language.<br /><em>Necker is the sentence.</em></h2>
            <p className="lfp-lede">Luca Faloni has been leaning into tennis through Mallorca, Gstaad, Munich and country-club storytelling. Necker Cup concentrates that world into a private-island environment.</p>
          </div>
        </div>
        <div className="lfp-three-grid">
          {fitCards.map(([title, body], index) => (
            <article className="lfp-note-card" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lfp-property">
        <div className="lfp-property-photo">
          <img src={image('group-photo-court.jpg')} alt="Necker Cup group on the island tennis court" />
          <span>Necker Island · BVI</span>
        </div>
        <div className="lfp-property-copy">
          <Eyebrow index="02">The property</Eyebrow>
          <p className="lfp-kicker">The Necker Cup</p>
          <h2>The world’s most exclusive<br />six days in tennis.</h2>
          <p>An invitation-only pro-am on Sir Richard Branson’s private Necker Island. Guests compete and socialize with tennis legends, founders, cultural figures and philanthropists in a closed island environment.</p>
          <div className="lfp-property-points">
            <div><h3>Private access</h3><p>Intimate guest count, high-trust introductions and full-week brand immersion.</p></div>
            <div><h3>Charity engine</h3><p>Supporting Virgin Unite and the National Tennis Foundation, with over $12 million raised since inception.</p></div>
          </div>
          <p className="lfp-sponsors">Past partners include Rolls-Royce · Dom Pérignon · Hublot · Bentley · SeaDream</p>
        </div>
      </section>

      <section className="lfp-section lfp-audience">
        <Eyebrow index="03">The audience</Eyebrow>
        <div className="lfp-intro-grid">
          <p className="lfp-kicker">The room Luca wants</p>
          <h2>High-net-worth buyers with six days to <em>live inside the brand.</em></h2>
        </div>
        <div className="lfp-metric-grid">
          <div><strong>$40K–$140K</strong><span>Per couple to attend</span></div>
          <div><strong>2026</strong><span>Bocelli · Thiem · Rucker · Kyrgios</span></div>
          <div><strong>6</strong><span>Days captive</span></div>
          <div><strong>1</strong><span>Apparel category</span></div>
        </div>
        <div className="lfp-portrait-grid">
          {[
            ['nickkyrgios.jpg', 'The court', 'Recognizable tennis names make the invitation feel real.'],
            ['dariusrucker.jpg', 'The stage', 'Music and gala moments carry the luxury story.'],
            ['jewel.jpg', 'The culture', 'A guest list built for connection, not crowd size.'],
          ].map(([src, title, text]) => (
            <figure key={title}><img src={image(src)} alt={title} /><figcaption><b>{title}</b><span>{text}</span></figcaption></figure>
          ))}
        </div>
      </section>

      <section className="lfp-section lfp-wardrobe" id="wardrobe">
        <Eyebrow index="04">The Necker wardrobe</Eyebrow>
        <div className="lfp-intro-grid">
          <p className="lfp-kicker">Limited-edition concept</p>
          <div><h2>Sporty outside.<br /><em>Necker refinement inside.</em></h2><p className="lfp-lede">The hero jacket feels Luca Faloni first: adult, tailored and understated. Weathered crimson outside; blue water, palms, tennis and island details revealed in the lining.</p></div>
        </div>
        <div className="lfp-product-stage">
          <div className="lfp-product-wide"><img src={image('necker-cup-limited-edition-jackets.png')} alt="Luca Faloni limited-edition Necker Cup jacket concept" /><span>Limited edition concept</span></div>
          <div className="lfp-product-single"><img src={image('necker-jacket-product.png')} alt="Luca Faloni hero jacket product concept" /><span>Winner / auction</span></div>
        </div>
        <div className="lfp-three-grid">
          {[
            ['Limited Necker collection', 'A tightly edited capsule in sea blue, sand, palm and weathered crimson, with discreet Necker Cup detailing.'],
            ['Winner / auction', 'A numbered hero jacket for the champion, charity dinner auction or both. Scarcity makes it editorial.'],
            ['Content moment', 'The lining reveal becomes the social hook: a group portrait, short reel and post-event recap.'],
          ].map(([title, body], index) => <article className="lfp-note-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="lfp-section lfp-activation">
        <Eyebrow index="05">Activation platform</Eyebrow>
        <div className="lfp-intro-grid">
          <p className="lfp-kicker">On-island execution</p>
          <h2>Make the partnership visible<br /><em>without making it loud.</em></h2>
        </div>
        <div className="lfp-activation-grid">
          {activationCards.map(([title, body], index) => (
            <article key={title}><span>0{index + 1}</span><ArrowDownRight size={20} /><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="lfp-section lfp-numbers">
        <Eyebrow index="06">The numbers</Eyebrow>
        <div className="lfp-intro-grid">
          <p className="lfp-kicker">Measurement plan</p>
          <div><h2>Give the COO a<br /><em>measurable business case.</em></h2><p className="lfp-lede">The case is direct: who is in the room, what the brand receives, where the content travels and how the week is reported.</p></div>
        </div>
        <div className="lfp-number-band">
          <div><strong>$40K–$140K</strong><span>Guest couple buy-in</span></div>
          <div><strong>6</strong><span>Days on island</span></div>
          <div><strong>12+</strong><span>Official sponsor rights</span></div>
          <div><strong>$12M+</strong><span>Raised since inception</span></div>
        </div>
        <div className="lfp-proof-grid">
          <article><span>Audience proof</span><h3>High-trust access</h3><p>Direct guest, celebrity and pro interaction—an explicit activation opportunity, not passive logo placement.</p></article>
          <article><span>Content + visibility</span><h3>12-month runway</h3><p>Approved event photography, court action, sponsor announcements, tailored social storytelling and post-event reporting.</p></article>
        </div>
      </section>

      <section className="lfp-section lfp-investment" id="investment">
        <Eyebrow index="07">Investment</Eyebrow>
        <div className="lfp-intro-grid">
          <p className="lfp-kicker">Three ways in</p>
          <div><h2>From official apparel presence<br />to <em>title-level integration.</em></h2><p className="lfp-lede">Each route keeps Luca Faloni in the lifestyle lane: considered retail, private hospitality, court credibility and content that feels earned.</p></div>
        </div>
        <div className="lfp-package-grid">
          {packages.map((item) => (
            <article className={item.featured ? 'is-featured' : ''} key={item.name}>
              {item.featured && <div className="lfp-recommended">Recommended</div>}
              <span className="lfp-package-label">Target investment</span>
              <h3>{item.name}</h3><strong>{item.price}</strong>
              <ul>{item.items.map((line) => <li key={line}><Check size={15} />{line}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="lfp-closing">
        <Eyebrow index="08">Path forward</Eyebrow>
        <div className="lfp-closing-head">
          <p className="lfp-kicker">Keep momentum</p>
          <h2>Fast path to a confirmed<br /><em>Luca Faloni partnership.</em></h2>
        </div>
        <div className="lfp-steps">
          {[
            ['01', 'Select lane', 'Choose official apparel, presenting partner or title-level structure.'],
            ['02', 'Shape activation', 'Finalize pop-up, masterclass, hosted dinner, coin toss and content rights.'],
            ['03', 'Confirm presence', 'Lock guest slots, founder participation, gifting, wardrobe and hospitality.'],
            ['04', 'Move to agreement', 'Convert the selected package into an agreement and production timeline.'],
          ].map(([num, title, body]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
        <div className="lfp-closing-gallery">
          <figure><img src={image('island-golf-course.jpg')} alt="Island golf beside the water" /><figcaption>The lifestyle: golf, ocean and private-island access.</figcaption></figure>
          <figure><img src={image('tennis-action-backhand.jpg')} alt="Tennis backhand action at Necker Cup" /><figcaption>The proof: real court action, not a static logo buy.</figcaption></figure>
        </div>
        <footer><span>Luca Faloni × Necker Cup 2026</span><span>Prepared by Rem Reynolds · Tyler Navarro</span></footer>
      </section>
    </main>
  );
}
