import vector from "../assets/Vector 5.png";
import rectangle1 from "../assets/Rectangle 657.png";
import rectangle2 from "../assets/Rectangle 658.png";
import rectangle3 from "../assets/Ellipse 739.png";

import Vector2510 from "../assets/Vector 2510.png";
import Vector2511 from "../assets/Vector 2511.png";

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

import Highlight from "./Highlight";
import Avatar from "./Avatar";

export default function Hero() {
const avatars = [
  { src: Ellipse268, className: "translate-y-10 w-24" },
  { src: Ellipse263, className: "w-28" },
  { src: Ellipse262, className: "-translate-y-12 w-32" },
  { src: Ellipse261, className: "translate-y-12 tranlate-x-1 w-28" },
  { src: Ellipse260, className: "w-32" },
  { src: Ellipse259, className: "translate-y-8 w-28" },
  { src: Ellipse258, className: "-translate-y-4 w-24" },
];

  return (
    <section className="relative overflow-hidden  pt-12 pb-24">
      {/* Decorative Elements */}
      <img
        src={rectangle3}
        alt=""
        className="absolute top-16 right-10 w-28"
      />

      <img
        src={Vector2510}
        alt=""
        className="absolute left-0 top-64 h-64"
      />

      <img
        src={Vector2511}
        alt=""
        className="absolute left-12 top-64 h-64"
      />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="relative">
          <h1 className="heading text-[60px] md:text-[80px] leading-none">
            The thinkers and
            <br />
            doers were ch
            <Highlight image={rectangle1}>
              anging
            </Highlight>
            <br />
            the
            <Highlight image={rectangle2}>
              status
            </Highlight>
            Quo with
          </h1>

          <img
            src={vector}
            alt=""
            className="absolute left-1/2 -translate-x-1/2  top-18 w-80"
          />
        </div>

        <p className="para text-[20px] leading-8 mt-10 max-w-3xl">
          We are a team of strategists, designers, communicators,
          researchers. Together, we believe that progress only
          happens when you refuse to play things safe.
        </p>

        {/* Avatars */}
        <div className="w-full  relative max-w-6xl mt-20 flex justify-between items-end">
          {avatars.map((avatar, index) => (
            <Avatar
              key={index}
              src={avatar.src}
              className={avatar.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}