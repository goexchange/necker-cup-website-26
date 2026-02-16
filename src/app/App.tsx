import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReservationFormProvider } from '@/app/context/ReservationFormContext';
import { Layout } from '@/app/components/Layout';
import { HomePage } from '@pages/HomePage';
import { TennisPage } from '@pages/TennisPage';
import { CharityPage } from '@pages/CharityPage';
import { ExperiencePage } from '@pages/ExperiencePage';
import { GalleryPage } from '@pages/GalleryPage';
import { PackagesPage } from '@pages/PackagesPage';
import { SponsorshipPage } from '@pages/SponsorshipPage';
import { TalentPage } from '@pages/TalentPage';

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
            <Route path="tennis" element={<TennisPage />} />
          </Route>
        </Routes>
      </ReservationFormProvider>
    </BrowserRouter>
  );
}
