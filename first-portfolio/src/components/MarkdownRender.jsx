import React from 'react'
import ReactMarkdown from 'react-markdown'

function MarkdownRender({ markdownContent }) {
  return (
    <>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </>
  )
}

export default MarkdownRender
