import type { EventPackage } from '@/app/data/packages';
import {
  formatPackagePrice,
  formatSelloutDate,
  getPackageCtaLabel,
  packageDisplaySettings,
} from '@/app/data/packages';

type PackageCardFooterProps = {
  pkg: EventPackage;
  onReserve: (packageId: string) => void;
};

export function PackageCardFooter({ pkg, onReserve }: PackageCardFooterProps) {
  const { showPricing, showAvailability } = packageDisplaySettings;
  const soldOut = pkg.spotsRemaining <= 0;

  return (
    <div className="pt-6 border-t border-stone-100 space-y-4">
      {showPricing && (
        <div>
          <p className="font-display text-2xl text-emerald-800">{formatPackagePrice(pkg.price)}</p>
          <p className="font-body text-stone-400 text-xs tracking-wide uppercase mt-1">Per couple</p>
        </div>
      )}

      {showAvailability && (
        <div className="space-y-1">
          <p className={`font-body text-sm font-medium ${soldOut ? 'text-rose-700' : 'text-stone-700'}`}>
            {soldOut ? 'Sold out' : `${pkg.spotsRemaining} spot${pkg.spotsRemaining === 1 ? '' : 's'} remaining`}
          </p>
          {!soldOut && (
            <p className="font-body text-stone-500 text-xs">
              Expected sellout {formatSelloutDate(pkg.expectedSelloutDate)}
            </p>
          )}
        </div>
      )}

      <button
        type="button"
        disabled={soldOut}
        onClick={(e) => {
          e.stopPropagation();
          if (!soldOut) onReserve(pkg.id);
        }}
        className="font-body w-full bg-emerald-800 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-800 disabled:hover:shadow-none"
      >
        {soldOut ? 'Sold Out' : getPackageCtaLabel()}
      </button>
    </div>
  );
}
