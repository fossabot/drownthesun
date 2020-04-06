import Header from "../components/Header"
import Layout from "../components/Layout"
import { NextPage } from "next"
import PropTypes from "prop-types"
import React from "react"
const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <Layout>
        <Header></Header>
        <h1>Hello world! - user agent: {userAgent}</h1>
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
