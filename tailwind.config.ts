import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0b1326",
        "surface-container-highest": "#2d3449",
        "surface-variant": "#2d3449",
        "surface-container-lowest": "#060e20",
        "surface-container-high": "#222a3d",
        "outline-variant": "#464554",
        "secondary-fixed-dim": "#4fdbc8",
        tertiary: "#ffb783",
        error: "#ffb4ab",
        "on-secondary-fixed-variant": "#005048",
        "on-tertiary-container": "#452000",
        background: "#0b1326",
        "on-tertiary-fixed": "#301400",
        "tertiary-container": "#d97721",
        "on-secondary-container": "#003f38",
        "on-primary-fixed-variant": "#2f2ebe",
        "primary-fixed": "#e1e0ff",
        "on-tertiary-fixed-variant": "#703700",
        outline: "#908fa0",
        "tertiary-fixed": "#ffdcc5",
        secondary: "#4fdbc8",
        "on-secondary": "#003731",
        "surface-container-low": "#131b2e",
        "secondary-container": "#04b4a2",
        "on-primary": "#1000a9",
        "error-container": "#93000a",
        "on-background": "#dae2fd",
        "on-primary-container": "#0d0096",
        "inverse-primary": "#494bd6",
        "tertiary-fixed-dim": "#ffb783",
        "on-surface-variant": "#c7c4d7",
        "on-tertiary": "#4f2500",
        "secondary-fixed": "#71f8e4",
        "on-secondary-fixed": "#00201c",
        "surface-bright": "#31394d",
        "surface-tint": "#c0c1ff",
        "inverse-surface": "#dae2fd",
        "on-error": "#690005",
        "primary-fixed-dim": "#c0c1ff",
        "inverse-on-surface": "#283044",
        "primary-container": "#8083ff",
        "on-surface": "#dae2fd",
        primary: "#c0c1ff",
        "surface-container": "#171f33",
        "on-primary-fixed": "#07006c",
        "surface-dim": "#0b1326",
        "on-error-container": "#ffdad6"
      },
      spacing: {
        base: "8px",
        "container-padding": "32px",
        "section-margin": "48px",
        "grid-gutter": "20px",
        "stack-gap": "24px"
      },
      fontFamily: {
        sans: ["Hanken Grotesk", "Inter", "system-ui", "sans-serif"],
        display: ["Hanken Grotesk", "sans-serif"],
        label: ["Geist", "monospace"],
      },
      fontSize: {
        "display-temp": ["72px", { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "700" }],
      },
      boxShadow: {
        neon: "0 0 10px rgba(192, 193, 255, 0.3), 0 0 20px rgba(192, 193, 255, 0.1)",
      }
    },
  },
  plugins: [],
};

export default config;
