import React from 'react'
import type { ReactNode } from 'react'
// import NavBar from '../components/NavBar'
import { Providers } from './providers'
import { nunito } from './fonts'
import './globals.css'
import NavBarTest from '../components/NavBarTest'

interface LayoutProps {
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RootLayout ({ children }: LayoutProps) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className='flex flex-col min-h-screen'>
        <header>
          <nav>
            <NavBarTest/>
          </nav>
        </header>
        <main className="grow py-3">
          <Providers>
            {children}
          </Providers>
        </main>
        <footer className="border-t py-3 text-center text-xs">
          Game data and images courtesy
          of <a href="https://rawg.io/" target="_blank" rel="noreferrer">RAWG</a>
        </footer>
      </body>
    </html>
  )
}
