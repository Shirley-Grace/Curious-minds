import React from 'react'
import './Resources.css';

function Resources() {
  return (
    <div className='resources'>
      <div className="activity">
        <img src="images/reading.png" alt="" srcset="" />
        <div className="quote">
          <img src="images/read.png" alt="" />
          <p>Learn</p>
        </div>
      </div>
      <div className="activity">
        <img src="images/playing.png" alt="" srcset="" />
        <div className="quote">
          <img src="images/play.png" alt="" />
          <p>Play</p>
        </div>
      </div>
      <div className="activity">
        <img src="images/painting.png" alt="" srcset="" />
        <div className="quote">
          <img src="images/draw.png" alt="" />
          <p>Draw</p>
        </div>
      </div>
    </div>
  )
}

export default Resources