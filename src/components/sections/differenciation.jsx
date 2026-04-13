import React from 'react';

const Differentiation = () => {
    const reasons = [
        {
            title: "Pensé pour le marché africain",
            description: "On ne plaque pas un modèle étranger. On a construit RiseManager avec les réalités de l'Afrique, pas d'ailleurs.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            color: "text-blue-600",
            bg: "bg-blue-50/50"
        },
        {
            title: "Conçu pour le COD",
            description: "Le Cash On Delivery a ses propres règles. Nous gérons les retours, les confirmations et le cash-flow spécifique au COD.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "text-emerald-600",
            bg: "bg-emerald-50/50"
        },
        {
            title: "Architecture 360° Unifiée",
            description: "Opérations, stock, équipe et finances sont reliés en temps réel. Une vente déduite impacte instantanément tous les KPIs.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            color: "text-violet-600",
            bg: "bg-violet-50/50"
        },
        {
            title: "Support Local & Expert",
            description: "Pas de ticket anonyme à l'autre bout du monde. Notre équipe est ici, parle votre langue et comprend votre business.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            color: "text-orange-600",
            bg: "bg-orange-50/50"
        },
        {
            title: "Suit le Terrain Réel",
            description: "RiseManager est conçu pour suivre ce qui se passe vraiment au dépôt, pas ce que vous aimeriez qu'il s'y passe.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            ),
            color: "text-cyan-600",
            bg: "bg-cyan-50/50"
        },
        {
            title: "Fait par des Opérateurs",
            description: "Chaque bouton, chaque vue a été validée par des gens qui gèrent des dizaines de commandes par jour. Pas de gadget inutile.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            color: "text-slate-700 dark:text-slate-200",
            bg: "bg-slate-100/50 dark:bg-slate-800/50"
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-slate-50/30 dark:bg-slate-900/10 overflow-hidden relative transition-colors duration-500">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                 <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm animate-slide-up">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Différenciation</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Pourquoi RiseManager n’est pas un <span className="text-primary italic">simple</span> outil de gestion
                    </h2>
                    <p className="text-lg text-body dark:text-slate-400 leading-relaxed animate-slide-up max-w-2xl mx-auto font-medium" style={{ animationDelay: '0.2s' }}>
                        Nous avons construit une infrastructure robuste qui répond aux défis précis de la vente à distance en Afrique.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {reasons.map((reason, i) => (
                         <div 
                            key={i} 
                            className="group p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] shadow-xl shadow-slate-200/20 dark:shadow-none hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 dark:hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 animate-slide-up"
                            style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                        >
                            <div className={`w-14 h-14 ${reason.bg} dark:bg-slate-800/50 ${reason.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-extrabold text-heading dark:text-white mb-4 group-hover:text-primary transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-body dark:text-slate-400 text-sm leading-relaxed font-medium font-outfit opacity-80 group-hover:opacity-100 transition-opacity">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentiation;
