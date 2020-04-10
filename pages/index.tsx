import React, { useState } from "react"

import Layout from "../components/Layout"
import Link from "next/link"
import Navbar from "../components/Navbar"
import NavbarButton from "../components/NavbarButton"
import { NextPage } from "next"
import PropTypes from "prop-types"
import SocialMedia from "../components/SocialMedia"

const Home: NextPage = () => {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => setOpen(!open)

    return (
        <Layout>
            <div className="relative bg-carbon-900 overflow-hidden">
                <div className="max-w-screen-xl mx-auto ">
                    <div className="relative z-10 pb-8 bg-carbon-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <div className="pt-6 px-4 sm:px-6 lg:px-8">
                            <Navbar></Navbar>
                        </div>

                        <div>
                            <div className={`rounded-lg shadow-md ${open ? "" : "hidden"}`}>
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
                                                <svg
                                                    className="h-6 w-6"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
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

                        <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl text-red-100">
                                    DROWN THE
                                    <span className="text-red-600"> SUN</span>
                                </h2>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Drown the Sun ist eine Metal-Band aus Nürnberg, die 2016 von Bernhard Leupold.
                                    Daniele Forestieri, Jannik Kolb, Merlin Hattermann und Robert Schmidt gegründet
                                    wurde.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium -md text-red-700 bg-red-100 hover:text-red-600 hover:bg-red-50 focus:outline-none focus:shadow-outline focus:border-red-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                                        >
                                            Listen
                                        </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                                        >
                                            Pre-Order Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-carbon-900 transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://res.cloudinary.com/chronark/image/upload/v1586181084/dts_all_cppvki.jpg"
                        alt=""
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Home
