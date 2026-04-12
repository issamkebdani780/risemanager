import React from 'react';


const FinalCTA = () => {
    const reassurances = [
        { label: "Mise en route rapide", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
        { label: "Support local", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
        { label: "Accompagnement", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
        { label: "Essai sans engagement", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-7.618 3.04" }
    ];

    return (
        <section className="py-24 lg:py-40 overflow-hidden" id="cta">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="relative max-w-6xl mx-auto p-4 lg:p-6 rounded-[56px]  shadow-2xl shadow-primary/20">
                    <div className="relative w-full h-full bg-gradient-to-br from-blue-50/50 to-white rounded-[44px] p-10 lg:p-24 flex flex-col items-center text-center space-y-12">
                        
                        {/* Header Text */}
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
                                Arrête de subir ton activité. <br />
                                <span className="text-primary">Reprends le contrôle.</span>
                            </h2>
                            <p className="text-sm lg:text-base text-slate-500 font-medium max-w-xl mx-auto">
                                Rejoignez les centaines d'entreprises qui ont déjà automatisé leur croissance avec RiseManager.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 items-center">
                            <button className="px-10 py-5 bg-primary hover:bg-primary-hover text-white rounded-[24px] font-bold text-base shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 active:scale-95">
                                Démarrer l'essai gratuit
                            </button>
                            <button className="px-10 py-5 bg-white hover:bg-slate-50 text-primary rounded-[24px] font-bold text-base shadow-lg shadow-slate-200 border border-slate-100 transition-all hover:-translate-y-1 active:scale-95">
                                Réserver une démo
                            </button>
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
        </section>
    );
};

export default FinalCTA;
