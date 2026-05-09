"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cloud, TrendingUp, History } from "lucide-react";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col h-screen fixed left-0 top-0 z-40 bg-surface-container-lowest/90 backdrop-blur-3xl border-r border-white/5 w-[280px]">
      <nav className="flex-1 px-4 pt-24 space-y-1 overflow-y-auto custom-scrollbar">
        <NavItem 
          icon={<Cloud size={22} />} 
          label="Weather" 
          href="/" 
          active={pathname === "/"} 
        />
        <NavItem 
          icon={<TrendingUp size={22} />} 
          label="Forecast" 
          href="/forecast" 
          active={pathname === "/forecast"} 
        />
        <NavItem 
          icon={<History size={22} />} 
          label="History" 
          href="/history" 
          active={pathname === "/history"} 
        />

      </nav>
      
      {/* User Context Area (Optional/Placeholder) */}
      {/* <div className="p-8 border-t border-white/5">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
            <div className="w-full h-full rounded-full bg-surface-container-lowest flex items-center justify-center font-bold text-xs">
              AD
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-on-surface uppercase tracking-widest">Admin User</span>
            <span className="text-[9px] text-on-surface-variant font-medium">Session Active</span>
          </div>
        </div>
      </div> */}
    </aside>
  );
};

function NavItem({ icon, label, href, active = false }: { icon: React.ReactNode; label: string; href: string; active?: boolean }) {
  return (
    <Link 
      href={href}
      className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 group ${
        active 
          ? "bg-surface-container-high text-secondary border border-white/5 shadow-[0_0_24px_-6px_rgba(192,193,255,0.15)]" 
          : "text-on-surface-variant hover:bg-white/5 hover:text-on-surface"
      }`}
    >
      <span className={`${active ? "text-secondary" : "text-on-surface-variant group-hover:scale-110 transition-transform"}`}>
        {icon}
      </span>
      <span className="text-xs font-bold tracking-widest uppercase">{label}</span>
    </Link>
  );
}
