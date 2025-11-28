export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  github?: string
  liveUrl?: string
  isLive: boolean
  category: 'devops' | 'cloud' | 'fullstack'
  image?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Kubernetes CI/CD Pipeline',
    description: 'Automated CI/CD pipeline using GitHub Actions and ArgoCD for Kubernetes deployments with multi-stage builds and automated testing.',
    tech: ['Kubernetes', 'GitHub Actions', 'ArgoCD', 'Docker', 'Helm'],
    github: 'https://github.com/muhammaduzair9889',
    liveUrl: 'https://example.com',
    isLive: true,
    category: 'devops',
  },
  {
    id: '2',
    title: 'AWS Infrastructure as Code',
    description: 'Terraform modules for provisioning scalable AWS infrastructure including VPC, EKS clusters, and monitoring stack.',
    tech: ['Terraform', 'AWS', 'EKS', 'CloudWatch', 'S3'],
    github: 'https://github.com/muhammaduzair9889',
    liveUrl: 'https://example.com',
    isLive: true,
    category: 'cloud',
  },
  {
    id: '3',
    title: 'Docker Multi-Stage Builds',
    description: 'Optimized Docker images with multi-stage builds, reducing image size by 70% and improving build times.',
    tech: ['Docker', 'Docker Compose', 'Linux', 'Bash'],
    github: 'https://github.com/muhammaduzair9889',
    isLive: false,
    category: 'devops',
  },
  {
    id: '4',
    title: 'Monitoring & Observability Stack',
    description: 'Complete observability solution with Prometheus, Grafana, and AlertManager for infrastructure and application metrics.',
    tech: ['Prometheus', 'Grafana', 'AlertManager', 'Node Exporter'],
    github: 'hhttps://github.com/muhammaduzair9889',
    liveUrl: 'https://example.com',
    isLive: true,
    category: 'devops',
  },
  {
    id: '5',
    title: 'Cloud-Native Web Application',
    description: 'Full-stack application deployed on Kubernetes with auto-scaling, load balancing, and database replication.',
    tech: ['Kubernetes', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/muhammaduzair9889',
    liveUrl: 'https://example.com',
    isLive: true,
    category: 'fullstack',
  },
  {
    id: '6',
    title: 'GitHub Actions Workflows',
    description: 'Reusable GitHub Actions workflows for automated testing, security scanning, and deployment across multiple environments.',
    tech: ['GitHub Actions', 'YAML', 'Docker', 'Bash'],
    github: 'https://github.com/muhammaduzair9889',
    isLive: false,
    category: 'devops',
  },
]

