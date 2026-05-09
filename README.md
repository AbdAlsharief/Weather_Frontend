# 🎨 Weather Frontend - Atmospheric AI

A production-grade, single-page weather dashboard built with Next.js. It features a high-density, data-driven interface designed to provide meteorological precision with a premium "Glassmorphism" aesthetic.

## 🌟 Features
- **Dynamic Precision Modeling**: Custom-built SVG charts that visualize real-time temperature trends with Bézier curves.
- **Meteorological Bento Grid**: High-density metrics layout consolidating Humidity, Dew Point, Pressure, and Visibility.
- **Global Search System**: Predictive search bar supporting city names, zip codes, and coordinates with time-range persistence.
- **Responsive "Fit" Layout**: Optimized for high-resolution screens with centered navigation and fluid components.
- **Glassmorphism UI**: Uses backdrop filters and translucent layers for a modern, sleek appearance.

## 🛠️ Tech Stack
- **Framework**: Next.js 16.2 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Animations**: CSS Transitions / Framer-like micro-interactions

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Backend**:
   Ensure the FastAPI backend is running on `http://localhost:8000`.

3. **Development Mode**:
   ```bash
   npm run dev
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```

## 📂 Project Structure
- `app/`: Next.js App Router and global layout.
- `components/`: Modular UI components (Navbar, HourlyTrend, MeteorologicalBento).
- `context/`: WeatherContext for unified data fetching and state sync.
- `types/`: TypeScript interfaces for backend data synchronization.
