import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Skills from './Skills'
import Snow from '../Contact/Snow'

function LandingPage() {
  return (
    <div className='content'>
        <Snow/>
        <Navbar/>
        <Home/>
        <Skills/>
    </div>
  )
}

export default LandingPage