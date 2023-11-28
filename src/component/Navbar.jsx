import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from "react-icons/io";


function Navbar() {
     const[mobile,SetMobile]=useState(false)
     
     const show = ()=>{
          SetMobile(!mobile)
     }

     
     
  return (
   <div className='navbar-container'>

       <nav className='navbar'>
          <div className='logo'>
               <Link to={'/'}><img src={logo} alt="" /></Link>
          </div>
          <button className='mobile-icon' onClick={show}>
               {mobile ? <IoMdClose /> : <IoMdMenu />}
          </button>

          <div className='pages'>
               <Link to={'/'}><p>Home</p></Link>
               <Link to={'/AboutPage'}><p>About Me</p></Link>
               <Link to={'/Allproject'}><p>Projects</p></Link>
                <Link to={'/Contact'}><p>Contact</p></Link>
          </div> 
          
       </nav>
       <div className={mobile ? "mobile-menu1": 'mobile-menu2'}>
          <Link to={'/'}><p>Home</p></Link>
          <Link to={'/AboutPage'}><p>About Me</p></Link>
          <Link to={'/Allproject'}><p>Projects</p></Link>
          <Link to={'/Contact'}><p>Contact</p></Link>
      </div>
   </div>
   
  )
}

export default Navbar