'use client'
import Link from 'next/link'
import { motion } from 'motion/react'

export default function Home() {
  return (
    <motion.main 
      className="flex flex-col items-center justify-center min-h-[60vh] py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Cristian Salitre
      </motion.h1>
      <motion.p 
        className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        I'm a Firmware Engineer and graduate student at NC State University, passionate about building innovative solutions and sharing my journey.
      </motion.p>
      
      <motion.div 
        className="flex flex-wrap gap-2 mb-8 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {['Embedded Systems', 'Machine Learning', 'Computer Vision'].map((tech, index) => (
          <motion.span
            key={tech}
            className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
      
      <motion.div 
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.a 
          href="https://github.com/csalitred" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-2 rounded bg-zinc-900 text-white font-semibold hover:bg-zinc-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/cristian-salitre" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-2 rounded bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LinkedIn
        </motion.a>
        <motion.button 
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/csalitre_resume_2025.pdf';
            link.download = 'Cristian_Salitre_Resume.pdf';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="px-6 py-2 rounded bg-green-700 text-white font-semibold hover:bg-green-800 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.button>
      </motion.div>
    </motion.main>
  )
}
