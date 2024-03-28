import React from 'react'
import Image from 'next/image'
import { DarkButtonMedium } from './DarkButton'

interface LightBasicCardProps {
  src: string;
  title: string;
  description: string;
  buttonContent: string;
  buttonLink: string
}

export default function LightBasicCard({ src, buttonLink, buttonContent, description, title }: LightBasicCardProps) {
  const lg = true
	const height = lg ? 298 : 189
	const width = lg ? 475 : 302

	return (
    <>
      {/* Mobile */}
      <div className='flex lg:hidden md:hidden'>
        <div className='flex flex-col px-9 bg-light-gray'>
          <div className='pt-12'>
            <Image
              className=""
              src={src}
              alt=""
              width={width}
              height={height}
            />
          </div>
          <div className='pt-6'>
            <h2 className='pb-1'>{title}</h2>
            <h5 className='pb-3'>{description}</h5>
          </div>
          <div className='self-start pb-14'>
            <DarkButtonMedium href={buttonLink} content={buttonContent}/>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className='hidden lg:flex lg:flex-grow md:flex md:flex-grow'>
        <div className='flex flex-row flex-grow px-32 md:ps-10 md:pe-11 py-12 justify-between bg-light-gray'>
          <div className='w-550'>
            <div className='pt-16'>
              <h2 className='pb-1'>{title}</h2>
              <h5 className='pb-3'>{description}</h5>
            </div>
            <div className='inline-block pb-16'>
              <DarkButtonMedium href={buttonLink} content={buttonContent}/>
            </div>
          </div>
          <Image
            className=""
            src={src}
            alt=""
            width={width}
            height={height}
          />
        </div>
      </div>
    </>
	)
}
