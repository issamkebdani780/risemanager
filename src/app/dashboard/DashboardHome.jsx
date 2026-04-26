import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical,
  Download
} from 'lucide-react';

const StatCard = ({ title, value, change, isPositive, icon, color }) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-[24px] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${color} bg-opacity-10 transition-transform group-hover:scale-110`}>
        {icon}
      </div>
      <button className="text-slate-400 hover:text-primary transition-colors">
        <MoreVertical size={18} />
      </button>
    </div>
    <div>
      <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
      <h3 className="text-2xl font-black text-heading dark:text-white mb-2">{value}</h3>
      <div className="flex items-center gap-1">
        <span className={`flex items-center text-xs font-bold ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}%
        </span>
        <span className="text-slate-400 text-[10px] font-medium uppercase">{import.meta.env.VITE_TIME_RANGE || 'ce mois'}</span>
      </div>
    </div>
  </div>
);

const DashboardHome = () => {
  const { t } = useTranslation();

  const stats = [
    {
      title: t('Chiffre d\'affaires'),
      value: '2.450.000 DA',
      change: 12.5,
      isPositive: true,
      icon: <DollarSign className="text-blue-500" size={24} />,
      color: 'bg-blue-500'
    },
    {
      title: t('Commandes'),
      value: '1,284',
      change: 8.2,
      isPositive: true,
      icon: <ShoppingBag className="text-emerald-500" size={24} />,
      color: 'bg-emerald-500'
    },
    {
      title: t('Nouveaux Clients'),
      value: '432',
      change: 3.1,
      isPositive: false,
      icon: <Users className="text-purple-500" size={24} />,
      color: 'bg-purple-500'
    },
    {
      title: t('Taux de Livraison'),
      value: '78%',
      change: 4.4,
      isPositive: true,
      icon: <TrendingUp className="text-orange-500" size={24} />,
      color: 'bg-orange-500'
    }
  ];

  const recentOrders = [
    { id: '#ORD-7281', customer: 'Ahmed Benali', status: 'Confirmé', date: '24 Avr 2026', total: '12,500 DA' },
    { id: '#ORD-7282', customer: 'Sami Mansouri', status: 'En attente', date: '25 Avr 2026', total: '8,200 DA' },
    { id: '#ORD-7283', customer: 'Karim Zidi', status: 'Expédié', date: '25 Avr 2026', total: '21,000 DA' },
    { id: '#ORD-7284', customer: 'Yasmine Laribi', status: 'Livré', date: '26 Avr 2026', total: '5,400 DA' },
    { id: '#ORD-7285', customer: 'Omar Fekir', status: 'Retourné', date: '26 Avr 2026', total: '9,800 DA' },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Livré': return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20';
      case 'Confirmé': return 'bg-blue-50 text-blue-600 dark:bg-blue-900/20';
      case 'Expédié': return 'bg-purple-50 text-purple-600 dark:bg-purple-900/20';
      case 'En attente': return 'bg-amber-50 text-amber-600 dark:bg-amber-900/20';
      case 'Retourné': return 'bg-red-50 text-red-600 dark:bg-red-900/20';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-heading dark:text-white tracking-tight">
            {t('Tableau de bord')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            {t('Bienvenue,')} Issam. {t('Voici ce qui se passe aujourd\'hui.')}
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-extrabold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all active:scale-95 text-sm">
          <Download size={18} />
          {t('Exporter Rapport')}
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Charts & Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
            <h3 className="text-lg font-black text-heading dark:text-white">{t('Commandes Récentes')}</h3>
            <button className="text-sm font-bold text-primary hover:underline">{t('Voir tout')}</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">{t('ID Commande')}</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">{t('Client')}</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">{t('Statut')}</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">{t('Date')}</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">{t('Total')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-sm font-black text-primary">{order.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-heading dark:text-white">{order.customer}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${getStatusStyle(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium text-slate-500">{order.date}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-sm font-black text-heading dark:text-white">{order.total}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products / Mini Stats */}
        <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm p-6">
          <h3 className="text-lg font-black text-heading dark:text-white mb-6">{t('Produits Populaires')}</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex-shrink-0 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors overflow-hidden">
                   <img src={`https://picsum.photos/seed/${item+20}/100/100`} alt="product" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-heading dark:text-white truncate">Basket Nike Air Max</p>
                  <p className="text-[10px] text-slate-500 font-medium">124 {t('ventes')}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-primary">8,500 DA</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 border border-slate-100 dark:border-slate-800 rounded-2xl text-sm font-bold text-slate-500 hover:text-primary hover:border-primary/50 transition-all">
            {t('Analyser tout le catalogue')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
