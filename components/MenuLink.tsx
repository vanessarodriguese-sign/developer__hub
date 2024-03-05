import React from 'react'
import Link from 'next/link'

interface MenuLinkProps {
  href: string
  label: string
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function MenuLink (props: MenuLinkProps) {
  return (
    <Link href={props.href}>
      <span className=''>{props.label}</span>
    </Link>
  )
}
