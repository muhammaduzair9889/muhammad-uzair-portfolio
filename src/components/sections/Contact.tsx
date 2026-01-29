import { motion } from 'framer-motion'
import { CloudNetwork3D } from '@/components/background/CloudNetwork3D'

const CONTACT_EMAIL = 'muhammaduzair8695@gmail.com'

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-dark-bg relative overflow-hidden">
      <CloudNetwork3D opacity={0.5} />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-16 max-w-2xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Have a project in mind or want to discuss cloud infrastructure? I'd love to hear from you.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Contact info cards */}
          <motion.div
            whileHover={{ y: -5, boxShadow: "0 20px 25px rgba(56, 189, 248, 0.1)" }}
            className="p-6 rounded-lg border border-cloud/40 bg-dark-secondary/15 backdrop-blur-md text-center hover:border-cloud/70 transition-all duration-300"
          >
            <motion.div className="flex justify-center mb-3 text-cloud" whileHover={{ scale: 1.2 }}>
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6" />
                <rect x="3" y="6" width="18" height="12" rx="2" />
              </svg>
            </motion.div>
            <h3 className="font-semibold text-cloud mb-2">Email</h3>
            <a
              className="text-gray-400 text-sm hover:text-cloud transition-colors"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, boxShadow: "0 20px 25px rgba(251, 146, 60, 0.1)" }}
            className="p-6 rounded-lg border border-orange/40 bg-dark-secondary/15 backdrop-blur-md text-center hover:border-orange/70 transition-all duration-300"
          >
            <motion.div className="flex justify-center mb-3 text-orange" whileHover={{ scale: 1.2 }}>
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 11v4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11v4" />
              </svg>
            </motion.div>
            <h3 className="font-semibold text-orange mb-2">LinkedIn</h3>
            <a
              className="text-gray-400 text-sm hover:text-orange transition-colors"
              href="https://www.linkedin.com/in/muhammad-uzair-b806a4394/"
              target="_blank"
              rel="noreferrer"
            >
              muhammad-uzair-b806a4394
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, boxShadow: "0 20px 25px rgba(59, 130, 246, 0.1)" }}
            className="p-6 rounded-lg border border-blue-400/40 bg-dark-secondary/15 backdrop-blur-md text-center hover:border-blue-400/70 transition-all duration-300"
          >
            <motion.div className="flex justify-center mb-3 text-blue-400" whileHover={{ scale: 1.2 }}>
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 9l4 3-4 3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6l4 12" />
              </svg>
            </motion.div>
            <h3 className="font-semibold text-blue-400 mb-2">GitHub</h3>
            <a
              className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
              href="https://github.com/muhammaduzair9889"
              target="_blank"
              rel="noreferrer"
            >
              muhammaduzair9889
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
