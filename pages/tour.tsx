import Concert from "../components/Concert"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import { NextPage } from "next"
import React from "react"

const About: NextPage = () => (
    <Layout>
        <Navbar></Navbar>
        <Concert venue="Zenith" city="München" date="20.12.2020"></Concert>
        <Concert venue="Zenith" city="München" date="20.12.2020"></Concert>
    </Layout>
)

export default About
