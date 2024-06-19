import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name = 'home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, My name is</p>
          <h1 className='text-4xl sm:text 7xl font-bold text-[#ccd6f6]'>Chathuni Perera</h1>
          <h2 className='text-4xl sm:text 7xl font-bold text-[#8892b0]'>I'm a Student</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>As an ambitious second-year undergraduate, I am deeply passionate about pursuing a career in the IT industry. 
            With a keen eye for detail and a natural aptitude for problem-solving, leadership skills, and the ability to work effectively both 
            independently and as part of a team I thrive in dynamic and challenging environments. I am adapt at managing multiple tasks and deadlines, 
            ensuring that projects are completed efficiently and to the highest standard.</p>
            <div>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'> 
              View projects 
              <span className='grouphover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 '/>
              </span>
              </button>
            </div>
        </div>
    </div>
  );
};

export default Home