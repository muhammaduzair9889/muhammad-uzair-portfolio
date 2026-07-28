import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, type ReactNode } from 'react'

interface NavLink {
  path: string
  label: string
  icon: ReactNode
}

const navLinks: NavLink[] = [
  {
    path: '/',
    label: 'Overview',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c3.5 3 3.5 15 0 20" />
      </svg>
    )
  },
  {
    path: '/profile',
    label: 'Profile',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 21a8 8 0 00-16 0" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  },
  {
    path: '/skills',
    label: 'Skills',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    )
  },
  {
    path: '/projects',
    label: 'Projects',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    )
  },
  {
    path: '/challenges',
    label: 'Challenges',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l3 6 6 .9-4.5 4.4 1 6.2-5.5-3-5.5 3 1-6.2L3 9.9 9 9z" />
      </svg>
    )
  },
  {
    path: '/tooling',
    label: 'Tooling',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 7l3 3-8 8H6v-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 3l6 6" />
      </svg>
    )
  },
  {
    path: '/certifications',
    label: 'Experiences',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 17l3-3 3 2 4-5" />
      </svg>
    )
  },
  {
    path: '/contact',
    label: 'Contact',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6" />
        <rect x="3" y="6" width="18" height="12" rx="2" />
      </svg>
    )
  }
]

export const Navigation: React.FC = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isScrolled = scrollY > 50

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-bg/90 backdrop-blur-md border-b border-cloud/20 shadow-[0_8px_30px_rgba(0,0,0,0.25)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="flex items-baseline gap-2"
              >
                <span className="text-headline-md font-bold text-cloud hover:text-automation transition-colors">
                  Muhammad Uzair
                </span>
                <span className="hidden sm:inline text-body-sm text-gray-400">Cloud &amp; DevOps Engineer</span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, idx) => (
                <motion.div key={idx} whileHover={{ y: -2 }}>
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 text-body-sm font-medium ${
                      location.pathname === link.path
                        ? 'bg-cloud bg-opacity-20 text-cloud border border-cloud border-opacity-50'
                        : 'text-gray-300 hover:text-cloud hover:bg-dark-secondary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg hover:bg-dark-secondary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6 text-cloud"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 lg:hidden pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-dark-bg bg-opacity-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Content */}
            <motion.div
              className="relative bg-dark-secondary border-b border-cloud border-opacity-20 shadow-2xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.3 }}
            >
              <div className="flex flex-col gap-2 p-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 font-medium ${
                        location.pathname === link.path
                          ? 'bg-cloud bg-opacity-20 text-cloud border border-cloud border-opacity-50'
                          : 'text-gray-300 hover:text-cloud hover:bg-dark-bg'
                      }`}
                    >
                      <span className="flex items-center justify-center">{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cloud via-automation to-security z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </>
  )
}
