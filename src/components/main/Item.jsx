import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div key={producto.id}>
    <img
      src={producto.img}
      width="200px"
      alt={producto.title}
    />
    <article>
      <h2>{producto.title}</h2>
      <h3>${producto.price}.-</h3>
      <Link to = {`/detail/${producto.id}`} className='btn'>Ver</Link>
    </article>
  </div>
  )
}

export default Item
