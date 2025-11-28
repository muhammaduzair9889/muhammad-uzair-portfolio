'use client'

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@example.com' },
]

export default function Footer() {
  return (
    <footer className="glass-strong border-t border-white/20 dark:border-gray-700/30 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
              Muhammad Uzair
            </h3>
            <p className="text-gray-900 dark:text-gray-400 mt-2">DevOps Engineer | Cloud & Automation</p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 dark:border-gray-700/30 text-center text-gray-900 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Muhammad Uzair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

