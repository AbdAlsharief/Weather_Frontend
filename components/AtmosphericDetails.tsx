import { WeatherReport } from "@/types/weather";
import { Droplets, Wind, Gauge } from "lucide-react";

interface AtmosphericDetailsProps {
  data: WeatherReport;
}

export const AtmosphericDetails: React.FC<AtmosphericDetailsProps> = ({ data }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
      {/* Humidity Card */}
      <div className="glass-card rounded-[32px] p-8 relative group overflow-hidden border border-white/5">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-bold text-on-surface-variant tracking-[0.15em] uppercase">Humidity</span>
          <Droplets className="text-primary" size={20} />
        </div>
        <div className="flex items-center gap-8">
          <div className="relative w-28 h-28">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path 
                className="stroke-surface-container-highest/30" 
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                fill="none" 
                strokeWidth="3.5" 
              />
              <path 
                className="stroke-secondary transition-all duration-1000" 
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                fill="none" 
                strokeDasharray={`${data.humidity}, 100`} 
                strokeLinecap="round" 
                strokeWidth="3.5" 
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl text-on-surface">{data.humidity}%</div>
          </div>
          <div className="flex-1">
            <p className="text-on-surface-variant text-sm leading-relaxed">Atmospheric moisture content at current elevation.</p>
          </div>
        </div>
      </div>

      {/* Wind Card */}
      <div className="glass-card rounded-[32px] p-8 border border-white/5">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-bold text-on-surface-variant tracking-[0.15em] uppercase">Wind Dynamics</span>
          <Wind className="text-primary" size={20} />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="text-5xl font-bold text-on-surface tracking-tighter">{Math.round(data.wind_speed)} <span className="text-xl font-normal text-on-surface-variant/70">km/h</span></div>
            <p className="text-[10px] font-bold text-secondary tracking-widest uppercase">Current Velocity</p>
          </div>
          <div className="w-24 h-24 rounded-full border border-white/10 relative flex items-center justify-center bg-white/2">
            <div className="w-0.5 h-full bg-white/10 absolute left-1/2 -translate-x-1/2"></div>
            <div className="h-0.5 w-full bg-white/10 absolute top-1/2 -translate-y-1/2"></div>
            <Wind className="text-primary" size={32} />
          </div>
        </div>
      </div>

      {/* Barometric Card */}
      <div className="glass-card rounded-[32px] p-8 md:col-span-2 lg:col-span-1 border border-white/5">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-bold text-on-surface-variant tracking-[0.15em] uppercase">Barometric Pressure</span>
          <Gauge className="text-primary" size={20} />
        </div>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant text-xs font-medium">Pressure</span>
            <span className="font-bold text-on-surface text-sm">{data.pressure ?? "---"} hPa</span>
          </div>
          <div className="h-2 bg-surface-container-highest/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-400 via-secondary to-primary rounded-full shadow-[0_0_8px_rgba(251,146,60,0.5)] transition-all duration-1000" 
              style={{ width: `${Math.min(Math.max(((data.pressure ?? 1013) - 950) / 100 * 100, 5), 100)}%` }}
            ></div>
          </div>
          <div className="text-center">
             <span className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">
               {(data.pressure ?? 1013) > 1020 ? "High Pressure" : (data.pressure ?? 1013) < 1000 ? "Low Pressure" : "Stable Conditions"}
             </span>
          </div>
        </div>
      </div>
    </section>
  );
};
