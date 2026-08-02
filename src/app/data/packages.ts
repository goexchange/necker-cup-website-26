/**
 * Single source of truth for package cards + reservation form.
 * Flip `ctaMode` / `showPricing` / `showAvailability` to change site-wide display.
 * Update per-package `price`, `spotsRemaining`, and `expectedSelloutDate` as inventory changes.
 */

export type PackageCtaMode = 'inquire' | 'reserve';

export type EventPackage = {
  id: string;
  name: string;
  nights: string;
  desc: string;
  includes: string[];
  /** Price per couple (USD) */
  price: number;
  spotsRemaining: number;
  /** ISO date (YYYY-MM-DD) used for “expected sellout” display */
  expectedSelloutDate: string;
  /** When sold out, keep a CTA for the following year (e.g. “Reserve for 2027”) */
  nextYearCta?: string;
};

/** Site-wide package display toggles */
export const packageDisplaySettings = {
  /** 'reserve' → “Reserve”; 'inquire' → “Inquire for Pricing” */
  ctaMode: 'reserve' as PackageCtaMode,
  showPricing: true,
  showAvailability: true,
};

const sharedIncludes = [
  'Stay on Necker Island or Branson Beach Estate on Moskito Island (5 nights, Nov 29 – Dec 4, 2026)',
  'Enjoy meals, events and parties, including the End of the World party, on Necker Island',
];

export const packages: EventPackage[] = [
  {
    id: 'player_necker',
    name: 'Pro-Am: Player — Necker Island',
    nights: '5 Nights / couple',
    desc: 'Stay on Necker Island for 5 nights (November 29 - December 4, 2026). Enjoy meals, events and parties, including the End of the World party, on Necker Island. One 2-person playing team spot to play in the Necker Cup.',
    includes: [...sharedIncludes, 'One 2-person playing team spot to play in the Necker Cup'],
    price: 109750,
    spotsRemaining: 0,
    expectedSelloutDate: '2026-09-15',
    nextYearCta: 'Reserve for 2027',
  },
  {
    id: 'player_moskito',
    name: 'Pro-Am: Player — Branson Estate, Moskito',
    nights: '5 Nights / couple',
    desc: 'Stay at the Branson Estate on Moskito Island for 5 nights (November 29 - December 4, 2026). Enjoy meals, events and parties, including the End of the World party, on Necker Island. One 2-person playing team spot to play in the Necker Cup.',
    includes: [...sharedIncludes, 'One 2-person playing team spot to play in the Necker Cup'],
    price: 99250,
    spotsRemaining: 0,
    expectedSelloutDate: '2026-09-30',
    nextYearCta: 'Reserve for 2027',
  },
  {
    id: 'spectator_necker',
    name: 'Pro-Am: Spectator — Necker Island',
    nights: '5 Nights / couple',
    desc: 'Stay on Necker Island for 5 nights (November 29 - December 4, 2026). Enjoy meals, events and parties, including the End of the World party, on Necker Island. Watch all the fun of the Necker Cup while mixing and mingling with pros, legends and celebrities.',
    includes: [...sharedIncludes, 'Watch all the fun of the Necker Cup and mix with pros, legends and celebrities'],
    price: 78750,
    spotsRemaining: 10,
    expectedSelloutDate: '2026-10-15',
  },
  {
    id: 'spectator_moskito',
    name: 'Pro-Am: Spectator — Branson Estate, Moskito',
    nights: '5 Nights / couple',
    desc: 'Stay at the Branson Estate on Moskito Island for 5 nights (November 29 - December 4, 2026). Enjoy meals, events and parties, including the End of the World party, on Necker Island. Watch all the fun of the Necker Cup while mixing and mingling with pros, legends and celebrities.',
    includes: [...sharedIncludes, 'Watch all the fun of the Necker Cup and mix with pros, legends and celebrities'],
    price: 67250,
    spotsRemaining: 8,
    expectedSelloutDate: '2026-10-31',
  },
];

export function formatPackagePrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatSelloutDate(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00`);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export function getPackageCtaLabel(): string {
  return packageDisplaySettings.ctaMode === 'reserve' ? 'Reserve' : 'Inquire for Pricing';
}

export function getPackageById(id: string | null | undefined): EventPackage | undefined {
  if (!id) return undefined;
  return packages.find((pkg) => pkg.id === id);
}

export function isPackageSoldOut(pkg: EventPackage): boolean {
  return pkg.spotsRemaining <= 0;
}
