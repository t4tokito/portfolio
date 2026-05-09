import React from 'react'
import mui from '../components/img/mui3.png'
import certificate1 from './certificates/1.jpg'
import certificate2 from './certificates/2.jpg'
import certificate3 from './certificates/03.jpg'
import certificate4 from './certificates/04.jpg'
import certificate5 from './certificates/05.jpg'
import certificate6 from './certificates/06.png'
import certificate7 from './certificates/07.jpg'
import certificate8 from './certificates/08.jpg'
import certificate9 from './certificates/09.jpg'
import certificate10 from './certificates/10.jpg'
import certificate11 from './certificates/11.jpg'

const certificate = () => {
  return (
    <div>
      <div>
        <div className='flex justify-center items-center'>
            <img src={mui} alt="Certificate" className='
            h-50'/>
            <h1 className='
            lilita-one-regular
          text-5xl
          md:text-7xl
          text-gray-800
          items-center
          gap-5
          mt-5
          flex'>Certificates!!</h1>
        </div>
        <div className='flex flex-wrap justify-center items-center mt-10 gap-10'>
            <img class="certificate" src={certificate1} alt="Certificate" className='
            h-50 certificate'/>
            <img class="certificate" src={certificate2} alt="Certificate" className='
            h-50 certificate'/>
            <img class="certificate" src={certificate3} alt="Certificate" className='
            h-50 certificate'/>
            <img class="certificate" src={certificate4} alt="Certificate" className='
            h-50 certificate'/>
            <img class="certificate" src={certificate5} alt="Certificate" className='
            h-50 certificate'/>
            <img class="certificate" src={certificate6} alt="Certificate" className='
            h-50 certificate'/>
            <img class="certificate" src={certificate7} alt="Certificate" className='
            h-50 certificate'/>
            <img class="certificate" src={certificate8} alt="Certificate" className='
            h-50 certificate'/>
            <img class="certificate" src={certificate9} alt="Certificate" className='
            h-50 certificate'/>
            <img class="certificate" src={certificate10} alt="Certificate" className='
            h-50 certificate'/> 
            <img class="certificate" src={certificate11} alt="Certificate" className='
            h-50 certificate'/> 
        </div>
      </div>
    </div>
  )
}

export default certificate
