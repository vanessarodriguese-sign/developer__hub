import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { DarkButtonLarge } from './DarkButton';
import { LogoAnimation } from './LogoAnimation';

export function SmallerCarousel() {
    const slides = [
        {
            url: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Imac-white@2x.png',
            title: 'Request and manage electronic signatures',
            subtitle: 'Header H2',
						width: '319px',
						height: '293px'
        },
        {
            url: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/api-dev-illo@2x.png',
            title: 'Request and manage electronic signatures',
            subtitle: 'Example',
						width: '319px',
						height: '293px'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
		useEffect(() => {
			const interval = setInterval(() => {
					nextSlide();
			}, 5000);

			return () => { clearInterval(interval); };
		}, );


    return (
			<>
				<div className="md:block lg:hidden md:bg-gradient-to-b from-gray to-light-gray md:flex-col">
					{/* Tablet */}
          <div className="relative h-450 flex flex-row flex-grow items-center pb-3 ps-10 pe-11">
            <div className="absolute top-[50%] -translate-x-0 transla-y-[-50%] left-4 text-5xl text-blue cursor-pointer">
              <BsChevronLeft onClick={prevSlide} size={32} />
            </div>
            <div className="flex flex-col w-368 top-24 ps-5">
              <h1 className='pb-1'>{slides[currentIndex].title}</h1>
              <h2 className="pb-5">{slides[currentIndex].subtitle}</h2>
              <div className='self-start'>
                <DarkButtonLarge
                  href=""
                  content="MAIN CTA"
                />
              </div>
            </div>
            <div className='w-368 grow flex items-center justify-center'>
              <div className="w-full bg-center bg-cover"
                style={{
                  backgroundImage: `url(${slides[currentIndex].url})`,
                  width: slides[currentIndex].width,
                  height: slides[currentIndex].height
                }}>
              </div>
            </div>
            <div className="absolute top-[50%] -translate-x-0 transla-y-[-50%] right-4 text-5xl text-blue cursor-pointer">
                <BsChevronRight onClick={nextSlide} size={32} />
            </div>
          </div>
          <div className="flex items-center justify-center pt-3 ps-10 pe-11 ">
            <div className='w-full flex flex-grow flex-row'>
              <div className='px-4 h-18 bg-gradient-to-r from-light-gray to-white bg-opacity-80'>
              </div>
              <div className="w-368 h-14 pt-2 bg-white grow">
                <LogoAnimation/>
              </div>
              <div className='px-4 h-18 bg-gradient-to-l from-light-gray to-white bg-opacity-80'>
              </div>
            </div>
            
          </div>
				</div>				
			</>
    );
}
