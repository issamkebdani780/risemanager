import { Routes, Route } from 'react-router-dom';
import Accueil from './app/marketing/Accueil';
import Tarifs from './app/marketing/Tarifs';
import FAQPage from './app/marketing/FAQPage';
import Contact from './app/marketing/Contact';
import ScrollToTop from './components/ui/ScrollToTop';
import CGV from './components/policy/cgv';
import Legals from './components/policy/legals';
import Confidentialities from './components/policy/confidenialities';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/mentions-legales" element={<Legals />} />
        <Route path="/politique-de-confidentialite" element={<Confidentialities />} />
      </Routes>
    </>
  );
};

export default App