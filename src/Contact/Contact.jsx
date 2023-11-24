import React from 'react'
import './Contact.css'
import Navbar from '../component/Navbar'
import Snow from './Snow'


function Contact() {
  return (
    <div className='contact'>
        <Navbar/>
        <Snow/>
        <div className='project-section'>
            <h1>CONTACT ME.</h1>
        </div>
        <div className='contact-container'>
            <div className='contact-info'>
                <h1>My Contact Information</h1>
                <p>PHONE NO: +2348106794406</p>
                <p>EMAIL: chrismibiteso@gmail.com</p>
                <p>LinkedIn:@chrismi david</p>

            </div>
            <div className='contact-msg'>
                <input type="text" placeholder='NAME' />
                <input type='email' placeholder='EMAIL' />
                <textarea name="" id="" cols="10" rows="10" placeholder='MESSAGE'></textarea>
                <button>SEND MESSAGE</button>
            </div>
        </div>
    </div>
  )
}

export default Contact