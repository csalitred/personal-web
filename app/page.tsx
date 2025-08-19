'use client'
import Link from 'next/link'
import { motion } from 'motion/react'

export default function Home() {
  return (
    <motion.main
      className="relative flex flex-col items-center justify-center min-h-[80vh] py-24 px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Subtle background gradient blob */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-400/20 via-green-300/20 to-purple-400/20 blur-3xl opacity-60" />
      </div>
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 text-center text-zinc-900 dark:text-zinc-100"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Cristian Salitre
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 mb-8 text-center max-w-2xl font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        I'm a Software Engineer and graduate student at NC State University, passionate about building innovative solutions and sharing my journey.
      </motion.p>
      <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 opacity-40 mb-8" />
      <motion.div
        className="flex flex-wrap gap-3 mb-12 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {['Embedded Systems', 'Machine Learning', 'Computer Vision'].map((tech, index) => (
          <motion.span
            key={tech}
            className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-full text-base md:text-lg font-semibold shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.08 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.a
          href="https://github.com/csalitred"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-lg bg-zinc-900 text-white font-bold hover:bg-zinc-700 transition-colors text-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/cristian-salitre"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-lg bg-blue-700 text-white font-bold hover:bg-blue-800 transition-colors text-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LinkedIn
        </motion.a>
        <motion.button
          onClick={() => {
            const link = document.createElement('a')
            link.href = '/csalitre_resume.pdf'
            link.download = 'csalitre_resume.pdf'
            link.click()
          }}
          className="px-8 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition-colors text-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.button>
      </motion.div>
    </motion.main>
  )
}
