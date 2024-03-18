import React from 'react'
import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function ClientsLogo() {
	return (
    <div className='bg-white flex items-center justify-center'>
      <div className='flex flex-row w-886 px-8 py-3 gap-3 justify-between'>
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
	)
}
