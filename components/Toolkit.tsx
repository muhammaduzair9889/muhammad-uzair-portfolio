'use client'

import { motion } from 'framer-motion'
import { Box, Code, Terminal, GitBranch, Cloud, FileCode, Activity, BarChart3, FileCode2, Code2 } from 'lucide-react'
import Card from './ui/Card'

const tools = [
  { name: 'Docker', category: 'Containers', icon: Box, color: 'from-blue-500 to-cyan-500' },
  { name: 'Kubernetes', category: 'Orchestration', icon: Code, color: 'from-indigo-500 to-blue-500' },
  { name: 'Linux', category: 'OS', icon: Terminal, color: 'from-yellow-500 to-orange-500' },
  { name: 'GitHub Actions', category: 'CI/CD', icon: GitBranch, color: 'from-gray-700 to-gray-900' },
  { name: 'AWS', category: 'Cloud', icon: Cloud, color: 'from-orange-500 to-yellow-500' },
  { name: 'Terraform', category: 'IaC', icon: FileCode, color: 'from-purple-500 to-indigo-500' },
  { name: 'Prometheus', category: 'Monitoring', icon: Activity, color: 'from-red-500 to-orange-500' },
  { name: 'Grafana', category: 'Monitoring', icon: BarChart3, color: 'from-orange-500 to-red-500' },
  { name: 'Python', category: 'Programming', icon: Code2, color: 'from-blue-600 to-cyan-600' },
  { name: 'VS Code', category: 'IDE', icon: FileCode2, color: 'from-blue-500 to-indigo-500' },
]

export default function Toolkit() {
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
              Core Toolkit
            </span>
          </h2>
          <p className="text-gray-900 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build and deploy scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <Card className="text-center h-full">
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white shadow-xl`}>
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-gray-200 mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-900 dark:text-gray-400 font-medium">{tool.category}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
