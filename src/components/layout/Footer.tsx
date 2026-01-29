import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  const handleNavClick = () => {
    // Scroll to top with smooth animation
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-dark-tertiary/30 bg-dark-bg py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2 text-cloud">Muhammad Uzair</h3>
            <p className="text-gray-400 text-sm mb-2">Cloud & DevOps Engineer</p>
            <p className="text-gray-500 text-sm">Lahore, Punjab, Pakistan</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-cloud">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" onClick={handleNavClick} className="hover:text-cloud transition-colors">Overview</Link></li>
              <li><Link to="/profile" onClick={handleNavClick} className="hover:text-cloud transition-colors">Profile</Link></li>
              <li><Link to="/skills" onClick={handleNavClick} className="hover:text-cloud transition-colors">Skills</Link></li>
              <li><Link to="/projects" onClick={handleNavClick} className="hover:text-cloud transition-colors">Projects</Link></li>
              <li><Link to="/contact" onClick={handleNavClick} className="hover:text-cloud transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-cloud">Connect</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="https://github.com/muhammaduzair9889"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-cloud transition-colors"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 9l4 3-4 3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6l4 12" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/muhammad-uzair-b806a4394/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-cloud transition-colors"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 11v4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11v4" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-cloud">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-cloud" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6" />
                  <rect x="3" y="6" width="18" height="12" rx="2" />
                </svg>
                <a href="mailto:muhammaduzair8695@gmail.com" className="hover:text-cloud transition-colors">
                  muhammaduzair8695@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-cloud" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
                <span>Lahore, Punjab, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-tertiary/30 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 Muhammad Uzair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
