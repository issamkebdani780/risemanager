import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  DollarSign,
  ChevronRight
} from 'lucide-react';
import Logo from '../../../components/ui/Logo';

const DashboardSidebar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const menuItems = [
    { 
      path: '/dashboard', 
      label: t('demo_tab_dashboard'), 
      icon: <LayoutDashboard size={20} />,
      color: 'text-blue-500'
    },
    { 
      path: '/dashboard/commandes', 
      label: t('feat_orders'), 
      icon: <ShoppingCart size={20} />,
      color: 'text-emerald-500'
    },
    { 
      path: '/dashboard/produits', 
      label: t('feat_stock'), 
      icon: <Package size={20} />,
      color: 'text-orange-500'
    },
    { 
      path: '/dashboard/statistiques', 
      label: t('feat_analytics'), 
      icon: <BarChart3 size={20} />,
      color: 'text-purple-500'
    },
    { 
      path: '/dashboard/finance', 
      label: t('feat_finance'), 
      icon: <DollarSign size={20} />,
      color: 'text-pink-500'
    },
  ];

  return (
    <aside className="fixed left-4 top-4 bottom-4 w-64 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-[32px] border border-slate-100 dark:border-slate-800 flex flex-col shadow-xl z-50 transition-all duration-300 hidden lg:flex">
      {/* Sidebar Header */}
      <div className="p-6">
        <Link to="/dashboard" className="flex items-center gap-3">
          <Logo 
            iconClassName="w-8 h-8" 
            textClassName="text-xl font-black text-heading dark:text-white"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center justify-between px-4 py-3 rounded-2xl transition-all group
                ${isActive 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <span className={`${isActive ? 'text-primary' : item.color} transition-colors`}>
                  {item.icon}
                </span>
                <span className="text-sm font-bold tracking-tight">
                  {item.label}
                </span>
              </div>
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              )}
              {!isActive && (
                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-300" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer - Upgrade Card or User Info could go here */}
      <div className="p-4 mt-auto">
        <div className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 rounded-2xl border border-primary/10">
          <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Plan Pro</p>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-medium mb-3">Boostez vos ventes avec RiseManager.</p>
          <button className="w-full py-2 bg-white dark:bg-slate-800 text-xs font-bold text-primary rounded-xl shadow-sm border border-primary/10 hover:bg-primary hover:text-white transition-all">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
