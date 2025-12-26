
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-navy py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-light serif mb-8">Ready for the <span className="italic">next horizon</span>?</h2>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Available for strategic consultation, executive leadership roles, and board positions within the luxury and boutique hospitality sectors.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <a 
              href="mailto:carolyn.v@hospitality.com" 
              className="text-2xl md:text-4xl font-light hover:text-gold transition-colors serif border-b border-gold pb-2 mb-4"
            >
              carolyn.v@hospitality.com
            </a>
            <a 
              href="tel:+60193503323" 
              className="text-xl md:text-2xl font-light hover:text-gold transition-colors text-slate-300"
            >
              +60 19-350 3323
            </a>
            <p className="mt-4 text-slate-500 uppercase tracking-widest text-xs">Based in Kuala Lumpur, Malaysia</p>
          </div>
        </div>
        
        <div className="w-full h-px bg-slate-800 mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter serif uppercase">Carolyn V</span>
            <span className="text-[10px] tracking-[0.2em] text-slate-500 font-semibold uppercase">© 2024 Executive Portfolio</span>
          </div>
          
          <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-gold transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-gold transition-colors">Network</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
