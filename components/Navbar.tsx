import React, { useState } from "react"

import DropdownButton from "./DropdownButton"
import Link from "next/link"
import NavbarButton from "./NavbarButton"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => setOpen(!open)
    return (
        <nav className="bg-carbon-800">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/">
                            <a className="flex-shrink-0">
                                <img className="w-8 h-8" src="/img/logo.png" alt="Drown The Sun" />
                            </a>
                        </Link>
                        <div className="hidden md:block">
                            <div className="flex items-baseline ml-10">
                                <NavbarButton href="#" name="Music"></NavbarButton>
                                <NavbarButton href="/tour" name="Tour"></NavbarButton>
                                <NavbarButton href="#" name="Contact"></NavbarButton>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center ml-4 md:ml-6">
                            <button
                                className="p-1 text-gray-400 border-2 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                                aria-label="Notifications"
                            >
                                <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </button>
                            <div className="relative ml-3">
                                <div>
                                    <button
                                        onClick={toggleMenu}
                                        className="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
                                        id="user-menu"
                                        aria-label="User menu"
                                        aria-haspopup="true"
                                    >
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <div className="absolute right-0 w-48 mt-2 shadow-lg origin-top-right rounded-md">
                                    <div className="py-1 bg-white rounded-md shadow-xs">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Your Profile
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Settings
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Sign out
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mr-2 md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                        >
                            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path
                                    className={`inline-flex ${open ? "hidden" : "inline-flex"}`}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={`hidden ${!open ? "hidden" : "inline-flex"}`}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`hidden md:hidden ${open ? "block" : "hidden"}`}>
                <div className="px-2 pt-2 pb-3 sm:px-3">
                    <a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                        Team
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                        Projects
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                        Calendar
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 mt-1 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                        Reports
                    </a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
