import type { EventPackage } from '@/app/data/packages';
import {
  formatPackagePrice,
  getPackageCtaLabel,
  isPackageSoldOut,
  packageDisplaySettings,
} from '@/app/data/packages';

type PackageCardFooterProps = {
  pkg: EventPackage;
  onReserve: (packageId: string) => void;
};

export function PackageCardFooter({ pkg, onReserve }: PackageCardFooterProps) {
  const { showPricing, showAvailability } = packageDisplaySettings;
  const soldOut = isPackageSoldOut(pkg);
  const ctaLabel = soldOut
    ? pkg.nextYearCta ?? 'Sold Out'
    : getPackageCtaLabel();
  const canReserve = !soldOut || Boolean(pkg.nextYearCta);

  return (
    <div className="relative z-30 pt-6 border-t border-stone-100 space-y-4 bg-white">
      {showPricing && (
        <div>
          <p className="font-display text-2xl text-emerald-800">{formatPackagePrice(pkg.price)}</p>
          <p className="font-body text-stone-400 text-xs tracking-wide uppercase mt-1">Per couple</p>
        </div>
      )}

      {showAvailability && (
        <div className="space-y-1">
          <p className={`font-body text-sm font-medium ${soldOut ? 'text-rose-700' : 'text-stone-700'}`}>
            {soldOut
              ? 'Sold out for 2026'
              : 'Limited availability'}
          </p>
          {soldOut && (
            <p className="font-body text-stone-500 text-xs">
              We are sold out of this package — reserve interest for 2027.
            </p>
          )}
        </div>
      )}

      <button
        type="button"
        disabled={!canReserve}
        onClick={(e) => {
          e.stopPropagation();
          if (canReserve) onReserve(pkg.id);
        }}
        className="font-body w-full bg-emerald-800 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-800 disabled:hover:shadow-none"
      >
        {ctaLabel}
      </button>
    </div>
  );
}
