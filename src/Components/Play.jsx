import "./Play.css"
import React from 'react'
import Title from "./Title"
import { Card } from "./Card"


export const Play = () => {
  return (
    <div >
      <Title subTitle='holiday activities' title='Learn How to Draw' />

      <div className="play">

      <Card image={<img src="images/circle.png" alt="portrait" srcset="" className='activity'/>} name="KAYAMBA"  say='Join the Kayamba program that gives your child to learn a music instrument of choice.'/>
      <Card image={<img src="images/square.png" alt="portrait" srcset="" className='activity'/>} name="NZOORI"  say='Join the Nzoori program that allows your child to learn an international language and broaden their language knowledge..'/>
      <Card image={<img src="images/triangle.png" alt="portrait" srcset="" className='activity'/>} name="MAKASI"  say='Join the Makasi program that utilizes your childs creativity in the art of crafting.'/>

      
      </div>
 
    </div>
  )
}
