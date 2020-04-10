import React, { useState } from "react"

import Link from "next/link"
import NavbarButton from "./NavbarButton"
import { NextComponentType } from "next"

const linkStyle = {
    marginRight: 15,
}
const Navbar: NextComponentType = () => {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => setOpen(!open)

    return (
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                        <img className="h-8 w-auto sm:h-10" src="public/img/logo.png" alt="" />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4">
                <NavbarButton href="#" name="Music"></NavbarButton>
                <NavbarButton href="/tour" name="Tour"></NavbarButton>
                <NavbarButton href="#" name="Contact"></NavbarButton>
            </div>
        </nav>
    )
}
export default Navbar
