import React from 'react'
import './Navbar.css'
import transport_logo from '../../../assets/images/transport-logo.png'
import search_icon from '../../../assets/images/search-icons.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={transport_logo} alt="" />
      </div>
      <div className="nav-right">
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='services'
          >SERVICES</Link></li>
          <li><Link to='about'>ABOUT</Link></li>
          <li><Link to='testimonials'>TESTIMONIALS</Link></li>
          <li><Link to='contact'>CONTACT US</Link></li>
          <li><Link to='home'>LOGIN</Link></li>
          <li><img src={search_icon} alt="" /></li></ul>
      </div>
    </div>
  )
}

export default Navbar