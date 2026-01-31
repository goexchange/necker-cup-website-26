import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReservationFormProvider } from '@/app/context/ReservationFormContext';
import { Layout } from '@/app/components/Layout';
import { HomePage } from '@/app/pages/HomePage';
import { AgendaPage } from '@/app/pages/AgendaPage';
import { CharityPage } from '@/app/pages/CharityPage';
import { ExperiencePage } from '@/app/pages/ExperiencePage';
import { GalleryPage } from '@/app/pages/GalleryPage';
import { PackagesPage } from '@/app/pages/PackagesPage';
import { SponsorshipPage } from '@/app/pages/SponsorshipPage';
import { TalentPage } from '@/app/pages/TalentPage';

export default function App() {
  return (
    <BrowserRouter>
      <ReservationFormProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="packages" element={<PackagesPage />} />
            <Route path="talent" element={<TalentPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="sponsorship" element={<SponsorshipPage />} />
            <Route path="charity" element={<CharityPage />} />
            <Route path="agenda" element={<AgendaPage />} />
          </Route>
        </Routes>
      </ReservationFormProvider>
    </BrowserRouter>
  );
}
