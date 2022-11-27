import React, { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { dataBase } from '../../services/firebaseConfig';

const Contacto = ({greeting}) => {
  const [ data, setData ] = useState({ tipo: '', nombre: '', apellido: '', correo: 'text@example.com', correoChek: 'text@example.com',telefono: '+54 9 11 5555-5555', telefonoAlt: '+54 9 11 444-4444', comentario: 'Me gustaria...', });
  const [loading, setLoading] = useState(false);

  const enviarDatos = (e) => {
    e.preventDefault()
    setLoading(true)
    const obj = {
        datosDeContacto: {
          tipo: data.tipo,
          nombre: data.nombre,
          apellido: data.apellido,
          correo: data.correo,
          correoChek: data.correoChek,
          telefono: data.telefono,
          telefonoAlt: data.telefonoAlt,
          comentario: data.comentario,
        },
        fecha: serverTimestamp(),
    };
    const objCollection = collection(dataBase, 'contactos')

    addDoc(objCollection, obj)
      .then(() => {
        setData({ tipo: '0', nombre: '', apellido: '', correo: '', correoChek: '',telefono: '', telefonoAlt: '', comentario: '' });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false)
      });

  };

  const handleChange =(e)=> {
    const { name, value } = e.target;
    setData({ ...data, [name]: value});
  }
  
  return (
    <>
    <p className="p-3 mb-2 bg-secondary text-white">{greeting}</p>
    <div className='container'>
      <form action="" onSubmit={enviarDatos}>
        <section className='py-3'>
          <div className='form-floating'>
            <select className='form-select' id="floatingSelect" aria-label="Floating label select example" name="tipo" onChange={handleChange}>
              <option value="0">Seleccione</option>
              <option value="1">Contacto General</option>
              <option value="2">Regalos Empresariales</option>
              <option value="3">Trabaja con Nosotros</option>
              <option value="4">Compras Online Mayoristas</option>
              <option value="5">Compras Online Minoristas</option>
            </select>
            <label htmlFor="floatingSelect">Tipo de contacto</label>
          </div>
        </section>
        <section className='row'>
          <article className='col-xs-12 col-sm-6 py-3'>
            <input type="text" className='form-control' placeholder="Nombres" aria-label="First name" name="nombre" onChange={handleChange} value={data.nombre} />
          </article>
          <article className='col-xs-12 col-sm-6 py-3'>
            <input type="text" className='form-control' placeholder="Apellidos" aria-label="Last name" name="apellido" onChange={handleChange} value={data.apellido} />
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
        <section className='row'>
          <article className='col-xs-12 col-sm-6 py-3'>
            <div className='form-floating'>
              <input type="text" className='form-control' id="floatingPhoneOne" placeholder="+54 9 11 5555-5555" aria-label="Phone" name="telefono" onChange={handleChange} value={data.telefono} />
              <label className='mx-1' htmlFor="floatingPhoneOne">Número Telefónico</label>
            </div>
          </article>
          <article className='col-xs-12 col-sm-6 py-3'>
            <div className='form-floating'>
              <input type="text" className='form-control' id="floatingPhoneTwo" placeholder="+54 9 11 5555-5555" aria-label="Phone" name="telefonoAlt" onChange={handleChange} value={data.telefonoAlt} />
              <label className='mx-1' htmlFor="floatingPhoneTwo">Teléfono Alternativo</label>
            </div>
          </article>
        </section>
        <section className='py-3'>
          <div className='form-floating'>
            <textarea className='form-control' placeholder="Deja tu comentario" id="floatingTextarea2" style={{height: '100px',}} name="comentario" onChange={handleChange} value={data.comentario} ></textarea>
            <label htmlFor="floatingTextarea2">Comentarios</label>
          </div>
        </section>
        <section className='text-center p-2'>
          <button className='btn' disabled={(data.correo !== data.correoChek)}>{loading ? "Enviando..." : "Suscribirme"}</button>
        </section>
      </form>
    </div>
  </>
  )
}

export default Contacto
