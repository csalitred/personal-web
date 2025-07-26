'use client'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Home
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-base font-medium">
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
          <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link>
          <Link href="/research" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Research</Link>
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</Link>
        </nav>
        {/* Mobile nav (optional: add hamburger menu here) */}
      </div>
    </header>
  )
}
