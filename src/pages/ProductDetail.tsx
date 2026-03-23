import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  Minus,
  Plus,
  Info
} from 'lucide-react';
import { products } from '../constants/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(100);
  const [selectedSize, setSelectedSize] = useState('M');

  const product = useMemo(() => {
    return products.find(p => p.id === Number(id));
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-serif italic mb-6">Товар не найден</h2>
          <button 
            onClick={() => navigate('/hoodies')}
            className="px-8 py-4 bg-black text-white font-bold uppercase text-[11px] tracking-widest rounded-full"
          >
            Вернуться в каталог
          </button>
        </div>
      </div>
    );
  }

  const currentPrice = useMemo(() => {
    if (quantity >= product.bulkQty) {
      return product.bulkPrice;
    }
    return product.price;
  }, [quantity, product]);

  const totalPrice = (currentPrice * quantity).toFixed(2);

  const handleQuantityChange = (val: number) => {
    if (val < 100) return; // Minimum order 100
    setQuantity(val);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#fcfaf7] pt-32 pb-20 px-8"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-4 mb-12 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
          <button onClick={() => navigate('/')} className="hover:text-black transition-colors">Главная</button>
          <ChevronRight size={12} />
          <button onClick={() => navigate('/hoodies')} className="hover:text-black transition-colors">Худи</button>
          <ChevronRight size={12} />
          <span className="text-black">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-20">
          {/* Image Gallery */}
          <div className="lg:col-span-7">
            <div className="sticky top-32 space-y-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-neutral-100 border border-black/5"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-neutral-100 border border-black/5 cursor-pointer opacity-50 hover:opacity-100 transition-all">
                    <img 
                      src={product.image} 
                      alt={`${product.name} ${i}`} 
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-4 mb-8 px-4 py-1.5 bg-black text-white rounded-full">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{product.status}</span>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">Арт: {product.article}</span>
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">Склад: {product.stock}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif italic tracking-tighter leading-tight mb-8">
              {product.name}
            </h1>

            <p className="text-lg text-neutral-500 leading-relaxed mb-12">
              {product.description}
            </p>

            {/* Price Calculator */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-black/5 shadow-sm mb-12">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Цена за единицу</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black tracking-tighter">${currentPrice}</span>
                    {quantity < product.bulkQty && (
                      <span className="text-sm text-emerald-600 font-bold">
                        Скидка ${ (product.price - product.bulkPrice).toFixed(1) } при заказе от {product.bulkQty} шт
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">Итого (без доставки)</div>
                  <div className="text-3xl font-serif italic text-neutral-900">${totalPrice}</div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-6 mb-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest">Количество (мин. 100 шт)</span>
                  <div className="flex items-center bg-neutral-100 rounded-full p-1">
                    <button 
                      onClick={() => handleQuantityChange(quantity - 50)}
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-all"
                    >
                      <Minus size={16} />
                    </button>
                    <input 
                      type="number" 
                      value={quantity}
                      onChange={(e) => handleQuantityChange(Number(e.target.value))}
                      className="w-20 bg-transparent border-none text-center font-bold text-sm focus:ring-0"
                    />
                    <button 
                      onClick={() => handleQuantityChange(quantity + 50)}
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-all"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-black"
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((quantity / 1000) * 100, 100)}%` }}
                  />
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-6 mb-12">
                <span className="text-[11px] font-bold uppercase tracking-widest">Размерная сетка</span>
                <div className="flex flex-wrap gap-3">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'].map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-full border text-[10px] font-bold transition-all ${selectedSize === size ? 'bg-black text-white border-black' : 'border-black/10 hover:border-black'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full py-6 bg-black text-white font-bold uppercase text-[11px] tracking-[0.4em] rounded-full hover:bg-neutral-800 transition-all shadow-xl flex items-center justify-center gap-4">
                Добавить в заказ <ShoppingBag size={18} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-black/5">
                <div className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-black">
                  <Truck size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1">Доставка</div>
                  <div className="text-xs text-neutral-500">Red Cargo 10–20 дней</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-black/5">
                <div className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-black">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1">Гарантия</div>
                  <div className="text-xs text-neutral-500">Контроль качества</div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="mt-16 pt-16 border-t border-black/5">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-10 text-neutral-400">Характеристики</h3>
              <div className="space-y-6">
                {[
                  { label: 'Материал', value: product.specs.split(',')[0] },
                  { label: 'Плотность', value: product.specs.split(',')[1] || '330 г/м²' },
                  { label: 'Производство', value: product.origin },
                  { label: 'Особенности', value: product.specs.split(',')[2] || 'Усиленные швы' },
                ].map((spec, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-neutral-400">{spec.label}</span>
                    <span className="font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
