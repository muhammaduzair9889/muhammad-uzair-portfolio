import { motion } from 'framer-motion'

interface AnimatedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary'
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
}) => {
  const variants = {
    primary: 'px-8 py-3 rounded-lg bg-accent-cyan text-dark-bg font-semibold',
    secondary: 'px-8 py-3 rounded-lg border border-accent-cyan text-accent-cyan font-semibold',
  }

  return (
    <motion.button
      className={`${variants[variant]} ${className} relative overflow-hidden`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
