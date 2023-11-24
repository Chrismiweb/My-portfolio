import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import {FaLinkedin} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai'

function Home() {
  const [text, setText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = [
    "Chrismi Bitero.",
    "A Front-End Developer."
  ];

  const handleText = () => {
    const currentWord = words[currentWordIndex];
    if (text.length < currentWord.length) {
      setText(currentWord.substring(0, text.length + 1));
    } else {
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
        setText("");
      }, 1000); // Pause for 1 second before typing the next sentence
    }
  };

  useEffect(() => {
    const textInterval = setInterval(handleText, 100);
    return () => {
      clearInterval(textInterval);
    };
  }, [text, currentWordIndex]);


  
  return (
    <div className='section1'>
        <div className='content-header'>
            <div className='my-name'>
              <h1>I Am</h1>
              <h2>{text}</h2>
            </div>

            <p> Welcome to my Frontend Development Showcase! Explore my portfolio to witness the synergy of design and functionality. Each click unveils a story of code, creativity, and innovation, showcasing the meticulous process behind each creation.
            </p>
            <p>Discover the coder in the 'About Me' section. Connect on the 'Contact' page for collaboration, questions, tech chat or Job offer. Let's create something amazing together on this digital journey!</p>

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