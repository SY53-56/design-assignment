import React from "react";
import Box from "./Box";
import photo1 from "../assets/image 348.png";
import photo2 from "../assets/image 348 (1).png";
import rectangle2 from "../assets/Rectangle 658.png";
import Highlight from "./Highlight";

import polygon from "../assets/Polygon 3.png";
import polygon1 from "../assets/Polygon 1.png";
import vector2517 from "../assets/Vector 2517.png";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      
      {/* BACKGROUND SHAPES */}
      <img
        src={vector2517}
        alt=""
        className="
          absolute
          right-0
          bottom-20
          sm:bottom-32
          md:bottom-80
          lg:top-48
          w-48
          sm:w-72
          md:w-96
          lg:w-[1000px]
          pointer-events-none
        "
      />

      {/* BOX 1 */}
      <div className="relative">
        <Box
          img={photo1}
          h1={
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight">
              Tomorrow should <br />
              be better than{" "}
              <Highlight image={rectangle2} children="today" />
            </h1>
          }
          para={
            <p className="text-sm md:text-base lg:text-lg">
              We are a team of strategists, designers,
              communicators, researchers. Together,
              we believe that progress only happens
              when you refuse to play things safe.
            </p>
          }
        />

        <img
          src={polygon}
          alt=""
          className="
            absolute
            top-[390px]
            sm:top-[380px]
            md:top-[190px]
            lg:top-10
            lg:right-4
            md:right-0
           sm:right-0.5
           right-0
            w-12
            sm:w-16
            md:w-24
            lg:w-32
            -z-10
          "
        />
      </div>

      {/* BOX 2 (REVERSED) */}
      <div className="relative mt-10 lg:mt-20">
        <Box
          img={photo2}
          reversed
          h1={
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
              Building meaningful <br />
              digital experiences
            </h1>
          }
          para={
            <p className="text-sm md:text-base lg:text-lg">
              We combine creativity and strategy to deliver
              impactful digital products that help businesses
              grow and succeed in a competitive world.
            </p>
          }
        />

        <img
          src={polygon1}
          alt=""
         className="
  absolute
  top-[280px]
  sm:top-[320px]
  md:top-[10px]
  lg:top-4
  left-8
  sm:left-18
  md:left-6
  lg:left-10
  w-10
  sm:w-14
  md:w-20
  lg:w-24
  -z-10
"
        />

        <img
          src={polygon1}
          alt=""
         className="
  absolute
  top-[430px]
  sm:top-[380px]
  md:top-[270px]

  lg:top-60
  right-4
  sm:right-10
  md:left-48
  lg:left-80
  w-10
  sm:w-14
  md:w-20
  lg:w-24
"
        />
      </div>
    </section>
  );
}