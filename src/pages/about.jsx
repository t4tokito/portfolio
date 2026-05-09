import React from 'react'
import mui from '../components/img/mui2.png'

const about = () => {
  return (
    <div>
    <div className='flex flex-col md:flex-row items-center justify-center p-5 md:h-150 md:gap-100'>

        <div id="intro" className=' md:w-90 md:mb-20'>
        <h1 className='lilita-one-regular
          text-5xl
          md:text-7xl
          text-gray-800
          items-center
          gap-5
          my-5'>About Me!!</h1>
        <p className='max-w-xl
          oneshot-regular
          text-gray-600
          text-base
          md:text-lg
          leading-8'>
            Hello! My name is vikas and I am a passionate <b>web developer</b> with a love for creating beautiful and functional websites. I have experience in <b>HTML, CSS, JavaScript, React.js, and Tailwind CSS</b>.
        </p>
      </div>

        <div id="intro" className='md:w-90 md:mt-60 mt-5'>
        <p className='max-w-xl
          oneshot-regular
          text-gray-600
          text-base
          md:text-lg
          leading-8
          '>
             I am always eager to <b>learn new things and improve my skills</b>. In my free time, I enjoy working on personal <b>projects, exploring new design trends</b>, and contributing to open-source projects. I am excited to continue growing as a developer and to <b>create amazing web experiences for users around the world</b>.
        </p>
        </div>

      <img className='md:h-140 md:absolute opacity-90 hover:opacity-80' src={mui} alt="Mui" />
    </div>
    </div>
  )
}

export default about
