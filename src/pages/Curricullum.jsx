import { section } from 'framer-motion/client'
import React from 'react'

const Curricullum = () => {
  return (
    <section id='curricullum' className="w-full min-h-screen bg-[var(--main-bg-color)] transition-colors duration-500">
      <h2 className="text-3xl font-semibold text-[var(--main-text-color)]">
        Curricullum
      </h2>
      <p className="open-sans-200 text-md text-[var(--secondary-text-color)] mt-2">
        My educational and professional background
      </p>
        {/* Content of my CV to be added here */}
        <div className="mt-8 text-[var(--secondary-text-color)]">
          <p>
            Detailed information about my education, certifications, work experience, skills, and achievements will be showcased here.
          </p>
        </div>
        <div className="mt-8 text-[var(--secondary-text-color)]">
          <p>
            Stay tuned for updates as I continue to build and refine my curricullum section!
          </p>
        </div>


    </section>
  )
}

export default Curricullum