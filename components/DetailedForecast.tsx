import React from "react";
import { CalendarDays, CloudSun, CloudRain, Sun, Cloud } from "lucide-react";

export const DetailedForecast = () => {
  const forecastDays = [
    { day: "Today", date: "OCT 24", icon: <CloudSun className="text-secondary" size={32} />, desc: "Partly Cloudy", precip: "12%", low: 18, high: 26, rangeStart: "25%", rangeEnd: "75%" },
    { day: "Friday", date: "OCT 25", icon: <CloudRain className="text-blue-400" size={32} />, desc: "Light Showers", precip: "85%", low: 14, high: 19, rangeStart: "0%", rangeEnd: "50%" },
    { day: "Saturday", date: "OCT 26", icon: <Sun className="text-primary" size={32} />, desc: "Clear Skies", precip: "0%", low: 20, high: 31, rangeStart: "33%", rangeEnd: "100%" },
    { day: "Sunday", date: "OCT 27", icon: <Sun className="text-primary" size={32} />, desc: "Sunny", precip: "0%", low: 22, high: 33, rangeStart: "50%", rangeEnd: "100%" },
    { day: "Monday", date: "OCT 28", icon: <Cloud className="text-on-surface-variant" size={32} />, desc: "Mostly Cloudy", precip: "10%", low: 19, high: 25, rangeStart: "25%", rangeEnd: "75%" },
  ];

  return (
    <section className="lg:col-span-8 glass-card rounded-[32px] overflow-hidden border border-white/5">
      <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-white/2">
        <h3 className="text-xl font-bold flex items-center gap-3 text-on-surface">
          <CalendarDays className="text-primary" size={24} />
          10-Day Forecast
        </h3>
      </div>
      <div className="divide-y divide-white/5">
        {forecastDays.map((d, i) => (
          <div key={i} className="px-8 py-5 flex items-center justify-between hover:bg-white/5 transition-all group cursor-pointer">
            <div className="w-24">
              <span className="font-bold text-on-surface block text-sm">{d.day}</span>
              <p className="text-[10px] text-on-surface-variant font-bold tracking-widest uppercase">{d.date}</p>
            </div>
            <div className="flex items-center gap-4 flex-1 justify-center">
              {d.icon}
              <span className="text-on-surface-variant text-sm w-32 hidden sm:block font-medium">{d.desc}</span>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex flex-col items-center">
                <span className="text-[9px] text-on-surface-variant font-bold tracking-widest mb-1 uppercase">Precip</span>
                <span className="text-sm font-bold text-primary">{d.precip}</span>
              </div>
              <div className="flex items-center gap-4 w-40">
                <span className="text-on-surface-variant font-bold text-sm">{d.low}°</span>
                <div className="flex-1 h-1.5 bg-surface-container-highest/50 rounded-full overflow-hidden relative">
                  <div 
                    className="absolute h-full bg-gradient-to-r from-secondary to-primary rounded-full"
                    style={{ left: d.rangeStart, right: `calc(100% - ${d.rangeEnd})` }}
                  ></div>
                </div>
                <span className="text-on-surface font-bold text-sm">{d.high}°</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
