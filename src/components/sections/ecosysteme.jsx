import React from 'react';

const Ecosystem = () => {
    const modules = [
        { name: "RiseManager", desc: "Le Cerveau Opérationnel", active: true, color: "bg-primary", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { name: "RiseCart", desc: "Storefront & Conversion", active: false, color: "bg-emerald-500", icon: "M16 11V7a4 4 0 11-8 0m8 4v2a2 2 0 11-4 0m4-2V9m-8 2V7a4 4 0 118 0m-8 4v2a2 2 0 114 0m-4-2V9m-4 12h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" },
        { name: "RiseConfirm", desc: "Automation & Rappels", active: false, color: "bg-indigo-500", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
        { name: "FBR", desc: "La Data Community", active: false, color: "bg-rose-500", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
        { name: "RiseAcademy", desc: "Formations & Expertise", active: false, color: "bg-amber-500", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
        { name: "RisePay", desc: "Solutions de Paiement", active: false, color: "bg-cyan-500", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" }
    ];

    return (
        <section className="py-24 lg:py-40 bg-white overflow-hidden relative">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00a2ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32 space-y-8">
                    <div className="flex justify-center animate-slide-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest leading-none">L'ÉCOSYSTÈME RISE</span>
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-extrabold text-heading leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Bien plus qu'un logiciel : <br />
                        Une <span className="text-primary">infrastructure</span> complète.
                    </h2>
                    <p className="text-xl text-body leading-relaxed max-w-2xl mx-auto font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Tu n’achètes pas juste un outil. Tu rentres dans un environnement conçu pour porter chaque étape de ta croissance.
                    </p>
                </div>

                {/* Ecosystem Visualized */}
                <div className="relative max-w-5xl mx-auto py-10 px-4 sm:px-0">
                    {/* Connecting lines (Desktop) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent hidden lg:block" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent hidden lg:block" />

                    {/* Connecting line (Mobile) */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-slate-200 to-transparent lg:hidden" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-12 relative">
                        {modules.map((module, i) => (
                            <div key={i} className="relative">
                                {/* Connection Node (Mobile) */}
                                {i > 0 && (
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-slate-200 bg-white z-10 lg:hidden shadow-sm" />
                                )}

                                <div
                                    className={`group relative p-8 bg-white rounded-[40px] border transition-all duration-500 animate-slide-up ${module.active ? 'border-primary shadow-2xl shadow-primary/10' : 'border-slate-50 shadow-xl shadow-slate-100/50 hover:border-slate-200 hover:shadow-2xl'}`}
                                    style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                                >
                                    <div className="flex flex-col items-center sm:items-start">
                                        <div className={`w-14 h-14 ${module.active ? 'bg-primary' : module.color} text-white rounded-[20px] flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={module.icon} />
                                            </svg>
                                        </div>
                                        <div className="space-y-2 text-center sm:text-left w-full">
                                            <div className="text-xl font-bold text-heading group-hover:text-primary transition-colors">{module.name}</div>
                                            <div className="text-sm font-medium text-slate-400 group-hover:text-slate-600 transition-colors uppercase tracking-widest text-[10px]">{module.desc}</div>
                                        </div>
                                    </div>

                                    {module.active && (
                                        <div className="absolute top-6 right-8">
                                            <div className="flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
