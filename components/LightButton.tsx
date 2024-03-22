import React from 'react'

interface LightButtonProps {
	href: string
	content: string
	classNames?: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function LightButton({ href, content, classNames }:LightButtonProps) {
	return (
    <a href={href}>
      <div className={`light-button border rounded font-extrabold bg-light-blue text-dark-blue border-dark-blue ${classNames}`}>
        {content}
      </div>
    </a>

	)
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function LightButtonLarge({ href, content }: LightButtonProps) {
  return (
    <LightButton 
			href={href} 
			content={content} 
			classNames='text-15 leading-5 px-8 py-3'
		/>
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function LightButtonMedium({ href, content }: LightButtonProps) {
  return (
    <LightButton 
			href={href} 
			content={content} 
			classNames='text-sm leading-19 px-7 py-2'
		/>
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function LightButtonSmall({ href, content }: LightButtonProps) {
  return (
    <LightButton 
			href={href} 
			content={content} 
			classNames='text-xs leading-6 px-7 py-2'
		/>
  );
}
