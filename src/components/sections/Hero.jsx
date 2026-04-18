import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showVideo]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      className="relative pt-32 pb-20 lg:pt-32 lg:pb-40 overflow-x-clip dark:bg-slate-950 transition-colors duration-500"
      onMouseMove={handleMouseMove}
    >
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

      {/* Background Blobs for that premium feel */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-reveal-container">
            {/* Badge & Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-full text-primary dark:text-primary-light font-medium text-sm transition-colors">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-100 dark:bg-blue-800 text-[10px]">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                </span>
                {t('Conçu pour le marché africain')}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-full text-emerald-600 dark:text-emerald-400 font-medium text-sm shadow-sm backdrop-blur-sm transition-colors">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span>
                  <span className="font-extrabold text-emerald-700 dark:text-emerald-400">+12 000</span> {t('commandes traitées chaque jour')}
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight lg:leading-[1.1] text-heading dark:text-white animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {t('Pilote ton')} <br /> {t('E-commerce')} <br />
                <span className="text-primary tracking-tight">{t('avec un vrai système.')}</span>
              </h1>
              <p className="text-lg lg:text-xl text-body dark:text-slate-400 max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
                {t('La plateforme tout-en-un pour gérer, confirmer et livrer vos commandes COD.')}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a 
                href="https://admin.risemanager.com/register"
                className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-2xl font-semibold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 text-center"
              >
                {t("Démarrer l'essai gratuit")}
              </a>
              <button 
                onClick={() => setShowVideo(true)}
                className="px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-primary border border-slate-100 dark:border-slate-800 rounded-2xl font-semibold transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                {t('Voir une démo')} &rarr;
              </button>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              {[
                "Sans carte bancaire",
                "Mise en route rapide",
                "Support basé en Afrique"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                  <div className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-100 dark:border-blue-800">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {t(point)}
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Dashboard Mockup */}
          <div
            className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0 transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
            }}
          >

            {/* Dashboard Container */}
            <div
              className="relative w-full max-w-[500px] lg:max-w-[550px] aspect-[4/3] bg-gradient-to-br from-blue-50/50 to-white dark:from-slate-900 dark:to-slate-950 rounded-[32px] lg:rounded-[40px] border border-blue-100/50 dark:border-slate-800 shadow-2xl p-6 lg:p-10 animate-float mx-auto lg:mx-0"
              style={{ transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)` }}
            >

              {/* Internal Mockup Content */}
              <div className="space-y-6 lg:space-y-8">
                <div className="flex justify-between items-center">
                  <div className="text-[9px] lg:text-[10px] font-bold text-slate-400 tracking-wider uppercase">{t("Vue d'ensemble - Direct")}</div>
                </div>

                {/* Sub Cards */}
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  <div className="space-y-1">
                    <div className="text-[10px] lg:text-[11px] text-slate-500 dark:text-slate-400 font-medium">{t("Ventes Aujourd'hui")}</div>
                    <div className="text-xl lg:text-2xl font-bold text-primary">42,500 DA</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] lg:text-[11px] text-slate-500 dark:text-slate-400 font-medium">{t("Retours")}</div>
                    <div className="text-xl lg:text-2xl font-bold text-red-500">12%</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="flex items-end gap-2 lg:gap-3 h-32 lg:h-40 pt-4 text-reveal-container">
                  {[40, 65, 55, 95, 80, 70].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t-lg transition-all duration-1000 ${i === 3 ? 'bg-primary' : 'bg-blue-100 dark:bg-slate-800'}`}
                      style={{ height: `${h}%`, transitionDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Cards */}

              {/* Orders Card */}
              <div
                className="absolute -top-6 -left-4 lg:-top-10 lg:-left-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-3 lg:p-6 rounded-2xl lg:rounded-3xl shadow-premium border border-white/50 dark:border-slate-800 animate-float-delayed flex items-center gap-3 lg:gap-4 min-w-[140px] lg:min-w-[180px] z-20"
                style={{ transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)` }}
              >
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl lg:rounded-2xl flex items-center justify-center">
                  <svg className="w-4 h-4 lg:w-6 lg:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[8px] lg:text-[10px] font-bold text-slate-400 uppercase">{t("Commandes")}</div>
                  <div className="text-sm lg:text-xl font-bold text-heading dark:text-white">1,247</div>
                </div>
              </div>

              {/* Stock Card */}
              <div
                className="absolute top-1/2 -right-4 lg:-right-16 -translate-y-1/2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-3 lg:p-4 rounded-2xl lg:rounded-3xl shadow-premium border border-white/50 dark:border-slate-800 animate-float-slow flex items-center gap-3 lg:gap-4 min-w-[120px] lg:min-w-[160px] z-20"
                style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-50 dark:bg-purple-900/20 rounded-lg lg:rounded-xl flex items-center justify-center">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <div className="text-[8px] lg:text-[10px] font-bold text-slate-400 uppercase">{t("Stock")}</div>
                  <div className="text-sm lg:text-lg font-bold text-heading dark:text-white">98%</div>
                </div>
              </div>

              {/* Profit Card */}
              <div
                className="absolute -bottom-6 right-2 lg:-bottom-10 lg:-right-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-3 lg:p-5 rounded-2xl lg:rounded-3xl shadow-premium border border-white/50 dark:border-slate-800 animate-float flex items-center gap-3 lg:gap-5 min-w-[160px] lg:min-w-[220px] z-20"
                style={{ transform: `translate(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px)` }}
              >
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-teal-50 dark:bg-teal-900/20 rounded-xl lg:rounded-2xl flex items-center justify-center">
                  <svg className="w-4 h-4 lg:w-6 lg:h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[8px] lg:text-[10px] font-bold text-slate-400 uppercase">{t("Profit")}</div>
                  <div className="text-sm lg:text-xl font-bold text-heading dark:text-white">284,500 DA</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite 1s; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite 0.5s; }
        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
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

export default Hero;
