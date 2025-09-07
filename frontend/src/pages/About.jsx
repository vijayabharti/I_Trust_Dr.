import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='flex flex-col my-10 md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>I_Trust_Dr. is built to empower patients with an easy, fast, and reliable way to book medical appointments. Whether you're looking for a general physician or a specialist, our platform ensures that you find the right doctor at the right time. No long queues, no uncertainty—just trusted care, made simple.</p>
          <p>It helps doctors manage their appointments while allowing patients to make informed choices and book with confidence.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>I_Trust_Dr. — where finding the right care is just a click away.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US?</span></p>

      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Verified & Trusted Doctors</b>
          <p>We list only certified and reviewed healthcare professionals, so you can book appointments with confidence.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Smart & Seamless Booking</b>
          <p>Our intelligent system shows real-time availability and allows instant booking—no calls, no confusion.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalized Experience</b>
          <p>From tailored suggestions to appointment reminders, we make your healthcare journey smooth and stress-free.</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
