import FacebookIcon from "./FacebookIcon"
import InstagramIcon from "./InstagramIcon"
import { NextComponentType } from "next"
import React from "react"
import SpotifyIcon from "./SpotifyIcon"
import TwitterIcon from "./TwitterIcon"
import YouTubeIcon from "./YouTubeIcon"
const SocialMedia: NextComponentType = () => (
    <div>
        <span className="uppercase text-carbon-100 font-bold text-sm">Social Media</span>
        <div className="flex items-center mt-2 text-carbon-200 fill-current">
            <FacebookIcon className="w-8 h-8"></FacebookIcon>
            <TwitterIcon className="w-8 h-8 ml-4"></TwitterIcon>
            <YouTubeIcon className="w-8 h-8 ml-4"></YouTubeIcon>
            <InstagramIcon className="w-8 h-8 ml-4"></InstagramIcon>
            <SpotifyIcon className="w-8 h-8 ml-4"></SpotifyIcon>
        </div>
    </div>
)

export default SocialMedia
