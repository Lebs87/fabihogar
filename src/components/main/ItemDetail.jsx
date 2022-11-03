import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
  const add =()=>{
    console.log("En ruta al carrito")
  }
  return (
    <div key={item.id}>
      <img
        src={item.img}
        width="200px"
        alt={item.title}
      />
      <p>{item.description}</p>
      <article>
        <h2>{item.title}</h2>
        <h3>${item.price}.-</h3>
      </article>
      <ItemCount stock={item.stock} initial={0} onAdd={add} />
    </div>
  )
}

export default ItemDetail