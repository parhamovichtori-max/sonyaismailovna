import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HoodieCategory from './pages/HoodieCategory';
import ProductDetail from './pages/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence, motion } from 'motion/react';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#fcfaf7] font-sans text-neutral-900 selection:bg-black selection:text-white">
      <ScrollToTop />
      <Navbar />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/hoodies" element={<HoodieCategory />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
