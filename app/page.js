import React from 'react'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

const page = () => {
  return (
    <div>
    <Home/>
     <Services/>
     <About/>
     <Contact/>
    </div>
  )
}

export default page
