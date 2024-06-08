import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="address">
          <h2>Address</h2>
          <a href=""><FontAwesomeIcon icon={faLocationDot} /><span>Location</span></a>
          <a href=""><FontAwesomeIcon icon={faPhone} /><span>Call +01234562986</span></a>
          <a href=""><FontAwesomeIcon icon={faEnvelope} /><span>demo@gmail.com</span></a>
          <div className="social-icons">
           <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
           <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
           <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
           <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <div className="info">
          <h2>Info</h2>
          <p>necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
        </div>
        <div className="links">
          <h2>Links</h2>
          <a href="">HOME</a>
          <a href="">SERVICES</a>
          <a href="">ABOUT</a>
          <a href="">TESTIMONIALS</a>
          <a href="">CONTACT US</a>
        </div>
        <div className="subscribe">
          <h2>Subscribe</h2>
          <input type="email" placeholder='Enter email'/>
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 All Rights Reserved.Terms&Policy conditions apply.</p>
      </div>
    </div>
  )
}

export default Footer