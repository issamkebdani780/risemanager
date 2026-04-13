import React from 'react';

const UseCases = () => {
    const cases = [
        {
            title: "Débutant E-commerce",
            problem: "Perdu entre Excel et WhatsApp.",
            solution: "Interface tout-en-un centralisée.",
            benefit: "Pro dès le 1er jour.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            color: "text-blue-600",
            bg: "bg-blue-50",
            cta: "Découvrir"
        },
        {
            title: "Boutique en Croissance",
            problem: "Ruptures et erreurs de stock.",
            solution: "Stock intelligent avec alertes.",
            benefit: "Zéro vente perdue.",
            icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            recommended: true,
            cta: "Voir les fonctionnalités"
        },
        {
            title: "Équipe de Confirmation",
            problem: "Suivi des appels chaotique.",
            solution: "Assignation auto et logs.",
            benefit: "Productivité x2.",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
            color: "text-violet-600",
            bg: "bg-violet-50",
            cta: "Découvrir"
        },
        {
            title: "Gros Volume",
            problem: "Préparation de colis lente.",
            solution: "Impression en masse et scan.",
            benefit: "Expéditions 3x plus rapides.",
            icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
            color: "text-slate-900",
            bg: "bg-slate-100",
            cta: "Voir les fonctionnalités"
        },
        {
            title: "Vêtements & Prêt-à-porter",
            problem: "Gestion complexe tailles/couleurs.",
            solution: "Matrice de variantes visuelle.",
            benefit: "Stock précis à la pointure.",
            icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
            color: "text-cyan-600",
            bg: "bg-cyan-50",
            cta: "Découvrir"
        },
        {
            title: "Activité à Hauts Retours",
            problem: "Pertes sur les colis retournés.",
            solution: "Suivi des retours et blacklist.",
            benefit: "-40% de pertes.",
            icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
            color: "text-red-600",
            bg: "bg-red-50",
            cta: "Voir les fonctionnalités"
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest leading-none">Scénarios d'Excellence</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading leading-tight animate-slide-up">
                        RiseManager s'adapte à <span className="text-primary italic">votre</span> réalité
                    </h2>
                    <p className="text-lg text-body leading-relaxed max-w-2xl mx-auto font-medium animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Que vous lanciez votre premier produit ou que vous gériez un entrepôt complet, nous avons la réponse à vos défis.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {cases.map((useCase, i) => (
                        <div 
                            key={i} 
                            className={`relative flex flex-col p-8 rounded-[40px] border ${useCase.recommended ? 'border-primary/50 shadow-xl shadow-primary/5 bg-white' : 'border-slate-50 bg-[#fbfcfd]'} hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 hover:border-primary/20 transition-all duration-500 group animate-slide-up`}
                            style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                        >
                            {useCase.recommended && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg z-10 flex items-center gap-1.5">
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    Le plus choisi
                                </div>
                            )}

                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 shrink-0 ${useCase.bg} ${useCase.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={useCase.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-heading leading-tight">{useCase.title}</h3>
                            </div>

                            <div className="space-y-5 flex-1 mb-6 mt-2">
                                <div className="space-y-1.5">
                                    <div className="text-[10px] font-extrabold text-red-500/80 uppercase tracking-widest flex items-center gap-1.5">Avant</div>
                                    <p className="text-[14px] text-slate-500 font-medium leading-snug">{useCase.problem}</p>
                                </div>

                                <div className="space-y-1.5">
                                    <div className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-widest flex items-center gap-1.5">Avec RiseManager</div>
                                    <p className="text-[14px] text-slate-800 font-bold leading-snug">{useCase.solution}</p>
                                </div>
                            </div>

                            <div className="mt-2 pt-6 border-t border-slate-100 flex items-center justify-between mb-8">
                                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Bénéfice Net</div>
                                <div className={`text-[11px] font-extrabold ${useCase.color} bg-white shadow-sm border border-slate-50 px-3 py-1 rounded-full whitespace-nowrap`}>
                                    {useCase.benefit}
                                </div>
                            </div>

                            <button className={`w-full group/btn inline-flex justify-center items-center gap-2 px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${useCase.recommended ? 'bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg' : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-100'}`}>
                                {useCase.cta}
                                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
