import { Container } from '@/components/common/Container'
import { motion } from 'framer-motion'
import { CloudNetwork3D } from '@/components/background/CloudNetwork3D'

export const ToolingAndPlatforms: React.FC = () => {
  const toolCategories = [
    {
      name: 'Cloud Platforms',
      color: 'cloud',
      tools: [
        { name: 'Amazon Web Services (AWS)', level: 'Proficient' },
        { name: 'EC2, ECS, EKS', level: 'Proficient' },
        { name: 'VPC, Security Groups, IAM', level: 'Proficient' },
        { name: 'CloudWatch, SNS', level: 'Comfortable' }
      ]
    },
    {
      name: 'Container Orchestration',
      color: 'automation',
      tools: [
        { name: 'Docker', level: 'Proficient' },
        { name: 'Kubernetes / EKS', level: 'Proficient' },
        { name: 'Fargate', level: 'Comfortable' },
        { name: 'ECR (Elastic Container Registry)', level: 'Proficient' }
      ]
    },
    {
      name: 'Infrastructure as Code',
      color: 'automation',
      tools: [
        { name: 'Terraform', level: 'Proficient' },
        { name: 'CloudFormation', level: 'Comfortable' },
        { name: 'Helm', level: 'Learning' }
      ]
    },
    {
      name: 'CI/CD & Automation',
      color: 'cloud',
      tools: [
        { name: 'GitHub Actions', level: 'Proficient' },
        { name: 'Git & GitHub', level: 'Proficient' },
        { name: 'Bash Scripting', level: 'Proficient' }
      ]
    },
    {
      name: 'Programming & Scripting',
      color: 'security',
      tools: [
        { name: 'Python', level: 'Proficient' },
        { name: 'Linux / Unix', level: 'Proficient' },
        { name: 'SQL', level: 'Comfortable' }
      ]
    },
    {
      name: 'Web Development',
      color: 'cloud',
      tools: [
        { name: 'Next.js', level: 'Comfortable' },
        { name: 'MongoDB', level: 'Comfortable' },
        { name: 'Tailwind CSS', level: 'Comfortable' }
      ]
    }
  ]

  const colorMap: Record<string, string> = {
    cloud: 'border-cloud',
    automation: 'border-automation',
    security: 'border-security'
  }

  const levelColors = {
    'Proficient': 'bg-automation bg-opacity-20 text-automation',
    'Comfortable': 'bg-cloud bg-opacity-20 text-cloud',
    'Learning': 'bg-security bg-opacity-20 text-security'
  }

  return (
    <div>
      <Container size="lg" padding="lg">
        <section className="min-h-screen pt-32 relative overflow-hidden">
          <CloudNetwork3D opacity={0.5} />

          <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cloud">
            Tooling & Platforms
          </h1>

          <div className="mb-12">
            <p className="text-body-lg text-gray-300 mb-8">
              Toolset used across AWS infrastructure, containerization, and CI/CD projects. 
              Each platform reflects hands-on project experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {toolCategories.map((category, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={`p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border-2 border-opacity-40 hover:border-opacity-70 hover:bg-dark-secondary/25 transition-all duration-300 ${colorMap[category.color]}`}
              >
                <h3 className={`text-xl font-semibold mb-4 ${
                  category.color === 'cloud' ? 'text-cloud' :
                  category.color === 'automation' ? 'text-automation' :
                  'text-security'
                }`}>
                  {category.name}
                </h3>

                <div className="space-y-3">
                  {category.tools.map((tool, toolIdx) => (
                    <div key={toolIdx} className="flex items-center justify-between group">
                      <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">{tool.name}</span>
                      <span className={`text-body-sm px-3 py-1 rounded-full transition-all group-hover:scale-105 ${levelColors[tool.level as keyof typeof levelColors]}`}>
                        {tool.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-automation">
              Cloud Infrastructure Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -5 }} className="p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-cloud/40 hover:border-cloud/70 transition-all duration-300">
                <h3 className="text-xl font-semibold text-cloud mb-3">Compute & Orchestration</h3>
                <p className="text-body-md text-gray-300 mb-3">
                  EKS clusters, Fargate, EC2, and Kubernetes deployments for scalable applications.
                </p>
                <p className="text-body-sm text-gray-400">AWS EKS, Docker, Kubernetes, Fargate</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-automation/40 hover:border-automation/70 transition-all duration-300">
                <h3 className="text-xl font-semibold text-automation mb-3">Infrastructure & Networking</h3>
                <p className="text-body-md text-gray-300 mb-3">
                  Multi-VPC architectures, VPC peering, security groups, and IAM policies.
                </p>
                <p className="text-body-sm text-gray-400">AWS VPC, Networking, IAM, Terraform</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-security/40 hover:border-security/70 transition-all duration-300">
                <h3 className="text-xl font-semibold text-security mb-3">Automation & Monitoring</h3>
                <p className="text-body-md text-gray-300 mb-3">
                  GitHub Actions pipelines, CloudWatch monitoring, and infrastructure automation.
                </p>
                <p className="text-body-sm text-gray-400">GitHub Actions, CloudWatch, SNS</p>
              </motion.div>
            </div>
          </div>

          <div>
            <div className="p-8 bg-gradient-to-r from-dark-secondary/20 to-dark-bg/30 rounded-lg border border-automation/40 hover:border-automation/70 backdrop-blur-md transition-all duration-300">
              <h3 className="text-xl font-semibold text-automation mb-4">Technology Focus</h3>
              <p className="text-body-md text-gray-300 mb-6">
                Focus on reliable, scalable infrastructure using AWS services, container orchestration, and infrastructure as code.
                Emphasis on automation through GitHub Actions and observability with CloudWatch.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-dark-secondary/20 border border-cloud/30 hover:border-cloud/70 transition-all">
                  <p className="text-headline-md text-cloud">3</p>
                  <p className="text-body-sm text-gray-400">Major Projects</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-dark-secondary/20 border border-automation/30 hover:border-automation/70 transition-all">
                  <p className="text-headline-md text-automation">70%</p>
                  <p className="text-body-sm text-gray-400">Automation Gain</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-dark-secondary/20 border border-security/30 hover:border-security/70 transition-all">
                  <p className="text-headline-md text-security">99%</p>
                  <p className="text-body-sm text-gray-400">Uptime Target</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-lg bg-dark-secondary/20 border border-orange/30 hover:border-orange/70 transition-all">
                  <p className="text-headline-md text-orange">15+</p>
                  <p className="text-body-sm text-gray-400">Technical Skills</p>
                </motion.div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
