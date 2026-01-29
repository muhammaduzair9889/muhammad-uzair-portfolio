import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface HeaderProps {
  children?: ReactNode
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-dark-tertiary/30 backdrop-blur-md bg-dark-bg/50"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-cloud hover:text-automation transition-colors cursor-pointer"
        >
          DevOps
        </motion.div>
        
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/" className="text-gray-400 hover:text-cloud transition-colors duration-300">Home</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/skills" className="text-gray-400 hover:text-automation transition-colors duration-300">Skills</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/projects" className="text-gray-400 hover:text-security transition-colors duration-300">Projects</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="/contact" className="text-gray-400 hover:text-orange transition-colors duration-300">Contact</a>
          </motion.li>
        </ul>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 rounded-lg bg-cloud text-dark-bg font-semibold hover:shadow-glow transition-all"
        >
          Get in Touch
        </motion.a>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-cloud hover:text-automation transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </nav>
    </motion.header>
  )
}
