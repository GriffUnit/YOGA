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
      peach_red: '#DC715B',
      light_purple: '#E9D7FC',
      sea_blue: '#D5ECFD',
      light_red: '#FAD9D3',
    },
    spacing: {
      '77': '77px',
      '90': '364px', 
    },

    height: {
      '704': '704px'
    },

    width: {
      '639': '42rem',
      '710': '44.375rem',
      '246': '15.375',
    },
    fontFamily: {
      'Kumbh': ["Kumbh Sans", "sans-serif"],
      'DavidLibre': ["David Libre", "sans-serif"]
    },
  },
  },
  plugins: [],
}