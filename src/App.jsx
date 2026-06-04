import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './componement/Navbar'
import Hero from './componement/Hero'
import Footer from './componement/Footer'
import AboutSection from './componement/AboutSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section>
<Navbar/>
<Hero/>
<AboutSection/>
<Footer/>
    </section>
    </>
  )
}

export default App
