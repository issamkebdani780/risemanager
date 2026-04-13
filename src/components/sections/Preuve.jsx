import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {prefix}{count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}{suffix}
    </span>
  );
};

const Preuve = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#f8fbff] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-heading leading-tight animate-slide-up">
            Des résultats concrets pour <br />
            <span className="text-primary tracking-tight">votre croissance.</span>
          </h2>
          <p className="text-lg text-body leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Chaque chiffre raconte une histoire d'optimisation et de réussite <br className="hidden lg:block" /> sur le terrain africain.
          </p>
        </div>

        {/* Logos Clients / Partenaires */}
        <div className="max-w-5xl mx-auto mb-20 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <p className="text-center text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] mb-8">Plus de 200 marques e-commerce locales gèrent leur flux via notre plateforme</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-14 opacity-60 transition-all duration-500">
             <img src="/confiance/conf1.webp" alt="Client Logo" className="h-7 lg:h-10 w-auto object-contain brightness-75 hover:brightness-100 transition-all cursor-default" />
             <img src="/confiance/conf2.webp" alt="Client Logo" className="h-7 lg:h-10 w-auto object-contain brightness-75 hover:brightness-100 transition-all cursor-default" />
             <img src="/confiance/conf3.webp" alt="Client Logo" className="h-8 lg:h-11 w-auto object-contain brightness-75 hover:brightness-100 transition-all cursor-default" />
             <img src="/confiance/conf4.webp" alt="Client Logo" className="h-7 lg:h-10 w-auto object-contain brightness-75 hover:brightness-100 transition-all cursor-default" />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto items-stretch">
          
          {/* Card 1: Commandes suivies */}
          <div className="lg:col-span-8 group relative bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 rounded-[40px] p-8 lg:p-12 border border-blue-50/50 shadow-sm overflow-hidden animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10 space-y-4 max-w-md">
              <div className="text-5xl lg:text-7xl font-extrabold text-primary tracking-tighter">
                <AnimatedCounter end={1.2} decimals={1} prefix="+" suffix="M" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-heading">Commandes suivies</h3>
              <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                Centralisez chaque étape, du panier à la livraison, avec une traçabilité totale et sans failles.
              </p>
            </div>
            
            <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center animate-float">
               <div className="w-16 h-16 bg-white rounded-2xl shadow-xl border border-blue-50 flex items-center justify-center rotate-12">
                 <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 002-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                 </svg>
               </div>
            </div>
          </div>

          {/* Card 2: Variantes produit gérées */}
          <div className="lg:col-span-4 bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm flex flex-col justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2 2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <div className="text-4xl lg:text-5xl font-extrabold text-heading mb-2">
              <AnimatedCounter end={540} suffix="k" />
            </div>
            <div className="text-[10px] font-extrabold text-primary tracking-[0.2em] uppercase mb-4">Variantes gérées</div>
            <p className="text-xs text-slate-400 italic leading-relaxed">
              "Tailles, couleurs, pointures. Chaque unité de stock est tracée avec une précision chirurgicale."
            </p>
          </div>

          {/* Card 3: Rentabilité calculée */}
          <div className="lg:col-span-6 bg-white rounded-[40px] p-8 lg:p-10 border border-slate-100 shadow-sm animate-slide-up group overflow-hidden" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full text-[10px] font-extrabold text-green-600 mb-6 uppercase tracking-wider">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Rentabilité en temps réel
            </div>
            <div className="text-6xl font-extrabold text-[#0f172a] mb-2 leading-none">
              <AnimatedCounter end={28} suffix="%" />
            </div>
            <h3 className="text-xl font-bold text-heading mb-3">Hausse du profit net</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              L'automatisation du calcul des marges après livraison réduit les fuites financières.
            </p>
          </div>

          {/* Card 4: Agents suivis */}
          <div className="lg:col-span-3 bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm flex flex-col justify-between animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="space-y-1">
               <div className="text-4xl font-extrabold text-heading">
                 <AnimatedCounter end={4200} />
               </div>
               <div className="text-[10px] font-extrabold text-blue-600 tracking-wider uppercase">Agents suivis</div>
            </div>
            <div className="my-8">
               <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-2">
                 <span>Productivité</span>
                 <span className="text-blue-600">85% Optimisé</span>
               </div>
               <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-600 rounded-full w-[85%] transition-all duration-1000" />
               </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Mesurez la performance de chaque agent de confirmation.
            </p>
          </div>

          {/* Small Cards Column */}
          <div className="lg:col-span-3 flex flex-col gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
             {/* Card 5: Temps gagné */}
             <div className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-sm flex flex-col justify-center h-full">
                <div className="text-3xl font-extrabold text-heading">
                  <AnimatedCounter end={12} suffix="h" />
                </div>
                <div className="text-[9px] font-extrabold text-primary tracking-wider uppercase mb-2">Temps gagné / semaine</div>
                <p className="text-[10px] text-slate-400 leading-relaxed">
                  Grâce à l'automatisation des tâches répétitives et manuelles.
                </p>
             </div>
             {/* Card 6: Retours tracés */}
             <div className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-sm flex items-center gap-4 h-full group hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 bg-primary/10 group-hover:bg-white rounded-xl flex items-center justify-center text-primary transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                  </svg>
                </div>
                <div>
                   <div className="text-xl font-bold text-heading leading-tight">
                     <AnimatedCounter end={100} suffix="%" />
                   </div>
                   <div className="text-[9px] text-slate-400 uppercase font-extrabold">Retours tracés</div>
                </div>
             </div>
          </div>
        </div>

          

        {/* Cas Client Détaillé */}
        <div className="max-w-6xl mx-auto mt-20 animate-slide-up relative z-10" style={{ animationDelay: '0.7s' }}>
           <div className="bg-white rounded-[40px] p-8 lg:p-14 border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden relative cursor-default group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-110" />
              
              <div className="flex items-center gap-3 mb-10 relative z-10">
                 <div className="px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100 text-[10px] font-extrabold text-primary uppercase tracking-widest">Étude de Cas</div>
                 <div className="text-sm font-bold text-slate-400">Grosse Marque Mode E-com (800+ CMD/Jour)</div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                 <div>
                    <h3 className="text-2xl lg:text-4xl font-extrabold text-heading mb-6 leading-tight">"Comment ils ont augmenté leur taux de livraison de 28% en 60 jours."</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-10 font-medium">
                       La gestion sur Google Sheets devenait un goulot d'étranglement majeur. Entre les erreurs de saisie, le double appel client et la déconnexion totale avec l'inventaire, le taux de retour engloutissait leur marge nette.
                    </p>
                    
                    <div className="space-y-6">
                       <div className="flex gap-4 p-4 rounded-3xl bg-slate-50 border border-slate-100 group/avant transition-colors hover:bg-slate-100/50">
                          <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center shrink-0 border border-red-100 text-red-500 mt-0.5">
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                          </div>
                          <div>
                             <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">Avant RiseManager</div>
                             <p className="text-[13px] font-semibold text-slate-600 leading-snug">Taux de livraison bloqué à 54%, retours injustifiés et aucune visibilité sur les performances des téléopérateurs ou livreurs.</p>
                          </div>
                       </div>
                       <div className="flex gap-4 p-4 rounded-3xl bg-green-50 border border-green-100 shadow-sm relative overflow-hidden group/apres">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 blur-2xl rounded-full" />
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 border border-green-200 text-green-600 mt-0.5 shadow-sm relative z-10">
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <div className="relative z-10">
                             <div className="text-[10px] font-extrabold text-green-600 uppercase tracking-widest mb-1.5">Avec RiseManager</div>
                             <p className="text-[13px] font-bold text-slate-800 leading-snug">Taux propulsé à 82% grâce au workflow de confirmation natif, et un blocage intelligent des numéros à risque.</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4 lg:gap-6">
                    <div className="bg-slate-50 hover:bg-white transition-colors duration-500 rounded-[32px] p-8 border border-slate-100 hover:shadow-2xl hover:shadow-blue-200/20 flex flex-col justify-center">
                       <div className="text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-2 tracking-tighter">
                          +28<span className="text-2xl text-slate-400">%</span>
                       </div>
                       <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-2">Taux Livraison</div>
                       <div className="w-10 h-1 bg-green-500 rounded-full" />
                    </div>
                    <div className="bg-slate-50 hover:bg-white transition-colors duration-500 rounded-[32px] p-8 border border-slate-100 hover:shadow-2xl hover:shadow-blue-200/20 flex flex-col justify-center relative overflow-hidden">
                       <div className="text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-2 tracking-tighter relative z-10">
                          -40<span className="text-2xl text-slate-400">%</span>
                       </div>
                       <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5 relative z-10">D'Erreurs Colis</div>
                       <div className="text-[9px] text-slate-400 italic relative z-10">À la préparation</div>
                    </div>
                    
                    <a href="#demo" className="col-span-2 block bg-primary text-white rounded-[32px] p-8 lg:p-10 shadow-xl shadow-primary/30 flex items-center justify-between overflow-hidden relative group/action transition-transform hover:-translate-y-1">
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 translate-x-[-100%] group-hover/action:translate-x-[100%] transition-transform duration-1000" />
                       <div className="relative z-10">
                          <div className="text-[10px] font-extrabold text-blue-200 uppercase tracking-widest mb-2">Passez au niveau supérieur</div>
                          <div className="text-2xl lg:text-3xl font-extrabold">Exigez vous aussi <br className="hidden sm:block"/>ces résultats.</div>
                       </div>
                       <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm relative z-10 group-hover/action:scale-110 transition-transform">
                          <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                       </div>
                    </a>
                 </div>
              </div>
           </div>
        </div>

        <div className="flex justify-center mt-20 animate-slide-up" style={{ animationDelay: '0.8s' }}>
           <div className="w-1 h-32 bg-gradient-to-b from-slate-200 to-transparent rounded-full" />
        </div>

      </div>
    </section>
  );
};

export default Preuve;
