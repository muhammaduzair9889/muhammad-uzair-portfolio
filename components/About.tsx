'use client'

import { motion } from 'framer-motion'
import Card from './ui/Card'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
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
              About Me
            </span>
          </h2>
          <p className="text-gray-900 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate DevOps Engineer dedicated to building robust, scalable cloud infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start w-full"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden glass border-4 border-white/30 dark:border-gray-700/30 mb-6 md:mb-8">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 via-indigo-500 to-emerald-500 flex items-center justify-center text-white text-6xl md:text-8xl font-bold">
                MU
              </div>
            </div>
          </motion.div>

          {/* Right Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <p className="text-gray-900 dark:text-gray-300 leading-relaxed mb-4">
                I&apos;m a DevOps Engineer with a passion for cloud infrastructure, automation, and
                continuous improvement. My expertise lies in designing and implementing scalable
                solutions using modern DevOps practices.
              </p>
              <p className="text-gray-900 dark:text-gray-300 leading-relaxed mb-4">
                I specialize in containerization with Docker and Kubernetes, infrastructure as code
                with Terraform, CI/CD pipelines with GitHub Actions, and cloud platforms like AWS.
                My goal is to help teams deliver software faster, more reliably, and at scale.
              </p>
              <p className="text-gray-900 dark:text-gray-300 leading-relaxed">
                When I&apos;m not automating deployments or optimizing infrastructure, I&apos;m exploring new
                technologies, contributing to open-source projects, and sharing knowledge with the
                DevOps community.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
