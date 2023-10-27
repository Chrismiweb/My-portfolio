import React from 'react';
import './Navbar.css';
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
   <nav className='navbar'>
       <div className='logo'>
            <img src={logo} alt="" />
       </div>
       <div className='pages'>
            <Link to={'/'}><p>Home</p></Link>
            <a href="#"><p>About Me</p></a>
            <Link to={'/Allproject'}><p>Projects</p></Link>
            <a href="#"><p>Contact</p></a>
        </div>
        
   </nav>
  )
}

export default Navbar