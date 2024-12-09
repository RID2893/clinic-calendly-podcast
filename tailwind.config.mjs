/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0A6EBD',
          'light-blue': '#45CFDD',
          orange: '#FF6B35',
          'light-orange': '#FF9F6B'
        }
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0A6EBD 0%, #45CFDD 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}