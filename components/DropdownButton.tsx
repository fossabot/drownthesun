import {Link} from "react-scroll"
import React from "react"
type Props = {
    name: string
    to: string
}

const DropdownButton = (props: Props) => (
    <Link  to={props.to}
    spy={true}
    smooth={true}
        className="block px-3 py-2 mt-1 text-base font-medium text-carbon-300 rounded-md hover:text-white hover:bg-carbon-700 focus:outline-none focus:text-white focus:bg-carbon-700"
            href=""
        >
            {props.name}
    </Link>
)

export default DropdownButton
