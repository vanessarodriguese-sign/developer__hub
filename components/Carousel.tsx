// MainCarousel.jsx

'use client'
import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function MainCarousel () {
  const slides = [
    {
      url: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Imac-white@2x.png'
    },
    {
      url: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/api-dev-illo@2x.png'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className='max-w-[1366px] h-[652px] w-full m-auto py-16 px-4 relative group'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 transla-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronLeft onClick={prevSlide} size={30}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 transla-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronRight onClick={nextSlide} size={30}/>
        </div>

      </div>
    </div>
  )
}
