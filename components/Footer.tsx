import React from 'react'
import Image from 'next/image'
import EsignLogoD from '@/assets/esign-logo-desktop.svg'
import NavBarLink from './NavBarLink'
import './custom-styles.css'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Footer () {
  return (
    <div className='bg-dark-blue flex flex-col align-items-center'>
      <div className='flex flex-row px-32 border-b border-blue pb-6 pt-8 navbar-links w-1'>
        <div className='flex-grow'><NavBarLink href='' label='DEVELOPER HOME'/></div>
        <div className='flex-grow'><NavBarLink href='' label='API REFERENCE'/></div>
        <div className='flex-grow'><NavBarLink href='' label='API GUIDES'/></div>
        <div className='flex-grow'><NavBarLink href='' label='API DEMOS'/></div>
        <div className='flex-grow'><NavBarLink href='' label='SUPPORT'/></div>
      </div>
      <div className='flex flex-row w-1 pt-11 pb-8 text-white'>
        <div>
          <Image
            data-testid='logo'
            className='flex-grow pe-12'
            src={EsignLogoD}
            alt='Esign Logo'
            width={150.71}
            height={51}
          />
        </div>
        <div className='flex-grow'>
          <h5>UK</h5>
          <p>12 Princes Dock, Liverpool</p>
          <p>L3 1BG </p>
          <p>E-Sign (UK) Itd © 2024 </p>
          <p>Company No. 07937425</p>
          <p>VAT No. 157595663</p>
        </div>
        <div className='flex-grow'>
          <h5>IoM</h5>
          <p>50 Athol Street, Douglas</p>
          <p>Isle of Man, IM1 1JB</p>
          <p>E-Sign Ltd. © 2024</p>
          <p>Company Registration </p>
          <p>Number: 130978C</p>
        </div>
        <div className='flex-grow'>
          <h5>EU</h5>
          <p>Five Lamps Place</p>
          <p>77-80 Amiens St</p>
          <p>Dublin 1</p>
          <p>Ireland</p>
        </div>
        <div className='flex-grow'>
          <h5>US</h5>
          <p>Suite 8500   </p>
          <p>One World Trade Center</p>
          <p>New York, 10007</p>
          <p>United States</p>
        </div>
      </div>
      <div className='flex flex-row w-1 text-medium-gray'>
        <div className='flex-grow'>
          <p>© Copyright E-Sign . All Rights Reserved.</p>
        </div>
        <div className='flex-grow'>
          <p>Terms of use | Privacy</p>
        </div>
        <div className='flex-grow'></div>
      </div>
    </div>
  )
}
