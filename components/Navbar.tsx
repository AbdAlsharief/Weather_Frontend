"use client";

import React from "react";
import { Search, MapPin } from "lucide-react";
import { useWeatherContext } from "@/context/WeatherContext";

export const Navbar = () => {
  const { fetchWeather, loading } = useWeatherContext();

  return (
    <header className="sticky top-0 z-40 w-full h-16 bg-surface/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[1440px] mx-auto h-full px-8 flex justify-between items-center">
        <div className="w-full max-w-xl relative group">
          <div className="relative flex items-center bg-surface-container-high/40 rounded-xl border border-outline-variant/20 p-1 focus-within:border-primary/50 transition-all">
            <Search className="ml-4 text-on-surface-variant w-5 h-5" />
            <input 
              className="bg-transparent border-none focus:ring-0 w-full px-4 text-sm font-medium text-on-surface placeholder:text-on-surface-variant/50 outline-none" 
              placeholder="Search for a city..." 
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") fetchWeather((e.target as HTMLInputElement).value);
              }}
            />
            <button 
              className="bg-primary text-surface px-5 py-1.5 rounded-lg font-bold hover:shadow-[0_0_15px_rgba(192,193,255,0.3)] transition-all active:scale-95 mr-0.5 text-xs"
            >
              {loading ? "..." : "Search"}
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest transition-colors text-secondary text-[10px] font-bold tracking-widest uppercase">
            <MapPin size={16} />
            <span>My Location</span>
          </button>
          <div className="h-8 w-px bg-white/10 mx-2"></div>

        </div>
      </div>
    </header>
  );
};
