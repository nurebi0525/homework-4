import React from 'react'


const Card = ({title, image, price}) => {
  return (
  <div className='card'>
    <div>
    <img className='img' src={image} alt="#" />
    <p className='title'>{title}</p>
    </div>
    <div className='price'>
    <p className='text'>Цена:</p>
      <span>{price}</span>
    </div>
  </div>
  )
}

export default Card