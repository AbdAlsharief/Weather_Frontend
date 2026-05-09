import React from "react";
import { Cloud, Sun, CloudRain, CloudSun, Wind, CloudLightning, CloudFog } from "lucide-react";
import { ForecastDay } from "@/types/weather";

interface ForecastProps {
  data: ForecastDay[];
}

const getIcon = (description: string) => {
  const desc = description.toLowerCase();
  if (desc.includes("clear")) return <Sun className="text-secondary" size={32} />;
  if (desc.includes("rain") || desc.includes("drizzle")) return <CloudRain className="text-tertiary" size={32} />;
  if (desc.includes("thunderstorm")) return <CloudLightning className="text-error" size={32} />;
  if (desc.includes("cloud")) return <CloudSun className="text-primary" size={32} />;
  if (desc.includes("fog") || desc.includes("mist")) return <CloudFog className="text-on-surface-variant" size={32} />;
  return <Cloud className="text-on-surface-variant" size={32} />;
};


export const Forecast: React.FC<ForecastProps> = ({ data }) => {
  if (!data || data.length === 0) return null;
  const forecastDays = data;


  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-2xl font-bold text-on-surface">5-Day Outlook</h3>
        <button className="text-[10px] font-bold tracking-widest text-primary uppercase hover:underline">View 10-Day Detail</button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {forecastDays.map((d, i) => (
          <div 
            key={i} 
            className="glass-card rounded-3xl p-6 flex flex-col items-center text-center space-y-4 hover:border-primary/40 hover:bg-white/5 transition-all cursor-pointer group shadow-lg border-white/5"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">
              {d.day}
            </span>
            <div className="group-hover:scale-110 transition-transform duration-300">
              {getIcon(d.description)}
            </div>
            <div className="space-y-0.5">
              <div className="text-xl font-bold text-on-surface">{d.high}°</div>
              <div className="text-on-surface-variant/60 font-medium text-sm">{d.low}°</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
