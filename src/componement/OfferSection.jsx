import React from 'react'
import Arrow from "../assets/Arrow 4.png"
export default function OfferSection({ heading, para }) {
  return (
    <div className='border-t-2 border-gray-400 py-6 flex flex-col gap-6 md:flex-row md:items-center md:gap-10'>
      <div className='flex-1'>
        <p className='text-xl md:text-2xl'>{para}</p>
      </div>
      <div className='flex-1'>
        <h1 className='heading text-xl md:text-3xl'>{heading}</h1>
      </div>
      <img className='w-28 md:w-44 object-contain' src={Arrow} alt="" />
    </div>
  )
}
