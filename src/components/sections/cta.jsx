import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const FinalCTA = () => {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  // Prevent scrolling when the video modal is open
  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showVideo]);

  const reassurances = [
    { label: t("Mise en route rapide"), icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { label: t("Support local"), icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
    { label: t("Accompagnement"), icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
    { label: t("Essai sans engagement"), icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-7.618 3.04" }
  ];

  return (
    <section className="py-24 lg:py-40 overflow-hidden" id="cta">
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl animate-fade-in"
            onClick={() => setShowVideo(false)}
          />
          <div className="relative w-full max-w-lg aspect-[9/16] max-h-[90vh] bg-black rounded-[32px] overflow-hidden shadow-2xl border border-white/10 animate-scale-in">
            {/* Close Button */}
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/acrPDoF6i8E?autoplay=1"
              title="RiseManager Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative max-w-6xl mx-auto p-4 lg:p-6 rounded-[56px] shadow-2xl shadow-primary/20 dark:shadow-primary/5">
          <div className="relative w-full h-full bg-gradient-to-br from-blue-50/50 to-white dark:from-slate-900 dark:to-slate-950 rounded-[44px] p-10 lg:p-24 flex flex-col items-center text-center space-y-12 border border-slate-100 dark:border-slate-800 transition-colors duration-500">
            
            {/* Header Text */}
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                {t("Arrête de subir ton activité.")} <br />
                <span className="text-primary">{t("Reprends le contrôle.")}</span>
              </h2>
              <p className="text-sm lg:text-base text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto">
                {t("Rejoignez les centaines d'entreprises")}
              </p>
            </div>

            {/* Buttons & Friction Reduction */}
            <div className="flex flex-col items-center gap-5">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <a 
                  href="https://admin.risemanager.com/register"
                  className="px-10 py-5 bg-primary hover:bg-primary-hover text-white rounded-[24px] font-bold text-base shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 active:scale-95 relative overflow-hidden group text-center"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  {t("Essai gratuit de 7 jours")}
                </a>
                <button 
                  onClick={() => setShowVideo(true)}
                  className="px-10 py-5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-primary rounded-[24px] font-bold text-base shadow-lg shadow-slate-200 dark:shadow-none border border-slate-100 dark:border-slate-700 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                >
                  {t("Réserver une démo")}
                </button>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-xs lg:text-sm font-bold text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2.5 py-1 rounded-md">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  {t("Sans engagement")}
                </div>
                <span className="hidden sm:block text-slate-300 dark:text-slate-700">•</span>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  {t("Aucune carte bancaire requise")}
                </div>
              </div>
            </div>

            {/* Horizontal Reassurance Bar */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-4">
              {reassurances.map((item, i) => (
                <div key={i} className="flex items-center gap-2 group cursor-default">
                  <div className="text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-[10px] lg:text-[11px] font-bold text-primary/70 uppercase tracking-widest group-hover:text-primary transition-colors">{item.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-scale-in { animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default FinalCTA;