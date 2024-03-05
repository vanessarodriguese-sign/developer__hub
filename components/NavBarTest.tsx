'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import EsignLogoD from '@/assets/esign-logo-desktop.svg'
import EsignMenuM from '@/assets/e-sign-mobile-menu.svg'
import ArrowRight from '@/assets/arrow-right.svg'
import { MainButton } from './MainButton'
import NavBarLink from './NavBarLink'
import MenuLink from './MenuLink'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function NavBarTest () {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleDropDownToggle = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }

  return (
    <nav className='bg-dark-blue navbar-links'>
      <div className='flex flex-row pt-10 pb-12 items-center'>
        <div className='px-127'>
          <Image
            data-testid='logo'
            className=''
            src={EsignLogoD}
            alt='Esign Logo'
            width={150.71}
            height={51}
          />
        </div>
        <div className='hidden lg:flex flex-grow items-center' data-testid='navbar-links'>
          {/* For large screens (md and lg) */}
          <div className='flex-grow'>
            <NavBarLink href='/' label='GET STARTED'/>
          </div>
          <div className='flex-grow'>
            <NavBarLink href='' label='API REFERENE'/>
          </div>
          <div className='flex-grow'>
            <NavBarLink href='' label='API GUIDES'/>
          </div>
          <div className='flex-grow'>
            <NavBarLink href='' label='API DEMO'/>
          </div>
          <div className='flex-grow'>
            <NavBarLink href='' label='SUPPORT'/>
          </div>
          <div className='flex-grow'>
            <NavBarLink href='' label='CHANGELOG'/>
          </div>
        </div>
        <div className='hidden lg:flex flex-row ml-auto items-center ps-6 pe-123 gap-4'>
          <MainButton
            href=''
            content='LOGIN'
            bg='bg-light-blue'
            color='text-dark-blue'
            borderColor='border-dark-blue'
          />
          <MainButton
            href=''
            content='CONTACT US'
            bg='bg-dark-blue'
            color='text-white'
            borderColor='border-blue'
          />
        </div>
        <div className='lg:hidden ml-auto'>
          <Dropdown>
            <DropdownTrigger>
              <button
                onClick={handleDropDownToggle}
                className='text-white pe-5 pb-6'
              >
                <Image
                  data-testid='menu'
                  className=''
                  src={EsignMenuM}
                  alt='Esign Menu'
                  width={28}
                  height={20}
                />
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className='border border-blue flex px-3 bg-dark-blue w-52'>
              <DropdownItem key='' className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex justify-between items-center'>
                  <div className='flex-grow'>
                    <MenuLink href='/' label='GET STARTED'/>
                  </div>
                  <div>
                    <Image
                      className=''
                      src={ArrowRight}
                      alt='Arrow Right'
                      width={10}
                      height={6}
                    />
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem key='' className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center'>
                  <MenuLink href='/' label='API REFERENCE'/>
                  <Image
                    className=''
                    src={ArrowRight}
                    alt='Arrow Right'
                    width={10}
                    height={6}
                  />
                </div>
              </DropdownItem>
              <DropdownItem key='' className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center'>
                  <MenuLink href='/' label='API GUIDES'/>
                  <Image
                    className=''
                    src={ArrowRight}
                    alt='Arrow Right'
                    width={10}
                    height={6}
                  />
                </div>
              </DropdownItem>
              <DropdownItem key='' className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center'>
                  <MenuLink href='/' label='API DEMO'/>
                  <Image
                    className=''
                    src={ArrowRight}
                    alt='Arrow Right'
                    width={10}
                    height={6}
                  />
                </div>
              </DropdownItem>
              <DropdownItem key='' className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center'>
                  <MenuLink href='/' label='SUPPORT'/>
                  <Image
                    className=''
                    src={ArrowRight}
                    alt='Arrow Right'
                    width={10}
                    height={6}
                  />
                </div>
              </DropdownItem>
              <DropdownItem key='' className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center'>
                  <MenuLink href='/' label='CHANGELOG'/>
                  <Image
                    className=''
                    src={ArrowRight}
                    alt='Arrow Right'
                    width={10}
                    height={6}
                  />
                </div>
              </DropdownItem>
            </DropdownMenu>
            {/* {isDropDownOpen && <DropDown/>} */}
          </Dropdown>
        </div>
      </div>
    </nav>
  )
}
