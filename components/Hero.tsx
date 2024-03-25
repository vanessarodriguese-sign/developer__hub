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
				<div className='w-318'>
					<div className="flex flex-col text-center items-center">
						<Image
							className="pb-5"
							src={image}
							alt=""
							width={width}
							height={height}
						/>
						<h1 className="pb-1">{title}</h1>
						<h2 className="pb-4" data-testid="cypress-title">
							{subtitle}
						</h2>
						<div className="pb-8">
							<DarkButtonLarge
								href=""
								content="MAIN CTA"
							/>
						</div>
					</div>
					<div className="flex">
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
