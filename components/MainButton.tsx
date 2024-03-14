import React from 'react'

interface MainButtonProps {
  href: string
  content: string
  color: string
  bg: string
  borderColor: string
  textSize: string
  lineHeight: string
  paddingX: string
  paddingY: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function MainButton (props: MainButtonProps) {
  return (
    <a href={props.href}>
      <div
        className={`border rounded font-extrabold ${props.paddingX} ${props.paddingY} ${props.lineHeight} ${props.textSize} ${props.bg} ${props.color} ${props.borderColor}`}
      >
        {props.content}
      </div>
    </a>
  )
}
