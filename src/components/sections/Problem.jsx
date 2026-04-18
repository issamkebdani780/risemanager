import React from 'react';
import { useTranslation } from 'react-i18next';

const Problem = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 lg:py-32 bg-[#f8fbff] dark:bg-slate-950 overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6">

                {/* Header - Intro */}
                <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24 space-y-4">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight animate-slide-up">
                        {t('Des résultats concrets')}
                    </h2>
                    <p className="text-lg text-body dark:text-slate-400 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        {t('Chaque chiffre')}
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto">

                    {/* Card: Sans RiseManager */}
                    <div className="group relative bg-white dark:bg-slate-900/50 rounded-[40px] p-8 lg:p-14 border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center gap-3 mb-10 opacity-60">
                            <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-extrabold text-slate-500 dark:text-slate-400">{t('Sans RiseManager')}</h3>
                        </div>

                        <div className="space-y-6">
                             <ProblemItem icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                                title={t('Fichiers Excel encombrants')}
                                description={t('Données perdues')}
                                isNegative
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
                                title={t('Notes manuelles éparpillées')}
                                description={t('Post-its et carnets')}
                                isNegative
                            />
                            <ProblemItem icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                title={t('Commandes mal suivies')}
                                description={t('Statuts flous')}
                                isNegative
                            />
                            <ProblemItem icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                title={t('Incertitude sur la marge')}
                                description={t('Tu ne sais pas combien')}
                                isNegative
                            />
                            <ProblemItem icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" /></svg>}
                                title={t('Retours non maîtrisés')}
                                description={t('Perte de stock')}
                                isNegative
                            />
                            <ProblemItem icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
                                title={t('Équipe non mesurée')}
                                description={t('Productivité invisible')}
                                isNegative
                            />
                        </div>
                    </div>

                    {/* Card: Avec RiseManager */}
                    <div className="group relative bg-white dark:bg-slate-900 rounded-[40px] p-8 lg:p-14 border border-blue-50 dark:border-blue-900/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/30 dark:hover:shadow-blue-900/10 animate-slide-up shadow-premium" style={{ animationDelay: '0.3s' }}>
                        <div className="absolute top-8 right-8 rtl:right-auto rtl:left-8 hidden sm:block">
                            <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-[10px] font-extrabold uppercase tracking-widest rounded-full border border-blue-200 dark:border-blue-800 shadow-sm">
                                {t('Solution Optimale')}
                            </span>
                        </div>

                        <div className="flex items-center gap-3 mb-8 lg:mb-10">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-extrabold text-heading dark:text-white">{t('Avec RiseManager')}</h3>
                        </div>

                        <div className="mb-10 xl:mb-0 xl:absolute xl:top-[30%] xl:-right-16 rtl:xl:right-auto rtl:xl:-left-16 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 lg:p-5 rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-slate-700 xl:border-white/50 animate-float flex items-center gap-4 lg:gap-5 z-20 min-w-[200px] xl:w-[280px]">
                            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-green-50 dark:bg-green-900/20 shrink-0 rounded-2xl flex items-center justify-center border border-green-100 dark:border-green-800 shadow-sm">
                                <span className="text-xl lg:text-2xl font-extrabold text-green-600 dark:text-green-400">-40%</span>
                            </div>
                            <div>
                                <div className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{t('Moyenne Constatée')}</div>
                                <p className="text-[13px] lg:text-sm text-heading dark:text-white font-bold leading-snug">
                                    {t('De colis retournés')}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2 2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
                                title={t("prob_dashboard_title")}
                                description={t("prob_dashboard_desc")}
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                                title={t("prob_kpi_title")}
                                description={t("prob_kpi_desc")}
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 002-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l2 2 4-4" /></svg>}
                                title={t("prob_stock_title")}
                                description={t("prob_stock_desc")}
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                                title={t("prob_status_title")}
                                description={t("prob_status_desc")}
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                title={t("prob_profit_title")}
                                description={t("prob_profit_desc")}
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                                title={t("prob_team_title")}
                                description={t("prob_team_desc")}
                            />
                        </div>
                    </div>

                </div>

                {/* Transition / Call to action text */}
                {/* <div className="max-w-5xl mx-auto mt-20 animate-slide-up" style={{ animationDelay: '0.15s' }}>
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-14 opacity-60 dark:opacity-40 transition-all duration-500 grayscale dark:invert">
                        <img src="/confiance/conf1.webp" alt="Client Logo" className="h-7 lg:h-10 w-auto object-contain brightness-75 dark:brightness-125 hover:brightness-100 transition-all cursor-default" />
                        <img src="/confiance/conf2.webp" alt="Client Logo" className="h-7 lg:h-10 w-auto object-contain brightness-75 dark:brightness-125 hover:brightness-100 transition-all cursor-default" />
                        <img src="/confiance/conf3.webp" alt="Client Logo" className="h-8 lg:h-11 w-auto object-contain brightness-75 dark:brightness-125 hover:brightness-100 transition-all cursor-default" />
                        <img src="/confiance/conf4.webp" alt="Client Logo" className="h-7 lg:h-10 w-auto object-contain brightness-75 dark:brightness-125 hover:brightness-100 transition-all cursor-default" />
                    </div>
                </div> */}

            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(0.5deg); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

const ProblemItem = ({ icon, title, description, isNegative = false }) => (
    <div className="flex items-start gap-4 lg:gap-5 group/item transition-all">
        <div className="relative shrink-0">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${isNegative
                    ? 'bg-red-50 border-red-100 text-red-500 dark:bg-red-900/20 dark:border-red-900/40 dark:text-red-400 group-hover/item:bg-red-500 group-hover/item:text-white group-hover/item:shadow-lg group-hover/item:shadow-red-500/30'
                    : 'bg-green-50 border-green-100 text-green-600 dark:bg-green-900/20 dark:border-green-900/40 dark:text-green-400 group-hover/item:bg-green-500 group-hover/item:text-white group-hover/item:shadow-lg group-hover/item:shadow-green-500/30'
                }`}>
                {icon}
            </div>
            {/* Visual Indicator (Cross/Check) */}
            <div className={`absolute -top-1.5 -right-1.5 rtl:right-auto rtl:-left-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center shadow-sm z-10 transition-transform group-hover/item:scale-110 ${isNegative ? 'bg-red-500' : 'bg-green-500'}`}>
                {isNegative ? (
                    <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                )}
            </div>
        </div>
        <div className="space-y-1">
            <h4 className={`text-[15px] font-bold transition-all duration-300 ${isNegative ? 'text-slate-600 dark:text-slate-400 group-hover/item:text-red-600 dark:group-hover/item:text-red-400' : 'text-slate-800 dark:text-slate-200 group-hover/item:text-green-600 dark:group-hover/item:text-green-400'
                }`}>
                {title}
            </h4>
            <p className={`text-[13px] leading-relaxed transition-all duration-300 ${isNegative ? 'text-slate-400 dark:text-slate-500 group-hover/item:text-slate-500 dark:group-hover/item:text-slate-400' : 'text-slate-500 dark:text-slate-500 group-hover/item:text-slate-600 dark:group-hover/item:text-slate-400'
                }`}>
                {description}
            </p>
        </div>
    </div>
);

export default Problem;
