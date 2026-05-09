import { Wind, Compass, Gauge, Eye, Sun } from "lucide-react";
import { WeatherReport } from "@/types/weather";

interface MeteorologicalBentoProps {
  data: WeatherReport;
}

export const MeteorologicalBento: React.FC<MeteorologicalBentoProps> = ({ data }) => {
  return (
    <aside className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
      {/* UV Index Card */}
      <div className="glass-card rounded-[32px] p-8 flex flex-col justify-between border border-white/5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 text-on-surface-variant">
            <Sun size={20} />
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase">UV Index</span>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-on-surface tracking-tighter">{data.uv_index || 0}</span>
            <span className="text-xl font-medium text-secondary">
              {(data.uv_index || 0) < 3 ? "Low" : (data.uv_index || 0) < 6 ? "Moderate" : "High"}
            </span>
          </div>
          <div className="h-2.5 bg-surface-container-highest/50 rounded-full relative">
            <div className="absolute left-0 h-full bg-gradient-to-r from-secondary to-primary rounded-full transition-all duration-1000" style={{ width: `${Math.min((data.uv_index || 0) * 10, 100)}%` }}></div>
          </div>
          <p className="text-[11px] text-on-surface-variant leading-relaxed">Local solar radiation levels based on current atmospheric position.</p>
        </div>
      </div>

      {/* Air Quality Card */}
      <div className="glass-card rounded-[32px] p-8 flex flex-col justify-between border border-white/5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 text-on-surface-variant">
            <Wind size={20} />
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase">Wind Analytics</span>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-on-surface tracking-tighter">{Math.round(data.wind_speed)}</span>
            <span className="text-xl font-normal text-on-surface-variant/70">km/h</span>
          </div>
          <div className="flex gap-2 h-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className={`flex-1 rounded-full transition-all duration-1000 ${
                  i <= Math.ceil(data.wind_speed / 20) ? 'bg-secondary' : 'bg-surface-container-highest/30'
                }`}
              ></div>
            ))}
          </div>
          <p className="text-[11px] text-on-surface-variant leading-relaxed">Current wind velocity and directional movement patterns.</p>
        </div>
      </div>

      {/* Visibility & Pressure Mini Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card rounded-3xl p-6 border border-white/5">
          <span className="text-[9px] font-bold text-on-surface-variant mb-3 block tracking-widest uppercase">Visibility</span>
          <span className="text-2xl font-bold text-on-surface">{((data.visibility ?? 0) / 1000).toFixed(1)} <span className="text-xs font-medium text-on-surface-variant">km</span></span>
          <p className="text-[9px] text-secondary mt-3 font-bold uppercase tracking-tighter">
            {(data.visibility ?? 0) > 5000 ? "Clear" : "Reduced"}
          </p>
        </div>
        <div className="glass-card rounded-3xl p-6 border border-white/5">
          <span className="text-[9px] font-bold text-on-surface-variant mb-3 block tracking-widest uppercase">Pressure</span>
          <span className="text-2xl font-bold text-on-surface">{data.pressure ?? "---"} <span className="text-xs font-medium text-on-surface-variant">hPa</span></span>
          <p className="text-[9px] text-secondary mt-3 font-bold uppercase tracking-tighter">Steady</p>
        </div>
      </div>
    </aside>
  );
};
