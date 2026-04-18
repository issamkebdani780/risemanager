import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Demo = () => {
    const { t } = useTranslation();

    const tabs = [
        { id: 'Dashboard', label: t('demo_tab_dashboard'), icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { id: 'Commandes', label: t('demo_tab_orders'), icon: 'M16 11V7a4 4 0 11-8 0m8 4v2a2 2 0 11-4 0m4-2V9m-8 2V7a4 4 0 118 0m-8 4v2a2 2 0 114 0m-4-2V9m-4 12h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z' },
        { id: 'Stock', label: t('demo_tab_stock'), icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
        { id: 'Clients', label: t('demo_tab_clients'), icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
        { id: 'Finances', label: t('demo_tab_finances'), icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        { id: 'Analytics', label: t('demo_tab_analytics'), icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
        { id: 'Blacklist', label: t('demo_tab_blacklist'), icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' }
    ];
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [searchQuery, setSearchQuery] = useState('');

    // Interactive State Management
    const [orders, setOrders] = useState([
        { id: '#2843', name: 'Sami K.', statusKey: 'demo_status_confirmed', color: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400', amount: '12,500 DA' },
        { id: '#2842', name: 'Amine Dj.', statusKey: 'demo_status_pending', color: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400', amount: '8,200 DA' },
        { id: '#2841', name: 'Lydia M.', statusKey: 'demo_status_shipped', color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400', amount: '15,000 DA' },
        { id: '#2840', name: 'Bachir V.', statusKey: 'demo_status_return', color: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400', amount: '5,400 DA' }
    ]);

    const [clients, setClients] = useState([
        { id: 1, name: 'Yassine M.', phone: '0770 12 XX XX', scoreKey: 'demo_client_score_top', color: 'text-emerald-500' },
        { id: 2, name: 'Mehdi B.', phone: '0555 98 XX XX', scoreKey: 'demo_client_score_dispute', color: 'text-rose-500' },
        { id: 3, name: 'Sarah L.', phone: '0661 44 XX XX', scoreKey: 'demo_client_score_new', color: 'text-blue-500' }
    ]);

    // Handlers
    const deleteOrder = (id) => setOrders(orders.filter(o => o.id !== id));
    const deleteClient = (id) => setClients(clients.filter(c => c.id !== id));

    const addOrder = () => {
        const newId = `#${Math.floor(Math.random() * 9000) + 1000}`;
        setOrders([{ id: newId, name: 'Nouveau Client', statusKey: 'demo_status_pending', color: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400', amount: '0 DA' }, ...orders]);
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
                                { label: t('demo_kpi_sales'), val: '124,500 DA', color: 'text-primary' },
                                { label: t('demo_kpi_orders'), val: orders.length.toString(), color: 'text-slate-900 dark:text-white' },
                                { label: t('demo_kpi_delivery'), val: '78%', color: 'text-emerald-500' },
                                { label: t('demo_kpi_profit'), val: '32,100 DA', color: 'text-blue-600' }
                            ].map((kpi, i) => (
                                <div key={i} className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-colors">
                                    <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mb-1">{kpi.label}</div>
                                    <div className={`text-lg font-extrabold ${kpi.color}`}>{kpi.val}</div>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-slate-700 shadow-sm h-56 relative overflow-hidden group/chart transition-colors">
                            <div className="flex justify-between items-center mb-8">
                                <div className="text-[11px] font-extrabold text-[#1e293b] dark:text-white uppercase tracking-tight">{t('demo_chart_title')}</div>
                                <div className="flex gap-1.5 items-center">
                                    <div className="w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/30" />
                                    <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                                </div>
                            </div>

                             {/* Grid Lines */}
                            <div className="absolute inset-x-6 top-20 bottom-12 flex flex-col justify-between pointer-events-none">
                                {[1, 2, 3].map(li => <div key={li} className="w-full h-[1px] bg-slate-50 dark:bg-slate-700/50" />)}
                            </div>

                            <div className="relative h-28 flex items-end gap-3 px-2">
                                {[
                                    { d: t('demo_day_l'), h: 42 }, { d: t('demo_day_m1'), h: 68 }, { d: t('demo_day_m2'), h: 45 },
                                    { d: t('demo_day_j'), h: 92 }, { d: t('demo_day_v'), h: 74 }, { d: t('demo_day_s'), h: 88 }, { d: t('demo_day_d'), h: 56 }
                                ].map((day, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-3">
                                        <div className="relative w-full h-24 flex items-end justify-center group/bar">                                             {/* Bar Background */}
                                            <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/40 rounded-t-md" />
                                            {/* Data Bar */}
                                            <div
                                                className={`w-full ${i === 3 ? 'bg-primary shadow-lg shadow-primary/20' : 'bg-primary/20 group-hover/bar:bg-primary/40'} rounded-t-md transition-all duration-1000 ease-out relative overflow-hidden`}
                                                style={{ height: `${day.h}%`, transitionDelay: `${i * 0.05}s` }}
                                            >
                                                {/* Shimmer Effect */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                                            </div>

                                            {/* Tooltip on hover */}
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[9px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-all pointer-events-none z-10 shadow-xl">
                                                {day.h}%
                                            </div>
                                        </div>
                                        <span className={`text-[10px] font-bold ${i === 3 ? 'text-primary' : 'text-slate-300 dark:text-slate-600'}`}>{day.d}</span>
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
                                <span className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </span>
                                 <input
                                    type="text"
                                    placeholder={t('demo_search_orders')}
                                    className="w-full pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-[11px] text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary/30 shadow-sm placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <button onClick={addOrder} className="px-4 py-2 bg-primary text-white text-[11px] font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                                + {t('demo_add')}
                            </button>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden transition-colors">
                            <table className="w-full text-left rtl:text-right text-[11px]">
                                <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-500 font-bold uppercase tracking-widest text-[9px]">
                                    <tr>
                                        <th className="p-4">{t('demo_table_id')}</th>
                                        <th className="p-4">{t('demo_table_client')}</th>
                                        <th className="p-4">{t('demo_table_status')}</th>
                                        <th className="p-4 text-right rtl:text-left">{t('demo_table_action')}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                    {filteredOrders.length > 0 ? filteredOrders.map((row, i) => (
                                        <tr key={row.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-colors group">
                                            <td className="p-4 font-bold text-slate-900 dark:text-slate-100">{row.id}</td>
                                            <td className="p-4 font-medium text-slate-600 dark:text-slate-400">{row.name}</td>
                                            <td className="p-4 text-[10px]">
                                                <span className={`px-2 py-0.5 rounded-md font-bold ${row.color} dark:bg-opacity-20`}>{t(row.statusKey)}</span>
                                            </td>
                                            <td className="p-4 text-right rtl:text-left">
                                                <button
                                                    onClick={() => deleteOrder(row.id)}
                                                    className="text-rose-400 hover:text-rose-600 p-1.5 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-all"
                                                >
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth={2} /></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr><td colSpan="4" className="p-10 text-center text-slate-400 dark:text-slate-600 italic">{t('demo_no_results')}</td></tr>
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
                            <div key={i} className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm space-y-3 transition-colors">
                                <div className="flex justify-between items-start">
                                    <div className="text-sm font-bold text-slate-900 dark:text-white">{prod.name}</div>
                                    <div className={`px-2 py-1 rounded-lg text-[10px] font-bold ${prod.alert ? 'bg-red-50 dark:bg-red-900/40 text-red-600 dark:text-red-400' : 'bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400'}`}>
                                        {prod.stock} {t('demo_stock_units')}
                                    </div>
                                </div>
                                <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium uppercase tracking-widest">{prod.variants}</div>
                                {prod.alert ? (
                                    <div className="pt-2 border-t border-slate-50 dark:border-slate-700 flex items-center gap-2 text-[10px] text-red-500 font-bold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                        {t('demo_stock_alert')}
                                    </div>
                                ) : (
                                    <div className="pt-2 border-t border-slate-50 dark:border-slate-700 flex items-center gap-2 text-[10px] text-emerald-500 font-bold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        {t('demo_stock_optimal')}
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
                            <span className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </span>
                             <input
                                type="text"
                                placeholder={t('demo_search_clients')}
                                className="w-full pl-9 pr-4 rtl:pl-4 rtl:pr-9 py-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-[11px] text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary/30 shadow-sm placeholder:text-slate-400"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="space-y-4">
                            {filteredClients.length > 0 ? filteredClients.map((client) => (
                                <div key={client.id} className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between group transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 font-extrabold text-[12px]">
                                            {client.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{client.name}</div>
                                            <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">{client.phone}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className={`text-[9px] font-bold uppercase tracking-widest ${client.color} bg-white dark:bg-slate-900 shadow-sm px-2 py-0.5 rounded-lg border border-slate-50 dark:border-slate-700`}>{t(client.scoreKey)}</div>
                                        <button onClick={() => deleteClient(client.id)} className="text-slate-300 dark:text-slate-600 hover:text-rose-500 p-1.5 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg transition-all">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                </div>
                            )) : (
                                <div className="p-10 text-center text-slate-400 dark:text-slate-600 italic">{t('demo_no_results')}</div>
                            )}
                        </div>
                    </div>
                );
            case 'Finances':
                return (
                    <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm space-y-8 animate-fadeIn text-center transition-colors">
                        <div className="space-y-2">
                            <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t('demo_finance_projection')}</div>
                            <div className="text-3xl font-black text-emerald-500 dark:text-emerald-400">+1,420,000 DA</div>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-full bg-slate-100 dark:bg-slate-900 h-2 rounded-full overflow-hidden flex">
                                <div className="h-full bg-emerald-500" style={{ width: '40%' }} />
                                <div className="h-full bg-blue-500" style={{ width: '30%' }} />
                                <div className="h-full bg-rose-500" style={{ width: '20%' }} />
                                <div className="h-full bg-slate-300 dark:bg-slate-700" style={{ width: '10%' }} />
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 text-[8px] font-bold uppercase text-slate-400 dark:text-slate-500">
                            <div>{t('demo_finance_sale')}</div>
                            <div>{t('demo_finance_delivery')}</div>
                            <div>{t('demo_finance_ads')}</div>
                            <div>{t('demo_finance_net')}</div>
                        </div>
                    </div>
                );
            case 'Analytics':
                return (
                    <div className="grid grid-cols-2 gap-4 animate-fadeIn">
                        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm col-span-2 md:col-span-1 transition-colors">
                            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-6 uppercase tracking-widest">{t('demo_analytics_sources')}</div>
                            <div className="space-y-4">
                                {[
                                    { label: 'Facebook Ads', val: '65%', color: 'bg-blue-600' },
                                    { label: 'Instagram', val: '25%', color: 'bg-rose-500' },
                                    { label: 'Direct', val: '10%', color: 'bg-slate-400 dark:bg-slate-600' }
                                ].map((src, i) => (
                                    <div key={i} className="space-y-1">
                                        <div className="flex justify-between text-[10px] font-bold dark:text-slate-300">
                                            <span>{src.label}</span>
                                            <span>{src.val}</span>
                                        </div>
                                        <div className="h-1 bg-slate-50 dark:bg-slate-900 rounded-full overflow-hidden">
                                            <div className={`h-full ${src.color}`} style={{ width: src.val }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm col-span-2 md:col-span-1 flex flex-col items-center justify-center space-y-4 transition-colors">
                            <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t('demo_analytics_roi')}</div>
                            <div className="text-4xl font-black text-primary">x4.2</div>
                            <div className="text-[10px] text-emerald-500 font-bold bg-emerald-50 dark:bg-emerald-900/40 px-3 py-1 rounded-full">{t('demo_analytics_optimal')}</div>
                        </div>
                    </div>
                );
            case 'Blacklist':
                return (
                    <div className="p-6 bg-rose-50 dark:bg-rose-900/10 rounded-2xl border border-rose-100 dark:border-rose-900/20 shadow-sm animate-fadeIn transition-colors">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-rose-600 rounded-lg flex items-center justify-center text-white">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            </div>
                            <div>
                                <div className="text-sm font-bold text-rose-900 dark:text-rose-100 uppercase tracking-tight">{t('demo_blacklist_vigilance')}</div>
                                <div className="text-xs text-rose-600 dark:text-rose-400 font-medium">{t('demo_blacklist_desc')}</div>
                            </div>
                        </div>
                        <div className="space-y-3 bg-white/50 dark:bg-slate-900/40 p-4 rounded-xl border border-rose-100 dark:border-rose-900/20">
                            {[
                                { name: 'Kamel T.', reason: t('demo_blacklist_reason1') },
                                { name: 'Anonyme', reason: t('demo_blacklist_reason2') }
                            ].map((b, i) => (
                                <div key={i} className="flex justify-between items-center text-[11px]">
                                    <span className="font-bold text-slate-800 dark:text-slate-200">{b.name}</span>
                                    <span className="text-rose-600 dark:text-rose-400 font-bold uppercase tracking-widest text-[9px]">{b.reason}</span>
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
        <section className="py-24 lg:py-40 bg-white dark:bg-slate-950 overflow-hidden relative transition-colors duration-500" id="demo">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 dark:bg-primary/10 rounded-full blur-[160px]" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[140px]" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-32 space-y-6">
                    <div className="flex justify-center animate-slide-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">{t('Visite Guidée')}</span>
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-extrabold text-heading dark:text-white leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        {t('Découvrez l\'interface')}
                    </h2>
                    <p className="text-lg text-body dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        {t('Une expérience fluide')}
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
                                    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${activeTab === tab.id ? 'bg-primary shadow-xl shadow-primary/20 border-primary' : 'bg-slate-50/50 dark:bg-slate-900/40 border-transparent dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-primary/5 hover:border-slate-100 dark:hover:border-slate-700 border'}`}
                                >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${activeTab === tab.id ? 'bg-white text-primary' : 'bg-white dark:bg-slate-800 text-slate-400 group-hover:text-primary shadow-sm border border-slate-50 dark:border-slate-700'}`}>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                                        </svg>
                                    </div>
                                    <span className={`text-sm font-extrabold tracking-tight ${activeTab === tab.id ? 'text-white' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white'}`}>
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
                                <div className="relative bg-white dark:bg-slate-900 rounded-[32px] sm:rounded-[40px] p-2 border border-slate-100 dark:border-slate-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-colors">
                                    <div className="bg-white dark:bg-slate-900 rounded-[26px] sm:rounded-[34px] overflow-hidden border border-slate-50 dark:border-slate-800 shadow-inner">
                                        {/* Fake Header */}
                                        <div className="bg-slate-50 dark:bg-slate-900 p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                            <div className="flex gap-1.5 px-2">
                                                <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80 shadow-sm" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80 shadow-sm" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 shadow-sm" />
                                            </div>
                                            <div className="px-12 py-1.5 bg-white dark:bg-slate-800 rounded-full text-[10px] font-bold text-slate-300 dark:text-slate-600 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-2">
                                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                                app.risemanager.dz/{activeTab.toLowerCase()}
                                            </div>
                                            <div className="hidden sm:flex gap-4 pr-2">
                                                <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800" />
                                            </div>
                                        </div>
                                        {/* Fake Content */}
                                        <div className="p-6 md:p-12 min-h-[460px] bg-[#fbfcfd] dark:bg-slate-900 transition-colors">
                                            {renderMockup()}
                                        </div>
                                    </div>
                                </div>

                                {/* Floating UI element for depth */}
                                <div className="absolute -bottom-6 -right-6 rtl:right-auto rtl:-left-6 bg-primary text-white p-6 rounded-3xl shadow-2xl shadow-primary/30 hidden lg:block animate-bounce-subtle">
                                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">{t('demo_system_status')}</div>
                                    <div className="text-xl font-black">{t('demo_system_operational')}</div>
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
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-subtle {
                    animation: bounce-subtle 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Demo;
