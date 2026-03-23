import React from 'react';
import { 
  Truck, 
  CreditCard, 
  Package, 
  ArrowRight, 
  Factory,
  ArrowUpRight,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 'blouses', name: 'Блузы', desc: 'Классика и повседневные модели для офиса и магазина', image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=800&auto=format&fit=crop' },
  { id: 'pants', name: 'Брюки', desc: 'Прямые, зауженные, чиносы под любой стиль', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop' },
  { id: 'hoodies', name: 'Худи', desc: 'Oversize и фитнес, с принтами или однотонные', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop' },
  { id: 'tshirts', name: 'Футболки', desc: 'Базовые, принт, поло для униформы и мерча', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop' },
  { id: 'sweatshirts', name: 'Свитшоты', desc: 'Уличный стиль, с капюшоном и без', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop' },
  { id: 'suits', name: 'Костюмы', desc: 'Деловые и спортивные комплекты', image: 'https://images.unsplash.com/photo-1594932224828-b4b057b7d6ee?q=80&w=800&auto=format&fit=crop' },
  { id: 'school', name: 'Школьная форма', desc: 'Классика и современные варианты по ГОСТ', image: 'https://images.unsplash.com/photo-1503919919749-6466c55d3c3f?q=80&w=800&auto=format&fit=crop' },
];

const advantages = [
  { icon: <Factory className="w-6 h-6" />, title: 'Собственное производство', desc: 'В Бишкеке — шьём под ваши размеры и ткани с 2014 года' },
  { icon: <Package className="w-6 h-6" />, title: 'Опт от 100 шт', desc: 'Гибкие партии, скидки от объема, минимальная сумма заказа' },
  { icon: <Truck className="w-6 h-6" />, title: 'Быстрая доставка', desc: '10 дней из Бишкека (Red Cargo), 20 дней под заказ из Китая' },
  { icon: <CreditCard className="w-6 h-6" />, title: 'Оплата по счету', desc: 'Только официально, 18% НДС с возвратом для экспорта' },
];

const steps = [
  { number: '01', title: 'Выберите товары', desc: 'Каталог с фильтрами по размеру, цвету, материалу' },
  { number: '02', title: 'Соберите корзину', desc: 'Укажите количество, проверьте скидки' },
  { number: '03', title: 'Отправьте заявку', desc: 'Заполните реквизиты (ИНН, адрес, доставка)' },
  { number: '04', title: 'Получите КП и счет', desc: 'PDF в личном кабинете или на email' },
  { number: '05', title: 'Оплатите и получите', desc: 'Отгрузка после оплаты, статусы заказа онлайн' },
];

const partners = [
  { name: 'Мода KG', case: '5000+ единиц школьной формы' },
  { name: 'Textile PRO', case: 'Опт худи и свитшотов' },
  { name: 'Гранд Отель', case: 'Униформа для персонала' },
  { name: 'SportWear', case: 'Пошив брюк и футболок' },
  { name: 'Urban Style', case: 'Коллекция свитшотов' },
  { name: 'School Plus', case: 'Школьная форма по ГОСТ' },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f3f0eb] -z-10 hidden xl:block"></div>
        <div className="max-w-[1600px] mx-auto px-8 w-full grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-4 mb-10 px-6 py-2 bg-white border border-black/5 rounded-full shadow-sm">
                <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Опт от 100 единиц</span>
              </div>
              <h1 className="text-[18vw] lg:text-[12vw] font-serif italic text-editorial mb-12 leading-[0.8]">
                Fashion <br /> 
                <span className="not-italic font-sans font-black uppercase tracking-[-0.06em] text-neutral-900">Production</span>
              </h1>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <p className="text-xl text-neutral-500 leading-relaxed max-w-md">
                  Собственное производство в Бишкеке. Шьем стильную одежду для вашего бизнеса с 2014 года. Блузы, худи, костюмы и школьная форма под вашим брендом.
                </p>
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-6">
                    <button className="px-12 py-6 bg-black text-white font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-neutral-800 transition-all flex items-center justify-center gap-4 group rounded-full">
                      Начать проект <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex -space-x-4">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-[#fcfaf7] bg-neutral-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" referrerPolicy="no-referrer" />
                        </div>
                      ))}
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 leading-tight">
                      <span className="text-black">500+</span> довольных <br /> партнеров по СНГ
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-4 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop" 
                alt="Fashion Editorial" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <div className="text-xs font-bold uppercase tracking-[0.3em] mb-3 opacity-60">Локация</div>
                <div className="text-3xl font-serif italic">Бишкек, Кыргызстан</div>
              </div>
            </motion.div>
            
            {/* Floating Stat Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-12 w-48 h-48 bg-white p-8 rounded-[2.5rem] shadow-2xl hidden xl:flex flex-col justify-center"
            >
              <div className="text-5xl font-black mb-2 tracking-tighter">10+</div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 leading-tight">Лет опыта <br /> на рынке</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Text */}
      <div className="py-10 bg-black text-white overflow-hidden border-y border-white/10">
        <div className="flex gap-20 animate-marquee whitespace-nowrap text-[10vw] font-black uppercase tracking-tighter leading-none opacity-20 select-none">
          <span>Wholesale Production</span>
          <span>Quality First</span>
          <span>Bishkek Factory</span>
          <span>Wholesale Production</span>
          <span>Quality First</span>
          <span>Bishkek Factory</span>
        </div>
      </div>

      {/* Categories Grid */}
      <section id="categories" className="py-40 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-3xl">
              <div className="text-[11px] font-bold uppercase tracking-[0.5em] mb-8 text-neutral-400">Каталог продукции</div>
              <h2 className="text-6xl md:text-9xl font-serif italic tracking-tighter leading-[0.85]">Что мы <br /> производим</h2>
            </div>
            <div className="flex items-center gap-12">
              <div className="text-right hidden md:block">
                <div className="text-3xl font-serif italic mb-2">7+ Категорий</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">Более 1000 моделей</div>
              </div>
              <div className="flex gap-4">
                <button className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <ArrowRight className="w-6 h-6 rotate-180" />
                </button>
                <button className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((cat, idx) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="group cursor-pointer"
                onClick={() => cat.id === 'hoodies' && navigate('/hoodies')}
              >
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 bg-neutral-100">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-700"></div>
                  <div className="absolute inset-0 p-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                    <p className="text-white/80 text-sm mb-6 leading-relaxed max-w-xs">{cat.desc}</p>
                    <button className="w-fit px-8 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-widest rounded-full shadow-2xl hover:bg-neutral-100 transition-colors">
                      Смотреть модели
                    </button>
                  </div>
                </div>
                <div className="flex items-baseline justify-between border-b border-black/5 pb-6">
                  <h3 className="text-3xl font-bold tracking-tight">{cat.name}</h3>
                  <span className="text-neutral-300 font-serif italic text-xl">0{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages - Premium Bento Layout */}
      <section id="advantages" className="py-40 px-8 bg-[#0a0a0a] text-white rounded-[4rem] mx-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="text-[11px] font-bold uppercase tracking-[0.5em] mb-10 text-neutral-500">Почему выбирают нас</div>
              <h2 className="text-6xl md:text-8xl font-serif italic leading-[0.9] mb-12 tracking-tighter">Преимущества <br /> фабрики</h2>
              <p className="text-neutral-400 text-xl leading-relaxed mb-16 max-w-md">
                Мы создали систему, которая позволяет нашим партнерам получать качественный продукт в кратчайшие сроки с минимальными рисками.
              </p>
              <div className="flex items-center gap-8 p-8 border border-white/10 rounded-3xl bg-white/5 w-fit">
                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold uppercase tracking-widest mb-1">С 2014 года</div>
                  <div className="text-neutral-500 text-sm">Надежность проверенная временем</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
              {advantages.map((adv, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-12 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-all group"
                >
                  <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-500">
                    {adv.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 tracking-tight">{adv.title}</h3>
                  <p className="text-neutral-500 text-base leading-relaxed">{adv.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Brutalist/Technical */}
      <section id="order" className="py-40 px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-32 gap-8">
            <div className="max-w-3xl">
              <div className="text-[11px] font-bold uppercase tracking-[0.5em] mb-8 text-neutral-400">Процесс работы</div>
              <h2 className="text-6xl md:text-9xl font-serif italic tracking-tighter leading-[0.85]">Как заказать <br /> партию</h2>
            </div>
            <div className="text-neutral-400 text-sm font-mono uppercase tracking-widest">Step by step guide</div>
          </div>

          <div className="grid lg:grid-cols-5 gap-0 border-t border-black/10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-12 border-r border-b border-black/10 group hover:bg-black hover:text-white transition-all duration-700"
              >
                <div className="text-7xl font-black mb-12 opacity-10 group-hover:opacity-20 transition-opacity font-mono">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">{step.title}</h3>
                <p className="text-sm text-neutral-400 group-hover:text-neutral-300 leading-relaxed">{step.desc}</p>
                <div className="absolute bottom-12 right-12 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 p-16 bg-[#f3f0eb] rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex items-center gap-12">
              <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center shadow-xl">
                <FileText className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-4xl font-bold mb-3 tracking-tight">Готовы обсудить проект?</h4>
                <p className="text-neutral-500 text-lg">Получите индивидуальное коммерческое предложение сегодня.</p>
              </div>
            </div>
            <button className="px-16 py-8 bg-black text-white font-bold uppercase text-[11px] tracking-[0.4em] hover:bg-neutral-800 transition-all rounded-full shadow-2xl">
              Запросить расчет
            </button>
          </div>
        </div>
      </section>

      {/* Delivery & Payment - Editorial Split */}
      <section id="delivery" className="py-40 px-8 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="aspect-[3/4] rounded-[4rem] overflow-hidden grayscale"
            >
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" 
                alt="Logistics Editorial" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-16 -right-16 w-80 h-80 bg-black text-white p-12 rounded-[4rem] flex flex-col justify-center shadow-2xl"
            >
              <div className="text-6xl font-serif italic mb-4">10 дней</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-400 leading-relaxed">Средний срок <br /> доставки по СНГ <br /> (Red Cargo)</div>
            </motion.div>
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.5em] mb-10 text-neutral-400">Логистика и финансы</div>
            <h2 className="text-6xl md:text-8xl font-serif italic mb-16 tracking-tighter leading-[0.9]">Доставка <br /> и оплата</h2>
            
            <div className="space-y-16">
              <div className="flex gap-10">
                <div className="w-16 h-16 rounded-3xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <Truck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-6 tracking-tight">Гибкая логистика</h4>
                  <ul className="space-y-4 text-neutral-500 text-base">
                    <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-black rounded-full"></span> Из Бишкека: 10 дней Red Cargo</li>
                    <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-black rounded-full"></span> Из Китая: 20 дней (трикотаж, джинса)</li>
                    <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-black rounded-full"></span> Самовывоз со склада в Бишкеке</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-10">
                <div className="w-16 h-16 rounded-3xl bg-neutral-100 flex items-center justify-center shrink-0">
                  <CreditCard className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-6 tracking-tight">Прозрачные расчеты</h4>
                  <ul className="space-y-4 text-neutral-500 text-base">
                    <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-black rounded-full"></span> 100% безналичный расчет</li>
                    <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-black rounded-full"></span> НДС 18% включен в стоимость</li>
                    <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-black rounded-full"></span> Полный пакет закрывающих документов</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners - Premium Marquee */}
      <section className="py-40 bg-[#fcfaf7] overflow-hidden border-t border-black/5">
        <div className="max-w-[1600px] mx-auto px-8 mb-24">
          <div className="text-center">
            <div className="text-[11px] font-bold uppercase tracking-[0.5em] mb-8 text-neutral-400">Нам доверяют</div>
            <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter">Наши партнеры</h2>
          </div>
        </div>
        
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((partner, idx) => (
            <div key={idx} className="inline-flex flex-col items-center justify-center px-16 py-14 bg-white border border-black/5 rounded-[3rem] min-w-[350px] shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="w-20 h-20 bg-neutral-50 rounded-[2rem] flex items-center justify-center font-black text-neutral-200 text-3xl mb-6">
                {partner.name[0]}
              </div>
              <div className="font-bold text-2xl mb-2 tracking-tight">{partner.name}</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-bold">{partner.case}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
