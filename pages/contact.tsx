import React, { useState } from "react"

import Mailform from "../components/Mailform"
import Navbar from "../components/Navbar"
import { NextPage } from "next"
import SocialMedia from "../components/SocialMedia"

const Home: NextPage = () => {
    return (
    <Mailform></Mailform>
        // <div className="relative bg-carbon-900">
        //     <div className="max-w-screen-xl mx-auto">
        //         <div className="relative z-10 flex flex-col min-h-screen pb-8 bg-carbon-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28">
        //             <Navbar desktopAlwaysOpen={true}></Navbar>

        //             <div className="absolute flex h-screen bg-white">
        //                 <div className="flex items-center px-8 text-center lg:text-left md:px-12 lg:w-1/2">
        //                     <div>
        //                         <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
        //                             Build Your New <span className="text-indigo-600">Idea</span>
        //                         </h2>
        //                         <p className="mt-2 text-sm text-gray-500 md:text-base">
        //                             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum
        //                             cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem
        //                             tempora voluptates. Cumque debitis dignissimos id quam vel!
        //                         </p>
        //                         <div className="flex justify-center mt-6 lg:justify-start">
        //                             <a
        //                                 className="px-4 py-3 text-xs font-semibold text-gray-200 bg-gray-900 rounded hover:bg-gray-800"
        //                                 href="#"
        //                             >
        //                                 Get Started
        //                             </a>
        //                             <a
        //                                 className="px-4 py-3 mx-4 text-xs font-semibold text-gray-900 bg-gray-300 rounded hover:bg-gray-400"
        //                                 href="#"
        //                             >
        //                                 Learn More
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div
        //                     className="hidden bg-carbon-900 lg:block lg:w-1/2"
        //                     style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
        //                 >
        //                     <div className="flex items-center px-8 text-center lg:text-left md:px-12 lg:w-1/2">
        //                         <div>
        //                             <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
        //                                 Build Your New <span className="text-indigo-600">Idea</span>
        //                             </h2>
        //                             <p className="mt-2 text-sm text-gray-500 md:text-base">
        //                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum
        //                                 cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem
        //                                 tempora voluptates. Cumque debitis dignissimos id quam vel!
        //                             </p>
        //                             <div className="flex justify-center mt-6 lg:justify-start">
        //                                 <a
        //                                     className="px-4 py-3 text-xs font-semibold text-gray-200 bg-gray-900 rounded hover:bg-gray-800"
        //                                     href="#"
        //                                 >
        //                                     Get Started
        //                                 </a>
        //                                 <a
        //                                     className="px-4 py-3 mx-4 text-xs font-semibold text-gray-900 bg-gray-300 rounded hover:bg-gray-400"
        //                                     href="#"
        //                                 >
        //                                     Learn More
        //                                 </a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Home
