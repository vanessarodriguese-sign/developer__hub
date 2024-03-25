import React from 'react'
import type { ReactNode } from 'react'
import { nunito } from './fonts'
import './globals.css'
import NavBar from '../components/NavBar'
import { Footer } from '@/components/Footer'

interface LayoutProps {
	children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en" className={nunito.variable}>
			<body className="flex flex-col h-screen w-screen">
				<header>
					<nav>
						<NavBar />
					</nav>
				</header>
				<main className="">{children}</main>
				<footer className="">
					<Footer />
				</footer>
			</body>
		</html>
	)
}
