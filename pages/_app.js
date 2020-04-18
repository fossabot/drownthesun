import "../css/tailwind.css"

import App from "next/app"
import LogRocket from "logrocket"
import React from "react"
import { datadogRum } from "@datadog/browser-rum"

datadogRum.init({
    clientToken: 'pubc63b46dfa92d7bda534a3f2167758d04',
    applicationId: 'cacffabb-fcc6-4fd4-b69c-e3aa6840c7dc',
    datacenter: "eu",
    sampleRate: 100,
})
LogRocket.init("wpbi3h/drownthesun")
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
}

export default MyApp
