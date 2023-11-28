import React from 'react'
import './Education.css'
import chrismi2 from '../Images/chrismi2.jpg'
import { Link } from 'react-router-dom'

function Education() {
  return (
    <div className='AboutMe'>
    <div className='AboutMe-container'>
        <div className='AboutMe-video'>
            <img src={chrismi2} alt="" />
        </div>
        <div className='AboutMe-text'>
            <h1>EDUCATION</h1>
            <h3>UNIVERSITY OF ILORIN, Kwara State, Nigeria.</h3>
            <h4>-> Bsc. Computer Science(2021-Till Date).</h4>
            <h1>CERTIFICATES</h1>
            <h4>->  Certificate Of Completion In Front-End Development.</h4>            
            <h4>-> Certificate Of Diploma in Desktop Publishing.</h4>
            <h4>-> Diploma in Computer Engineering & Laptop Repair.</h4>

            <div className='check-project'>
            <Link to={'/Allproject'}>
                <p>Check Out My Projects -></p>
            </Link>
            </div>
        </div>
        
        
    </div>
    
</div>
  )
}

export default Education