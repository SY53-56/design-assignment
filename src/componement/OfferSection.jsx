import React from 'react'
import Arrow from "../assets/Arrow 4.png"
export default function OfferSection({heading ,para}) {
  return (
    <div className='border-t-2 border-gray-400 py-3 flex gap-10'>
   <p className='text-2xl mt-5'>{para}</p>
   <h1 className='heading text-5xl mt-5'>{heading}</h1>
   <img className='w-44 items-center object-contain mt-5' src={Arrow} alt="" />
    </div>
  )
}
