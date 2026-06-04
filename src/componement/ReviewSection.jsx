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
    { src: Ellipse268 ,className: "w-24  md:w-28 translate-x-10"},
    { src: Ellipse263, className: "w-16 md:w-20  -translate-x-10" },
    { src: Ellipse262 , className: "w-16 md:w-28 translate-x-10" },
    { src: Ellipse261, className: "w-24 md:w-20 -translate-x-10" },
  ];

  const avatarsRight = [
    { src: Ellipse260,className: "w-24 md:w-28  translate-x-10" },
    { src: Ellipse259, className: "w-24 md:w-20  -translate-x-10" },
    { src: Ellipse257,className: "w-24 md:w-28  translate-x-10" },
    { src: Ellipse258,className: "w-24 md:w-20  -translate-x-10" },
  ];

  return (
    <section className="px-6 md:px-10 mb-16 lg:px-28 mt-20 flex flex-col gap-10 lg:flex-row ">

      {/* LEFT AVATARS */}
      <div className="flex flex-col mt-40 gap-5">
        {avatarsleft.map((img, i) => (
          <img
            key={i}
            src={img.src}
            className={img.className}
            alt=""
          />
        ))}
      </div>

      {/* CENTER CONTENT */}
      <div className="relative max-w-4xl text-center mx-auto lg:mx-0">

        <h1 className="heading text-4xl md:text-6xl lg:text-7xl">
          <Highlight image={rectangle2} children="What" /> our customer <br />
          says About Us
        </h1>

        <img
          className="absolute top-20 md:top-36 right-0 md:right-24 w-40 md:w-80 opacity-60"
          src={vector}
          alt=""
        />

        {/* TESTIMONIAL BOX */}
        <div className="px-6 sm:px-10 w-full max-w-xl relative py-6 md:py-8 mt-10 bg-[#D7EEDD4D] rounded-3xl text-left mx-auto">

          <div className="flex absolute top-10 left-3 gap-1">
            <img className="w-6 md:w-8" src={Inverted1} alt="" />
            <img className="w-6 md:w-8" src={Inverted1} alt="" />
          </div>

          <p className="text-base md:text-[21px] leading-7 text-center ml-10 mt-5">
            Elementum delivered the site within the timeline as requested. In the end, the client found a 50%
            increase in traffic within days since its launch. They also had an impressive ability to use technologies
            that the company hasn’t used, which have also proved to be easy to use and reliable.
          </p>
          <div className="flex absolute bottom-6 right-6 gap-1">
            <img className="w-6 md:w-8" src={Inverted2} alt="" />
            <img className="w-6 md:w-8" src={Inverted2} alt="" />
          </div>

        </div>

      </div>

      {/* RIGHT AVATARS */}
      <div className="flex flex-col mt-28 gap-6 t">
        {avatarsRight.map((img, i) => (
          <img
            key={i}
            src={img.src}
            className={img.className}
            alt=""
          />
        ))}
      </div>

    </section>
  )
}