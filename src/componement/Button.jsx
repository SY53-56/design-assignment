import React from 'react'

export default function Button({name, className ,onClick}) {
  return (
    <button onClick={onClick} className={`${className} transition-all duration-500`}>{name}</button>
  )
}
