/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#4361EE',
        'primary-hover': '#3651D4',
        secondary: '#3A0CA3',
        accent: '#F72585',
        dark: '#0A0A0A',
        'dark-alt': '#111111',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        display: ['Noto Sans Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
