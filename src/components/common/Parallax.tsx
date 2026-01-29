import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ParallaxProps {
  children: React.ReactNode
  offset?: number
}

export const Parallax: React.FC<ParallaxProps> = ({ children, offset = 0.5 }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      style={{
        y: scrollY * offset,
      }}
    >
      {children}
    </motion.div>
  )
}
