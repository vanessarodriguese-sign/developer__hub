import React, { useState } from 'react'
import Image from 'next/image'
import EsignMenuM from '@/assets/e-sign-mobile-menu.svg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function DropdownMenu () {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => { setIsOpen(!isOpen) }
  const onOptionClicked = (value) => () => {
    setSelectedOption(value)
    setIsOpen(false)
  }
  return (
    <>
      <div className='relative'>
        <button
          className='cursor-pointer'
          onClick={toggling}
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
        {isOpen && (
          <button onClick={onOptionClicked}>
            <div className='absolute right-0'>
              <div className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex justify-between items-center'>
                  <div className='flex-grow'>
                    <div>GET STARTED</div>
                  </div>
                  <MdOutlineKeyboardArrowRight/>
                </div>
              </div>
              <div className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center'>
                  <div>API REFERENCE</div>
                  <MdOutlineKeyboardArrowRight/>
                </div>
              </div>
              <div className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center'>
                  <div>API GUIDES</div>
                  <MdOutlineKeyboardArrowRight/>
                </div>
              </div>
              <div className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center'>
                  <div>API DEMO</div>
                  <MdOutlineKeyboardArrowRight/>
                </div>
              </div>
              <div className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center w-170'>
                  <div>SUPPORT</div>
                  <MdOutlineKeyboardArrowRight/>
                </div>
              </div>
              <div className='bg-dark-blue hover:bg-blue hover:font-extrabold text-white pt-4 pb-3 ps-5'>
                <div className='flex items-center'>
                  <div>CHANGELOG</div>
                  <MdOutlineKeyboardArrowRight/>
                </div>
              </div>
            </div>
          </button>
        )}
      </div>
    </>
  )
}
