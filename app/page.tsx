'use client'
import React from 'react'
import { Hero } from '@/components/Hero'
import { IntroductionSection } from '@/components/IntroductionSection'
import { FeatureExamples } from '@/components/FeatureExamples'
import { MainCarousel } from '../components/MainCarousel'
import { SmallerCarousel } from '../components/SmallerCarousel'

export default function Page() {
	console.log('Running on the server')
	console.log(process.env.NEXT_PUBLIC_APP_URL)
	return (
		<div className="flex flex-col">
			{/* Mobile */}
			<div className='md:hidden lg:hidden'>
				<Hero 
					title='Request and manage Electronic signatures' 
					subtitle='Header H2' 
					image='https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Imac-white@2x.png'
					width={319}
					height={293}
					classNames='px-9'
				/>
			</div>

			{/* Tablet */}
			<div className="hidden md:block lg:hidden">
				<SmallerCarousel />
			</div>

			{/* Desktop  */}
			<div className="hidden md:hidden lg:block">
				<MainCarousel />
			</div>
			<IntroductionSection/>
			<FeatureExamples/>
		</div>
	)
}
