'use client'
import React from 'react'
import Image from 'next/image'
import { DarkButtonLarge } from './DarkButton'
import { LogoAnimation } from './LogoAnimation'

interface HeroProps {
	title: string
	subtitle: string
	image: string
	width: number
	height: number
}

export function Hero({ title, subtitle, image, width, height }:HeroProps) {
	return (
		<>
			{/* Mobile  */}
			<div className='flex items-center justify-center bg-gradient-to-b from-gray to-white pt-8 px-9 md:hidden lg:hidden'>
				<div className=''>
					<div className="flex flex-col text-center items-center">
						<Image
							className="w-auto"
							src={image}
							alt=""
							width={width}
							height={height}
						/>
						<h1 className="pt-5 pb-1">{title}</h1>
						<h2 className="pb-4" data-testid="cypress-title">
							{subtitle}
						</h2>
						<div className="pb-9">
							<DarkButtonLarge
								href=""
								content="MAIN CTA"
							/>
						</div>
					</div>
					<div className="flex items-center justify-center flex-grow flex-row">
						<div className='px-2 h-11 bg-white bg-opacity-80'>
						</div>
						<div className="w-262 h-11 bg-white grow">
							<LogoAnimation/>
						</div>
						<div className='px-2 h-11 bg-white bg-opacity-80'>
						</div>
					</div>
				</div>
			</div>

			{/* Desktop & Tablet */}
			<div 
				className={`lg:flex lg:flex-col lg:px-32 lg:pt-12 lg:justify-center lg:bg-gradient-to-b lg:from-gray lg:to-white hidden 
				md:flex md:flex-col md:ps-10 md:pe-11 md:pt-12 md:justify-center md:bg-gradient-to-b md:from-gray md:to-white`}
			>
				<div className='flex flex-row justify-between'>
					<div className="flex flex-col w-416 pt-32">
						<h1 className="pb-1">{title}</h1>
						<h2 className="pb-5">
							{subtitle}
						</h2>
						<div className="self-start">
							<DarkButtonLarge
								href=""
								content="MAIN CTA"
							/>
						</div>
					</div>
					<div className='pb-14'>
						<Image
							className="self-end"
							src={image}
							alt=""
							width={width}
							height={height}
						/>
					</div>
				</div>
				<div className="flex items-center justify-center flex-grow flex-row">
					<div className='px-2 h-11 bg-white bg-opacity-80'>
					</div>
					<div className="w-262 h-11 bg-white grow">
						<LogoAnimation/>
					</div>
					<div className='px-2 h-11 bg-white bg-opacity-80'>
					</div>
				</div>
			</div>
		</>
	)
}
