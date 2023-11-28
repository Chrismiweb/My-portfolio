import React from 'react'
import './AboutMe.css'
import chrismi from '../Images/chrismi.jpg'

function AboutMe() {
  return (
    <div className='AboutMe'>
        <div className='AboutMe-container'>
            <div className='AboutMe-text'>
                <h1>ABOUT ME</h1>
                <p>I am a creative frontend developer 
                    with a passion for transforming 
                    designs into dynamic, user-friendly 
                    interfaces. With years of expertise 
                    in HTML, CSS, JavaScript, React, and 
                    tools like Tailwind, I thrive on using 
                    code to bring creative visions to life. 
                </p>            
                <p>Beyond coding, I possess a flair for 
                    graphics design, utilizing tools such as 
                    Photoshop, CorelDRAW, and Canva to 
                    craft visually appealing elements. 
                    Additionally, I've gained proficiency in 
                    hardware, having learned to repair 
                    laptops and desktops. My diverse 
                    skill set blends technical prowess 
                    with a keen eye for design, making me a 
                    versatile professional in both frontend 
                    development and technology maintenance.
                </p>
                <p>Fluent in four languages, 
                    I effortlessly navigate 
                    communication in English, 
                    French, Congolese Lingala, 
                    and Nigerian Yoruba. This 
                    linguistic versatility 
                    allows me to connect 
                    seamlessly with diverse 
                    audiences, fostering 
                    effective and meaningful 
                    interactions.
                </p>
            </div>
            <div className='AboutMe-video'>
                <img src={chrismi} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default AboutMe