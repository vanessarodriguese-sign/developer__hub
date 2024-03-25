import React from 'react'
import Link from 'next/link'

interface MenuLinkProps {
	href: string
	children?: React.ReactNode
}

export default function MenuLink(props: MenuLinkProps) {
	return (
		<Link href={props.href}>
			<span className="">{props.children}</span>
		</Link>
	)
}
