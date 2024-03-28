import React from 'react'
import { LightButtonExtraLarge } from './LightButton';
import { Faq } from './Faq';

export default function CardQuestions() {
	return (
    <>
      {/* Mobile */}
      <div className='flex lg:hidden md:hidden'>
        <div className='flex justify-center flex-col px-9'>
          <div className='text-center pt-11 flex flex-col items-center '>
            <div className=''>
              <h2 className='pb-5'>Frequently Asked Questions</h2>
              <div className='flex flex-col items-center'>
                <div className='mb-7'>
                  <LightButtonExtraLarge href='/' content='OVERVIEW'/>
                </div>
                <div className='mb-7'>
                  <LightButtonExtraLarge href='/ApiGuides' content='API GUIDES'/>
                </div>
                <div className='mb-1'>
                  <LightButtonExtraLarge href='/ApiDemo' content='DEMO GUIDES'/>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-grow'>
            <Faq/>
          </div>
        </div>
      </div>
      
      {/* Desktop & Tablet */}
      <div className='hidden lg:flex lg:flex-grow md:flex md:flex-grow'>
        <div className='flex items-center flex-grow  lg:px-32 md:ps-10 md:pe-11'>
          <div className='flex flex-col pt-24 flex-grow'>
            <h2 className='pb-12'>Frequently Asked Questions</h2>

            <div className='flex flex-row mx-24 justify-between md:mx-8'>
              <div className='flex flex-col items-center me-20 w-60'>
                <div className='mb-7'>
                  <LightButtonExtraLarge href='/' content='OVERVIEW'/>
                </div>
                <div className='mb-7'>
                  <LightButtonExtraLarge href='/ApiGuides' content='API GUIDES'/>
                </div>
                <div className='mb-1'>
                  <LightButtonExtraLarge href='/ApiDemo' content='DEMO GUIDES'/>
                </div>
              </div>
              <Faq/>
            </div>
          </div>
        </div>
      </div>
      
    </>
	)
}
