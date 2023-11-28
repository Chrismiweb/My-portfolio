import React from 'react'
import './AboutSkills.css'
import skills from '../video/myskills.MOV'


function AboutSkills() {
  return (
    <div className='AboutMe'>
        <div className='AboutMe-container'>
        <div className='AboutMe-Skills'>
            <h1>SKILLS</h1>
            <div className='Skills-List'>
                <div className='Skills-category'>
                    <h3>LANGUAGES</h3>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    <p>React.js</p>
                    <p>Node.js</p>
                    <p>TailwinCss</p>
                    <p>Redux</p>
                </div>
                <div className='Skills-category'>
                    <h3>Graphic Design</h3>
                    <p>Coreldraw</p>
                    <p>Photoshop</p>
                    <p>Canva</p>
                    <p>Paint</p>
                </div>
                <div className='Skills-category'>
                    <h3>Other Skills</h3>
                    <p>Wordpress</p>
                    <p>NPM</p>
                    <p>Github</p>
                    <p>Laptop & Desktop repairs</p>
                    <p>Leadership & Communication</p>
                    <p>Critical thinking</p>
                    <p>Problem Solving</p>
                    <p>Adaptability & Accountability</p>
                    <p>Team Integration</p>




                </div>
            </div>
            

        </div>
    </div>
    
</div>
  )
}

export default AboutSkills