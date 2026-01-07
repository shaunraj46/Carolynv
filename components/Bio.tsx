
import React from 'react';

const Bio: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-slate-100 overflow-hidden shadow-2xl rounded-sm">
              <img
                src="/carolyn-portrait.jpg"
                alt="Carolyn V Executive Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold p-8 hidden md:block shadow-xl">
              <div className="text-navy">
                <p className="text-4xl font-bold serif leading-none">10,000+</p>
                <p className="text-xs uppercase tracking-widest font-bold mt-2">Unique Guest Stays</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-5xl font-light mb-10 serif text-slate-900">
              A Legacy of <span className="italic">Excellence</span> Built on Operational Grit.
            </h2>

            <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light">
              <p>
                Born and raised in the cultural heart of Penang, Malaysia, my journey in hospitality began with a foundational role as a receptionist in Tanjung Bungah. This early exposure to the front lines of guest service instilled in me an unwavering operational grit and a deep understanding that true hospitality is built one interaction at a time. Over the years, I have evolved this grassroots experience into a full-stack management philosophy that balances human-centric service with rigorous business logic.
              </p>

              <p>
                My career trajectory is defined by the strategic pivot between <span className="text-slate-900 font-medium italic">Corporate Diplomacy</span> and <span className="text-slate-900 font-medium italic">Luxury Precision</span>. At the Legend Hotel KL, I spearheaded operations through a high-stakes acquisition by the Sunway Group, managing the intricate sensitivities of rebranding while maintaining a seamless environment for international trade delegates and government officials. I later transitioned to the Grand Millennium Hotel KL in Bukit Bintang, where I refined my focus toward the Ultra-High-Net-Worth (UHNWI) sector, elevating guest relations to meet the uncompromising five-star standards of KL’s Golden Triangle.
              </p>

              <p>
                Today, as the Group General Manager of MY Hotel Group, I have embraced the mantle of <span className="text-slate-900 font-medium italic">Total Business Ownership</span>. My current mandate involves strategic oversight of a diverse portfolio including Nu Hotel @ KL Sentral. From maximizing yield through aggressive P&L management to leading brand expansion initiatives, I am focused on proving that boutique hospitality can be both agile and highly profitable under disciplined, visionary leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
