import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import Confirmar from './Confirmar';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
  const [show, setShow] = useState(true);

  const { addToCart, cantidadDeProducto } = useContext(CartContext)

  const add = (arg) => {
    setShow(false);
    addToCart(item, arg);
  };
  const volver =()=>{
    setShow(true);
  };
  
  const cantidad = cantidadDeProducto(item.id)

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
              {show?(<ItemCount stock={item.stock} initial={cantidad||0} onAdd={add} setShow/>):
              (<Confirmar regresar={volver}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
