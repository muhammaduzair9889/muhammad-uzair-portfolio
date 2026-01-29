import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navigation } from './components/layout/Navigation'
import { Footer } from './components/layout/Footer'

// Page imports
import { Overview } from './pages/Overview'
import { Profile } from './pages/Profile'
import { SkillsAndTechnologies } from './pages/SkillsAndTechnologies'
import { Projects } from './components/sections/Projects'
import { ArchitectureChallenges } from './pages/ArchitectureChallenges'
import { ToolingAndPlatforms } from './pages/ToolingAndPlatforms'
import { CertificationsAndMilestones } from './pages/CertificationsAndMilestones'
import { Contact } from './pages/Contact'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-dark-bg text-white overflow-x-hidden min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<PageWrapper><Overview /></PageWrapper>} />
            <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
            <Route path="/skills" element={<PageWrapper><SkillsAndTechnologies /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/challenges" element={<PageWrapper><ArchitectureChallenges /></PageWrapper>} />
            <Route path="/tooling" element={<PageWrapper><ToolingAndPlatforms /></PageWrapper>} />
            <Route path="/certifications" element={<PageWrapper><CertificationsAndMilestones /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

const ScrollToTop: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return null
}

// Smooth page transition wrapper
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <>{children}</>
}

export default App
