import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='container'>
    <img src="images/cmlogo.png" alt="logo" srcset="" />
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Resources</li>
        <li>Plans</li>
        <li> <button className='btn'>Contact us</button></li>
    </ul>
   </nav>
  )
}

export default Navbar