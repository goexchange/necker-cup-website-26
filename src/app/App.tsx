import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
import { SponsorEmailPage } from '@pages/SponsorEmailPage';
import { ArtistInvitePage } from '@pages/ArtistInvitePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          <Route path="sponsor-email" element={<SponsorEmailPage />} />
          <Route path="artist-invite-2026" element={<ArtistInvitePage />} />
        </Routes>
      </ReservationFormProvider>
    </BrowserRouter>
  );
}
