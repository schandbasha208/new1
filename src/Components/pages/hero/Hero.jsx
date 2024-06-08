import React from 'react';
import './Hero.css';
import dark_arrow from '../../../assets/images/dark-arrow.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We Provide Best <br />Transport Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas.</p>
        <button>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
}

export default Hero;
