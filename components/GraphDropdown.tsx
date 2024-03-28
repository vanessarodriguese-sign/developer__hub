'use client'
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { IconContext } from 'react-icons'
import MenuLink from './MenuLink'

interface GraphDropdownProps {
	title: string
  options: Array<{ label: string; href: string }>
  classNames: string
}

export default function GraphDropdown({ title, options, classNames }:GraphDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

	const toggling = () => {
		setIsOpen(!isOpen)
	}

	const onOptionClicked = () => {
		setIsOpen(false)
	}

	return (
    <div className='flex pb-5 text-base leading-26 text-dark-blue'>
      <div>
        <div className="relative z-50">
          <button className="cursor-pointer flex flex-row font-bold" onClick={toggling}>
            <div>{title}</div>
            <IconContext.Provider value={{ size: '1.6em', className: 'text-dark-gray'}}>
              <MdOutlineKeyboardArrowRight />
            </IconContext.Provider>
          </button>
        </div>

        {isOpen && (
          <div className={`absolute w-216 top-52 font-normal bg-white border border-blue ${classNames}`}>
            {options.map((option) => (
              <div key={option.label} className=''>
                <MenuLink  href={option.href}>
                  <button className="w-full hover:bg-dark-blue hover:font-bold hover:text-white" onClick={onOptionClicked}>
                    <div className="flex items-center border-b border-medium-gray pt-4 pb-3 mx-3 ">
                      <div className="grow text-left ps-4">{option.label}</div>
                      <div className='flex justify-center'>
                        <IconContext.Provider value={{ size: '1.4em', className: 'text-dark-gray hover:text-white'}}>
                          <MdOutlineKeyboardArrowRight />
                        </IconContext.Provider>
                      </div>
                    </div>
                  </button>
                </MenuLink>
              </div>
            ))}
          </div>
        )} 
      </div>
    </div>
  )
}