import { Container } from '@/components/common/Container'
import { motion } from 'framer-motion'
import { CloudNetwork3D } from '@/components/background/CloudNetwork3D'

export const ArchitectureChallenges: React.FC = () => {
  const challenges = [
    {
      title: 'EKS Cluster Automation at Scale',
      challenge: 'Automating production-grade EKS clusters with Terraform while maintaining security and scalability',
      solution: 'Built comprehensive Terraform modules for VPC, networking, security groups, and EKS cluster configuration',
      lessons: 'Infrastructure-as-Code best practices, cluster security hardening, and automated scaling patterns'
    },
    {
      title: 'Multi-VPC Architecture Design',
      challenge: 'Designing secure inter-VPC communication without compromising network isolation',
      solution: 'Implemented VPC peering with proper route table configuration and security group policies',
      lessons: 'Network segmentation, CIDR planning, and least-privilege access principles'
    },
    {
      title: 'CI/CD Pipeline Optimization',
      challenge: 'Reducing manual deployment time while maintaining deployment reliability',
      solution: 'Built GitHub Actions pipelines with automated testing, building, and multi-stage deployment',
      lessons: 'Pipeline automation, fail-fast principles, and deployment strategies'
    },
    {
      title: 'Containerized App Orchestration',
      challenge: 'Managing containerized applications across ECS and Kubernetes environments',
      solution: 'Developed manifests for both Fargate and Kubernetes, achieving multi-cloud compatibility',
      lessons: 'Container orchestration patterns, resource allocation, and cross-platform deployment'
    },
    {
      title: 'Security Best Practices Implementation',
      challenge: 'Enforcing security policies across AWS infrastructure without creating operational friction',
      solution: 'Implemented IAM roles, security groups, and network ACLs following AWS Well-Architected Framework',
      lessons: 'Zero-trust security, least privilege principle, and audit logging'
    },
    {
      title: 'Monitoring & Observability',
      challenge: 'Setting up comprehensive monitoring for distributed cloud infrastructure',
      solution: 'Configured CloudWatch metrics, SNS alerts, and logging for cost and operational monitoring',
      lessons: 'Observability patterns, alerting strategies, and cost optimization'
    }
  ]

  return (
    <div>
      <Container size="lg" padding="lg">
        <section className="min-h-screen pt-32 relative overflow-hidden">
          <CloudNetwork3D opacity={0.5} />

          <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cloud">
            Architecture Challenges & Solutions
          </h1>
          
          <div className="mb-12">
            <p className="text-body-lg text-gray-300 mb-8">
              Real-world architectural challenges encountered in AWS infrastructure projects. 
              These experiences have shaped my understanding of scalable, secure cloud systems.
            </p>
          </div>

          <div className="space-y-6">
            {challenges.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-security/40 hover:border-security/70 hover:bg-dark-secondary/25 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-security mb-6">{item.title}</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="group">
                    <h4 className="text-lg font-semibold text-cloud mb-3 group-hover:text-lg transition-all">Challenge</h4>
                    <p className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">{item.challenge}</p>
                  </div>

                  <div className="group">
                    <h4 className="text-lg font-semibold text-automation mb-3 group-hover:text-lg transition-all">Solution</h4>
                    <p className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">{item.solution}</p>
                  </div>

                  <div className="group">
                    <h4 className="text-lg font-semibold text-orange mb-3 group-hover:text-lg transition-all">Key Learning</h4>
                    <p className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">{item.lessons}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-automation">
              Problem-Solving Approach & Core Competencies
            </h2>
              <motion.div whileHover={{ y: -5 }} className="p-8 bg-gradient-to-br from-dark-secondary/20 to-dark-bg/30 rounded-lg border border-cloud/40 hover:border-cloud/70 backdrop-blur-md transition-all duration-300">
                <h3 className="text-xl font-semibold text-cloud mb-4">Problem-Solving Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 group">
                    <span className="text-automation mt-1 group-hover:translate-x-1 transition-transform">▸</span>
                    <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Understand business requirements and constraints</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-automation mt-1 group-hover:translate-x-1 transition-transform">▸</span>
                    <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Design scalable, secure solutions following AWS best practices</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-automation mt-1 group-hover:translate-x-1 transition-transform">▸</span>
                    <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Implement with Infrastructure-as-Code for reproducibility</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-automation mt-1 group-hover:translate-x-1 transition-transform">▸</span>
                    <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Monitor, measure, and optimize continuously</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="p-8 bg-gradient-to-br from-dark-secondary/20 to-dark-bg/30 rounded-lg border border-automation/40 hover:border-automation/70 backdrop-blur-md transition-all duration-300">
                <h3 className="text-headline-md text-automation mb-4">Core Competencies</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 group">
                    <span className="text-cloud mt-1 group-hover:translate-x-1 transition-transform">✓</span>
                    <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Cloud architecture design and optimization</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-cloud mt-1 group-hover:translate-x-1 transition-transform">✓</span>
                    <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Infrastructure automation and provisioning</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-cloud mt-1 group-hover:translate-x-1 transition-transform">✓</span>
                    <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Security hardening and compliance</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-cloud mt-1 group-hover:translate-x-1 transition-transform">✓</span>
                    <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Performance optimization and cost management</span>
                  </li>
                </ul>
              </motion.div>
          </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
