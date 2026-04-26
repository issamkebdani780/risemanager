import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  MoreHorizontal, 
  Eye, 
  Edit2, 
  Trash2,
  CheckCircle2,
  Truck,
  XCircle,
  Clock
} from 'lucide-react';

const Commandes = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const orders = [
    { id: '#ORD-9281', customer: 'Karim Brahimi', phone: '0550 12 34 56', status: 'confirmé', total: '14,500 DA', date: '26/04/2026', city: 'Alger' },
    { id: '#ORD-9282', customer: 'Lydia Mansouri', phone: '0661 98 76 54', status: 'en_attente', total: '8,200 DA', date: '26/04/2026', city: 'Oran' },
    { id: '#ORD-9283', customer: 'Amine Zidi', phone: '0770 44 33 22', status: 'expédié', total: '21,000 DA', date: '25/04/2026', city: 'Constantine' },
    { id: '#ORD-9284', customer: 'Sami Fekir', phone: '0555 11 22 33', status: 'livré', total: '5,400 DA', date: '25/04/2026', city: 'Sétif' },
    { id: '#ORD-9285', customer: 'Yasmine Laribi', phone: '0662 00 11 22', status: 'retourné', total: '12,000 DA', date: '24/04/2026', city: 'Batna' },
    { id: '#ORD-9286', customer: 'Omar Benali', phone: '0790 55 66 77', status: 'annulé', total: '9,800 DA', date: '24/04/2026', city: 'Alger' },
  ];

  const getStatusBadge = (status) => {
    const styles = {
      confirmé: 'bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800/50',
      en_attente: 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/50',
      expédié: 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800/50',
      livré: 'bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800/50',
      retourné: 'bg-red-50 text-red-600 border-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/50',
      annulé: 'bg-slate-50 text-slate-600 border-slate-100 dark:bg-slate-800/20 dark:text-slate-400 dark:border-slate-700/50',
    };
    
    const icons = {
      confirmé: <CheckCircle2 size={12} />,
      en_attente: <Clock size={12} />,
      expédié: <Truck size={12} />,
      livré: <CheckCircle2 size={12} />,
      retourné: <XCircle size={12} />,
      annulé: <XCircle size={12} />,
    };

    return (
      <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border flex items-center gap-1.5 w-fit ${styles[status]}`}>
        {icons[status]}
        {status.replace('_', ' ')}
      </span>
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-heading dark:text-white tracking-tight">
            {t('feat_orders')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Gérez et suivez toutes vos ventes en temps réel.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-sm">
            <Download size={18} />
            {t('feat_export')}
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-extrabold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all active:scale-95 text-sm">
            <Plus size={18} />
            Nouvelle Commande
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-[28px] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {['all', 'en_attente', 'confirmé', 'expédié', 'livré', 'retourné'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === filter 
                ? 'bg-primary text-white shadow-md shadow-primary/20' 
                : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {filter === 'all' ? 'Tous' : filter.replace('_', ' ').toUpperCase()}
            </button>
          ))}
        </div>
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Rechercher par client, ID ou téléphone..." 
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 dark:text-white transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">ID</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Client</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Statut</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Date</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Ville</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Total</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="text-sm font-black text-primary">{order.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-bold text-heading dark:text-white">{order.customer}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{order.phone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(order.status)}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-slate-500">{order.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{order.city}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-black text-heading dark:text-white">{order.total}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-primary transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-emerald-500 transition-colors">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-heading dark:hover:text-white transition-colors">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">Affichage de 1 à 6 sur 42 commandes</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-400 rounded-lg text-xs font-bold disabled:opacity-50" disabled>Précédent</button>
            <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-bold">1</button>
            <button className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors">2</button>
            <button className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors">Suivant</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commandes;
