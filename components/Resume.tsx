'use client'

import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import Button from './ui/Button'
import Card from './ui/Card'

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/assets/resume.pdf'
    link.download = 'Muhammad_Uzair_Resume.pdf'
    link.click()
  }

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
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
              Resume
            </span>
          </h2>
          <p className="text-gray-900 dark:text-gray-400 max-w-2xl mx-auto">
            Download my latest resume to learn more about my experience and qualifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Card className="max-w-2xl w-full text-center p-6 sm:p-8 md:p-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-emerald-500 flex items-center justify-center shadow-2xl"
            >
              <FileText className="w-16 h-16 text-white" />
            </motion.div>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-4">
              Muhammad Uzair
            </h3>
            <p className="text-xl text-gray-900 dark:text-gray-400 mb-2">
              DevOps Engineer | Cloud & Automation
            </p>
            <p className="text-gray-900 dark:text-gray-500 mb-8">
              Professional portfolio and experience summary
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="gradient"
                size="lg"
                onClick={handleDownload}
                className="flex items-center gap-3 mx-auto"
              >
                <Download className="w-6 h-6" />
                Download Resume PDF
              </Button>
            </motion.div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

