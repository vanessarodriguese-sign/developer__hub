import React from 'react'

interface DarkButtonProps {
  href: string
  content: string
	classNames?: string
}

function DarkButton({ href, content, classNames }: DarkButtonProps) {
  return (
    <a href={href}>
      <div className={`dark-button border rounded bg-dark-blue text-white border-blue ${classNames}`}>
        {content}
      </div>
    </a>
  );
}

export function DarkButtonLarge({ href, content }: DarkButtonProps) {
  return (
    <DarkButton 
			href={href} 
			content={content} 
			classNames='text-15 leading-5 px-8 py-3 font-extrabold'
		/>
  )
}

export function DarkButtonMedium({ href, content }: DarkButtonProps) {
  return (
    <DarkButton 
			href={href} 
			content={content} 
			classNames='text-sm leading-19 px-6 py-2 font-extrabold'
		/>
  )
}

export function DarkButtonSmall({ href, content }: DarkButtonProps) {
  return (
    <DarkButton 
			href={href} 
			content={content} 
			classNames='text-xs leading-6 px-7 py-2 font-extrabold'
		/>
  )
}