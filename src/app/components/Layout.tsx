import { Outlet } from 'react-router-dom';
import { useReservationForm } from '@/app/context/ReservationFormContext';
import { Nav } from '@/app/components/Nav';
import { ReservationForm } from '@/app/components/ReservationForm';

export function Layout() {
  const { isOpen, closeForm } = useReservationForm();
  return (
    <>
      <Nav />
      <Outlet />
      <ReservationForm isOpen={isOpen} onClose={closeForm} />
    </>
  );
}
