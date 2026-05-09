"use client";

import React from "react";
import { Search, MapPin } from "lucide-react";
import { useWeatherContext } from "@/context/WeatherContext";

export const Navbar = () => {
  const { fetchWeather, loading } = useWeatherContext();
  const [startDate, setStartDate] = React.useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = React.useState(new Date().toISOString().split('T')[0]);


  return (
    <header className="sticky top-0 z-40 w-full h-24 bg-surface/80 backdrop-blur-xl border-b border-white/5 flex items-center">
      <div className="max-w-[1440px] mx-auto h-full px-8 flex justify-between items-center gap-8">
        <div className="w-[180px] shrink-0" /> {/* Spacer to balance 'My Location' button */}

        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-4xl relative group">
            <div className="relative flex items-center bg-surface-container-high/40 rounded-[2rem] border border-outline-variant/20 p-2 focus-within:border-primary/50 transition-all shadow-2xl">
              <Search className="ml-6 text-on-surface-variant w-6 h-6" />
              <input 
                className="bg-transparent border-none focus:ring-0 w-full px-6 text-lg font-medium text-on-surface placeholder:text-on-surface-variant/40 outline-none" 
                placeholder="Enter city name, zip code, or landmark..." 
                type="text"
                onKeyDown={(e) => {
                  if (e.key === "Enter") fetchWeather((e.target as HTMLInputElement).value, startDate, endDate);
                }}
              />
              
              <div className="flex items-center gap-4 border-l border-white/10 px-6 h-12">
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase font-black text-primary/60 tracking-widest ml-1 mb-0.5">Start</span>
                  <input 
                    type="date" 
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="bg-transparent border-none text-[13px] font-bold text-on-surface focus:ring-0 p-0 w-28 cursor-pointer"
                  />
                </div>
                <div className="flex flex-col border-l border-white/5 pl-4">
                  <span className="text-[8px] uppercase font-black text-secondary/60 tracking-widest ml-1 mb-0.5">End</span>
                  <input 
                    type="date" 
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="bg-transparent border-none text-[13px] font-bold text-on-surface focus:ring-0 p-0 w-28 cursor-pointer"
                  />
                </div>
              </div>

              <button 
                onClick={() => {
                  const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                  if (input.value) fetchWeather(input.value, startDate, endDate);
                }}
                className="bg-primary text-surface px-10 py-4 rounded-[1.5rem] font-black hover:shadow-[0_0_30px_rgba(192,193,255,0.5)] transition-all active:scale-95 mr-1 text-sm uppercase tracking-[0.1em] whitespace-nowrap"
              >
                {loading ? "..." : "Launch Analytics"}
              </button>
            </div>
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
