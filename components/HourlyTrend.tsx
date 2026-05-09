import { WeatherReport } from "@/types/weather";

interface HourlyTrendProps {
  data: WeatherReport;
}
export const HourlyTrend: React.FC<HourlyTrendProps> = ({ data }) => {
  const forecast = data.forecast || [];
  
  // Calculate points for the chart based on high temperatures
  // We'll normalize 5 points across the 1000px width
  const points = forecast.map((d, i) => ({
    x: (i * (1000 / Math.max(1, forecast.length - 1))),
    y: 150 - ((d.high - Math.min(...forecast.map(f => f.low))) / (Math.max(...forecast.map(f => f.high)) - Math.min(...forecast.map(f => f.low)) || 1)) * 100
  }));

  // Create path string
  const pathD = points.length > 0 
    ? `M${points[0].x},${points[0].y} ` + points.slice(1).map((p, i) => {
        const prev = points[i];
        const cx = (prev.x + p.x) / 2;
        return `C${cx},${prev.y} ${cx},${p.y} ${p.x},${p.y}`;
      }).join(' ')
    : "";

  return (
    <section className="glass-card rounded-[32px] p-10 relative overflow-hidden group border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-10 relative z-10">
        <div>
          <span className="font-bold text-primary/80 mb-3 block uppercase tracking-[0.2em] text-[10px]">Atmospheric Performance</span>
          <h2 className="text-3xl font-bold text-on-surface">Precision Modeling</h2>
          <p className="text-on-surface-variant text-xs mt-2 opacity-70 font-medium">Real-time {data.description} conditions reported in {data.city}</p>
        </div>
        <div className="flex items-end gap-6">
          <div className="text-right">
            <span className="text-7xl font-bold leading-none text-on-surface tracking-tighter">{Math.round(data.temperature)}°</span>
            <p className="font-bold text-on-surface-variant tracking-widest mt-2 uppercase text-[10px]">Current Reading</p>
          </div>
        </div>
      </div>

      <div className="h-56 w-full relative mt-10">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
          <defs>
            <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#c0c1ff" />
              <stop offset="50%" stopColor="#4fdbc8" />
              <stop offset="100%" stopColor="#c0c1ff" />
            </linearGradient>
            <linearGradient id="fillGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(192, 193, 255, 0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          
          {points.length > 0 && (
            <>
              <path d={`${pathD} L1000,200 L0,200 Z`} fill="url(#fillGrad)" className="transition-all duration-1000" />
              <path d={pathD} fill="none" stroke="url(#lineGrad)" strokeWidth="4" strokeLinecap="round" className="transition-all duration-1000" />
              
              {points.map((p, i) => (
                <circle 
                  key={i} 
                  cx={p.x} 
                  cy={p.y} 
                  r="5" 
                  fill="#4fdbc8" 
                  className={i === 0 ? "animate-pulse" : ""} 
                />
              ))}
            </>
          )}
        </svg>
        <div className="flex justify-between mt-6 text-on-surface-variant font-bold text-[10px] tracking-widest opacity-60 uppercase">
          {forecast.map((d, i) => (
            <span key={i}>{d.day}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
