import React from 'react'
import type { ReactNode } from 'react'
import './globals.css'
import NavBar from '../components/NavBar'

interface LayoutProps {
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RootLayout ({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-orange-50 flex flex-col min-h-screen">
        <header>
          <nav>
            <NavBar/>
          </nav>
        </header>
        <main className="grow py-3">
          {children}
        </main>
        <footer className="border-t py-3 text-center text-xs">
          Game data and images courtesy
          of <a href="https://rawg.io/" target="_blank" rel="noreferrer">RAWG</a>
        </footer>
      </body>
    </html>
  )
}
