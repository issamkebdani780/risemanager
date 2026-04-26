import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Accueil from './app/marketing/Accueil';
import Tarifs from './app/marketing/Tarifs';
import FAQPage from './app/marketing/FAQPage';
import Contact from './app/marketing/Contact';
import ScrollToTop from './components/ui/ScrollToTop';
import CGV from './components/policy/cgv';
import Legals from './components/policy/legals';
import Confidentialities from './components/policy/confidenialities';

// Dashboard Imports
import DashboardLayout from './app/dashboard/DashboardLayout';
import DashboardHome from './app/dashboard/DashboardHome';
import Commandes from './app/dashboard/Commandes';
import Produits from './app/dashboard/Produits';
import Statistiques from './app/dashboard/Statistiques';
import Finance from './app/dashboard/Finance';

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language && i18n.language.startsWith('ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language || 'fr';
  }, [i18n.language]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Marketing Routes */}
        <Route path="/" element={<Accueil />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/mentions-legales" element={<Legals />} />
        <Route path="/politique-de-confidentialite" element={<Confidentialities />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="commandes" element={<Commandes />} />
          <Route path="produits" element={<Produits />} />
          <Route path="statistiques" element={<Statistiques />} />
          <Route path="finance" element={<Finance />} />
        </Route>
      </Routes>
    </>
  );
};

export default App