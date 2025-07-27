import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vm] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
            Book Appointments <br></br> With Trusted Doctors
        </p>
        <div>
            <img src={assets.group_profiles} alt=''></img>
            <p>I_Trust_Dr connect you through list of trusted doctors, <br></br>schedule your appointments</p>
        </div>
        <a href=''>
            Book appointment<img src={assets.arrow_icon}></img>
        </a>

      </div>

      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img}></img>

      </div>
    </div>
  )
}

export default Header
