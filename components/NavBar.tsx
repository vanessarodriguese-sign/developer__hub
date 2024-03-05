import React from 'react'
import Image from 'next/image'
import EsignLogoD from '@/assets/esign-logo-desktop.svg'
import { MainButton } from './MainButton'
import NavBarLink from './NavBarLink'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function NavBar () {
  return (
    <nav className='bg-dark-blue navbar-links'>
      <div className='flex flex-row pt-10 pb-12 items-center'>
        <div className='px-127'>
          <Image
            data-testid='logo'
            className=''
            src={EsignLogoD}
            alt="Esign Logo"
            width={150.71}
            height={51}
          />
        </div>
        <div className='flex flex-grow items-center' data-testid='navbar-links'>
          <NavBarLink href='/' label='GET STARTED'/>
          <NavBarLink href='' label='API REFERENCE'/>
          <NavBarLink href='' label='API GUIDES'/>
          <NavBarLink href='' label='API DEMO'/>
          <NavBarLink href='' label='SUPPORT'/>
          <NavBarLink href='' label= 'CHANGELOG'/>
        </div>
        <div className='flex flex-row ml-auto items-center ps-6 pe-123 gap-4'>
          <MainButton href='' content='LOGIN' bg ='bg-light-blue' color='text-dark-blue' borderColor='border-dark-blue'/>
          <MainButton href='' content='CONTACT US' bg ='bg-dark-blue' color='text-white' borderColor='border-blue'/>
        </div>
      </div>
    </nav>
  )
}
