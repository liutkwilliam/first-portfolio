import React from 'react'
import { Link } from 'react-router-dom'

function ButtonLink({ href, content }) {
    const className = "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition"
    const isExternal = /^https?:\/\//.test(href)

    if (isExternal) {
        return (
            <a
                href={href}
                className={className}
                target="_blank"
                rel="noreferrer"
            >
                {content}
            </a>
        )
    }

    return (
        <Link
            to={href}
            className={className}
        >
            {content}
        </Link>
    )
}

export default ButtonLink
