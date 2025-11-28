'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Code, Package, TestTube, Rocket, Server, Settings, BarChart } from 'lucide-react'

const workflowSteps = [
  { name: 'Plan', icon: Settings, color: 'from-blue-500 to-blue-600', description: 'Strategic planning' },
  { name: 'Code', icon: Code, color: 'from-indigo-500 to-indigo-600', description: 'Development' },
  { name: 'Build', icon: Package, color: 'from-purple-500 to-purple-600', description: 'Compilation' },
  { name: 'Test', icon: TestTube, color: 'from-pink-500 to-pink-600', description: 'Quality assurance' },
  { name: 'Release', icon: Rocket, color: 'from-orange-500 to-orange-600', description: 'Version control' },
  { name: 'Deploy', icon: Server, color: 'from-emerald-500 to-emerald-600', description: 'Infrastructure' },
  { name: 'Operate', icon: Settings, color: 'from-teal-500 to-teal-600', description: 'Management' },
  { name: 'Monitor', icon: BarChart, color: 'from-cyan-500 to-cyan-600', description: 'Observability' },
]

export default function Workflow() {
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
              My DevOps Workflow
            </span>
          </h2>
          <p className="text-gray-900 dark:text-gray-400 max-w-2xl mx-auto">
            A modern, scalable approach to software delivery
          </p>
        </motion.div>

        {/* Desktop view - Horizontal */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.name} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -8 }}
                  className="glass rounded-2xl p-8 text-center min-w-[160px] md:min-w-[180px]"
                >
                  <div className={`w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}>
                    <Icon className="w-12 h-12 md:w-14 md:h-14 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-gray-200 mb-2">{step.name}</h3>
                  <p className="text-sm text-gray-900 dark:text-gray-400">{step.description}</p>
                </motion.div>

                {index < workflowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="mx-2"
                  >
                    <ArrowRight className="w-8 h-8 text-gray-400 dark:text-gray-600" />
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile view - Vertical */}
        <div className="md:hidden flex flex-col items-center gap-4">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.name} className="flex flex-col items-center w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass rounded-xl p-6 text-center w-full max-w-[280px]"
                >
                  <div className={`w-20 h-20 mx-auto mb-3 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-base text-gray-900 dark:text-gray-200 mb-1">{step.name}</h3>
                  <p className="text-xs text-gray-900 dark:text-gray-400">{step.description}</p>
                </motion.div>
                {index < workflowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="my-2"
                  >
                    <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-600" />
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
