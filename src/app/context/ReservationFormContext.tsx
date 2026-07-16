import { createContext, useContext, useState, useLayoutEffect, useCallback, ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

type ReservationFormContextType = {
  isOpen: boolean;
  selectedPackageId: string | null;
  openForm: (packageId?: string) => void;
  closeForm: () => void;
};

const ReservationFormContext = createContext<ReservationFormContextType | null>(null);

function reserveQueryOpensModal(value: string | null): boolean {
  if (!value) return false;
  const v = value.toLowerCase();
  return v === '1' || v === 'true' || v === 'yes';
}

export function ReservationFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // Open from ?reserve=1 using the real URL string. Do not strip the param here:
  // React 18 StrictMode mounts twice; stripping in an effect removes reserve before the
  // second mount, so the modal never opens in dev and can fail in production builds.
  useLayoutEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const reserve = params.get('reserve');
    if (reserveQueryOpensModal(reserve)) {
      setIsOpen(true);
      setSelectedPackageId(params.get('package'));
    }
  }, []);

  const openForm = useCallback((packageId?: string) => {
    setSelectedPackageId(packageId ?? null);
    setIsOpen(true);
  }, []);

  const closeForm = useCallback(() => {
    setIsOpen(false);
    setSelectedPackageId(null);
    const next = new URLSearchParams(searchParams);
    let changed = false;
    if (next.has('reserve')) {
      next.delete('reserve');
      changed = true;
    }
    if (next.has('package')) {
      next.delete('package');
      changed = true;
    }
    if (changed) {
      setSearchParams(next, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  return (
    <ReservationFormContext.Provider
      value={{
        isOpen,
        selectedPackageId,
        openForm,
        closeForm,
      }}
    >
      {children}
    </ReservationFormContext.Provider>
  );
}

export function useReservationForm() {
  const ctx = useContext(ReservationFormContext);
  if (!ctx) throw new Error('useReservationForm must be used within ReservationFormProvider');
  return ctx;
}
