import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Update the metadata
export const metadata: Metadata = {
  title: "Sai Rupa Jhade | Data Scientist",
  description:
    "Portfolio of Sai Rupa Jhade, Data Scientist and ML Engineer specializing in Machine Learning, NLP, and AI",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'