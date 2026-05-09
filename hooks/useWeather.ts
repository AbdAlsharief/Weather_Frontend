"use client";

import { useState, useEffect } from "react";
import { WeatherReport, WeatherState } from "@/types/weather";
import { apiClient } from "@/lib/apiClient";

export const useWeather = () => {
  const [state, setState] = useState<WeatherState>({
    current: null,
    history: [],
    loading: false,
    error: null,
  });

  const fetchWeather = async (city: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const data = await apiClient.get<WeatherReport>(`/weather?city=${city}`);
      setState((prev) => ({
        ...prev,
        current: data,
        history: [data, ...prev.history].slice(0, 10),
        loading: false,
      }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: err instanceof Error ? err.message : "Failed to fetch weather",
      }));
    }
  };

  const fetchHistory = async () => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      const data = await apiClient.get<WeatherReport[]>("/history");
      setState((prev) => ({
        ...prev,
        history: data,
        loading: false,
      }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: err instanceof Error ? err.message : "Failed to fetch history",
      }));
    }
  };

  return {
    ...state,
    fetchWeather,
    fetchHistory,
  };
};
