/** Large diagonal SOLD OUT ribbon for sold-out package cards. */
export function PackageSoldOutBanner() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-3xl"
      aria-hidden
    >
      <div className="absolute inset-x-0 top-0 bottom-24 bg-stone-900/10" />
      <div className="absolute left-1/2 top-[42%] w-[170%] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-rose-700 py-3.5 text-center shadow-[0_8px_30px_rgba(136,19,55,0.4)]">
        <span className="font-display text-3xl sm:text-4xl font-semibold tracking-[0.22em] text-white uppercase">
          Sold Out
        </span>
      </div>
    </div>
  );
}
