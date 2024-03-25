import React from 'react'
import { Hero } from '@/components/Hero'
import CardQuestions from '@/components/CardQuestions'

export default function Support() {
	return (
		<div className="flex flex-col">
			<Hero 
				title='Developer Support' 
				subtitle='Header H2' 
				image='https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/dev-support-masthead-illo.svg'
				width={304}
				height={190}
				classNames='pt-11'
			/>
			<CardQuestions/>
		</div>
	)
}
