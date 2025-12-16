import React from "react";
import mytoon from "../assets/Hem.png";
import mytoon2 from "../assets/hero.png";
import Socials from "../components/Socials";
import ThemeBlob from "../components/ThemeBlob";
import DarkModeToggle from "../components/DarkModeToggle";
import ScrollButton from "../components/ScrollButton";
import { useTheme } from "../components/context/ThemeProvider";

const Home = () => {
  // useTheme gives you the context values directly
  const { darkMode, setDarkMode, activeTheme, handleBlobClick } = useTheme();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen px-6 md:px-2 flex flex-col justify-center bg-[var(--main-bg-color)] relative overflow-hidden transition-colors duration-500"
    >
      {/* Corner blobs */}
      <ThemeBlob
        themeName="purple"
        activeTheme={activeTheme}
        onClick={handleBlobClick}
        positionClasses="absolute top-0 left-0 w-44 h-44"
        tooltipText="Switch to Purple Theme"
        color="rgba(124,58,237,"
      />
      <ThemeBlob
        themeName="yellow"
        activeTheme={activeTheme}
        onClick={handleBlobClick}
        positionClasses="absolute bottom-24 right-0 w-44 h-44 animation-delay-2000"
        tooltipText="Switch to Yellow Theme"
        color="rgba(245,158,11,"
      />
      <ThemeBlob
        themeName="red"
        activeTheme={activeTheme}
        onClick={handleBlobClick}
        positionClasses="absolute bottom-0 left-20 w-44 h-44 animation-delay-4000"
        tooltipText="Switch to Red Theme"
        color="rgba(239,68,68,"
      />

      {/* Content row */}
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between max-w-6xl mx-auto px-4 pb-16 gap-8">
        {/* Text column */}
        <div className="flex flex-col gap-4 md:w-1/2 text-center md:text-left">
          <p className="text-[var(--secondary-text-color)]">Hello, I&apos;m</p>
          <h2 className="text-3xl sm:text-5xl font-bold roboto-mono-200 text-[var(--main-text-color)]">
            <span className="text-sm text-gray-600">&lt;</span>
            Tobi <span className="text-[var(--accent)]">Francis</span>
            <span className="text-sm text-gray-600">/&gt;</span>
          </h2>
          <p className="text-md py-5 text-[var(--secondary-text-color)] leading-relaxed">
            A passionate <span className="text-[var(--accent)]">Frontend Developer</span> crafting engaging and user-friendly web experiences.
            Skilled in HTML, CSS, JavaScript, and React.js. Let&apos;s build something amazing together!
          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <button
              onClick={() => scrollToId("projects")}
              className="px-6 py-3 border-2 flex items-center justify-center border-[var(--accent)] text-[var(--accent)] font-medium rounded-md cursor-pointer hover:bg-[var(--accent)] hover:text-white transition duration-300"
            >
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => scrollToId("contact")}
              className="px-6 py-3 text-[var(--main-text-color)] cursor-pointer font-medium rounded-md hover:text-[var(--accent)] transition duration-300 flex items-center justify-center"
            >
              Hire Me
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Image column */}
        <div className="relative md:w-1/2 flex justify-center">
          <ThemeBlob
            themeName="red"
            activeTheme={activeTheme}
            onClick={handleBlobClick}
            positionClasses="absolute w-[110px] h-[110px] md:w-[140px] md:h-[140px] top-64 left-6"
            tooltipText="Switch to Red Theme"
            color="rgba(239,68,68,"
          />
          <ThemeBlob
            themeName="purple"
            activeTheme={activeTheme}
            onClick={handleBlobClick}
            positionClasses="absolute w-[110px] h-[110px] md:w-[140px] md:h-[140px] top-0 right-6"
            tooltipText="Switch to Purple Theme"
            color="rgba(124,58,237,"
          />
          <ThemeBlob
            themeName="yellow"
            activeTheme={activeTheme}
            onClick={handleBlobClick}
            positionClasses="absolute w-[110px] h-[110px] md:w-[140px] md:h-[140px] bottom-6 right-2"
            tooltipText="Switch to Yellow Theme"
            color="rgba(245,158,11,"
          />

          <img src={mytoon} alt="profile" className="hidden md:block relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full object-contain hover:scale-105 transition-transform duration-500" />
          <img src={mytoon2} alt="profile" className="md:hidden relative w-[320px] h-[320px] rounded-full object-contain hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Scroll button */}
      <ScrollButton onScrollDown={handleScrollDown} />

      {/* Socials */}
      <div className="absolute bottom-2 left-2">
        <Socials />
      </div>

      {/* Dark mode toggle (top-right corner) */}
<div className="fixed top-20 right-4">
  <DarkModeToggle
    darkMode={darkMode}
    onToggle={() => setDarkMode(!darkMode)}
    variant="icon"
  />
</div>

    </section>
  );
};

export default Home;
