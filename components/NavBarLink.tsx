import React from 'react'
import Link from 'next/link'

interface NavBarLinkProps {
	href: string
	label: string
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function NavBarLink(props: NavBarLinkProps) {
	return (
		<Link href={props.href}>
			<span className="mb-1 border-b border-transparent hover:border-blue hover:text-blue hover:font-extrabold">{props.label}</span>
		</Link>
	)
}
