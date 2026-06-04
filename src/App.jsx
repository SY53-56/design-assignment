import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './componement/Navbar'
import Hero from './componement/Hero'
import Footer from './componement/Footer'
import AboutSection from './componement/AboutSection'
import FeaturesSection from './componement/FeaturesSection'
import ReviewSection from './componement/ReviewSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className="overflow-x-hidden">
<Navbar/>
<Hero/>
<AboutSection/>
<FeaturesSection/>
<ReviewSection/>
<Footer/>
    </section>
    </>
  )
}

export default App
