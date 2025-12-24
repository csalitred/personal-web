'use client'
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
        {"cooking..."}
      </div>
    </motion.main>
  )
} 