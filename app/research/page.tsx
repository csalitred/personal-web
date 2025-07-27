'use client'
import { motion } from 'motion/react'

export default function ResearchPage() {
  return (
    <motion.main 
      className="max-w-2xl mx-auto py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-2xl shadow-xl bg-zinc-100 dark:bg-zinc-800/80 backdrop-blur-md p-8 border border-zinc-200 dark:border-zinc-800">
        <h1 className="text-3xl font-bold mb-4">Research</h1>
        <p className="text-zinc-600 dark:text-zinc-400">Research content coming soon.</p>
      </div>
    </motion.main>
  )
} 