import React from 'react'

interface LightButtonProps {
	href: string
	content: string
	classNames?: string
}

export function LightButton({ href, content, classNames }:LightButtonProps) {
	return (
    <a href={href}>
      <div className={`light-button border rounded font-extrabold bg-light-blue text-dark-blue border-dark-blue ${classNames}`}>
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
			classNames='text-15 leading-5 px-20 py-4'
		/>
  )
}

export function LightButtonLarge({ href, content }: LightButtonProps) {
  return (
    <LightButton 
			href={href} 
			content={content} 
			classNames='text-15 leading-5 px-8 py-3'
		/>
  );
}

export function LightButtonMedium({ href, content }: LightButtonProps) {
  return (
    <LightButton 
			href={href} 
			content={content} 
			classNames='text-sm leading-19 px-7 py-2'
		/>
  );
}

export function LightButtonSmall({ href, content }: LightButtonProps) {
  return (
    <LightButton 
			href={href} 
			content={content} 
			classNames='text-xs leading-6 px-7 py-2'
		/>
  );
}
