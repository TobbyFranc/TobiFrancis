import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiGit } from 'react-icons/di'
import { FaFigma } from 'react-icons/fa'
import { SiVite } from 'react-icons/si'

const techStacks = [
  { icon: <FaReact className="text-4xl text-accent mb-2" />, name: "React" },
  { icon: <SiTailwindcss className="text-4xl text-accent mb-2" />, name: "Tailwind CSS" },
  { icon: <IoLogoJavascript className="text-4xl text-accent mb-2" />, name: "JavaScript" },
  { icon: <AiFillHtml5 className="text-4xl text-accent mb-2" />, name: "HTML5" },
  { icon: <DiCss3 className="text-4xl text-accent mb-2" />, name: "CSS3" },
  { icon: <DiGit className="text-4xl text-accent mb-2" />, name: "Git" },
    { icon: <FaFigma className="text-4xl text-accent mb-2" />, name: "Figma" },
    { icon: <SiVite className="text-4xl text-accent mb-2" />, name: "Vite" },
]

const Stacks = () => {
  return (
    <section className="mt-16 px-6 max-w-4xl mx-auto text-center">
      {/* Section Header */}
      <h3 className="text-2xl font-semibold text-[var(--main-text-color)] mb-6">
        My Tech Stack
      </h3>
      <p className="open-sans-200 text-md text-[var(--secondary-text-color)] mb-8">
        Tools and technologies I use to build modern, responsive web experiences
      </p>

      {/* Stacks Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {techStacks.map((stack, index) => (
          <div 
            key={index} 
            className="bg-[var(--card-bg-color)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            {stack.icon}
            <h3 className="text-lg font-medium text-[var(--main-text-color)]">
              {stack.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stacks
