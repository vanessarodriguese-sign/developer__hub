// MainCarousel.jsx

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom-styles.css'
import ImacWhiteD from '@/assets/Imac-white@2x.png'
import ApiDevIlloD from '@/assets/api-dev-illo@2x.png'
import { MainButton } from './MainButton'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function MainCarousel () {
  const [index, setIndex] = useState(0)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSelect = (selectedIndex) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setIndex(selectedIndex)
  }

  return (
    <div className='bg-gray carousel-container h-carousel'>
      <Carousel
        fade={false}
        interval={null}
        activeIndex={index}
        onSelect={handleSelect}
        className='d-flex'
      >
        <Carousel.Item className='carousel-item'>
          <div className='w-50 order-1'>
            <Carousel.Caption className='carousel-caption'>
              <h1 data-testid="cypress-title">Request and manage electronic signatures</h1>
              <h2>Header H2</h2>
              <MainButton
                href=''
                content='CONTACT US'
                bg='bg-dark-blue'
                color='text-white'
                borderColor='border-blue'
                width='160px'
                height='40px'
              />
            </Carousel.Caption>
          </div>
          <div className='w-50 order-2'>
            <Image
              data-testid=''
              className='w-full'
              src={ImacWhiteD}
              alt=''
              width={645}
              height={598}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <div className='w-50 order-1'>
            <Carousel.Caption className='carousel-caption'>
              <h1>Request and manage electronic signatures</h1>
              <h2>Header H2</h2>
              <MainButton href='' content='CONTACT US' bg='bg-dark-blue' color='text-white' borderColor='border-blue' />
            </Carousel.Caption>
          </div>
          <div className='w-50 order-2'>
            <Image
              data-testid=''
              className='w-full'
              src={ApiDevIlloD}
              alt=''
              width={600}
              height={643}
            />
          </div>
        </Carousel.Item>
        {/* ... (restante dos itens do Carousel) */}
      </Carousel>
    </div>
  )
}
