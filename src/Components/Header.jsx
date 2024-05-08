import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    
       <div className="w-25 h-25 p-3 ">
  <nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <img src="images\logo.jpg" alt="lg" />
    <div className="container-fluid">
        <NavLink >Home</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Contact Us</NavLink>
      
    </div>
  </nav>
</div>

  )
}

export default Header