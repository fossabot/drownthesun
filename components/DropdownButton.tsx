import Link from "next/link"
import React from "react"
type Props = {
    name: string
    href: string
}

const DropdownButton = (props: Props) => (
    <Link href={props.href}>
        <a className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
            {props.name}
        </a>
    </Link>
)

export default DropdownButton
