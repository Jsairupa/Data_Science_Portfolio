import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sai Rupa Jhade - Data Scientist Portfolio',
  description: 'Data Science graduate student at RIT specializing in AI, ML, and NLP. Explore my projects, experience, and insights in data science.',
  keywords: 'data science, machine learning, AI, NLP, portfolio, Rochester Institute of Technology',
  authors: [{ name: 'Sai Rupa Jhade' }],
  openGraph: {
    title: 'Sai Rupa Jhade - Data Scientist Portfolio',
    description: 'Data Science graduate student at RIT specializing in AI, ML, and NLP.',
    type: 'website',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
