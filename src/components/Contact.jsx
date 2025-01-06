//Contact.jsx
import React from 'react'

const Contact = () => {
  return (
    // Main container with full height and centering
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        {/* Form wrapper with max width */}
        <div className='flex flex-col max-w-[600px] w-full'>
            {/* Header section */}
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                {/* <p className='text-gray-300 py-4'>Send me a message</p> */}
            </div>
            <form action="https://formsubmit.co/c0fc63b3509ecbbb54c5a3a1dfec204e" method="POST" className='flex flex-col max-w-[600px] w-full'>
              {/* Form inputs with consistent styling */}
              <input className='bg-[#ccd6f6] p-2 rounded-xl' type="text" placeholder='Name' name='name' required/>
              <input className='my-4 p-2 bg-[#ccd6f6] rounded-xl' type="email" placeholder='Email' name='email' required/>
              <textarea className='bg-[#ccd6f6] p-2 rounded-xl' name="message" rows="10" placeholder='Message' required></textarea>
              <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center rounded-xl' type='submit'>Let's Collaborate</button>
            </form>
        </div>
    </div>
  )
}
export default Contact