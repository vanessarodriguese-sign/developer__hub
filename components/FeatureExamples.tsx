import React from 'react'
import { FeatureCards } from './FeatureCards'

export function FeatureExamples() {
	return (
    <>
      {/* Mobile & tablet */}
      <div className="flex flex-col pb-14 items-center text-center bg-light-gray md:flex md:ps-10 md:pe-11 lg:hidden">
				<div className="flex flex-col px-9 pt-12 md:w-645 md:text-center">
					<h2 className="pb-1">Feature Examples</h2>
					<div className="pb-8 text-black opacity-100">
						<h5>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
							et justo duo dolores et ea rebum. Stet clita kasd gubergren,
						</h5>
					</div>
				</div>
        <FeatureCards/>
			</div>
      {/* Desktop */}
      <div className="hidden md:hidden flex-col text-center flex-grow bg-light-gray pt-24 px-32 pb-24 lg:flex ">
				<div className="flex flex-col grow items-center pb-6 w-740 self-center">
					<h2 className="pb-2">Feature Examples</h2>
						<div className="pb-2 text-black opacity-100">
							<h5>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
								et justo duo dolores et ea rebum. Stet clita kasd gubergren
							</h5>
						</div>
				</div>
        <FeatureCards/>	
			</div>
    </>
  )
}
