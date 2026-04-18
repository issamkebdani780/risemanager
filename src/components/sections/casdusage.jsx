import React from 'react';
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  Package, 
  RotateCcw, 
  ShoppingBag,
  ArrowRight,
  Zap
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UseCases = () => {
    const { t } = useTranslation();
    const cases = [
        {
            title: t("case_beginner_title"),
            problem: t("case_beginner_problem"),
            solution: t("case_beginner_solution"),
            benefit: t("case_beginner_benefit"),
            icon: <Rocket className="w-5 h-5" />,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: t("case_growth_title"),
            problem: t("case_growth_problem"),
            solution: t("case_growth_solution"),
            benefit: t("case_growth_benefit"),
            icon: <TrendingUp className="w-5 h-5" />,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        },
        {
            title: t("case_team_title"),
            problem: t("case_team_problem"),
            solution: t("case_team_solution"),
            benefit: t("case_team_benefit"),
            icon: <Users className="w-5 h-5" />,
            color: "text-violet-600",
            bg: "bg-violet-50"
        },
        {
            title: t("case_volume_title"),
            problem: t("case_volume_problem"),
            solution: t("case_volume_solution"),
            benefit: t("case_volume_benefit"),
            icon: <Package className="w-5 h-5" />,
            color: "text-slate-600",
            bg: "bg-slate-50"
        },
        {
            title: t("case_fashion_title"),
            problem: t("case_fashion_problem"),
            solution: t("case_fashion_solution"),
            benefit: t("case_fashion_benefit"),
            icon: <ShoppingBag className="w-5 h-5" />,
            color: "text-cyan-600",
            bg: "bg-cyan-50"
        },
        {
            title: t("case_returns_title"),
            problem: t("case_returns_problem"),
            solution: t("case_returns_solution"),
            benefit: t("case_returns_benefit"),
            icon: <RotateCcw className="w-5 h-5" />,
            color: "text-red-600",
            bg: "bg-red-50"
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative" id="transformation">
            {/* Soft decorative blurs */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-24 space-y-8">
                    <div className="flex justify-center animate-slide-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] leading-none">{t('Scénarios d\'Excellence')}</span>
                        </div>
                    </div>
                    
                    <h2 className="text-4xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        {t('RiseManager s\'adapte à')} <br />
                        <span className="text-primary italic">{t('votre')}</span> {t('réalité.')}
                    </h2>
                </div>

                {/* List of horizontal rows (strips) */}
                <div className="max-w-7xl mx-auto space-y-8 lg:space-y-10">
                    {cases.map((item, i) => (
                        <div 
                            key={i}
                            className="bg-white dark:bg-slate-900 rounded-[28px] lg:rounded-full border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-primary/5 dark:hover:shadow-none hover:border-primary/20 transition-all duration-500 group relative animate-slide-up px-6 lg:px-12"
                            style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                        >
                            {/* Floating Benefit Badge - Now visible on mobile too */}
                            <div className="absolute top-0 right-4 lg:-right-4 -translate-y-1/2 z-20">
                                <div className={`inline-flex items-center gap-1.5 lg:gap-2 px-3 lg:px-5 py-1.5 lg:py-2.5 bg-white dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none group-hover:scale-110 transition-transform duration-500 animate-bounce-subtle`}>
                                    <Zap className="w-3 lg:w-4 h-3 lg:h-4 text-emerald-500 fill-current" />
                                    <span className={`text-[10px] lg:text-[12px] font-black ${item.color} tracking-tight`}>
                                        {item.benefit}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-row items-center p-4 lg:p-5 gap-4 lg:gap-14">
                                
                                {/* 1. Profile - Responsive Width */}
                                <div className="flex items-center gap-3 lg:gap-6 w-36 lg:w-[320px] shrink-0">
                                    <div className={`w-10 h-10 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center border shadow-sm transition-transform duration-500 group-hover:scale-110 ${item.bg} dark:bg-slate-800/50 ${item.color} border-current/10 shrink-0`}>
                                        <div className="scale-75 lg:scale-100">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-[10px] lg:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* 2. Vertical Separator */}
                                <div className="w-px h-10 lg:h-14 bg-slate-100 dark:bg-slate-800 shrink-0" />

                                {/* 3. Transformation Content - Grid on mobile too */}
                                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 items-center relative lg:pr-10">
                                    
                                    {/* Avant (Problem) */}
                                    <div className="space-y-1 lg:space-y-2">
                                        <div className="flex items-center gap-1.5 lg:gap-2">
                                            <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-red-400" />
                                            <span className="text-[8px] lg:text-[10px] font-black text-red-500 uppercase tracking-widest opacity-80">{t('Sans RiseManager')}</span>
                                        </div>
                                        <p className="text-[10px] lg:text-lg text-slate-500 dark:text-slate-400 font-medium italic leading-relaxed line-clamp-2 lg:line-clamp-none">
                                            "{item.problem}"
                                        </p>
                                    </div>

                                    {/* Absolute Centered Arrow (Desktop Only for clarity) */}
                                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                        <div className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 text-slate-200 dark:text-slate-700 group-hover:text-primary group-hover:scale-110 transition-all duration-500 rtl:rotate-180">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Après (Solution) */}
                                    <div className="space-y-1 lg:space-y-4 lg:pl-10">
                                        <div className="flex items-center gap-1.5 lg:gap-2">
                                            <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-emerald-400" />
                                            <span className="text-[8px] lg:text-[10px] font-black text-emerald-500 uppercase tracking-widest">{t('Avec RiseManager')}</span>
                                        </div>
                                        <p className="text-[11px] lg:text-lg text-slate-800 dark:text-white font-bold leading-relaxed line-clamp-2 lg:line-clamp-none">
                                            {item.solution}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile optimization note or final link */}
                <div className="mt-20 text-center">
                    <p className="text-slate-400 dark:text-slate-600 text-sm font-medium animate-slide-up" style={{ animationDelay: '0.6s' }}>
                        {t('Et bien d\'autres profils')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default UseCases;