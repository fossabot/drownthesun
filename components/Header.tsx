import React, { useState } from "react"

import Link from "next/link"
import { NextComponentType } from "next"

const linkStyle = {
    marginRight: 15,
}
const Header: NextComponentType = () => {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => setOpen(!open)

    return (
        <nav className="bg-carbon-800 shadow-xl">
            <div className="container px-6 mx-auto lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex justify-between items-center flex-grow">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <h1 className="text-lg font-semibold tracking-widest text-white uppercase">
                                    <a href="#">Drown The Sun</a>
                                </h1>
                            </Link>
                        </div>
                        <div className="text-2xl font-bold text-carbon-200 md:text-3xl"></div>
                        <div className="md:hidden">
                            <button
                                type="button"
                                className="block text-carbon-200 hover:text-carbon-700 focus:text-carbon-700 focus:outline-none"
                                onClick={toggleMenu}
                            >
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    {open ? (
                                        <path d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
                                    ) : (
                                        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={`flex flex-col md:flex-row md:block -mx-2  ${open ? "block" : "hidden"}`}>
                        <div className="container px-6 mx-auto">
                            <a
                                href="#"
                                className="text-carbon-200 rounded hover:bg-carbon-900 hover:text-carbon-100 hover:font-medium py-2 px-2 md:mx-2"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-carbon-200 rounded hover:bg-carbon-900 hover:text-carbon-100 hover:font-medium py-2 px-2 md:mx-2"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="text-carbon-200 rounded hover:bg-carbon-900 hover:text-carbon-100 hover:font-medium py-2 px-2 md:mx-2"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header
