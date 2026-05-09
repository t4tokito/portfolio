import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const contact = () => {
  return (
    <div className='w-full bg-gray-100 h-80 mt-10 flex gap-30 p-5 flex-col md:flex-row'>
      <div className='md:w-100 md:ml-5'>
        <h1 className='bodoni-regular
          text-lg
          md:text-lg
          text-gray-800
          items-center
          gap-5
          mt-5 text-center font-bold'>Made by Vikas</h1>

          <h1 className='
          text-lg
          md:text-lg
          text-gray-800
          items-center text-center
          mb-5'>2026-may</h1>

        <p className='max-w-xl
          oneshot-regular
          text-gray-600
          text-base
          md:text-lg
          leading-8'>
            If you want to contact me, you can reach out to me on my social media platforms or send me an email. I am always open to new opportunities and collaborations, so feel free to get in touch!
        </p>
      </div>
      <div className='flex gap-30'>
      <div class='skills' className='text-gray-600 text-lg'>
        <h1 className='bodoni-regular font-bold
          text-lg
          md:text-lg
          text-gray-800
          gap-5
          my-5'>Skills</h1>
        <ul>
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
          <li>react.js</li>
          <li>tailwind css</li>
        </ul>
       </div>
       <div>
        <h1 className='bodoni-regular font-bold
          text-lg
          md:text-lg
          text-gray-800
          gap-5
          my-5'>Visit</h1>
          <Link className='text-gray-600 hover:text-blue-500' to="/contact">
              <h5>Contact</h5>
            </Link>
            <Link className='text-gray-600 hover:text-blue-500' to="/projects">
              <h5>Projects</h5>
            </Link>
            <Link className='text-gray-600 hover:text-blue-500' to="/about">
              <h5>About</h5>
            </Link>
            <Link className='text-gray-600 hover:text-blue-500' to="/certificates">
              <h5>certificates</h5>
            </Link>
       </div>
      </div>
    </div>
  )
}

export default contact
