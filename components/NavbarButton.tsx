import Link from "next/link"
import React from "react"
type Props = {
    name: string
    href: string
}

const NavbarButton = (props: Props) => (
    <Link href={props.href}>
        <a className="ml-8 text-sm font-bold transition ease-in-out duration-250 text-carbon-200 hover:text-carbon-50 focus:outline-none">
            {props.name}
        </a>
    </Link>
)

export default NavbarButton
