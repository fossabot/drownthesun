import React, { useState } from "react"

import DropdownButton from "./DropdownButton"
import NavbarButton from "./NavbarButton"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => setOpen(!open)
    return (
        <>
            <div className="px-4 pt-6 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full sm:w-auto">
                            <a href="#">
                                <img className="w-auto h-8 sm:h-10" src="public/img/logo.png" alt="" />
                            </a>
                            <div className="flex items-center -mr-2">
                                <button
                                    onClick={toggleMenu}
                                    className={`z-50 inline-flex items-center justify-center block p-2 text-carbon-200 transition duration-150 ease-in-out rounded-sm hover:text-gray-500 hover:bg-gray-100 hover:outline-none focus:outline-none ${
                                        open ? "" : ""
                                    }`}
                                >
                                    <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
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
                    <div
                        // menu navbar at the top
                        className={`hidden sm:block transform duration-500 transition ease-in-out opacity-0 md:ml-10 md:pr-4 z-0 ${
                            open ? "opacity-100 " : "translate-x-20 lg:-translate-x-20 hidden"
                        }`}
                    >
                        <NavbarButton href="#" name="Music"></NavbarButton>
                        <NavbarButton href="/tour" name="Tour"></NavbarButton>
                        <NavbarButton href="#" name="Contact"></NavbarButton>
                    </div>
                </nav>
            </div>

            <div>
                <div className={`sm:hidden ${open ? "" : "hidden"} `}>
                    <div className="px-2 pt-2 pb-3 sm:px-3">
                        <DropdownButton href="#" name="Music"></DropdownButton>
                        <DropdownButton href="#" name="Tour"></DropdownButton>
                        <DropdownButton href="#" name="Contact"></DropdownButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
