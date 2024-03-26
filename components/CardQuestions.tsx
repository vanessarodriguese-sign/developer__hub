import React from 'react'
import { LightButtonExtraLarge } from './LightButton';

export default function CardQuestions() {
	return (
    <div className='flex items-center justify-center'>
      <div className='px-9 text-center pt-11 flex flex-col'>
        <div className='px-9'>
          <h2 className='pb-5'>Frequently Asked Questions</h2>
          <div className='flex flex-col'>
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
    </div>
	)
}
