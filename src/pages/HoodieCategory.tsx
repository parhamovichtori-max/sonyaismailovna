/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowUpRight, 
  ChevronDown, 
  Filter, 
  LayoutGrid, 
  List, 
  ShoppingBag, 
  Download, 
  Calculator,
  CheckCircle2,
  ArrowRight,
  Search,
  Heart,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const products = [
  {
    id: 1,
    name: 'Худи oversize черный',
    origin: 'Бишкек',
    article: 'HD-001-BK',
    specs: 'Футер 80/20, 330 г/м², карман-кенгуру',
    sizes: 'S–5XL, удлиненная спина',
    price: 6.5,
    bulkPrice: 5.9,
    bulkQty: '500+',
    stock: '1500 шт',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    status: 'В наличии'
  },
  {
    id: 2,
    name: 'Худи с капюшоном серый',
    origin: 'Бишкек',
    article: 'HD-002-GR',
    specs: 'Хлопок 100%, реглан, шнурки',
    sizes: 'XS–3XL, принт возможен',
    price: 7.0,
    bulkPrice: 6.3,
    bulkQty: '500+',
    stock: '10 дней',
    image: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?q=80&w=800&auto=format&fit=crop',
    status: 'Под заказ'
  },
  {
    id: 3,
    name: 'Худи вязаный бежевый',
    origin: 'Китай',
    article: 'HD-003-BE',
    specs: 'Крупная вязка, экопряжа',
    sizes: 'M–XXL, тренд 2026',
    price: 8.5,
    bulkPrice: 7.7,
    bulkQty: '300+',
    stock: '20 дней',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
    status: 'Под заказ'
  },
  {
    id: 4,
    name: 'Худи унисекс белый',
    origin: 'Бишкек',
    article: 'HD-004-WH',
    specs: 'Двойная манжета, для HoReCa',
    sizes: 'S–4XL, усиленные швы',
    price: 6.8,
    bulkPrice: 6.1,
    bulkQty: '500+',
    stock: '800 шт',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
    status: 'В наличии'
  },
  {
    id: 5,
    name: 'Худи slim-fit синий',
    origin: 'Бишкек',
    article: 'HD-005-BL',
    specs: 'Интерлок, без капюшона',
    sizes: 'S–XXL, спортивный крой',
    price: 6.2,
    bulkPrice: 5.6,
    bulkQty: '500+',
    stock: '1200 шт',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800&auto=format&fit=crop',
    status: 'В наличии'
  },
  {
    id: 6,
    name: 'Худи с принтом черный',
    origin: 'Бишкек',
    article: 'HD-006-BK',
    specs: 'Футер, DTF-принт спереди',
    sizes: 'M–4XL, мерч-вариант',
    price: 7.2,
    bulkPrice: 6.5,
    bulkQty: '500+',
    stock: '10 дней',
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=800&auto=format&fit=crop',
    status: 'Под заказ'
  },
  {
    id: 7,
    name: 'Худи оверсайз меланж',
    origin: 'Китай',
    article: 'HD-007-ME',
    specs: 'Вязка меланж, капюшон',
    sizes: 'L–5XL, уличный стиль',
    price: 8.0,
    bulkPrice: 7.2,
    bulkQty: '300+',
    stock: '20 дней',
    image: 'https://images.unsplash.com/photo-1513789172139-c1f25c0bc8e8?q=80&w=800&auto=format&fit=crop',
    status: 'Под заказ'
  },
  {
    id: 8,
    name: 'Худи классика зеленый',
    origin: 'Бишкек',
    article: 'HD-008-GR',
    specs: 'Хлопок, карман-кенгуру',
    sizes: 'S–3XL, базовый вариант',
    price: 6.7,
    bulkPrice: 6.0,
    bulkQty: '500+',
    stock: '2000 шт',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    status: 'В наличии'
  }
];

