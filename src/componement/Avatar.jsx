import React from 'react'

export default function Avatar({src,className}) {
  return (
    <img
      src={src}
      alt=""
      className={` w-40 ${className}`}
    />
  )
}
