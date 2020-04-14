import React from "react"

type Props = {
    onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

const Hamburger = (props: Props) => {
    return (
        <button
            onClick={props.onClick}
            className="z-50 inline-flex items-center justify-center block p-2 rounded-sm text-carbon-200 transition duration-150 ease-in-out hover:text-gray-500 hover:bg-gray-100 hover:outline-none focus:outline-none"
        >
            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    )
}

export default Hamburger
