import { Link } from "react-scroll"
import React from "react"
type Props = {
    name: string
    to: string
}

const NavbarButton = (props: Props) => (
    <Link
        to={props.to}
        spy={true}
        smooth={true}
        className="ml-8 text-sm font-bold transition ease-in-out duration-250 text-carbon-200 hover:text-carbon-50 focus:outline-none"
        href=""
    >
        {props.name}
    </Link>
)

export default NavbarButton
