'use client'
import React from 'react'
import Image from 'next/image'
import { MainCarousel } from '../components/MainCarousel'
import { DarkButtonLarge } from './DarkButton'
import { LogoAnimation } from './LogoAnimation'
import { SmallerCarousel } from './SmallerCarousel'

interface HeroProps {
	title: string
	subtitle: string
	classNames?: string
	image: string
	width: number
	height: number
}

export function Hero({ title, subtitle, image, width, height, classNames }:HeroProps) {
	return (
		<>
			{/* Mobile  */}
			<div className={`flex items-center justify-center bg-gradient-to-b from-gray to-white  md:hidden lg:hidden ${classNames}`}>
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
			
			{/* Tablet */}
			<div className="hidden md:block lg:hidden">
				<SmallerCarousel />
			</div>

			{/* Desktop  */}
			<div className="hidden md:hidden lg:block">
				<MainCarousel />
			</div>
		</>
	)
}
