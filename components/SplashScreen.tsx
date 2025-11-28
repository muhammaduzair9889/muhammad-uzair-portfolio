'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [showName, setShowName] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [titleText, setTitleText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullTitle = 'DevOps Engineer | Cloud & Automation'

  useEffect(() => {
    // Prevent zoom on touch
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }

    document.addEventListener('touchstart', preventZoom, { passive: false })
    document.addEventListener('touchmove', preventZoom, { passive: false })
    document.addEventListener('gesturestart', (e) => e.preventDefault())

    // Show name first
    setShowName(true)
    
    // After 1.5 seconds, show title
    const titleTimer = setTimeout(() => {
      setShowTitle(true)
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex < fullTitle.length) {
          setTitleText(fullTitle.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          setTimeout(() => {
            setShowCursor(false)
            setTimeout(onComplete, 500)
          }, 1000)
        }
      }, 50)

      return () => clearInterval(typingInterval)
    }, 1500)

    return () => {
      clearTimeout(titleTimer)
      document.removeEventListener('touchstart', preventZoom)
      document.removeEventListener('touchmove', preventZoom)
    }
  }, [fullTitle, onComplete])

  useEffect(() => {
    if (showTitle) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 530)
      return () => clearInterval(cursorInterval)
    }
  }, [showTitle])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        style={{ touchAction: 'none', userSelect: 'none' }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center w-full max-w-full">
            <AnimatePresence>
              {showName && (
                <motion.h1
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 break-words leading-tight mx-auto px-4"
                  style={{ maxWidth: '95vw' }}
                >
                  Muhammad Uzair
                </motion.h1>
              )}
            </AnimatePresence>

            {showTitle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 break-words leading-tight mx-auto mt-2 sm:mt-3 px-4"
                style={{ maxWidth: '95vw' }}
              >
                {titleText}
                {showCursor && <span className="animate-pulse text-emerald-400">|</span>}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

