import React from 'react'
import Navbar from '../component/Navbar'
import AboutMe from './AboutMe'
import AboutSkills from './AboutSkills'
import Snow from '../Contact/Snow'
import Experience from './Experience'
import Education from './Education'

function AboutPage() {
  return (
    <div className='AboutPage'>
        <Navbar/>
        <Snow/>
        <AboutMe/>
        <AboutSkills/>
        <Experience/>
        <Education/>
    </div>
  )
}

export default AboutPage