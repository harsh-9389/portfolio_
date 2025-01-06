//Projects.jsx
import React from 'react';
import code from '../assets/code2.png';

const Projects = () => {
  return (
    // Main container with responsive height
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* Section header */}
        <div className='pb-16 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-800'>Projects</p>
          {/* <p className='py-6 text-2xl'>Check out some of my Projects</p> */}
        </div>

        {/* Project grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project card with hover overlay */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover content */}
            <div className='group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>E-cart</span>
              <p className='text-center'>An Ecommerce Webapp</p>
              {/* Action buttons */}
              <div className='pt-8 text-center'>
                {/* <a href='https://github.com/harsh-9389/E-Cart'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a> */}
                <a href='https://github.com/harsh-9389/E-Cart'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover content */}
            <div className='group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>Task-manager</span>
              <p className='text-center'>A simple task manager</p>
              {/* Action buttons */}
              <div className='pt-8 text-center'>
              <a href='https://task-manager-elitfit.netlify.app/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
              <a href='https://github.com/harsh-9389/eliteFit.AI-Assignment/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover content */}
            <div className='group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>Smiling-mind</span>
              <p className='text-center'>A website for casual activities</p>
              {/* Action buttons */}
              <div className='pt-8 text-center'>
              {/* <a href='https://github.com/sharmavasant/SMILING-MIND'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a> */}
              <a href='https://github.com/sharmavasant/SMILING-MIND'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
              </div>
            </div>
          </div>
          {/* Additional project cards follow same pattern */}
        </div>
      </div>
    </div>
  );
};

export default Projects;