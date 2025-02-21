import React from 'react';
import './Home.css';
import dark_arrow from '../../../assets/images/dark-arrow.png';
import Services from '../services/Services';
import About from '../about/About';
import Contact from '../contact/Contact';
import Testimonials from '../testimonials/Testimonials';
import Hero from '../hero/Hero';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
