/**
 * GLOBAL DESIGN SYSTEM
 * ====================
 * 
 * This file documents the design system used throughout the application.
 * All styling should reference these values via CSS variables or Tailwind classes.
 * 
 * CSS Variables are defined in src/styles/globals.css
 */

// ============================================
// COLOR PALETTE
// ============================================

export const COLORS = {
  // Background
  bg: {
    primary: '#0a0e27',    // Main background
    secondary: '#1a1f3a',  // Secondary background
    tertiary: '#2d3561',   // Tertiary background
    overlay: 'rgba(10, 14, 39, 0.8)',
  },

  // Accent Colors - Three pillars
  accent: {
    // Cloud - Primary blue (used for main actions, links, primary accent)
    cloud: {
      light: '#00d9ff',
      dark: '#0099cc',
      glow: 'rgba(0, 217, 255, 0.3)',
      glowBright: 'rgba(0, 217, 255, 0.5)',
    },
    // Automation - Green (used for success, positive actions, secondary accent)
    automation: {
      light: '#00ff88',
      dark: '#00cc6a',
      glow: 'rgba(0, 255, 136, 0.3)',
      glowBright: 'rgba(0, 255, 136, 0.5)',
    },
    // Security - Violet (used for warnings, important elements, tertiary accent)
    security: {
      light: '#d4a5ff',
      dark: '#a855f7',
      glow: 'rgba(212, 165, 255, 0.3)',
      glowBright: 'rgba(212, 165, 255, 0.5)',
    },
    // Orange - Supporting accent (used throughout)
    orange: '#ff9a3c',
    orangeGlow: 'rgba(255, 154, 60, 0.3)',
  },

  // Semantic text colors
  text: {
    primary: '#ffffff',      // Primary text
    secondary: '#b0b8d4',   // Secondary text
    tertiary: '#7a8298',    // Tertiary text
    muted: '#565c77',       // Muted text
  },

  // Borders
  border: {
    light: 'rgba(255, 255, 255, 0.1)',
    medium: 'rgba(255, 255, 255, 0.2)',
    strong: 'rgba(255, 255, 255, 0.3)',
  },
}

// ============================================
// SPACING SCALE
// ============================================
// All spacing follows a consistent 8px base unit
// Usage: Use CSS variables like var(--spacing-md)

export const SPACING = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
}

// ============================================
// TYPOGRAPHY SYSTEM
// ============================================

export const TYPOGRAPHY = {
  // Headlines - Bold, tight line-height
  headline: {
    xl: {
      size: '3.5rem',     // 56px - Page title
      weight: 700,
      lineHeight: 1.2,
    },
    lg: {
      size: '3rem',       // 48px - Section title
      weight: 700,
      lineHeight: 1.2,
    },
    md: {
      size: '2rem',       // 32px - Subsection
      weight: 700,
      lineHeight: 1.2,
    },
    sm: {
      size: '1.5rem',     // 24px - Card title
      weight: 600,
      lineHeight: 1.5,
    },
    xs: {
      size: '1.25rem',    // 20px - Small heading
      weight: 600,
      lineHeight: 1.5,
    },
  },

  // Body text - Readable, comfortable line-height
  body: {
    lg: {
      size: '1.125rem',   // 18px - Large body
      weight: 400,
      lineHeight: 1.75,
    },
    md: {
      size: '1rem',       // 16px - Regular body
      weight: 400,
      lineHeight: 1.5,
    },
    sm: {
      size: '0.875rem',   // 14px - Small body
      weight: 400,
      lineHeight: 1.5,
    },
    xs: {
      size: '0.75rem',    // 12px - Tiny text
      weight: 400,
      lineHeight: 1.5,
    },
  },

  // Font weights
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
}

// ============================================
// BORDER RADIUS
// ============================================

export const RADIUS = {
  sm: '0.375rem',     // 6px
  md: '0.5rem',       // 8px
  lg: '0.75rem',      // 12px
  xl: '1rem',         // 16px
  '2xl': '1.5rem',    // 24px
  full: '9999px',
}

// ============================================
// TRANSITIONS & ANIMATIONS
// ============================================

export const TRANSITIONS = {
  fast: '150ms ease-out',
  base: '300ms ease-out',
  slow: '500ms ease-out',
}

export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  glow: {
    cloud: '0 0 20px rgba(0, 217, 255, 0.3)',
    automation: '0 0 20px rgba(0, 255, 136, 0.3)',
    security: '0 0 20px rgba(212, 165, 255, 0.3)',
  },
}

// ============================================
// LAYOUT
// ============================================

export const LAYOUT = {
  containerMaxWidth: '1280px',
  containerPadding: '1.5rem',  // --spacing-lg
  sectionGap: '4rem',          // --spacing-3xl

  // Breakpoints (Tailwind standard)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Safe areas for mobile
  containerSizes: {
    sm: '672px',    // max-w-2xl
    md: '896px',    // max-w-4xl
    lg: '1152px',   // max-w-6xl
    xl: '1280px',   // max-w-7xl
  },
}

// ============================================
// USAGE GUIDE
// ============================================

/**
 * CSS VARIABLES (Preferred for static values)
 * 
 * Use in CSS/Tailwind:
 * background-color: var(--color-bg-primary);
 * color: var(--color-cloud-light);
 * padding: var(--spacing-lg);
 * font-size: var(--font-headline-lg);
 * 
 * Example Component:
 * <div className="bg-dark-bg text-cloud p-6 rounded-xl">
 *   <h2 className="headline-lg text-cloud">Title</h2>
 * </div>
 */

/**
 * TAILWIND CLASSES (For quick styling)
 * 
 * Color utilities:
 * - .text-cloud, .text-automation, .text-security
 * - .border-cloud, .border-automation, .border-security
 * - .bg-cloud-glow, .bg-automation-glow, .bg-security-glow
 * 
 * Typography utilities:
 * - .headline-xl, .headline-lg, .headline-md, .headline-sm
 * - .body-lg, .body-md, .body-sm
 * 
 * Animation utilities:
 * - .animate-fade-in-up, .animate-fade-in-down
 * - .animate-slide-in-left, .animate-slide-in-right
 * - .animate-glow-pulse, .animate-glow-pulse-green, .animate-glow-pulse-violet
 * - .animate-float
 * 
 * Effect utilities:
 * - .glass (glass morphism)
 */

/**
 * RESPONSIVE SPACING
 * 
 * Mobile (< 768px): Uses --spacing-md for container padding
 * Desktop (≥ 768px): Uses --spacing-lg for container padding
 * 
 * All spacing, font sizes adjust automatically based on media query in :root
 */

/**
 * COLOR STRATEGY
 * 
 * 1. Cloud (Blue) - Primary
 *    Used for: Main buttons, primary links, key information
 *    
 * 2. Automation (Green) - Secondary
 *    Used for: Success states, positive feedback, secondary actions
 *    
 * 3. Security (Violet) - Tertiary
 *    Used for: Important items, warnings, special highlights
 *    
 * 4. Orange - Supporting
 *    Used for: Accents, hover states, transitions
 */
