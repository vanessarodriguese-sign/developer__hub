'use client'
import React from 'react'
import Image from 'next/image'
import { MainButton } from './MainButton'
import NavBarLink from './NavBarLink'
import { DropdownMenu } from './DropdownMenu'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function NavBar() {
	return (
		<nav className="bg-dark-blue">
			<div className="flex flex-row items-center px-9 pt-4 pb-3">
				<div className="">
					<Image
						data-testid="logo"
						className=""
						src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/esign-logo-mobile.svg"
						alt="Esign Logo"
						width={150.71}
						height={51}
					/>
				</div>
				<div className="hidden lg:flex lg:lex-grow lg:items-center lg:text-white" data-testid="navbar-links">
					{/* For large screens (md and lg) */}
					<p className="flex-grow">
						<NavBarLink href="/" label="GET STARTED" />
					</p>
					<p className="flex-grow">
						<NavBarLink href="" label="API REFERENE" />
					</p>
					<p className="flex-grow">
						<NavBarLink href="" label="API GUIDES" />
					</p>
					<p className="flex-grow">
						<NavBarLink href="" label="API DEMO" />
					</p>
					<p className="flex-grow">
						<NavBarLink href="" label="SUPPORT" />
					</p>
					<p className="flex-grow">
						<NavBarLink href="" label="CHANGELOG" />
					</p>
				</div>
				<div className="hidden lg:flex lg:flex-row lg:ml-auto lg:items-center lg:ps-6 lg:pe-123 lg:gap-4">
					<MainButton
						href=""
						content="LOGIN"
						bg="bg-light-blue"
						color="text-dark-blue"
						borderColor="border-dark-blue"
						textSize="text-15"
						lineHeight="leading-5"
						paddingX="px-7"
						paddingY="py-3"
					/>
					<MainButton
						href=""
						content="CONTACT US"
						bg="bg-dark-blue"
						color="text-white"
						borderColor="border-blue"
						textSize="text-15"
						lineHeight="leading-5"
						paddingX="px-7"
						paddingY="py-3"
					/>
				</div>
				<div className="flex-grow justify-end flex items-center md:flex-grow md:justify-end md:items-center lg:hidden">
					<DropdownMenu />
				</div>
			</div>
		</nav>
	)
}
