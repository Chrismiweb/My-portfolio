import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='section1'>
        <div className='content-header'>
            <h1>I'M CHRISMI BITERO</h1>
            <p>Your friendly neighborhood 
              frontend developer, UX architect, 
              and JavaScript engineer. I spend 
              my days (and often nights) 
              painting the Internet canvas 
              with PROJECTS and lines of code, 
              turning zeroes and ones into 
              immersive, interactive experiences,

              Bona fide photochromic LENS 
              enthusiast - sunlight or indoors,
               I've got it covered. I tread 
               the path of minimalism, finding
                beauty in simplicity and order.
                 When I'm not crafting beautiful 
                 web experiences, you can find me
                  reading ARTICLES or swaying to 
                  the rhythm of Pop Music & Jazz, 
                  losing myself in the captivating flow of melodies. anyways you can CONTACT ME
            </p>
            <Link to={'/AboutPage'}><h4>See More About Me -> </h4></Link>
            <div>
              <a href=""><button>linkedIn</button></a>
              <a href=""><button>github</button></a>
              <a href=""><button>instagram</button></a>



            </div>
                
        </div>
    </div>
  )
}

export default Home