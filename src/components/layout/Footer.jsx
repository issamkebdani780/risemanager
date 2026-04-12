import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-24 pb-12 overflow-hidden relative">
            {/* Background Glows for subtle depth */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                
                {/* Upper Section: Trust & Branding */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 pb-20 border-b border-slate-100 mb-20">
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl italic shadow-xl shadow-primary/20">R</div>
                            <span className="text-2xl font-black text-slate-900 tracking-tight italic">RiseManager</span>
                        </div>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                            Le système d'exploitation n°1 pour l'e-commerce en Algérie. Centralisez, automatisez et scalez votre business en toute sérénité.
                        </p>
                        <div className="flex items-center gap-3">
                            {['Facebook', 'Instagram', 'LinkedIn', 'WhatsApp'].map(social => (
                                <a key={social} href="#" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all border border-slate-100 group">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 text-reveal-container">
                        {/* Links Column */}
                        <div className="space-y-6">
                            <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Plateforme</div>
                            <ul className="space-y-4">
                                {[
                                    { name: 'Fonctionnalités', href: '#fonctionnalites' },
                                    { name: 'Tarifs', href: '#cta' },
                                    { name: 'Démonstration', href: '#demo' },
                                    { name: 'Ecosystème', href: '#ecosysteme' },
                                    { name: 'Témoignages', href: '#temoignages' }
                                ].map(link => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-tight">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Ecosystem Column */}
                        <div className="space-y-6">
                            <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Ecosystème</div>
                            <ul className="space-y-4">
                                {['RiseCart', 'RiseConfirm', 'FBR Network', 'RiseAcademy', 'RisePay'].map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group">
                                            {link}
                                            <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Direct Contact */}
                        <div className="space-y-6">
                            <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Contact Direct</div>
                            <div className="space-y-4">
                                <a href="mailto:contact@risemanager.dz" className="block p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all group">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Email</div>
                                    <div className="text-sm font-extrabold text-slate-600 group-hover:text-primary transition-colors italic leading-none pt-1">contact@risemanager.dz</div>
                                </a>
                                <a href="tel:+213555123456" className="block p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-500/30 hover:bg-white hover:shadow-lg hover:shadow-emerald-100/50 transition-all group">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Téléphone</div>
                                    <div className="text-sm font-extrabold text-slate-600 group-hover:text-emerald-500 transition-colors italic leading-none pt-1">+213 (0) 555 12 34 56</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Signals Integration */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border border-slate-100 bg-slate-50/50 rounded-[32px] px-8 mb-12">
                    {[
                        { label: "Intégrations Natives", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                        { label: "Support Local (DZ)", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                        { label: "Données Sécurisées", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
                        { label: "Infrastructure Sérieuse", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" }
                    ].map((signal, i) => (
                        <div key={i} className="flex flex-col items-center lg:items-start gap-2 group">
                            <div className="text-primary/70 group-hover:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={signal.icon} />
                                </svg>
                            </div>
                            <div className="text-[11px] font-black text-slate-800 uppercase tracking-widest text-center lg:text-left">{signal.label}</div>
                        </div>
                    ))}
                </div>

                {/* Footnotes */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-[11px] font-bold text-slate-400">
                        &copy; {new Date().getFullYear()} RiseManager. Propulsé par Rise infrastructure Algérie.
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                        {['Politique de Confidentialité', 'Conditions d\'Utilisation', 'Mentions Légales'].map(legal => (
                            <a key={legal} href="#" className="text-[11px] font-black text-slate-400 hover:text-primary transition-colors uppercase tracking-[0.1em]">{legal}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
