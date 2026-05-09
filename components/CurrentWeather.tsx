import React from "react";
import { MapPin, Sun, Thermometer, Wind, Droplets, Zap } from "lucide-react";
import { WeatherReport } from "@/types/weather";

interface CurrentWeatherProps {
  data: WeatherReport | null;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  if (!data) {
    return (
      <div className="lg:col-span-8 glass-card rounded-[2.5rem] p-10 flex items-center justify-center border-dashed border-2 border-slate-700/50 min-h-[400px]">
        <div className="text-center space-y-4">
          <Sun className="w-16 h-16 text-slate-800 mx-auto animate-pulse" />
          <p className="text-slate-500 font-medium italic">Initialize atmospheric scan by searching a city</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-8 glass-card rounded-[2.5rem] p-10 overflow-hidden relative inner-glow group animate-in slide-in-from-left duration-700">
      <div className="absolute top-0 right-0 p-10 select-none">
        <Sun className="w-48 h-48 opacity-10 text-primary group-hover:opacity-20 transition-opacity duration-500" />
      </div>
      
      <div className="relative z-10 flex flex-col h-full justify-between min-h-[340px]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={20} className="text-secondary" />
            <h2 className="text-2xl font-bold text-on-surface">{data.city}, {data.country}</h2>
          </div>
          <p className="text-on-surface-variant text-sm">{new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>

        <div className="py-12 flex items-baseline gap-6">
          <span className="text-7xl font-bold tracking-tighter text-white">{data.temperature}°</span>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary">{data.description}</span>
            <span className="text-on-surface-variant text-sm font-medium">Feels like {data.temperature - 2}°</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-8">
          <DetailItem label="Humidity" value={`${data.humidity}%`} color="text-secondary" />
          <DetailItem label="Wind Speed" value={`${data.wind_speed} mph`} color="text-primary" />
          <DetailItem label="UV Index" value="6 High" color="text-tertiary" />
        </div>
      </div>
    </div>
  );
};

function DetailItem({ label, value, color }: { label: string; value: string, color: string }) {
  return (
    <div className="space-y-1">
      <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">{label}</p>
      <p className={`${color} text-xl font-bold`}>{value}</p>
    </div>
  );
}
