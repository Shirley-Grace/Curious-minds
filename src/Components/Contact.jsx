import React from 'react'
import './Contact.css'

export const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e3291dfd-1006-44ec-8b98-995118ea1383");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message</h3>
            <p>
                huytg ytg j k j cvxdsert cdfrtg mkjuyh xcdfrt mjkuiy
                nmjkuyht cdf c fgyuhj jhf tyu jhcv 
            </p>
            <ul>
                <li> <img src="images/email.png" className="icon"alt="" />info@curiousminds.org</li>
                <li> <img src="images/phone.png" className="icon"alt="" /> +254(0)-778-679-100</li>
                <li> <img src="images/location.png" className="icon"alt="" />233 Owashika Road,Lavingon <br />
                Nairobi,Kenya </li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit} >
            <label>Name</label>
            <input type="text"  placeholder='Name' required/>
            <label>Phone Number</label>
            <input type="tel" name="name" required placeholder='Phone Number' id="" />
            <label >Write To Us</label>
            <textarea name="message" required id="" cols="30" rows="7" placeholder='Message'></textarea>
            <button type='submit' className='btn'>Submit</button>
          </form>
          <span>{result}</span>
        </div>
        
        
        
        
    </div>

  )
}
