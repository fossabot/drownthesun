import Link from "next/link"
import React from "react"
type Props = {
    name: string
    href: string
}

const NavbarButton = (props: Props) => (
    <Link href={props.href}>
        <a className="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
            {props.name}
        </a>
    </Link>
)

export default NavbarButton
