
import React from 'react';
import { TimelineItem } from '../types';

const TIMELINE_DATA: TimelineItem[] = [
  {
    years: "2024 — PRESENT",
    role: "Group General Manager",
    location: "MY Hotel Group",
    description: "Executive leadership across multiple properties, driving strategic growth and operational excellence.",
    impactMetric: { label: "Portfolio Growth", value: "Multi-Site" },
    achievements: [
      "Leading strategic operations and expansion initiatives across MY Hotel Group's portfolio of properties.",
      "Implementing group-wide standards for luxury hospitality and driving revenue optimization strategies.",
      "Overseeing multi-property P&L management and brand development across diverse market segments."
    ]
  },
  {
    years: "2016 — 2024",
    role: "Hotel Manager",
    location: "Nu Hotel @ KL Sentral",
    description: "Full operational leadership of boutique property in Malaysia's busiest transit hub.",
    impactMetric: { label: "Years of Leadership", value: "8" },
    achievements: [
      "Directed complete hotel operations for high-occupancy boutique property at KL Sentral.",
      "Achieved consistent revenue growth through strategic yield management and operational efficiency.",
      "Built and led high-performing teams while maintaining exceptional guest satisfaction standards.",
      "Successfully positioned the property as a premier choice for corporate and transit travelers."
    ]
  },
  {
    years: "2015 — 2016",
    role: "Assistant Director of Sales - Corporate",
    location: "Grand Millennium Hotel KL (Bukit Bintang)",
    description: "Corporate sales leadership in Kuala Lumpur's Golden Triangle luxury market.",
    impactMetric: { label: "Market Focus", value: "Corporate" },
    achievements: [
      "Led corporate sales strategies for 5-star property in the Golden Triangle district.",
      "Developed and managed key corporate accounts and MICE (Meetings, Incentives, Conferences, Events) business.",
      "Achieved significant revenue growth through strategic B2B partnerships and corporate programs."
    ]
  },
  {
    years: "2012 — 2015",
    role: "Assistant Director of Sales",
    location: "Luxury Hospitality, Kuala Lumpur",
    description: "Sales strategy development and client relationship management in luxury segment.",
    impactMetric: { label: "Experience", value: "3 Years" },
    achievements: [
      "Established strong foundation in sales strategy and revenue management for luxury hotels.",
      "Built extensive network of corporate and individual clients across diverse market segments.",
      "Mastered the art of consultative selling and bespoke service creation for high-value clients."
    ]
  },
  {
    years: "CAREER FOUNDATION",
    role: "Front Office Leadership & Operations",
    location: "Penang to Kuala Lumpur",
    description: "Progressive growth through front office excellence from receptionist to management.",
    impactMetric: { label: "Roles Mastered", value: "7+" },
    achievements: [
      "Reservation Manager: Optimized booking systems and revenue management strategies.",
      "Guest Relations Manager: Elevated VIP service standards and client satisfaction protocols.",
      "Assistant Front Office Manager: Led operational teams and streamlined check-in/out procedures.",
      "Duty Manager: Managed daily operations and crisis resolution.",
      "Supervisor: oversaw shift operations and staff performance.",
      "Receptionist: Delivered exceptional front-line guest service.",
      "Reservation Agent: Built foundational hospitality skills in Penang.",
      "Developed comprehensive understanding of hotel operations from ground level to executive leadership."
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
