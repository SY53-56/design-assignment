
import vector from "../assets/Vector 5.png"
import rectangle1 from "../assets/Rectangle 657.png"
import rectangle2 from "../assets/Rectangle 658.png"
import rectangle3 from "../assets/Ellipse 739.png"
import Vector2510 from "../assets/Vector 2510.png"
import Vector2511 from "../assets/Vector 2511.png"
import Ellipse255 from "../assets/Ellipse 255.png"
import Ellipse256 from "../assets/Ellipse 256.png"
import Ellipse257 from "../assets/Ellipse 257.png"
import Ellipse258 from "../assets/Ellipse 258.png"
import Ellipse259 from "../assets/Ellipse 259.png"
import Ellipse260 from "../assets/Ellipse 260.png"
import Ellipse262 from "../assets/Ellipse 261.png"
import Ellipse261 from "../assets/Ellipse 262.png"
import Ellipse263 from "../assets/Ellipse 263.png"
import Ellipse268 from "../assets/Ellipse 268.png"
export default function Hero() {
  return (
  <section className='flex relative justify-center flex-col mt-14 mb-30 px-20'>
 <div className='w-[1300px]  flex flex-col justify-center items-center mt- relative h-92.5'>
      <h1 className="heading text-center leading-30 text-[80px]">
  The thinkers and <br />
  doers were ch
  <span
    className="relative inline-block px-4"
    style={{
      backgroundImage: `url(${rectangle1})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%",
    }}
  >
    anging
  </span>
  <br />
  the
  <span
    className="relative inline-block px-4"
    style={{
      backgroundImage: `url(${rectangle2})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100% 100%",
    }}
  >
    status
  </span>
  Quo with
</h1>
<img className='absolute top-20 w-96 left-96' src={vector} alt="" />
<p className='para leading-8 text-[22px] mt-2 w-[800px] text-center'>We are a team of strategists, designers communicators, researchers. Togeather,
we belive that progress only hghappens when you refuse to play things safe.</p>
 </div>
 <img className='absolute top-20 right-28 rotate-180 w-32' src={rectangle3} alt="" />
<img className="absolute h-72 top-56 left-1.5" src={Vector2510} alt="" />
<img className="absolute h-72 top-56 left-15" src={Vector2511}/>
<div className="relative flex ">
    <img className="w-40  " src={ Ellipse268} alt="" />
<img className="w-40  absolute top-10 left-1.5" src={ Ellipse263} alt="" />
<img className="w-40 absolute top-8 left-8 " src={ Ellipse262} alt="" />
<img className="w-40 absolute top-3.5 left-1.5" src={ Ellipse261} alt="" />
<img className="w-40 absolute top-6 left-8" src={ Ellipse260} alt="" />
<img className="w-40 absolute top-10 left-" s14rc={ Ellipse258} alt="" />
<img className="w-40 absolute top-20 right-40" src={ Ellipse257} alt="" />
<img className="w-40 absolute  top-3.5 right-1.5" src={ Ellipse256} alt="" />
<img className="w-40 absolute top-3.5 right-8" src={ Ellipse255} alt="" />
</div>
  </section>
  )
}
