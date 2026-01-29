import type { FC, ReactNode } from 'react'

export interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'
}

/**
 * Reusable Container Component
 * Provides consistent max-width and padding based on design system
 * 
 * Usage:
 * <Container size="lg" padding="lg">
 *   Content here
 * </Container>
 */
export const Container: FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
  padding = 'lg',
}) => {
  const sizeClasses: Record<NonNullable<ContainerProps['size']>, string> = {
    sm: 'max-w-2xl',      // 672px
    md: 'max-w-4xl',      // 896px
    lg: 'max-w-6xl',      // 1152px
    xl: 'max-w-7xl',      // 1280px
    full: 'w-full',
  }

  const paddingClasses: Record<NonNullable<ContainerProps['padding']>, string> = {
    xs: 'px-2 md:px-4',
    sm: 'px-4 md:px-6',
    md: 'px-6 md:px-8',
    lg: 'px-6 md:px-10',
    xl: 'px-8 md:px-12',
    none: '',
  }

  const resolvedSize = (size ?? 'lg') as NonNullable<ContainerProps['size']>
  const resolvedPadding = (padding ?? 'lg') as NonNullable<ContainerProps['padding']>

  return (
    <div
      className={`mx-auto w-full ${sizeClasses[resolvedSize]} ${paddingClasses[resolvedPadding]} ${className}`}
    >
      {children}
    </div>
  )
}
