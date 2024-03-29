import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/Side_img_2.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button  aria-label="Check Now - Explore the latest updates">Check Now</button>
        </div>
        <div className="offers_right">
        <img src={exclusive_img} alt="exclusive_img"data-aos="fade-zoom-in" />
        </div>
    </div>
  )
}

export default Offers;