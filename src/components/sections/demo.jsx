import React, { useState } from 'react';

const tabs = [
    { id: 'Dashboard', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'Commandes', label: 'Commandes', icon: 'M16 11V7a4 4 0 11-8 0m8 4v2a2 2 0 11-4 0m4-2V9m-8 2V7a4 4 0 118 0m-8 4v2a2 2 0 114 0m-4-2V9m-4 12h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 'Stock', label: 'Stock', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { id: 'Clients', label: 'Clients', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { id: 'Finances', label: 'Finances', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'Analytics', label: 'Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { id: 'Blacklist', label: 'Blacklist', icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' }
];

const Demo = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [searchQuery, setSearchQuery] = useState('');

    // Interactive State Management
    const [orders, setOrders] = useState([
        { id: '#2843', name: 'Sami K.', status: 'Confirmé', color: 'bg-emerald-50 text-emerald-600', amount: '12,500 DA' },
        { id: '#2842', name: 'Amine Dj.', status: 'En Attente', color: 'bg-orange-50 text-orange-600', amount: '8,200 DA' },
        { id: '#2841', name: 'Lydia M.', status: 'En Livraison', color: 'bg-blue-50 text-blue-600', amount: '15,000 DA' },
        { id: '#2840', name: 'Bachir V.', status: 'Retour', color: 'bg-rose-50 text-rose-600', amount: '5,400 DA' }
    ]);

    const [clients, setClients] = useState([
        { id: 1, name: 'Yassine M.', phone: '0770 12 XX XX', score: 'Top Client', color: 'text-emerald-500' },
        { id: 2, name: 'Mehdi B.', phone: '0555 98 XX XX', score: 'Litige potential', color: 'text-rose-500' },
        { id: 3, name: 'Sarah L.', phone: '0661 44 XX XX', score: 'Nouveau', color: 'text-blue-500' }
    ]);

    // Handlers
    const deleteOrder = (id) => setOrders(orders.filter(o => o.id !== id));
    const deleteClient = (id) => setClients(clients.filter(c => c.id !== id));

    const addOrder = () => {
        const newId = `#${Math.floor(Math.random() * 9000) + 1000}`;
        setOrders([{ id: newId, name: 'Nouveau Client', status: 'En Attente', color: 'bg-orange-50 text-orange-600', amount: '0 DA' }, ...orders]);
    };

    const renderMockup = () => {
        const filteredOrders = orders.filter(o => o.name.toLowerCase().includes(searchQuery.toLowerCase()) || o.id.includes(searchQuery));
        const filteredClients = clients.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));

        switch (activeTab) {
            case 'Dashboard':
                return (
                    <div className="space-y-6 animate-fadeIn">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: 'Ventes du jour', val: '124,500 DA', color: 'text-primary' },
                                { label: 'Commandes', val: orders.length.toString(), color: 'text-slate-900' },
                                { label: 'Taux Livraison', val: '78%', color: 'text-emerald-500' },
                                { label: 'Profit Net', val: '32,100 DA', color: 'text-blue-600' }
                            ].map((kpi, i) => (
                                <div key={i} className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">{kpi.label}</div>
                                    <div className={`text-lg font-extrabold ${kpi.color}`}>{kpi.val}</div>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 bg-white rounded-[24px] border border-slate-100 shadow-sm h-56 relative overflow-hidden group/chart">
                            <div className="flex justify-between items-center mb-8">
                                <div className="text-[11px] font-extrabold text-[#1e293b] uppercase tracking-tight">Performance Hebdomadaire</div>
                                <div className="flex gap-1.5 items-center">
                                    <div className="w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/30" />
                                    <div className="w-2 h-2 rounded-full bg-slate-200" />
                                </div>
                            </div>

                            {/* Grid Lines */}
                            <div className="absolute inset-x-6 top-20 bottom-12 flex flex-col justify-between pointer-events-none">
                                {[1, 2, 3].map(li => <div key={li} className="w-full h-[1px] bg-slate-50" />)}
                            </div>

                            <div className="relative h-28 flex items-end gap-3 px-2">
                                {[
                                    { d: 'L', h: 42 }, { d: 'M', h: 68 }, { d: 'M', h: 45 },
                                    { d: 'J', h: 92 }, { d: 'V', h: 74 }, { d: 'S', h: 88 }, { d: 'D', h: 56 }
                                ].map((day, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-3">
                                        <div className="relative w-full h-24 flex items-end justify-center group/bar">
                                            {/* Bar Background */}
                                            <div className="absolute inset-0 bg-slate-50/50 rounded-t-md" />
                                            {/* Data Bar */}
                                            <div
                                                className={`w-full ${i === 3 ? 'bg-primary shadow-lg shadow-primary/20' : 'bg-primary/20 group-hover/bar:bg-primary/40'} rounded-t-md transition-all duration-1000 ease-out relative overflow-hidden`}
                                                style={{ height: `${day.h}%`, transitionDelay: `${i * 0.05}s` }}
                                            >
                                                {/* Shimmer Effect */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                                            </div>

                                            {/* Tooltip on hover */}
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-all pointer-events-none z-10">
                                                {day.h}%
                                            </div>
                                        </div>
                                        <span className={`text-[10px] font-bold ${i === 3 ? 'text-primary' : 'text-slate-300'}`}>{day.d}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'Commandes':
                return (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="flex items-center justify-between gap-4">
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Chercher ID ou client..."
                                    className="w-full pl-9 pr-4 py-2 bg-white border border-slate-100 rounded-xl text-[11px] focus:outline-none focus:ring-1 focus:ring-primary/30 shadow-sm"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <button onClick={addOrder} className="px-4 py-2 bg-primary text-white text-[11px] font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                                + Ajouter
                            </button>
                        </div>
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                            <table className="w-full text-left text-[11px]">
                                <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 font-bold uppercase tracking-widest text-[9px]">
                                    <tr>
                                        <th className="p-4">ID</th>
                                        <th className="p-4">Client</th>
                                        <th className="p-4">Statut</th>
                                        <th className="p-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {filteredOrders.length > 0 ? filteredOrders.map((row, i) => (
                                        <tr key={row.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="p-4 font-bold text-slate-900">{row.id}</td>
                                            <td className="p-4 font-medium text-slate-600">{row.name}</td>
                                            <td className="p-4 text-[10px]">
                                                <span className={`px-2 py-0.5 rounded-md font-bold ${row.color}`}>{row.status}</span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <button
                                                    onClick={() => deleteOrder(row.id)}
                                                    className="text-rose-400 hover:text-rose-600 p-1.5 hover:bg-rose-50 rounded-lg transition-all"
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth={2} /></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr><td colSpan="4" className="p-10 text-center text-slate-400 italic">Aucun résultat trouvé...</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'Stock':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
                        {[
                            { name: 'Basket modèle X', variants: 'Noir (42), Noir (43), Bleu (42)', stock: 45, alert: false },
                            { name: 'Smart G2 Watch', variants: 'Silver, Gold', stock: 3, alert: true }
                        ].map((prod, i) => (
                            <div key={i} className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-3">
                                <div className="flex justify-between items-start">
                                    <div className="text-sm font-bold text-slate-900">{prod.name}</div>
                                    <div className={`px-2 py-1 rounded-lg text-[10px] font-bold ${prod.alert ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>
                                        {prod.stock} unités
                                    </div>
                                </div>
                                <div className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">{prod.variants}</div>
                                {prod.alert ? (
                                    <div className="pt-2 border-t border-slate-50 flex items-center gap-2 text-[10px] text-red-500 font-bold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                        Alerte : Stock critique
                                    </div>
                                ) : (
                                    <div className="pt-2 border-t border-slate-50 flex items-center gap-2 text-[10px] text-emerald-500 font-bold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Stock optimal
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                );
            case 'Clients':
                return (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Chercher un client..."
                                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-100 rounded-xl text-[11px] focus:outline-none focus:ring-1 focus:ring-primary/30 shadow-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="space-y-3">
                            {filteredClients.length > 0 ? filteredClients.map((client) => (
                                <div key={client.id} className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-extrabold text-[12px]">
                                            {client.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">{client.name}</div>
                                            <div className="text-[10px] text-slate-400">{client.phone}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className={`text-[9px] font-bold uppercase tracking-widest ${client.color} bg-white shadow-sm px-2 py-0.5 rounded-lg border border-slate-50`}>{client.score}</div>
                                        <button onClick={() => deleteClient(client.id)} className="text-slate-300 hover:text-rose-500 p-1.5 hover:bg-rose-50 rounded-lg transition-all">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                </div>
                            )) : (
                                <div className="p-10 text-center text-slate-400 italic">Aucun client trouvé...</div>
                            )}
                        </div>
                    </div>
                );
            case 'Finances':
                return (
                    <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-8 animate-fadeIn text-center">
                        <div className="space-y-2">
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Projection de profit</div>
                            <div className="text-3xl font-black text-emerald-500">+1,420,000 DA</div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
                                <div className="h-full bg-emerald-500" style={{ width: '40%' }} />
                                <div className="h-full bg-blue-500" style={{ width: '30%' }} />
                                <div className="h-full bg-rose-500" style={{ width: '20%' }} />
                                <div className="h-full bg-slate-300" style={{ width: '10%' }} />
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 text-[8px] font-bold uppercase text-slate-400">
                            <div>Vente</div>
                            <div>Livr.</div>
                            <div>Pub</div>
                            <div>Net</div>
                        </div>
                    </div>
                );
            case 'Analytics':
                return (
                    <div className="grid grid-cols-2 gap-4 animate-fadeIn">
                        <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm col-span-2 md:col-span-1">
                            <div className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">Sources de Ventes</div>
                            <div className="space-y-4">
                                {[
                                    { label: 'Facebook Ads', val: '65%', color: 'bg-blue-600' },
                                    { label: 'Instagram', val: '25%', color: 'bg-rose-500' },
                                    { label: 'Direct', val: '10%', color: 'bg-slate-400' }
                                ].map((src, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="flex justify-between text-[10px] font-bold">
                                            <span>{src.label}</span>
                                            <span>{src.val}</span>
                                        </div>
                                        <div className="h-1 bg-slate-50 rounded-full overflow-hidden">
                                            <div className={`h-full ${src.color}`} style={{ width: src.val }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm col-span-2 md:col-span-1 flex flex-col items-center justify-center space-y-4">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">ROI Publicitaire</div>
                            <div className="text-4xl font-black text-primary">x4.2</div>
                            <div className="text-[10px] text-emerald-500 font-bold bg-emerald-50 px-3 py-1 rounded-full">Optimal</div>
                        </div>
                    </div>
                );
            case 'Blacklist':
                return (
                    <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100 shadow-sm animate-fadeIn">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center text-white">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            </div>
                            <div>
                                <div className="text-sm font-bold text-rose-900 uppercase tracking-tight">Vigilance Fraude</div>
                                <div className="text-xs text-rose-600 font-medium">Détection automatique des mauvais payeurs.</div>
                            </div>
                        </div>
                        <div className="space-y-3 bg-white/50 p-4 rounded-xl border border-rose-100">
                            {[
                                { name: 'Kamel T.', reason: '3 retours consécutifs' },
                                { name: 'Anonyme', reason: 'Numéro blacklisté FBR' }
                            ].map((b, i) => (
                                <div key={i} className="flex justify-between items-center text-[11px]">
                                    <span className="font-bold text-slate-800">{b.name}</span>
                                    <span className="text-rose-600 font-bold uppercase tracking-widest text-[9px]">{b.reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="py-24 lg:py-40 bg-white overflow-hidden relative" id="demo">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[160px]" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-[140px]" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-32 space-y-6">
                    <div className="flex justify-center animate-slide-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest leading-none">Visite Guidée</span>
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-extrabold text-heading leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Découvrez l'interface <br />
                        <span className="text-primary italic">propulsée</span> par Rise.
                    </h2>
                    <p className="text-lg text-body leading-relaxed max-w-2xl mx-auto font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Une expérience fluide, conçue pour la rapidité et la clarté opérationnelle.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
                        {/* Tabs List */}
                        <div className="lg:col-span-3 space-y-3">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${activeTab === tab.id ? 'bg-primary shadow-xl shadow-primary/20 border-primary' : 'bg-slate-50/50 border-transparent hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:border-slate-100 border'}`}
                                >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${activeTab === tab.id ? 'bg-white text-primary' : 'bg-white text-slate-400 group-hover:text-primary shadow-sm border border-slate-50'}`}>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                                        </svg>
                                    </div>
                                    <span className={`text-sm font-extrabold tracking-tight ${activeTab === tab.id ? 'text-white' : 'text-slate-500 group-hover:text-slate-800'}`}>
                                        {tab.label}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Mockup Display */}
                        <div className="lg:col-span-9">
                            <div className="relative group/mockup">
                                {/* Browser Toolbar Simulation */}
                                <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/10 to-transparent rounded-[32px] sm:rounded-[40px] opacity-50 transition-opacity duration-700 pointer-events-none" />
                                <div className="relative bg-white rounded-[32px] sm:rounded-[40px] p-2 border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                                    <div className="bg-white rounded-[26px] sm:rounded-[34px] overflow-hidden border border-slate-50 shadow-inner">
                                        {/* Fake Header */}
                                        <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-between">
                                            <div className="flex gap-1.5 px-2">
                                                <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80 shadow-sm" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80 shadow-sm" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 shadow-sm" />
                                            </div>
                                            <div className="px-12 py-1.5 bg-white rounded-full text-[10px] font-bold text-slate-300 border border-slate-100 shadow-sm flex items-center gap-2">
                                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                                app.risemanager.dz/{activeTab.toLowerCase()}
                                            </div>
                                            <div className="hidden sm:flex gap-4 pr-2">
                                                <div className="w-4 h-4 rounded-full bg-slate-100" />
                                            </div>
                                        </div>
                                        {/* Fake Content */}
                                        <div className="p-6 md:p-12 min-h-[460px] bg-[#fbfcfd]">
                                            {renderMockup()}
                                        </div>
                                    </div>
                                </div>

                                {/* Floating UI element for depth */}
                                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-3xl shadow-2xl shadow-primary/30 hidden lg:block animate-bounce-subtle">
                                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Status Système</div>
                                    <div className="text-xl font-black">100% OPÉRATIONNEL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.98) translateY(10px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </section>
    );
};

export default Demo;
