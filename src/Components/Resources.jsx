import React from 'react'
import './Resources.css';
import {Route, Routes } from 'react-router-dom';
import Draw from './Draw';
import Learn from './Learn';
import { Play } from './Play';


function Resources() {
 
  return (
    <div className='resources'>
      <div className="activity" >
        <img src="images/reading.png" alt="" srcset="" />
        <div className="quote">
          <img src="images/read.png" alt="" />
          <Routes>
            <Route path='/learn' exact Component={<Learn/>}/>
          </Routes>
          <p>Learn</p>
        </div>
      </div>
      <div className="activity">
        <img src="images/playing.png" alt="" srcset="" />
        <div className="quote">
        <Routes>
            <Route path='/play' exact Component={<Play/>}/>
          </Routes>
          <img src="images/play.png" alt="" />
          <p>Play</p>
        </div>
      </div>
      <div className="activity">
        <img src="images/painting.png" alt="" srcset="" />
        <div className="quote">
        <Routes>
            <Route path='/draw ' exact Component={<Draw/>}/>
          </Routes>
          <img src="images/draw.png" alt=""/>
          <p>Draw</p>
        </div>
        
      </div>
    </div>
  )
}

export default Resources