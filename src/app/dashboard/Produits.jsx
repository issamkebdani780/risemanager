import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Package, 
  Search, 
  Plus, 
  Layers, 
  AlertTriangle, 
  ChevronRight, 
  Edit3, 
  Trash2,
  Filter,
  Download,
  MoreVertical,
  Eye,
  ExternalLink
} from 'lucide-react';

const Produits = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');

  const products = [
    { 
      id: 1, 
      name: 'Basket Air Max 270', 
      sku: 'SHOE-AM270-W', 
      price: '14,500 DA', 
      stock: 42, 
      maxStock: 100,
      category: 'Chaussures', 
      image: 'https://picsum.photos/seed/shoe1/100/100',
      status: 'optimal'
    },
    { 
      id: 2, 
      name: 'T-Shirt Cotton Premium', 
      sku: 'TSHIRT-CP-BLK', 
      price: '3,200 DA', 
      stock: 12, 
      maxStock: 50,
      category: 'Vêtements', 
      image: 'https://picsum.photos/seed/shirt1/100/100',
      status: 'low'
    },
    { 
      id: 3, 
      name: 'Veste Softshell Waterproof', 
      sku: 'JACK-SW-BLU', 
      price: '9,800 DA', 
      stock: 0, 
      maxStock: 30,
      category: 'Vêtements', 
      image: 'https://picsum.photos/seed/jacket/100/100',
      status: 'out'
    },
    { 
      id: 4, 
      name: 'Sac à Dos Explorer 30L', 
      sku: 'BAG-EXP30-GRN', 
      price: '7,500 DA', 
      stock: 86, 
      maxStock: 100,
      category: 'Accessoires', 
      image: 'https://picsum.photos/seed/bag/100/100',
      status: 'optimal'
    },
  ];

  const getStockStatusStyle = (status) => {
    switch (status) {
      case 'optimal': return 'bg-emerald-500';
      case 'low': return 'bg-amber-500';
      case 'out': return 'bg-red-500';
      default: return 'bg-slate-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'optimal': return 'En Stock';
      case 'low': return 'Stock Faible';
      case 'out': return 'Rupture';
      default: return 'Inconnu';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-heading dark:text-white tracking-tight">
            {t('feat_stock')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Gérez votre inventaire et vos niveaux de stock en temps réel.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-sm">
            <Download size={18} />
            {t('feat_export')}
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-extrabold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all active:scale-95 text-sm">
            <Plus size={18} />
            Nouveau Produit
          </button>
        </div>
      </div>

      {/* KPI Stats (Minimal) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: 'Total Produits', value: '124', color: 'text-blue-500' },
          { label: 'Stock Faible', value: '08', color: 'text-amber-500' },
          { label: 'Rupture', value: '03', color: 'text-red-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-slate-100 dark:border-slate-800 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{stat.label}</p>
            <h3 className={`text-2xl font-black ${stat.color}`}>{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Filters Area */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-[28px] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {['Tous', 'Chaussures', 'Vêtements', 'Accessoires'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-primary text-white shadow-md shadow-primary/20' 
                : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Rechercher un produit, SKU..." 
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 dark:text-white transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Products Table - Matching Commandes.jsx style */}
      <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Produit</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">SKU</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Catégorie</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Prix</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Stock</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden flex-shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-sm font-bold text-heading dark:text-white">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-mono font-medium text-slate-500">{product.sku}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-lg text-[10px] font-black uppercase tracking-widest">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-black text-heading dark:text-white">{product.price}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-32">
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-[10px] font-black uppercase ${product.stock === 0 ? 'text-red-500' : 'text-slate-500'}`}>
                          {getStatusText(product.status)}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">{product.stock}/{product.maxStock}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${getStockStatusStyle(product.status)}`}
                          style={{ width: `${(product.stock / product.maxStock) * 100}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-primary transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-emerald-500 transition-colors">
                        <Edit3 size={16} />
                      </button>
                      <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-400 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
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
          <p className="text-xs text-slate-500 font-medium">Affichage de 4 sur 124 produits</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors">Précédent</button>
            <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-bold">1</button>
            <button className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors">Suivant</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produits;
