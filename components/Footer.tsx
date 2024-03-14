import React from 'react'
import Image from 'next/image'
import NavBarLink from './NavBarLink'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Footer () {
  return (
    <div className='bg-dark-blue flex flex-col items-center text-white'>
      <div className='hidden lg:flex lg:flex-row lg:px-32 lg:border-b lg:border-blue lg:pb-6 lg:pt-8 lg:w-1120'>
        <p className='flex-grow'><NavBarLink href='' label='DEVELOPER HOME'/></p>
        <p className='flex-grow'><NavBarLink href='' label='API REFERENCE'/></p>
        <p className='flex-grow'><NavBarLink href='' label='API GUIDES'/></p>
        <p className='flex-grow'><NavBarLink href='' label='API DEMOS'/></p>
        <p className='flex-grow'><NavBarLink href='' label='SUPPORT'/></p>
      </div>
      <div className='flex flex-col w-318 py-8 items-center lg:flex-row lg:w-1120 lg:pt-11 lg:pb-8'>
        <div className='pb-2'>
          <Image
            className='grow'
            src='https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/esign-logo-desktop.svg'
            alt='Esign Logo'
            width={151}
            height={51}
          />
        </div>
        <div className='hidden lg:flex-grow'>
          <h5>UK</h5>
          <h6>12 Princes Dock, Liverpool</h6>
          <h6>L3 1BG </h6>
          <h6>E-Sign (UK) Itd © 2024 </h6>
          <h6>Company No. 07937425</h6>
          <h6>VAT No. 157595663</h6>
        </div>
        <div className='hidden lg:flex-grow'>
          <h5>IoM</h5>
          <h6>50 Athol Street, Douglas</h6>
          <h6>Isle of Man, IM1 1JB</h6>
          <h6>E-Sign Ltd. © 2024</h6>
          <h6>Company Registration </h6>
          <h6>Number: 130978C</h6>
        </div>
        <div className='hidden lg:flex-grow'>
          <h5>EU</h5>
          <h6>Five Lamps Place</h6>
          <h6>77-80 Amiens St</h6>
          <h6>Dublin 1</h6>
          <h6>Ireland</h6>
        </div>
        <div className='hidden lg:flex-grow'>
          <h5>US</h5>
          <h6>Suite 8500   </h6>
          <h6>One World Trade Center</h6>
          <h6>New York, 10007</h6>
          <h6>United States</h6>
        </div>
        <div className='grow pb-3 text-sm leading-14 text-medium-gray'>
          <h6>Terms of use | Privacy</h6>
        </div>
        <div className='grow pb-6 text-sm leading-14 text-medium-gray'>
          <h6>© Copyright E-Sign . All Rights Reserved.</h6>
        </div>
        <div className='flex flex-row gap-6'>
          <div className=''>
            <Image
              className=''
              src='https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/facebooklogo.svg'
              alt=''
              width={27}
              height={27}
            />
          </div>
          <div className=''>
            <Image
              className=''
              src='https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/xlogo.svg'
              alt=''
              width={27}
              height={27}
            />
          </div>
          <div className=''>
            <Image
              className=''
              src='https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/linkedinlogo.svg'
              alt=''
              width={27}
              height={27}
            />
          </div>
        </div>
      </div>
      <div className=' hidden lg:flex lg:flex-row lg:w-1120 lg:text-medium-gray'>
        <div className='flex-grow'>
          <h6>© Copyright E-Sign . All Rights Reserved.</h6>
        </div>
        <div className='flex-grow'>
          <h6>Terms of use | Privacy</h6>
        </div>
        <div className='flex-grow'></div>
      </div>
    </div>
  )
}
