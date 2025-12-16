import React from 'react'
import {motion} from 'framer-motion'

const Work = () => {
  return (
    <>
    <motion.section
      className='w-full min-h-screen bg-light'
      initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
    >
      <h2 className='text-3xl font-semibold text-[var(--main-text-color)] pt-20 px-4'> Work Experience</h2>
      <p className='text-md text-[var(--main-text-color)] px-4 mt-2'> My professional journey </p>

      {/* work experience content */}
      <div className='mt-8 px-4 flex flex-col space-y-8'>
        {/* work item */}
        <div className='bg-[var(--card-bg-color)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
          <h3 className='text-xl font-semibold text-[var(--main-text-color)]'>Software Engineer at TechCorp</h3>
          <span className='text-sm text-[var(--secondary-text-color)]'>Jan 2020 - Present</span>
          <p className='mt-4 text-[var(--main-text-color)]'>Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.</p>
        </div>

        {/* work item */}
        <div className='bg-[var(--card-bg-color)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
          <h3 className='text-xl font-semibold text-[var(--main-text-color)]'>Frontend Developer at WebSolutions</h3>
          <span className='text-sm text-[var(--secondary-text-color)]'>Jun 2018 - Dec 2019</span>
          <p className='mt-4 text-[var(--main-text-color)]'>Implemented responsive web designs and optimized user interfaces for better performance. Worked closely with designers to ensure seamless user experiences.</p>
        </div>

        {/* work item */}
        <div className='bg-[var(--card-bg-color)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
          <h3 className='text-xl font-semibold text-[var(--main-text-color)]'>Intern at CodeCrafters</h3>
          <span className='text-sm text-[var(--secondary-text-color)]'>Jan 2018 - May 2018</span>
          <p className='mt-4 text-[var(--main-text-color)]'>Assisted in the development of internal tools and gained hands-on experience with modern web technologies. Participated in code reviews and team meetings.</p>
        </div>

      </div>

    </motion.section>
    
    </>
  )
}

export default Work