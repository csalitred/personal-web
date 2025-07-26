import { BLOG_POSTS } from '../data'

export default function BlogPage() {
  return (
    <main className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="space-y-4">
        {BLOG_POSTS.map((post) => (
          <div key={post.uid} className="block rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4">
            <h2 className="text-xl font-semibold mb-1 dark:text-zinc-100">{post.title}</h2>
            <p className="text-zinc-500 dark:text-zinc-400">{post.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
} 