import React, { useState } from "react"

import NavbarButton from "../components/NavbarButton"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => setOpen(!open)
    return (
        <>
            <div className="pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <a href="#">
                                <img className="h-8 w-auto sm:h-10" src="public/img/logo.png" alt="" />
                            </a>
                            <div className="-mr-2 flex items-center">
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
                    <div className={`hidden ${open ? "md:block" : ""} md:ml-10 md:pr-4`}>
                        <NavbarButton href="#" name="Music"></NavbarButton>
                        <NavbarButton href="/tour" name="Tour"></NavbarButton>
                        <NavbarButton href="#" name="Contact"></NavbarButton>
                    </div>
                </nav>
            </div>

            <div>
                <div className={`md:hidden rounded-lg shadow-md absolute w-full ${open ? "" : "hidden"}`}>
                    <div className="rounded-lg bg-white shadow-xs overflow-hidden m-4">
                        <div className="px-5 pt-4 flex items-center justify-between hidden">
                            <div>
                                <img className="h-8 w-auto" src="public/img/logo.png" alt="" />
                            </div>
                            <div className="-mr-2">
                                <button
                                    onClick={toggleMenu}
                                    type="button"
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
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
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                            >
                                Product
                            </a>
                            <a
                                href="#"
                                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                            >
                                Features
                            </a>
                            <a
                                href="#"
                                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                            >
                                Marketplace
                            </a>
                            <a
                                href="#"
                                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                            >
                                Company
                            </a>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="block w-full px-5 py-3 text-center font-medium text-red-600 bg-gray-50 hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:bg-gray-100 focus:text-red-700 transition duration-150 ease-in-out"
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
