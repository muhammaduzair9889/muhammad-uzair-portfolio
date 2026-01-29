/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors from design system
        'dark-bg': '#0a0e27',
        'dark-secondary': '#1a1f3a',
        'dark-tertiary': '#2d3561',
        
        // Primary accent - Cloud (Blue)
        'accent-cloud': '#00d9ff',
        'accent-cloud-dark': '#0099cc',
        
        // Secondary accent - Automation (Green)
        'accent-automation': '#00ff88',
        'accent-automation-dark': '#00cc6a',
        
        // Tertiary accent - Security (Violet)
        'accent-security': '#d4a5ff',
        'accent-security-dark': '#a855f7',
        
        // Supporting accent - Orange
        'accent-orange': '#ff9a3c',
        'accent-cyan': '#00d9ff',  // Keep for backward compatibility
        'accent-blue': '#3b82f6',  // Keep for backward compatibility
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow-orange': '0 0 20px rgba(255, 154, 60, 0.3)',
        'glow-cloud': '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow-automation': '0 0 20px rgba(0, 255, 136, 0.3)',
        'glow-security': '0 0 20px rgba(212, 165, 255, 0.3)',
      },
      // Spacing scale based on design system
      spacing: {
        'xs': '0.25rem',   // 4px
        'sm': '0.5rem',    // 8px
        'md': '1rem',      // 16px
        'lg': '1.5rem',    // 24px
        'xl': '2rem',      // 32px
        '2xl': '3rem',     // 48px
        '3xl': '4rem',     // 64px
        '4xl': '6rem',     // 96px
      },
      // Border radius based on design system
      borderRadius: {
        'xs': '0.375rem',  // 6px
        'sm': '0.5rem',    // 8px
        'md': '0.75rem',   // 12px
        'lg': '1rem',      // 16px
        'xl': '1.5rem',    // 24px
      },
    },
  },
  plugins: [],
}

