'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Download } from 'lucide-react'
import Button from './ui/Button'
import SplashScreen from './SplashScreen'
import DevOpsScene from './DevOpsScene'

export default function Hero() {
  const [showSplash, setShowSplash] = useState(true)

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />
  }
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      })
    }
  }

  const handleHireMe = () => {
    scrollToSection('#contact')
  }

  const handleLiveProjects = () => {
    scrollToSection('#projects')
    // Activate live filter
    const event = new CustomEvent('filterProjects', { detail: 'live' })
    window.dispatchEvent(event)
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/assets/CV.pdf'
    link.download = 'Muhammad_Uzair_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-x-hidden overflow-y-auto bg-black w-full max-w-full">
      <div className="container mx-auto max-w-7xl w-full overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight break-words"
            >
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                Muhammad Uzair
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-6 lg:mb-8 break-words"
            >
              DevOps Engineer | Cloud & Automation
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xs xs:text-sm sm:text-base text-gray-400 mb-4 md:mb-6 lg:mb-8 max-w-lg mx-auto md:mx-0 break-words"
            >
              Building scalable cloud infrastructure, automating deployments, and optimizing
              DevOps workflows with modern tools and best practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col gap-2 sm:gap-3 justify-center md:justify-start"
            >
              <Button variant="gradient" size="lg" onClick={handleHireMe} className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                Get In Touch
              </Button>
              <Button
                variant="gradient"
                size="lg"
                onClick={handleLiveProjects}
                className="flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                Live Projects
              </Button>
              <Button
                variant="gradient"
                size="lg"
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center w-full mt-6 md:mt-0"
            style={{ touchAction: 'pan-y' }}
          >
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl" style={{ touchAction: 'none' }}>
              <DevOpsScene />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
