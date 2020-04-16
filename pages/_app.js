import "../css/tailwind.css"

import App from "next/app"
import LogRocket from "logrocket"
import React from "react"
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '93088fef-068e-40d6-84b8-85e1b59022cd',
    clientToken: 'pub38181cdb8620c0db19ed65033a631bec',
    datacenter: 'eu',
    sampleRate: 100,
});
LogRocket.init("wpbi3h/drownthesun")
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
}

export default MyApp
