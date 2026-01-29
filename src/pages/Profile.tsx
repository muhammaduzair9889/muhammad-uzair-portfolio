import { Container } from '@/components/common/Container'
import { motion } from 'framer-motion'
import { CloudNetwork3D } from '@/components/background/CloudNetwork3D'

const PROFILE_IMAGE_URL = '/images/image.jpeg'

export const Profile: React.FC = () => {
  return (
    <div>
      <Container size="lg" padding="lg">
        <section className="min-h-screen pt-32 relative overflow-hidden">
          <CloudNetwork3D opacity={0.5} />

          <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-cloud">
            Muhammad Uzair
          </h1>
          <p className="text-xl font-semibold text-automation mb-8">
            Cloud & DevOps Engineer | Lahore, Pakistan
          </p>
          
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Profile Image Section */}
              <div className="md:col-span-1">
                <div className="sticky top-32">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cloud/20 to-automation/20 rounded-2xl blur-xl"></div>
                    <div className="relative p-6 bg-dark-secondary/80 backdrop-blur-sm rounded-2xl border border-cloud/30 shadow-xl">
                      <div className="aspect-square rounded-2xl overflow-hidden bg-dark-bg/70 border border-cloud/30 shadow-inner mb-4">
                        <img
                          src={PROFILE_IMAGE_URL}
                          alt="Muhammad Uzair"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h3 className="text-headline-md text-cloud text-center mb-1">Muhammad Uzair</h3>
                      <p className="text-body-sm text-automation text-center">Cloud & DevOps Engineer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Content Section */}
              <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-automation">
                  Profile
                </h2>
                <div className="space-y-4">
                  <p className="text-body-lg text-gray-300 leading-relaxed">
                    I'm a passionate Cloud & DevOps engineer focused on building reliable, secure, and scalable cloud infrastructure. 
                    I enjoy working with AWS services, containerization technologies, and automation tools to streamline deployment processes.
                  </p>
                  <p className="text-body-md text-gray-400 leading-relaxed">
                    With hands-on experience in infrastructure-as-code and CI/CD pipelines, I'm committed to learning new technologies 
                    and applying cloud best practices. I believe in writing clean, maintainable infrastructure code and helping teams 
                    operate their cloud environments efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-automation">
              Key Expertise
            </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 group">
                  <span className="text-security mt-1 group-hover:translate-x-1 transition-transform">▸</span>
                  <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">AWS Infrastructure & EKS Clusters</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-security mt-1 group-hover:translate-x-1 transition-transform">▸</span>
                  <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Kubernetes & Container Orchestration</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-security mt-1 group-hover:translate-x-1 transition-transform">▸</span>
                  <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">CI/CD Automation (70% time reduction)</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-security mt-1 group-hover:translate-x-1 transition-transform">▸</span>
                  <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Infrastructure as Code (Terraform)</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-security mt-1 group-hover:translate-x-1 transition-transform">▸</span>
                  <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Security & Cloud Best Practices</span>
                </li>
              </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-automation">
              Professional Experience
            </h2>
            <div className="space-y-6">
              <motion.div whileHover={{ y: -5 }} className="p-8 border-l-4 border-cloud bg-dark-secondary/15 backdrop-blur-md rounded-r-lg border border-dark-tertiary/40 hover:border-cloud/60 transition-all duration-300">
                <h3 className="text-xl font-semibold text-cloud mb-2">Intern</h3>
                <p className="text-body-sm text-gray-400 mb-4 font-semibold">Qasim Ali Shah Foundation | 2024 - 2025</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 group">
                    <span className="text-cloud group-hover:text-automation transition-colors">▸</span>
                    <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Completed professional programs enhancing decision-making and analytical thinking</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-cloud group-hover:text-automation transition-colors">▸</span>
                    <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Collaborated on team projects to streamline processes and improve workflow efficiency</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-cloud group-hover:text-automation transition-colors">▸</span>
                    <span className="text-body-md text-gray-300 group-hover:text-gray-100 transition-colors">Planned and managed tasks using structured methods to deliver practical solutions</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange">
              Education
            </h2>
            <motion.div whileHover={{ y: -5 }} className="p-8 border-l-4 border-automation bg-dark-secondary/15 backdrop-blur-md rounded-r-lg border border-dark-tertiary/40 hover:border-automation/60 transition-all duration-300">
              <h3 className="text-xl font-semibold text-automation mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-body-sm text-gray-400 mb-3 font-semibold">National University of Modern Languages, Lahore</p>
              <p className="text-body-md text-gray-300">Expected Graduation: 2026</p>
            </motion.div>
          </div>

          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-dark-secondary/40 backdrop-blur-xs rounded-lg border border-cloud border-opacity-20 text-center">
                <p className="text-headline-md text-cloud mb-2">3</p>
                <p className="text-body-sm text-gray-400">Major Projects</p>
              </div>
              <div className="p-4 bg-dark-secondary/40 backdrop-blur-xs rounded-lg border border-automation border-opacity-20 text-center">
                <p className="text-headline-md text-automation mb-2">99%</p>
                <p className="text-body-sm text-gray-400">Uptime Track Record</p>
              </div>
              <div className="p-4 bg-dark-secondary/40 backdrop-blur-xs rounded-lg border border-security border-opacity-20 text-center">
                <p className="text-headline-md text-security mb-2">15+</p>
                <p className="text-body-sm text-gray-400">Technical Skills</p>
              </div>
              <div className="p-4 bg-dark-secondary/40 backdrop-blur-xs rounded-lg border border-orange border-opacity-20 text-center">
                <p className="text-headline-md text-orange mb-2">70%</p>
                <p className="text-body-sm text-gray-400">Automation Gain</p>
              </div>
            </div>
          </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
