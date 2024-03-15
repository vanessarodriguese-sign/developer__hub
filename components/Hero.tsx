'use client'
import React from 'react'
import Image from 'next/image'
import { MainCarousel } from '../components/Carousel'
import { MainButton } from './MainButton'
import { GoDotFill } from 'react-icons/go'
import { IconContext } from 'react-icons'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Hero() {
	return (
		<div className="flex flex-col">
			<div className="hidden">
				<MainCarousel />
			</div>
			<div className="flex items-center justify-center bg-gradient-to-b from-gray to-white lg:hidden ">
				<div className="flex flex-col items-center text-center w-318">
					<Image
						className="pb-3"
						src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Imac-white@2x.png"
						alt=""
						width={319}
						height={293}
					/>
					<h1 className="pb-1">Request and manage Electronic signatures</h1>
					<h2 className="pb-4" data-testid="cypress-title">Header H2</h2>
					<div className="pb-8">
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
					<div className="pb-9">SPONSORS LOGOS</div>
				</div>
			</div>
			
			<div className="flex flex-col w-318 self-center lg:flex-row lg:py-20 lg:ps-123 lg:pe-20 lg:pb-24">
				<div className="text-center pt-9">
					<h2>Header 2</h2>
					<h3>Header 3</h3>
				</div>
				<h5 className="pt-3 pb-8">
					Integrate E-Sign’s secure API to your software and enhance agreement automation. Some of the
					features include:
				</h5>
				<div className="pb-3">
					<div className="flex flex-row items-center">
						<IconContext.Provider value={{ size: '0.8em', className: 'text-blue' }}>
							<GoDotFill />
						</IconContext.Provider>
						<h5 className="ps-1">Signing of documents</h5>
					</div>
					<div className="flex flex-row items-center">
						<IconContext.Provider value={{ size: '0.8em', className: 'text-blue' }}>
							<GoDotFill />
						</IconContext.Provider>
						<h5 className="ps-1">Request signatures from multiple parties</h5>
					</div>
					<div className="flex flex-row items-center">
						<IconContext.Provider value={{ size: '0.8em', className: 'text-blue' }}>
							<GoDotFill />
						</IconContext.Provider>
						<h5 className="ps-1">Document process automation</h5>
					</div>
					<div className="flex flex-row items-center">
						<IconContext.Provider value={{ size: '0.8em', className: 'text-blue' }}>
							<GoDotFill />
						</IconContext.Provider>
						<h5 className="ps-1">Live document tracking</h5>
					</div>
				</div>
				<div className="lg:hidden pb-4 self-center">
					<Image
						className=""
						src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Dev-illo.png"
						alt=""
						width={305}
						height={176}
					/>
				</div>
				<div className="pb-5">
					<h5>
						Here you’ll find guides to building your integration, and code examples that show you how to
						handle the most common scenarios.
					</h5>
				</div>
				<div className="flex flex-row gap-3 pb-12 lg:ps-6 lg:pe-123 lg:gap-4">
					<div className="grow">
						<MainButton
							href=""
							content="API GUIDES"
							bg="bg-dark-blue"
							color="text-white"
							borderColor="border-blue"
							textSize="text-sm"
							lineHeight="leading-19"
							paddingX="px-6"
							paddingY="py-2"
						/>
					</div>
					<div className="grow">
						<MainButton
							href=""
							content="API REFERENCE"
							bg="bg-light-blue"
							color="text-dark-blue"
							borderColor="border-dark-blue"
							textSize="text-sm"
							lineHeight="leading-19"
							paddingX="px-6"
							paddingY="py-2"
						/>
					</div>
				</div>
				<div className="hidden">
					<Image
						className="flex-grow pe-12"
						src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Imac-white@2x.png"
						alt="api doc"
						width={739}
						height={505}
					/>
				</div>
			</div>
			<div className="flex flex-col pb-16 items-center text-center bg-light-gray">
				<div className="flex flex-col w-318 pt-8 lg:pt-24 lg:px-123">
					<h2 className="pb-1">Feature Examples</h2>
					<div className="pb-6 lg:pb-6 lg:w-740">
						<h5>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
							et justo duo dolores et ea rebum. Stet clita kasd gubergren,
						</h5>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="flex flex-col w-318 gap-8 lg:flex-row lg:px-123 lg:gap-5">
						<div className="flex flex-col pt-8 lg:w-360 items-center text-center bg-white">
							<div className="grow items-center text-center pb-6">
								<Image
									className="items-center"
									src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Signature-workflow-icon.png"
									alt=""
									width={62}
									height={62}
								/>
							</div>
							<h3 className="text-center">Signature workflow</h3>
							<h3 className="text-center pb-3">via Iframe</h3>
							<h5 className="text-center w-262 pb-6">
								Use E-signs iframe functionality to generate envelopes from within your own system.
							</h5>
							<div className="pb-8">
								<MainButton
									href=""
									content="Create Agreement using Iframe"
									bg="bg-dark-blue"
									color="text-white"
									borderColor="border-blue"
									textSize="text-15"
									lineHeight="leading-5"
									paddingX="px-7"
									paddingY="py-3"
								/>
							</div>
						</div>
						<div className="flex flex-col pt-8 lg:w-360 items-center text-center bg-white">
							<div className="grow items-center text-center pb-6">
								<Image
									className="items-center"
									src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/esignature-icon.svg"
									alt="api doc"
									width={88}
									height={62}
								/>
							</div>
							<h3 className="text-center">One Click Send and Sign</h3>
							<h3 className="text-center pb-3"></h3>
							<h5 className="text-center w-262 pb-6">
								Generate and sign an envelope in one click using API.
							</h5>
							<div className="pb-8">
								<MainButton
									href=""
									content="Click to sign agreement"
									bg="bg-dark-blue"
									color="text-white"
									borderColor="border-blue"
									textSize="text-15"
									lineHeight="leading-5"
									paddingX="px-7"
									paddingY="py-3"
								/>
							</div>
						</div>
						<div className="flex flex-col pt-8 lg:w-360 items-center text-center bg-white">
							<div className="grow items-center text-center pb-6">
								<Image
									className="items-center"
									src="https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/oauth-icon.svg"
									alt="api doc"
									width={69}
									height={62}
								/>
							</div>
							<h3 className="text-center">Use OAuth 2 To Get Data</h3>
							<h3 className="text-center pb-3"></h3>
							<h5 className="text-center w-262 pb-6">
								Retrieve account data using E-signs OAuth functionality.
							</h5>
							<div className="pb-8">
								<MainButton
									href=""
									content="Sign in with OAuth"
									bg="bg-dark-blue"
									color="text-white"
									borderColor="border-blue"
									textSize="text-15"
									lineHeight="leading-5"
									paddingX="px-7"
									paddingY="py-3"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
