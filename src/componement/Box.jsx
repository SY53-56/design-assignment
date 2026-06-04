import React from 'react'
import Arrow from "../assets/Arrow 4.png"
export default function Box({ img, h1, para, reversed }) {
  return (
    <div className={`flex flex-col gap-10 px-6 md:px-16 items-center ${reversed ? "md:flex-row-reverse" : "md:flex-row"} md:justify-between`}>

      <div className='w-full md:w-[60%]'>
        <h1 className='heading text-4xl md:text-6xl mb-6 leading-tight'>{h1}</h1>
        <p className='text-base md:text-[20px]'>{para}</p>
        <div className='flex gap-2 items-center mt-8 justify-start'>
          <button>Read more </button>
          <img src={Arrow} className='w-24 object-center' alt="" />
        </div>
      </div>

      <img src={img} className='w-full max-w-md md:w-80' alt="box image" />

    </div>
  )
}