import React, { useState } from 'react'
import Image from 'next/image'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { IconContext } from 'react-icons'
import MenuLink from './MenuLink'

export function DropdownMenu() {
	const [isOpen, setIsOpen] = useState(false)


	const toggling = () => {
		setIsOpen(!isOpen)
	}

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
		{ label: 'LOG IN', href: '/Dashboard' },
		{ label: 'CONTACT US', href: '/' },
	]

	return (
		<>
			<div className="relative z-50">
				<div className='md:hidden'>
					<button className="cursor-pointer" onClick={toggling}>
						<Image
							data-testid="menu"
							className=""
							src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/e-sign-mobile-menu.svg"
							alt="Esign Menu"
							width={28}
							height={20}
						/>
					</button>
				</div>
				<div className='hidden md:block'>
					<button className="cursor-pointer" onClick={toggling}>
						<Image
							data-testid="menu"
							className=""
							src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/e-sign-mobile-menu.svg"
							alt="Esign Menu"
							width={18}
							height={14}
						/>
					</button>
				</div>

				{isOpen && (
					<div className="absolute -right-5 top-11 w-216 text-15 leading-26 md:text-xs md:top-5 md:right-4 text-white font-semibold border border-blue">
						{options.map((option) => (
							<div key={option.label} className=''>
								<MenuLink  href={option.href}>
									<button className="bg-dark-blue px-3 w-full" onClick={onOptionClicked}>
										<div className="flex items-center border-b border-blue hover:bg-blue hover:font-extrabold
											pt-4 pb-3 hover:text-base
										  md:font-semibold md:hover:text-13 md:py-3 md:pb-0 md:text-xs md:leading-26">
											<div className="grow text-left ps-2">{option.label}</div>
											<div className='md:hidden flex w-11 justify-center'>
												<IconContext.Provider value={{ size: '1.6em'}}>
													<MdOutlineKeyboardArrowRight />
												</IconContext.Provider>
											</div>
											<div className='hidden md:flex md:w-11 md:justify-center'>
												<IconContext.Provider value={{ size: '1.5em'}}>
													<MdOutlineKeyboardArrowRight />
												</IconContext.Provider>
											</div>
										</div>
									</button>
								</MenuLink>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	)
}
