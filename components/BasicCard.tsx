import React from 'react'
import Image from 'next/image'
import { DarkButtonMedium } from './DarkButton'

interface BasicCardProps {
  src: string;
  title: string;
  description: string;
  buttonContent: string;
  buttonLink: string;
  height: number;
  width: number;
  classNames: string;
}

export default function BasicCard({ classNames, src, buttonLink, buttonContent, height, width }: BasicCardProps) {
	return (
    <div className={`flex flex-col bg-light-gray px-9 ${classNames}`}>
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
        <h2 className='pb-1'>Changelog</h2>
        <h5 className='pb-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
          et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
          Stet clita kasd gubergren.
        </h5>
      </div>
      <div className='self-start pb-14'>
        <DarkButtonMedium href={buttonLink} content={buttonContent}/>
      </div>
    </div>
	)
}
