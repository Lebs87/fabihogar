import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='card h-100 card_item'>
    <img className='card-img-top'
      src={producto.img}
      alt={producto.description}
    />
    <article>
      <h5 className='card-title fs-3'>${producto.price}.-</h5>
      <p className='card-text'>{producto.title}</p>
      <Link to = {`/detail/${producto.id}`} className='btn m-2'>Ver</Link>
    </article>
  </div>
  )
}

export default Item
