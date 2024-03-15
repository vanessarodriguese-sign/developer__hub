import React, { useState } from 'react'
import Image from 'next/image'
import EsignMenuM from '@/assets/e-sign-mobile-menu.svg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import MenuLink from './MenuLink'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function DropdownMenu() {
	const [isOpen, setIsOpen] = useState(false)

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const toggling = () => {
		setIsOpen(!isOpen)
	}
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const onOptionClicked = () => {
		setIsOpen(false)
	}

	const options = [
		{ label: 'GET STARTED', href: '/' },
		{ label: 'API REFERENCE', href: '/ApiReference' },
		{ label: 'API GUIDES', href: '/ApiGuides' },
		{ label: 'API DEMOS', href: '/ApiDemo' },
		{ label: 'SUPPORT', href: '/Support' },
		{ label: 'CHANGELOG', href: '/Changelog' },
		{ label: 'LOG IN', href: '/' },
		{ label: 'CONTACT US', href: '/' },
	]

	return (
		<>
			<div className="relative">
				<button className="cursor-pointer" onClick={toggling}>
					<Image data-testid="menu" className="" src={EsignMenuM} alt="Esign Menu" width={28} height={20} />
				</button>
				{isOpen && (
					<div className="absolute -right-5 top-11 w-216 text-15 leading-26 text-white font-semibold border border-blue">
						{options.map((option) => (
							<MenuLink key={option.href} href={option.href}>
								<div className="bg-dark-blue px-3" onClick={onOptionClicked}>
									<div className="flex items-center ps-5 pt-4 pb-3 border-b border-blue hover:bg-blue hover:text-base hover:font-extrabold">
										<div className="grow">{option.label}</div>
										<MdOutlineKeyboardArrowRight />
									</div>
								</div>
							</MenuLink>
						))}
					</div>
				)}
			</div>
		</>
	)
}
