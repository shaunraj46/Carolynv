
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with accurate KL Skyline (Petronas + KL Tower) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/kl-skyline.jpg"
          alt="Kuala Lumpur Skyline with Petronas Twin Towers"
          className="w-full h-full object-cover"
        />
        {/* Darker gradient overlay to maintain high contrast for the text */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80"></div>
        <div className="absolute inset-0 bg-slate-900/30"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="mb-8 flex justify-center items-center space-x-4">
          <div className="h-px w-12 bg-gold/50"></div>
          <p className="text-gold uppercase tracking-[0.5em] text-xs font-bold">Hospitality Leadership Portfolio</p>
          <div className="h-px w-12 bg-gold/50"></div>
        </div>

        <h1 className="text-5xl md:text-8xl font-light mb-10 leading-[1.1] serif">
          Operational Mastery in the <span className="italic text-gold">Heart of KL</span>.
        </h1>

        <div className="w-24 h-px bg-gold mx-auto mb-10"></div>

        <p className="text-lg md:text-2xl text-slate-200 font-light max-w-3xl mx-auto leading-relaxed mb-12">
          From the foundational operations of Penang to the strategic management of Kuala Lumpur’s most vibrant boutique and luxury properties.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <a
            href="#career"
            className="w-full sm:w-auto inline-block bg-gold text-navy hover:bg-white hover:text-navy px-12 py-5 transition-all duration-300 uppercase tracking-widest text-xs font-black shadow-xl"
          >
            Explore Career Path
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-block border border-white/30 text-white hover:border-gold hover:text-gold px-12 py-5 transition-all duration-300 uppercase tracking-widest text-xs font-bold backdrop-blur-sm"
          >
            Executive Consultation
          </a>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white mb-4">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
