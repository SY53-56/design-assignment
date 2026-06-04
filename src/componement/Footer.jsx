import React from 'react'
import Button from './Button'
import rectangle3 from "../assets/Ellipse 739.png"
export default function Footer() {
  return (
    <footer className='bg-[#D7EEDD] px-6 md:px-20 relative'>
      <div className='flex relative flex-col justify-center items-center'>
        <h1 className='heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mt-24'>
          Subscribe to <br />
          our newsletter
        </h1>
        <p className='text-lg md:text-2xl text-center max-w-2xl'>To make your stay special and even more memorable</p>
        <Button className="rounded-4xl mt-5 px-8 py-3 bg-black text-white" name="Subscribe Now" />
      </div>
      <img className='hidden md:block absolute top-40 right-16 w-32' src={rectangle3} alt="" />
      <div className='mt-20 flex flex-col gap-10 lg:flex-row justify-between border-t-2 py-10'>
        <div className='flex flex-col gap-2 w-full sm:w-1/2 lg:w-auto'>
          <h1 className='text-2xl font-bold mb-4'>Company</h1>
          <li className='list-none cursor-pointer'>Home</li>
          <li className='list-none'>Studio</li>
          <li className='list-none'>Service</li>
          <li className='list-none'>Blog</li>
        </div>
        <div className='flex flex-col gap-2 w-full sm:w-1/2 lg:w-auto'>
          <h1 className='text-2xl font-bold'>Terms & Policies</h1>
          <li className='list-none'>Privacy Policy</li>
          <li className='list-none'>Terms & Conditions</li>
          <li className='list-none'>Explore</li>
          <li className='list-none'>Accesibility</li>
        </div>
        <div className='flex flex-col gap-2 w-full sm:w-1/2 lg:w-auto'>
          <h1 className='text-2xl font-bold'>Follow Us</h1>
          <li className='list-none'>Instagram</li>
          <li className='list-none'>LinkedIn</li>
          <li className='list-none'>Youtube</li>
          <li className='list-none'>Twitter</li>
        </div>
        <div className='flex flex-col gap-2 w-full sm:w-1/2 lg:w-auto'>
          <h1 className='text-2xl font-bold'>Terms & Policies</h1>
          <li className='list-none'>1498w Fluton ste, STE <br />2D Chicgo, IL 63867.</li>
          <li className='list-none'>(123) 456789000</li>
          <li className='list-none'>info@elementum.com</li>
        </div>
      </div>
    </footer>
  )
}
