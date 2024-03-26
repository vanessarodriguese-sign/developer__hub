import React from 'react'
import { Hero } from '@/components/Hero'
import CardQuestions from '@/components/CardQuestions'
import { Faq } from '@/components/Faq'
import BasicCard from '@/components/BasicCard'

export default function Support() {
	return (
		<div className="flex flex-col">
			<Hero 
				title='Developer Support' 
				subtitle='Header H2' 
				image='https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/dev-support-masthead-illo.svg'
				width={304}
				height={190}
				classNames='pt-8 px-9'
			/>
			<CardQuestions/>
			<Faq/>
			<BasicCard 
				src='https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/changelog-illo.svg'
				title='Changelog'
				description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
				At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.'
				buttonContent='CHANGELOG'
				buttonLink='/Changelog'
				height={189}
				width={302}
				classNames='bg-light-gray'
			/>
			<BasicCard
				src='https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/contact-us-illo.svg'
				title='Contact us'
				description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
				At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.'
				buttonContent='CONTACT US'
				buttonLink='/'
				height={189}
				width={302}
				classNames='bg-white'
			/>
		</div>
	)
}
