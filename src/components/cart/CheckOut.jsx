import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { dataBase } from '../../services/firebaseConfig';
import { Link } from 'react-router-dom';
import Loading from '../main/Loading';

const CheckOut = ({ greeting }) => {
  const [data, setData] = useState({ fullName: '', telefono: '+54 9 11 5555-5555', correo: 'text@example.com', correoChek: 'text@example.com', direccion: 'Calle...', });
  const { cart, totalAmount, clear } = useContext(CartContext);
  const [compraId, setCompraId] = useState('');
  const [loading, setLoading] = useState(false);

  const enviarDatos = (e) => {
    e.preventDefault()
    setLoading(true)
    const compra = {
      comprador: {
        fullName: data.fullName,
        telefono: data.telefono,
        correo: data.correo,
        correoChek: data.correoChek,
        direccion: data.direccion,
      },
      items: cart,
      total: totalAmount(),
      fecha: serverTimestamp(),
    };
    const orderCollection = collection(dataBase, 'pedidos')

    addDoc(orderCollection, compra)
      .then((res) => {
        setCompraId(res.id);
        clear();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false)
      });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  if (compraId){
    return (
      <>
        <p className="p-3 mb-2 bg-secondary text-white">{greeting = "Copia tu numero de seguimiento y podrás ver el estado de tu envío"}</p>
        <div className='div_empty'>
          <h4>¡Gracias por tu compra, pronto nos estaremos comunicando!</h4>
          <p className='fs-3'>Tu número de seguimiento es: <u><b>{compraId}</b></u></p>
          <Link to="/search" className='nav-link mx-1'><span className='material-symbols-outlined'>travel_explore</span></Link>
        </div>
      </>
    );
  }

  if (loading) { return <Loading />}

  return (
    <>
      <p className="p-3 mb-2 bg-secondary text-white">{greeting}</p>
      <div className='container'>
        <h5 className='p-3 text-center'>Detalle de compra:</h5>
        <div className='d-flex justify-content-center align-items-center'>
          <table>
            <thead>
              <tr>
                <th scope="col" className='text-center py-2 px-4'>N°</th>
                <th scope="col" className='text-center py-2 px-4'>Nombre del Producto</th>
                <th scope="col" className='text-center py-2 px-4'>Cantidad</th>
                <th scope="col" className='text-center py-2 px-4'>Total</th>
              </tr>
            </thead>
            <tbody>{
              cart.map((prod) => (
                <tr key={prod.id}>
                  <th scope="row" className='text-center py-2 px-4'>{cart.indexOf(prod) + 1}</th>
                  <td className='text-center py-2 px-4'>{prod.title}</td>
                  <td className='text-center py-2 px-4'>{prod.quantity}</td>
                  <td className='text-center py-2 px-4'>${prod.price * prod.quantity}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
        <p className='text-end p-3'><b>Total Final: ${totalAmount()}</b></p>
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
              <textarea className='form-control' placeholder="Calle..." id="floatingTextarea2" style={{ height: '100px', }} name="direccion" onChange={handleChange} value={data.direccion} ></textarea>
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
