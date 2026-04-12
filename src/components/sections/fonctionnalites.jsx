import React, { useState } from 'react';

const Features = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('Tous');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState('2843');
    const [expandedAgent, setExpandedAgent] = useState(null);
    const [isDetailOpenMobile, setIsDetailOpenMobile] = useState(false);

    const agents = [
        { 
            rank: 1, name: 'Anissa H.', volume: 142, confirm: '88%', delivery: '72%', trend: 'up',
            details: { errors: 2, products: 'Mode / Beauté', topSource: 'TikTok' }
        },
        { 
            rank: 2, name: 'Laila S.', volume: 128, confirm: '82%', delivery: '68%', trend: 'up',
            details: { errors: 0, products: 'Cuisine', topSource: 'Facebook' }
        },
        { 
            rank: 3, name: 'Sami K.', volume: 95, confirm: '74%', delivery: '61%', trend: 'down',
            details: { errors: 5, products: 'Électronique', topSource: 'Instagram' }
        }
    ];

    const orders = [
        { 
            id: '2843', 
            name: 'Sami Khitem', 
            status: 'Confirmé', 
            color: 'text-green-600 bg-green-50', 
            amount: '12,500 DA',
            assignee: { name: 'Anissa Hitem', initial: 'AK' },
            note: '"Client confirmé au téléphone, demande livraison après 16h."',
            history: [
                { title: 'Confirmé par agent', time: "Aujourd'hui, 09:12", status: 'complete' },
                { title: 'Appel reçu', time: 'Hier, 18:45', status: 'pending' }
            ]
        },
        { 
            id: '2842', 
            name: 'Amine Dj. ', 
            status: 'En attente', 
            color: 'text-orange-600 bg-orange-50', 
            amount: '8,200 DA',
            assignee: { name: 'Sami K.', initial: 'SK' },
            note: '"En attente de confirmation de la taille de chaussure."',
            history: [
                { title: 'Tentative d\'appel', time: 'Hier, 10:30', status: 'pending' }
            ]
        },
        { 
            id: '2841', 
            name: 'Lydia M. ', 
            status: 'En livraison', 
            color: 'text-blue-600 bg-blue-50', 
            amount: '15,000 DA',
            assignee: { name: 'Bachir V.', initial: 'BV' },
            note: '"Colis confié au livreur. Destination : Oran."',
            history: [
                { title: 'Expédié', time: 'Hier, 14:00', status: 'complete' },
                { title: 'Confirmé', time: '07/04, 11:20', status: 'complete' }
            ]
        },
        { 
            id: '2840', 
            name: 'Bachir V. ', 
            status: 'Retour', 
            color: 'text-red-600 bg-red-50', 
            amount: '5,400 DA',
            assignee: { name: 'Anissa H.', initial: 'AH' },
            note: '"Retour demandé par le client (Taille non conforme)."',
            history: [{ title: 'Retour Initié', time: 'Aujourd\'hui, 11:45', status: 'pending' }]
        },
        { 
            id: '2839', 
            name: 'Faycal R. ', 
            status: 'Confirmé', 
            color: 'text-green-600 bg-green-50', 
            amount: '22,400 DA',
            assignee: { name: 'Laila S.', initial: 'LS' },
            note: '"Commande VIP. Vérification double du packaging."',
            history: [{ title: 'Confirmé', time: 'Hier, 16:20', status: 'complete' }]
        }
    ];

    const filteredOrders = orders.filter(order => {
        const nameMatch = order.name ? order.name.toLowerCase().includes(searchQuery.toLowerCase()) : false;
        const matchesSearch = nameMatch || order.id.includes(searchQuery);
        const matchesStatus = statusFilter === 'Tous' || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const selectedOrder = orders.find(o => o.id === selectedOrderId) || orders[0];

    const DetailSidebar = ({ isMobile }) => (
        <div className={`${isMobile ? 'flex flex-col h-full pointer-events-auto' : 'hidden lg:block w-70 border-l border-slate-50 bg-[#fbfcfd] overflow-auto custom-scrollbar'} p-5 space-y-6 animate-slide-up`} key={`${selectedOrderId}-${isMobile}`}>
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 shrink-0">
                <div className="text-[10px] font-extrabold text-primary uppercase">DÉTAIL CMD #{selectedOrder.id}</div>
                {isMobile && (
                    <button onClick={() => setIsDetailOpenMobile(false)} className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" strokeWidth={2.5} /></svg>
                    </button>
                )}
            </div>

            <div className={`space-y-5 ${isMobile ? 'overflow-y-auto flex-1 custom-scrollbar pr-1' : ''}`}>
                {selectedOrder.assignee && (
                    <div className="space-y-2">
                        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Assignation</div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-[9px] font-bold">{selectedOrder.assignee.initial}</div>
                            <span className="text-[11px] font-bold text-heading">{selectedOrder.assignee.name}</span>
                        </div>
                    </div>
                )}

                {selectedOrder.note && (
                    <div className="space-y-2">
                        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Dernière Note</div>
                        <p className="text-[10px] text-slate-500 bg-white p-3 border border-slate-100 rounded-xl italic leading-relaxed shadow-sm">
                            {selectedOrder.note}
                        </p>
                    </div>
                )}

                {selectedOrder.history && (
                    <div className="space-y-4">
                        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Historique de vie</div>
                        <div className="space-y-4 pl-2 border-l border-slate-100 ml-1 pb-4">
                            {selectedOrder.history.map((event, i) => (
                                <div key={i} className="relative pl-5">
                                    <div className={`absolute top-1 -left-[5.5px] w-2.5 h-2.5 rounded-full border-2 border-white ${event.status === 'complete' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.3)]' : 'bg-slate-200'}`} />
                                    <div className={`text-[9px] font-bold uppercase tracking-tight ${event.status === 'complete' ? 'text-heading' : 'text-slate-500'}`}>{event.title}</div>
                                    <div className="text-[8px] text-slate-400 font-medium">{event.time}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    );

    return (
        <section className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-32 space-y-4 px-4">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading leading-tight animate-slide-up">
                        Une plateforme, <span className="text-primary">un contrôle total</span> <br className="hidden lg:block" /> sur vos opérations
                    </h2>
                    <p className="text-lg text-body leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Découvrez les modules qui transforment votre e-commerce en machine de précision.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto space-y-20 lg:space-y-32">

                    {/* 1. Gestion des commandes - Horizontal Large */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 animate-slide-up px-2 sm:px-0" style={{ animationDelay: '0.2s' }}>
                        <div className="w-full lg:w-2/5 space-y-6">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary border border-blue-100 mb-8">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 11-8 0m8 4v2a2 2 0 11-4 0m4-2V9m-8 2V7a4 4 0 118 0m-8 4v2a2 2 0 114 0m-4-2V9m-4 12h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-extrabold text-heading">Gestion des commandes</h3>
                            <p className="text-body leading-relaxed">
                                Centralisez tous vos canaux de vente. De la réception à la confirmation finale, chaque étape est structurée.
                            </p>
                            <div className="p-4 bg-blue-50/50 rounded-2xl border-l-[3px] border-primary">
                                <p className="text-sm italic text-blue-700 font-medium">
                                    "Chaque commande a un statut, un historique et une logique."
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-3/5 relative group/dashboard">
                            {/* Interactivity Indicator */}
                            <div className="absolute -top-4 -right-2 z-20 bg-primary text-white text-[9px] font-extrabold px-4 py-2 rounded-full shadow-xl shadow-primary/20 flex items-center gap-2 animate-bounce-subtle cursor-default pointer-events-none whitespace-nowrap">
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                DÉMO INTERACTIVE
                            </div>

                            <div className="relative bg-white rounded-[24px] sm:rounded-[40px] border border-slate-100 shadow-2xl overflow-hidden flex flex-col h-[400px] lg:h-[520px]">
                                
                                {/* Top Bar: Search & Filters */}
                                <div className="p-4 sm:p-5 border-b border-slate-50 flex items-center justify-between bg-slate-50/30 gap-4">
                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                        <div className="relative w-full max-w-[280px]">
                                           <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
                                               <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                           </div>
                                           <input 
                                                type="text"
                                                placeholder="Rechercher..."
                                                className="w-full bg-white border border-slate-100 rounded-xl py-2 pl-9 pr-3 text-[11px] text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium shadow-sm"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                            />
                                            {/* Pulse hotspot indicator */}
                                            {!searchQuery && (
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                                </div>
                                            )}
                                            {!searchQuery && (
                                                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-primary opacity-40 animate-pulse hidden sm:block pointer-events-none">
                                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M7 2l12 11.2-5.8.8 3.3 6.1-2.2 1.2-3.3-6.1-4 3.9v-17.1z" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex gap-2 relative">
                                            <button 
                                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                                className="px-3 sm:px-4 py-2 bg-white border border-slate-100 rounded-xl text-[10px] sm:text-[11px] font-bold text-slate-500 hover:border-primary/30 transition-all flex items-center gap-2 min-w-[100px] sm:min-w-[140px] justify-between shadow-sm"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${statusFilter === 'Tous' ? 'bg-slate-400' : 'bg-primary'}`} />
                                                    <span className="hidden xs:inline">{statusFilter === 'Tous' ? 'Statuts' : statusFilter}</span>
                                                    <span className="xs:hidden">{statusFilter === 'Tous' ? 'Filtrer' : (statusFilter === 'En livraison' ? 'Livr.' : (statusFilter === 'En attente' ? 'Att.' : statusFilter))}</span>
                                                </div>
                                                <svg className={`w-3 h-3 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeWidth={2.5} /></svg>
                                            </button>

                                            {isFilterOpen && (
                                                <div className="absolute top-full right-0 sm:left-0 mt-2 w-[160px] sm:w-[180px] bg-white rounded-2xl border border-slate-100 shadow-2xl z-50 overflow-hidden animate-slide-up" style={{ animationDuration: '0.2s' }}>
                                                    {['Tous', 'Confirmé', 'En attente', 'En livraison', 'Retour'].map((status) => (
                                                        <div 
                                                            key={status}
                                                            onClick={() => {
                                                                setStatusFilter(status);
                                                                setIsFilterOpen(false);
                                                            }}
                                                            className={`px-4 py-3 text-[11px] font-bold cursor-pointer transition-colors flex items-center gap-3 ${statusFilter === status ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'}`}
                                                        >
                                                            <div className={`w-1.5 h-1.5 rounded-full ${statusFilter === status ? 'bg-white' : (status === 'Tous' ? 'bg-slate-300' : 'bg-primary/40')}`} />
                                                            {status === 'Tous' ? 'Tous les statuts' : status}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="px-4 py-2 bg-primary text-white rounded-xl text-[10px] font-bold shadow-lg shadow-primary/20 cursor-pointer hover:bg-primary-hover transition-colors hidden sm:block">Exporter</div>
                                </div>

                                <div className="flex flex-1 overflow-hidden relative">
                                    {/* Table Content */}
                                    <div className="flex-1 overflow-auto custom-scrollbar">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="sticky top-0 bg-white/90 backdrop-blur-md z-10 shadow-sm shadow-slate-100">
                                                <tr className="border-b border-slate-50">
                                                    <th className="hidden sm:table-cell p-4 sm:p-5 text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest">Commande</th>
                                                    <th className="p-4 sm:p-5 text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest">Client</th>
                                                    <th className="p-4 sm:p-5 text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest">Statut</th>
                                                    <th className="hidden sm:table-cell p-4 sm:p-5 text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Montant</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50/50">
                                                {filteredOrders.length > 0 ? (
                                                    filteredOrders.map((order, i) => (
                                                        <tr 
                                                            key={i} 
                                                            onClick={() => {
                                                                setSelectedOrderId(order.id);
                                                                if (window.innerWidth < 1024) setIsDetailOpenMobile(true);
                                                            }}
                                                            className={`hover:bg-slate-50/80 transition-all cursor-pointer group/row ${selectedOrderId === order.id ? 'bg-blue-50/40' : ''}`}
                                                        >
                                                            <td className="hidden sm:table-cell p-4 sm:p-5 text-[12px] font-bold text-slate-500 uppercase tracking-tight">#{order.id}</td>
                                                            <td className="p-4 sm:p-5">
                                                                <div className="text-[12px] font-bold text-heading group-hover/row:text-primary transition-colors">{order.name}</div>
                                                            </td>
                                                            <td className="p-4 sm:p-5">
                                                                <span className={`px-2.5 py-1 rounded-lg text-[9px] font-extrabold uppercase ${order.color} shadow-sm border border-transparent group-hover/row:border-current/10`}>
                                                                    {order.status}
                                                                </span>
                                                            </td>
                                                            <td className="hidden sm:table-cell p-4 sm:p-5 text-[12px] font-bold text-heading text-right">{order.amount}</td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="4" className="p-10 text-center text-[12px] text-slate-400 italic">Aucun résultat...</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Sidebar Detail (Desktop) */}
                                    <DetailSidebar isMobile={false} />

                                    {/* Mobile Detail Overlay */}
                                    {isDetailOpenMobile && (
                                        <div className="absolute inset-0 z-50 bg-white flex flex-col lg:hidden animate-slide-up">
                                            <DetailSidebar isMobile={true} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2 & 3: Stock & Scan - Grid 2 columns */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Stock 2.0 */}
                        <div className="bg-slate-50/50 rounded-[40px] p-8 lg:p-12 border border-slate-100 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 border border-cyan-100">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-extrabold text-heading">Gestion de stock 2.0</h3>
                            </div>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm mb-10">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">PRODUIT : Basket modèle X</div>
                                        <div className="text-xs font-bold text-heading">Variante Noir / 42</div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="text-center">
                                            <div className="text-sm font-extrabold text-blue-600">7</div>
                                            <div className="text-[8px] font-bold text-slate-400 uppercase">DISPO</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-sm font-extrabold text-orange-600">2</div>
                                            <div className="text-[8px] font-bold text-slate-400 uppercase">RÉSERVÉ</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-slate-50">
                                    <div className="flex items-center gap-2 text-[10px] text-red-500 font-bold bg-red-50 px-3 py-1 rounded-full w-fit">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                        Alerte : Ruture imminente sur 1 variantes
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm italic text-cyan-700 font-medium">
                                "Une variante n'est pas un détail. C'est une unité de vérité."
                            </p>
                        </div>

                        {/* Scan de la vérité */}
                        <div className="bg-slate-50/50 rounded-[40px] p-8 lg:p-12 border border-slate-100 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 border border-indigo-100">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-extrabold text-heading">Le scan de la vérité</h3>
                            </div>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm mb-10 font-mono">
                                <div className="flex justify-between items-center text-[10px] mb-4">
                                    <span className="text-primary font-bold">SCANNER ACTIF</span>
                                    <span className="text-green-500 font-bold">SUCCÈS</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-slate-400 uppercase tracking-widest text-[9px]">Colis</span>
                                        <span className="text-heading font-bold">#2843-984</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-slate-400 uppercase tracking-widest text-[9px]">Status</span>
                                        <span className="text-blue-600 font-bold">REÇU AU DÉPÔT</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-slate-400 uppercase tracking-widest text-[9px]">Agent</span>
                                        <span className="text-heading font-semibold">Bachir V.</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm italic text-indigo-700 font-medium">
                                "Chaque scan met le système face à la réalité."
                            </p>
                        </div>
                    </div>

                    {/* 4 & 5: Equipes & Risque - Grid 2 columns */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Suivi Equipes */}
                        <div className="bg-slate-50/50 rounded-[40px] p-8 lg:p-12 border border-slate-100 animate-slide-up relative group/team" style={{ animationDelay: '0.5s' }}>
                            {/* Interactivity Indicator */}
                            <div className="absolute -top-3 -right-2 z-20 bg-violet-600 text-white text-[8px] font-extrabold px-3 py-1.5 rounded-full shadow-lg shadow-violet-200 flex items-center gap-2 animate-bounce-subtle">
                                <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                                ANALYSE INTERACTIVE
                            </div>

                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 border border-violet-100">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-extrabold text-heading">Suivi des équipes</h3>
                            </div>

                            <div className="bg-white rounded-[24px] border border-slate-100 shadow-xl overflow-hidden mb-10">
                                <div className="p-4 bg-slate-50/50 border-b border-slate-100 flex justify-between items-center text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">
                                    <span>Classement Agents (Aujourd'hui)</span>
                                    <span>Productivité</span>
                                </div>
                                <div className="divide-y divide-slate-50">
                                    {agents.map((agent, i) => (
                                        <div key={i} className="group">
                                            <div 
                                                onClick={() => setExpandedAgent(expandedAgent === i ? null : i)}
                                                className={`p-4 flex items-center justify-between hover:bg-slate-50 transition-all cursor-pointer ${expandedAgent === i ? 'bg-slate-50/50' : ''}`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${i === 0 ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-500'}`}>
                                                        {agent.rank}
                                                    </div>
                                                    <div>
                                                        <div className="text-[11px] font-bold text-heading">{agent.name}</div>
                                                        <div className="text-[9px] text-slate-400 font-medium">{agent.volume} traités</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-6">
                                                    <div className="text-right">
                                                        <div className="text-[10px] font-extrabold text-green-600">{agent.confirm}</div>
                                                        <div className="text-[7px] text-slate-400 uppercase font-bold tracking-tighter">Conf.</div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-[10px] font-extrabold text-blue-600">{agent.delivery}</div>
                                                        <div className="text-[7px] text-slate-400 uppercase font-bold tracking-tighter">Deliv.</div>
                                                    </div>
                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all relative ${expandedAgent === i ? 'rotate-180 bg-primary text-white' : (agent.trend === 'up' ? 'text-green-500 bg-green-50' : 'text-red-500 bg-red-50')}`}>
                                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                        {/* Click nudge for first item */}
                                                        {i === 0 && expandedAgent === null && (
                                                            <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-violet-500 rounded-full animate-pulse shadow-sm shadow-violet-200" />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Expandable Content */}
                                            <div className={`overflow-hidden transition-all duration-300 bg-slate-50/30 ${expandedAgent === i ? 'max-h-[120px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'}`}>
                                                <div className="p-4 grid grid-cols-3 gap-4">
                                                    <div className="space-y-1">
                                                        <div className="text-[7px] font-bold text-slate-400 uppercase">Top Source</div>
                                                        <div className="text-[10px] font-bold text-slate-700">{agent.details.topSource}</div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className="text-[7px] font-bold text-slate-400 uppercase">Spécialité</div>
                                                        <div className="text-[10px] font-bold text-slate-700">{agent.details.products}</div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className="text-[7px] font-bold text-slate-400 uppercase">Erreurs</div>
                                                        <div className={`text-[10px] font-bold ${agent.details.errors === 0 ? 'text-green-600' : 'text-red-600'}`}>{agent.details.errors}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-sm italic text-violet-700 font-medium font-outfit">
                                "Tu ne pilotes pas une équipe au ressenti. Tu la pilotes avec des chiffres."
                            </p>
                        </div>

                        {/* Blacklist */}
                        <div className="bg-slate-50/50 rounded-[40px] p-8 lg:p-12 border border-slate-100 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 border border-red-100">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-extrabold text-heading">Gestion du risque</h3>
                            </div>
                            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm mb-10 overflow-hidden relative">
                                <div className="absolute top-0 right-0 px-3 py-1 bg-red-600 text-[8px] font-extrabold text-white rounded-bl-xl tracking-widest">RISQUE ÉLEVÉ</div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-heading">Yassine M.</div>
                                        <div className="text-[10px] text-slate-400">0772 122 3XX</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-bold">
                                    <div className="text-red-600 tracking-wider">COMMANDE PASSÉE : 3</div>
                                    <div className="text-red-700 tracking-wider uppercase">SURVEILLANCE ACTIVE</div>
                                </div>
                            </div>
                            <p className="text-sm italic text-red-700 font-medium">
                                "Bloque les clients à risque avant qu’ils ne te coûtent de l’argent."
                            </p>
                        </div>
                    </div>

                    {/* 6. Finances & Analytics - Horizontal Large Inverse */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 animate-slide-up" style={{ animationDelay: '0.7s' }}>
                        <div className="w-full lg:w-2/5 space-y-8">
                            <div className="space-y-6">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 border border-emerald-100">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-extrabold text-heading">Finances & Profit net réel</h3>
                                <p className="text-body leading-relaxed">
                                    Ne devinez plus votre rentabilité. Nous intégrons tous les coûts pour vous donner un chiffre net quotidien et précis.
                                </p>
                            </div>

                            {/* Arguments Checklist */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'Traçabilité totale',
                                    'Audit des frais de livraison',
                                    'Rentabilité en temps réel',
                                    'Dépenses publicitaires',
                                    'Vision réelle de la marge'
                                ].map((arg, i) => (
                                    <div key={i} className="flex items-center gap-2 group">
                                        <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                                            <svg className="w-3 h-3 text-emerald-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-[11px] font-bold text-slate-600 truncate">{arg}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 bg-emerald-50/50 rounded-2xl border-l-[3px] border-emerald-500">
                                <p className="text-sm italic text-emerald-700 font-medium font-outfit">
                                    "Chaque dinar a une destination. Chaque fuite doit être visible."
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/5">
                            <div className="relative bg-white rounded-[32px] border border-slate-100 shadow-2xl p-6 lg:p-10 overflow-hidden">
                                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-10 text-center sm:text-left">DÉCOMPOSITION PÉDAGOGIQUE DU PROFIT</div>

                                <div className="relative">
                                    {/* Main Flow: Vente to Net */}
                                    <div className="flex flex-col sm:flex-row items-center justify-between relative group gap-8 sm:gap-0">
                                        
                                        {/* Start: Vente */}
                                        <div className="text-center z-10 transition-transform group-hover:scale-105 shrink-0">
                                            <div className="w-16 h-16 sm:w-14 sm:h-14 bg-blue-500 rounded-[20px] sm:rounded-2xl flex items-center justify-center text-white font-extrabold text-base sm:text-sm shadow-xl sm:shadow-lg mb-2">VENTE</div>
                                            <div className="text-[10px] sm:text-[9px] font-extrabold text-slate-400">100%</div>
                                        </div>

                                        {/* Mobile Vertical / Desktop Horizontal Line */}
                                        <div className="flex-1 w-px h-8 sm:w-auto sm:h-px bg-slate-100 relative sm:mx-4">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 sm:py-0 text-[10px] sm:text-[8px] font-bold text-red-500 whitespace-nowrap">
                                                - Dépenses
                                            </div>
                                        </div>

                                        {/* Expense Icons Group */}
                                        <div className="flex flex-row gap-4 sm:gap-2 lg:gap-4 z-10 py-4 sm:py-0">
                                            {[
                                                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 11V7a4 4 0 11-8 0m8 4v2a2 2 0 11-4 0m4-2V9m-8 2V7a4 4 0 118 0m-8 4v2a2 2 0 114 0m-4-2V9m-4 12h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, bg: 'bg-orange-50 text-orange-600' },
                                                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /></svg>, bg: 'bg-rose-50 text-rose-600' },
                                                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>, bg: 'bg-indigo-50 text-indigo-600' }
                                            ].map((item, i) => (
                                                <div key={i} className="text-center opacity-80 sm:opacity-40 group-hover:opacity-100 transition-all hover:scale-110">
                                                    <div className={`w-12 h-12 sm:w-10 sm:h-10 ${item.bg} rounded-2xl sm:rounded-xl flex items-center justify-center border border-current/10 shadow-sm`}>
                                                        {item.icon}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Mobile Vertical / Desktop Horizontal Line 2 */}
                                        <div className="flex-1 w-px h-8 sm:w-auto sm:h-px bg-slate-100 relative sm:mx-4" />

                                        {/* End: Net */}
                                        <div className="text-center z-10 transition-transform group-hover:scale-105 shrink-0">
                                            <div className="w-16 h-16 sm:w-14 sm:h-14 bg-emerald-500 rounded-[20px] sm:rounded-2xl flex items-center justify-center text-white font-extrabold text-base sm:text-sm shadow-xl sm:shadow-lg shadow-emerald-200 mb-2">= NET</div>
                                            <div className="text-[10px] sm:text-[9px] font-extrabold text-emerald-600 tracking-wider">32.4%</div>
                                        </div>
                                    </div>
                                </div>

                                    {/* Specialized Sub-block: Audit des frais */}
                                    <div className="pt-8 border-t border-slate-50 mt-8">
                                        <div className="bg-emerald-50/30 rounded-2xl p-5 border border-emerald-50 group/audit transition-all hover:bg-emerald-50/50">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white shadow-sm">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[11px] font-extrabold text-heading uppercase tracking-wide">Audit des frais de livraison</h4>
                                                        <p className="text-[9px] text-emerald-600 font-medium font-outfit">Recouvrement automatisé des écarts financiers.</p>
                                                    </div>
                                                </div>
                                                <div className="text-[10px] font-bold text-emerald-700 bg-white px-3 py-1 rounded-full border border-emerald-100 shadow-sm animate-pulse-slow">Actif</div>
                                            </div>
                                            <div className="text-[9px] text-slate-500 leading-relaxed italic border-l-2 border-emerald-200 pl-3">
                                                RiseManager compare chaque centime facturé par vos livreurs avec les tarifs contractuels. Chaque anomalie est signalée.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    {/* 7. Analytics & Pilotage - Horizontal Large */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                        <div className="w-full lg:w-2/5 space-y-6">
                            <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center text-white border border-slate-900 mb-8">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-extrabold text-heading">Analytics & Pilotage</h3>
                            <p className="text-body leading-relaxed">
                                Transformez vos données en décisions. Suivez l'évolution de vos ventes, identifiez vos produits stars et mesurez la rentabilité de chaque source publicitaire.
                            </p>
                            <div className="p-4 bg-slate-900 rounded-2xl border-l-[3px] border-primary shadow-lg shadow-slate-200/50">
                                <p className="text-sm italic text-slate-300 font-medium font-outfit">
                                    "Ce que tu ne mesures pas finit toujours par te coûter cher."
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-3/5">
                            <div className="relative bg-slate-50 rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden flex flex-col h-[400px]">
                                {/* Dashboard Header */}
                                <div className="p-5 border-b border-slate-200 bg-white flex justify-between items-center">
                                    <div className="text-[10px] font-extrabold text-slate-800 uppercase tracking-widest">Dashboard Stratégique</div>
                                    <div className="flex gap-2">
                                        <div className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[9px] font-bold text-slate-500">Derniers 30 jours</div>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 bg-white overflow-hidden space-y-8">
                                    {/* Small KPI Cards */}
                                    <div className="grid grid-cols-3 gap-4">
                                        {[
                                            { label: 'Conversion', val: '4.2%', trend: '+0.8%' },
                                            { label: 'Panier Moyen', val: '14,200 DA', trend: '+12%' },
                                            { label: 'Taux Livraison', val: '78.2%', trend: '-2%' }
                                        ].map((kpi, i) => (
                                            <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                                <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">{kpi.label}</div>
                                                <div className="flex items-end justify-between">
                                                    <div className="text-sm font-extrabold text-slate-900">{kpi.val}</div>
                                                    <div className={`text-[7px] font-bold ${kpi.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{kpi.trend}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Main Comparison Graph Area */}
                                    <div className="flex gap-6 h-full">
                                        <div className="flex-1">
                                            <div className="text-[9px] font-bold text-slate-400 uppercase mb-4">Évolution des ventes</div>
                                            <div className="relative h-28 w-full">
                                                {/* Simulated Chart Lines */}
                                                <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                                                    <path d="M0,80 L40,75 L80,90 L120,60 L160,65 L200,40 L240,45 L280,20 L320,30 L360,10 L400,15" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
                                                    <path d="M0,80 L40,75 L80,90 L120,60 L160,65 L200,40 L240,45 L280,20 L320,30 L360,10 L400,15 L400,100 L0,100 Z" fill="url(#grad1)" opacity="0.1" />
                                                    <defs>
                                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                                            <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                                                            <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0 }} />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="w-40 border-l border-slate-50 pl-6 hidden md:block">
                                            <div className="text-[9px] font-bold text-slate-400 uppercase mb-4">Top Produits</div>
                                            <div className="space-y-4">
                                                {[
                                                    { name: 'Basket X1', p: '88%' },
                                                    { name: 'Smart G2', p: '72%' },
                                                    { name: 'PowerHub', p: '45%' }
                                                ].map((item, i) => (
                                                    <div key={i} className="space-y-1">
                                                        <div className="flex justify-between text-[8px] font-bold">
                                                            <span>{item.name}</span>
                                                            <span className="text-primary">{item.p}</span>
                                                        </div>
                                                        <div className="h-1 bg-slate-50 rounded-full overflow-hidden">
                                                            <div className="h-full bg-primary" style={{ width: item.p }} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
