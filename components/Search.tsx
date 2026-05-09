import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

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
    </form>
  );
};
