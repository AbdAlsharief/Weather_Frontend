"use client";

import React from "react";
import { HistoryArchive } from "@/components/HistoryArchive";
import { HistoryTrends } from "@/components/HistoryTrends";
import { Footer } from "@/components/Footer";

export default function HistoryPage() {
  return (
    <main className="max-w-[1440px] mx-auto w-full px-8 pt-6 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-on-surface tracking-tight">Data Archive</h2>
        <p className="text-on-surface-variant/80 mt-2 text-sm font-medium">Manage and export your search history</p>
      </div>

      <div className="grid grid-cols-12 gap-8 pb-20">
        <HistoryArchive />
        <HistoryTrends />
      </div>
      
      <Footer />
    </main>
  );
}
