import React from 'react'
import Image from 'next/image'
import { DarkButtonLarge } from './DarkButton';

interface CardProps {
  src: string;
  alt: string;
  title: string;
  subTitle?: string;
  description: string;
  buttonContent: string;
  height: number;
  width: number
}

const cardData = [
  {
    src: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Signature-workflow-icon.png',
    alt: '',
    title: 'Signature workflow',
    subTitle: 'via Iframe',
    description: 'Use E-signs iframe functionality to generate envelopes from within your own system.',
    buttonContent: 'Create Agreement using Iframe',
    height: 62,
    width: 62
  },
  {
    src: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/esignature-icon.svg',
    alt: '',
    title: 'One Click Send and Sign',
    subTitle: '',
    description: 'Generate and sign an envelope in one click using API.',
    buttonContent: 'Click to sign agreement',
    height: 62,
    width: 88
  },
  {
    src: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/oauth-icon.svg',
    alt: '',
    title: 'Use OAuth 2 To Get Data',
    subTitle: '',
    description: 'Retrieve account data using E-signs OAuth functionality.',
    buttonContent: 'Sign in with OAuth',
    height: 62,
    width: 69
  },
]

export function FeatureCards() {
  return (
    <>
      {/* Mobile */}
      <div className="flex justify-center lg:hidden">
        <div className="flex flex-col px-9 gap-8 md:ps-10 md:pe-11 ">
          {cardData.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex lg:flex-row lg:gap-5">
        {cardData.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </div>
    </>
  );
}

export function FeatureCard({ src, alt, title, subTitle, description, buttonContent, height, width }: CardProps) {
	return (
    <div className="flex flex-col m-auto pt-8 items-center text-center bg-white rounded-xl w-302 lg:w-360 lg:h-350">
      <div className="grow items-center text-center pb-6">
        <Image className="items-center" src={src} alt={alt} width={width} height={height} />
      </div>
      <h3 className="text-center">{title}</h3>
      {subTitle !== undefined && subTitle !== null && 
        <h3 className="text-center pb-3">{subTitle}</h3>
      }
      <h5 className="text-center w-262 pb-6 text-black opacity-100">{description}</h5>
      <div className="pb-8">
        <DarkButtonLarge
          href=""
          content={buttonContent}
        />
      </div>
    </div>
  )
}
