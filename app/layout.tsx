import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
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
      <body className={`${hanken.variable} font-sans bg-surface text-on-surface min-h-screen overflow-x-hidden`}>
        <WeatherProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
              {children}
            </div>
          </div>
        </WeatherProvider>
      </body>
    </html>
  );
}
