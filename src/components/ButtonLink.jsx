import React from 'react'

function ButtonLink({ href, content }) {
    return (
        <a
            href={href}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition"
        >
            {content}
        </a>
    )
}

export default ButtonLink
