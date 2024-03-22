import React from 'react'
import { Hero } from '@/components/Hero'
import { IntroductionSection } from '@/components/IntroductionSection'
import { FeatureExamples } from '@/components/FeatureExamples'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Page() {
	console.log('Running on the server')
	console.log(process.env.NEXT_PUBLIC_APP_URL)
	return (
		<div className="flex flex-col">
			<Hero />
			<IntroductionSection/>
			<FeatureExamples/>
		</div>
	)
}
