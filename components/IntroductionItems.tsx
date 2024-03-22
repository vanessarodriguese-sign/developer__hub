import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { IconContext } from 'react-icons'

interface IntroductionItemsProps {
  label: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function IntroductionItems({ label }: IntroductionItemsProps) {
	return (
    <>
      <IconContext.Provider value={{ size: '0.8em', className: 'text-blue' }}>
        <GoDotFill />
      </IconContext.Provider>
      <h5 className="ps-1 text-black opacity-100">{label}</h5>
    </>
	)
}
