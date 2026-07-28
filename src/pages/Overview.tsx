import { Container } from '@/components/common/Container'
import { motion } from 'framer-motion'
import { CloudNetwork3D } from '@/components/background/CloudNetwork3D'
import { Link } from 'react-router-dom'

const PROFILE_IMAGE_URL = 'https://res.cloudinary.com/dfifdk8if/image/upload/v1769698565/image_qa1etn.jpg'

export const Overview: React.FC = () => {
  return (
    <div>
      <Container size="lg" padding="lg">
        <section className="min-h-screen pt-32 relative overflow-hidden">
          <CloudNetwork3D opacity={0.65} />

          <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-cloud">
            Muhammad Uzair
          </h1>
          <p className="text-xl font-semibold text-automation mb-8">
            Cloud & DevOps Engineer | Lahore, Pakistan
          </p>

          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cloud/20 to-automation/20 rounded-2xl blur-xl"></div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-dark-bg/60 border border-cloud/30 shadow-xl">
                    <img
                      src={PROFILE_IMAGE_URL}
                      alt="Muhammad Uzair"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-headline-md text-cloud">Muhammad Uzair</h3>
                  <p className="text-body-sm text-automation">Cloud & DevOps Engineer</p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-automation">Professional Overview</h2>
                <p className="text-body-lg text-gray-300 mb-5">
                  Cloud & DevOps engineer focused on building reliable, secure, and scalable infrastructure. I specialize in AWS,
                  Kubernetes, Terraform, and automation workflows that reduce deployment friction and improve system reliability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-cloud/20 bg-dark-secondary/30 backdrop-blur-xs">
                    <p className="text-body-sm text-gray-400">Current Focus</p>
                    <p className="text-body-md text-cloud">Cloud & DevOps Engineering</p>
                  </div>
                  <div className="p-4 rounded-lg border border-automation/20 bg-dark-secondary/30 backdrop-blur-xs">
                    <p className="text-body-sm text-gray-400">Education</p>
                    <p className="text-body-md text-automation">BS Computer Science, NUML (2022–2026)</p>
                  </div>
                  <div className="p-4 rounded-lg border border-security/20 bg-dark-secondary/30 backdrop-blur-xs">
                    <p className="text-body-sm text-gray-400">Focus Areas</p>
                    <p className="text-body-md text-security">Cloud Architecture, CI/CD, IaC</p>
                  </div>
                  <div className="p-4 rounded-lg border border-orange/20 bg-dark-secondary/30 backdrop-blur-xs">
                    <p className="text-body-sm text-gray-400">Location</p>
                    <p className="text-body-md text-orange">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-automation">
              Expertise Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-cloud/40 hover:border-cloud/70 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-cloud">AWS Infrastructure</h3>
                <p className="text-body-md text-gray-400">
                  Production-ready EKS clusters, multi-VPC architectures, and secure networking with 99% uptime.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-automation/40 hover:border-automation/70 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-automation">Containerization & Orchestration</h3>
                <p className="text-body-md text-gray-400">
                  Docker, Kubernetes, ECS, EKS, and Fargate deployments with full automation.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-security/40 hover:border-security/70 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-security">CI/CD & Automation</h3>
                <p className="text-body-md text-gray-400">
                  GitHub Actions pipelines reducing manual deployment time by 70%.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-orange/40 hover:border-orange/70 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-orange">Infrastructure as Code</h3>
                <p className="text-body-md text-gray-400">
                  Terraform for repeatable, version-controlled infrastructure deployments.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cloud">
              Quick Navigation
            </h2>
            <p className="text-body-lg text-gray-300 mb-6">
              Explore my professional journey through the sections below:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div whileHover={{ y: -5, boxShadow: "0 20px 30px rgba(56, 189, 248, 0.2)" }}>
                <Link
                  to="/profile"
                  className="block p-4 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-cloud/40 hover:border-cloud/70 transition-all hover:text-cloud"
                >
                  <div className="flex items-center gap-2 text-headline-sm text-cloud mb-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 21a8 8 0 00-16 0" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span>Profile</span>
                  </div>
                  <p className="text-body-sm text-gray-400">Experience, education, and background</p>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5, boxShadow: "0 20px 30px rgba(168, 85, 247, 0.2)" }}>
                <Link
                  to="/skills"
                  className="block p-4 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-automation/40 hover:border-automation/70 transition-all hover:text-automation"
                >
                  <div className="flex items-center gap-2 text-lg font-semibold text-automation mb-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                    </svg>
                    <span>Skills</span>
                  </div>
                  <p className="text-body-sm text-gray-400">Technical expertise and proficiency</p>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5, boxShadow: "0 20px 30px rgba(56, 189, 248, 0.2)" }}>
                <Link
                  to="/projects"
                  className="block p-4 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-cloud/40 hover:border-cloud/70 transition-all hover:text-cloud"
                >
                  <div className="flex items-center gap-2 text-lg font-semibold text-cloud mb-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                    </svg>
                    <span>Projects</span>
                  </div>
                  <p className="text-body-sm text-gray-400">3 infrastructure & automation projects</p>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5, boxShadow: "0 20px 30px rgba(239, 68, 68, 0.2)" }}>
                <Link
                  to="/contact"
                  className="block p-4 bg-dark-secondary/15 backdrop-blur-md rounded-lg border border-security/40 hover:border-security/70 transition-all hover:text-security"
                >
                  <div className="flex items-center gap-2 text-lg font-semibold text-security mb-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6" />
                      <rect x="3" y="6" width="18" height="12" rx="2" />
                    </svg>
                    <span>Contact</span>
                  </div>
                  <p className="text-body-sm text-gray-400">Get in touch via email or social</p>
                </Link>
              </motion.div>
            </div>
          </div>

            <div>
              <div className="p-8 bg-gradient-to-r from-dark-secondary/20 to-dark-bg/30 rounded-lg border border-cloud/40 hover:border-cloud/70 backdrop-blur-md transition-all duration-300">
                <p className="text-body-lg text-cloud mb-2">Open to cloud & DevOps opportunities</p>
                <p className="text-body-md text-gray-400">
                  I enjoy shipping production-ready infrastructure, automating deployments, and improving system observability.
                  Reach out for internships, freelance work, or collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
