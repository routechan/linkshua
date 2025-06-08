"use client"

import { useState } from "react"

const LinkCopyButton = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative inline-block">
      {copied && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap min-w-max">
          URLをコピーしました
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900"></div>
        </div>
      )}
      <button
        onClick={handleCopy}
        className="text-blue border border-blue text-xs px-2 py-1 rounded hover:bg-blue-50"
      >
        共有用コピー
      </button>
    </div>
  )
}

export default LinkCopyButton
