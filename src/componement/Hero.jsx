import vector from "../assets/Vector 5.png";
import rectangle1 from "../assets/Rectangle 657.png";
import rectangle2 from "../assets/Rectangle 658.png";

import Vector2510 from "../assets/Vector 2510.png";
import Vector2511 from "../assets/Vector 2511.png";

import Ellipse257 from "../assets/Ellipse 257.png";
import Ellipse258 from "../assets/Ellipse 258.png";
import Ellipse259 from "../assets/Ellipse 259.png";
import Ellipse260 from "../assets/Ellipse 260.png";
import Ellipse261 from "../assets/Ellipse 261.png";
import Ellipse262 from "../assets/Ellipse 262.png";
import Ellipse263 from "../assets/Ellipse 263.png";
import Ellipse268 from "../assets/Ellipse 268.png";

import Highlight from "./Highlight";
import Avatar from "./Avatar";

export default function Hero() {
 const avatars = [
  {
    src: Ellipse257,
    className:
      "absolute left-0 top-24 w-16 md:w-24 lg:w-28",
  },
  {
    src: Ellipse258,
    className:
      "absolute left-20 top-10 w-16 md:w-24 lg:w-28",
  },
  {
    src: Ellipse268,
    className:
      "absolute left-96 -top-4 w-20 md:w-28 lg:w-32",
  },
  {
    src: Ellipse263,
    className:
      "absolute left-[520px] top-10 w-16 md:w-24 lg:w-28",
  },
  {
    src: Ellipse262,
    className:
      "absolute left-[760px] top-0 w-20 md:w-28 lg:w-32",
  },
  {
    src: Ellipse261,
    className:
      "absolute right-80 top-20 w-16 md:w-24 lg:w-28",
  },
  {
    src: Ellipse259,
    className:
      "absolute right-24 top-12 w-16 md:w-24 lg:w-28",
  },
  {
    src: Ellipse260,
    className:
      "absolute right-0 top-24 w-16 md:w-24 lg:w-28",
  },
];
  return (
    <section className="relative mb-16 overflow-hidden px-4 py-10 md:py-20">
      {/* Decorative Elements */}
      <img
        src={Vector2510}
        alt=""
        className="hidden lg:block absolute left-0 top-52 h-48 xl:h-64"
      />

      <img
        src={Vector2511}
        alt=""
        className="hidden lg:block absolute left-10 top-52 h-48 xl:h-64"
      />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="relative w-full">
          <h1 className="heading mx-auto max-w-6xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] leading-[1.05]">
            The thinkers and
            <br />
            doers were ch
            <Highlight image={rectangle1}>
              anging
            </Highlight>
            <br />
            the{" "}
            <Highlight image={rectangle2}>
              status
            </Highlight>
            Quo with
          </h1>

          <img
            src={vector}
            alt=""
            className="
              absolute
              left-1/2
              -translate-x-1/2
              top-10
              sm:top-14
              md:top-17
              lg:top-20
              w-40
              sm:w-56
              md:w-72
            "
          />
        </div>

        <p className="para text-base sm:text-lg md:text-xl leading-7 md:leading-8 mt-6 md:mt-10 max-w-3xl px-2">
          We are a team of strategists, designers, communicators,
          researchers. Together, we believe that progress only
          happens when you refuse to play things safe.
        </p>

        {/* Avatars */}
     {/* Desktop */}
<div className="relative w-full h-[220px] mt-16 hidden lg:block">
  {avatars.map((avatar, index) => (
    <Avatar
      key={index}
      src={avatar.src}
      className={avatar.className}
    />
  ))}
</div>

{/* Mobile */}
<div className="flex lg:hidden flex-wrap justify-center gap-4 mt-10">
  {avatars.map((avatar, index) => (
    <Avatar
      key={index}
      src={avatar.src}
      className="w-16"
    />
  ))}
</div>
      </div>
    </section>
  );
}