'use client'
import React from 'react'

const ShareLinkButton: React.FC = () => {
  const handleClick = (): void => {
    console.log('clicked!')
  }

  console.log('ShareLinkButton is imported and rendering.') // Log adicionado

  return (
    <button
      onClick={() => { handleClick() }}
      className="border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
    >
      <a href="/reviews/book">Share link</a>
    </button>
  )
}

export default ShareLinkButton
