"use client";

import React from "react";
import { Download, MoreVertical, MapPin } from "lucide-react";
import { WeatherReport } from "@/types/weather";

interface HistoryTableProps {
  history: WeatherReport[];
}

export const HistoryTable = ({ history }: HistoryTableProps) => {
  // Use mock history if empty for demonstration
  const displayHistory = history.length > 0 ? history : [
    { city: "San Francisco, CA", date: "2 mins ago", temp: 68 },
    { city: "London, UK", date: "1 hour ago", temp: 54 },
    { city: "Tokyo, JP", date: "3 hours ago", temp: 72 },
  ];

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-end px-2">
        <h3 className="text-2xl font-bold text-on-surface">Your Search History</h3>
        <button className="bg-surface-container-high hover:bg-surface-container-highest text-primary font-bold text-[10px] tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all border border-white/5 shadow-xl">
          <Download size={14} />
          Export Data
        </button>
      </div>
      
      <div className="glass-card rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/2 border-b border-white/5">
                <th className="p-6 text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">Location</th>
                <th className="p-6 text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">Last Searched</th>
                <th className="p-6 text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">Temp</th>
                <th className="p-6 text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {displayHistory.map((item: any, i: number) => (
                <tr key={i} className="hover:bg-white/5 transition-colors group cursor-pointer">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-secondary/60" />
                      <span className="font-bold text-on-surface">{item.city || item.location}</span>
                    </div>
                  </td>
                  <td className="p-6 text-on-surface-variant text-sm font-medium">{item.date || "Just now"}</td>
                  <td className="p-6 text-secondary font-bold text-lg">{item.temp}°</td>
                  <td className="p-6 text-right">
                    <button className="p-2 text-on-surface-variant hover:text-on-surface transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
