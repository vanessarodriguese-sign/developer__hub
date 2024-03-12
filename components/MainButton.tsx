import React from 'react'

interface MainButtonProps {
  href: string
  content: string
  color: string
  bg: string
  borderColor: string
  width?: string
  height?: string
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function MainButton (props: MainButtonProps) {
  return (
    <a href={props.href}>
      <p
        className={`border rounded text-sm py-2 px-6 ${props.bg} ${props.color} ${props.borderColor}`}
        style={{ width: props.width, height: props.height }}
      >
        {props.content}
      </p>
    </a>
  )
}
