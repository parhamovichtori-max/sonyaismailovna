import React from 'react';
import { Instagram, Send, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navigation = [
    { name: 'Каталог', href: '/#categories' },
    { name: 'Преимущества', href: '/#advantages' },
    { name: 'Заказ', href: '/#order' },
    { name: 'Доставка', href: '/#delivery' },
  ];

  return (
    <footer id="contacts" className="bg-[#0a0a0a] text-white pt-40 pb-20 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-24 mb-40">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-white flex items-center justify-center text-black font-black text-3xl">A</div>
              <div className="text-3xl font-black tracking-tighter uppercase">Aldonova</div>
            </div>
            <p className="text-neutral-500 text-xl leading-relaxed mb-16 max-w-md">
              Ваш надежный партнер в мире оптового пошива. Мы объединяем традиции качества и современные технологии производства.
            </p>
            <div className="flex gap-6">
              {[Instagram, Send, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
                  <Icon size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-12 text-neutral-600">Навигация</h4>
            <ul className="space-y-8 text-neutral-400 text-base">
              {navigation.map((item, i) => (
                <li key={i}>
                  <Link to={item.href} className="hover:text-white transition-colors flex items-center gap-3 group">
                    <span className="w-0 h-px bg-white group-hover:w-4 transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-12 text-neutral-600">Свяжитесь с нами</h4>
            <div className="grid sm:grid-cols-2 gap-16">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-700 mb-6">Адрес</div>
                <div className="text-base leading-relaxed text-neutral-400">Бишкек, Кыргызстан <br /> Промышленная зона, 42</div>
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-700 mb-6">Email</div>
                <div className="text-base text-neutral-400">info@aldonovagroup.kg</div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-700 mb-6">Телефон</div>
                <div className="text-5xl font-serif italic tracking-tighter">+996 (XXX) XXX-XX-XX</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[11px] font-bold uppercase tracking-[0.4em] text-neutral-700">
          <div>© 2026 ALDONOVA GROUP. Все права защищены.</div>
          <div className="flex gap-16">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
