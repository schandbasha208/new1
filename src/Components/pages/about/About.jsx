import React from 'react'
import './About.css'
import about_image from '../../../assets/images/about-img.jpg'
import white_arrow from '../../../assets/images/white-arrow.png'
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
      <h1>About <span>Us</span></h1>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
      <button>Read More <img src={white_arrow} alt="" /></button>
      </div>
      <div className="about-right">
        <img src={about_image} alt="" />
      </div>
    </div>
  )
}

export default About