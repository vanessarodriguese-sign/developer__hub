'use client'
import React from 'react'
import Image from 'next/image'

import { DarkButtonMedium } from './DarkButton'
import { LightButtonMedium } from './LightButton'
import { IntroductionItems } from './IntroductionItems'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function IntroductionSection() {
	const labels = [
		{ label: 'Signing of documents'},
		{ label: 'Request signatures from multiple parties'},
		{ label: 'Multi-factor authentication'},
		{ label: 'Document process automation'},
		{ label: 'Live document tracking'}
	]

	return (
		<>
			{/* Mobile */}
			<div className="flex flex-col w-318 self-center lg:hidden">
				<div className="text-center pt-9">
					<h2>Header 2</h2>
					<h3>Header 3</h3>
				</div>
				<h5 className="pt-4 pb-4 text-black opacity-100">
					Integrate E-Sign’s secure API to your software and enhance agreement automation. Some of the
					features include:
				</h5>
				<div className="pb-4">
					{labels.map((item) => (
						<div key={item.label} className="flex flex-row items-center">
							<IntroductionItems label={item.label}/>
						</div>
					))}
				</div>
				<div className="pb-4 self-center">
					<Image
						className=""
						src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Dev-illo.png"
						alt=""
						width={305}
						height={176}
					/>
				</div>
				<div className="pb-5 text-black opacity-100">
					<h5>
						Here you’ll find guides to building your integration, and code examples that show you how to
						handle the most common scenarios.
					</h5>
				</div>
				<div className="flex flex-row justify-between pb-14">
					<div className="">
						<DarkButtonMedium
							href=""
							content="API GUIDES"
						/>
					</div>
					<div className="">
						<LightButtonMedium
							href=""
							content="API REFERENCE"
						/>
					</div>
				</div>
			</div>

			{/* Desktop */}
			<div className="hidden lg:flex lg:flex-row lg:flex-grow lg:pt-24 lg:px-32 lg:pb-28">
				<div className="w-475 self-center">
					<div className="">
						<h2 className="pb-2">Header 2</h2>
						<h3 className="pb-3">Header 3</h3>
					</div>
					<h5 className="pb-5 text-black opacity-100">
						Integrate E-Sign’s secure API to your software and enhance agreement automation. Some of the
						features include:
					</h5>
					<div className="ps-10 pe-20 pb-5">
						<div className="flex flex-col items-start pb-1">
							{labels.map((item) => (
								<div key={item.label} className="flex flex-row items-center">
									<IntroductionItems label={item.label}/>
								</div>
							))}
						</div>
					</div>

					<div className="pb-5 text-black opacity-100">
						<h5>
							Here you’ll find guides to building your integration, and code examples that show you how to
							handle the most common scenarios.
						</h5>
					</div>
					<div className="flex flex-row gap-4">
						<div className="">
							<DarkButtonMedium
								href=""
								content="API GUIDES"
							/>
						</div>
						<div className="">
							<LightButtonMedium
								href=""
								content="API REFERENCE"
							/>
						</div>
					</div>
				</div>
				<div className="ps-8 self-center pt-10 mx-auto text-center">
					<Image
						className=""
						src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Dev-illo@2x.png"
						alt=""
						width={613}
						height={353}
					/>
				</div>
			</div>  
    </>
	)
}
