"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { WeatherReport, WeatherState, Discovery } from "@/types/weather";
import { apiClient } from "@/lib/apiClient";

interface WeatherContextType {
  current: WeatherReport | null;
  discovery: Discovery | null;
  history: WeatherReport[];
  loading: boolean;
  error: string | null;
  fetchWeather: (city: string, startDate?: string, endDate?: string) => Promise<void>;
  fetchHistory: () => Promise<void>;
  deleteHistory: (id: number) => Promise<void>;
  updateHistory: (id: number, newLocation: string) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);



export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<WeatherState>({
    current: null,
    discovery: null,
    history: [],
    loading: false,
    error: null,
  });

  const fetchWeather = async (city: string, startDate?: string, endDate?: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const data = await apiClient.post<any>("/weather", {
        location: city,
        start_date: startDate || new Date().toISOString().split('T')[0],
        end_date: endDate || new Date().toISOString().split('T')[0]
      });
      
      // Map backend response to our WeatherReport interface
      const report: WeatherReport = {
        id: data.report.id,
        city: data.report.resolved_location,
        country: "Resolved",
        temperature: data.report.temp,
        description: data.report.condition,
        humidity: data.report.humidity,
        wind_speed: data.report.wind_speed,
        pressure: data.report.pressure,
        visibility: data.report.visibility,
        timestamp: data.report.created_at,
        forecast: data.report.forecast || []
      };

      setState(prev => ({
        ...prev,
        current: report,
        discovery: data.discovery,
        history: [report, ...prev.history].slice(0, 10),
        loading: false,
      }));
    } catch (err) {
      setState(prev => ({ ...prev, loading: false, error: err instanceof Error ? err.message : "API Error" }));
    }
  };

  const fetchHistory = async () => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      const data = await apiClient.get<any[]>("/history");
      const mappedHistory: WeatherReport[] = data.map((r: any) => ({
        id: r.id,
        city: r.resolved_location,
        country: "History",
        temperature: r.temp,
        description: r.condition,
        humidity: r.humidity,
        wind_speed: r.wind_speed,
        pressure: r.pressure,
        visibility: r.visibility,
        timestamp: r.created_at,
        forecast: []
      }));

      setState(prev => ({
        ...prev,
        history: mappedHistory,
        loading: false,
      }));
    } catch (err) {
      setState(prev => ({ ...prev, loading: false, error: "Failed to fetch history" }));
    }
  };

  const deleteHistory = async (id: number) => {
    try {
      await apiClient.delete(`/history/${id}`);
      setState(prev => ({
        ...prev,
        history: prev.history.filter(h => h.id !== id)
      }));
    } catch (err) {
      setState(prev => ({ ...prev, error: "Failed to delete record" }));
    }
  };

  const updateHistory = async (id: number, newLocation: string) => {
    try {
      await apiClient.patch(`/history/${id}`, { user_input_location: newLocation });
      await fetchHistory(); // Refresh list to get updated names
    } catch (err) {
      setState(prev => ({ ...prev, error: "Failed to update record" }));
    }
  };

  // Fetch history on initial load
  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <WeatherContext.Provider value={{ ...state, fetchWeather, fetchHistory, deleteHistory, updateHistory }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useWeatherContext must be used within WeatherProvider");
  return context;
};
