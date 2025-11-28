'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects, type Project } from '@/data/projects'
import Card from './ui/Card'
import Button from './ui/Button'

type Filter = 'all' | 'live' | 'devops' | 'cloud' | 'fullstack'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  useEffect(() => {
    const handleFilter = (event: CustomEvent) => {
      if (event.detail === 'live') {
        setActiveFilter('live')
      }
    }

    window.addEventListener('filterProjects', handleFilter as EventListener)
    return () => window.removeEventListener('filterProjects', handleFilter as EventListener)
  }, [])

  const filters: { label: string; value: Filter }[] = [
    { label: 'All', value: 'all' },
    { label: 'Live', value: 'live' },
    { label: 'DevOps', value: 'devops' },
    { label: 'Cloud', value: 'cloud' },
    { label: 'Full Stack', value: 'fullstack' },
  ]

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'live') return project.isLive
    return project.category === activeFilter
  })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
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
              Projects
            </span>
          </h2>
          <p className="text-gray-900 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work and contributions
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-900 dark:text-gray-400">No projects found for this filter.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="h-full flex"
    >
      <Card className="h-full flex flex-col bg-white/80 dark:bg-gray-800/80 w-full">
        <div className="flex-shrink-0 mb-4">
          {project.isLive && (
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold mb-3">
              Live
            </span>
          )}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 min-h-[3rem]">{project.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 min-h-[4.5rem] line-clamp-3">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4 flex-grow items-start">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto flex-shrink-0">
          {project.github && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 flex items-center justify-center gap-2"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          )}
          {project.liveUrl && (
            <Button
              variant="gradient"
              size="sm"
              className="flex-1 flex items-center justify-center gap-2"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
