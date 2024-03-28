import React from 'react'
import { Hero } from '@/components/Hero'
import CardQuestions from '@/components/CardQuestions'
import WhiteBasicCard from '@/components/WhiteBasicCard'
import LightBasicCard from '@/components/LightBasicCard'

export default function Support() {

	return (
		<div className="flex flex-col">
			<Hero 
				title='Developer Support' 
				subtitle='Header H2' 
				image='https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/dev-support-masthead-illo.svg'
				width={570}
				height={358}
			/>
			<CardQuestions/>
			<LightBasicCard
				src='https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/changelog-illo.svg'
				title='Changelog'
				description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
				At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.'
				buttonContent='CHANGELOG'
				buttonLink='/Changelog'
			/>
			<WhiteBasicCard
				src='https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/contact-us-illo.svg'
				title='Contact us'
				description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
				At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.'
				buttonContent='CONTACT US'
				buttonLink='/'
			/>
		</div>
	)
}
