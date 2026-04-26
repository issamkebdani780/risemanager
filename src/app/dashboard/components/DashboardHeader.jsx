import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Bell, 
  Search, 
  Moon, 
  Sun, 
  Globe, 
  ChevronDown,
  LogOut,
  User,
  Settings
} from 'lucide-react';

const DashboardHeader = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const currentLang = i18n.language || 'fr';

  return (
    <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 sticky top-0 z-40 px-8 flex items-center justify-between">
      {/* Search Bar */}
      <div className="hidden md:flex items-center flex-1 max-w-md">
        <div className="relative w-full group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder={t('Rechercher...')}
            className="block w-full pl-11 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary dark:text-white transition-all"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 sm:gap-4 ml-auto">
        
        {/* Language Selector */}
        <div className="relative">
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors flex items-center gap-2 text-slate-500 dark:text-slate-400 group"
          >
            <Globe size={20} className="group-hover:text-primary transition-colors" />
            <span className="text-xs font-bold uppercase">{currentLang.substring(0, 2)}</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isLangOpen && (
            <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl rounded-2xl py-2 animate-in fade-in slide-in-from-top-2">
              <button onClick={() => changeLanguage('fr')} className={`w-full px-4 py-2 text-sm text-left font-bold transition-colors flex items-center justify-between ${currentLang.startsWith('fr') ? 'text-primary bg-primary/5' : 'text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                Français {currentLang.startsWith('fr') && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
              </button>
              <button onClick={() => changeLanguage('en')} className={`w-full px-4 py-2 text-sm text-left font-bold transition-colors flex items-center justify-between ${currentLang.startsWith('en') ? 'text-primary bg-primary/5' : 'text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                English {currentLang.startsWith('en') && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
              </button>
              <button onClick={() => changeLanguage('ar')} className={`w-full px-4 py-2 text-sm text-right font-bold transition-colors flex items-center justify-between flex-row-reverse ${currentLang.startsWith('ar') ? 'text-primary bg-primary/5' : 'text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                العربية {currentLang.startsWith('ar') && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
              </button>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors text-slate-500 dark:text-slate-400 group"
        >
          {theme === 'dark' ? (
            <Sun size={20} className="text-amber-500 animate-spin-slow" />
          ) : (
            <Moon size={20} className="text-primary group-hover:rotate-12 transition-transform" />
          )}
        </button>

        {/* Notifications */}
        <div className="relative group">
          <button className="p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors text-slate-500 dark:text-slate-400 relative">
            <Bell size={20} className="group-hover:animate-shake" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-slate-100 dark:border-slate-800 mx-1" />

        {/* User Profile */}
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 p-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
              IK
            </div>
            <div className="hidden sm:block text-left mr-2 rtl:mr-0 rtl:ml-2">
              <p className="text-xs font-black text-heading dark:text-white leading-tight">Issam Kebdani</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Admin</p>
            </div>
            <ChevronDown size={16} className={`text-slate-400 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {isProfileOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl rounded-[24px] py-3 animate-in fade-in zoom-in-95">
              <div className="px-4 py-3 border-b border-slate-50 dark:border-slate-800 mb-2">
                <p className="text-sm font-black text-heading dark:text-white">Issam Kebdani</p>
                <p className="text-xs text-slate-500 font-medium truncate">issam@risemanager.com</p>
              </div>
              <button className="w-full px-4 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-3">
                <User size={18} /> Profile
              </button>
              <button className="w-full px-4 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-3">
                <Settings size={18} /> Settings
              </button>
              <div className="h-px bg-slate-50 dark:bg-slate-800 my-2 mx-4" />
              <button className="w-full px-4 py-2.5 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-3">
                <LogOut size={18} /> {t('Se déconnecter')}
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default DashboardHeader;
