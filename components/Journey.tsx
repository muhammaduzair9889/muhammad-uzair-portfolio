'use client'

import { motion } from 'framer-motion'
import Card from './ui/Card'

const journeyItems = [
  {
    id: 1,
    title: 'Started DevOps Journey',
    description: 'Began learning containerization with Docker and basic CI/CD concepts. Explored Linux system administration and cloud fundamentals.',
    tags: ['Docker', 'Linux', 'CI/CD Basics'],
    year: '2020',
    side: 'right',
  },
  {
    id: 2,
    title: 'Kubernetes & Cloud Platforms',
    description: 'Deep dive into Kubernetes orchestration and cloud platforms. Started working with AWS services and infrastructure automation.',
    tags: ['Kubernetes', 'AWS', 'Terraform'],
    year: '2021',
    side: 'left',
  },
  {
    id: 3,
    title: 'Advanced DevOps Practices',
    description: 'Mastered infrastructure as code, advanced CI/CD pipelines, and monitoring solutions. Implemented production-grade DevOps workflows.',
    tags: ['GitHub Actions', 'Prometheus', 'Grafana'],
    year: '2022',
    side: 'right',
  },
  {
    id: 4,
    title: 'Cloud Architecture & Automation',
    description: 'Designing scalable cloud architectures and automating complex deployment pipelines. Contributing to open-source projects.',
    tags: ['Cloud Architecture', 'Automation', 'Open Source'],
    year: '2023',
    side: 'left',
  },
  {
    id: 5,
    title: 'DevOps Excellence',
    description: 'Leading DevOps initiatives, mentoring teams, and continuously improving infrastructure. Focus on security and best practices.',
    tags: ['Leadership', 'Security', 'Best Practices'],
    year: '2024',
    side: 'right',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
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
              Learning & Development Journey
            </span>
          </h2>
          <p className="text-gray-900 dark:text-gray-400 max-w-2xl mx-auto">
            My continuous growth and evolution in DevOps
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Desktop center, Mobile left */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500"></div>
          <div className="md:hidden absolute left-8 w-1 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500"></div>

          {/* Journey Items */}
          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative flex items-start md:items-center"
              >
                {/* Mobile: All cards on left */}
                <div className="md:hidden w-full pl-20">
                  <Card className="relative bg-white/80 dark:bg-gray-800/80">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.year}
                    </div>
                  </Card>
                </div>

                {/* Desktop: Alternating sides */}
                <div className={`hidden md:flex items-center w-full ${
                  item.side === 'left' ? 'flex-row-reverse' : 'flex-row'
                }`}>
                  <div className={`w-5/12 ${item.side === 'left' ? 'pr-8' : 'pl-8'}`}>
                    <Card className="relative bg-white/80 dark:bg-gray-800/80">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
                        {item.year}
                      </div>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>

                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-6 top-0">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 border-2 border-white dark:border-gray-900 shadow-lg z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
