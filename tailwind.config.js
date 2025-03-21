/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },

      borderImage: {
        gradient: 'linear-gradient(139.32deg, #0A1F44 -6.28%, #5A4FCF 27.47%, #40A8C4 106.22%)',
      },
      
      gradientColorStops: {
        'gradient-start': '#0A1F44',
        'gradient-mid': '#5A4FCF',
        'gradient-end': '#40A8C4',
      },
      colors: {
        customGray: '#E5E5E5',
        navy:'#0A1F44',
        Subtitles:'#484848',
        lightnavy:'#3B4C69' ,
        pink:'#5A4FCF',
        backgroundStep:'f6f6fc',
      },
      backgroundImage: {
        customGradient: 'linear-gradient(125.5deg, #0A1F44 8.22%, #5A4FCF 37.47%, #40A8C4 75.07%)',
      },
      fontWeight: {
        ultrabold: '700',
      },


    },
  },
  plugins: [],
};
