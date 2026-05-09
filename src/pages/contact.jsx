import React from 'react'
import mui from '../components/img/mui1.png'
import insta from "../components/img/insta.png"

const contact = () => {
  return (
    <div id='contact' className='w-[90%] ml-[5%] mt-10' >
        <div className='items-center justify-center flex flex-col gap-5 text-center'>
            <h1 className='lilita-one-regular
            text-5xl
            md:text-7xl
            text-gray-800
            text-center
            border-b
            w-full
            border-gray-300
            py-5
            '>Contact Me!!</h1>
            <img src={mui} alt="Mui" className='h-60 w-60 object-cover border border-gray-300 rounded-[50%]'/>
        </div>
        <div>
            <h1 className='pixel-font
            text-2xl
            md:text-4xl
            text-gray-800
            items-center
            mt-5
            flex
            justify-center'><a href="https://www.instagram.com/t4tokito/" target="_blank" rel="noopener noreferrer">@t4tokito</a>
            <img src={insta} alt="Instagram" className='h-15 w-15 ml-2' />
            </h1>

            <h1 className='pixel-font
            text-2xl
            md:text-4xl
            text-gray-800
            items-center
            gap-5
            mt-5
            flex
            justify-center'>Phone: <a href="tel:+919953370380">+91 99533 70380</a></h1>

            <h1 className='pixel-font
            text-2xl
            md:text-4xl
            text-gray-800
            items-center
            gap-5
            mt-5
            flex
            justify-center'>Email: <a href="mailto:t4tokito@gmail.com">t4tokito@gmail.com</a></h1>
            
            <h1 className='pixel-font
            text-2xl
            md:text-4xl
            text-gray-800
            items-center
            gap-5
            mt-5
            flex
            flex-col
            md:flex-row
            justify-center'>GitHub: <a href="https://github.com/vikasmourya10" target="_blank" rel="noopener noreferrer">https://github.com/vikasmourya10</a></h1> 
        </div>
    </div>
  )
}

export default contact
