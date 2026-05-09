import React from "react";
import { Sparkles, Map, PlayCircle, ChevronRight } from "lucide-react";

export const AIInsights = () => {
  return (
    <div className="glass-card rounded-[2.5rem] p-8 flex-1 inner-glow flex flex-col justify-between min-h-[300px]">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="text-tertiary w-5 h-5" fill="currentColor" />
          <h3 className="text-lg font-bold text-on-surface">AI Insights</h3>
        </div>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
          Atmospheric pressure is stabilizing over the region. Expect crystal clear visibility for the next 48 hours. Perfect conditions for outdoor data collection and aerial photography.
        </p>
      </div>
      
      <div className="space-y-3">
        <InsightButton icon={<Map size={18} className="text-secondary" />} label="View Regional Map" />
        <InsightButton icon={<PlayCircle size={18} className="text-primary" />} label="Watch Forecast Guide" />
      </div>
    </div>
  );
};

function InsightButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="w-full flex items-center justify-between bg-white/5 border border-white/10 hover:bg-white/10 p-4 rounded-xl transition-all group">
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm font-medium text-on-surface">{label}</span>
      </div>
      <ChevronRight size={18} className="text-on-surface-variant group-hover:translate-x-1 transition-transform" />
    </button>
  );
}
