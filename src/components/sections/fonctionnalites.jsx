import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../ui/Logo';

const DetailSidebar = ({ selectedOrder, isMobile, onClose }) => {
    const { t } = useTranslation();
    return (
        <div className={`${isMobile ? 'flex flex-col h-full pointer-events-auto bg-white dark:bg-slate-900' : 'hidden lg:block w-70 border-l rtl:border-l-0 rtl:border-r border-slate-50 dark:border-slate-800 bg-[#fbfcfd] dark:bg-slate-900/50 overflow-auto custom-scrollbar'} p-5 space-y-6 animate-slide-up`} key={`${selectedOrder.id}-${isMobile}`}>
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div className="text-[10px] font-extrabold text-primary dark:text-primary-light uppercase">{t('feat_order_detail_short')} #{selectedOrder.id}</div>
                {isMobile && (
                    <button onClick={onClose} className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" strokeWidth={2.5} /></svg>
                    </button>
                )}
            </div>

            <div className={`space-y-5 ${isMobile ? 'overflow-y-auto flex-1 custom-scrollbar pr-1' : ''}`}>
                {selectedOrder.assignee && (
                    <div className="space-y-2">
                        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{t('feat_assignation')}</div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-[9px] font-bold">{selectedOrder.assignee.initial}</div>
                            <span className="text-[11px] font-bold text-heading dark:text-white">{selectedOrder.assignee.name}</span>
                        </div>
                    </div>
                )}

                {selectedOrder.note && (
                    <div className="space-y-2">
                        <div className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t('feat_last_note')}</div>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 p-3 border border-slate-100 dark:border-slate-700 rounded-xl italic leading-relaxed shadow-sm">
                            {selectedOrder.note}
                        </p>
                    </div>
                )}

                {selectedOrder.history && (
                    <div className="space-y-4">
                        <div className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t('feat_life_history')}</div>
                        <div className="space-y-4 pl-2 rtl:pl-0 rtl:pr-2 border-l rtl:border-l-0 rtl:border-r border-slate-100 dark:border-slate-800 ml-1 rtl:ml-0 rtl:mr-1 pb-4">
                            {selectedOrder.history.map((event, i) => (
                                <div key={i} className="relative pl-5 rtl:pl-0 rtl:pr-5">
                                    <div className={`absolute top-1 -left-[5.5px] rtl:left-auto rtl:-right-[5.5px] w-2.5 h-2.5 rounded-full border-2 border-white dark:border-slate-900 ${event.status === 'complete' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.3)]' : 'bg-slate-200 dark:bg-slate-700'}`} />
                                    <div className={`text-[9px] font-bold uppercase tracking-tight ${event.status === 'complete' ? 'text-heading dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>{event.title}</div>
                                    <div className="text-[8px] text-slate-400 dark:text-slate-500 font-medium">{event.time}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const Features = () => {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState(t('feat_filter_all'));
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState('2843');
    const [expandedAgent, setExpandedAgent] = useState(null);
    const [isDetailOpenMobile, setIsDetailOpenMobile] = useState(false);

    const agents = [
        {
            rank: 1, name: 'Anissa H.', volume: 142, confirm: '88%', delivery: '72%', trend: 'up',
            details: { errors: 2, products: t('case_fashion_title'), topSource: 'TikTok' }
        },
        {
            rank: 2, name: 'Laila S.', volume: 128, confirm: '82%', delivery: '68%', trend: 'up',
            details: { errors: 0, products: t('eco_risecart'), topSource: 'Facebook' }
        },
        {
            rank: 3, name: 'Sami K.', volume: 95, confirm: '74%', delivery: '61%', trend: 'down',
            details: { errors: 5, products: t('eco_risepay'), topSource: 'Instagram' }
        }
    ];

    const orders = [
        {
            id: '2843',
            name: 'Sami Khitem',
            status: t('feat_status_confirmed'),
            color: 'text-green-600 bg-green-50',
            amount: '12,500 DA',
            assignee: { name: 'Anissa Hitem', initial: 'AK' },
            note: t('data_note_confirmed'),
            history: [
                { title: t('feat_hist_confirmed_agent'), time: t('Aujourd\'hui') + ", 09:12", status: 'complete' },
                { title: t('feat_hist_call_received'), time: t('Hier') + ', 18:45', status: 'pending' }
            ]
        },
        {
            id: '2842',
            name: 'Amine Dj. ',
            status: t('feat_status_waiting'),
            color: 'text-orange-600 bg-orange-50',
            amount: '8,200 DA',
            assignee: { name: 'Sami K.', initial: 'SK' },
            note: t('data_note_size'),
            history: [
                { title: t('feat_hist_call_attempt'), time: t('Hier') + ', 10:30', status: 'pending' }
            ]
        },
        {
            id: '2841',
            name: 'Lydia M. ',
            status: t('feat_status_delivery'),
            color: 'text-blue-600 bg-blue-50',
            amount: '15,000 DA',
            assignee: { name: 'Bachir V.', initial: 'BV' },
            note: t('data_note_shipped'),
            history: [
                { title: t('feat_hist_shipped'), time: t('Hier') + ', 14:00', status: 'complete' },
                { title: t('feat_hist_confirmed'), time: '07/04, 11:20', status: 'complete' }
            ]
        },
        {
            id: '2840',
            name: 'Bachir V. ',
            status: t('feat_status_return'),
            color: 'text-red-600 bg-red-50',
            amount: '5,400 DA',
            assignee: { name: 'Anissa H.', initial: 'AH' },
            note: t('data_note_return'),
            history: [{ title: t('feat_hist_return_init'), time: t('Aujourd\'hui') + ', 11:45', status: 'pending' }]
        },
        {
            id: '2839',
            name: 'Faycal R. ',
            status: t('feat_status_confirmed'),
            color: 'text-green-600 bg-green-50',
            amount: '22,400 DA',
            assignee: { name: 'Laila S.', initial: 'LS' },
            note: t('data_note_vip'),
            history: [{ title: t('feat_hist_confirmed'), time: t('Hier') + ', 16:20', status: 'complete' }]
        }
    ];

    const filteredOrders = orders.filter(order => {
        const nameMatch = order.name ? order.name.toLowerCase().includes(searchQuery.toLowerCase()) : false;
        const matchesSearch = nameMatch || order.id.includes(searchQuery);
        const matchesStatus = statusFilter === t('feat_filter_all') || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const selectedOrder = filteredOrders.some(order => order.id === selectedOrderId)
        ? orders.find(o => o.id === selectedOrderId)
        : filteredOrders[0] || null;

    return (
        <section id="fonctionnalites" className="py-24 lg:py-32 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-32 space-y-4 px-4">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight animate-slide-up">
                        {t('feat_title_part1')} <span className="text-primary tracking-tight">{t('feat_title_part2')}</span> <br className="hidden lg:block" /> {t('feat_title_part3')}
                    </h2>
                    <p className="text-lg text-body dark:text-slate-400 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        {t('feat_subtitle')}
                    </p>
                </div>

                <div className="max-w-7xl mx-auto space-y-20 lg:space-y-32">

                    {/* 1. Gestion des commandes - Horizontal Large */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 animate-slide-up px-2 sm:px-0" style={{ animationDelay: '0.2s' }}>
                        <div className="w-full lg:w-2/5 space-y-6">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-primary border border-blue-100 dark:border-blue-800 shrink-0 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 11-8 0m8 4v2a2 2 0 11-4 0m4-2V9m-8 2V7a4 4 0 118 0m-8 4v2a2 2 0 114 0m-4-2V9m-4 12h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-extrabold text-heading dark:text-white">{t('feat_orders_title')}</h3>
                            </div>
                            <p className="text-body dark:text-slate-400 leading-relaxed">
                                {t('feat_orders_desc_long')}
                            </p>

                            {/* Mini Benefit */}
                            <div className="flex items-start gap-3 mt-2">
                                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0 mt-0.5 shadow-sm">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="text-sm font-bold text-heading dark:text-slate-200">{t('feat_orders_benefit')}</span>
                            </div>

                            {/* Integration Ecosystem */}
                            <div className="mt-12 border-t border-slate-100 dark:border-slate-800 pt-8 relative">
                                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-10 text-center lg:text-left">{t('feat_orders_ecosystem')}</p>

                                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative">
                                    {/* Vertical Integrated Flow */}
                                    <div className="flex flex-col items-center gap-6 w-full max-w-[280px] mx-auto lg:mx-0">

                                        {/* Top: Sales Channels */}
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="flex -space-x-5 group/icons">
                                                {[
                                                    { name: 'Shopify', logo: '/vente/shopify.png' },
                                                    { name: 'Lightfunnel', logo: '/vente/lightfunnel.png' },
                                                    { name: 'RiseCart', logo: '/vente/risecart.png', extraPadding: 'p-1' },
                                                    { name: 'YouCan', logo: '/vente/youcan.png' }
                                                ].map((vente) => (
                                                    <div key={vente.name} className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full border-2 border-white dark:border-slate-700 shadow-lg flex items-center justify-center p-3 hover:translate-y-[-4px] transition-all">
                                                        <img
                                                            src={vente.logo}
                                                            alt={vente.name}
                                                            className="w-full h-full object-contain dark:brightness-110"
                                                            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${vente.name}&background=f3f4f6&color=94a3b8&bold=true&length=2&font-size=0.33`; }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{t('feat_orders_in')}</span>
                                        </div>

                                        {/* Connection Line 1 */}
                                        <div className="h-8 w-px border-l border-dashed border-primary/30" />

                                        {/* Middle: Core Hub */}
                                        <div className="relative group/hub">
                                            <div className="w-28 h-28 bg-white dark:bg-slate-800 rounded-[2rem] border border-primary/10 dark:border-primary/20 shadow-2xl shadow-primary/10 flex items-center justify-center p-4 relative transition-transform duration-500 group-hover/hub:scale-105">
                                                <Logo showText={false} iconClassName="w-16 h-16" />
                                                <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-[2rem] animate-pulse -z-10" />
                                            </div>

                                        </div>

                                        {/* Connection Line 2 */}
                                        <div className="h-8 w-px border-l border-dashed border-primary/30" />

                                        {/* Bottom: Carriers */}
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="flex -space-x-5 group/icons">
                                                {[
                                                    { name: 'Yalidine', logo: '/delivery/yalidine.jpg' },
                                                    { name: 'Maystro', logo: '/delivery/maystro.png' },
                                                    { name: 'Guepex', logo: '/delivery/guepex.png' },
                                                    { name: 'DHD', logo: '/delivery/dhd.png' }
                                                ].map((carrier) => (
                                                    <div key={carrier.name} className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full border-2 border-white dark:border-slate-700 shadow-lg flex items-center justify-center p-3 hover:translate-y-[-4px] transition-all">
                                                        <img src={carrier.logo} alt={carrier.name} className="w-full h-full object-contain dark:brightness-110" />
                                                    </div>
                                                ))}
                                            </div>
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{t('feat_orders_out')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border-l-[3px] rtl:border-l-0 rtl:border-r-[3px] border-primary mt-8 shadow-sm">
                                <p className="text-sm italic text-blue-700 dark:text-blue-300 font-medium font-outfit">
                                    {t('feat_orders_quote')}
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-3/5 relative group/dashboard">
                            {/* Interactivity Indicator */}
                            <div className="absolute -top-4 -right-2 rtl:right-auto rtl:-left-2 z-20 bg-primary text-white text-[9px] font-extrabold px-4 py-2 rounded-full shadow-xl shadow-primary/20 dark:shadow-none flex items-center gap-2 animate-bounce-subtle cursor-default pointer-events-none whitespace-nowrap">
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                {t('feat_demo_badge')}
                            </div>

                            <div className="relative bg-white dark:bg-slate-900 rounded-[24px] sm:rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col h-auto lg:h-[520px] transition-colors duration-500">

                                {/* Top Bar: Search & Filters */}
                                <div className="p-4 sm:p-5 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between bg-slate-50/30 dark:bg-slate-800/20 gap-4">
                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                        <div className="relative w-full max-w-[280px]">
                                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                            </div>
                                            <input
                                                type="text"
                                                placeholder={t('feat_orders_search')}
                                                className="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl py-2 pl-9 pr-3 text-[11px] text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium shadow-sm"
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
                                                className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl text-[10px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:border-primary/30 transition-all flex items-center gap-2 min-w-[100px] sm:min-w-[140px] justify-between shadow-sm"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${statusFilter === t('feat_filter_all') ? 'bg-slate-400 dark:bg-slate-600' : 'bg-primary'}`} />
                                                    <span className="hidden xs:inline">{statusFilter === t('feat_filter_all') ? t('feat_filter_status') : statusFilter}</span>
                                                    <span className="xs:hidden">{statusFilter === t('feat_filter_all') ? t('feat_filter_status') : (statusFilter === t('feat_status_delivery') ? 'Livr.' : (statusFilter === t('feat_status_waiting') ? 'Att.' : statusFilter))}</span>
                                                </div>
                                                <svg className={`w-3 h-3 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeWidth={2.5} /></svg>
                                            </button>

                                            {isFilterOpen && (
                                                <div className="absolute top-full right-0 rtl:right-auto rtl:left-0 sm:left-0 rtl:sm:left-auto rtl:sm:right-0 mt-2 w-[160px] sm:w-[180px] bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-2xl z-50 overflow-hidden animate-slide-up" style={{ animationDuration: '0.2s' }}>
                                                    {[t('feat_filter_all'), t('feat_status_confirmed'), t('feat_status_waiting'), t('feat_status_delivery'), t('feat_status_return')].map((status) => (
                                                        <div
                                                            key={status}
                                                            onClick={() => {
                                                                setStatusFilter(status);
                                                                setIsFilterOpen(false);
                                                            }}
                                                            className={`px-4 py-3 text-[11px] font-bold cursor-pointer transition-colors flex items-center gap-3 ${statusFilter === status ? 'bg-primary text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                                                        >
                                                            <div className={`w-1.5 h-1.5 rounded-full ${statusFilter === status ? 'bg-white' : (status === t('feat_filter_all') ? 'bg-slate-300 dark:bg-slate-600' : 'bg-primary/40')}`} />
                                                            {status}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="px-4 py-2 bg-primary text-white rounded-xl text-[10px] font-bold shadow-lg shadow-primary/20 dark:shadow-none cursor-pointer hover:bg-primary-hover transition-colors hidden sm:block">{t('feat_export')}</div>
                                </div>

                                <div className="flex flex-1 overflow-hidden relative">
                                    {/* Table Content */}
                                    <div className="flex-1 overflow-auto custom-scrollbar bg-white dark:bg-slate-900/50 pb-0">
                                        <table className="w-full text-left rtl:text-right border-collapse">
                                            <thead className="sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-10 shadow-sm shadow-slate-100 dark:shadow-slate-800">
                                                <tr className="border-b border-slate-50 dark:border-slate-800">
                                                    <th className="hidden sm:table-cell p-4 sm:p-5 text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t('feat_order_id')}</th>
                                                    <th className="p-4 sm:p-5 text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t('feat_order_client')}</th>
                                                    <th className="p-4 sm:p-5 text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t('feat_order_status')}</th>
                                                    <th className="hidden sm:table-cell p-4 sm:p-5 text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest text-right">{t('feat_order_amount')}</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50/50 dark:divide-slate-800/50">
                                                {filteredOrders.length > 0 ? (
                                                    filteredOrders.map((order, i) => (
                                                        <tr
                                                            key={i}
                                                            onClick={() => {
                                                                setSelectedOrderId(order.id);
                                                                if (window.innerWidth < 1024) setIsDetailOpenMobile(true);
                                                            }}
                                                            className={`hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-all cursor-pointer group/row ${selectedOrderId === order.id ? 'bg-blue-50/40 dark:bg-blue-900/10' : ''}`}
                                                        >
                                                            <td className="hidden sm:table-cell p-4 sm:p-5 text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight">#{order.id}</td>
                                                            <td className="p-4 sm:p-5">
                                                                <div className="text-[12px] font-bold text-heading dark:text-white group-hover/row:text-primary transition-colors">{order.name}</div>
                                                            </td>
                                                            <td className="p-4 sm:p-5">
                                                                <span className={`inline-flex items-center whitespace-nowrap px-3 py-1 rounded-full text-[9px] font-extrabold uppercase ${order.color} shadow-sm border border-transparent dark:opacity-90 group-hover/row:border-current/10`}>
                                                                    {order.status}
                                                                </span>
                                                            </td>
                                                            <td className="hidden sm:table-cell p-4 sm:p-5 text-[12px] font-bold text-heading dark:text-white text-right">{order.amount}</td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="4" className="p-10 text-center text-[12px] text-slate-400 italic">{t('feat_orders_none')}</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Sidebar Detail (Desktop) */}
                                    {selectedOrder ? (
                                        <DetailSidebar selectedOrder={selectedOrder} isMobile={false} onClose={() => setIsDetailOpenMobile(false)} />
                                    ) : (
                                        <div className="hidden lg:flex w-70 border-l rtl:border-l-0 rtl:border-r border-slate-50 dark:border-slate-800 bg-[#fbfcfd] dark:bg-slate-900/50 p-5 items-center justify-center text-slate-400 dark:text-slate-500 text-sm font-medium">
                                            {t('feat_orders_selected_none')}
                                        </div>
                                    )}

                                    {/* Mobile Detail Overlay */}
                                    {isDetailOpenMobile && selectedOrder && (
                                        <div className="absolute inset-0 z-50 bg-white dark:bg-slate-900 flex flex-col lg:hidden animate-slide-up">
                                            <DetailSidebar selectedOrder={selectedOrder} isMobile={true} onClose={() => setIsDetailOpenMobile(false)} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2 & 3: Stock & Scan - Grid 2 columns */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Stock 2.0 */}
                        <div className="bg-slate-50/50 dark:bg-slate-900/40 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-12 border border-slate-100 dark:border-slate-800 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-800 shadow-sm">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-extrabold text-heading dark:text-white">{t('feat_stock_20')}</h3>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-5 sm:p-6 lg:p-8 shadow-md mb-8 hover:shadow-lg transition-transform hover:-translate-y-1">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
                                    <div className="min-w-0 flex-1">
                                        <div className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 break-words">{t('feat_stock_product')} Basket modèle X</div>
                                        <div className="text-sm sm:text-base lg:text-lg font-bold text-heading dark:text-white break-words">{t('feat_stock_variant')} Noir / 42</div>
                                    </div>
                                    <div className="flex gap-6 shrink-0 w-full sm:w-auto justify-between sm:justify-start">
                                        <div className="text-center">
                                            <div className="text-xl lg:text-2xl font-extrabold text-blue-600 dark:text-blue-400">7</div>
                                            <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">{t('feat_stock_available_short')}</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xl lg:text-2xl font-extrabold text-orange-600 dark:text-orange-400">2</div>
                                            <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase">{t('feat_stock_reserved_short')}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-5 border-t border-slate-50 dark:border-slate-700">
                                    <div className="flex items-center gap-2 text-xs text-red-500 dark:text-red-400 font-bold bg-red-50 dark:bg-red-900/40 px-4 py-2 rounded-full w-fit">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                        {t('feat_stock_alert_text')}
                                    </div>
                                </div>
                            </div>

                            {/* Mini Benefit */}
                            <div className="flex items-start gap-3 mb-6">
                                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0 mt-0.5">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="text-sm font-bold text-heading dark:text-slate-200">{t('feat_stock_benefit')}</span>
                            </div>

                            <p className="text-[13px] italic text-cyan-700 dark:text-cyan-400 font-medium font-outfit">
                                {t('feat_stock_quote')}
                            </p>
                        </div>

                        {/* Scan de la vérité */}
                        <div className="bg-slate-50/50 dark:bg-slate-900/40 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-12 border border-slate-100 dark:border-slate-800 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800 shadow-sm">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-extrabold text-heading dark:text-white">{t('feat_scan_title')}</h3>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-5 sm:p-6 lg:p-8 shadow-md mb-8 font-mono hover:shadow-lg transition-transform hover:-translate-y-1">
                                <div className="flex justify-between items-center text-xs mb-6">
                                    <span className="text-primary dark:text-primary-light font-bold flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                                        {t('feat_scan_active')}
                                    </span>
                                </div>
                                <span className="text-sm font-bold text-heading dark:text-white uppercase tracking-tighter bg-blue-50 dark:bg-blue-900 px-2 py-1 rounded inline-block mb-4">{t('feat_scan_received_depot')}</span>
                                <div className="border-t border-slate-50 dark:border-slate-700 pt-4">
                                     <span className="text-sm font-bold text-heading dark:text-slate-200">{t('feat_scan_benefit')}</span>
                                </div>
                            </div>

                            <p className="text-[13px] italic text-indigo-700 dark:text-indigo-400 font-medium font-outfit">
                                {t('feat_scan_quote')}
                            </p>
                        </div>
                    </div>

                    {/* 4 & 5: Equipes & Risque - Grid 2 columns */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Suivi Equipes */}
                        <div className="bg-slate-50/50 dark:bg-slate-900/40 rounded-[40px] p-8 lg:p-12 border border-slate-100 dark:border-slate-800 animate-slide-up relative group/team" style={{ animationDelay: '0.5s' }}>
                            {/* Interactivity Indicator */}
                            <div className="absolute -top-3 -right-2 z-20 bg-violet-600 text-white text-[8px] font-extrabold px-3 py-1.5 rounded-full shadow-lg shadow-violet-200 dark:shadow-none flex items-center gap-2 animate-bounce-subtle">
                                <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                                {t('feat_team_analysis')}
                            </div>

                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 bg-violet-50 dark:bg-violet-900/20 rounded-xl flex items-center justify-center text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-800 shadow-sm">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-extrabold text-heading dark:text-white">{t('feat_teams')}</h3>
                            </div>

                            {/* Mini Benefit */}
                            <div className="flex items-start gap-3 mb-8">
                                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0 mt-0.5 shadow-sm">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="text-sm font-bold text-heading dark:text-slate-200">{t('feat_teams_benefit')}</span>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-slate-700 shadow-xl overflow-hidden mb-10 transition-colors duration-500">
                                <div className="p-4 bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center text-[9px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                                    <span>{t('feat_team_ranking')}</span>
                                    <span>{t('feat_teams_productivity')}</span>
                                </div>
                                <div className="divide-y divide-slate-50">
                                    {agents.map((agent, i) => (
                                        <div key={i} className="group">
                                            <div
                                                onClick={() => setExpandedAgent(expandedAgent === i ? null : i)}
                                                className={`p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer ${expandedAgent === i ? 'bg-slate-50/50 dark:bg-slate-700/50' : ''}`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${i === 0 ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                                                        {agent.rank}
                                                    </div>
                                                    <div>
                                                        <div className="text-[11px] font-bold text-heading dark:text-white">{agent.name}</div>
                                                        <div className="text-[9px] text-slate-400 dark:text-slate-500 font-medium">{agent.volume} {t('feat_team_treated')}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-6">
                                                    <div className="text-right">
                                                        <div className="text-[10px] font-extrabold text-green-600 dark:text-green-400">{agent.confirm}</div>
                                                        <div className="text-[7px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-tighter">{t('feat_team_conf_short')}</div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400">{agent.delivery}</div>
                                                        <div className="text-[7px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-tighter">{t('feat_team_deliv_short')}</div>
                                                    </div>
                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all relative ${expandedAgent === i ? 'rotate-180 bg-primary text-white' : (agent.trend === 'up' ? 'text-green-500 bg-green-50 dark:bg-green-900/20' : 'text-red-500 bg-red-50 dark:bg-red-900/20')}`}>
                                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Expandable Content */}
                                            <div className={`overflow-hidden transition-all duration-300 bg-slate-50/30 dark:bg-slate-900/30 ${expandedAgent === i ? 'max-h-[120px] opacity-100 border-t border-slate-100 dark:border-slate-700' : 'max-h-0 opacity-0'}`}>
                                                <div className="p-4 grid grid-cols-3 gap-4">
                                                    <div className="space-y-1">
                                                        <div className="text-[7px] font-bold text-slate-400 dark:text-slate-500 uppercase">{t('feat_teams_source')}</div>
                                                        <div className="text-[10px] font-bold text-slate-700 dark:text-slate-300">{agent.details.topSource}</div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className="text-[7px] font-bold text-slate-400 dark:text-slate-500 uppercase">{t('feat_teams_specialty')}</div>
                                                        <div className="text-[10px] font-bold text-slate-700 dark:text-slate-300">{agent.details.products}</div>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <div className="text-[7px] font-bold text-slate-400 dark:text-slate-500 uppercase">{t('feat_teams_errors')}</div>
                                                        <div className={`text-[10px] font-bold ${agent.details.errors === 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>{agent.details.errors}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-sm italic text-violet-700 dark:text-violet-400 font-medium font-outfit">
                                {t('feat_teams_quote')}
                            </p>
                        </div>

                        {/* Blacklist */}
                        <div className="bg-slate-50/50 dark:bg-slate-900/40 rounded-[40px] p-8 lg:p-12 border border-slate-100 dark:border-slate-800 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400 border border-red-100 dark:border-red-800 shadow-sm">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-extrabold text-heading dark:text-white">{t('feat_risk_title')}</h3>
                            </div>

                            {/* Mini Benefit */}
                            <div className="flex items-start gap-3 mb-8">
                                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0 mt-0.5 shadow-sm">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="text-sm font-bold text-heading dark:text-slate-200">{t('feat_risk_benefit')}</span>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-6 lg:p-8 shadow-md mb-10 overflow-hidden relative hover:shadow-lg transition-transform hover:-translate-y-1">
                                <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 px-4 py-1.5 bg-red-600 text-[10px] font-extrabold text-white rounded-bl-2xl rtl:rounded-bl-none rtl:rounded-br-2xl tracking-widest">{t('feat_risk_high')}</div>
                                <div className="flex items-center gap-4 mb-8 mt-2">
                                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-sm lg:text-base font-bold text-heading dark:text-white">Yassine M.</div>
                                        <div className="text-xs text-slate-400 dark:text-slate-500">0772 122 3XX</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center text-xs font-bold mb-6">
                                    <div className="text-red-600 dark:text-red-400 tracking-wider font-extrabold uppercase">{t('feat_risk_cancelled')} : 3</div>
                                    <div className="text-red-700 dark:text-red-300 tracking-wider uppercase bg-red-50 dark:bg-red-900/30 px-3 py-1.5 rounded-lg border border-red-100 dark:border-red-900/20">{t('feat_risk_surveillance')}</div>
                                </div>
                                <div className="w-full py-3 bg-red-600 text-white text-[10px] font-black rounded-xl text-center shadow-lg shadow-red-100 dark:shadow-none uppercase tracking-widest">{t('feat_blacklist')}</div>
                            </div>
                            <p className="text-sm italic text-red-700 dark:text-red-400 font-medium font-outfit">
                                {t('feat_risk_quote')}
                            </p>
                        </div>
                    </div>

                    {/* 6. Finances & Analytics - Horizontal Large Inverse */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 animate-slide-up" style={{ animationDelay: '0.7s' }}>
                        <div className="w-full lg:w-2/5 space-y-8">
                            <div className="space-y-6">
                                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-extrabold text-heading dark:text-white">{t('feat_finance_title')}</h3>
                                <p className="text-body dark:text-slate-400 leading-relaxed">
                                    {t('feat_finance_desc_long')}
                                </p>
                                {/* Mini Benefit */}
                                <div className="flex items-start gap-3 mt-2">
                                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0 mt-0.5 shadow-sm">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-sm font-bold text-heading dark:text-slate-200">{t('feat_finance_benefit')}</span>
                                </div>
                            </div>

                            {/* Arguments Checklist */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    t('feat_finance_arg1'),
                                    t('feat_finance_arg2'),
                                    t('feat_finance_arg3'),
                                    t('feat_finance_arg4'),
                                    t('feat_finance_arg5')
                                ].map((arg, i) => (
                                    <div key={i} className="flex items-center gap-2 group">
                                        <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center group-hover:bg-emerald-500 dark:group-hover:bg-emerald-600 transition-colors">
                                            <svg className="w-3 h-3 text-emerald-600 dark:text-emerald-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 truncate">{arg}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-2xl border-l-[3px] rtl:border-l-0 rtl:border-r-[3px] border-emerald-500 shadow-sm">
                                <p className="text-sm italic text-emerald-700 dark:text-emerald-400 font-medium font-outfit">
                                    {t('feat_finance_quote')}
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/5">
                            <div className="relative bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-2xl p-6 lg:p-10 overflow-hidden transition-colors duration-500">
                                <div className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-10 text-center sm:text-start">{t('feat_finance_graph_title')}</div>

                                <div className="relative">
                                    {/* Main Flow: Vente to Net */}
                                    <div className="flex flex-col sm:flex-row items-center justify-between relative group gap-8 sm:gap-0">

                                        {/* Start: Vente */}
                                        <div className="text-center z-10 transition-transform group-hover:scale-105 shrink-0">
                                            <div className="w-16 h-16 sm:w-14 sm:h-14 bg-blue-500 rounded-[20px] sm:rounded-2xl flex items-center justify-center text-white font-extrabold text-base sm:text-sm shadow-xl sm:shadow-lg dark:shadow-none mb-2">{t('feat_finance_sale_upper')}</div>
                                            <div className="text-[10px] sm:text-[9px] font-extrabold text-slate-400 dark:text-slate-500">100%</div>
                                        </div>

                                        {/* Mobile Vertical / Desktop Horizontal Line */}
                                        <div className="flex-1 w-px h-8 sm:w-auto sm:h-px bg-slate-100 dark:bg-slate-800 relative sm:mx-4">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 px-2 py-1 sm:py-0 text-[10px] sm:text-[8px] font-bold text-red-500 whitespace-nowrap">
                                                - {t('feat_finance_expenses')}
                                            </div>
                                        </div>

                                        {/* Expense Icons Group */}
                                        <div className="flex flex-row gap-4 sm:gap-2 lg:gap-4 z-10 py-4 sm:py-0">
                                            {[
                                                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 11V7a4 4 0 11-8 0m8 4v2a2 2 0 11-4 0m4-2V9m-8 2V7a4 4 0 118 0m-8 4v2a2 2 0 114 0m-4-2V9m-4 12h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, bg: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' },
                                                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /></svg>, bg: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-orange-400' },
                                                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" /></svg>, bg: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' }
                                            ].map((item, i) => (
                                                <div key={i} className="text-center opacity-80 sm:opacity-40 group-hover:opacity-100 transition-all hover:scale-110">
                                                    <div className={`w-12 h-12 sm:w-10 sm:h-10 ${item.bg} rounded-2xl sm:rounded-xl flex items-center justify-center border border-current/10 shadow-sm`}>
                                                        {item.icon}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Mobile Vertical / Desktop Horizontal Line 2 */}
                                        <div className="flex-1 w-px h-8 sm:w-auto sm:h-px bg-slate-100 dark:bg-slate-800 relative sm:mx-4" />

                                        {/* End: Net */}
                                        <div className="text-center z-10 transition-transform group-hover:scale-105 shrink-0">
                                            <div className="w-16 h-16 sm:w-14 sm:h-14 bg-emerald-500 rounded-[20px] sm:rounded-2xl flex items-center justify-center text-white font-extrabold text-base sm:text-sm shadow-xl sm:shadow-lg dark:shadow-none shadow-emerald-200/50 mb-2">{t('feat_finance_net_upper')}</div>
                                            <div className="text-[10px] sm:text-[9px] font-extrabold text-emerald-600 dark:text-emerald-400 tracking-wider">32.4%</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Specialized Sub-block: Audit des frais */}
                                <div className="pt-8 border-t border-slate-50 dark:border-slate-800 mt-8">
                                    <div className="bg-emerald-50/30 dark:bg-emerald-900/10 rounded-2xl p-5 border border-emerald-50 dark:border-emerald-800 group/audit transition-all hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white shadow-sm shadow-emerald-200/20">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-[11px] font-extrabold text-heading dark:text-white uppercase tracking-wide">{t('feat_finance_audit_title')}</h4>
                                                    <p className="text-[9px] text-emerald-600 dark:text-emerald-400 font-medium font-outfit">{t('feat_finance_audit_desc')}</p>
                                                </div>
                                            </div>
                                            <div className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-800 shadow-sm animate-pulse-slow">{t('feat_finance_active')}</div>
                                        </div>
                                        <div className="text-[9px] text-slate-500 dark:text-slate-400 leading-relaxed italic border-l-2 rtl:border-l-0 rtl:border-r-2 border-emerald-200 dark:border-emerald-800 pl-3 rtl:pl-0 rtl:pr-3">
                                            {t('feat_finance_audit_note')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 7. Analytics & Pilotage - Horizontal Large */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                        <div className="w-full lg:w-2/5 space-y-6">
                            <div className="w-12 h-12 bg-slate-950 dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-slate-950 border border-slate-900 dark:border-slate-100 mb-8 shadow-sm">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-extrabold text-heading dark:text-white">{t('feat_analytics_title')}</h3>
                            <p className="text-body dark:text-slate-400 leading-relaxed">
                                {t('feat_analytics_desc_long')}
                            </p>

                            {/* Mini Benefit */}
                            <div className="flex items-start gap-3 mt-2 mb-6">
                                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0 mt-0.5 shadow-sm">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="text-sm font-bold text-heading dark:text-slate-200">{t('feat_analytics_benefit')}</span>
                            </div>

                            <div className="p-4 bg-slate-900 dark:bg-slate-800 rounded-2xl border-l-[3px] rtl:border-l-0 rtl:border-r-[3px] border-primary shadow-lg shadow-slate-200/50 dark:shadow-none transition-colors">
                                <p className="text-sm italic text-slate-300 dark:text-slate-400 font-medium font-outfit">
                                    {t('feat_analytics_quote')}
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-3/5">
                            <div className="relative bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col h-auto lg:h-[480px] transition-colors duration-500">
                                {/* Dashboard Header */}
                                <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 flex justify-between items-center">
                                    <div className="text-[10px] font-extrabold text-slate-800 dark:text-white uppercase tracking-widest">{t('feat_analytics_dashboard')}</div>
                                    <div className="flex gap-2">
                                        <div className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-[9px] font-bold text-slate-500 dark:text-slate-400">{t('feat_analytics_30days')}</div>
                                    </div>
                                </div>
                                <div className="p-4 pb-0 sm:p-6 sm:pb-0 flex-1 bg-white dark:bg-slate-900/50 overflow-hidden space-y-4 sm:space-y-8">
                                    {/* Small KPI Cards */}
                                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                                        {[
                                            { label: t('feat_analytics_conv'), val: '4.2%', trend: '+0.8%' },
                                            { label: t('feat_analytics_basket'), val: '14,200 DA', trend: '+12%' },
                                            { label: t('feat_analytics_delivery'), val: '78.2%', trend: '-2%' }
                                        ].map((kpi, i) => (
                                            <div key={i} className="p-2 sm:p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                                                <div className="text-[7px] sm:text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{kpi.label}</div>
                                                <div className="flex items-end justify-between">
                                                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">{kpi.val}</div>
                                                    <div className={`text-[7px] font-bold ${kpi.trend.startsWith('+') ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>{kpi.trend}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Main Comparison Graph Area */}
                                    <div className="flex gap-6 h-auto sm:h-full">
                                        <div className="flex-1">
                                            <div className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-4">{t('feat_analytics_sales_evolution')}</div>
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
                                        <div className="w-40 border-l border-slate-50 dark:border-slate-800 pl-6 hidden md:block">
                                            <div className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-4">{t('feat_analytics_top_products')}</div>
                                            <div className="space-y-4">
                                                {[
                                                    { name: 'Basket X1', p: '88%' },
                                                    { name: 'Smart G2', p: '72%' },
                                                    { name: 'PowerHub', p: '45%' }
                                                ].map((item, i) => (
                                                    <div key={i} className="space-y-1">
                                                        <div className="flex justify-between text-[8px] font-bold dark:text-slate-300">
                                                            <span>{item.name}</span>
                                                            <span className="text-primary dark:text-primary-light">{item.p}</span>
                                                        </div>
                                                        <div className="h-1 bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden">
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
