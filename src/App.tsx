import './App.css';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJob from './pages/FindJob/FindJobPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CursorFollower from './Animition/CursorAnimition/CursorFollower';
import FindTalent from './pages/FindTalent/FindTalentPage';
import HomePage from './pages/HomePage/HomePage';
import TalentProfilePage from './pages/TalentProfile/TalentProfilePage';
import UploadJobsPage from './pages/UploadJobs/UploadJobsPage';
import JobProfilePage from './pages/JobProfile/JobProfilePage';
import ApplyJobsPage from './pages/ApplyJobs/ApplyJobsPage';
import { useEffect } from 'react';

const theme: MantineThemeOverride = {
  colors: {
    "mineShaft": [
      "#f6f6f6", "#e7e7e7", "#d1d1d1", "#b0b0b0", "#888888",
      "#6d6d6d", "#5d5d5d", "#4f4f4f", "#454545", "#3d3d3d"
    ],
    "brightSun": [
      "#fffbeb", "#fff3c6", "#ffe588", "#ffd149", "#ffbd20",
      "#f99b07", "#dd7302", "#b75006", "#943c0c", "#7a330d"
    ]
  },
  primaryColor: "brightSun",
  primaryShade: 4,
  colorScheme: 'dark',
  fontFamily: "poppins,sans-serif",
  focusRing: 'never'
};
function App() {
  useEffect(() => {
    window.scroll(0, 0);
  })
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <CursorFollower />
        <Header />
        <Routes>
          <Route path='/find-jobs' element={<FindJob />} />
          <Route path='/find-talent' element={<FindTalent />} />
          <Route path='/talent-profile' element={<TalentProfilePage />} />
          <Route path='/post-job' element={<UploadJobsPage />} />
          <Route path='/job-profile' element={<JobProfilePage />} />
          <Route path='/apply-job' element={<ApplyJobsPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider >
  );
}

export default App;
