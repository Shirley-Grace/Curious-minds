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
 

    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
      menu ? setMenu(false) : setMenu(true);
    }

  return (
   <nav className={` ${stick? 'dark-nav': ''} `}>
    <img src="images/cmlogo.png" alt="logo" srcset="" />

    <ul className={menu?'' : 'hide-menu'}>

        <li><Link to='intro' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='resources' smooth={true} offset={-370} duration={500}>Resources</Link></li>
        <li><Link to='about' smooth={true} offset={-400} duration={500}>About us</Link></li>
        <li><Link to='/plan'>Plans</Link></li>


        <li><Link to='contact' className='btn'smooth={true} offset={-370} duration={-150}>Contact Us</Link></li>

    </ul>
    <img src="images/menu.png" onClick={toggleMenu} className='menu-icon' alt="" />
   </nav>
  )
}

export default Navbar