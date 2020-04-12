import React, { useState } from "react"

import NavbarButton from "../components/NavbarButton"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => setOpen(!open)
    return (
        <>
            <div className="px-4 pt-6 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <a href="#">
                                <img className="w-auto h-8 sm:h-10" src="public/img/logo.png" alt="" />
                            </a>
                            <div className="flex items-center -mr-2">
                                <button
                                    onClick={toggleMenu}
                                    className={`z-10 inline-flex items-center justify-center block p-2 text-gray-400 transition duration-150 ease-in-out rounded-sm hover:text-gray-500 hover:bg-gray-100 hover:outline-none focus:outline-none ${ open ? "hidden md:block" : ""}`}
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
                        className={`hidden md:block transform duration-500 transition ease-in-out opacity-0 md:ml-10 md:pr-4 z-0 ${
                            open ? "opacity-100" : "translate-x-20 lg:-translate-x-20 "
                        }`}
                    >
                        <NavbarButton href="#" name="Music"></NavbarButton>
                        <NavbarButton href="/tour" name="Tour"></NavbarButton>
                        <NavbarButton href="#" name="Contact"></NavbarButton>
                    </div>
                </nav>
            </div>

            <div>
                <div
                    className={`md:hidden rounded-lg shadow-md absolute w-full transform duration-500 transition ease-in-out opacity-0 ${
                        open ? "opacity-100" : "-translate-y-20"
                    }`}
                >
                    <div className="m-4 overflow-hidden bg-white rounded-lg shadow-xs">
                        <div className="flex items-center justify-between hidden px-5 pt-4">
                            <div className="-mr-2">
                                <button
                                    onClick={toggleMenu}
                                    type="button"
                                    className={`inline-flex items-center justify-center p-2 text-black text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 ${open ? "hidden" : ""}`}
                                >
                                    <svg className="w-6 h-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-3">
                            <a
                                href="#"
                                className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                            >
                                Product
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                            >
                                Features
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                            >
                                Marketplace
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                            >
                                Company
                            </a>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="block w-full px-5 py-3 font-medium text-center text-indigo-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700"
                            >
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
