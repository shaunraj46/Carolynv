
import React from 'react';
import { TimelineItem } from '../types';

const TIMELINE_DATA: TimelineItem[] = [
  {
    years: "2021 — PRESENT",
    role: "Head of Operations",
    location: "NU Hotel (Boutique Group, KL Sentral)",
    description: "Full strategic execution and P&L responsibility for a high-traffic boutique property.",
    impactMetric: { label: "Revenue Growth", value: "+22%" },
    achievements: [
      "Directed total strategic oversight of a high-occupancy boutique property within KL's primary transit hub.",
      "Optimized P&L structures and maximized yield during peak traffic cycles through aggressive revenue management.",
      "Spearheaded brand expansion strategies, positioning the property as a premier boutique choice for corporate travelers."
    ]
  },
  {
    years: "2017 — 2021",
    role: "Manager, Guest Relations",
    location: "Grand Millennium Hotel KL (Bukit Bintang)",
    description: "Excellence in luxury precision and VIP retention for the Golden Triangle's elite clientele.",
    impactMetric: { label: "VIP Retention", value: "94%" },
    achievements: [
      "Oversaw guest relations for Ultra-High-Net-Worth Individuals (UHNWI) and international luxury travelers.",
      "Maintained uncompromising 5-star service standards, significantly increasing VIP retention rates.",
      "Implemented bespoke service protocols that catered specifically to the needs of the diplomatic corps and luxury lifestyle travelers."
    ]
  },
  {
    years: "2012 — 2017",
    role: "Operations Manager (Acquisition Lead)",
    location: "The Legend Hotel KL / Sunway Putra Hotel",
    description: "Crisis management and corporate diplomacy during a high-stakes rebranding and acquisition.",
    impactMetric: { label: "Retention Rate", value: "88%" },
    achievements: [
      "Successfully managed operations through the Sunway Group acquisition and rebranding from The Legend Hotel to Sunway Putra.",
      "Navigated the high-pressure environment adjacent to the World Trade Centre (PWTC), handling government and trade delegations.",
      "Maintained operational stability and service continuity during significant corporate volatility and staff transitions."
    ]
  },
  {
    years: "EARLY CAREER",
    role: "Receptionist / Operations Associate",
    location: "Hospitality Property, Tanjung Bungah, Penang",
    description: "Foundational exposure to front-office operations and guest service excellence.",
    impactMetric: { label: "Guest Satisfaction", value: "4.9/5" },
    achievements: [
      "Mastered the fundamentals of front-office operations, establishing a core foundation of service excellence.",
      "Developed essential operational grit by managing high-volume check-ins and diverse guest requirements.",
      "Refined initial crisis-response skills within a fast-paced coastal hospitality environment."
    ]
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="career" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 pointer-events-none -skew-x-12 transform origin-top"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-2xl mb-24">
          <p className="text-gold uppercase tracking-[0.4em] mb-4 text-xs font-bold">The Career Arc</p>
          <h2 className="text-4xl md:text-6xl font-light serif text-slate-900 leading-tight">
            Strategic <span className="italic">Milestones</span> & Operational Impact
          </h2>
          <div className="w-20 h-1 bg-gold mt-8"></div>
        </div>

        <div className="space-y-24">
          {TIMELINE_DATA.map((item, index) => (
            <div key={index} className="group relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Years column */}
                <div className="lg:col-span-3">
                  <span className="text-sm font-bold tracking-[0.3em] text-gold block mb-2">{item.years}</span>
                  <div className="h-px w-full bg-slate-200 group-hover:bg-gold transition-colors duration-500"></div>
                </div>

                {/* Main Content column */}
                <div className="lg:col-span-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 serif">{item.role}</h3>
                  <p className="text-lg text-slate-500 font-medium mb-6">{item.location}</p>
                  <p className="text-slate-600 mb-8 leading-relaxed font-light text-lg italic">
                    "{item.description}"
                  </p>
                  
                  <div className="space-y-4">
                    {item.achievements.map((achievement, aIndex) => (
                      <div key={aIndex} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></span>
                        <p className="text-slate-600 leading-relaxed text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Metric column */}
                <div className="lg:col-span-3">
                  {item.impactMetric && (
                    <div className="bg-white border border-slate-100 p-8 shadow-sm group-hover:shadow-xl transition-all duration-500 lg:mt-0 mt-8">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">{item.impactMetric.label}</p>
                      <p className="text-4xl font-bold text-navy serif">{item.impactMetric.value}</p>
                      <div className="mt-6 pt-6 border-t border-slate-50">
                         <div className="flex items-center text-xs font-bold text-gold uppercase tracking-widest">
                           <span className="mr-2">Verified Impact</span>
                           <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                           </svg>
                         </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
              
              {/* Separator for mobile */}
              {index !== TIMELINE_DATA.length - 1 && (
                <div className="mt-24 lg:hidden border-b border-slate-200 w-1/4 mx-auto"></div>
              )}
            </div>
          ))}
        </div>

        {/* Closing Career Statement */}
        <div className="mt-32 pt-16 border-t border-slate-200 text-center max-w-3xl mx-auto">
          <p className="serif text-2xl italic text-slate-800">
            "My career is not just a list of locations, but a series of solved complexities and sustained growth metrics."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
