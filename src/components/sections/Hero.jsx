import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      className="relative pt-32 pb-20 lg:pt-32 lg:pb-40 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Blobs for that premium feel */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-reveal-container">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-primary font-medium text-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-100 text-[10px]">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
              </span>
              Conçu pour le marché algérien
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.15] text-heading animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Pilote ton e-commerce <br />
                <span className="text-heading">avec un vrai système.</span> <br />
                <span className="text-primary">Pas avec des fichiers <br /> dispersés.</span>
              </h1>
              <p className="text-lg lg:text-xl text-body max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
                RiseManager centralise commandes, stock, logistique, équipe et rentabilité dans une seule interface pensée pour le terrain algérien.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-2xl font-semibold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95">
                Démarrer l'essai gratuit
              </button>
              <button className="px-8 py-4 bg-white hover:bg-slate-50 text-primary border border-slate-100 rounded-2xl font-semibold transition-all hover:-translate-y-1">
                Voir une démo &rarr;
              </button>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              {[
                "Sans carte bancaire",
                "Mise en route rapide",
                "Support basé en Algérie"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Dashboard Mockup */}
          <div
            className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0 transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
            }}
          >

            {/* Dashboard Container */}
            <div
              className="relative w-full max-w-[500px] lg:max-w-[550px] aspect-[4/3] bg-gradient-to-br from-blue-50/50 to-white rounded-[32px] lg:rounded-[40px] border border-blue-100/50 shadow-2xl p-6 lg:p-10 animate-float mx-auto lg:mx-0"
              style={{ transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)` }}
            >

              {/* Internal Mockup Content */}
              <div className="space-y-6 lg:space-y-8">
                <div className="flex justify-between items-center">
                  <div className="text-[9px] lg:text-[10px] font-bold text-slate-400 tracking-wider uppercase">Vue d'ensemble - Direct</div>
                </div>

                {/* Sub Cards */}
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  <div className="space-y-1">
                    <div className="text-[10px] lg:text-[11px] text-slate-500 font-medium">Ventes Aujourd'hui</div>
                    <div className="text-xl lg:text-2xl font-bold text-primary">42,500 DA</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] lg:text-[11px] text-slate-500 font-medium">Retours</div>
                    <div className="text-xl lg:text-2xl font-bold text-red-500">12%</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="flex items-end gap-2 lg:gap-3 h-32 lg:h-40 pt-4 text-reveal-container">
                  {[40, 65, 55, 95, 80, 70].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t-lg transition-all duration-1000 ${i === 3 ? 'bg-primary' : 'bg-blue-100'}`}
                      style={{ height: `${h}%`, transitionDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Cards */}

              {/* Orders Card */}
              <div
                className="absolute -top-6 -left-4 lg:-top-10 lg:-left-20 glass p-3 lg:p-6 rounded-2xl lg:rounded-3xl shadow-premium border border-white/50 animate-float-delayed flex items-center gap-3 lg:gap-4 min-w-[140px] lg:min-w-[180px] z-20"
                style={{ transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)` }}
              >
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-blue-100 rounded-xl lg:rounded-2xl flex items-center justify-center">
                  <svg className="w-4 h-4 lg:w-6 lg:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[8px] lg:text-[10px] font-bold text-slate-400 uppercase">Commandes</div>
                  <div className="text-sm lg:text-xl font-bold text-heading">1,247</div>
                </div>
              </div>

              {/* Stock Card */}
              <div
                className="absolute top-1/2 -right-4 lg:-right-16 -translate-y-1/2 glass p-3 lg:p-4 rounded-2xl lg:rounded-3xl shadow-premium border border-white/50 animate-float-slow flex items-center gap-3 lg:gap-4 min-w-[120px] lg:min-w-[160px] z-20"
                style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-purple-50 rounded-lg lg:rounded-xl flex items-center justify-center">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <div className="text-[8px] lg:text-[10px] font-bold text-slate-400 uppercase">Stock</div>
                  <div className="text-sm lg:text-lg font-bold text-heading">98%</div>
                </div>
              </div>

              {/* Profit Card */}
              <div
                className="absolute -bottom-6 right-2 lg:-bottom-10 lg:-right-8 glass p-3 lg:p-5 rounded-2xl lg:rounded-3xl shadow-premium border border-white/50 animate-float flex items-center gap-3 lg:gap-5 min-w-[160px] lg:min-w-[220px] z-20"
                style={{ transform: `translate(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px)` }}
              >
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-teal-50 rounded-xl lg:rounded-2xl flex items-center justify-center">
                  <svg className="w-4 h-4 lg:w-6 lg:h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[8px] lg:text-[10px] font-bold text-slate-400 uppercase">Profit</div>
                  <div className="text-sm lg:text-xl font-bold text-heading">284,500 DA</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite 1s; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite 0.5s; }
        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
