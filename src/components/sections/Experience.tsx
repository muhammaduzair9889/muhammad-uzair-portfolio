import { motion } from 'framer-motion'

interface ExperienceItem {
  id: number
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'DevOps Engineer',
    company: 'Tech Solutions Ltd.',
    period: 'Jan 2024 - Present',
    description: 'Working on cloud infrastructure and automation for modern web applications.',
    achievements: [
      'Implemented CI/CD pipelines using GitHub Actions reducing deployment time by 40%',
      'Managed and monitored cloud resources on AWS ensuring 99.9% uptime',
      'Automated infrastructure provisioning using Terraform and Docker',
    ],
  },
  {
    id: 2,
    title: 'DevOps Intern',
    company: 'CloudTech Innovations',
    period: 'Jun 2023 - Dec 2023',
    description: 'Learned and contributed to DevOps practices in a fast-paced startup environment.',
    achievements: [
      'Assisted in migrating applications to containerized environments using Docker',
      'Created monitoring dashboards with Grafana and Prometheus',
      'Contributed to infrastructure as code documentation and best practices',
    ],
  },
]

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-16 max-w-2xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          A timeline of my career journey in cloud infrastructure and DevOps engineering.
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-accent-cyan transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className={`ml-20 md:w-1/2 md:ml-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-dark-secondary border-4 border-accent-cyan transform -translate-x-1/2 md:translate-x-0 md:-translate-x-1/2 top-4"></div>

                {/* Content */}
                <div className="p-6 rounded-lg border border-dark-tertiary/50 bg-dark-secondary/50 hover:border-accent-orange/50 transition-colors">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-1">{exp.title}</h3>
                  <p className="text-accent-orange font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <ul className="space-y-2 text-sm text-gray-400">
                    {exp.achievements.map((achievement, aIdx) => (
                      <li key={aIdx} className="flex items-start">
                        <span className="text-accent-cyan mr-2">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
