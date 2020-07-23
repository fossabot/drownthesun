import React, { FunctionComponent, ReactElement } from "react"

import PropTypes from "prop-types"

type Props = {
    className?: string
}

const SocialMediaIcon: FunctionComponent<Props> = (props) => (
    <div
        className={`${props.className} w-8 h-8 md:w-6 md:h-6 duration-200 ease-in-out transform hover:text-carbon-50 hover:scale-150 hover:-translate-y-2`}
    >
        {props.children}
    </div>
)

export default SocialMediaIcon
