import React, { useState } from "react"

import HeroNavbar from "../components/HeroNavbar"
import Layout from "../components/Layout"
import { NextPage } from "next"
import SocialMedia from "../components/SocialMedia"

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="relative overflow-hidden bg-carbon-900">
                <div className="mx-auto max-w-screen-xl">
                    <div className="relative z-10 flex flex-col min-h-screen pb-8 bg-carbon-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28">
                        <HeroNavbar></HeroNavbar>

                        <div className="flex flex-grow px-4 mx-auto mt-10 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="flex-grow">
                                <div className="h-full sm:text-center lg:text-left">
                                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 text-red-100 leading-10 sm:text-5xl sm:leading-none md:text-6xl">
                                        DROWN THE
                                        <span className="text-red-600"> SUN</span>
                                    </h2>
                                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        Drown the Sun ist eine Metal-Band aus Nürnberg, die 2016 von Bernhard Leupold.
                                        Daniele Forestieri, Jannik Kolb, Merlin Hattermann und Robert Schmidt gegründet
                                        wurde.
                                    </p>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-sm ">
                                            <a
                                                href="#"
                                                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-900 border border-transparent shadow leading-6 transition duration-150 ease-in-out bg-carbon-50 hover:text-black hover:shadow-glow hover:bg-white focus:outline-none focus:shadow-outline focus:border-red-300 md:py-4 md:text-lg md:px-10"
                                            >
                                                Listen
                                            </a>
                                        </div>
                                        <div className="mt-3 rounded-sm sm:mt-0 sm:ml-3">
                                            <a
                                                href="#"
                                                className="flex items-center justify-center w-full px-8 py-3 text-base text-black bg-red-600 border border-transparent leading-6 transition duration-150 ease-in-out font-medium-md hover:bg-red-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
                                            >
                                                Pre-Order Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center -mt-4 lg:justify-start items-between">
                                    <SocialMedia></SocialMedia>
                                </div>
                            </div>
                        </div>
                        <svg
                            className="absolute inset-y-0 right-0 hidden w-48 h-full transform translate-x-1/2 lg:block text-carbon-900"
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
                        className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://res.cloudinary.com/chronark/image/upload/v1586181084/dts_all_cppvki.jpg"
                        alt=""
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Home
