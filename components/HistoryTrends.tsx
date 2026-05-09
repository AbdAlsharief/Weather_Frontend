import React from "react";
import { ArrowRight } from "lucide-react";

export const HistoryTrends = () => {
  const trends = [
    { label: "Top Searched", location: "London, UK", hits: 82, color: "bg-secondary", shadow: "shadow-secondary/40", width: "82%" },
    { label: "Rising Interest", location: "Oslo, Norway", hits: 54, color: "bg-primary", shadow: "shadow-primary/40", width: "54%" },
    { label: "Historic Peak", location: "Cairo, Egypt", hits: 41, color: "bg-tertiary", shadow: "shadow-tertiary/40", width: "41%" },
  ];

  return (
    <aside className="col-span-12 xl:col-span-3 space-y-6">
      <div className="glass-card rounded-[32px] p-8 border border-white/5 bg-white/2 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <div className="w-24 h-24 rounded-full border-4 border-primary"></div>
        </div>
        <h3 className="text-xl font-bold text-on-surface mb-8 relative z-10">Recent Trends</h3>
        <div className="space-y-8 relative z-10">
          {trends.map((t, i) => (
            <div key={i} className="space-y-3">
              <div className="flex justify-between items-end">
                <div>
                  <p className={`text-[9px] font-bold tracking-[0.2em] uppercase mb-1 ${
                    t.color === 'bg-secondary' ? 'text-secondary' : 
                    t.color === 'bg-primary' ? 'text-primary' : 'text-tertiary'
                  }`}>{t.label}</p>
                  <p className="text-sm font-bold text-on-surface">{t.location}</p>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-on-surface-variant opacity-60 uppercase">{t.hits} Hits</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${t.color} ${t.shadow} shadow-[0_0_12px] transition-all duration-1000`} 
                  style={{ width: t.width }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promotion Card */}
      <div className="glass-card rounded-[32px] p-8 border border-white/5 bg-white/2 relative overflow-hidden h-72 flex flex-col justify-end group cursor-pointer">
        <img 
          alt="Radar visualization" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen group-hover:scale-110 transition-transform duration-700" 
          src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2000&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
        <div className="relative z-10">
          <h4 className="text-xl font-bold text-on-surface">Atmospheric Insights</h4>
          <p className="text-xs text-on-surface-variant mt-2 leading-relaxed font-medium">Get deeper historical analysis with our Pro AI models.</p>
          <button className="mt-6 text-secondary text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 group/btn">
            Learn More 
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </aside>
  );
};
