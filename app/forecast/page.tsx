"use client";

import React from "react";
import { HourlyTrend } from "@/components/HourlyTrend";
import { DetailedForecast } from "@/components/DetailedForecast";
import { MeteorologicalBento } from "@/components/MeteorologicalBento";
import { AtmosphericDetails } from "@/components/AtmosphericDetails";
import { Footer } from "@/components/Footer";

export default function ForecastPage() {
  return (
    <main className="max-w-[1440px] mx-auto w-full px-8 pt-6 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-on-surface tracking-tight">Detailed Forecast</h2>
        <p className="text-on-surface-variant/80 mt-2 text-sm font-medium">10-day high-precision atmospheric modeling</p>
      </div>

      {/* Hourly Trend Section */}
      <HourlyTrend />

      {/* 10-Day Forecast & Meteorological Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <DetailedForecast />
        <MeteorologicalBento />
      </div>

      {/* Atmospheric Details */}
      <AtmosphericDetails />
      
      <Footer />
    </main>
  );
}
