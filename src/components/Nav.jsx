//Navbar.jsx

// Import necessary dependencies
import React, { useState } from 'react'; 
// Import icons we'll use for our navbar
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// Import Link for smooth scrolling between sections
import { Link } from 'react-scroll';

const Navbar = () => {
  // State to handle mobile menu toggle (open/closed)
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // Main navbar container - fixed at top, full width
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-slate-900 text-gray-300'>
      {/* Your logo or brand name */}
      <div>
        <h1 className='font-thin text-2xl italic font-serif'>HPS</h1>
      </div>

      {/* Desktop Menu - hidden on mobile, flex on medium screens and up */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='resume' smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        {/* ... other menu items ... */}
      </ul>

      {/* Hamburger Icon - visible only on mobile */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu - full screen overlay */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/* ... other mobile menu items ... */}
      </ul>

      {/* Social icons - hidden on smaller screens, shown on large screens */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          {/* LinkedIn - sliding animation on hover */}
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a href="https://www.linkedin.com/in/harsh9389/" className='flex justify-between items-center w-full text-gray-300 px-4'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
            <a href="https://github.com/harsh-9389" className='flex justify-between items-center w-full text-gray-300 px-4'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-500'>
            <a href="https://leetcode.com/u/strange_fellow/" className='flex justify-between items-center w-full text-gray-300 px-4'>
              Leetcode <SiLeetcode size={30} />
            </a>
          </li>
          {/* ... other social links ... */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
