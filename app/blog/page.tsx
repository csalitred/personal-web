'use client'
import { BLOG_POSTS } from '../data'
import { motion } from 'motion/react'

export default function BlogPage() {
  return (
    <motion.main 
      className="max-w-2xl mx-auto py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-2xl shadow-xl bg-zinc-100 dark:bg-zinc-800/80 backdrop-blur-md p-8 border border-zinc-200 dark:border-zinc-800">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <div className="space-y-4">
          {BLOG_POSTS.map((post) => (
            <div key={post.uid} className="block rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800 shadow p-4">
              <h2 className="text-xl font-semibold mb-1 dark:text-zinc-100">{post.title}</h2>
              <p className="text-zinc-500 dark:text-zinc-400">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.main>
  )
} 