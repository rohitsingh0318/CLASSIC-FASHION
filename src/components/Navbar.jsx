import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-brand-900 text-brand-50 flex items-center justify-center">
            <ShoppingBag size={20} />
          </div>
          <span className="text-xl md:text-2xl font-display font-bold text-brand-900 tracking-tight">
            CLASSIC FASHION <span className="text-brand-600 font-light">Electricals</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
