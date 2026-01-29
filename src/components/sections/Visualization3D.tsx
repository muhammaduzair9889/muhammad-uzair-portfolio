import { motion } from 'framer-motion'
import { Suspense } from 'react'
import { CubeVisualization } from '../common/CubeVisualization'
import { ParticleField } from '../common/ParticleField'

export const Visualization3D: React.FC = () => {
  return (
    <section className="relative py-20 px-6 bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Infrastructure Visualization
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-16 max-w-2xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Interactive 3D representations of distributed systems and cloud architecture.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-accent-cyan mb-4">Distributed Network</h3>
            <p className="text-gray-400 text-sm mb-4">Interconnected nodes representing microservices architecture</p>
            <Suspense fallback={<div className="w-full h-96 bg-dark-secondary/30 rounded-lg flex items-center justify-center text-gray-500">Loading...</div>}>
              <CubeVisualization />
            </Suspense>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-accent-orange mb-4">Cloud Infrastructure</h3>
            <p className="text-gray-400 text-sm mb-4">Multi-layer cloud deployment with orchestrated services</p>
            <Suspense fallback={<div className="w-full h-80 bg-dark-secondary/30 rounded-lg flex items-center justify-center text-gray-500">Loading...</div>}>
              <ParticleField />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
