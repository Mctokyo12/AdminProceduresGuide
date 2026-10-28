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
        border: "var(--border)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          foreground: "var(--primary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          surface: "var(--accent-surface)",
          border: "var(--accent-border)",
        },
        success: "var(--success)",
        error: "var(--error)",
        offline: {
          DEFAULT: "var(--offline)",
          foreground: "var(--offline-foreground)",
        },
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "8px",
        xl: "12px",
      },
    },
  },

  plugins: [],
}
