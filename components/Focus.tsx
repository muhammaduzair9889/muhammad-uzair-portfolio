'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Card from './ui/Card'

const focusAreas = [
  'Advanced Kubernetes Patterns',
  'AWS DevOps Pro',
  'GitHub Actions + ArgoCD CI/CD',
  'Infrastructure as Code Best Practices',
  'Observability & Monitoring',
  'Cloud Security & Compliance',
]

export default function Focus() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
              Currently Focusing On
            </span>
          </h2>
          <p className="text-gray-900 dark:text-gray-400 max-w-2xl mx-auto">
            Areas I&apos;m actively learning and improving
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto w-full px-2 sm:px-4">
          <Card>
            <div className="space-y-3 sm:space-y-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium break-words">{area}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

