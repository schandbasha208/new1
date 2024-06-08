import React from 'react'
import './Services.css'
import s_1 from '../../../assets/images/s1.png'
import s_2 from '../../../assets/images/s2.png'
import s_3 from '../../../assets/images/s3.png'
import s_4 from '../../../assets/images/s4.png'
const Services = () => {
  return (
    <div className="services">
      <h1>Our <span>Services</span></h1>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
      <div className="transport-services">
        <div className="services-container">
          <img src={s_1} alt="" />
          <div>
          <h1>AIR TRANSPORT</h1>
          <p>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
          <h3><a href="">Read More</a></h3>
          </div>
        </div>
        <div className="services-container">
          <img src={s_2} alt="" />
          <div>
          <h1>CARGO TRANSPORT</h1>
          <p>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
          <h3><a href="">Read More</a></h3>
        </div>
        </div>
        <div className="services-container">
          <img src={s_3} alt="" />
          <div>
          <h1>TRUCKS TRANSPORT</h1>
          <p>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
          <h3><a href="">Read More</a></h3>
          </div>
        </div>
        <div className="services-container">
          <img src={s_4} alt="" />
          <div>
          <h1>TRAIN TRANSPORT</h1>
          <p>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
          <h3><a href="">Read More</a></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services