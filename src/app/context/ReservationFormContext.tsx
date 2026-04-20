import { createContext, useContext, useState, useLayoutEffect, useCallback, ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

type ReservationFormContextType = {
  isOpen: boolean;
  openForm: () => void;
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
  const [searchParams, setSearchParams] = useSearchParams();

  // Open from ?reserve=1 using the real URL string. Do not strip the param here:
  // React 18 StrictMode mounts twice; stripping in an effect removes reserve before the
  // second mount, so the modal never opens in dev and can fail in production builds.
  useLayoutEffect(() => {
    const reserve = new URLSearchParams(window.location.search).get('reserve');
    if (reserveQueryOpensModal(reserve)) {
      setIsOpen(true);
    }
  }, []);

  const openForm = useCallback(() => setIsOpen(true), []);

  const closeForm = useCallback(() => {
    setIsOpen(false);
    const next = new URLSearchParams(searchParams);
    if (next.has('reserve')) {
      next.delete('reserve');
      setSearchParams(next, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  return (
    <ReservationFormContext.Provider
      value={{
        isOpen,
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
