
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tighter serif uppercase">Carolyn V</span>
          <span className="text-[10px] tracking-[0.2em] text-slate-500 font-semibold uppercase">Hospitality Executive</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-slate-600">
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#career" className="hover:text-gold transition-colors">Career</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
