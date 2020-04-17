import { Link } from "react-scroll"
import React from "react"
type Props = {
    name: string
    to: string
}

const DropdownButton = (props: Props) => (
    <Link
        to={props.to}
        spy={true}
        smooth={true}
        className="block px-3 py-2 mt-1 text-base font-medium border-b rounded-sm text-carbon-800 hover:text-carbon-50 hover:bg-carbon-800 focus:outline-none focus:text-red-500 focus:bg-carbon-700 border-carbon-700"
        href=""
    >
        {props.name}
    </Link>
)

export default DropdownButton
