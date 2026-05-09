"use client";

import React from "react";
import { Search, MapPin } from "lucide-react";
import { useWeatherContext } from "@/context/WeatherContext";

export const Navbar = () => {
  const { fetchWeather, loading } = useWeatherContext();
  const [startDate, setStartDate] = React.useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = React.useState(new Date().toISOString().split('T')[0]);


  return (
    <header className="sticky top-0 z-40 w-full h-16 bg-surface/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[1440px] mx-auto h-full px-8 flex justify-between items-center">
        <div className="w-full max-w-xl relative group">
          <div className="relative flex items-center bg-surface-container-high/40 rounded-xl border border-outline-variant/20 p-1 focus-within:border-primary/50 transition-all">
            <Search className="ml-4 text-on-surface-variant w-5 h-5" />
            <input 
              className="bg-transparent border-none focus:ring-0 w-full px-4 text-sm font-medium text-on-surface placeholder:text-on-surface-variant/50 outline-none" 
              placeholder="Search city, zip, landmark..." 
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") fetchWeather((e.target as HTMLInputElement).value, startDate, endDate);
              }}
            />
            
            <div className="flex items-center gap-1 border-l border-white/10 px-2 h-8">
              <input 
                type="date" 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-transparent border-none text-[10px] font-bold text-on-surface-variant focus:ring-0 p-0 w-24 cursor-pointer"
                title="Start Date"
              />
              <span className="text-white/20">-</span>
              <input 
                type="date" 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-transparent border-none text-[10px] font-bold text-on-surface-variant focus:ring-0 p-0 w-24 cursor-pointer"
                title="End Date"
              />
            </div>

            <button 
              onClick={() => {
                const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                if (input.value) fetchWeather(input.value, startDate, endDate);
              }}
              className="bg-primary text-surface px-5 py-1.5 rounded-lg font-bold hover:shadow-[0_0_15px_rgba(192,193,255,0.3)] transition-all active:scale-95 mr-0.5 text-xs whitespace-nowrap"
            >
              {loading ? "..." : "Search"}
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                  (pos) => fetchWeather(`${pos.coords.latitude},${pos.coords.longitude}`),
                  (err) => alert("Could not get location: " + err.message)
                );
              }
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest transition-colors text-secondary text-[10px] font-bold tracking-widest uppercase"
          >
            <MapPin size={16} />
            <span>My Location</span>
          </button>
          <div className="h-8 w-px bg-white/10 mx-2"></div>

        </div>
      </div>
    </header>
  );
};
