import React from 'react';

const CountUp = ({ end, duration = 2000, decimals = 0 }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentCount = progress * end;
            setCount(currentCount);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return <span>{count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>;
};

const Testimonials = () => {
    const testimonials = [
        {
            name: "Amine Rahmani",
            role: "Fondateur, AlgerianStore",
            content: "Passer d'Excel à RiseManager a été le tournant de notre business. On a enfin une visibilité réelle sur notre stock et nos profits. C'est l'outil qui nous manquait pour scaler.",
            result: "+42% de croissance",
            avatar: "AR"
        },
        {
            name: "Lydia Benmadi",
            role: "Directrice Opérations, ModWay",
            content: "La gestion des variantes (tailles/couleurs) est un cauchemar pour le textile. Avec Rise, tout est devenu fluide. Le taux de retour a chuté grâce au suivi rigoureux.",
            result: "-15% Taux de retour",
            avatar: "LB"
        },
        {
            name: "Karim Djebbar",
            role: "E-commerçant indépendant",
            content: "Le support local est ultra-réactif. Ils comprennent le marché africain et les défis de la livraison. Je recommande à 100% pour ceux qui veulent du sérieux.",
            result: "Support 24/7",
            avatar: "KD"
        }
    ];

    const stats = [
        { label: "Utilisateurs Actifs", value: 500, suffix: "+", decimals: 0 },
        { label: "Commandes Gérées", value: 2, suffix: "M+", decimals: 0 },
        { label: "ROI Moyen Client", value: 3.5, suffix: "x", decimals: 1, prefix: "x" },
        { label: "Taux de satisfaction", value: 98, suffix: "%", decimals: 0 }
    ];

    return (
        <section className="py-24 lg:py-32 bg-slate-50/50 overflow-hidden relative" id="temoignages">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-50" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest leading-none">Confiance & Résultats</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading leading-tight animate-slide-up">
                        Ils construisent le futur du <br />
                        <span className="text-primary italic">COD en Afrique</span> avec nous.
                    </h2>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-24 px-6 py-10 bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center space-y-2 relative">
                            {i < stats.length - 1 && <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-slate-100" />}
                            <div className="text-2xl lg:text-4xl font-black text-heading leading-none flex items-center justify-center">
                                {stat.prefix && <span>{stat.prefix}</span>}
                                <CountUp end={stat.value} decimals={stat.decimals} />
                                {stat.suffix && <span>{stat.suffix}</span>}
                            </div>
                            <div className="text-[10px] lg:text-[11px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Testimonials Grid */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
                    {testimonials.map((t, i) => (
                        <div 
                            key={i} 
                            className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-lg shadow-slate-200/30 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group relative flex flex-col animate-slide-up"
                            style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-8 right-10 text-slate-100 group-hover:text-primary/10 transition-colors">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.8954 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H15.017C13.9124 7 13.017 7.89543 13.017 9V14M3.017 21L3.017 18C3.017 16.8954 3.89543 16 5.017 16H8.017C9.12157 16 10.017 15.1046 10.017 14V9C10.017 7.89543 9.12157 7 8.017 7H4.017C2.91243 7 2.017 7.89543 2.017 9V14" /></svg>
                            </div>

                            <p className="text-lg text-slate-700 italic font-medium leading-relaxed mb-8 flex-1">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold text-sm">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-heading">{t.name}</div>
                                    <div className="text-[11px] font-medium text-slate-400">{t.role}</div>
                                </div>
                                <div className="ml-auto">
                                    <div className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-lg border border-emerald-100">
                                        {t.result}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Short Logos Section */}
                <div className="mt-20 text-center space-y-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                    <div className="text-[10px] font-extrabold text-slate-300 uppercase tracking-[0.2em]">Ils nous font confiance</div>
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                        {/* Fake placeholders for professional logos */}
                        <div className="text-xl font-black tracking-tighter">BRAND ALPHA</div>
                        <div className="text-xl font-black tracking-tighter">LOGIX</div>
                        <div className="text-xl font-black tracking-tighter">ELITE COD</div>
                        <div className="text-xl font-black tracking-tighter">EXPRESSWAY</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
