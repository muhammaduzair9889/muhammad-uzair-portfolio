import { useState } from 'react'
import { motion } from 'framer-motion'
import { CloudNetwork3D } from '@/components/background/CloudNetwork3D'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  link?: string
  githubLink: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AWS EKS Cloud Infrastructure Automation',
    description: 'Deployed production-ready AWS EKS clusters using Terraform. Automated VPCs, subnets, NAT Gateway, Internet Gateway, security groups, IAM roles, and launch templates. Built CI/CD pipelines using GitHub Actions, reducing manual deployment time by 70%. Configured auto-scaling worker nodes with bootstrap scripts, achieving 99% uptime. Enforced AWS security best practices using IAM and network policies. Monitored cluster health using kubectl with 100% successful deployments.',
    technologies: ['AWS EKS', 'Terraform', 'GitHub Actions', 'kubectl', 'IAM', 'VPC', 'CI/CD'],
    githubLink: 'https://github.com/muhammaduzair9889/aws-eks-terraform',
  },
  {
    id: 2,
    title: 'Cloud-Native Containerized Deployment',
    description: 'Automated deployment of containerized applications using AWS ECS and ECR. Built CI/CD pipelines for multi-environment deployments. Developed Kubernetes manifests for cluster-agnostic orchestration. Configured AWS Fargate tasks with memory allocation, public access, and CloudWatch logging. Achieved 99% application uptime.',
    technologies: ['AWS ECS', 'ECR', 'Kubernetes', 'AWS Fargate', 'Docker', 'CloudWatch', 'CI/CD'],
    githubLink: 'https://github.com/muhammaduzair9889/node-todo-app-aws-ecs-ecr-k8s',
  },
  {
    id: 3,
    title: 'AWS Multi-VPC Cloud Architecture',
    description: 'Designed and deployed multiple VPCs with public and private subnets. Implemented VPC peering, route tables, security groups, and NACLs. Validated secure inter-VPC connectivity using EC2 instances. Resolved routing conflicts via CIDR planning and security policies. Configured CloudWatch and SNS alerts for cost and operational monitoring.',
    technologies: ['AWS VPC', 'VPC Peering', 'EC2', 'Security Groups', 'NACL', 'CloudWatch', 'SNS'],
    githubLink: 'https://github.com/muhammaduzair9889/aws-multi-vpc-architecture',
  },
]

export const Projects: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="min-h-screen py-20 px-6 bg-dark-bg relative overflow-hidden">
      <CloudNetwork3D opacity={0.5} />
      <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 mb-16 max-w-2xl">
            A selection of key projects showcasing cloud infrastructure, automation, and DevOps expertise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-lg border border-cloud/40 bg-dark-secondary/15 hover:bg-dark-secondary/25 hover:border-cloud/70 backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden"
              >
              {hoveredId === project.id && (
                <motion.div
                  className="absolute inset-0 rounded-lg bg-accent-cyan/5 blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-accent-cyan">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-dark-tertiary/60 text-accent-blue border border-dark-tertiary/40 hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-accent-cyan text-dark-bg hover:shadow-glow hover:-translate-y-0.5 transition-all"
                    >
                      Live Preview
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-lg bg-accent-cyan text-dark-bg font-semibold hover:shadow-glow hover:scale-105 transition-all"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
