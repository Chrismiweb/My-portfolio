import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import {FaLinkedin} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai'

function Home() {
  return (
    <div className='section1'>
        <div className='content-header'>
            <h1 className='my-name'>
              <span>I'M </span>
              <div className='message'>
                  <div className='word1'>CHRISMI BITERO</div>
                  <div className='word2'>a frontend developer</div>
              </div>
            </h1>


            <p> Welcome to my Frontend Development Showcase! 
Step into a world where pixels come to life, and user experiences are crafted with passion. I invite you to explore my portfolio, where each click unveils a story of code, creativity, and innovation. Dive into my projects to witness the synergy of design and functionality, discover the tech behind the scenes, and understand the meticulous process that goes into each creation.

<p>Curious about the mind behind the code? Head over to the "About Me" section to get acquainted. Let's connect! Whether you're seeking collaboration, have a question, or just want to chat tech, the "Contact" page is just a click away. Embark on this digital journey, and let's build something amazing together!</p>
            </p>
            <Link to={'/AboutPage'}><h4>See More About Me -> </h4></Link>
            <div className='social-logo'>
              <a href=""><i><FaLinkedin/></i></a>
              <a href=""><i><AiFillGithub/></i></a>
              <a href=""><i><FaLinkedin/></i></a>
            </div>
                
        </div>
    </div>
  )
}

export default Home