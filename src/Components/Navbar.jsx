import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [stick, setStick]= useState(false);
   
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 70 ? setStick(true) : setStick(false);
       })
    },[])
 


  return (
   <nav className={` ${stick? 'dark-nav': ''} `}>
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