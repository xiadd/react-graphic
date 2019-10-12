import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function ({ codeString }) {
  return (
    <SyntaxHighlighter language="react" style={atomOneLight}>
      {codeString}
    </SyntaxHighlighter>
  )
}