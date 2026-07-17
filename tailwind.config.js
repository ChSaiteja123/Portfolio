/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#020617',
        neon: '#22d3ee',
        violet: '#8b5cf6'
      },
      boxShadow: {
        glow: '0 0 40px rgba(34,211,238,0.25)'
      }
    }
  },
  plugins: []
};
