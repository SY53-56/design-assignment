import React from 'react'
import Box from './Box'
import photo1 from "../assets/image 348.png"
import photo2 from "../assets/image 348 (1).png"
import rectangle2 from "../assets/Rectangle 658.png"
import Highlight from './Highlight'

import vector from "../assets/Vector 5.png"
import polygon from "../assets/Polygon 3.png"
import polygon1 from "../assets/Polygon 1.png"
import vector2517 from "../assets/Vector 2517.png"

export default function AboutSection() {
  return (
    <section className="relative px-6 md:px-20 lg:px-28 mt-16 md:mt-24 flex flex-col gap-16">

      {/* BACKGROUND SHAPES */}
      

      <img
        src={vector2517}
        alt=""
        className="absolute right-0 bottom-96 lg:top-48 w-96 md:w-72 lg:w-[1000px]"
      />

      {/* VECTOR DECOR */}
           {/* BOX 1 */}
    <div className='relative'>
        <Box
        img={photo1}
        h1={
          <h1 className="text-2xl md:text-3xl lg:text-5xl leading-12">
            Tomorrow should  <br />be 
            
             better than <Highlight image={rectangle2} children="today" />
          </h1>
        }
        para={
          <p className="text-sm md:text-base lg:text-lg">
            We are a team of strategists, designers, communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>
        }
      />
      <img
        src={polygon}
        alt=""
        className="absolute  top-[450px] lg:top-10 right-18 md:right-2 w-20 md:w-32 -z-10"
      />
 <img
        src={vector}
        alt=""
        className="absolute top-12 lg:top-20 left-32 md:right-10  w-28 md:w-60 opacity-70 -z-10"
      />

    </div>

      {/* BOX 2 (REVERSED) */}
     <div className='relative mt-10'>
       <Box
        img={photo2}
        reversed
        h1={
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight">
            Building meaningful <br />
            digital experiences
          </h1>
        }
        para={
          <p className="text-sm md:text-base lg:text-lg">
            We combine creativity and strategy to deliver impactful digital products
            that help businesses grow and succeed in a competitive world.
          </p>
        }
      />
      <img
        src={polygon1}
        alt=""
        className="absolute top-76 lg:top-4 left-24 md:left-10 w-16 md:w-24 -z-10"
      />
        <img
        src={polygon1}
        alt=""
        className="absolute bottom-5 lg:top-60 left-96 md:left-72 w-16 md:w-24 "
      />
     </div>

    </section>
  )
}