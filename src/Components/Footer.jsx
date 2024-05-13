import React from 'react'
import './Foooter.css'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className='right'>
            <img className='footer-logo'src="images/cmlogo.png" alt="" srcset="" />

        <p> 2024 Curious Minds</p>
        </div >
        <ul className='socials'>
          
            <li><img src="images/instagram.png" alt="" className='icon'/>Instagram</li>
            <li><img src="images/facebook.png" alt="" className='icon'/>Instagram</li>
            <li><img src="images/pinterest.png" alt="" className='icon'/>Instagram</li>
            <li><img src="images/twitter.png" alt=""className='icon' />Instagram</li>
        </ul>
        <ul className='links'>
            <label >Links</label>
            <li>About Us</li>
            <li>Resources</li>
            <li>Plans</li>
            <li>Contact Us</li>
        </ul>

        
    </div>

  )
}
