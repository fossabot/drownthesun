import Header from "../components/Header"
import Layout from "../components/Layout"
import { NextPage } from "next"
import PropTypes from "prop-types"
import React from "react"

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <Layout>
        <div className="flex bg-carbon-900" style={{ height: "600px" }}>
            <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                <div>
                    <h2 className="text-3xl font-semibold text-orange-100 md:text-4xl uppercase">
                        Drown the <span className="text-orange-500">sun</span>
                    </h2>
                    <p className="mt-2 text-sm text-carbon-200 md:text-base">
                        Drown the Sun ist eine Metal-Band aus Nürnberg, die 2016 von Bernhard Leupold. Daniele
                        Forestieri, Jannik Kolb, Merlin Hattermann und Robert Schmidt gegründet wurde.
                    </p>
                    <div className="flex justify-center lg:justify-start mt-6">
                        <a
                            className="px-6 py-4 bg-carbon-900 text-carbon-200 text-xs font-semibold hover:bg-carbon-800"
                            href="#"
                        >
                            Get Started
                        </a>
                        <a
                            className="mx-4 px-6 py-4 bg-carbon-100 text-carbon-900 text-xs font-semibold hover:bg-orange-500"
                            href="#"
                        >
                            Play Music
                        </a>
                    </div>
                </div>
            </div>
            <div
                className="hidden lg:block lg:w-1/2"
                style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
                <div
                    className="h-full object-cover"
                    style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage:
                            "url(https://res.cloudinary.com/chronark/image/upload/v1586181084/dts_all_cppvki.jpg)",
                    }}
                >
                    <div className="h-full bg-black opacity-25"></div>
                </div>
            </div>
        </div>
    </Layout>
)

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent
    return { userAgent }
}

Home.propTypes = {
    userAgent: PropTypes.string.isRequired,
}
export default Home
