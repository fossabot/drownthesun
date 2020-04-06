import Footer from "./Footer"
import Header from "./Header"
import React from "react"

const Layout = (props: any) => (
    <div className="w-full">
        <Header></Header>
        {props.children}
        <Footer></Footer>
    </div>
)
export default Layout
