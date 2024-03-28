'use client'
import React from 'react'
import Image from 'next/image'

import NavBarLink from './NavBarLink'
import { DropdownMenu } from './DropdownMenu'
import { LightButtonMedium } from './LightButton'
import { DarkButtonMedium } from './DarkButton'

export default function NavBar() {
	const options = [
		{ label: 'GET STARTED', href: '/' },
		{ label: 'API REFERENCE', href: '/ApiReference' },
		{ label: 'API GUIDES', href: '/ApiGuides' },
		{ label: 'API DEMOS', href: '/ApiDemo' },
		{ label: 'SUPPORT', href: '/Support' },
		{ label: 'CHANGELOG', href: '/Changelog' }
	]

	return (
		<nav className="bg-dark-blue">
			<div className="flex flex-row items-center px-9 pt-5 pb-3 md:ps-10 md:pe-11 lg:px-32 lg:py-10">
				<div className="lg:hidden">
					<Image
						data-testid="logo"
						className=""
						src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/esign-logo-mobile.svg"
						alt="Esign Logo"
						width={151}
						height={51}
					/>
				</div>
				<div className="hidden md:hidden lg:block pe-32">
					<Image
						data-testid="logo"
						className=""
						src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/esign-logo-desktop.svg"
						alt="Esign Logo"
						width={151}
						height={51}
					/>
				</div>

				{/* Desktop */}
				<div className="hidden lg:flex lg:flex-grow lg:items-center lg:text-white" data-testid="navbar-links">
					{options.map((option) =>(
						<p key={option.label} className="flex-grow font-bold">
							<NavBarLink href={option.href} label={option.label} />
						</p>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-row lg:ml-auto lg:items-center lg:ps-5 lg:gap-4">
					<LightButtonMedium
						href=""
						content="LOGIN"
					/>
					<DarkButtonMedium
						href=""
						content="CONTACT US"
					/>
				</div>
				<div className="flex-grow justify-end flex items-center md:flex-grow md:justify-end md:items-center lg:hidden">
					<DropdownMenu />
				</div>
			</div>
		</nav>
	)
}
