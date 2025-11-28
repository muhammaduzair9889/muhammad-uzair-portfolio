'use client'

import { motion } from 'framer-motion'
import Card from './ui/Card'

const skillCategories = {
  'Cloud Platforms': ['AWS', 'Azure', 'GCP', 'DigitalOcean'],
  'CI/CD & Automation': ['GitHub Actions', 'Jenkins', 'GitLab CI', 'ArgoCD'],
  'Containers & Orchestration': ['Docker', 'Kubernetes', 'Helm', 'Docker Compose'],
  'Monitoring': ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch'],
  'Programming & Scripting': ['Python', 'Bash', 'YAML', 'JavaScript'],
  'Infrastructure as Code': ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi'],
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
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
              Skills
            </span>
          </h2>
          <p className="text-gray-900 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with across different domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            >
              <Card>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-200">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

