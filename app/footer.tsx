'use client'
import { MonitorIcon, MoonIcon, SunIcon, Github, Linkedin } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    const doc = document.documentElement
    // disable transitions so theme swap is instant
    doc.classList.add('disable-theme-transitions')
    setTheme(theme === 'dark' ? 'light' : 'dark')
    // Wait for two animation frames so the browser paints the new theme
    // (this prevents some elements from updating earlier than others).
    // Also include a small fallback to ensure the helper class is removed.
    const fallback = window.setTimeout(() => {
      if (doc.classList.contains('disable-theme-transitions')) {
        doc.classList.remove('disable-theme-transitions')
      }
    }, 250)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (doc.classList.contains('disable-theme-transitions')) {
          doc.classList.remove('disable-theme-transitions')
        }
        clearTimeout(fallback)
      })
    })
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 dark:text-zinc-400"
    >
      {theme === 'dark' ? (
        // half-moon SVG
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        <SunIcon className="h-4 w-4" />
      )}
    </button>
  )
}

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 py-6 text-center fixed bottom-0 left-0 z-40">
      <div className="mx-auto max-w-6xl px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            &copy; {new Date().getFullYear()} Cristian Salitre
          </p>
          <a href="https://github.com/csalitred" target="_blank" rel="noopener noreferrer" className="ml-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
          <a href="https://www.linkedin.com/in/cristian-salitre" target="_blank" rel="noopener noreferrer" className="ml-2 text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"><Linkedin className="h-5 w-5" /></a>
        </div>
        <ThemeSwitch />
      </div>
    </footer>
  )
}
