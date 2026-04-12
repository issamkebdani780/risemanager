import React, { useState, useEffect } from 'react';

import DropDown from '../ui/DropDown';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuresItems = [
    { title: "Gestion des commandes", description: "Suis et gère ton flux de commandes", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> },
    { title: "Gestion de stock", description: "Maîtrise ton inventaire et variantes", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg> },
    { title: "Logistique", description: "Optimise tes expéditions", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg> },
    { title: "Confirmation", description: "Gère ton centre d'appels", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
    { title: "Suivi des équipes", description: "Mesure la performance", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { title: "Finances", description: "Calcule ta rentabilité", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { title: "Analytics", description: "Décisions basées sur la donnée", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
    { title: "Blacklist", description: "Protège ton business", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg> },
  ];

  const ecoItems = [
    { title: "RiseCart", description: "Ta boutique optimisée", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { title: "RiseConfirm", description: "Confirmation automatisée", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { title: "FBR", description: "Fulfillment By Rise", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg> },
    { title: "RiseAcademy", description: "Apprends à scaler", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
    { title: "RisePay", description: "Paiements simplifiés", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6">
        <div 
          className={`container mx-auto px-4 lg:px-6 py-3 bg-white rounded-[24px] border border-slate-100 shadow-sm transition-all duration-300 flex items-center justify-between ${
            isScrolled ? 'shadow-md' : ''
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-heading tracking-tight hidden xs:block">RiseManager</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavLink href="#" active>Accueil</NavLink>
            <DropDown title="Fonctionnalités" items={featuresItems} columns={2} />
            <NavLink href="#">Tarifs</NavLink>
            <DropDown title="Écosystème" items={ecoItems} columns={1} />
            <NavLink href="#">FAQ</NavLink>
            <NavLink href="#">Contact</NavLink>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Lang Switcher - Desktop Only */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-slate-50 rounded-full bg-slate-50/50 shadow-inner">
              <button className="text-[10px] font-black text-primary">FR</button>
              <div className="w-[1px] h-2 bg-slate-200" />
              <button className="text-[10px] font-black text-slate-400 hover:text-primary transition-colors">AR</button>
            </div>

            <button className="hidden lg:block text-sm font-bold text-heading hover:text-primary transition-colors border border-slate-100 px-5 py-2.5 rounded-full">
              Se connecter
            </button>
            
            {/* Action Button - Size adapted to terminal */}
            <button className="hidden sm:flex px-5 py-2.5 lg:px-6 lg:py-3 bg-primary hover:bg-primary-hover text-white text-xs lg:text-sm font-extrabold rounded-full transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-primary/20 items-center justify-center">
              <span className="lg:hidden">Démarrer</span>
              <span className="hidden lg:block">Démarrer gratuitement</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-heading transition-transform active:scale-90"
              onClick={() => setIsMenuOpen(true)}
            >
              <div className="flex flex-col gap-1.5 border-l pl-3 border-slate-100">
                <div className="w-6 h-0.5 bg-heading rounded-full" />
                <div className="w-4 h-0.5 bg-heading rounded-full self-end" />
                <div className="w-5 h-0.5 bg-heading rounded-full self-end" />
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
          <div className="relative w-full max-w-sm bg-white rounded-[32px] p-8 shadow-2xl border border-slate-50 animate-fade-in text-center">
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-heading bg-slate-50 rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo in Menu */}
            <div className="flex flex-col items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-heading">RiseManager</span>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6 mb-10">
              <MobileNavLink href="#" active onClick={() => setIsMenuOpen(false)}>Accueil</MobileNavLink>
              <MobileNavLink href="#" onClick={() => setIsMenuOpen(false)}>Fonctionnalités</MobileNavLink>
              <MobileNavLink href="#" onClick={() => setIsMenuOpen(false)}>Tarifs</MobileNavLink>
              <MobileNavLink href="#" onClick={() => setIsMenuOpen(false)}>FAQ</MobileNavLink>
              <MobileNavLink href="#" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            </nav>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-center gap-4 mb-2">
                <button className="text-xs font-extrabold text-primary">FR</button>
                <div className="w-[1px] h-3 bg-slate-100" />
                <button className="text-xs font-extrabold text-slate-400">AR</button>
              </div>
              <button className="w-full py-4 text-sm font-bold text-heading border border-slate-100 rounded-2xl">
                Se connecter
              </button>
              <button className="w-full py-4 bg-primary text-white text-sm font-bold rounded-2xl shadow-lg shadow-primary/20">
                Démarrer gratuitement
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NavLink = ({ href, children, active = false }) => (
  <a 
    href={href} 
    className={`text-[13px] font-bold transition-colors hover:text-primary ${
      active ? 'text-primary' : 'text-slate-400'
    }`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, active = false, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className={`text-sm font-bold transition-colors ${
      active ? 'text-primary' : 'text-slate-500 hover:text-primary'
    }`}
  >
    {children}
  </a>
);


export default Header;