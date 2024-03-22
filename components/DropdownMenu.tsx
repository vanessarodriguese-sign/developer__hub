import React, { useState } from 'react'
import Image from 'next/image'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { IconContext } from 'react-icons'
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
					<div className="absolute -right-5 top-11 w-216 text-15 leading-26 md:text-xs text-white font-semibold border border-blue">
						{options.map((option) => (
							<div key={option.label} className=''>
								<MenuLink  href={option.href}>
									<button className="bg-dark-blue px-3  w-full" onClick={onOptionClicked}>
										<div className="flex items-center ps-5 pt-4 pb-3 md:py-3 border-b border-blue hover:bg-blue hover:text-base hover:font-extrabold md:hover:text-13 md:hover:leading-26">
											<div className="grow ">{option.label}</div>
											<div className='md:hidden'>
												<IconContext.Provider value={{ size: '1.6em'}}>
													<MdOutlineKeyboardArrowRight />
												</IconContext.Provider>
											</div>
											<div className='hidden md:block'>
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
