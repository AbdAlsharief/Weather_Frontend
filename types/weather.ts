export interface WeatherReport {
  id: number;
  city: string;
  country: string;
  temperature: number;
  description: string;
  humidity: number;
  wind_speed: number;
  timestamp: string;
  
  // High-precision meteorological data
  precipitation?: string;
  uv_index?: number;
  visibility?: number;
  pressure?: number;
  feels_like?: number;
  sunrise?: string;
  sunset?: string;
  wind_direction?: string;
  
  // Forecast data (simplified for now)
  forecast?: ForecastDay[];
}

export interface ForecastDay {
  day: string;
  date: string;
  high: number;
  low: number;
  description: string;
  precipitation_chance: string;
}

export interface Discovery {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
}

export interface WeatherState {
  current: WeatherReport | null;
  history: WeatherReport[];
  loading: boolean;
  error: string | null;
}
