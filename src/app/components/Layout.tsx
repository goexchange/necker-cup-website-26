import { Outlet } from 'react-router-dom';
import { useReservationForm } from '@/app/context/ReservationFormContext';
import { Nav } from '@/app/components/Nav';
import { Footer } from '@/app/components/Footer';
import { ReservationForm } from '@/app/components/ReservationForm';

export function Layout() {
  const { isOpen, closeForm } = useReservationForm();
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <ReservationForm isOpen={isOpen} onClose={closeForm} />
    </>
  );
}
