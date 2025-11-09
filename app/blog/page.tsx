'use client'
import { BLOG_POSTS } from '../data'
import { motion } from 'motion/react'

export default function BlogPage() {
  const posts = BLOG_POSTS

  return (
    <motion.main
      className="relative flex flex-col items-center min-h-screen py-10 px-4 overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle background gradient blob */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-400/20 via-green-300/20 to-purple-400/20 blur-3xl opacity-60" />
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center text-zinc-900 dark:text-zinc-100">Blog</h1>

      <div className="w-full max-w-3xl grid gap-4">
        {posts.map((post) => (
          <article key={post.uid} className="rounded-xl shadow-lg bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md p-6">
            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">{post.title}</h2>
              {post.description?.toLowerCase().includes('coming soon') ? (
                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Why Enginerring?</span>
              ) : null}
            </div>
            {post.description ? (
              <p className="mt-3 text-zinc-700 dark:text-zinc-300">{post.description}</p>
            ) : null}
          </article>
        ))}
      </div>
    </motion.main>
  )
}