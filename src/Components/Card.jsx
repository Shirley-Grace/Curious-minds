import React from 'react'
import './Card.css'

export const Card = ({img ,name ,sub ,say}) => {
  return (
    <div className='details'>
        <div className="portrait">
            {img }
        </div>
        <h3>{name}</h3>
        <h4>{sub}</h4>
        <p>{say}</p>

    </div>
  )
}
