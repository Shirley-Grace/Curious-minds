import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

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
        <li><Link to='intro' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='resources' smooth={true} offset={0} duration={500}>Resources</Link></li>
        <li><Link to='about-us' smooth={true} offset={0} duration={500}>About us</Link></li>
        <li><Link to='plans'>Plans</Link></li>
      
        <li> <button className='btn'>Contact us</button></li>
    </ul>
   </nav>
  )
}

export default Navbar