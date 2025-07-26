'use client'
import { motion } from 'motion/react'

export default function AboutPage() {
  return (
    <motion.main 
      className="max-w-2xl mx-auto py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        About
      </motion.h1>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="w-32 h-32 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
            <span className="text-zinc-500 dark:text-zinc-400 text-sm">Profile Image</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Hi, I am Software Engineer with a focus on Machine Learning, Computer Vision, and Embedded Systems. A graduate student at the NC State University focusing on wireless communication and signal processing. I am excited to bring new technologies to life and create innovative solutions that make a difference.
          </p>
        </motion.div>
      </div>
    </motion.main>
  )
} 