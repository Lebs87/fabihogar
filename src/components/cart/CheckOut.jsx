import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';

const CheckOut = ({greeting}) => {
  const [ data, setData ] = useState({ fullName: '', telefono: '+54 9 11 5555-5555', correo: 'text@example.com', correoChek: 'text@example.com', direccion: 'Calle...', });
  const { cart, totalAmount } = useContext(CartContext);
  const enviarDatos = (e) => {
    e.preventDefault()
    const obj = {
        comprador:{
          fullName: data.fullName,
          telefono: data.telefono,
          correo: data.correo,
          correoChek: data.correoChek,
          direccion: data.comentario,
        }
    }
    console.table(obj) //Objeto a ser enviado al backend
  }

  const handleChange =(e)=> {
    const { name, value } = e.target;
    setData({ ...data, [name]: value});
  }
  
  return (
    <>
    <p className="p-3 mb-2 bg-secondary text-white">{greeting}</p>
    <h5 className='p-3  text-center'>Detalle de compra:</h5>
    <div className='container'>{
      cart.map((prod) => (
          <section className="p-2">
              <p>{prod.name}</p><p>{totalAmount}</p>
          </section>
      ))
      }
      <h5 className='p-3  text-center'>Datos de envío:</h5>
      <form action="" onSubmit={enviarDatos}>
        <section className='row'>
          <article className='col-xs-12 col-sm-6 py-3'>
            <input type="text" className='form-control' placeholder="Nombre y Apellido" aria-label="Full name" name="fullName" onChange={handleChange} value={data.fullName} />
          </article>
          <article className='col-xs-12 col-sm-6 py-3'>
            <input type="text" className='form-control' placeholder="Teléfono" aria-label="Teléfono" name="telefono" onChange={handleChange} value={data.telefono} />
          </article>
        </section>
        <section className='row'>
          <article className='col-xs-12 col-sm-6 py-3'>
            <div className='form-floating'>
              <input type="email" className='form-control' id="floatingInputValueOne" placeholder="name@example.com" name="correo" onChange={handleChange} value={data.correo} />
              <label className='mx-1' htmlFor="floatingInputValueOne">E-mail</label>
            </div>
          </article>
          <article className='col-xs-12 col-sm-6 py-3'>
            <div className='form-floating'>
              <input type="email" className='form-control' id="floatingInputValueTwo" placeholder="name@example.com" name="correoChek" onChange={handleChange} value={data.correoChek} />
              <label className='mx-1' htmlFor="floatingInputValueTwo">Repita E-mail</label>
            </div>
          </article>
        </section>
        <section className='py-3'>
          <div className='form-floating'>
            <textarea className='form-control' placeholder="Calle..." id="floatingTextarea2" style={{height: '100px',}} name="direccion" onChange={handleChange} value={data.direccion} ></textarea>
            <label htmlFor="floatingTextarea2">Dirección: Calle / N° calle / Casa - Apto. / Barrio / Provincia</label>
          </div>
        </section>
        <section className='text-center pb-4'>
          <button className='btn' disabled={(data.correo !== data.correoChek)}>Comprar</button>
        </section>
      </form>
    </div>
  </>
  )
}

export default CheckOut
