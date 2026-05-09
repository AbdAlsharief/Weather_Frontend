import React from "react";
import { Sun, Wind, Eye, Gauge } from "lucide-react";

export const MeteorologicalBento = () => {
  return (
    <aside className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
      {/* UV Index Card */}
      <div className="glass-card rounded-[32px] p-8 flex flex-col justify-between border border-white/5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 text-on-surface-variant">
            <Sun size={20} />
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase">UV Index</span>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-on-surface tracking-tighter">4</span>
            <span className="text-xl font-medium text-secondary">Moderate</span>
          </div>
          <div className="h-2.5 bg-surface-container-highest/50 rounded-full relative">
            <div className="absolute left-0 w-[40%] h-full bg-gradient-to-r from-secondary to-primary rounded-full"></div>
            <div className="absolute left-[40%] -top-1 w-4.5 h-4.5 bg-white rounded-full border-2 border-primary shadow-xl ring-4 ring-primary/10"></div>
          </div>
          <p className="text-[11px] text-on-surface-variant leading-relaxed">Sun protection is recommended between 11:00 AM and 04:00 PM.</p>
        </div>
      </div>

      {/* Air Quality Card */}
      <div className="glass-card rounded-[32px] p-8 flex flex-col justify-between border border-white/5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 text-on-surface-variant">
            <Wind size={20} />
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase">Air Quality</span>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-on-surface tracking-tighter">22</span>
            <span className="text-xl font-medium text-secondary">Excellent</span>
          </div>
          <div className="flex gap-2 h-2">
            <div className="flex-1 bg-secondary rounded-full"></div>
            <div className="flex-1 bg-surface-container-highest/30 rounded-full"></div>
            <div className="flex-1 bg-surface-container-highest/30 rounded-full"></div>
            <div className="flex-1 bg-surface-container-highest/30 rounded-full"></div>
            <div className="flex-1 bg-surface-container-highest/30 rounded-full"></div>
          </div>
          <p className="text-[11px] text-on-surface-variant leading-relaxed">Ideal conditions for outdoor activities and exercise. Minimal pollution risk.</p>
        </div>
      </div>

      {/* Visibility & Pressure Mini Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card rounded-3xl p-6 border border-white/5">
          <span className="text-[9px] font-bold text-on-surface-variant mb-3 block tracking-widest uppercase">Visibility</span>
          <span className="text-2xl font-bold text-on-surface">10 <span className="text-xs font-medium text-on-surface-variant">km</span></span>
          <p className="text-[9px] text-secondary mt-3 font-bold uppercase tracking-tighter">Perfectly clear</p>
        </div>
        <div className="glass-card rounded-3xl p-6 border border-white/5">
          <span className="text-[9px] font-bold text-on-surface-variant mb-3 block tracking-widest uppercase">Pressure</span>
          <span className="text-2xl font-bold text-on-surface">1012 <span className="text-xs font-medium text-on-surface-variant">hPa</span></span>
          <p className="text-[9px] text-secondary mt-3 font-bold uppercase tracking-tighter">Steady</p>
        </div>
      </div>
    </aside>
  );
};
