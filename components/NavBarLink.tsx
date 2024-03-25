import React from 'react'
import Link from 'next/link'

interface NavBarLinkProps {
	href: string
	label: string
	children?: React.ReactNode
}

export default function NavBarLink(props: NavBarLinkProps) {
	return (
		<Link href={props.href}>
			<span className="mb-1  border-transparent hover:border-b hover:border-blue hover:text-blue hover:font-extrabold">
				{props.label}
				{props.children}
			</span>
		</Link>
	)
}
