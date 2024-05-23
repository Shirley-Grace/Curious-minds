import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
    <div className="left">
        <img src="images/idea.png" alt="" srcset="" />
    </div>
    <div className="middle">
        <h2>What is Curious Minds</h2>
        <p>
            We are a platform that enebles your child to learn 
            at the comfort of your home without disrupting their environmrnt. <br />
            
        </p><br />
        <p>
            <br />
        We target families that have toddlers , pre-school children
         and junior primary children whose minds are maliable and eager to<br />
        learn and absorb knowledge.            
        </p>
        <br />
        <p>
            <br />
        We take pride in our holiday programs that make use of the free
        time available on the holidays to teach invaluable skills to your children.<br />
        These skills build confidence and give your child a sense of pride after they can <br/>
        see tangiblr proof of their hard work and efforts.
            
        </p>
        <br />
        <p>
        <br />
        As the old saying goes  " education is the key to success " but here at<br />
         Curious Minds 
        we believe character creates opportunity. <br />
        <br />
        So why not build strong Character in your Child Early.
            
        </p>
    </div>
    <div className="right">
        <img src="images/creativity.png" alt="" />
    </div>
    </div>
  )
}

export default About