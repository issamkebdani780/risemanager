import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Users, 
  Zap,
  ArrowUpRight,
  ChevronDown,
  Calendar
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  AreaChart,
  Area
} from 'recharts';

const Statistiques = () => {
  const { t } = useTranslation();

  const kpis = [
    { title: 'Taux de Conversion', value: '3.8%', trend: '+0.5%', isPositive: true, icon: <Zap size={24} className="text-blue-500" />, color: 'bg-blue-500' },
    { title: 'Panier Moyen', value: '12,400 DA', trend: '+12%', isPositive: true, icon: <Target size={24} className="text-emerald-500" />, color: 'bg-emerald-500' },
    { title: 'Taux de Livraison', value: '78%', trend: '-2.4%', isPositive: false, icon: <BarChart3 size={24} className="text-purple-500" />, color: 'bg-purple-500' },
    { title: 'Nouveaux Clients', value: '2,450', trend: '+18%', isPositive: true, icon: <Users size={24} className="text-orange-500" />, color: 'bg-orange-500' },
  ];

  const salesData = [
    { name: 'J1', sales: 400, confirmed: 240 },
    { name: 'J2', sales: 300, confirmed: 139 },
    { name: 'J3', sales: 200, confirmed: 980 },
    { name: 'J4', sales: 278, confirmed: 390 },
    { name: 'J5', sales: 189, confirmed: 480 },
    { name: 'J6', sales: 239, confirmed: 380 },
    { name: 'J7', sales: 349, confirmed: 430 },
    { name: 'J8', sales: 400, confirmed: 240 },
    { name: 'J9', sales: 300, confirmed: 139 },
    { name: 'J10', sales: 200, confirmed: 980 },
    { name: 'J11', sales: 278, confirmed: 390 },
    { name: 'J12', sales: 189, confirmed: 480 },
  ];

  const sourcesData = [
    { name: 'Facebook', value: 400, color: '#00a2ff' },
    { name: 'Instagram', value: 300, color: '#8b5cf6' },
    { name: 'Direct', value: 200, color: '#10b981' },
    { name: 'Autre', value: 100, color: '#f59e0b' },
  ];

  const agentPerformance = [
    { name: 'Ahmed B.', tasks: 142, success: '92%', avatar: 'AB' },
    { name: 'Lydia M.', tasks: 128, success: '88%', avatar: 'LM' },
    { name: 'Sami F.', tasks: 96, success: '75%', avatar: 'SF' },
    { name: 'Karim Z.', tasks: 112, success: '82%', avatar: 'KZ' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-heading dark:text-white tracking-tight">
            {t('feat_analytics')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Analysez vos performances et optimisez votre stratégie.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-2xl text-sm shadow-sm">
            <Calendar size={18} className="text-primary" />
            30 derniers jours
            <ChevronDown size={14} />
          </div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-slate-100 dark:border-slate-800 shadow-sm group hover:shadow-lg transition-all">
            <div className={`w-12 h-12 rounded-2xl ${kpi.color} bg-opacity-10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
              {kpi.icon}
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{kpi.title}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-black text-heading dark:text-white">{kpi.value}</h3>
              <span className={`flex items-center gap-0.5 text-xs font-black ${kpi.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                {kpi.isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Bar Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-black text-heading dark:text-white">Évolution des Ventes</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Confirmé</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">En attente</span>
              </div>
            </div>
          </div>
          
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }} 
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                />
                <Bar dataKey="confirmed" fill="#00a2ff" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="sales" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart for Sources */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <h3 className="text-lg font-black text-heading dark:text-white mb-6">Sources de Ventes</h3>
          <div className="flex-1 h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {sourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 mt-4">
            {sourcesData.map((source, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: source.color }} />
                  <span className="text-xs font-bold text-slate-500">{source.name}</span>
                </div>
                <span className="text-xs font-black text-heading dark:text-white">{source.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Area Chart for Growth */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm relative">
          <h3 className="text-lg font-black text-heading dark:text-white mb-8">Croissance de l'Audience</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00a2ff" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#00a2ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }} />
                <Tooltip />
                <Area type="monotone" dataKey="sales" stroke="#00a2ff" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Agent Performance List */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <h3 className="text-lg font-black text-heading dark:text-white mb-8">Performance Agents</h3>
          <div className="space-y-6 flex-1">
            {agentPerformance.map((agent, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center font-black text-slate-500 dark:text-slate-400 text-sm shadow-inner group-hover:text-primary transition-colors">
                  {agent.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-heading dark:text-white">{agent.name}</p>
                  <p className="text-[10px] text-slate-500 font-medium">{agent.tasks} tâches traitées</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-emerald-500">{agent.success}</p>
                  <p className="text-[8px] font-black uppercase text-slate-400 tracking-wider">Succès</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-3 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
            Rapport détaillé d'équipe <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistiques;
