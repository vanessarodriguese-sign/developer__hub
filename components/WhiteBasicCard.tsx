import React from 'react'
import Image from 'next/image'
import { DarkButtonMedium } from './DarkButton'

interface WhiteBasicCardProps {
  src: string;
  title: string;
  description: string;
  buttonContent: string;
  buttonLink: string;
}

export default function WhiteBasicCard({ src, buttonLink, buttonContent, description, title }: WhiteBasicCardProps) {
	const lg = true
	const height = lg ? 298 : 189
	const width = lg ? 475 : 302
  
  return (
    <>
      {/* Mobile */}
      <div className='flex lg:hidden md:hidden'>
        <div className='flex flex-col px-9 bg-white'>
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
        <div className='flex flex-row flex-grow px-32 py-12 md:ps-10 md:pe-11 justify-between bg-white'>
          <Image
            className=""
            src={src}
            alt=""
            width={width}
            height={height}
          />
          <div className='w-550'>
            <div className='pt-16'>
              <h2 className='pb-1'>{title}</h2>
              <h5 className='pb-3'>{description}</h5>
            </div>
            <div className='inline-block pb-16'>
              <DarkButtonMedium href={buttonLink} content={buttonContent}/>
            </div>
          </div>
        </div>
      </div>
    </>
	)
}
