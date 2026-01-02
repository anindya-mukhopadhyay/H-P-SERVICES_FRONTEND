
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import AwardsPage from "./pages/AwardsPage";
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './pages/contact';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        
      </Routes>
    </>
  );
}

export default App;
