import { Container } from '@/components/common/Container'
import { motion } from 'framer-motion'
import { CloudNetwork3D } from '@/components/background/CloudNetwork3D'

export const SkillsAndTechnologies: React.FC = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      color: 'cloud',
      skills: ['AWS', 'ECS', 'EKS', 'CloudWatch', 'IAM', 'VPC']
    },
    {
      title: 'Container & Orchestration',
      color: 'automation',
      skills: ['Docker', 'Kubernetes', 'Fargate', 'ECR', 'Helm']
    },
    {
      title: 'Infrastructure as Code',
      color: 'security',
      skills: ['Terraform', 'CloudFormation', 'Bash Scripting']
    },
    {
      title: 'CI/CD & Automation',
      color: 'automation',
      skills: ['GitHub Actions', 'Git & GitHub', 'Pipeline Automation']
    },
    {
      title: 'Programming Languages',
      color: 'cloud',
      skills: ['Python', 'Linux', 'Bash', 'SQL']
    },
    {
      title: 'Web & Database',
      color: 'security',
      skills: ['Next.js', 'MongoDB', 'Tailwind CSS']
    }
  ]

  return (
    <div>
      <Container size="lg" padding="lg">
        <section className="min-h-screen pt-32 relative overflow-hidden">
          <CloudNetwork3D opacity={0.5} />

          <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cloud">
            Skills & Technologies
          </h1>
          
          <div className="mb-12">
            <p className="text-body-lg text-gray-300 mb-8">
              Technical expertise across cloud platforms, containerization, infrastructure automation, and modern web development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, idx) => {
                const colorMap = {
                  cloud: 'border-cloud text-cloud',
                  automation: 'border-automation text-automation',
                  security: 'border-security text-security'
                }
                const borderColor = colorMap[category.color as keyof typeof colorMap]

                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className={`p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border-2 border-opacity-40 hover:border-opacity-70 hover:bg-dark-secondary/25 transition-all duration-300 group ${borderColor}`}
                  >
                    <h3 className={`text-xl font-semibold mb-4 group-hover:text-lg transition-all ${borderColor.split(' ')[1]}`}>
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIdx) => (
                        <li key={skillIdx} className="flex items-center gap-3 group/item">
                          <span className={`w-2 h-2 rounded-full group-hover/item:scale-150 transition-transform ${borderColor.split(' ')[1]}`}></span>
                          <span className="text-body-md text-gray-300 group-hover/item:text-gray-100 transition-colors">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-automation">
              Development Philosophy
            </h2>
            <div className="space-y-6">
              <motion.div whileHover={{ y: -3 }} className="p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-cloud/40 hover:border-cloud/70 hover:bg-dark-secondary/25 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-cloud">Proficient</h3>
                  <span className="text-body-sm text-gray-400 px-3 py-1 rounded-full bg-cloud/20">Expert level</span>
                </div>
                <p className="text-body-md text-gray-300">
                  AWS (EKS, VPC, EC2, IAM), Docker, Kubernetes, Terraform, GitHub Actions, Python, Linux
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} className="p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-automation/40 hover:border-automation/70 hover:bg-dark-secondary/25 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-automation">Comfortable</h3>
                  <span className="text-body-sm text-gray-400 px-3 py-1 rounded-full bg-automation/20">Working knowledge</span>
                </div>
                <p className="text-body-md text-gray-300">
                  ECS, Fargate, CloudFormation, SQL, Next.js, MongoDB, Cloud Security
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} className="p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-security/40 hover:border-security/70 hover:bg-dark-secondary/25 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-security">Learning</h3>
                  <span className="text-body-sm text-gray-400 px-3 py-1 rounded-full bg-security/20">Active development</span>
                </div>
                <p className="text-body-md text-gray-300">
                  Advanced Kubernetes patterns, Service mesh, Advanced AWS services
                </p>
              </motion.div>
            </div>
          </div>

          <div>
            <div className="p-8 bg-gradient-to-r from-dark-secondary/20 to-dark-bg/30 rounded-lg border border-automation/40 hover:border-automation/70 backdrop-blur-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-automation mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 group">
                  <span className="text-cloud mt-1 group-hover:translate-x-1 transition-transform">✓</span>
                  <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">99% uptime on production EKS clusters</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-cloud mt-1 group-hover:translate-x-1 transition-transform">✓</span>
                  <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">70% reduction in manual deployment time with CI/CD automation</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-cloud mt-1 group-hover:translate-x-1 transition-transform">✓</span>
                  <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Automated multi-VPC architecture with Terraform</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-cloud mt-1 group-hover:translate-x-1 transition-transform">✓</span>
                  <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">100% successful deployments across all environments</span>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
