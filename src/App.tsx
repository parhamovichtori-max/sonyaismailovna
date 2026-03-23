import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HoodieCategory from './pages/HoodieCategory';

function App() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] font-sans text-neutral-900 selection:bg-black selection:text-white">
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hoodies" element={<HoodieCategory />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
