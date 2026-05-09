import React from 'react'
import tokito from './img/tokito.png'
import html from './img/html.png'
import css from './img/css.png'
import js from './img/js.png'
import react from './img/react.png'
import tailwind from './img/tailwind.png'
import mui from './img/mui.png'

const Top = () => {
  return (
    <div className='justify-center items-center w-full min-h-screen'>
    <div id="top" 
      className='
      md:w-[95%]
      md:h-100
      md:mx-auto
      md:mt-10
      min-h-screen
      flex
      flex-col
      lg:flex-row
      gap-100
      px-5
      md:px-10
      py-10
      justify-center
      '
    >

      
      <div id='intro' className='md:h-100 md:w-90 '>

        {/* HELLO */}
        <h3
          className='
          lilita-one-regular
          text-5xl
          md:text-7xl
          text-gray-800
          items-center
          gap-5
          mt-5
          flex
          '
        >
          Hello!

          <img
            src={tokito}
            alt="Tokito"
            className='
            h-16
            w-16
            md:h-20
            md:w-20
            object-contain
            '
          />
        </h3>

        {/* INTRO TEXT */}
        <p
          className='
          max-w-xl
          oneshot-regular
          text-gray-600
          mt-8
          text-base
          md:text-lg
          leading-8
          '
        >
          My name is Vikas. My strength is in <b>frontend
          development, React JS and Tailwind CSS</b>.
          I love creating beautiful UI and learning
          new things.

          <br />
          <br />

          Hope u enjoy my portfolio and have a great day!
        </p>
        </div>

      {/* IMAGE SECTION */}
      {/* <div
        id='image'
        className='
        w-full
        max-w-sm
        h-[500px]
        rounded-3xl
        overflow-hidden
        mx-auto
        lg:mx-0
        shadow-lg
        md:ml-100
        '
      >
      </div> */}
      <img src={mui} alt="tokito" className='absolute
       h-100 
       md:h-140 
       md:mt-0 
       mt-25 
       md:ml-0 
       ml-15 
       opacity-90
       hover:opacity-70
       '/>


      {/* EDUCATION */}
        <div id="education" className='mt-5 md:h-58 md:w-90 md:mt-80'>
        <h3
          className='
          lilita-one-regular
          text-4xl
          text-gray-800
          mt-5
          '
        >
          EDUCATION
        </h3>

        <p
          className='
          max-w-md
          oneshot-regular
          text-gray-700
          mt-5
          text-base
          md:text-lg
          leading-8
          '
        >
          10th passed from New Delhi in year <b>2026</b> and doing 11th this year
        </p>
        </div>
      
     </div>
     {/* SKILLS SECTION
      <div
      id='skills'
        className='
        w-full
        lg:w-[300px]
        h-80
        px-5
        '
      >

        <h3
          className='
          lilita-one-regular
          text-4xl
          text-gray-800
          mt-5
          lg:mt-10
          '
        >
          SKILLS
        </h3>

        <div
          className='
          flex
          flex-wrap
          gap-5
          mt-8
          '
        >

          <img
            src={html}
            alt="html"
            className='
            h-18
            w-18
            md:h-19
            md:w-18
            object-contain
            scale-130
            hover:scale-150
            transition
            duration-300
            '
          />

          <img
            src={css}
            alt="css"
            className='
            h-18
            w-18
            md:h-19
            md:w-18
            object-contain
            hover:scale-110
            transition
            duration-300
            '
          />

          <img
            src={js}
            alt="javascript"
            className='
            h-18
            w-18
            md:h-19
            md:w-18
            object-contain
            hover:scale-110
            transition
            duration-300
            '
          />

          <img
            src={react}
            alt="react"
            className='
            h-18
            w-18
            md:h-19
            md:w-18
            object-contain
            hover:scale-110
            transition
            duration-300
            '
          />

          <img
            src={tailwind}
            alt="tailwind"
            className='
            h-18
            w-18
            md:h-19
            md:w-18
            object-contain
            hover:scale-110
            transition
            duration-300
            '
          />

        </div>

      </div> */}
    </div>
    
  )
}

export default Top