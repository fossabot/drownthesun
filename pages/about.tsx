import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import { NextPage } from "next"
import React from "react"

const About: NextPage = () => (
    <Layout>
        <Navbar></Navbar>
        <p>This is the about page.</p>
    </Layout>
)

export default About
