import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f7f7f5",
        foreground: "#0f1720",
        muted: "#64748b",
        surface: "#ffffff",
        surfaceAlt: "#f1f4f6",
        line: "rgba(15, 23, 32, 0.08)",
        primary: "#0f172a",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 50% -10%, rgba(148, 163, 184, 0.18), transparent 45%)",
        "panel-glow":
          "radial-gradient(circle at 50% 120%, rgba(255,255,255,0.12), transparent 45%)",
      },
      boxShadow: {
        soft: "0 10px 40px -20px rgba(15, 23, 32, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
