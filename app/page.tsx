import React from 'react'
import { Hero } from '@/components/Hero'
import { IntroductionSection } from '@/components/IntroductionSection'
import { FeatureExamples } from '@/components/FeatureExamples'

export default function Page() {
	console.log('Running on the server')
	console.log(process.env.NEXT_PUBLIC_APP_URL)
	return (
		<div className="flex flex-col">
			<Hero 
				title='Request and manage Electronic signatures' 
				subtitle='Header H2' 
				image='https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Imac-white@2x.png'
				width={319}
				height={293}
			/>
			<IntroductionSection/>
			<FeatureExamples/>
		</div>
	)
}
