import React from 'react'
import Image from 'next/image'
import NavBarLink from './NavBarLink'
import { SocialMediaLinks } from './SocialMediaLinks'
import FooterAdresses from './FooterAdresses'

export function Footer() {
	const options = [
		{ label: 'DEVELOPER HOME', href: '/' },
		{ label: 'API REFERENCE', href: '/ApiReference' },
		{ label: 'API GUIDES', href: '/ApiGuides' },
		{ label: 'API DEMOS', href: '/ApiDemo' },
		{ label: 'SUPPORT', href: '/Support' }
	]
	return (
		<div className="bg-dark-blue ">
			{/* Desktop and Tablet */}
			<div className="hidden lg:flex-col lg:px-32 md:flex-col md:ps-10 md:pe-11 md:block lg:block">
				<div className="flex flex-row border-b border-blue pb-6 pt-8 flex-grow flex-1 px-52 text-blue md:hidden">
					{options.map((option) => (
						<p  key={option.href} className="grow font-extrabold">
							<NavBarLink  href={option.href} label={option.label}/>
						</p>
					))}
				</div>
				<div className="flex flex-row border-b border-blue pb-6 pt-8 flex-grow flex-1 text-blue md:px-16 lg:hidden">
					{options.map((option) => (
						<div key={option.href} className="grow font-extrabold text-10 leading-14">
							<NavBarLink  href={option.href} label={option.label}/>
						</div>
					))}
				</div>
				<FooterAdresses/>
				<div className="flex flex-row justify-between lg:pb-11 lg:pt-6 md:pt-2 md:pb-5 align-baseline">
					<div className="flex flex-row lg:w-560 md:w-360">
						<div className="flex-grow text-medium-gray leading-14 md:text-8 lg:text-sm md:font-semibold">
							<div>© Copyright E-Sign . All Rights Reserved.</div>
						</div>
						<div className="flex-grow text-medium-gray leading-14 md:text-8 lg:text-sm md:font-semibold">
							<div>Terms of use | Privacy</div>
						</div>
					</div>
					<SocialMediaLinks/>
				</div>
			</div>

			{/* Mobile */}
			<div className="flex flex-col items-center text-medium-gray lg:hidden md:hidden">
				<div className="flex flex-col w-318 py-8 items-center">
					<div className="pb-5">
						<Image
							className="grow"
							src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/esign-logo-desktop.svg"
							alt="Esign Logo"
							width={151}
							height={51}
						/>
					</div>
					<div className="grow pb-3 text-sm leading-14 text-medium-gray">
						<div>Terms of use | Privacy</div>
					</div>
					<div className="grow pb-6 text-sm leading-14 text-medium-gray">
						<div>© Copyright E-Sign . All Rights Reserved.</div>
					</div>
					<SocialMediaLinks/>
				</div>
			</div>
		</div>
	)
}
