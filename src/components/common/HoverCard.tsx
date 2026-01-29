import { motion } from 'framer-motion'
import type { FC, ReactNode } from 'react'

interface HoverCardProps {
  children: ReactNode
  className?: string
}

export const HoverCard: FC<HoverCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 40px rgba(0, 217, 255, 0.2)',
      }}
      transition={{ 
        duration: 0.3,
        type: 'spring',
        stiffness: 300,
      }}
    >
      {children}
    </motion.div>
  )
}
