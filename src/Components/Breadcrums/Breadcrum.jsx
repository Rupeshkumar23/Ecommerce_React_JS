import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import CustomHelmet from '../Helmet/Helmet';
const Breadcrum = (props) => {
  const {product} = props;

  return (
    <div className='breadcrum'>
      <CustomHelmet title="TRENDY - Product Item"/>
      HOME<img src={arrow_icon} alt='arrow_icon'/>{product.category} <img src={arrow_icon} alt='arrow-icon'/>{product.name}
    </div>
  )
}

export default Breadcrum;