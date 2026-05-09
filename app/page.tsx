"use client";

import React from "react";
import { CurrentWeather } from "@/components/CurrentWeather";
import { AIInsights } from "@/components/AIInsights";
import { Forecast } from "@/components/Forecast";
import { HistoryTable } from "@/components/HistoryTable";
import { Footer } from "@/components/Footer";
import { useWeatherContext } from "@/context/WeatherContext";

export default function Dashboard() {
  const { current, history } = useWeatherContext();

  return (
    <main className="max-w-[1440px] mx-auto w-full px-8 pt-6 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-on-surface tracking-tight">Weather Dashboard</h2>
        <p className="text-on-surface-variant/80 mt-2 text-sm font-medium">Real-time meteorological analytics and AI insights</p>
      </div>

      {/* Main Display: 2-Column Bento */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <CurrentWeather data={current} />
        
        {/* Right Column: AI Insights & Mini Map Placeholder */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <AIInsights />
          
          <div className="glass-card rounded-[2.5rem] p-6 h-40 overflow-hidden relative inner-glow group cursor-pointer">
            <img 
              alt="Regional Radar" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400&h=200" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent pointer-events-none"></div>
            <div className="relative z-10 flex items-end h-full">
              <span className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">Regional Radar View</span>
            </div>
          </div>
        </div>
      </section>

      {/* Forecast Section */}
      <Forecast />

      {/* History Section */}
      <HistoryTable history={history} />
      
      <Footer />
    </main>
  );
}
