'use client'
import { BLOG_POSTS } from '../data'
import { motion } from 'motion/react'

export default function BlogPage() {
  const posts = BLOG_POSTS;

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
      {posts.length === 0 ? (
        <div className="text-center text-zinc-500 dark:text-zinc-400 text-lg py-16">No blog posts yet. Check back soon!</div>
      ) : (
        posts.map((post) => (
          <div key={post.uid} className="w-full max-w-2xl">
            <a
              href={`/blog/${post.uid}`}
              className="block w-full text-left"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                {post.title}
              </h2>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">{post.description}</p>
            </a>
          </div>
        ))
      )}
    </motion.main>
  )
} 