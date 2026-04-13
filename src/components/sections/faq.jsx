import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const questions = [
        {
            q: "Est-ce que RiseManager est adapté au marché africain ?",
            a: "Absolument. RiseManager a été construit spécifiquement pour le COD (Cash on Delivery) en Afrique. Nous gérons les Wilayas, les communes, les spécificités logistiques locales et même les blacklists partagées entre marchands africains."
        },
        {
            q: "Est-ce que je peux gérer plusieurs agents ?",
            a: "Oui. Vous pouvez créer des accès personnalisés pour vos agents de confirmation, vos préparateurs de commande et vos livreurs. Chaque action est tracée pour une transparence totale de votre équipe."
        },
        {
            q: "Est-ce que le système gère les retours ?",
            a: "C'est l'un de nos points forts. RiseManager suit chaque colis retourné, identifie la cause (refus, injoignable, etc.) et vous permet de réintégrer le stock en un clic ou de blacklister les clients abusifs."
        },
        {
            q: "Est-ce que je peux voir ma vraie rentabilité ?",
            a: "Oui, au centime près. Notre module de décomposition de profit calcule automatiquement votre CA moins les frais de livraison, le coût d'achat du produit, les frais publicitaires (Facebook/TikTok) et vos charges fixes."
        },
        {
            q: "Est-ce que RiseManager remplace Excel ?",
            a: "RiseManager est l'évolution d'Excel. Il garde la simplicité de lecture mais ajoute l'automatisation, la synchronisation en temps réel, l'historique des modifications et l'intelligence de stock que le tableur ne peut pas offrir."
        },
        {
            q: "Est-ce qu’il y a un essai gratuit ?",
            a: "Oui, vous pouvez tester l'intégralité des fonctionnalités de RiseManager gratuitement pendant 14 jours. Aucune carte bancaire n'est requise pour commencer à structurer votre business."
        },
        {
            q: "Est-ce qu’il y a un accompagnement ?",
            a: "Nous ne vendons pas qu'un logiciel. Notre équipe basée en Afrique vous accompagne pour le paramétrage initial et nos experts sont disponibles par WhatsApp et téléphone pour vous aider à optimiser vos processus."
        },
        {
            q: "Est-ce que RiseManager fonctionne avec les autres services Rise ?",
            a: "RiseManager est le cœur de l'écosystème. Il se synchronise nativement avec RiseCart (boutique), RiseConfirm (outsourcing) et FBR (data collective) pour créer une infrastructure e-commerce imbattable."
        },
        {
            q: "RiseManager s'intègre-t-il avec les sociétés de livraison en Afrique ?",
            a: "Oui ! RiseManager est connecté via API aux principaux transporteurs locaux (Yalidine, ZR Express, Maystro, Guepex, DHD...). Générez vos bordereaux, expédiez vos commandes et suivez tous les statuts en temps réel, sans jamais quitter la plateforme."
        },
        {
            q: "Comment garantissez-vous la sécurité de mes données (clients, CA) ?",
            a: "La confidentialité est absolue. Vos données sont chiffrées et stockées sur des serveurs cloud hautement sécurisés. De plus, notre système de rôles granulaires empêche vos agents de faire des exports non autorisés (ex: téléchargement de base de données) et bloque l'accès à vos chiffres financiers."
        },
        {
            q: "Comment fonctionne votre support client ?",
            a: "Nous assurons un suivi Premium avec une équipe totalement basée en Afrique. Oubliez les adresses mails lentes : vous avez un accès direct à vos conseillers par WhatsApp ou téléphone pour résoudre n'importe qu'elle situation en un temps record."
        }
    ];

    return (
        <section className="py-24 lg:py-40 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500" id="faq">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Questions Fréquentes</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight animate-slide-up">
                        Des réponses claires pour <br />
                        <span className="text-primary italic">passer à l'action.</span>
                    </h2>
                </div>

                {/* Accordion List */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {questions.map((faq, i) => (
                        <div 
                            key={i} 
                            className={`group border rounded-[32px] transition-all duration-500 animate-slide-up ${openIndex === i ? 'bg-[#fbfcfd] dark:bg-slate-900 border-primary/20 dark:border-primary/30 shadow-xl shadow-slate-200/50 dark:shadow-none' : 'bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'}`}
                            style={{ animationDelay: `${0.2 + i * 0.05}s` }}
                        >
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                className="w-full text-left p-6 lg:p-8 flex items-center justify-between gap-6"
                            >
                                <span className={`text-base lg:text-lg font-bold transition-colors ${openIndex === i ? 'text-heading dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-heading dark:group-hover:text-white'}`}>
                                    {faq.q}
                                </span>
                                <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-primary border-primary text-white rotate-180' : 'border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-900 group-hover:border-slate-200 dark:group-hover:border-slate-700'}`}>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                            
                             <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-6 lg:px-8 pb-8 pt-2">
                                    <div className="h-[1px] w-full bg-slate-100 dark:bg-slate-800 mb-6" />
                                    <p className="text-body dark:text-slate-400 leading-relaxed font-medium">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
