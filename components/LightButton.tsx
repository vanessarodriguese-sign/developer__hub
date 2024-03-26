import React from 'react'

interface LightButtonProps {
	href: string
	content: string
	classNames?: string
}

export function LightButton({ href, content, classNames }:LightButtonProps) {
	return (
    <a href={href}>
      <div className={`light-button border rounded bg-light-blue text-dark-blue border-dark-blue ${classNames}`}>
        {content}
      </div>
    </a>

	)
}

export function LightButtonExtraLarge({ href, content }: LightButtonProps) {
  return (
    <LightButton 
			href={href} 
			content={content} 
			classNames='text-15 leading-5 px-14 py-2 font-semibold hover:bg-dark-blue hover:font-extrabold hover:text-white hover:px-16'
		/>
  )
}

export function LightButtonLarge({ href, content }: LightButtonProps) {
  return (
    <LightButton 
			href={href} 
			content={content} 
			classNames='text-15 leading-5 px-8 py-3 font-extrabold'
		/>
  );
}

export function LightButtonMedium({ href, content }: LightButtonProps) {
  return (
    <LightButton 
			href={href} 
			content={content} 
			classNames='text-sm leading-19 px-7 py-2 font-extrabold'
		/>
  );
}

export function LightButtonSmall({ href, content }: LightButtonProps) {
  return (
    <LightButton 
			href={href} 
			content={content} 
			classNames='text-xs leading-6 px-7 py-2 font-extrabold'
		/>
  );
}
