import React from 'react'
import Box from './Box'
import photo1 from "../assets/image 348.png"
import photo2 from "../assets/image 348 (1).png"
import rectangle2 from "../assets/Rectangle 658.png";
import Highlight from './Highlight';
import vector from "../assets/Vector 5.png";
import polygon from "../assets/Polygon 3.png"
import polygon1 from "../assets/Polygon 1.png"
import vector2517 from "../assets/Vector 2517.png"
export default function AboutSection() {
  return (
    <section className='px-24 relative mt-20 mb-10 flex flex-col gap-12 '>
<img className='absolute w-[1200px] top-44 right-0' src={vector2517} alt="" />
  <div className=' relative mb-15'>
        <Box
       h1={
  <h1>
    Tomorrow should 
    <br />
    be better than <Highlight children="today" image={rectangle2}/>
  </h1>
}
        para={<p>We are a team of strategists, designers, communicators, researchers.<br/> Together, we believe that progress only happens when you refuse to play things safe.</p>}
        img={photo1}
      />
<img className='absolute top-20 left-19 w-60' src={vector} alt="" />
<img className='absolute right-0 w-44 top-6 -z-50' src={polygon} alt="" />
  </div>
       <div className=' relative'>
        <Box
       h1={
  <h1>
<Highlight children="see" image={rectangle2}/> how we can <br/>
 help you progress
  </h1>
}
        para={<p>We are a team of strategists, designers, communicators, researchers.<br/> Together, we believe that progress only happens when you refuse to play things safe.</p>}
        img={photo1}
        reversed
      />
<img className='absolute top-36 right-60 w-60' src={vector} alt="" />
<img className='absolute top-1.5 left-9 -z-40 w-36' src={polygon1}alt="" />
<img className='absolute top-56  left-60 w-36' src={polygon1}alt="" />

  </div>

    </section>
  )
}