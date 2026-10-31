/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")], 
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        card: "var(--card)",
        elevated: "var(--elevated)",
        "surface-muted": "var(--surface-muted)",
        track: "var(--track)",
        border: "var(--border)",
 
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        subtle: "var(--subtle)",
 
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          foreground: "var(--primary-foreground)",
          container: "var(--primary-container)",
          tint: "var(--primary-tint)",
        },
        header: {
          DEFAULT: "var(--header)",
          foreground: "var(--header-foreground)",
          muted: "var(--header-muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          surface: "var(--accent-surface)",
          border: "var(--accent-border)",
        },
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        success: "var(--success)",
        error: "var(--error)",
        offline: {
          DEFAULT: "var(--offline)",
          foreground: "var(--offline-foreground)",
        },
      },
      borderRadius: { sm: "4px", DEFAULT: "8px", lg: "8px", xl: "12px" },
    },
  },

  plugins: [],
}
