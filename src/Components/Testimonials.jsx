import React from 'react'
import './Testimonials.css'
import { Card } from './Card'





const Testimonials = () => {
  return (
    <div className='testimonials'>
       
        <div className="list">
          <Card  image={<img src="images/family1.jpg" alt="portrait" srcset="" className='pic'/>} name="Johnson Family" sub="Premium Plan"  say='Our experience with Curious minds has really helped our son express his creativity.'/>
          <Card  image={<img src="images/family2.jpg" alt="portrait" srcset="" className='pic'/>} name="Husein Family" sub="Pro Plan"  say='It has been a n absolute blessing with Jaia.She can learn and play without being addicted to tv.'/>
          <Card  image={<img src="images/family3.jpg" alt="portrait" srcset="" className='pic'/>} name="Wakaba Family" sub="Premium Plan"  say='The mobile tutors have really helped us in our home schooling journey.'/>
          <Card  image={<img src="images/kids1.jpg" alt="portrait" srcset="" className='pic'/>} name="Nelly Fred Juma" sub="Free Plan"  say='we have really learnt a lot of things that we did not learn in school.It is very helpful'/>
          <Card  image={<img src="images/kids2.jpg" alt="portrait" srcset="" className='pic'/>} name="Okach and Alfie" sub="Free Plan"  say='We have really enjoyed the Ubuntu sessions during the holidays.'/>
        </div>

    </div>
  )
}

export default Testimonials