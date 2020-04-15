import React, { useState } from "react"

import DropdownButton from "./DropdownButton"
import Hamburger from "./Hamburger"
import NavbarButton from "./NavbarButton"
import NavbarDropdownMenu from "./NavbarDropdownMenu"
import { useRouter } from "next/router"

type Props = {
    desktopAlwaysOpen?: boolean
}
const Navbar = (props: Props) => {
    const router = useRouter()

    const [desktopOpen, setDesktopOpen] = useState(props.desktopAlwaysOpen || false)
    const [mobileOpen, setMobileOpen] = useState(false)

    const toggleMenu = () => {
        setDesktopOpen(!desktopOpen)
        setMobileOpen(!mobileOpen)
    }
    return (
        <>
            <div className="px-4 pt-6 sm:px-6 lg:px-8 ">
                <nav
                    className={`relative flex items-center justify-between sm:h-10 ${
                        router.pathname === "/" ? "lg:justify-start" : ""
                    }`}
                >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full sm:w-auto">
                            <a className="sm:hidden" href="#">
                                <img className="w-auto h-8 sm:h-10" src="/img/logo.png" alt="" />
                            </a>
                            <div className={`flex items-center -mr-2 ${props.desktopAlwaysOpen ? "sm:hidden" : ""}`}>
                                <Hamburger onClick={toggleMenu}></Hamburger>
                            </div>
                        </div>
                    </div>
                    <div
                        // menu navbar at the top
                        className={`hidden sm:block transform duration-500 transition ease-in-out opacity-0 md:ml-10 md:pr-4 z-0 ${
                            desktopOpen ? "opacity-100 " : "translate-x-20 lg:-translate-x-20 hidden"
                        }`}
                    >
                        <NavbarButton href="/" name="Home"></NavbarButton>
                        <NavbarButton href="#" name="Music"></NavbarButton>
                        <NavbarButton href="/tour" name="Tour"></NavbarButton>
                        <NavbarButton href="#" name="Contact"></NavbarButton>
                    </div>
                </nav>
            </div>

            <NavbarDropdownMenu open={mobileOpen}></NavbarDropdownMenu>
        </>
    )
}

export default Navbar
