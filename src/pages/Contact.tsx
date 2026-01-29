import { Container } from '@/components/common/Container'
import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import { CloudNetwork3D } from '@/components/background/CloudNetwork3D'

type ContactMethod = {
  title: string
  value: string
  icon: ReactNode
  color: 'cloud' | 'automation' | 'security'
  action: string
}

export const Contact: React.FC = () => {
  const contactMethods: ContactMethod[] = [
    {
      title: 'Email',
      value: 'muhammaduzair8695@gmail.com',
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6" />
          <rect x="3" y="6" width="18" height="12" rx="2" />
        </svg>
      ),
      color: 'cloud',
      action: 'https://mail.google.com/mail/?view=cm&fs=1&to=muhammaduzair8695@gmail.com'
    },
    {
      title: 'GitHub',
      value: 'github.com/muhammaduzair9889',
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 9l4 3-4 3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6l4 12" />
        </svg>
      ),
      color: 'automation',
      action: 'https://github.com/muhammaduzair9889'
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/muhammad-uzair-b806a4394',
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11v4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11v4" />
        </svg>
      ),
      color: 'security',
      action: 'https://www.linkedin.com/in/muhammad-uzair-b806a4394/'
    }
  ]

  return (
    <div>
      <Container size="lg" padding="lg">
        <section className="min-h-screen pt-32 relative overflow-hidden">
          <CloudNetwork3D opacity={0.5} />

          <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cloud">
            Get in Touch
          </h1>
          
          <div className="mb-12 max-w-2xl">
            <p className="text-body-lg text-gray-300 mb-6">
              Reach out to connect about AWS infrastructure, DevOps automation, and cloud-native deployments.
            </p>
            <p className="text-body-lg text-gray-300">
              Contact me through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, idx) => {
              const colorMap = {
                cloud: 'border-cloud/40 hover:border-cloud/70 bg-dark-secondary/15 hover:bg-dark-secondary/25',
                automation: 'border-automation/40 hover:border-automation/70 bg-dark-secondary/15 hover:bg-dark-secondary/25',
                security: 'border-security/40 hover:border-security/70 bg-dark-secondary/15 hover:bg-dark-secondary/25'
              }
              const textColorMap = {
                cloud: 'text-cloud',
                automation: 'text-automation',
                security: 'text-security'
              }

              return (
                <motion.a
                  key={idx}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -5 }}
                  aria-label={`Open ${method.title}`}
                  className={`group p-8 rounded-lg border-2 backdrop-blur-md transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cloud/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg ${colorMap[method.color as keyof typeof colorMap]}`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`${textColorMap[method.color as keyof typeof textColorMap]} flex items-center justify-center`}>
                      {method.icon}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className={`text-xl font-semibold ${textColorMap[method.color as keyof typeof textColorMap]}`}>
                          {method.title}
                        </h3>
                        <span className={`text-xs font-semibold uppercase tracking-wider ${textColorMap[method.color as keyof typeof textColorMap]} opacity-70 group-hover:opacity-100 transition-opacity`}>
                          Open
                        </span>
                      </div>
                      <p className="text-body-md text-gray-300 mt-2">{method.value}</p>
                      <div className={`mt-3 inline-flex items-center gap-2 text-sm ${textColorMap[method.color as keyof typeof textColorMap]} opacity-80 group-hover:opacity-100 transition-opacity`}>
                        <span>Click to open</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-automation/40 hover:border-automation/70 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-automation mb-3">Current Role</h3>
              <p className="text-body-md text-gray-300">
                Cloud & DevOps Engineer Intern at Qasim Ali Shah Foundation (2024–2025).
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-security/40 hover:border-security/70 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-security mb-3">Location</h3>
              <p className="text-body-md text-gray-300">
                Lahore, Punjab, Pakistan.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-orange/40 hover:border-orange/70 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-orange mb-3">Focus Areas</h3>
              <p className="text-body-md text-gray-300">
                AWS, Docker, Kubernetes, Terraform, GitHub Actions, Linux, Python, SQL.
              </p>
            </motion.div>
          </div>

          <div className="mt-12">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 bg-gradient-to-r from-dark-secondary/20 to-dark-bg/30 rounded-lg border border-cloud/40 hover:border-cloud/70 backdrop-blur-md transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-cloud mb-3">Let's Connect</h3>
              <p className="text-body-lg text-gray-300 mb-4">
                For inquiries related to cloud infrastructure, container orchestration, or CI/CD automation, feel free to reach out.
              </p>
              <p className="text-body-md text-gray-400">
                Email or connect via GitHub and LinkedIn using the links above.
              </p>
            </motion.div>
          </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
