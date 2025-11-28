import Hero from '@/components/Hero'
import About from '@/components/About'
import Workflow from '@/components/Workflow'
import Toolkit from '@/components/Toolkit'
import Focus from '@/components/Focus'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Journey from '@/components/Journey'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden w-full max-w-full">
      <Hero />
      <About />
      <Workflow />
      <Toolkit />
      <Focus />
      <Skills />
      <Projects />
      <Journey />
      <Resume />
      <Contact />
      <ScrollToTop />
    </main>
  )
}

