import { Container } from '@/components/common/Container'
import { motion } from 'framer-motion'
import { CloudNetwork3D } from '@/components/background/CloudNetwork3D'

export const CertificationsAndMilestones: React.FC = () => {
  const certifications = [
    {
      title: 'BS Computer Science',
      issuer: 'National University of Modern Languages (NUML)',
      date: '2022 - 2026',
      status: 'In Progress',
      color: 'cloud'
    }
  ]

  const milestones = [
    {
      year: '2024 - 2025',
      quarter: 'Internship',
      title: 'Cloud & DevOps Engineer Intern',
      organization: 'Qasim Ali Shah Foundation',
      description: 'Focused on AWS infrastructure, containerization, and CI/CD automation.',
      achievements: [
        'AWS EKS Cloud Infrastructure Automation (99% uptime, 70% deployment time reduction)',
        'Cloud-Native Containerized Deployment using ECS, Fargate, Docker, and Kubernetes',
        'AWS Multi-VPC Cloud Architecture with secure networking and monitoring'
      ],
      color: 'automation'
    },
    {
      year: '2022 - 2026',
      quarter: 'Education',
      title: 'BS Computer Science (In Progress)',
      organization: 'National University of Modern Languages (NUML)',
      description: 'Undergraduate program in Computer Science.',
      achievements: [
        'BS Computer Science, NUML Lahore (2022–2026)'
      ],
      color: 'cloud'
    }
  ]

  const focusAreas = [
    'AWS (ECS, EKS, VPC, IAM, CloudWatch)',
    'Docker & Kubernetes',
    'Terraform & CloudFormation',
    'GitHub Actions & CI/CD',
    'Linux & Bash',
    'Python & SQL',
    'Cloud Security & Networking',
    'Next.js, MongoDB, Tailwind CSS'
  ]

  const colorClasses: Record<string, { text: string; bg: string; border: string }> = {
    cloud: { text: 'text-cloud', bg: 'bg-cloud', border: 'border-cloud' },
    automation: { text: 'text-automation', bg: 'bg-automation', border: 'border-automation' },
    security: { text: 'text-security', bg: 'bg-security', border: 'border-security' },
    orange: { text: 'text-orange', bg: 'bg-orange', border: 'border-orange' }
  }

  return (
    <div>
      <Container size="lg" padding="lg">
        <section className="min-h-screen pt-32 relative overflow-hidden">
          <CloudNetwork3D opacity={0.5} />

          <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cloud">
            Certifications & Milestones
          </h1>

          <div className="mb-12">
            <p className="text-body-lg text-gray-300">
              Educational background combined with hands-on project experience in cloud infrastructure, 
              DevOps, and cloud-native technologies.
            </p>
          </div>

          {/* Certifications Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-automation">
              Education
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}

                  whileHover={{ y: -3 }}
                  className={`p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border-2 border-opacity-40 hover:border-opacity-70 hover:bg-dark-secondary/25 transition-all duration-300 ${colorClasses[cert.color].border}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold ${colorClasses[cert.color].text}">
                        {cert.title}
                      </h3>
                      <p className="text-body-md text-gray-400 mt-1">{cert.issuer}</p>
                    </div>
                    <span className={`text-body-sm px-3 py-1 rounded-full flex-shrink-0 ${colorClasses[cert.color].bg} bg-opacity-20 ${colorClasses[cert.color].text}`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-body-sm text-gray-500">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Milestones Timeline Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-security">
              Professional Milestones
            </h2>
            
            <div className="space-y-6">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="relative pl-8 border-l-2 border-automation/40 last:pb-0 pb-8"
                >
                  {/* Timeline dot */}
                  <motion.div whileHover={{ scale: 1.3 }} className={`absolute left-[-8px] top-1 w-4 h-4 rounded-full ${colorClasses[milestone.color].bg} border-2 border-dark-bg transition-all`}></motion.div>

                  <motion.div whileHover={{ y: -3 }} className="p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-dark-tertiary/40 hover:border-dark-tertiary/70 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className={`text-headline-sm ${colorClasses[milestone.color].text}`}>
                            {milestone.year}
                          </span>
                          <span className="text-body-sm text-gray-500 px-2 py-1 rounded-full bg-dark-secondary/40">{milestone.quarter}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-100 mb-1">{milestone.title}</h3>
                        <p className="text-body-md text-gray-400 mb-3">{milestone.organization}</p>
                      </div>
                    </div>

                    <p className="text-body-md text-gray-300 mb-4">{milestone.description}</p>

                    <div className="mb-0">
                      <p className="text-body-sm text-gray-400 mb-3 font-semibold">Key Achievements:</p>
                      <ul className="space-y-2">
                        {milestone.achievements.map((achievement, aidx) => (
                          <li key={aidx} className="text-body-sm text-gray-300 flex items-start gap-2 group">
                            <span className={`${colorClasses[milestone.color].text} mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform`}>▸</span>
                            <span className="group-hover:text-gray-100 transition-colors">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Areas */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cloud">
              Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {focusAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, x: 5 }}
                  className="p-4 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-dark-tertiary/40 hover:border-cloud/60 transition-all duration-300 group cursor-pointer"
                >
                  <p className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">{area}</p>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ y: -5 }} className="p-8 bg-gradient-to-r from-dark-secondary/20 to-dark-bg/30 rounded-lg border border-cloud/40 hover:border-cloud/70 backdrop-blur-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-cloud mb-4">Milestone Highlights</h3>
              <p className="text-body-md text-gray-300 mb-6">
                Focused on cloud infrastructure automation, container orchestration, and secure AWS architecture 
                while completing a BS in Computer Science.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-dark-secondary/20 border border-automation/30 hover:border-automation/70 transition-all">
                  <p className="text-headline-md text-automation">15+</p>
                  <p className="text-body-sm text-gray-400">Technical Skills</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-dark-secondary/20 border border-security/30 hover:border-security/70 transition-all">
                  <p className="text-headline-md text-security">3</p>
                  <p className="text-body-sm text-gray-400">Major Projects</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-dark-secondary/20 border border-cloud/30 hover:border-cloud/70 transition-all">
                  <p className="text-headline-md text-cloud">99%</p>
                  <p className="text-body-sm text-gray-400">Uptime Target</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-dark-secondary/20 border border-orange/30 hover:border-orange/70 transition-all">
                  <p className="text-headline-md text-orange">70%</p>
                  <p className="text-body-sm text-gray-400">Automation Gain</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
