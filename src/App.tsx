import './App.css';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJob from './pages/FindJob/FindJob';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CursorFollower from './Animition/CursorAnimition/CursorFollower';
import FindTalent from './pages/FindTalent/FindTalent';

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
  colorScheme: 'dark',
  fontFamily: "poppins,sans-serif"
};
function App() {

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <CursorFollower />
        <Header />
        <Routes>
          <Route path='/find-jobs' element={<FindJob />} />
          <Route path='/find-talent' element={<FindTalent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider >
  );
}

export default App;
