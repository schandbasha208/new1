import React from 'react'
import './Testimonials.css'
import next_btn from '../../../assets/images/next.png'
import prev_btn from '../../../assets/images/prev.png'
import client_1 from '../../../assets/images/client-1.png'
import client_2 from '../../../assets/images/client-2.png'
import client_3 from '../../../assets/images/client-3.png'
import client_4 from '../../../assets/images/client-4.png'
const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>What Says Our <span>Clients</span></h1>
      <div>
        <img src={prev_btn} alt="" className='prev-btn' />
        <img src={next_btn} alt="" className='next-btn' />
        <div className="testimonials-container">
          <ul>
            <li className="container-list">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci.</p>
              <div className="client-info">
                <img src={client_1} alt="" />
                <div>
                  <h2>Willi Jackson</h2>
                  <h4>USA</h4>
                </div>
              </div>
            </li>
            <li className="container-list">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci.</p>
              <div className="client-info">
                <img src={client_2} alt="" />
                <div>
                  <h2>Hydu Sarge</h2>
                  <h4>USA</h4>
                </div>
              </div>
            </li>
            <li className="container-list">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci.</p>
              <div className="client-info">
                <img src={client_3} alt="" />
                <div>
                  <h2>Akati Nobl</h2>
                  <h4>USA</h4>
                </div>
              </div>
            </li>
            <li className="container-list">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci.</p>
              <div className="client-info">
                <img src={client_4} alt="" />
                <div>
                  <h2>Nordi Layen</h2>
                  <h4>USA</h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Testimonials