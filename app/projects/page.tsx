'use client'
import { PROJECTS } from '../data'
import Image from 'next/image'
import { motion } from 'motion/react'

export default function ProjectsPage() {
  return (
    <motion.main
      className="flex flex-col items-center min-h-screen py-10 px-4 bg-white dark:bg-zinc-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-zinc-900 dark:text-zinc-100">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-5xl">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            className="flex flex-col items-start group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-3">
              <Image src={project.image} alt={project.name} fill style={{ objectFit: 'cover' }} className="rounded-xl group-hover:scale-105 transition-transform duration-300" />
            </div>
            <a
              className="text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.main>
  )
} 