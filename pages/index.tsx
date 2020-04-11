import React, { useState } from "react"

import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import { NextPage } from "next"
import PropTypes from "prop-types"
import SocialMedia from "../components/SocialMedia"

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="relative bg-carbon-900 overflow-hidden">
                <div className="max-w-screen-xl mx-auto ">
                    <div className="relative z-10 pb-8 bg-carbon-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <Navbar></Navbar>

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
