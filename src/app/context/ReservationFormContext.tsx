import { createContext, useContext, useState, ReactNode } from 'react';

type ReservationFormContextType = {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
};

const ReservationFormContext = createContext<ReservationFormContextType | null>(null);

export function ReservationFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ReservationFormContext.Provider
      value={{
        isOpen,
        openForm: () => setIsOpen(true),
        closeForm: () => setIsOpen(false),
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
