import React from 'react'

const ThemeBlob = ({ themeName, activeTheme, onClick, positionClasses, tooltipText, color }) => {
  return (
    <button
      onClick={() => onClick(themeName)}
      className={`${positionClasses} rounded-full blur-3xl animate-blob transition-transform hover:scale-105 cursor-pointer group`}
      style={{ backgroundColor: activeTheme === themeName ? `${color}0.30)` : `${color}0.18)` }}
      aria-label={tooltipText}
    >
      <span className="absolute -top-28 left-1/2 -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
        {tooltipText}
      </span>
    </button>
  )
}

export default ThemeBlob
