import React from 'react'
import './Contact.css'
import about_image from '../../../assets/images/about-img.jpg'
const Contact = () => {
  return (
    <div className="contact">
      <h1>CONTACT US</h1>
      <div className="contact-table">
      <div className='contact-left'>
      <form>
        <input type="text" placeholder='Your Name'/>
        <input type="tel" placeholder='Phone Number'/>
        <input type="email" placeholder='Email'/>
        <textarea rows="6" placeholder='Message' className='text-area'></textarea>
        <button>SEND</button>
      </form>
      </div>
      <div className='contact-right'>
      <img src={about_image} alt="" />
      </div>
      </div>
     
    </div>
  )
}

export default Contact