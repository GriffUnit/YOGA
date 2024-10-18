/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
      purpleBackground: "#2E133A",
      foreground: "var(--foreground),",
      peach_yellow: '#FCE28B',
      light_blue: '#D5E4FA',
    },
    spacing: {
      '77': '77px',
      '90': '364px', 
    },

    width: {
      '639': '42rem',
      '710': '44.375rem',
    },
    fontFamily: {
      'Kumbh': ["Kumbh Sans", "sans-serif"],
      'DavidLibre': ["David Libre", "sans-serif"]
    },
   
  },
  },
  plugins: [],
}