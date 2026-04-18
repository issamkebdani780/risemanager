import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {prefix}{count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}{suffix}
    </span>
  );
};

const Preuve = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 lg:py-32 bg-[#f8fbff] dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight animate-slide-up">
            {t('Des résultats concrets')}
          </h2>
          <p className="text-lg text-body dark:text-slate-400 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('Chaque chiffre')}
          </p>
        </div>

        {/* Logos Clients / Partenaires */}
        <div className="max-w-5xl mx-auto mb-20 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <p className="text-center text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-8">{t('Plus de 200 marques')}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-14 opacity-60 dark:opacity-40 transition-all duration-500 grayscale dark:invert">
            <img src="/confiance/conf1.webp" alt="Client Logo" className="h-7 lg:h-10 w-auto object-contain brightness-75 dark:brightness-100 hover:brightness-100 transition-all cursor-default" />
            <img src="/confiance/conf2.webp" alt="Client Logo" className="h-7 lg:h-10 w-auto object-contain brightness-75 dark:brightness-100 hover:brightness-100 transition-all cursor-default" />
            <img src="/confiance/conf3.webp" alt="Client Logo" className="h-8 lg:h-11 w-auto object-contain brightness-75 dark:brightness-100 hover:brightness-100 transition-all cursor-default" />
            <img src="/confiance/conf4.webp" alt="Client Logo" className="h-7 lg:h-10 w-auto object-contain brightness-75 dark:brightness-100 hover:brightness-100 transition-all cursor-default" />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto items-stretch">

          {/* Card 1: Commandes suivies */}
          <div className="lg:col-span-8 group relative bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-900 rounded-[40px] p-8 lg:p-12 border border-blue-50/50 dark:border-slate-700 shadow-sm overflow-hidden animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10 space-y-4 max-w-md">
              <div className="text-5xl lg:text-7xl font-extrabold text-primary dark:text-primary-light tracking-tighter">
                <AnimatedCounter end={1.2} decimals={1} prefix="+" suffix="M" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-heading dark:text-white">{t('Commandes suivies')}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm lg:text-base">
                {t('desc_cmdsuivies')}
              </p>
            </div>

            <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center animate-float">
              <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-2xl shadow-xl border border-blue-50 dark:border-slate-600 flex items-center justify-center rotate-12">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 002-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: Variantes produit gérées */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-800 rounded-[40px] p-8 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 dark:border-blue-800">
              <svg className="w-6 h-6 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2 2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <div className="text-4xl lg:text-5xl font-extrabold text-heading dark:text-white mb-2">
              <AnimatedCounter end={540} suffix="k" />
            </div>
            <div className="text-[10px] font-extrabold text-primary dark:text-primary-light tracking-[0.2em] uppercase mb-4">{t('Variantes gérées')}</div>
            <p className="text-xs text-slate-400 dark:text-slate-500 italic leading-relaxed">
              "{t('desc_variantes')}"
            </p>
          </div>

          {/* Card 3: Rentabilité calculée */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-800 rounded-[40px] p-8 lg:p-10 border border-slate-100 dark:border-slate-700 shadow-sm animate-slide-up group overflow-hidden" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-full text-[10px] font-extrabold text-green-600 dark:text-green-400 mb-6 uppercase tracking-wider">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              {t('Rentabilité en temps réel')}
            </div>
            <div className="text-6xl font-extrabold text-[#0f172a] dark:text-white mb-2 leading-none">
              <AnimatedCounter end={28} suffix="%" />
            </div>
            <h3 className="text-xl font-bold text-heading dark:text-white mb-3">{t('Hausse du profit net')}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              {t('desc_hausse')}
            </p>
          </div>

          {/* Card 4: Agents suivis */}
          <div className="lg:col-span-3 bg-white dark:bg-slate-800 rounded-[40px] p-8 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col justify-between animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="space-y-1">
              <div className="text-4xl font-extrabold text-heading dark:text-white">
                <AnimatedCounter end={4200} />
              </div>
              <div className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 tracking-wider uppercase">{t('Agents suivis')}</div>
            </div>
            <div className="my-8">
              <div className="flex justify-between text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-2">
                <span>{t('Productivité')}</span>
                <span className="text-blue-600 dark:text-blue-400">85% {t('Optimisé')}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 dark:bg-blue-400 rounded-full w-[85%] transition-all duration-1000" />
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {t('desc_agents')}
            </p>
          </div>

          {/* Small Cards Column */}
          <div className="lg:col-span-3 flex flex-col gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            {/* Card 5: Temps gagné */}
            <div className="bg-white dark:bg-slate-800 rounded-[32px] p-6 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col justify-center h-full">
              <div className="text-3xl font-extrabold text-heading dark:text-white">
                <AnimatedCounter end={12} suffix="h" />
              </div>
              <div className="text-[9px] font-extrabold text-primary dark:text-primary-light tracking-wider uppercase mb-2">{t('Temps gagné / semaine')}</div>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-relaxed">
                {t('desc_temps')}
              </p>
            </div>
            {/* Card 6: Retours tracés */}
            <div className="bg-white dark:bg-slate-800 rounded-[32px] p-6 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-4 h-full group hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors">
              <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 group-hover:bg-white dark:group-hover:bg-slate-700 rounded-xl flex items-center justify-center text-primary dark:text-primary-light transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-heading dark:text-white leading-tight">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-[9px] text-slate-400 dark:text-slate-500 uppercase font-extrabold">{t('Retours tracés')}</div>
              </div>
            </div>
          </div>
        </div>



        {/* Cas Client Détaillé */}
        <div className="max-w-6xl mx-auto mt-20 animate-slide-up relative z-10" style={{ animationDelay: '0.7s' }}>
          <div className="bg-white dark:bg-slate-800 rounded-[40px] p-8 lg:p-14 border border-slate-100 dark:border-slate-700 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden relative cursor-default group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-110" />

            <div className="flex items-center gap-3 mb-10 relative z-10">
              <div className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/40 rounded-full border border-blue-100 dark:border-blue-800 text-[10px] font-extrabold text-primary dark:text-primary-light uppercase tracking-widest">{t('Étude de Cas')}</div>
              <div className="text-sm font-bold text-slate-400 dark:text-slate-500">{t('Grosse Marque Mode')}</div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
              <div>
                <h3 className="text-2xl lg:text-4xl font-extrabold text-heading dark:text-white mb-6 leading-tight">{t("preuve_case_title")}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-10 font-medium">
                  {t("preuve_case_desc")}
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4 p-4 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group/avant transition-colors hover:bg-slate-100/50 dark:hover:bg-slate-850">
                    <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center shrink-0 border border-red-100 dark:border-red-900/40 text-red-500 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">{t('Avant RiseManager')}</div>
                      <p className="text-[13px] font-semibold text-slate-600 dark:text-slate-400 leading-snug">{t("preuve_before_desc")}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-3xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 shadow-sm relative overflow-hidden group/apres">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 blur-2xl rounded-full" />
                    <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-green-200 dark:border-green-700 text-green-600 mt-0.5 shadow-sm relative z-10">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div className="relative z-10">
                      <div className="text-[10px] font-extrabold text-green-600 uppercase tracking-widest mb-1.5">{t('Avec RiseManager')}</div>
                      <p className="text-[13px] font-bold text-slate-800 dark:text-slate-100 leading-snug">{t("preuve_after_desc")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-850 transition-colors duration-500 rounded-[32px] p-8 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-200/20 flex flex-col justify-center">
                  <div className="text-4xl lg:text-5xl font-extrabold text-[#0f172a] dark:text-white mb-2 tracking-tighter">
                    +28<span className="text-2xl text-slate-400">%</span>
                  </div>
                  <div className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">{t('Taux Livraison')}</div>
                  <div className="w-10 h-1 bg-green-500 rounded-full" />
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-850 transition-colors duration-500 rounded-[32px] p-8 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-200/20 flex flex-col justify-center relative overflow-hidden">
                  <div className="text-4xl lg:text-5xl font-extrabold text-[#0f172a] dark:text-white mb-2 tracking-tighter relative z-10">
                    -40<span className="text-2xl text-slate-400">%</span>
                  </div>
                  <div className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5 relative z-10">{t('D\'Erreurs Colis')}</div>
                  <div className="text-[9px] text-slate-400 italic relative z-10">{t('À la préparation')}</div>
                </div>

                <a href="#demo" className="col-span-2 block bg-primary text-white rounded-[32px] p-8 lg:p-10 shadow-xl shadow-primary/30 flex items-center justify-between overflow-hidden relative group/action transition-transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 translate-x-[-100%] group-hover/action:translate-x-[100%] transition-transform duration-1000" />
                  <div className="relative z-10">
                    <div className="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-2">{t('Passez au niveau supérieur')}</div>
                    <div className="text-2xl lg:text-3xl font-extrabold">{t('Exigez vous aussi ces résultats.')}</div>
                  </div>
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm relative z-10 group-hover/action:scale-110 transition-transform">
                    <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="w-1 h-32 bg-gradient-to-b from-slate-200 dark:from-slate-800 to-transparent rounded-full" />
        </div>

      </div>
    </section>
  );
};

export default Preuve;
