'use client'
import React from 'react'
import Image from 'next/image'
import { MainCarousel } from '../components/MainCarousel'
import { DarkButtonLarge } from './DarkButton'
import { LogoAnimation } from './LogoAnimation'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Hero() {
	return (
		<>
			{/* Mobile  */}
			<div className="flex items-center justify-center bg-gradient-to-b from-gray to-white lg:hidden ">
				<div className='w-318'>
					<div className="flex flex-col text-center items-center">
						<Image
							className="pb-4"
							src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Imac-white@2x.png"
							alt=""
							width={319}
							height={293}
						/>
						<h1 className="pb-1">Request and manage Electronic signatures</h1>
						<h2 className="pb-4" data-testid="cypress-title">
							Header H2
						</h2>
						<div className="pb-9">
							<DarkButtonLarge
								href=""
								content="MAIN CTA"
							/>
						</div>
					</div>
					<div className="flex">
						{/* <div className="flex flex-row py-3 bg-white w-full justify-between flex-grow">
							<LogoAnimation/>
						</div> */}

						<div className="flex items-center justify-center pt-3 flex-grow flex-row">
							<div className='px-4 h-14 bg-white bg-opacity-50'>
							</div>
							<div className="w-262 h-14 pt-2 bg-white grow">
								<LogoAnimation/>
							</div>
							<div className='px-4 h-14 bg-white bg-opacity-80'>
							</div>
					</div>
					</div>
				</div>
			</div>
			
			{/* Desktop  */}
			<div className="hidden lg:block">
				<MainCarousel />
			</div>
		</>
	)
}
