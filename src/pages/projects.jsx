import React from 'react'
import gif from '../components/img/gif.gif'
const projects = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10 gap-10'>
        <h1 className='
            lilita-one-regular
          text-5xl
          md:text-7xl
            text-gray-800
            items-center
            gap-5
            mt-5
            flex
            justify-center
            '>Projects!!</h1>
            <img src={gif} alt="Project GIF" className='h-60 md:h-96 object-cover border border-gray-300 rounded-[10px] mt-5' />
    </div>
  )
}

export default projects
