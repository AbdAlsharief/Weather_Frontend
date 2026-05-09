import React from "react";

export const HourlyTrend = () => {
  return (
    <section className="glass-card rounded-[32px] p-10 relative overflow-hidden group border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-10 relative z-10">
        <div>
          <span className="font-bold text-primary/80 mb-3 block uppercase tracking-[0.2em] text-[10px]">Next 24 Hours</span>
          <h2 className="text-3xl font-bold text-on-surface">Hourly Performance Trend</h2>
          <p className="text-on-surface-variant/80 mt-1 text-sm">Cloudy conditions expected to persist until 04:00 PM</p>
        </div>
        <div className="flex items-end gap-6">
          <div className="text-right">
            <span className="text-7xl font-bold leading-none text-on-surface tracking-tighter">24°</span>
            <p className="font-bold text-on-surface-variant tracking-widest mt-2 uppercase text-[10px]">Feels like 26°</p>
          </div>
        </div>
      </div>

      <div className="h-56 w-full relative mt-10">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
          <defs>
            <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#c0c1ff" />
              <stop offset="50%" stopColor="#4fdbc8" />
              <stop offset="100%" stopColor="#c0c1ff" />
            </linearGradient>
            <linearGradient id="fillGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(192, 193, 255, 0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M0,150 Q100,120 200,130 T400,100 T600,80 T800,110 T1000,90 L1000,200 L0,200 Z" fill="url(#fillGrad)" />
          <path d="M0,150 Q100,120 200,130 T400,100 T600,80 T800,110 T1000,90" fill="none" stroke="url(#lineGrad)" strokeWidth="4" strokeLinecap="round" />
          <circle cx="200" cy="130" r="5" fill="#4fdbc8" className="animate-pulse" />
          <circle cx="400" cy="100" r="5" fill="#4fdbc8" />
          <circle cx="600" cy="80" r="5" fill="#4fdbc8" />
        </svg>
        <div className="flex justify-between mt-6 text-on-surface-variant font-bold text-[10px] tracking-widest opacity-60 uppercase">
          <span>12 PM</span><span>3 PM</span><span>6 PM</span><span>9 PM</span><span>12 AM</span><span>3 AM</span><span>6 AM</span>
        </div>
      </div>
    </section>
  );
};
