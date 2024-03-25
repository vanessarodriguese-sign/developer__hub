import React from 'react'

interface DarkButtonProps {
  href: string
  content: string
	classNames?: string
}

function DarkButton({ href, content, classNames }: DarkButtonProps) {
  return (
    <a href={href}>
      <div className={`dark-button border rounded font-extrabold bg-dark-blue text-white border-blue ${classNames}`}>
        {content}
      </div>
    </a>
  );
}

export function DarkButtonExtraLarge({ href, content }: DarkButtonProps) {
  return (
    <DarkButton 
			href={href} 
			content={content} 
			classNames='text-15 leading-5 px-20 py-4'
		/>
  )
}

export function DarkButtonLarge({ href, content }: DarkButtonProps) {
  return (
    <DarkButton 
			href={href} 
			content={content} 
			classNames='text-15 leading-5 px-8 py-3'
		/>
  )
}

export function DarkButtonMedium({ href, content }: DarkButtonProps) {
  return (
    <DarkButton 
			href={href} 
			content={content} 
			classNames='text-sm leading-19 px-7 py-2'
		/>
  )
}

export function DarkButtonSmall({ href, content }: DarkButtonProps) {
  return (
    <DarkButton 
			href={href} 
			content={content} 
			classNames='text-xs leading-6 px-7 py-2'
		/>
  )
}