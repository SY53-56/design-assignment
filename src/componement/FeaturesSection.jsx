import React from 'react'
import OfferSection from './OfferSection'
import rectangle2 from "../assets/Rectangle 658.png";
import Highlight from './Highlight';
import vector2517 from "../assets/Vector 2517.png"
import rectangle661 from "../assets/Rectangle 661.png"
export default function FeaturesSection() {
  return (
    <section className='mt-30 relative px-6 lg:px-28'>
        <h1 className='heading text-7xl'>What we <Highlight image={rectangle2} children="can "/><br/>
offer you!</h1>
<img className='absolute -top-48 -right-20 w-[800px]' src={vector2517} alt="" />

<div className='flex flex-col relative gap-10 mt-10'>
<OfferSection para={<p>Office of multiple <br/>
interest content</p>} heading="Colaborative & partnership"/>
<OfferSection para={<p>Office of multiple <br/>
interest content</p>} heading="Colaborative & partnership"/>
<OfferSection para={<p>Office of multiple <br/>
interest content</p>} heading="Colaborative & partnership"/>
<img className='absolute top-76 right-80 -z-40 w-28' src={rectangle661} alt="" />
</div>
    </section>
  )
}
