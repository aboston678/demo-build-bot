import type { Config } from "tailwindcss";

// "The Signal Brief" design system — NationGraph's intelligence-dossier UI.
// Signal-orange (#F4900A) is the NationGraph brand mark. This is the shared
// base for every page the Demo Build Bot ships; individual builds may extend it.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F4900A",
          orangeBright: "#FFB152",
          orangeDeep: "#C9740A",
        },
        bg: {
          base: "#FAFBFA",
          panel: "#FFFFFF",
          raised: "#F1F4F3",
          inset: "#F4F7F6",
        },
        line: {
          DEFAULT: "#DCE4E2",
          bright: "#BDCCCA",
        },
        ink: {
          DEFAULT: "#0F2A2E",
          muted: "#45595B",
          dim: "#5E7274",
        },
        status: {
          live: "#F4900A",
          done: "#168F66",
          urgent: "#E4002B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: { content: "1180px" },
      boxShadow: {
        panel: "0 1px 2px rgba(15,42,46,0.04), 0 12px 30px -14px rgba(15,42,46,0.14)",
        glow: "0 0 0 1px rgba(244,144,10,0.30), 0 10px 28px -10px rgba(244,144,10,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.45s cubic-bezier(0.22,1,0.36,1) both",
        "pulse-dot": "pulse 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
