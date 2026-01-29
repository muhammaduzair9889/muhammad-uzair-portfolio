/* Placeholder for types definitions */
export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
}

export interface Skill {
  category: string
  items: string[]
  proficiency: number
}
