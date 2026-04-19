import React from 'react';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
    const { t } = useTranslation();
    const plans = [
        {
            name: "RiseManager Free",
            price: "Free",
            type: "fixed",
            features: [
                { text: t("pricing_free_orders"), icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
                { text: t("pricing_free_mgmt"), icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                { text: t("pricing_free_analytics"), icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                { text: t("pricing_free_support"), icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" }
            ]
        },
        {
            name: "RiseManager Start",
            options: [
                { limit: "1,000", price: "14" },
                { limit: "2,000", price: "19" },
                { limit: "5,000", price: "27" }
            ],
            type: "variable",
            features: [
                { text: t("pricing_start_ai"), icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" },
                { text: t("pricing_start_whatsapp"), icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" },
                { text: t("pricing_start_auto"), icon: "M13 10V3L4 14h7v7l9-11h-7z" }
            ]
        },
        {
            name: "RiseManager Business",
            options: [
                { limit: "10,000", price: "37" },
                { limit: "20,000", price: "47" }
            ],
            type: "variable",
            popular: true,
            features: [
                { text: t("pricing_business_auto"), icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.722 2.526a2 2 0 01-3.337 0l-.722-2.526a2 2 0 00-1.96-1.414l-2.387.477a2 2 0 00-1.022.547M19.428 15.428a2 2 0 01-3.337 0l-.722-2.526a2 2 0 00-3.337 0l-.722 2.526a2 2 0 01-3.337 0" },
                { text: t("pricing_business_confirm"), icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
                { text: t("pricing_business_dashboard"), icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" }
            ]
        },
        {
            name: "RiseManager Pro",
            options: [
                { limit: "50,000", price: "69" },
                { limit: "100,000", price: "97" },
                { limit: "Unlimited", price: "137" }
            ],
            type: "variable",
            features: [
                { text: t("pricing_pro_ai"), icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
                { text: t("pricing_pro_api"), icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
                { text: t("pricing_pro_team"), icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
                { text: t("pricing_pro_support"), icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" }
            ],
        }
    ];

    return (
        <section className="py-24 lg:py-40 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden" id="tarifs">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm animate-fade-in">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">{t('Tarification Transparente')}</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-black text-heading dark:text-white leading-[1.1] tracking-tight animate-slide-up">
                        {t('Des plans adaptés')}
                    </h2>
                    <p className="text-lg lg:text-xl text-body dark:text-slate-400 leading-relaxed font-medium animate-slide-up [animation-delay:0.1s]">
                        {t('Commencez gratuitement')}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan, i) => (
                        <div 
                            key={i} 
                            className={`relative bg-white dark:bg-slate-900 rounded-[40px] p-8 pb-10 border transition-all duration-500 animate-slide-up hover:-translate-y-2 group shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none ${plan.popular ? 'border-primary ring-1 ring-primary/20 scale-105 z-10' : 'border-slate-100 dark:border-slate-800'}`}
                            style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg shadow-primary/30">
                                    {t("pricing_popular")}
                                </div>
                            )}

                            {/* Plan Name */}
                            <h3 className="text-lg lg:text-xl font-black text-heading dark:text-white mb-6 text-center">
                                {plan.name}
                            </h3>

                            {/* Price / Options */}
                            <div className="mb-5 flex flex-col justify-center items-center">
                                {plan.type === 'fixed' ? (
                                    <div className="text-center">
                                        <div className="text-5xl font-black text-heading dark:text-white leading-none">
                                            {plan.price}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-3 w-full">
                                        {plan.options.map((opt, idx) => (
                                            <div key={idx} className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm font-bold">
                                                <span className="text-slate-500 dark:text-slate-400">{t("pricing_start_orders", { count: opt.limit })}</span>
                                                <span className="text-primary font-black">${opt.price}<span className="text-[10px] font-bold text-slate-400">/mois</span></span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* CTA */}
                            <div className="mb-8">
                                <button className={`w-full py-4 rounded-2xl text-sm font-black transition-all hover:scale-[1.02] active:scale-[0.98] ${plan.popular ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'bg-slate-950 dark:bg-slate-800 text-white shadow-xl shadow-slate-900/20 dark:shadow-none'}`}>
                                    {t("Commencer l'Essai Gratuit")}
                                </button>
                            </div>

                            {/* Features */}
                            <div className="space-y-5">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-start gap-4 group/item">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-100 dark:border-slate-700 transition-colors group-hover/item:bg-primary group-hover/item:border-primary group-hover/item:text-white text-slate-400 dark:text-slate-500">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                                            </svg>
                                        </div>
                                        <span className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 leading-tight group-hover/item:text-heading dark:group-hover/item:text-white transition-colors pt-2">
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

                {/* Bottom Trust Note */}
                <div className="mt-20 text-center animate-fade-in [animation-delay:0.8s]">
                    <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">{t('Essai gratuit de 14 jours')}</p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                         {/* Placeholder for trusted partner logos if needed */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
