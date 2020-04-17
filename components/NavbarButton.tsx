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
        duration={500}
        className="ml-8 text-sm font-bold transition ease-in-out duration-250 text-carbon-100 hover:text-white focus:outline-none"
        href=""
    >
        {props.name}
    </Link>
)

export default NavbarButton
