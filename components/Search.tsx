import React, { useState } from "react";
import { Search as SearchIcon, MapPin } from "lucide-react";

const SUGGESTED_CITIES = ["Cairo", "London", "Dubai", "New York", "Tokyo"];


interface SearchProps {
  onSearch: (city: string) => void;
  loading?: boolean;
}

export const Search: React.FC<SearchProps> = ({ onSearch, loading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative group max-w-2xl w-full">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <SearchIcon className={`w-5 h-5 ${loading ? "animate-pulse text-accent" : "text-slate-400 group-focus-within:text-accent"}`} />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search city for real-time analytics..."
        className="w-full pl-12 pr-4 py-4 glass-panel bg-slate-900/50 border-accent/20 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 outline-none transition-all text-lg"
      />
      {loading && (
        <div className="absolute inset-y-0 right-4 flex items-center">
          <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
        </div>
      )}
      
      <div className="flex flex-wrap gap-2 mt-4 animate-in fade-in slide-in-from-top-2 duration-700 delay-300">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1 mr-1">
          <MapPin size={12} /> Suggestions:
        </span>
        {SUGGESTED_CITIES.map(city => (
          <button
            key={city}
            type="button"
            onClick={() => {
              setQuery(city);
              onSearch(city);
            }}
            className="text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all text-slate-400 uppercase"
          >
            {city}
          </button>
        ))}
      </div>
    </form>
  );
};
