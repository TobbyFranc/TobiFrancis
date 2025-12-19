import React from 'react'

const Socials = () => {
  return (
    <div className="">
       <div className="container md:roboto-mono-200 mx-auto px-4 mb-4 flex justify-center space-x-3 text-gray-600">
            {/* Social Media Links */}
            <a
              href="https://github.com/TobbyFranc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] text-sm md:text-[16px]  transition duration-300"
            >
              GitHub
            </a>
            {/* vertical divider */}
            <span className="border-l border-[var(--footer-text)] h-5 self-center"></span>
            <a
              href="https://www.linkedin.com/in/tobi-frank-4-greencraft"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] text-sm md:text-[16px]  transition duration-300"
            >
              LinkedIn
            </a>
            <span className="border-l border-[var(--footer-text)] h-5 self-center"></span>
            <a
              href="http://x.com/x__Doc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] text-sm md:text-[16px]  transition duration-300"
            >
              X <small className='text-[8px]'>formerly Twitter</small>
            </a>
          </div>
    </div>
  )
}

export default Socials
