import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Navbar } from "@/components/Navbar";
import { WeatherProvider } from "@/context/WeatherContext";

const hanken = Hanken_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-hanken',
});

export const metadata: Metadata = {
  title: "Weather | Precision Atmospheric Data",
  description: "Advanced meteorological analytics for professional decision making.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${hanken.variable} font-sans bg-surface text-on-surface min-h-screen flex overflow-hidden`}>
        <WeatherProvider>
          <Sidebar />
          <div className="flex-1 flex flex-col h-screen overflow-y-auto custom-scrollbar">
            <Navbar />
            {children}
          </div>
        </WeatherProvider>
      </body>
    </html>
  );
}
