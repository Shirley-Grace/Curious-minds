import React from 'react'
import './Card.css'


export const Card = ({image ,name ,sub ,say}) => {
  return (
    <div className='details'>
       <h3>{name}</h3>
       <div className="portrait">{image}</div>
       <h4>{sub}</h4>
       <p>{say}</p>

    </div>
  )
}
