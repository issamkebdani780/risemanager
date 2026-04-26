import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import DropDown from '../ui/DropDown';
import Logo from '../ui/Logo';

const Header = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Apply Theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const featuresItems = [
    { title: t("feat_orders"), description: t("feat_orders_desc"), icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>, to: "/#fonctionnalites" },
    { title: t("feat_stock"), description: t("feat_stock_desc"), icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>, to: "/#fonctionnalites" },
    { title: t("feat_logistics"), description: t("feat_logistics_desc"), icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>, to: "/#fonctionnalites" },
    { title: t("feat_confirm"), description: t("feat_confirm_desc"), icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, to: "/#fonctionnalites" },
    { title: t("feat_teams"), description: t("feat_teams_desc"), icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, to: "/#fonctionnalites" },
    { title: t("feat_finance"), description: t("feat_finance_desc"), icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, to: "/#fonctionnalites" },
    { title: t("feat_analytics"), description: t("feat_analytics_desc"), icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, to: "/#fonctionnalites" },
    { title: t("feat_blacklist"), description: t("feat_blacklist_desc"), icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>, to: "/#fonctionnalites" },
  ];

  const ecoItems = [
    { title: "RiseCart", description: t("eco_risecart"), icon: <img src="/ecosystem/risecart.jpg" className="w-10 h-10 object-cover rounded-xl" alt="RiseCart" />, to: "/#ecosysteme" },
    { title: "RiseConfirm", description: t("eco_riseconfirm"), icon: <img src="/ecosystem/RiseConfirm.jpg" className="w-10 h-10 object-cover rounded-xl" alt="RiseConfirm" />, to: "/#whatsapp" },
    { title: "FBR", description: t("eco_fbr"), icon: <img src="/ecosystem/fbr.jpg" className="w-10 h-10 object-cover rounded-xl" alt="FBR" />, to: "/#ecosysteme" },
    { title: "RiseAcademy", description: t("eco_riseacademy"), icon: <img src="/ecosystem/riseacademy.png" className="w-10 h-10 object-cover rounded-xl" alt="RiseAcademy" />, to: "/#demo" },
    { title: "RisePay", description: t("eco_risepay"), icon: <img src="/ecosystem/risepay.jpg" className="w-10 h-10 object-cover rounded-xl" alt="RisePay" />, to: "/#ecosysteme" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6">
        <div
          className={`container mx-auto px-4 lg:px-6 py-3 bg-white dark:bg-slate-900 rounded-[24px] border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 flex items-center justify-between ${isScrolled ? 'shadow-md' : ''
            }`}
        >
          {/* Logo */}
          <Link to="/">
            <Logo
              className="flex items-center gap-2 shrink-0 cursor-pointer"
              iconClassName="w-8 h-8 lg:w-9 lg:h-9"
              textClassName="text-xl lg:text-2xl font-black text-heading dark:text-white tracking-tight"
            />
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavLink to="/" active={location.pathname === "/"}>{t('Accueil')}</NavLink>
            <DropDown title={t('Fonctionnalités')} items={featuresItems} columns={2} />
            <DropDown title={t('Écosystème')} items={ecoItems} columns={1} />
            <NavLink to="/tarifs" active={location.pathname === "/tarifs"}>{t('Tarifs')}</NavLink>
            <NavLink to="/faq" active={location.pathname === "/faq"}>{t('FAQ')}</NavLink>
            <NavLink to="/contact" active={location.pathname === "/contact"}>{t('Contact')}</NavLink>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Toggle Button */}
            <div className="relative">
              <button
                onClick={toggleTheme}
                className="p-2 sm:p-2.5 border border-slate-50 dark:border-slate-800 rounded-full bg-slate-50/50 dark:bg-slate-800/50 shadow-inner hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95 group"
                aria-label="Toggle Dark Mode"
              >
                {/* Sun icon for dark mode target */}
                <svg className="w-4 h-4 text-amber-500 hidden dark:block animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
                {/* Moon icon for light mode target */}
                <svg className="w-4 h-4 text-primary block dark:hidden group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </button>
            </div>

            {/* Lang Switcher Dropdown - Desktop Only */}
            <div className="hidden md:block relative group">
              <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-50 dark:border-slate-800 rounded-full bg-slate-50/50 dark:bg-slate-800/50 shadow-inner hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <span className="text-[10px] font-black text-primary">{(i18n.language || 'fr').toUpperCase().substring(0, 2)}</span>
                <svg className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none rounded-2xl py-2 flex flex-col min-w-[120px]">
                  <button onClick={() => i18n.changeLanguage('fr')} className={`px-4 py-2.5 text-xs font-bold text-left rtl:text-right w-full transition-colors flex items-center justify-between ${i18n.language?.startsWith('fr') ? 'text-primary bg-blue-50/50 dark:bg-blue-900/20' : 'text-slate-500 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                    Français
                    {i18n.language?.startsWith('fr') && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </button>
                  <button onClick={() => i18n.changeLanguage('en')} className={`px-4 py-2.5 text-xs font-bold text-left rtl:text-right w-full transition-colors flex items-center justify-between ${i18n.language?.startsWith('en') ? 'text-primary bg-blue-50/50 dark:bg-blue-900/20' : 'text-slate-500 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                    English
                    {i18n.language?.startsWith('en') && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </button>
                  <button onClick={() => i18n.changeLanguage('ar')} className={`px-4 py-2.5 text-xs font-bold text-left rtl:text-right w-full transition-colors flex items-center justify-between ${i18n.language?.startsWith('ar') ? 'text-primary bg-blue-50/50 dark:bg-blue-900/20' : 'text-slate-500 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                    العربية
                    {i18n.language?.startsWith('ar') && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </button>
                </div>
              </div>
            </div>

            <a
              href="https://admin.risemanager.com/"
              className="hidden lg:block text-sm font-bold text-heading dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors border border-slate-100 dark:border-slate-800 px-5 py-2.5 rounded-full"
            >
              {t('Se connecter')}
            </a>

            {/* Action Button - Size adapted to terminal */}
            <a
              href="https://admin.risemanager.com/register"
              className="hidden sm:flex px-5 py-2.5 lg:px-6 lg:py-3 bg-primary hover:bg-primary-hover text-white text-xs lg:text-sm font-extrabold rounded-full transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-primary/20 items-center justify-center"
            >
              <span className="lg:hidden">{t('Démarrer')}</span>
              <span className="hidden lg:block">{t('Démarrer gratuitement')}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-heading dark:text-white transition-transform active:scale-90"
              onClick={() => setIsMenuOpen(true)}
            >
              <div className="flex flex-col gap-1.5 border-l rtl:border-l-0 rtl:border-r pl-3 rtl:pl-0 rtl:pr-3 border-slate-100 dark:border-slate-800">
                <div className="w-6 h-0.5 bg-heading dark:bg-white rounded-full" />
                <div className="w-4 h-0.5 bg-heading dark:bg-white rounded-full self-end" />
                <div className="w-5 h-0.5 bg-heading dark:bg-white rounded-full self-end" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Modal (Tassyir style) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-heading/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Card */}
          <div className="relative w-full max-w-sm bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-2xl border border-slate-50 dark:border-slate-800 animate-fade-in text-center">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 text-slate-400 hover:text-heading bg-slate-50 rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo in Menu */}
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex flex-col items-center gap-3 mb-10">
              <Logo
                showText={false}
                iconClassName="w-12 h-12"
              />
              <span className="text-xl font-black text-heading dark:text-white">RiseManager</span>
            </Link>

            {/* Links */}
            <nav className="flex flex-col gap-6 mb-10">
              <MobileNavLink to="/" active={location.pathname === "/"} onClick={() => setIsMenuOpen(false)}>{t('Accueil')}</MobileNavLink>
              <MobileNavLink to="/#fonctionnalites" onClick={() => setIsMenuOpen(false)}>{t('Fonctionnalités')}</MobileNavLink>
              <MobileNavLink to="/tarifs" active={location.pathname === "/tarifs"} onClick={() => setIsMenuOpen(false)}>{t('Tarifs')}</MobileNavLink>
              <MobileNavLink to="/faq" active={location.pathname === "/faq"} onClick={() => setIsMenuOpen(false)}>{t('FAQ')}</MobileNavLink>
              <MobileNavLink to="/contact" active={location.pathname === "/contact"} onClick={() => setIsMenuOpen(false)}>{t('Contact')}</MobileNavLink>
            </nav>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2 mb-4 bg-slate-50/50 dark:bg-slate-800/50 p-2 rounded-2xl border border-slate-100 dark:border-slate-800">
                <button onClick={() => i18n.changeLanguage('fr')} className={`w-full py-2.5 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors ${i18n.language?.startsWith('fr') ? 'text-primary bg-white shadow-sm' : 'text-slate-500 hover:text-primary'}`}>
                  Français
                  {i18n.language?.startsWith('fr') && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </button>
                <button onClick={() => i18n.changeLanguage('en')} className={`w-full py-2.5 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors ${i18n.language?.startsWith('en') ? 'text-primary bg-white shadow-sm' : 'text-slate-500 hover:text-primary'}`}>
                  English
                  {i18n.language?.startsWith('en') && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </button>
                <button onClick={() => i18n.changeLanguage('ar')} className={`w-full py-2.5 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors ${i18n.language?.startsWith('ar') ? 'text-primary bg-white shadow-sm' : 'text-slate-500 hover:text-primary'}`}>
                  العربية
                  {i18n.language?.startsWith('ar') && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </button>
              </div>
              <a
                href="https://admin.risemanager.com/"
                className="w-full py-4 text-sm font-bold text-heading dark:text-white border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center"
              >
                {t('Se connecter')}
              </a>
              <a
                href="https://admin.risemanager.com/register"
                className="w-full py-4 bg-primary text-white text-sm font-bold rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center"
              >
                {t('Démarrer gratuitement')}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NavLink = ({ to, children, active = false }) => (
  <Link
    to={to}
    className={`text-[13px] font-bold transition-colors hover:text-primary ${active ? 'text-primary' : 'text-slate-400 dark:text-slate-500'
      }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, active = false, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`text-sm font-bold transition-colors ${active ? 'text-primary' : 'text-slate-500 hover:text-primary'
      }`}
  >
    {children}
  </Link>
);


export default Header;