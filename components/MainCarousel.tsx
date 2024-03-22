import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { DarkButtonLarge } from './DarkButton';
// import { LogosCarousel } from './LogosCarousel';
import { LogoAnimation } from './LogoAnimation';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function MainCarousel() {
    const slides = [
        {
            url: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/Imac-white@2x.png',
            title: 'Request and manage electronic signatures',
            subtitle: 'Header H2',
						width: '645px',
						height: '593px'
        },
        {
            url: 'https://pub-531fb711a1e749c0970b273ab0ee90ec.r2.dev/api-dev-illo@2x.png',
            title: 'Request and manage electronic signatures',
            subtitle: 'Example',
						width: '600px',
						height: '461px'
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
			}, 5000); // Change slide every 5 seconds

			return () => { clearInterval(interval); };
		}, );


    return (
			<>
				<div className="bg-gradient-to-b from-gray to-light-gray flex-col">
					<div className="px-32 relative h-548 flex flex-row flex-grow items-center pb-3">
						<div className="absolute top-[50%] -translate-x-0 transla-y-[-50%] left-14 text-5xl text-blue cursor-pointer">
							<BsChevronLeft onClick={prevSlide} size={32} />
						</div>
						<div className="flex flex-col w-475 top-44">
							<h1 className='pb-1'>{slides[currentIndex].title}</h1>
							<h2 className="pb-5">{slides[currentIndex].subtitle}</h2>
							<div className='self-start'>
								<DarkButtonLarge
									href=""
									content="MAIN CTA"
								/>
							</div>
						</div>
						<div className='w-645 grow flex items-center justify-center'>
							<div className="w-full bg-center bg-cover"
								style={{
									backgroundImage: `url(${slides[currentIndex].url})`,
									width: slides[currentIndex].width,
									height: slides[currentIndex].height
								}}>
							</div>
						</div>
						<div className="absolute top-[50%] -translate-x-0 transla-y-[-50%] right-14 text-5xl text-blue cursor-pointer">
								<BsChevronRight onClick={nextSlide} size={32} />
						</div>
					</div>
					<div className="flex items-center justify-center pt-3 px-56 flex-grow flex-row">
						<div className='px-16 h-28 bg-gradient-to-r from-light-gray to-white bg-opacity-50'>
						</div>
						<div className="w-944 h-28 pt-5 bg-white grow">
							<LogoAnimation/>
						</div>
						<div className='px-16 h-28 bg-gradient-to-l from-light-gray to-white bg-opacity-80'>
						</div>
					</div>			
				</div>
				
			</>
    );
}
