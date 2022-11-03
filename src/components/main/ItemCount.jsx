import {useState} from 'react'

const ItemCount = ({ stock, initial, onAdd }, ) => {

    const [cantidad, setCantidad] = useState(initial);
    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };
    const restar = () => {
        if (cantidad > initial) {
            setCantidad(cantidad - 1);
        }
    };
    const reset = () => {
            setCantidad(0);
        };

  return (
    <div className='d-flex flex-column align-items-center m-2 justify-content-center'>
        <section className='d-flex m-2'>
            <button className='btn btn-secondary' disabled={cantidad === initial} onClick={restar}>-</button>
            <p className='d-flex m-2'>{cantidad}</p>
            <button className='btn btn-secondary' disabled={cantidad === stock} onClick={sumar}>+</button> 
        </section>
        <section>
            <button className='btn btn-secondary m-2' onClick={reset} disabled={cantidad === 0}>Reset</button>
            <button className='btn btn-secondary m-2'onClick={onAdd} disabled={cantidad === 0}>Agregar al carrito</button>
        </section>
    </div>
  )
}

export default ItemCount