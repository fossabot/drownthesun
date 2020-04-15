import Concert from "../components/Concert"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import { NextPage } from "next"
import React from "react"
import { url } from "inspector"

const About: NextPage = () => (
    <Layout>
        <div
            className="h-screen bg-carbon-900"        >
            <div className="mx-auto max-w-screen-xl">
                <Navbar desktopAlwaysOpen={true}></Navbar>
                <div className="mx-auto max-w-screen-lg">
                    <div className="mx-4 md:text-center mt-8">
                        <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-red-600 leading-8 sm:text-4xl sm:leading-10">
                            Tour Dates
                        </h3>
                        <p className="max-w-2xl mt-4 text-xl text-gray-500 leading-7 md:mx-auto">
                            Mit dem neuen Album sind wir im Dezember wieder auf Tour. Oder sowas ähnliches.
                        </p>
                    </div>
                    <Concert country="GER" weekday="Fri" venue="Rock im Park" city="Nürnberg" date="Jun 5"></Concert>
                    <Concert country="AUS" weekday="Thu" venue="Nova Rock" city="Kleylehof" date="Jun 11"></Concert>
                    <Concert
                        country="SWI"
                        weekday="Thu"
                        venue="Flugplatz Interlaken"
                        city="Interlaken"
                        date="Jun 19"
                    ></Concert>
                    <Concert
                        country="BEL"
                        weekday="Fri"
                        venue="Festivalpark Senehei"
                        city="Dessel"
                        date="Jun 20"
                    ></Concert>
                    <Concert country="FRA" weekday="Sat" venue="Hellfest" city="Clisson" date="Jun 26"></Concert>
                    <Concert
                        country="GER"
                        weekday="Fri"
                        venue="Full Force Festival"
                        city="Gräfenheinichen"
                        date="Jul 9"
                    ></Concert>
                </div>
            </div>
        </div>
    </Layout>
)

export default About
