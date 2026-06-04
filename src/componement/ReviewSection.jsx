import React from 'react'
import Highlight from './Highlight'
import rectangle2 from "../assets/Rectangle 658.png";
import vector from "../assets/Vector 5.png";
import Inverted1 from '../assets/inverted comma 1.png'
import Inverted2 from '../assets/inverted comma 4.png'
import Ellipse255 from "../assets/Ellipse 255.png";
import Ellipse256 from "../assets/Ellipse 256.png";
import Ellipse257 from "../assets/Ellipse 257.png";
import Ellipse258 from "../assets/Ellipse 258.png";
import Ellipse259 from "../assets/Ellipse 259.png";
import Ellipse260 from "../assets/Ellipse 260.png";
import Ellipse261 from "../assets/Ellipse 261.png";
import Ellipse262 from "../assets/Ellipse 262.png";
import Ellipse263 from "../assets/Ellipse 263.png";
import Ellipse268 from "../assets/Ellipse 268.png";

export default function ReviewSection() {

  const avatarsleft = [
    { src: Ellipse268 ,className: "w-24  md:w-28 -translate-y-10 lg:translate-x-10"},
    { src: Ellipse263, className: "w-16 md:w-20 translate-y-10  lg:-translate-x-10" },
    { src: Ellipse262 , className: "w-16 md:w-28 -translate-y-10 lg:translate-x-10" },
    { src: Ellipse261, className: "w-24 md:w-20 translate-y-10 lg:-translate-x-10" },
  ];

  const avatarsRight = [
    { src: Ellipse260,className: "w-24 md:w-28   translate-y-10 lg:translate-x-10" },
    { src: Ellipse259, className: "w-24 md:w-20   -translate-y-10 lg:-translate-x-10" },
    { src: Ellipse257,className: "w-24 md:w-28   translate-y-10 lg:translate-x-10" },
    { src: Ellipse258,className: "w-24 md:w-20   -translate-y-10 lg:-translate-x-10" },
  ];

  return (
   <section className="px-4 md:px-8 py-16 flex flex-col lg:flex-row items-center justify-center gap-10 overflow-hidden">
  
  {/* LEFT AVATARS */}
  <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 order-2 lg:order-1">
    {avatarsleft.map((img, i) => (
      <img
        key={i}
        src={img.src}
        alt=""
        className={img.className}
      />
    ))}
  </div>

  {/* CENTER CONTENT */}
  <div className="relative flex-1 max-w-4xl text-center order-1 lg:order-2">

    <img
      src={vector}
      alt=""
      className="absolute top-10 md:top-24 right-5 md:right-20 w-32 md:w-64 opacity-50 -z-10"
    />

    <h1 className="heading text-3xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
      <Highlight image={rectangle2}>
        What
      </Highlight>{" "}
      our customer
      <br />
      says About Us
    </h1>

    {/* TESTIMONIAL */}
    <div className="relative mt-10 max-w-2xl mx-auto bg-[#D7EEDD4D] rounded-3xl px-6 md:px-10 py-8">

      <div className="absolute top-5 left-5 flex">
        <img src={Inverted1} alt="" className="w-5 md:w-7" />
        <img src={Inverted1} alt="" className="w-5 md:w-7" />
      </div>

      <p className="text-sm md:text-lg leading-7 text-center px-4 md:px-8">
        Elementum delivered the site within the timeline as requested.
        In the end, the client found a 50% increase in traffic within
        days since its launch. They also had an impressive ability to
        use technologies that the company hadn’t used before.
      </p>

      <div className="absolute bottom-5 right-5 flex">
        <img src={Inverted2} alt="" className="w-5 md:w-7" />
        <img src={Inverted2} alt="" className="w-5 md:w-7" />
      </div>
    </div>
  </div>

  {/* RIGHT AVATARS */}
  <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 order-3">
    {avatarsRight.map((img, i) => (
      <img
        key={i}
        src={img.src}
        alt=""
        className={img.className}
      />
    ))}
  </div>

</section>
  )
}