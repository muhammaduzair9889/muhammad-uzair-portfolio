'use client'

import { HTMLAttributes, forwardRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glass?: boolean
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass = true, hover = true, children, ...props }, ref) => {
    const [isTouched, setIsTouched] = useState(false)

    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-xl p-6',
          glass && 'glass border border-white/20 dark:border-gray-700/30',
          hover && 'cursor-pointer',
          className
        )}
        whileHover={hover ? { y: -4, scale: 1.02 } : {}}
        animate={isTouched && hover ? { y: -4, scale: 1.02 } : {}}
        onTouchStart={() => hover && setIsTouched(true)}
        onTouchEnd={() => setTimeout(() => setIsTouched(false), 200)}
        transition={{ duration: 0.2 }}
        {...(props as any)}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export default Card
