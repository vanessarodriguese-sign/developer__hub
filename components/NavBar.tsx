import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import EsignLogoD from '@/assets/esign-logo-desktop.svg'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function NavBar () {
  return (
    <nav className='bg-dark-blue pt-14 pb-12'>
      <div className="flex row-auto text-white">
        <div className='mx-32 my-10'>
          <Image
            data-testid='logo'
            className=''
            src={EsignLogoD}
            alt="Esign Logo"
          />
        </div>
        <div className='flex row-auto gap-4 me-6 pt-14 pb-12' data-testid="navbar-links">
          <div><Link href="/" className='hover:underline'>GET STARTED</Link></div>
          <div><Link href="" className='hover:underline'>API REFERENCE</Link></div>
          <div><Link href="" className='hover:underline'>API GUIDES</Link></div>
          <div><Link href="" className='hover:underline'>API DEMOS</Link></div>
          <div><Link href="" className='hover:underline'>SUPPORT</Link></div>
          <div><Link href="">CHANGELOG</Link></div>
        </div>
        <div className='flex row-auto gap-4 me-6 pt-14 pb-12'>
          Buttons
        </div>
      </div>
    </nav>
  )
}
