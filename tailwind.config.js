/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(220, 24%, 97%)',
        input: 'hsl(220, 14%, 89%)',
        accent: 'hsl(47, 97%, 53%)',
        border: 'hsl(220, 14%, 89%)',
        primary: 'hsl(219, 83%, 56%)',
        surface: 'hsl(0, 0%, 100%)',
        textPrimary: 'hsl(220, 13%, 14%)',
        textSecondary: 'hsl(220, 13%, 37%)',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '24px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      boxShadow: {
        'card': '0 4px 16px hsla(220, 13%, 18%, 0.1)',
        'focus': '0 0 0 3px hsla(47, 97%, 53%, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 250ms cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        'slide-up': 'slideUp 400ms cubic-bezier(0.215, 0.610, 0.355, 1.000)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}