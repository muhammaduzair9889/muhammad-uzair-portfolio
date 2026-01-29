/**
 * DESIGN TOKENS - Quick Reference
 * 
 * Use these constants in your components for type-safe design system access.
 * All values reference the CSS variables defined in globals.css
 */

// ============================================
// COLOR TOKENS
// ============================================

export const ColorTokens = {
  // Backgrounds
  bg: {
    primary: 'var(--color-bg-primary)',
    secondary: 'var(--color-bg-secondary)',
    tertiary: 'var(--color-bg-tertiary)',
    overlay: 'var(--color-bg-overlay)',
  },

  // Cloud Accent - Primary
  cloud: {
    light: 'var(--color-cloud-light)',
    dark: 'var(--color-cloud-dark)',
    glow: 'var(--color-cloud-glow)',
    glowBright: 'var(--color-cloud-glow-bright)',
  },

  // Automation Accent - Secondary
  automation: {
    light: 'var(--color-automation-light)',
    dark: 'var(--color-automation-dark)',
    glow: 'var(--color-automation-glow)',
    glowBright: 'var(--color-automation-glow-bright)',
  },

  // Security Accent - Tertiary
  security: {
    light: 'var(--color-security-light)',
    dark: 'var(--color-security-dark)',
    glow: 'var(--color-security-glow)',
    glowBright: 'var(--color-security-glow-bright)',
  },

  // Orange - Supporting
  orange: 'var(--color-accent-orange)',
  orangeGlow: 'var(--color-accent-orange-glow)',

  // Text
  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    tertiary: 'var(--color-text-tertiary)',
    muted: 'var(--color-text-muted)',
  },

  // Borders
  border: {
    light: 'var(--color-border-light)',
    medium: 'var(--color-border-medium)',
    strong: 'var(--color-border-strong)',
  },
} as const

// ============================================
// SPACING TOKENS
// ============================================

export const SpacingTokens = {
  xs: 'var(--spacing-xs)',
  sm: 'var(--spacing-sm)',
  md: 'var(--spacing-md)',
  lg: 'var(--spacing-lg)',
  xl: 'var(--spacing-xl)',
  '2xl': 'var(--spacing-2xl)',
  '3xl': 'var(--spacing-3xl)',
  '4xl': 'var(--spacing-4xl)',
} as const

// ============================================
// TYPOGRAPHY TOKENS
// ============================================

export const TypographyTokens = {
  // Font sizes
  fontSize: {
    headlineXl: 'var(--font-headline-xl)',
    headlineLg: 'var(--font-headline-lg)',
    headlineMd: 'var(--font-headline-md)',
    headlineSm: 'var(--font-headline-sm)',
    headlineXs: 'var(--font-headline-xs)',
    bodyLg: 'var(--font-body-lg)',
    bodyMd: 'var(--font-body-md)',
    bodySm: 'var(--font-body-sm)',
    bodyXs: 'var(--font-body-xs)',
  },

  // Font weights
  fontWeight: {
    light: 'var(--font-weight-light)',
    normal: 'var(--font-weight-normal)',
    medium: 'var(--font-weight-medium)',
    semibold: 'var(--font-weight-semibold)',
    bold: 'var(--font-weight-bold)',
  },

  // Line heights
  lineHeight: {
    tight: 'var(--line-height-tight)',
    normal: 'var(--line-height-normal)',
    relaxed: 'var(--line-height-relaxed)',
  },
} as const

// ============================================
// RADIUS TOKENS
// ============================================

export const RadiusTokens = {
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  '2xl': 'var(--radius-2xl)',
  full: 'var(--radius-full)',
} as const

// ============================================
// TRANSITION TOKENS
// ============================================

export const TransitionTokens = {
  fast: 'var(--transition-fast)',
  base: 'var(--transition-base)',
  slow: 'var(--transition-slow)',
} as const

// ============================================
// SHADOW TOKENS
// ============================================

export const ShadowTokens = {
  sm: 'var(--shadow-sm)',
  md: 'var(--shadow-md)',
  lg: 'var(--shadow-lg)',
  xl: 'var(--shadow-xl)',
  glow: {
    cloud: 'var(--shadow-glow-cloud)',
    automation: 'var(--shadow-glow-automation)',
    security: 'var(--shadow-glow-security)',
  },
} as const

// ============================================
// LAYOUT TOKENS
// ============================================

export const LayoutTokens = {
  containerMaxWidth: 'var(--container-max-width)',
  containerPadding: 'var(--container-padding)',
  sectionGap: 'var(--section-gap)',
} as const

// ============================================
// COMBINED PRESET STYLES
// ============================================

/**
 * Common style combinations
 * Use these for consistent styling patterns
 */

export const StylePresets = {
  // Glass effect
  glass: {
    backgroundColor: ColorTokens.bg.secondary,
    backdropFilter: 'blur(10px)',
    border: `1px solid ${ColorTokens.border.light}`,
  },

  // Focus states
  focusCloud: {
    outline: 'none',
    borderColor: ColorTokens.cloud.light,
    boxShadow: `0 0 0 3px ${ColorTokens.cloud.glow}`,
  },

  focusAutomation: {
    outline: 'none',
    borderColor: ColorTokens.automation.light,
    boxShadow: `0 0 0 3px ${ColorTokens.automation.glow}`,
  },

  focusSecurity: {
    outline: 'none',
    borderColor: ColorTokens.security.light,
    boxShadow: `0 0 0 3px ${ColorTokens.security.glow}`,
  },

  // Hover states
  hoverElevated: {
    transform: 'translateY(-2px)',
    boxShadow: ShadowTokens.lg,
    transition: TransitionTokens.base,
  },

  // Active states
  activePressed: {
    transform: 'scale(0.98)',
    transition: TransitionTokens.fast,
  },
} as const

// ============================================
// ANIMATION DURATIONS (in milliseconds)
// ============================================

export const AnimationDurations = {
  fast: 150,
  base: 300,
  slow: 500,
  lengthy: 800,
} as const

// ============================================
// Z-INDEX LAYERS
// ============================================

export const ZIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modal: 40,
  tooltip: 50,
  notification: 60,
  highest: 9999,
} as const

// ============================================
// USAGE EXAMPLES
// ============================================

/**
 * Example 1: Using in React component
 * 
 * import { ColorTokens, SpacingTokens } from '@/constants/designTokens'
 * 
 * <div style={{
 *   backgroundColor: ColorTokens.bg.secondary,
 *   color: ColorTokens.text.primary,
 *   padding: SpacingTokens.lg,
 * }}>
 *   Content
 * </div>
 */

/**
 * Example 2: Using in CSS-in-JS
 * 
 * const buttonStyle = {
 *   backgroundColor: ColorTokens.cloud.light,
 *   color: ColorTokens.bg.primary,
 *   padding: `${SpacingTokens.md} ${SpacingTokens.lg}`,
 *   borderRadius: RadiusTokens.lg,
 *   transition: TransitionTokens.base,
 *   '&:hover': StylePresets.hoverElevated,
 * }
 */

/**
 * Example 3: Using in Tailwind classes
 * 
 * <div className="bg-dark-secondary text-white p-6 rounded-lg">
 *   Content (uses Tailwind, which is based on these tokens)
 * </div>
 */
