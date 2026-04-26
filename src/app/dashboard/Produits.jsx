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
  ArrowUpRight,
  MoreVertical,
  Box,
  LayoutGrid,
  List
} from 'lucide-react';

const Produits = () => {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('Tous');

  const products = [
    { 
      id: 1, 
      name: 'Basket Air Max 270', 
      sku: 'SHOE-AM270-W', 
      price: '14,500 DA', 
      stock: 42, 
      maxStock: 100,
      variants: [
        { color: '#00a2ff', size: '42' },
        { color: '#000000', size: '41' },
        { color: '#ef4444', size: '43' },
      ], 
      category: 'Chaussures', 
      image: 'https://picsum.photos/seed/shoe1/400/400',
      status: 'optimal'
    },
    { 
      id: 2, 
      name: 'T-Shirt Cotton Premium', 
      sku: 'TSHIRT-CP-BLK', 
      price: '3,200 DA', 
      stock: 12, 
      maxStock: 50,
      variants: [
        { color: '#000000', size: 'M' },
        { color: '#ffffff', size: 'L' },
      ], 
      category: 'Vêtements', 
      image: 'https://picsum.photos/seed/shirt1/400/400',
      status: 'low'
    },
    { 
      id: 3, 
      name: 'Veste Softshell Waterproof', 
      sku: 'JACK-SW-BLU', 
      price: '9,800 DA', 
      stock: 0, 
      maxStock: 30,
      variants: [
        { color: '#3b82f6', size: 'XL' },
      ], 
      category: 'Vêtements', 
      image: 'https://picsum.photos/seed/jacket/400/400',
      status: 'out'
    },
    { 
      id: 4, 
      name: 'Sac à Dos Explorer 30L', 
      sku: 'BAG-EXP30-GRN', 
      price: '7,500 DA', 
      stock: 86, 
      maxStock: 100,
      variants: [
        { color: '#10b981', size: 'One Size' },
      ], 
      category: 'Accessoires', 
      image: 'https://picsum.photos/seed/bag/400/400',
      status: 'optimal'
    },
  ];

  const getStockColor = (status) => {
    switch (status) {
      case 'optimal': return 'bg-emerald-500';
      case 'low': return 'bg-amber-500';
      case 'out': return 'bg-red-500';
      default: return 'bg-slate-500';
    }
  };

  const categories = ['Tous', 'Chaussures', 'Vêtements', 'Accessoires', 'Électronique'];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      {/* Premium Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-heading dark:text-white tracking-tight">
            {t('feat_stock')}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Gérez votre catalogue produit et optimisez vos niveaux de stock.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
            <Filter size={18} />
            {t('feat_export')}
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 hover:bg-primary-hover hover:-translate-y-0.5 transition-all active:scale-95 text-base">
            <Plus size={20} />
            Nouveau Produit
          </button>
        </div>
      </div>

      {/* KPI Cards - Re-designed for high-end look */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Total Produits', value: '124', icon: <Package size={24} />, color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50' },
          { label: 'Stock Faible', value: '08', icon: <AlertTriangle size={24} />, color: 'from-amber-500 to-amber-600', bg: 'bg-amber-50' },
          { label: 'Variantes Actives', value: '842', icon: <Layers size={24} />, color: 'from-purple-500 to-purple-600', bg: 'bg-purple-50' },
        ].map((kpi, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-32 h-32 ${kpi.bg} dark:bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110`} />
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${kpi.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20`}>
              {kpi.icon}
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{kpi.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-black text-heading dark:text-white">{kpi.value}</h3>
              <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold">
                <ArrowUpRight size={14} />
                +2.4%
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-black tracking-tight transition-all ${
                activeCategory === cat 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Rechercher un produit..." 
              className="pl-11 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 dark:text-white w-64 transition-all"
            />
          </div>
          <div className="flex items-center bg-slate-50 dark:bg-slate-800 p-1.5 rounded-2xl">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <LayoutGrid size={18} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid - Re-designed for high-end look */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white dark:bg-slate-900 rounded-[40px] p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
            {/* Status Badge Over Image */}
            <div className="absolute top-8 right-8 z-10">
              <div className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-white shadow-lg ${getStockColor(product.status)}`}>
                {product.status === 'optimal' ? 'En Stock' : product.status === 'low' ? 'Attention' : 'Rupture'}
              </div>
            </div>

            {/* Product Image Section */}
            <div className="relative aspect-square rounded-[32px] overflow-hidden mb-6 bg-slate-50 dark:bg-slate-800">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                <button className="p-3 bg-white text-heading rounded-2xl hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl">
                  <Edit3 size={20} />
                </button>
                <button className="p-3 bg-white text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-xl">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest">{product.category}</p>
                  <h3 className="text-xl font-black text-heading dark:text-white leading-tight">{product.name}</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">{product.sku}</p>
                </div>
                <button className="text-slate-300 hover:text-primary transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>

              {/* Price & Stock Stats */}
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-3xl">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-0.5 tracking-wider">Prix</p>
                  <p className="text-lg font-black text-heading dark:text-white">{product.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400 font-bold uppercase mb-0.5 tracking-wider">Stock</p>
                  <p className={`text-lg font-black ${product.stock === 0 ? 'text-red-500' : 'text-emerald-500'}`}>{product.stock}</p>
                </div>
              </div>

              {/* Stock Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase text-slate-400 tracking-widest">
                  <span>Niveau de Stock</span>
                  <span>{Math.round((product.stock / product.maxStock) * 100)}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${getStockColor(product.status)}`}
                    style={{ width: `${(product.stock / product.maxStock) * 100}%` }}
                  />
                </div>
              </div>

              {/* Variants Section */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800/50">
                <div className="flex -space-x-2">
                  {product.variants.map((v, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[8px] font-bold shadow-sm overflow-hidden" style={{ backgroundColor: v.color }}>
                      <span className={`${v.color === '#ffffff' ? 'text-black' : 'text-white'} opacity-0 group-hover:opacity-100 transition-opacity`}>{v.size}</span>
                    </div>
                  ))}
                  {product.variants.length > 3 && (
                    <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[8px] font-black text-slate-500 shadow-sm">
                      +{product.variants.length - 3}
                    </div>
                  )}
                </div>
                <button className="text-xs font-black text-primary hover:underline flex items-center gap-1 group/btn">
                  Détails
                  <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination / Load More */}
      <div className="flex flex-col items-center gap-4 py-10">
        <button className="px-10 py-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[24px] text-sm font-black text-slate-500 hover:text-primary hover:border-primary/50 transition-all shadow-sm flex items-center gap-3 group">
          Afficher plus de produits
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Affichage de 4 sur 124 produits</p>
      </div>
    </div>
  );
};

export default Produits;
