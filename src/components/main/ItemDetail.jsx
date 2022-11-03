import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
  const add = () => {
    console.log("En ruta al carrito")
  }
  return (
    <div className='container my-5'>
      <div key={item.id} className='card card_detail'>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img src={item.img} className='img-fluid rounded-start' alt={item.title} />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='fs-2'>{item.title}</h5>
              <article>
                <p>&emsp;&emsp;{item.description}</p>
                <h3 className='fs-1 text-end'>${item.price}.-</h3>
              </article>
              <ItemCount stock={item.stock} initial={0} onAdd={add} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail