import React from "react";
import { Download, Code, Trash2, MapPin, TrendingDown, TrendingUp, Minus, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";

export const HistoryArchive = () => {
  const historyEntries = [
    { location: "Reykjavík, Iceland", coords: "64.1466° N, 21.9426° W", date: "Oct 24, 2024", temp: "2°C", trend: "-4% Seasonally", trendType: "down" },
    { location: "Tokyo, Japan", coords: "35.6764° N, 139.6500° E", date: "Oct 22, 2024", temp: "19°C", trend: "+2% Seasonally", trendType: "up" },
    { location: "Zermatt, Switzerland", coords: "46.0207° N, 7.7491° E", date: "Oct 21, 2024", temp: "-5°C", trend: "Stable", trendType: "stable" },
    { location: "Austin, Texas", coords: "30.2672° N, 97.7431° W", date: "Oct 20, 2024", temp: "28°C", trend: "+12% Peak", trendType: "up" },
    { location: "London, UK", coords: "51.5074° N, 0.1278° W", date: "Oct 18, 2024", temp: "14°C", trend: "-2% Seasonally", trendType: "down" },
  ];

  return (
    <section className="col-span-12 xl:col-span-9 space-y-6">
      {/* Bulk Actions Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 glass-card rounded-2xl p-4 border border-white/5 bg-white/2">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase px-2">Select: 24 Entries</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2 border border-white/10 rounded-xl text-[10px] font-bold tracking-widest uppercase text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-all">
            <Download size={14} />
            Export to CSV
          </button>
          <button className="flex items-center gap-2 px-5 py-2 border border-white/10 rounded-xl text-[10px] font-bold tracking-widest uppercase text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-all">
            <Code size={14} />
            Export to JSON
          </button>
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          <button className="flex items-center gap-2 px-5 py-2 bg-error/10 text-error border border-error/20 rounded-xl text-[10px] font-bold tracking-widest uppercase hover:bg-error/20 transition-all">
            <Trash2 size={14} />
            Clear All
          </button>
        </div>
      </div>

      {/* Archive Table Card */}
      <div className="glass-card rounded-[32px] overflow-hidden border border-white/5 bg-white/1">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Location</th>
                <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Date of Search</th>
                <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Avg Temp</th>
                <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Trend</th>
                <th className="px-8 py-5 text-[10px] font-bold tracking-widest text-on-surface-variant uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {historyEntries.map((entry, i) => (
                <tr key={i} className="hover:bg-white/[0.03] transition-colors group cursor-pointer">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">{entry.location}</p>
                        <p className="text-[11px] text-on-surface-variant opacity-60 font-medium">{entry.coords}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-on-surface-variant font-medium">{entry.date}</td>
                  <td className="px-8 py-6 text-lg font-bold text-on-surface">{entry.temp}</td>
                  <td className="px-8 py-6">
                    <div className={`flex items-center gap-2 ${
                      entry.trendType === 'up' ? 'text-secondary' : 
                      entry.trendType === 'down' ? 'text-error' : 
                      'text-on-surface-variant opacity-60'
                    }`}>
                      {entry.trendType === 'up' && <TrendingUp size={16} />}
                      {entry.trendType === 'down' && <TrendingDown size={16} />}
                      {entry.trendType === 'stable' && <Minus size={16} />}
                      <span className="text-[10px] font-bold tracking-widest uppercase">{entry.trend}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-on-surface-variant hover:text-on-surface transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-6 bg-white/[0.01] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase opacity-60">Showing 1-5 of 244 searches</p>
          <div className="flex gap-2">
            <button className="p-2 border border-white/10 rounded-xl hover:bg-white/10 text-on-surface-variant transition-all">
              <ChevronLeft size={18} />
            </button>
            <button className="p-2 border border-white/10 rounded-xl hover:bg-white/10 text-on-surface-variant transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
