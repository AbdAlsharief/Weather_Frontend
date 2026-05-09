"use client";

import React from "react";
import { Download, MapPin, Trash2, Edit } from "lucide-react";
import { useWeatherContext } from "@/context/WeatherContext";
import { BASE_URL } from "@/lib/apiClient";
import { WeatherReport } from "@/types/weather";

interface HistoryTableProps {
  history: WeatherReport[];
}

export const HistoryTable = ({ history }: HistoryTableProps) => {
  const { deleteHistory, updateHistory } = useWeatherContext();


  return (
    <section className="space-y-6">
      <div className="flex justify-between items-end px-2">
        <h3 className="text-2xl font-bold text-on-surface">Your Search History</h3>
        <div className="flex gap-2">
          <a href={`${BASE_URL}/export/csv`} className="bg-surface-container-high hover:bg-surface-container-highest text-primary font-bold text-[10px] tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all border border-white/5 shadow-xl">
            <Download size={14} />
            CSV
          </a>
          <a href={`${BASE_URL}/export/json`} className="bg-surface-container-high hover:bg-surface-container-highest text-secondary font-bold text-[10px] tracking-widest uppercase px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all border border-white/5 shadow-xl">
            <Download size={14} />
            JSON
          </a>
        </div>
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
              {history.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-12 text-center text-on-surface-variant/50 text-xs font-bold tracking-widest uppercase">
                    No search history found. Start searching to build your records.
                  </td>
                </tr>
              ) : (
                history.map((item: any, i: number) => (
                  <tr key={item.id || i} className="hover:bg-white/5 transition-colors group cursor-pointer">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-secondary/60" />
                      <span className="font-bold text-on-surface">{item.city || item.location}</span>
                    </div>
                  </td>
                  <td className="p-6 text-on-surface-variant text-sm font-medium">{item.timestamp ? new Date(item.timestamp).toLocaleString() : "Just now"}</td>
                  <td className="p-6 text-secondary font-bold text-lg">{item.temperature}°</td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => {
                          const newLoc = prompt("Enter new location:", item.city);
                          if (newLoc) updateHistory(item.id, newLoc);
                        }}
                        className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/10 rounded-lg"
                        title="Edit Location"
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => {
                          if (confirm("Are you sure you want to delete this record?")) {
                            deleteHistory(item.id);
                          }
                        }}
                        className="p-2 text-on-surface-variant hover:text-red-400 transition-colors hover:bg-red-500/10 rounded-lg"
                        title="Delete Record"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
