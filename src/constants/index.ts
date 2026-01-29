/**
 * Design System Exports
 * 
 * Central export file for all design system utilities, constants, and components
 * Import from this file for quick access to design system resources
 */

// ============================================
// COMPONENTS
// ============================================

export { Container } from '@/components/common/Container'
export type { ContainerProps } from '@/components/common/Container'

// ============================================
// CONSTANTS & TOKENS
// ============================================

export {
  COLORS,
  SPACING,
  TYPOGRAPHY,
  RADIUS,
  TRANSITIONS,
  SHADOWS,
  LAYOUT,
} from '@/constants/designSystem'

export {
  ColorTokens,
  SpacingTokens,
  TypographyTokens,
  RadiusTokens,
  TransitionTokens,
  ShadowTokens,
  LayoutTokens,
  StylePresets,
  AnimationDurations,
  ZIndex,
} from '@/constants/designTokens'

// ============================================
// CSS CLASSES
// ============================================

/**
 * Typography Classes (use in className)
 * .headline-xl, .headline-lg, .headline-md, .headline-sm
 * .body-lg, .body-md, .body-sm
 */

/**
 * Color Classes (use in className)
 * .text-cloud, .text-automation, .text-security
 * .border-cloud, .border-automation, .border-security
 * .bg-cloud-glow, .bg-automation-glow, .bg-security-glow
 */

/**
 * Animation Classes (use in className)
 * .animate-fade-in-up, .animate-fade-in-down
 * .animate-slide-in-left, .animate-slide-in-right
 * .animate-glow-pulse, .animate-glow-pulse-green, .animate-glow-pulse-violet
 * .animate-float
 */

/**
 * Effect Classes (use in className)
 * .glass (glass morphism)
 */

// ============================================
// USAGE EXAMPLES
// ============================================

/**
 * Example 1: Using Container Component
 * 
 * import { Container } from '@/design-system'
 * 
 * <Container size="lg" padding="lg">
 *   Content here
 * </Container>
 */

/**
 * Example 2: Using Design Tokens
 * 
 * import { ColorTokens, SpacingTokens } from '@/design-system'
 * 
 * <div style={{
 *   backgroundColor: ColorTokens.bg.secondary,
 *   padding: SpacingTokens.lg,
 * }}>
 *   Content
 * </div>
 */

/**
 * Example 3: Using Tailwind Classes
 * 
 * <div className="bg-dark-secondary text-cloud p-6 rounded-lg">
 *   <h2 className="headline-lg">Title</h2>
 *   <p className="body-md">Description</p>
 * </div>
 */

/**
 * Example 4: Using CSS Variables
 * 
 * <div style={{
 *   backgroundColor: 'var(--color-bg-secondary)',
 *   color: 'var(--color-text-primary)',
 *   padding: 'var(--spacing-lg)',
 * }}>
 *   Content
 * </div>
 */
