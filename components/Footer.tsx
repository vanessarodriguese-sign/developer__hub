import React from 'react'
import Image from 'next/image'
import NavBarLink from './NavBarLink'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Footer() {
	return (
		<div className="bg-dark-blue ">
			{/* Desktop */}
			<div className="hidden lg:flex lg:flex-col lg:px-123">
				<div className="flex flex-row border-b border-blue pb-6 pt-8 flex-grow flex-1 px-52 text-blue">
					<p className="grow font-extrabold">
						<NavBarLink href="" label="DEVELOPER HOME" />
					</p>
					<p className="grow font-extrabold">
						<NavBarLink href="/ApiReference" label="API REFERENCE" />
					</p>
					<p className="grow font-extrabold">
						<NavBarLink href="/ApiGuides" label="API GUIDES" />
					</p>
					<p className="grow font-extrabold">
						<NavBarLink href="/ApiDemo" label="API DEMO" />
					</p>
					<p className="font-extrabold">
						<NavBarLink href="/Support" label="SUPPORT" />
					</p>
				</div>
				<div className="flex flex-row text-white pt-11 pb-6">
					<div className="pe-14">
						<Image
							className="grow"
							src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/esign-logo-desktop.svg"
							alt="Esign Logo"
							width={151}
							height={51}
						/>
					</div>
					<div className="flex-grow">
						<h5 className="leading-5 font-bold">UK</h5>
						<div className="text-sm">
							<div>12 Princes Dock, Liverpool</div>
							<div>L3 1BG </div>
							<div>E-Sign (UK) Itd © 2024 </div>
							<div>Company No. 07937425</div>
							<div>VAT No. 157595663</div>
						</div>
					</div>
					<div className="flex-grow">
						<h5 className="leading-5 font-bold">IoM</h5>
						<div className="text-sm">
							<div>50 Athol Street, Douglas</div>
							<div>Isle of Man, IM1 1JB</div>
							<div>E-Sign Ltd. © 2024</div>
							<div>Company Registration </div>
							<div>Number: 130978C</div>
						</div>
					</div>
					<div className="flex-grow">
						<h5 className="leading-5 font-bold">EU</h5>
						<div className="text-sm">
							<div>Five Lamps Place</div>
							<div>77-80 Amiens St</div>
							<div>Dublin 1</div>
							<div>Ireland</div>
						</div>
					</div>
					<div className="">
						<h5 className="leading-5 font-bold">US</h5>
						<div className="text-sm">
							<div>Suite 8500 </div>
							<div>One World Trade Center</div>
							<div>New York, 10007</div>
							<div>United States</div>
						</div>
					</div>
				</div>
				<div className="flex flex-row justify-between pb-11 pt-6">
					<div className="flex flex-row w-560">
						<div className="flex-grow text-medium-gray text-sm leading-14">
							<div>© Copyright E-Sign . All Rights Reserved.</div>
						</div>
						<div className="flex-grow text-medium-gray text-sm leading-14">
							<div>Terms of use | Privacy</div>
						</div>
					</div>
					<div className="flex flex-row gap-6">
						<div className="">
							<Image
								className=""
								src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/facebooklogo.svg"
								alt=""
								width={27}
								height={27}
							/>
						</div>
						<div className="">
							<Image
								className=""
								src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/xlogo.svg"
								alt=""
								width={27}
								height={27}
							/>
						</div>
						<div className="">
							<Image
								className=""
								src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/linkedinlogo.svg"
								alt=""
								width={27}
								height={27}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile */}
			<div className="flex flex-col lg:hidden items-center text-medium-gray">
				<div className="flex flex-col w-318 py-8 items-center lg:flex-row lg:pt-11 lg:pb-8">
					<div className="pb-2">
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
					<div className="flex flex-row gap-6">
						<div className="">
							<Image
								className=""
								src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/facebooklogo.svg"
								alt=""
								width={27}
								height={27}
							/>
						</div>
						<div className="">
							<Image
								className=""
								src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/xlogo.svg"
								alt=""
								width={27}
								height={27}
							/>
						</div>
						<div className="">
							<Image
								className=""
								src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/linkedinlogo.svg"
								alt=""
								width={27}
								height={27}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
