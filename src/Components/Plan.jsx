import React from 'react'
import './Plan.css'

export const Plan = () => {
  return (
    <div className='plans'>
       <div className="basic">
       <h2>Your Selected Plan</h2>
        <p>This plan offers the following items</p>
        <ul>
            <li>free selected games</li>
            <li>free selected colouring pages</li>
            <li>free selected videos per day</li>
            <li>1 device allowed</li>
        </ul>
        <div className="packages">
            <h2>Basic Plan</h2>
            <b>Free </b>
            <span> per month</span>
       </div>

            
        </div>
       <div className="pro">
       <h2>Your Selected Plan</h2>
        <p>This plan offers the following items</p>
        <ul>
            <li>All selected games</li>
            <li>All colouring pages</li>
            <li>50 videos per day</li>
            <li>2 device allowed</li>
            <li>4 days Mobile tutor</li>

        </ul>
        <div className="packages">
            <h2>Pro Plan</h2>
            <b>10$ </b>
            <span>per month</span>

            {/* <button className='btn'>Pay Here</button> */}
       </div>

            
        </div>
       <div className="premium">
       <h2>Your Selected Plan</h2>
        <p>This plan offers the following items</p>
        <ul>
            <li>All games</li>
            <li>All colouring pages</li>
            <li>Unlimited videos per day</li>
            <li>Mobile Tutor for unlimited sessions</li>
            <li>upto 5 device allowed</li>
            <li>Unlimited Dowmload</li>
        </ul>
        <div className="packages">
            <h2>Premium Plan</h2>
            <b>20$ </b>
            <span>per month</span>
            {/* <button className='btn'>Pay Here</button> */}

       </div>

            
        </div>
    </div>
  )
}
