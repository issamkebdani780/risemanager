import { Routes, Route } from 'react-router-dom';
import Accueil from './app/marketing/Accueil';
import Tarifs from './app/marketing/Tarifs';
import FAQPage from './app/marketing/FAQPage';
import Contact from './app/marketing/Contact';
import ScrollToTop from './components/ui/ScrollToTop';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App