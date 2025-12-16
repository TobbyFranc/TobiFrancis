import React, { useState, useEffect, useRef } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Detect active section in viewport
      const sections = ["home", "about", "projects", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(id);
          break;
        }
      }
    };

    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
      setMenuOpen(false);
    }
  };

  const iconClass = (id) =>
    `w-6 h-6 ${
      activeLink === id
        ? "text-[var(--accent)]"
        : "text-[var(--main-text-color)]"
    }`;

  return (
    <div
      className={`fixed z-50 transition-all duration-500 ${
        scrolled
          ? "top-4 left-1/2 -translate-x-1/2 w-[78%] sm:w-[70%] md:w-[50%] rounded-full shadow-lg px-4 md:px-6 py-2 bg-[var(--main-bg-color)]/60 backdrop-blur-md"
          : "top-0 left-0 w-full bg-[var(--main-bg-color)] shadow-md"
      }`}
      role="navigation"
      aria-label="Primary"
    >
      <nav className="flex px-2 md:px-4 py-2 justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToId("home")}
          className="flex items-center cursor-pointer roboto-mono-200"
          aria-label="Go to Home"
        >
          <span className="text-xl font-bold text-[var(--accent)]">&lt;</span>
          <span className="montserrat-bold logo font-bold text-md sm:text-xl text-[var(--main-text-color)] roboto-mono-200">
            TF/&gt;
          </span>
          <span className="animate-bounce w-2 h-2 rounded-full bg-[var(--accent)] ml-2" />
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex ml-auto space-x-6 font-medium items-center">
          {scrolled ? (
            <>
              {/* Home */}
              <li className="relative group">
                <button
                  className="cursor-pointer"
                  onClick={() => scrollToId("home")}
                  aria-label="Home"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconClass("home")}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l9-9 9 9v9a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2v-9z"
                    />
                  </svg>
                </button>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  Home
                </span>
              </li>

              {/* About */}
              <li className="relative group">
                <button
                  className="cursor-pointer"
                  onClick={() => scrollToId("about")}
                  aria-label="About"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconClass("about")}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 20c0-2.21 2.69-4 6-4s6 1.79 6 4H6z"
                    />
                  </svg>
                </button>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  About
                </span>
              </li>

              {/* Projects */}
              <li className="relative group">
                <button
                  className="cursor-pointer"
                  onClick={() => scrollToId("projects")}
                  aria-label="Projects"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconClass("projects")}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2h2a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z"
                    />
                  </svg>
                </button>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  Projects
                </span>
              </li>

              {/* Contact */}
              <li className="relative group">
                <button
                  className="cursor-pointer"
                  onClick={() => scrollToId("contact")}
                  aria-label="Contact"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconClass("contact")}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4h16v16H4V4zm4 4l4 4 4-4"
                    />
                  </svg>
                </button>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                  Contact
                </span>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  onClick={() => scrollToId("home")}
                  className={`${
                    activeLink === "home"
                      ? "text-[var(--accent)]"
                      : "text-[var(--main-text-color)]"
                  } hover:text-[var(--accent)] cursor-pointer`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId("about")}
                  className={`${
                    activeLink === "about"
                      ? "text-[var(--accent)]"
                      : "text-[var(--main-text-color)]"
                  } hover:text-[var(--accent)] cursor-pointer`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId("projects")}
                  className={`${
                    activeLink === "projects"
                      ? "text-[var(--accent)]"
                      : "text-[var(--main-text-color)]"
                  } hover:text-[var(--accent)] cursor-pointer`}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId("contact")}
                  className={`${
                    activeLink === "contact"
                      ? "text-[var(--accent)]"
                      : "text-[var(--main-text-color)]"
                  } hover:text-[var(--accent)] cursor-pointer`}
                >
                  Contact
                </button>
              </li>
            </>
          )}
        </ul>

        {/* Hire Me button (desktop only) */}
        {!scrolled && (
          <button
            onClick={() => scrollToId("contact")}
            className="hidden md:block ml-6 px-4 py-2 border-2 border-[var(--accent)] text-[var(--accent)] font-medium rounded-md hover:bg-[var(--accent)] hover:text-white transition duration-300"
          >
            Hire Me
          </button>
        )}

        {/* Mobile menu toggle */}
        <div className="md:hidden ml-auto">
          {menuOpen ? (
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-1 text-[var(--accent)]"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="p-1 text-[var(--accent)] cursor-pointer"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-16 right-0 w-2/3 sm:w-1/2 bg-[var(--main-bg-color)]/90 backdrop-blur-md border-l-2 border-[var(--accent)] py-6 flex flex-col space-y-4 shadow-lg transition-all duration-300"
        >
          <button
            onClick={() => scrollToId("home")}
            className={`${
              activeLink === "home"
                ? "text-[var(--accent)]"
                : "text-[var(--main-text-color)]"
            } px-4 py-2 text-left hover:bg-[var(--accent)] hover:text-white transition`}
            type="button"
          >
            Home
          </button>
          <button
            onClick={() => scrollToId("about")}
            className={`${
              activeLink === "about"
                ? "text-[var(--accent)]"
                : "text-[var(--main-text-color)]"
            } px-4 py-2 text-left hover:bg-[var(--accent)] hover:text-white transition`}
            type="button"
          >
            About
          </button>
          <button
            onClick={() => scrollToId("projects")}
            className={`${
              activeLink === "projects"
                ? "text-[var(--accent)]"
                : "text-[var(--main-text-color)]"
            } px-4 py-2 text-left hover:bg-[var(--accent)] hover:text-white transition`}
            type="button"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToId("contact")}
            className={`${
              activeLink === "contact"
                ? "text-[var(--accent)]"
                : "text-[var(--main-text-color)]"
            } px-4 py-2 text-left hover:bg-[var(--accent)] hover:text-white transition`}
            type="button"
          >
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
