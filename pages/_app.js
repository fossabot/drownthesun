import "../css/tailwind.css"

import App from "next/app"
import LogRocket from "logrocket"
import React from "react"

LogRocket.init("wpbi3h/drownthesun")
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
}

export default MyApp
