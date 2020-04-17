import React, { useState } from "react"

import Headline from "../components/Headline"
import { Link } from "react-scroll"
import Navbar from "../components/Navbar"
import { NextPage } from "next"
import SocialMedia from "../components/SocialMedia"
import Tour from "../components/Tour"

const Home: NextPage = () => {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        setScrolled(window.pageYOffset > 50)
    }

    if (typeof window !== "undefined") {
        scrollY = window.pageYOffset
        window.addEventListener("scroll", handleScroll)
    }

    return (
        <div className="bg-carbon-900">
            <div className="mx-auto max-w-screen-xl">
                <div className="fixed z-50 ">
                    <div
                        className={`bg-carbon-900 left-0 w-screen h-20 fixed transform duration-1000 transition ease-in-out opacity-0 ${
                            scrolled ? "opacity-100" : "-translate-y-20"
                        }`}
                    ></div>
                        <Navbar></Navbar>
                </div>
                <section className="h-screen overflow-hidden" id="index">
                    <div className="">
                        <div className="relative z-10 flex flex-col min-h-screen pb-8 bg-carbon-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28">
                            <div className="flex flex-grow px-4 mx-auto mt-10 max-w-screen-xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="flex-grow">
                                    <div className="h-full sm:text-center lg:text-left">
                                        <div className="md:mt-20">
                                            <Headline></Headline>
                                        </div>
                                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                            <div className="rounded-sm ">
                                                <a
                                                    href="#tour"
                                                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-900 border border-transparent shadow leading-6 transition duration-150 ease-in-out bg-carbon-50 hover:text-black hover:shadow-glow hover:bg-white focus:outline-none focus:shadow-outline focus:border-red-300 md:py-4 md:text-lg md:px-10"
                                                >
                                                    Listen
                                                </a>
                                            </div>
                                            <div className="mt-3 rounded-sm sm:mt-0 sm:ml-3">
                                                <a
                                                    href=""
                                                    className="flex items-center justify-center w-full px-8 py-3 text-base text-black bg-red-600 border border-transparent leading-6 transition duration-150 ease-in-out font-medium-md hover:bg-red-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
                                                >
                                                    Pre-Order Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 flex justify-center mb-8 -mt-4 lg:justify-start items-between">
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
                </section>
                <section className="min-h-full min-h-screen pt-8 md:pt-40 bg-carbon-900" id="tour">
                    <Tour></Tour>
                </section>
                <footer>Social links</footer>
            </div>
        </div>
    )
}

export default Home
