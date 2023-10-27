import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Skills from './Skills'

function LandingPage() {
  return (
    <div className='content'>
        <Navbar/>
        <Home/>
        <Skills/>
    </div>
  )
}

export default LandingPage