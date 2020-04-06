import React, { useState } from "react"

import { NextComponentType } from "next"

const Footer: NextComponentType = () => (
    <div className="fixed bottom-0 left-0 w-full bg-carbon-900">
        <div className="flex flex-col items-center justify-center py-4 sm:flex-row">
            <h1 className="text-xs font-bold text-carbon-600 uppercase">Navbar Styles:</h1>
            <button className="bg-carbon-700 flex flex-row items-center px-3 py-2 ml-4 text-white rounded-lg hover:bg-carbon-700 focus:bg-carbon-700 focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mt-0.5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                Dark with light Dropdowns
            </button>
            <button className="bg-carbon-700 flex flex-row items-center px-3 py-2 ml-4 text-white rounded-lg hover:bg-carbon-700 focus:bg-carbon-700 focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mt-0.5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                Dark with dark dropdowns
            </button>
        </div>
    </div>
)

export default Footer
