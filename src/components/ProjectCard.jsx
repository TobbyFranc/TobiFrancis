import React from 'react'

const ProjectCard = () => {
  return (
    <section>
        {/* project cards with thumbnail, project name, stack used, description, ... to populate from Project.json */}
        <div className='bg-[var(--card-bg-color)] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <img src="https://via.placeholder.com/400x200" alt="Project 1" className='w-full h-48 object-cover rounded-md mb-4'/>
          <h3 className='text-xl font-semibold text-[var(--main-text-color)] mb-2'>Project Title 1</h3>
          <p className='text-[var(--secondary-text-color)] mb-4'>A brief description of Project 1 highlighting its features and technologies used.</p>
          <button className='px-4 py-2 bg-accent text-[var(--main-bg-color)] rounded-md hover:bg-accent-dark transition duration-300'>View Details</button>
        </div>

        <div className='bg-[var(--card-bg-color)] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <img src="https://via.placeholder.com/400x200" alt="Project 2" className='w-full h-48 object-cover rounded-md mb-4'/>
          <h3 className='text-xl font-semibold text-[var(--main-text-color)] mb-2'>Project Title 2</h3>
          <p className='text-[var(--secondary-text-color)] mb-4'>A brief description of Project 2 highlighting its features and technologies used.</p>
          <button className='px-4 py-2 bg-accent text-[var(--main-bg-color)] rounded-md hover:bg-accent-dark transition duration-300'>View Details</button>
        </div>

        <div className='bg-[var(--card-bg-color)] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <img src="https://via.placeholder.com/400x200" alt="Project 3" className='w-full h-48 object-cover rounded-md mb-4'/>
          <h3 className='text-xl font-semibold text-[var(--main-text-color)] mb-2'>Project Title 3</h3>
          <p className='text-[var(--secondary-text-color)] mb-4'>A brief description of Project 3 highlighting its features and technologies used.</p>
          <button className='px-4 py-2 bg-accent text-[var(--main-bg-color)] rounded-md hover:bg-accent-dark transition duration-300'>View Details</button>
        </div>

        {/* Add more project cards as needed */}

    </section>
  )
}

export default ProjectCard