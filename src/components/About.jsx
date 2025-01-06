//About.jsx
import React from "react";


const About = () => {
  return (
    // Main container with full width/height and background
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      {/*Content container with cyan background*/}
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/*Title section using grid */}
        <div className="py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-5/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
            {/*Content section with responsive grid*/}
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi, I'm Harsh Pratap Singh, nice to meet you.
              </p>
            </div>
            <div>
              <p>
                I am final undergrade at NIT Allahabad(MNNIT), during my academic journey 
                I have gained some wonderfull skills and experience in the field of 
                web development. I have project experience of more than 2 years in 
                web development. Currently, I love to work on web application using 
                technologies like React, Tailwind, Node.js and Mongodb.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;