import React from 'react'
import './Track.css'
const Track = () => {
  return (
    <div className="track">
      <h1>Track Your Shipment</h1>
      <p>Iste reprehenderit maiores facilis saepe cumque molestias. Labore iusto excepturi, laborum aliquid pariatur veritatis autem, mollitia sint nesciunt hic error porro. Deserunt officia unde repellat beatae ipsum sed. Aperiam tempora consectetur voluptas magnam maxime asperiores quas similique repudiandae, veritatis reiciendis harum fuga atque.</p>
      <div className="input-field">
        <input type="text" placeholder='Enter Your Tracking Number'/>
        <button>Track</button>
      </div>
    </div>
  )
}

export default Track