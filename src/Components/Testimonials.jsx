import React, { useRef } from 'react'
import './Testimonials.css'

const Testimonials = () => {


   const slider = useRef();
   let tx = 0;

const next = () => {
  if (tx > 50) {
    tx -= 25;
   
  }
  slider.current.style.transform = `translateX(${tx}%)`
}

const previous = () => {

}




  return (
    <div className='testimonials'>
        <img src="images/left-right.png" alt="" className='prev' onClick={previous}/>
        <img src="images/left-right.png" alt="" className='next' onClick={next}/>
        <div className="carousel">
          <ul ref={slider}>

            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src="images/family1.jpg" alt=""  />
                  <div className='name'>
                    <h3>johnson family</h3>
                    <span>paid plan</span>
                  </div>
                  <div>
                    <p>we have been having  <br />a wonderful time using curious <br /> minds with our 3yr old son <br />
                    jsdcknsduncsd ckjdcns dck <br />sdc sdkc fi rfieknd sdkcmlsdk <br />
                    skei soiefi kdfjvd oirfnw <br /> opepjqn oqenc oaka zolqwijdna dposkdc .
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src="images/family6.jpg" alt=""  />
                  <div className='name'>
                    <h3>johnson family</h3>
                    <span>paid plan</span>
                  </div>
                  <div>
                    <p>we have been having  <br />a wonderful time using curious <br /> minds with our 3yr old son <br />
                    jsdcknsduncsd ckjdcns dck <br />sdc sdkc fi rfieknd sdkcmlsdk <br />
                    skei soiefi kdfjvd oirfnw <br /> opepjqn oqenc oaka zolqwijdna dposkdc .
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src="images/family3.jpg" alt=""  />
                  <div className='name'>
                    <h3>johnson family</h3>
                    <span>paid plan</span>
                  </div>
                  <div>
                    <p>we have been having  <br />a wonderful time using curious <br /> minds with our 3yr old son <br />
                    jsdcknsduncsd ckjdcns dck <br />sdc sdkc fi rfieknd sdkcmlsdk <br />
                    skei soiefi kdfjvd oirfnw <br /> opepjqn oqenc oaka zolqwijdna dposkdc .
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src="images/family4.jpg" alt=""  />
                  <div className='name'>
                    <h3>johnson family</h3>
                    <span>paid plan</span>
                  </div>
                  <div>
                    <p>we have been having  <br />a wonderful time using curious <br /> minds with our 3yr old son <br />
                    jsdcknsduncsd ckjdcns dck <br />sdc sdkc fi rfieknd sdkcmlsdk <br />
                    skei soiefi kdfjvd oirfnw <br /> opepjqn oqenc oaka zolqwijdna dposkdc .
                    </p>
                  </div>
                </div>
              </div>
            </li>


            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src="images/family5.jpg" alt=""  />
                  <div className='name'>
                    <h3>johnson family</h3>
                    <span>paid plan</span>
                  </div>
                  <div>
                    <p>we have been having  <br />a wonderful time using curious <br /> minds with our 3yr old son <br />
                    jsdcknsduncsd ckjdcns dck <br />sdc sdkc fi rfieknd sdkcmlsdk <br />
                    skei soiefi kdfjvd oirfnw <br /> opepjqn oqenc oaka zolqwijdna dposkdc .
                    </p>
                  </div>
                </div>
              </div>
            </li>


            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src="images/kids1.jpg" alt=""  />
                  <div className='name'>
                    <h3>johnson family</h3>
                    <span>paid plan</span>
                  </div>
                  <div>
                    <p>we have been having  <br />a wonderful time using curious <br /> minds with our 3yr old son <br />
                    jsdcknsduncsd ckjdcns dck <br />sdc sdkc fi rfieknd sdkcmlsdk <br />
                    skei soiefi kdfjvd oirfnw <br /> opepjqn oqenc oaka zolqwijdna dposkdc .
                    </p>
                  </div>
                </div>
              </div>
            </li>


            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src="images/kids2.jpg" alt=""  />
                  <div className='name'>
                    <h3>johnson family</h3>
                    <span>paid plan</span>
                  </div>
                  <div>
                    <p>we have been having  <br />a wonderful time using curious <br /> minds with our 3yr old son <br />
                    jsdcknsduncsd ckjdcns dck <br />sdc sdkc fi rfieknd sdkcmlsdk <br />
                    skei soiefi kdfjvd oirfnw <br /> opepjqn oqenc oaka zolqwijdna dposkdc .
                    </p>
                  </div>
                </div>
              </div>
            </li>


          </ul>
        </div>
    </div>
  )
}

export default Testimonials