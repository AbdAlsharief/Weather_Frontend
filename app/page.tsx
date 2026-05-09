"use client";

import React from "react";
import { CurrentWeather } from "@/components/CurrentWeather";
import { AlertCircle, Map, Play, ArrowUpRight } from "lucide-react";
import { Forecast } from "@/components/Forecast";
import { HistoryTable } from "@/components/HistoryTable";
import { MeteorologicalBento } from "@/components/MeteorologicalBento";
import { HourlyTrend } from "@/components/HourlyTrend";
import { Footer } from "@/components/Footer";
import { useWeatherContext } from "@/context/WeatherContext";

export default function Dashboard() {
  const { current, history, discovery, fetchWeather, error } = useWeatherContext();
  
  const SUGGESTED_CITIES = ["Cairo", "London", "Dubai", "New York", "Tokyo"];

  return (
    <main className="max-w-[1440px] mx-auto w-full px-8 pt-6 pb-20 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
        <div>
          <h2 className="text-5xl font-bold text-on-surface tracking-tighter">Atmospheric Dashboard</h2>
          <p className="text-on-surface-variant/80 mt-3 text-sm font-medium tracking-wide uppercase">Precision meteorological analytics • Real-time processing</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_CITIES.map(city => (
            <button
              key={city}
              onClick={() => fetchWeather(city)}
              className="text-[10px] font-bold tracking-widest px-5 py-2.5 rounded-xl border border-white/5 bg-white/2 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all text-on-surface-variant uppercase shadow-sm"
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      {error && (
        <div className="p-6 rounded-[2rem] bg-red-500/10 border border-red-500/20 text-red-200 animate-in fade-in slide-in-from-top-4 duration-500 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-red-500/20 text-red-400">
            <AlertCircle size={24} />
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Processing Error</h4>
            <p className="text-xs opacity-80">{error}</p>
          </div>
        </div>
      )}

      {/* Primary Intelligence Layer */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <CurrentWeather data={current} />
        </div>
        
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-card rounded-[2.5rem] p-8 h-full flex flex-col justify-between border border-white/5 bg-surface-container-low/30 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">Satellite Discovery</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-3">Geospatial Intelligence</h3>
              <p className="text-on-surface-variant text-xs leading-relaxed opacity-70">Synthesized spatial data and regional mapping resources for enhanced situational awareness.</p>
            </div>
            
            <div className="flex flex-col gap-3 relative z-10 mt-8">
              <a 
                href={discovery?.google_maps_url} 
                target="_blank" 
                className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all group/btn"
              >
                <div className="flex items-center gap-3">
                  <Map size={18} className="text-primary" />
                  <span className="text-xs font-bold tracking-widest uppercase text-on-surface">Interactive Radar</span>
                </div>
                <ArrowUpRight size={16} className="text-on-surface-variant group-hover/btn:text-primary transition-colors" />
              </a>
              <a 
                href={discovery?.youtube_travel_url} 
                target="_blank" 
                className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/50 hover:bg-secondary/5 transition-all group/btn"
              >
                <div className="flex items-center gap-3">
                  <Play size={18} className="text-secondary" />
                  <span className="text-xs font-bold tracking-widest uppercase text-on-surface">Climate Stream</span>
                </div>
                <ArrowUpRight size={16} className="text-on-surface-variant group-hover/btn:text-secondary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {current && (
        <section className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-8">
          {/* Detailed Modeling Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <HourlyTrend data={current} />
            </div>
            <MeteorologicalBento data={current} />
          </div>

          {/* Outlook Section */}
          <Forecast data={current?.forecast || []} />
        </section>
      )}

      {/* Persistence Layer */}
      <section className="space-y-6">
        <div className="px-2 border-l-2 border-primary pl-6">
          <h3 className="text-2xl font-bold text-on-surface tracking-tight">Persistent Search History</h3>
          <p className="text-on-surface-variant text-xs mt-1">Immutable archive of meteorological inquiries and localized data captures.</p>
        </div>
        <HistoryTable history={history} />
      </section>
      
      <Footer />
    </main>
  );
}
