import { motion } from 'framer-motion'

interface SkillCategory {
  category: string
  level: 'Learning' | 'Comfortable' | 'Proficient'
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Cloud Platforms',
    level: 'Comfortable',
    skills: ['AWS (EC2, S3, Lambda)', 'Azure Basics', 'Cloud Networking'],
  },
  {
    category: 'Container & Orchestration',
    level: 'Comfortable',
    skills: ['Docker', 'Docker Compose', 'Kubernetes Basics'],
  },
  {
    category: 'Infrastructure as Code',
    level: 'Comfortable',
    skills: ['Terraform', 'Ansible', 'CloudFormation'],
  },
  {
    category: 'CI/CD & Version Control',
    level: 'Proficient',
    skills: ['Git', 'GitHub Actions', 'GitLab CI', 'Jenkins'],
  },
  {
    category: 'Monitoring & Logging',
    level: 'Comfortable',
    skills: ['Prometheus', 'Grafana', 'CloudWatch', 'ELK Basics'],
  },
  {
    category: 'Scripting & Programming',
    level: 'Comfortable',
    skills: ['Python', 'Bash', 'YAML', 'Linux'],
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Proficient':
      return {
        badge: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30',
        accent: 'text-accent-cyan',
        glow: 'shadow-glow'
      }
    case 'Comfortable':
      return {
        badge: 'bg-accent-orange/10 text-accent-orange border-accent-orange/30',
        accent: 'text-accent-orange',
        glow: 'shadow-glow-orange'
      }
    case 'Learning':
      return {
        badge: 'bg-accent-blue/10 text-accent-blue border-accent-blue/30',
        accent: 'text-accent-blue',
        glow: ''
      }
    default:
      return {
        badge: 'bg-gray-400/10 text-gray-400 border-gray-400/30',
        accent: 'text-gray-400',
        glow: ''
      }
  }
}

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 md:px-6 bg-dark-secondary/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base md:text-lg max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Technologies and tools I've worked with and continue to learn.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, idx) => {
            const colors = getLevelColor(category.level)
            return (
              <div
                key={idx}
                className={`group relative p-6 rounded-xl border border-dark-tertiary/50 bg-gradient-to-br from-dark-bg/80 to-dark-secondary/60 backdrop-blur-sm hover:border-accent-cyan/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${colors.glow}`}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-cyan/0 to-accent-orange/0 group-hover:from-accent-cyan/5 group-hover:to-accent-orange/5 transition-all duration-300 pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with category and level */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-5">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {category.category}
                    </h3>
                    <span className={`px-3 py-1.5 text-xs font-semibold rounded-lg border whitespace-nowrap w-fit ${colors.badge}`}>
                      {category.level}
                    </span>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-2 text-xs md:text-sm rounded-lg bg-dark-tertiary/60 text-gray-300 border border-dark-tertiary/40 hover:border-accent-cyan/60 hover:text-accent-cyan hover:bg-dark-tertiary/80 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Legend - Improved Design */}
        <div className="mt-16 p-6 rounded-xl border border-dark-tertiary/30 bg-dark-bg/40 backdrop-blur-sm">
          <h4 className="text-sm font-semibold text-gray-400 mb-4 text-center md:text-left">Proficiency Levels:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent-cyan/5 border border-accent-cyan/20">
              <div className="w-2 h-2 rounded-full bg-accent-cyan shadow-glow"></div>
              <div>
                <span className="text-accent-cyan font-semibold text-sm block">Proficient</span>
                <span className="text-gray-400 text-xs">Can work independently</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent-orange/5 border border-accent-orange/20">
              <div className="w-2 h-2 rounded-full bg-accent-orange shadow-glow-orange"></div>
              <div>
                <span className="text-accent-orange font-semibold text-sm block">Comfortable</span>
                <span className="text-gray-400 text-xs">Have practical experience</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent-blue/5 border border-accent-blue/20">
              <div className="w-2 h-2 rounded-full bg-accent-blue"></div>
              <div>
                <span className="text-accent-blue font-semibold text-sm block">Learning</span>
                <span className="text-gray-400 text-xs">Actively exploring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
