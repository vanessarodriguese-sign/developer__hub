'use client'
import React from 'react'
import Image from 'next/image'
import EsignLogoD from '@/assets/esign-logo-desktop.svg'
import EsignMenuM from '@/assets/e-sign-mobile-menu.svg'
import ArrowRight from '@/assets/arrow-right.svg'
import { MainButton } from './MainButton'
import NavBarLink from './NavBarLink'
import { Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom-styles.css'

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
            <Dropdown.Toggle className='relative dropdown-toggle'>
              <Image
                data-testid='menu'
                className=''
                src={EsignMenuM}
                alt='Esign Menu'
                width={28}
                height={20}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu
              aria-label="Static Actions"
              className='bg-dark-blue'
            >
              <Dropdown.Item className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex justify-between items-center'>
                  <div className='flex-grow'>
                    <div>GET STARTED</div>
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
              </Dropdown.Item>
              <Dropdown.Item className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center'>
                  <div>API REFERENCE</div>
                  <Image
                    className=''
                    src={ArrowRight}
                    alt='Arrow Right'
                    width={10}
                    height={6}
                  />
                </div>
              </Dropdown.Item>
              <Dropdown.Item className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center'>
                  <div>API GUIDES</div>
                  <Image
                    className=''
                    src={ArrowRight}
                    alt='Arrow Right'
                    width={10}
                    height={6}
                  />
                </div>
              </Dropdown.Item>
              <Dropdown.Item className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center'>
                  <div>API DEMO</div>
                  <Image
                    className=''
                    src={ArrowRight}
                    alt='Arrow Right'
                    width={10}
                    height={6}
                  />
                </div>
              </Dropdown.Item>
              <Dropdown.Item className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center'>
                  <div>SUPPORT</div>
                  <Image
                    className=''
                    src={ArrowRight}
                    alt='Arrow Right'
                    width={10}
                    height={6}
                  />
                </div>
              </Dropdown.Item>
              <Dropdown.Item className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center'>
                  <div>CHANGELOG</div>
                  <Image
                    className=''
                    src={ArrowRight}
                    alt='Arrow Right'
                    width={10}
                    height={6}
                  />
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  )
}
