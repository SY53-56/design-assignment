import React from 'react'
import Arrow from "../assets/Arrow 4.png"
export default function Box({ img, h1, para, reversed }) {
  return (
    <div className={`flex justify-between px-16 gap-10 items-center ${reversed ? "flex-row-reverse gap-60" : ""}`}>

      <div className='w-[70%] '>
        <h1 className='heading text-6xl mb-6 leading-14'>{h1}</h1>
        <p className='text-[20px]'>{para}</p>
      <div className='flex gap-2 items-center mt-8 justify-start'>
          <button>Read more </button>
          <img src={Arrow} className='w-24 object-center' alt="" />
      </div>
      </div>

      <img src={img} className='w-80  ' alt="box image" />

    </div>
  )
}