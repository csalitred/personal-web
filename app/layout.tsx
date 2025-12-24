import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nim-fawn.vercel.app/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Cristian - Personal Website',
    template: '%s | Nim'
  },
  description:  'Personal website showcasing projects, experience, ambitions.',
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="transition-colors duration-300">
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white dark:bg-zinc-950 text-black dark:text-white tracking-tight antialiased min-h-screen flex flex-col transition-colors duration-300`}
      >
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          storageKey="theme"
          defaultTheme="light"
        >
          <div className="flex flex-col flex-1 min-h-screen w-full font-[family-name:var(--font-inter-tight)]">
            <div className="relative flex-1 w-full px-4 md:px-8 lg:px-12 pt-24">
              <Header />
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
