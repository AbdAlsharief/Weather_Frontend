"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { WeatherReport, WeatherState } from "@/types/weather";

interface WeatherContextType {
  current: WeatherReport | null;
  history: WeatherReport[];
  loading: boolean;
  fetchWeather: (city: string) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<WeatherState>({
    current: null,
    history: [],
    loading: false,
    error: null,
  });

  const fetchWeather = async (city: string) => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockData: WeatherReport = {
        location: city,
        temp: 22,
        condition: "Partly Cloudy",
        humidity: 45,
        windSpeed: 12,
        forecast: [],
        timestamp: new Date().toISOString(),
      };
      setState(prev => ({
        ...prev,
        current: mockData,
        history: [mockData, ...prev.history].slice(0, 10),
        loading: false,
      }));
    } catch (err) {
      setState(prev => ({ ...prev, loading: false, error: "Failed to fetch weather" }));
    }
  };

  return (
    <WeatherContext.Provider value={{ ...state, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useWeatherContext must be used within WeatherProvider");
  return context;
};
