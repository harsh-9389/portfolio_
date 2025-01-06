import React from "react";
import resumePDF from '../assets/Resume_Harsh.pdf'

const ResumeSection = () => {
  return (
    <div className="bg-[#0a192f] min-h-screen flex flex-col items-center justify-center py-10" name='resume'>
      <div className="w-full max-w-4xl text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-white mb-6">
          Resume
        </h1>

        {/* Resume Preview */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src={resumePDF} // Adjust the path to your file
            title="Resume"
            className="w-full h-[500px] border-none"
          ></iframe>
        </div>

        {/* Download Button */}
        <div className="mt-6">
          <a
            href={resumePDF} // Adjust the path to your file
            download="Harsh_Resume.pdf"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
