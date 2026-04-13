import React from 'react';

const Problem = () => {
    return (
        <section className="py-24 lg:py-32 bg-[#f8fbff] overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header - Intro */}
                <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24 space-y-6">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading leading-tight animate-slide-up">
                        Beaucoup pilotent encore leur <br className="hidden lg:block" /> activité à l’aveugle.
                    </h2>
                    <p className="text-lg lg:text-xl text-body leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Commandes dispersées, stock approximatif, équipes peu suivies, <br className="hidden lg:block" /> marges floues, retours mal contrôlés.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto">

                    {/* Card: Sans RiseManager */}
                    <div className="group relative bg-white rounded-[40px] p-8 lg:p-14 border border-slate-100 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center gap-3 mb-10 opacity-60">
                            <div className="w-10 h-10 bg-slate-200 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-extrabold text-slate-500">Sans RiseManager</h3>
                        </div>

                        <div className="space-y-6">
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                                title="Fichiers Excel encombrants"
                                description="Données perdues et versions obsolètes."
                                isNegative
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
                                title="Notes manuelles éparpillées"
                                description="Post-its et carnets qui se perdent."
                                isNegative
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                title="Commandes mal suivies"
                                description="Statuts flous et oublis fréquents."
                                isNegative
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                title="Incertitude sur la marge"
                                description="Tu ne sais pas combien tu gagnes réellement."
                                isNegative
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" /></svg>}
                                title="Retours non maîtrisés"
                                description="Perte de stock sur les colis qui reviennent."
                                isNegative
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
                                title="Équipe non mesurée"
                                description="Productivité invisible et erreurs répétées."
                                isNegative
                            />
                        </div>
                    </div>

                    {/* Card: Avec RiseManager */}
                    <div className="group relative bg-white rounded-[40px] p-8 lg:p-14 border border-blue-50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/30 animate-slide-up shadow-premium" style={{ animationDelay: '0.3s' }}>
                        <div className="absolute top-8 right-8 hidden sm:block">
                            <span className="px-4 py-1.5 bg-blue-100 text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-full border border-blue-200 shadow-sm">
                                Solution Optimale
                            </span>
                        </div>

                        <div className="flex items-center gap-3 mb-8 lg:mb-10">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-extrabold text-heading">Avec RiseManager</h3>
                        </div>

                        <div className="mb-10 xl:mb-0 xl:absolute xl:top-[30%] xl:-right-16 bg-white/90 backdrop-blur-md p-4 lg:p-5 rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 xl:border-white/50 animate-float flex items-center gap-4 lg:gap-5 z-20 min-w-[200px] xl:w-[280px]">
                            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-green-50 shrink-0 rounded-2xl flex items-center justify-center border border-green-100 shadow-sm p-10">
                                <span className="text-xl lg:text-2xl font-extrabold text-green-600">-40%</span>
                            </div>
                            <div>
                                <div className="text-[9px] lg:text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">Moyenne Constatée</div>
                                <p className="text-[13px] lg:text-sm text-heading font-bold leading-snug">
                                    De colis retournés <br className="hidden xl:block"/>et 3x de temps gagné.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2 2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
                                title="Dashboard clair & intuitif"
                                description="Tes metrics clés en un coup d'œil, en temps réel."
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                                title="KPIs & Analytics visibles"
                                description="Suivi précis de la confirmation et livraison."
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 002-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l2 2 4-4" /></svg>}
                                title="Stock à jour automatiquement"
                                description="Plus jamais de rupture de stock surprise."
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                                title="Statut des commandes net"
                                description="Suivi en temps réel de chaque étape."
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                title="Profit net clair"
                                description="Calcul automatique des marges après frais."
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                                title="Équipes & Confirmation suivies"
                                description="Mesure la performance de chaque agent."
                            />
                        </div>
                    </div>

                </div>

                {/* Transition / Call to action text */}
                <div className="mt-20 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <p className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        Arrête de deviner ton activité. Commence à la mesurer proprement.
                    </p>
                </div>

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
                    ? 'bg-red-50 border-red-100 text-red-500 group-hover/item:bg-red-500 group-hover/item:text-white group-hover/item:shadow-lg group-hover/item:shadow-red-500/30'
                    : 'bg-green-50 border-green-100 text-green-600 group-hover/item:bg-green-500 group-hover/item:text-white group-hover/item:shadow-lg group-hover/item:shadow-green-500/30'
                }`}>
                {icon}
            </div>
            {/* Visual Indicator (Cross/Check) */}
            <div className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center shadow-sm z-10 transition-transform group-hover/item:scale-110 ${isNegative ? 'bg-red-500' : 'bg-green-500'}`}>
                {isNegative ? (
                    <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                )}
            </div>
        </div>
        <div className="space-y-1">
            <h4 className={`text-[15px] font-bold transition-all duration-300 ${isNegative ? 'text-slate-600 group-hover/item:text-red-600' : 'text-slate-800 group-hover/item:text-green-600'
                }`}>
                {title}
            </h4>
            <p className={`text-[13px] leading-relaxed transition-all duration-300 ${isNegative ? 'text-slate-400 group-hover/item:text-slate-500' : 'text-slate-500 group-hover/item:text-slate-600'
                }`}>
                {description}
            </p>
        </div>
    </div>
);

export default Problem;
