import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  DollarSign, 
  Wallet, 
  CreditCard, 
  Receipt, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Info
} from 'lucide-react';

const Finance = () => {
  const { t } = useTranslation();

  const financialStats = [
    { title: 'Revenu Total', value: '4.850.000 DA', color: 'bg-blue-500', icon: <DollarSign size={24} /> },
    { title: 'Dépenses Pub', value: '850.000 DA', color: 'bg-red-500', icon: <TrendingUp size={24} /> },
    { title: 'Frais Livraison', value: '420.000 DA', color: 'bg-orange-500', icon: <Receipt size={24} /> },
    { title: 'Profit Net', value: '1.980.000 DA', color: 'bg-emerald-500', icon: <Wallet size={24} /> },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-heading dark:text-white tracking-tight">
            {t('feat_finance')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Suivez votre rentabilité réelle et contrôlez vos flux financiers.
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-extrabold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all active:scale-95 text-sm">
          <CreditCard size={18} />
          Gérer les Paiements
        </button>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {financialStats.map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className={`w-12 h-12 rounded-2xl ${stat.color} bg-opacity-10 flex items-center justify-center mb-4 text-${stat.color.split('-')[1]}-500`}>
              {stat.icon}
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{stat.title}</p>
            <h3 className="text-2xl font-black text-heading dark:text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Profit Breakdown Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-black text-heading dark:text-white mb-8 flex items-center gap-2">
            Analyse de la Rentabilité
            <Info size={16} className="text-slate-400 cursor-help" />
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">Coût des Produits</span>
                <span className="text-xs font-black text-heading dark:text-white">1.600.000 DA</span>
              </div>
              <div className="h-2 w-full bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[35%] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">Marketing & Pub</span>
                <span className="text-xs font-black text-heading dark:text-white">850.000 DA</span>
              </div>
              <div className="h-2 w-full bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 w-[18%] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">Logistique & Livraison</span>
                <span className="text-xs font-black text-heading dark:text-white">420.000 DA</span>
              </div>
              <div className="h-2 w-full bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[10%] rounded-full" />
              </div>
            </div>
            <div className="pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Marge Net Globale</p>
                <p className="text-3xl font-black text-emerald-500">41%</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
                  <ArrowUpRight size={14} />
                  +5.2% ce mois
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions List */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-black text-heading dark:text-white mb-8">Transactions Récentes</h3>
          <div className="space-y-4">
            {[
              { label: 'Achat Stock - Fournisseur X', amount: '-120,000 DA', type: 'out', date: 'Il y a 2h' },
              { label: 'Versement Livraison - Yalidine', amount: '+45,000 DA', type: 'in', date: 'Il y a 5h' },
              { label: 'Budget Facebook Ads', amount: '-15,000 DA', type: 'out', date: 'Hier' },
              { label: 'Remboursement Client #9201', amount: '-4,500 DA', type: 'out', date: 'Hier' },
              { label: 'Versement Livraison - ZR Express', amount: '+28,000 DA', type: 'in', date: '25/04/2026' },
            ].map((tx, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-[20px] group hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.type === 'in' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                    {tx.type === 'in' ? <ArrowDownRight size={18} /> : <ArrowUpRight size={18} />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-heading dark:text-white">{tx.label}</p>
                    <p className="text-[10px] text-slate-500 font-medium">{tx.date}</p>
                  </div>
                </div>
                <span className={`text-sm font-black ${tx.type === 'in' ? 'text-emerald-500' : 'text-red-500'}`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            Voir tout l'historique financier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finance;
