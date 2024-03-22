import React from 'react'
import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function SocialMediaLinks() {
  const links = [
    { src: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/facebooklogo.svg'},
    { src: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/xlogo.svg'},
    { src: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/linkedinlogo.svg'}
  ]
	return (
    <>
      <div className="flex flex-row gap-6 lg:flex lg:flex-row lg:gap-6 md:hidden">
        {links.map((link) => (
          <Image
            key= {link.src}
            src= {link.src}
            alt=''
            width={27}
            height={27}
          />
        ))}
      </div>
      <div className="md:flex md:flex-row md:gap-4 hidden lg:hidden">
        {links.map((link) => (
          <Image
            key= {link.src}
            src= {link.src}
            alt=''
            width={16}
            height={16}
          />
        ))}
      </div>
    </>
  )
}