const filters = {
  origin: ['Бишкек (10 дней)', 'Китай (20 дней)'],
  style: ['oversize', 'классика', 'с капюшоном', 'без капюшона'],
  color: ['черный', 'серый', 'белый', 'синий', 'бежевый', 'зеленый'],
  size: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'],
  material: ['хлопок 100%', 'футер 80/20', 'интерлок']
};

export default function HoodieCategory() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#fcfaf7] pt-32 pb-20"
    >
      {/* Category Banner */}
      <section className="px-8 mb-24">
        <div className="max-w-[1600px] mx-auto">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors mb-12 group"
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Назад к каталогу
          </button>
          
          <div className="grid lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-4 mb-8 px-4 py-1.5 bg-black text-white rounded-full">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Категория</span>
              </div>
              <h1 className="text-7xl md:text-[10vw] font-serif italic tracking-tighter leading-[0.8] mb-10">
                Худи оптом <br /> 
                <span className="not-italic font-sans font-black uppercase tracking-[-0.04em] text-neutral-900">от 100 шт</span>
              </h1>
              <p className="text-xl text-neutral-500 max-w-xl leading-relaxed mb-12">
                Универсальные худи для мерча, униформы и стритвира. Собственное производство в Бишкеке + под заказ из Китая. Скидки от объема, оплата по счету, доставка Red Cargo 10–20 дней.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="px-10 py-5 bg-black text-white font-bold uppercase text-[11px] tracking-[0.3em] rounded-full hover:bg-neutral-800 transition-all flex items-center gap-3">
                  Запросить прайс <Download size={16} />
                </button>
                <button className="px-10 py-5 border border-black/10 font-bold uppercase text-[11px] tracking-[0.3em] rounded-full hover:bg-black hover:text-white transition-all flex items-center gap-3">
                  В корзину (массово) <ShoppingBag size={16} />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600" alt="Hoodie 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mt-12 grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?q=80&w=600" alt="Hoodie 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="sticky top-24 z-30 px-8 mb-12">
        <div className="max-w-[1600px] mx-auto glass rounded-3xl p-6 flex flex-wrap items-center justify-between gap-8 shadow-sm">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all text-[11px] font-bold uppercase tracking-widest ${showFilters ? 'bg-black text-white border-black' : 'border-black/10 hover:border-black'}`}
            >
              <Filter size={14} /> Фильтры
            </button>
            <div className="h-8 w-px bg-black/10 hidden md:block"></div>
            <div className="hidden md:flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-neutral-400">
              <span className="text-black">38</span> моделей | Цена от <span className="text-black">$6</span> | Опт от <span className="text-black">100 шт</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
              <input 
                type="text" 
                placeholder="Поиск по артикулу..." 
                className="pl-12 pr-6 py-3 bg-neutral-100 rounded-full border-none text-sm focus:ring-2 focus:ring-black/5 w-64"
              />
            </div>
            <div className="flex items-center bg-neutral-100 rounded-full p-1">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-neutral-400'}`}
              >
                <LayoutGrid size={18} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-all ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-neutral-400'}`}
              >
                <List size={18} />
              </button>
            </div>
            <select className="bg-transparent border-none text-[11px] font-bold uppercase tracking-widest focus:ring-0 cursor-pointer">
              <option>По популярности</option>
              <option>Сначала дешевле</option>
              <option>Сначала дороже</option>
              <option>Новинки</option>
            </select>
          </div>
        </div>

        {/* Expanded Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="max-w-[1600px] mx-auto overflow-hidden"
            >
              <div className="bg-white rounded-3xl p-10 mt-4 border border-black/5 shadow-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                {Object.entries(filters).map(([key, options]) => (
                  <div key={key}>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
                      {key === 'origin' ? 'По источнику' : 
                       key === 'style' ? 'Стиль' : 
                       key === 'color' ? 'Цвет' : 
                       key === 'size' ? 'Размер' : 'Материал'}
                    </h4>
                    <div className="space-y-3">
                      {options.map(opt => (
                        <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" className="w-4 h-4 rounded border-neutral-300 text-black focus:ring-black" />
                          <span className="text-sm text-neutral-600 group-hover:text-black transition-colors">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Product Grid */}
      <section className="px-8 mb-32">
        <div className="max-w-[1600px] mx-auto">
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
            {products.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`group bg-white rounded-[2.5rem] border border-black/5 overflow-hidden hover:shadow-2xl transition-all duration-500 ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
              >
                <div className={`relative overflow-hidden bg-neutral-100 ${viewMode === 'list' ? 'md:w-1/3 aspect-square' : 'aspect-[4/5]'}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${product.status === 'В наличии' ? 'bg-emerald-500 text-white' : 'bg-black/10 text-black'}`}>
                      {product.status}
                    </span>
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-bold uppercase tracking-widest text-black">
                      {product.origin}
                    </span>
                  </div>
                  <button className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                    <Heart size={18} />
                  </button>
                </div>

                <div className={`p-10 flex flex-col justify-between ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">{product.article}</span>
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{product.stock}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-neutral-600 transition-colors">{product.name}</h3>
                    <div className="space-y-2 mb-8">
                      <p className="text-sm text-neutral-500 flex items-center gap-2">
                        <span className="w-1 h-1 bg-neutral-300 rounded-full"></span> {product.specs}
                      </p>
                      <p className="text-sm text-neutral-500 flex items-center gap-2">
                        <span className="w-1 h-1 bg-neutral-300 rounded-full"></span> {product.sizes}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-black/5">
                    <div className="flex items-end justify-between mb-8">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Опт от 100 шт</div>
                        <div className="text-3xl font-black tracking-tighter">${product.price}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">От {product.bulkQty} шт</div>
                        <div className="text-2xl font-serif italic text-neutral-900">${product.bulkPrice}</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-neutral-800 transition-all">
                        В корзину
                      </button>
                      <button className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                        <ChevronDown size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-2">
              {[1, 2, 3, '...', 5].map((page, i) => (
                <button 
                  key={i}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${page === 1 ? 'bg-black text-white' : 'hover:bg-black/5'}`}
                >
                  {page}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">Показать по</span>
              <div className="flex bg-neutral-100 rounded-full p-1">
                {[12, 24, 48].map(num => (
                  <button 
                    key={num}
                    className={`px-4 py-2 rounded-full text-[10px] font-bold transition-all ${num === 24 ? 'bg-white shadow-sm' : 'text-neutral-400'}`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Selections */}
      <section className="py-32 px-8 bg-[#f3f0eb]">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-5xl font-serif italic mb-16 tracking-tighter">Популярные подборки</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Хиты продаж', desc: 'Топ-6 худи по заказам', icon: <CheckCircle2 className="text-emerald-500" /> },
              { title: 'Новинки', desc: '4 свежих модели сезона', icon: <ArrowUpRight className="text-blue-500" /> },
              { title: 'Комплекты', desc: 'Худи + свитшот + футболка (скидка 10%)', icon: <ShoppingBag className="text-orange-500" /> }
            ].map((item, i) => (
              <div key={i} className="p-12 bg-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-neutral-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-neutral-500 mb-8">{item.desc}</p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                  Смотреть подборку <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-40 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.5em] mb-8 text-neutral-400">Технические данные</div>
              <h2 className="text-6xl font-serif italic mb-10 tracking-tighter leading-none">Характеристики <br /> категории</h2>
              <p className="text-neutral-500 mb-12 leading-relaxed">
                Мы используем только проверенные полотна и фурнитуру. Все изделия проходят трехэтапный контроль качества перед отгрузкой.
              </p>
              <div className="space-y-6">
                <button className="w-full px-10 py-6 border border-black/10 rounded-full flex items-center justify-between hover:bg-black hover:text-white transition-all group">
                  <span className="text-[11px] font-bold uppercase tracking-widest">Скачать размерную сетку (PDF)</span>
                  <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                </button>
                <button className="w-full px-10 py-6 bg-black text-white rounded-full flex items-center justify-between hover:bg-neutral-800 transition-all group">
                  <span className="text-[11px] font-bold uppercase tracking-widest">Рассчитать стоимость</span>
                  <Calculator size={18} className="group-hover:rotate-12 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="border border-black/5 rounded-[3rem] overflow-hidden bg-white shadow-sm">
                {[
                  { label: 'Ткани', value: 'Футер 80/20, хлопок, интерлок, вязка' },
                  { label: 'Плотность', value: '280–400 г/м²' },
                  { label: 'Размеры', value: 'S–5XL, ростовки EU/RU' },
                  { label: 'Минимальная партия', value: '100 шт (любые цвета/размеры)' },
                  { label: 'Сроки', value: '10 дней (Бишкек) / 20 дней (Китай)' },
                  { label: 'Документы', value: 'Счет-фактура, сертификаты, НДС 18%' },
                ].map((row, i) => (
                  <div key={i} className={`grid grid-cols-1 md:grid-cols-3 p-10 items-center ${i !== 5 ? 'border-b border-black/5' : ''}`}>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-2 md:mb-0">{row.label}</div>
                    <div className="md:col-span-2 text-lg font-medium tracking-tight">{row.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-40 px-8 bg-black text-white rounded-[4rem] mx-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-32">
            <div className="text-[11px] font-bold uppercase tracking-[0.5em] mb-8 text-neutral-500">Алгоритм заказа</div>
            <h2 className="text-6xl md:text-8xl font-serif italic tracking-tighter">Как заказать <br /> худи оптом</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Выберите модель', desc: 'Укажите количество по размерам в корзине' },
              { step: '02', title: 'Проверьте скидку', desc: 'Автоматический пересчет от 100/300/500 шт' },
              { step: '03', title: 'Отправьте заявку', desc: 'Прикрепите реквизиты вашей компании' },
              { step: '04', title: 'Получите КП', desc: 'Расчет на email в течение 2 часов' }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-black font-mono opacity-10 mb-8 group-hover:opacity-20 transition-opacity">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
                {i < 3 && <ArrowRight className="absolute top-1/2 -right-6 text-neutral-800 hidden lg:block" size={32} />}
              </div>
            ))}
          </div>
          
          <div className="mt-32 flex justify-center">
            <button className="px-16 py-8 bg-white text-black font-bold uppercase text-[11px] tracking-[0.4em] rounded-full hover:bg-neutral-200 transition-all shadow-2xl">
              Начать подборку
            </button>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-40 px-8">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.5em] mb-10 text-neutral-400">Спецпредложение</div>
          <h2 className="text-6xl md:text-8xl font-serif italic mb-12 tracking-tighter leading-none">Готовы к опту?</h2>
          <p className="text-xl text-neutral-500 mb-20 max-w-2xl mx-auto">
            Оставьте заявку — подберем худи под ваш ассортимент и бюджет. Наш менеджер свяжется с вами в течение 15 минут.
          </p>
          
          <form className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-6">Ваше имя</label>
              <input type="text" placeholder="Иван Иванов" className="w-full px-8 py-6 bg-white border border-black/5 rounded-full focus:ring-2 focus:ring-black/5 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-6">Телефон</label>
              <input type="tel" placeholder="+7 (999) 000-00-00" className="w-full px-8 py-6 bg-white border border-black/5 rounded-full focus:ring-2 focus:ring-black/5 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-6">Email</label>
              <input type="email" placeholder="example@mail.com" className="w-full px-8 py-6 bg-white border border-black/5 rounded-full focus:ring-2 focus:ring-black/5 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 ml-6">Количество (шт)</label>
              <input type="number" placeholder="Например: 500" className="w-full px-8 py-6 bg-white border border-black/5 rounded-full focus:ring-2 focus:ring-black/5 outline-none" />
            </div>
            <div className="md:col-span-2 mt-8">
              <button className="w-full py-8 bg-black text-white font-bold uppercase text-[11px] tracking-[0.4em] rounded-full hover:bg-neutral-800 transition-all shadow-2xl">
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </section>
    </motion.div>
  );
}
