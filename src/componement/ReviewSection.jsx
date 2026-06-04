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
    { src: Ellipse268 ,className: "w-24 md:w-28"},
    { src: Ellipse263, className: "w-24 md:w-28" },
    { src: Ellipse262 , className: "w-24 md:w-28" },
    { src: Ellipse261, className: "w-24 md:w-28" },
  ];

  const avatarsRight = [
    { src: Ellipse260,className: "w-24 md:w-28" },
    { src: Ellipse259, className: "w-24 md:w-28" },
    { src: Ellipse257,className: "w-24 md:w-28" },
    { src: Ellipse258,className: "w-24 md:w-28" },
  ];

  return (
    <section className="px-6 lg:px-28 md:px-10 mt-20 flex flex-col lg:flex-row justify-between">

      {/* LEFT AVATARS */}
      <div className="flex flex-col gap-6 items-center mt-30 lg:items-end">

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
      <div className="relative max-w-4xl text-center">

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
        <div className="px-10 w-[600px] md:px-10 relative py-6 md:py-8 mt-10 bg-[#D7EEDD4D] rounded-3xl text-left">

          <div className="flex absolute top-10 left-3 gap-1">
            <img className="w-16" src={Inverted1} alt="" className="w-6 md:w-8" />
            <img className="w-20" src={Inverted1} alt="" className="w-6 md:w-8" />
          </div>

          <p className="text-3xl leading-7 text-center md:text-[21px] ml-10 mt-5">
            Elementum delivered the site within the timeline as requested. In the end, the client found a 50%
            increase in traffic within days since its launch. They also had an impressive ability to use technologies
            that the company hasn’t used, which have also proved to be easy to use and reliable.
          </p>
          <div className="flex absolute top-50 right-10 gap-1">
            <img className="w-16" src={Inverted2} alt="" className="w-6 md:w-8" />
            <img className="w-20" src={Inverted2} alt="" className="w-6 md:w-8" />
          </div>

        </div>

      </div>

      {/* RIGHT AVATARS */}
      <div className="flex flex-col mt-30 gap-6 items-center lg:items-start">

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