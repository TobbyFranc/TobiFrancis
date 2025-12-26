import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = ({ darkMode, onToggle, variant = "icon" }) => {
  if (variant === "icon") {
    return (
      <button
        onClick={onToggle}
        className="flex items-center cursor-pointer justify-center w-10 h-10 rounded-full bg-[var(--button-bg-color)] hover:bg-[var(--accent)] border-2 border-[var(--accent)] transition duration-300"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-blue-500" />
        )}
      </button>
    );
  }

  // Default: icon + text button
  return (
    <button
      onClick={onToggle}
      className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-md bg-[var(--button-bg-color)] text-[var(--main-text-color)] hover:bg-[var(--accent)] hover:text-white transition duration-300"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <>
          <FaSun className="text-yellow-400" /> Light Mode
        </>
      ) : (
        <>
          <FaMoon className="text-blue-500" /> Dark Mode
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
