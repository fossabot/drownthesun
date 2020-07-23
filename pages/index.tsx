import React, { useState } from "react"
import path from "path"

import Headline from "../components/Headline"
import Layout from "../components/Layout"
import { ConcertType, concerts } from "../public/content/concerts"

import Navbar from "../components/Navbar"
import { NextPage } from "next"
import SocialMedia from "../components/SocialMedia"
import Tour from "../components/Tour"

interface Props {
    concerts?: ConcertType[]
}

const Home: NextPage<Props> = ({ concerts }) => {
    return (
        <Layout>
            <Navbar></Navbar>

            <section className="min-h-screen pt-16 overflow-hidden md:pt-0" id="index">
                <div className="relative z-10 flex flex-col min-h-screen pb-8 bg-carbon-900 lg:max-w-2xl lg:w-full lg:pb-28">
                    <div className="flex flex-grow max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="flex flex-col">
                            <div className="h-full sm:text-center lg:text-left">
                                <div className="md:mt-20">
                                    <Headline></Headline>
                                </div>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-sm ">
                                        <a
                                            href="https://open.spotify.com/artist/2yFB2TDFWStvT5nYj8g8Hc?si=ZfTcfzjERci_O825wNvwFw"
                                            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out border border-transparent shadow bg-carbon-50 hover:text-black hover:shadow-glow hover:bg-white focus:outline-none focus:shadow-outline focus:border-red-300 md:py-4 md:text-lg md:px-10"
                                            target="blank"
                                        >
                                            Listen
                                        </a>
                                    </div>
                                    <div className="mt-3 rounded-sm sm:mt-0 sm:ml-3">
                                        <a
                                            href=""
                                            className="flex items-center justify-center w-full px-8 py-3 text-base leading-6 text-black transition duration-150 ease-in-out bg-red-600 border border-transparent font-medium-md hover:bg-red-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
                                        >
                                            Pre-Order Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto mb-16 md:mb-8 lg:flex lg:justify-start lg:max-w-xs lg:mx-0">
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
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://res.cloudinary.com/chronark/image/upload/v1586181084/dts_all_cppvki.jpg"
                        alt=""
                    />
                </div>
            </section>
            <section className="min-h-screen pt-8 md:pt-40 bg-carbon-900" id="tour">
                <Tour concerts={concerts}></Tour>
            </section>
            <section>
                <div className="h-screen"></div>
            </section>
            <footer>Social links</footer>
        </Layout>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            concerts,
        },
    }
}

export default Home
