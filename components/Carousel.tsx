// MainCarousel.jsx

'use client'
import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { MainButton } from './MainButton'
import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function MainCarousel() {
	const slides = [
		{
			url: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Imac-white@2x.png',
		},
		{
			url: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/api-dev-illo@2x.png',
		},
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	return (
		<div className="bg-gradient-to-b from-gray to-white flex-col">
			<div className=" pb-11 pt-14 px-14 relative flex flex-row flex-grow items-center">
				<div className="absolute top-[50%] -translate-x-0 transla-y-[-50%] left-5 text-5xl text-blue cursor-pointer">
					<BsChevronLeft onClick={prevSlide} size={32} />
				</div>
				<div className="flex flex-col w-475 items-center ms-14">
					<h1>Request and manage electronic signatures</h1>
					<h2 className="pb-5">Header H2</h2>
					<MainButton
						href=""
						content="MAIN CTA"
						bg="bg-dark-blue"
						color="text-white"
						borderColor="border-blue"
						textSize="text-15"
						lineHeight="leading-5"
						paddingX="px-7"
						paddingY="py-2"
					/>
				</div>
				<div className="w-645 me-14">
					<div
						className="h-full bg-center bg-cover"
						style={{
							backgroundImage: `url(${slides[currentIndex].url})`,
							width: '600px',
							height: '461px',
						}}
					></div>
				</div>
				<div className="absolute top-[50%] -translate-x-0 transla-y-[-50%] right-5 text-5xl text-blue cursor-pointer">
					<BsChevronRight onClick={nextSlide} size={32} />
				</div>
			</div>

			<div className="flex items-center justify-center">
				<div className="flex flex-row w-886 px-8 py-3 gap-3 justify-between bg-white">
					<Image
						className="items-center"
						src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/beyondly-mono.svg"
						alt=""
						width={100}
						height={80}
					/>
					<Image
						className="items-center"
						src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/evensure-mono.svg"
						alt=""
						width={100}
						height={80}
					/>
					<Image
						className="items-center"
						src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/uk-fuels-mono.svg"
						alt=""
						width={100}
						height={80}
					/>
					<Image
						className="items-center"
						src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/wanderlands-mono.svg"
						alt=""
						width={100}
						height={80}
					/>
				</div>
			</div>
		</div>
	)
}
