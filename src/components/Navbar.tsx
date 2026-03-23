import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Каталог', href: '/#categories' },
    { name: 'Преимущества', href: '/#advantages' },
    { name: 'Заказ', href: '/#order' },
    { name: 'Доставка', href: '/#delivery' },
    { name: 'Контакты', href: '/#contacts' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-white/70 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-10'}`}>
        <div className="max-w-[1600px] mx-auto px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-black flex items-center justify-center text-white font-black text-2xl group-hover:rotate-12 transition-transform duration-500">A</div>
            <div className="text-2xl font-black tracking-tighter uppercase">Aldonova</div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.3em]">
            {navLinks.map((item, i) => (
              <a key={i} href={item.href} className="relative hover:opacity-50 transition-opacity after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-black hover:after:w-full after:transition-all duration-500">
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <button className="hidden sm:block text-[11px] font-bold uppercase tracking-widest border-b border-black/20 pb-1 hover:border-black transition-all">
              Запросить прайс
            </button>
            <button 
              className="w-12 h-12 flex items-center justify-center hover:bg-black/5 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? <X key="x" size={24} /> : <Menu key="menu" size={24} />}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col justify-center px-12"
          >
            <div className="flex flex-col gap-6 text-6xl md:text-8xl font-serif italic tracking-tighter">
              {navLinks.map((item, i) => (
                <motion.a 
                  key={i}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)} 
                  className="hover:translate-x-6 transition-transform hover:text-neutral-400"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
