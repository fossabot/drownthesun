import Header from "../components/Header"
import Layout from "../components/Layout"
import { NextPage } from "next"
import React from "react"

const About: NextPage = () => (
    <Layout>
        <Header></Header>
        <p>This is the about page.</p>
    </Layout>
)

export default About
