import React from 'react'
import Scroll from './Scroll'

const ScrollButton = ({ onScrollDown }) => {
  return (
    <button
      onClick={onScrollDown}
      className="group absolute bottom-0 right-6 hidden md:flex flex-col items-center z-10"
      aria-label="Scroll down"
    >
      <Scroll />
      <span className="mt-2 text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
        Scroll Down
      </span>
    </button>
  )
}

export default ScrollButton
