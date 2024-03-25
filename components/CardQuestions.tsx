import React from 'react'
import { DarkButtonExtraLarge } from './DarkButton';
import { LightButtonExtraLarge } from './LightButton';

export default function CardQuestions() {
	return (
    <div className='flex items-center justify-center'>
      <div className='w-318 text-center pt-11 flex flex-col'>
        <h2 className='pb-5'>Frequently Asked Questions</h2>
        <div className='flex flex-col w-224'>
          <DarkButtonExtraLarge href='' content='OVERVIEW'/>
          <LightButtonExtraLarge href='' content='API GUIDES'/>
          <LightButtonExtraLarge href='' content='DEMO GUIDES'/>
        </div>
      </div>
    </div>
	)
}
