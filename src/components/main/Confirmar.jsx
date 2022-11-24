import { Link } from "react-router-dom"
import React from 'react'

const Confirmar = ({regresar}) => {
  return (
    <div className='d-flex flex-column align-items-center m-2 justify-content-center confirmar_empty'>
        <Link to="/cart" className='btn btn-secondary m-2'>Ir al carrito</Link>
        <button className='btn btn-secondary m-2' onClick={()=>{regresar()}}>Volver</button>
    </div>
  )
}

export default Confirmar