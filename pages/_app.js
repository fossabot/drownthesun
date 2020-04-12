import "../css/tailwind.css"

import App from "next/app"
import React from "react"
import Router from "next/router"
import withGA from "next-ga"

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
}

export default withGA("G-YGEF6WNFGW", router)(MyApp)
