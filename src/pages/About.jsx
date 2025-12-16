import React from 'react'
import { Link } from 'react-router-dom'   // ✅ import Link
import Stacks from '../Stacks'

const About = () => {
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id='about' className="w-full min-h-screen bg-[var(--main-bg-color)] transition-colors duration-500">
      {/* Header */}
      <div className="text-center pt-20 px-4">
        <h2 className="text-3xl font-semibold text-[var(--main-text-color)]">About Me</h2>
        <p className="text-md text-[var(--main-text-color)] mt-2 open-sans-200">Get to know me</p>
      </div>

      {/* About Text */}
      <div className="mt-10 px-6 max-w-3xl mx-auto text-[var(--secondary-text-color)] leading-relaxed text-center">
        <p className="mb-4">
          Hi, I’m <span className="font-semibold text-[var(--accent)]">Tobi Francis</span>, a frontend developer passionate about crafting 
          responsive, user-friendly web experiences. With expertise in <span className="font-semibold">HTML, CSS, JavaScript, and React</span>, 
          I build clean, engaging interfaces that bring ideas to life.
        </p>
        <p className="mb-4">
          I thrive in collaborative environments, love contributing to open-source, and stay curious about new technologies. 
          Beyond coding, I enjoy design, aesthetics, and exploring creative ways to merge tech with art.
        </p>
        <p>
          Let’s connect and create something impactful together!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 px-6 flex flex-col md:flex-row gap-4 justify-center">
        {/* ✅ View CV now redirects to /cv */}
        <Link 
          to="/cv"
          className="px-6 py-3 border-2 border-[var(--accent)] cursor-pointer text-[var(--accent)] font-medium rounded-md hover:bg-[var(--accent)] hover:text-white transition duration-300 w-full md:w-auto flex items-center justify-center"
        >
          View my CV
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
        </Link>

        <button
          onClick={() => scrollToId("contact")}
          className="px-6 py-3 bg-[var(--accent)] cursor-pointer text-white font-medium rounded-md hover:bg-[var(--card-bg-color)] hover:text-[var(--accent)] transition duration-300 w-full md:w-auto flex items-center justify-center"
        >
          Contact Me
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
      </div>

      {/* Stacks Section */}
      <div className="mt-16 px-6 max-w-4xl mx-auto text-center">
        <Stacks />
      </div>
    </section>
  )
}

export default About
