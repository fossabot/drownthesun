import Link from "next/link"
import { NextComponentType } from "next"
import React from "react"
const linkStyle = {
    marginRight: 15,
}
const Header: NextComponentType = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header
