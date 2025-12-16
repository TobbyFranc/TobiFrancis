// src/components/context/ThemeProvider.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Accent theme state
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem("activeTheme") || "purple";
  });

  // Apply dark mode
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Apply accent theme
  useEffect(() => {
    const themeColors = {
      purple: "#7c3aed",
      yellow: "#f59e0b",
      red: "#ef4444",
    };
    const accentColor = themeColors[activeTheme] || themeColors.purple;
    document.documentElement.style.setProperty("--accent", accentColor);
    localStorage.setItem("activeTheme", activeTheme);
  }, [activeTheme]);

  // Switch accent theme
  const handleBlobClick = (themeName) => setActiveTheme(themeName);

  return (
    <ThemeContext.Provider
      value={{ darkMode, setDarkMode, activeTheme, handleBlobClick }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook
export const useTheme = () => useContext(ThemeContext);
