import React from 'react'
import "./Intro.css";
import { Link } from 'react-scroll';

function Intro() {
  return (
    <div className='intro'>
        <div className="introtext">
            <h1>Using your Childs Energy for something better</h1>
            <p>Ever wondered how you can use your childs energy
                to benefit both you and your child?
                this is the way
                
              </p>

            <li><Link to='about' className='btn'smooth={true} offset={-370} duration={-150}> Discover More </Link></li>
        </div>
    </div>
  )
}

export default Intro