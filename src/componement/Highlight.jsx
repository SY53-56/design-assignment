import React from 'react'

export default function Highlight({children,image}) {
  return (
   <span
      className="relative inline-block px-4"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      {children}
    </span>
  )
}
