import React from 'react';
import './Navbar.css';
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
   <nav className='navbar'>
       <div className='logo'>
            <Link to={'/'}><img src={logo} alt="" /></Link>
       </div>
       <div className='pages'>
            <Link to={'/'}><p>Home</p></Link>
            <Link to={'/AboutPage'}><p>About Me</p></Link>
            <Link to={'/Allproject'}><p>Projects</p></Link>
            <a href="#"><p>Contact</p></a>
        </div>
        
   </nav>
  )
}

export default Navbar