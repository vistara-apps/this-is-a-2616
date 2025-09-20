/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Retro Futuristic Color Palette
        bg: 'hsl(240, 10%, 8%)', // Deep dark background
        bgSecondary: 'hsl(240, 8%, 12%)', // Slightly lighter dark
        input: 'hsl(240, 8%, 16%)',
        accent: 'hsl(315, 100%, 60%)', // Hot pink/magenta
        accentSecondary: 'hsl(180, 100%, 50%)', // Cyan
        border: 'hsl(240, 8%, 20%)',
        borderGlow: 'hsl(315, 100%, 60%)', // Glowing pink border
        primary: 'hsl(270, 100%, 65%)', // Electric purple
        primaryGlow: 'hsl(270, 100%, 80%)', // Lighter purple for glow
        secondary: 'hsl(180, 100%, 50%)', // Neon cyan
        surface: 'hsl(240, 8%, 14%)',
        surfaceGlow: 'hsl(240, 8%, 18%)', // Elevated surface
        textPrimary: 'hsl(0, 0%, 95%)', // Near white
        textSecondary: 'hsl(180, 100%, 70%)', // Light cyan
        textAccent: 'hsl(315, 100%, 80%)', // Light pink
        success: 'hsl(120, 100%, 50%)', // Neon green
        warning: 'hsl(45, 100%, 55%)', // Neon orange
        error: 'hsl(0, 100%, 60%)', // Neon red
        // Gradient colors
        gradientStart: 'hsl(270, 100%, 65%)',
        gradientMid: 'hsl(315, 100%, 60%)',
        gradientEnd: 'hsl(180, 100%, 50%)',
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
        'card': '0 4px 16px hsla(240, 10%, 4%, 0.5), 0 0 0 1px hsla(240, 8%, 20%, 0.3)',
        'cardGlow': '0 4px 32px hsla(315, 100%, 60%, 0.2), 0 0 0 1px hsla(315, 100%, 60%, 0.3)',
        'focus': '0 0 0 3px hsla(270, 100%, 65%, 0.5), 0 0 16px hsla(270, 100%, 65%, 0.3)',
        'neonGlow': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        'innerGlow': 'inset 0 1px 0 hsla(0, 0%, 100%, 0.1)',
        'primaryGlow': '0 0 20px hsla(270, 100%, 65%, 0.4), 0 4px 16px hsla(240, 10%, 4%, 0.3)',
        'accentGlow': '0 0 20px hsla(315, 100%, 60%, 0.4), 0 4px 16px hsla(240, 10%, 4%, 0.3)',
        'secondaryGlow': '0 0 20px hsla(180, 100%, 50%, 0.4), 0 4px 16px hsla(240, 10%, 4%, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 250ms cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        'slide-up': 'slideUp 400ms cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'neon-flicker': 'neonFlicker 3s linear infinite',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'scan-line': 'scanLine 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'matrix-rain': 'matrixRain 20s linear infinite',
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
        glowPulse: {
          '0%': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            filter: 'brightness(1)'
          },
          '100%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
            filter: 'brightness(1.2)'
          },
        },
        neonFlicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
            filter: 'brightness(1)'
          },
          '20%, 24%, 55%': {
            textShadow: 'none',
            filter: 'brightness(0.8)'
          },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}