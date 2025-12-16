import React from "react";
import Socials from "../components/Socials";
import DarkModeToggle from "../components/DarkModeToggle";
import { useTheme } from "../components/context/ThemeProvider";

const Footer = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)] py-8 mt-12 transition-colors duration-500">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Social links */}
        <Socials />

        {/* Quick navigation links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#projects" className="hover:text-[var(--accent)] transition">Projects</a>
          <a href="#about" className="hover:text-[var(--accent)] transition">About</a>
          <a href="#contact" className="hover:text-[var(--accent)] transition">Contact</a>
        </nav>

        {/* Theme toggle */}
        <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} variant="text" />

        {/* Back to top button */}
        <a
          href="#top"
          aria-label="Back to top"
          className="flex items-center border-2 border-gray-600 justify-center w-10 h-10 rounded-full bg-[var(--button-bg-color)] hover:bg-[var(--accent)] transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[var(--main-text-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </a>

        {/* Divider */}
        <div className="w-full border-t border-[var(--footer-text)]/30"></div>

        {/* Copyright */}
        <p className="text-xs text-center">
          &copy; {new Date().getFullYear()} Tobi Francis. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
