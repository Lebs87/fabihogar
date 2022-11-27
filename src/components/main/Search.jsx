import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dataBase } from '../../services/firebaseConfig';

const Search = ({ greeting }) => {

  const [buscador, setBuscador] = useState('');
  const handleBuscador = (e) => setBuscador(e.target.value);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const buscarCompra = () => {
    const collectionCompra = collection(dataBase, 'pedidos');

    getDocs(collectionCompra)  
      .then((res) => {
        if (res.docs.some((prod) => prod.id === buscador)) {
          const filtro = res.docs.filter((prod) => prod.id === buscador);
          const products = filtro.map((prod) => {
            return (
              [...prod.data().items]
            );
          })
          setItems(products);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      })
  };

  if (!loading) {
    return (
      <>
        <p className="p-3 mb-2 bg-secondary text-white">{greeting = "Si tenes algún problema con tu pedido, no dudes en contactarnos"}</p>
        <div className='text-center' >
          <p>Tu orden es: <b>{buscador}</b></p>
          <p><b>Estado</b>: En tienda.</p>
        </div>
        {items[0].map((prod) => (
          <div key={prod.id + prod.quantity}>
            <div className='d-flex justify-content-center align-items-center p-3'>
              <img src={prod.img} alt={prod.title} width='150px' />
              <div className='px-1' >
                <h2 className='px-3'>{prod.title}</h2>
                <h3 className='px-3'>Cantidad: {prod.quantity}</h3>
                <h3 className='px-3'>$ {prod.price * prod.quantity}</h3>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }else {
  return (
    <>
      <p className="p-3 mb-2 bg-secondary text-white">{greeting}</p>
      <div className="container d-flex flex-column div_empty" >
        <input className="form-control me-2" type="text" placeholder="Ingresa el N°" onChange={handleBuscador} name='btnBuscarcompra' value={buscador} />
        <button id="btnBuscarCompra" disabled={buscador.length !== 20} className="btn btn-outline-success m-2" onClick={() => buscarCompra()}>Buscar</button>
      </div>
    </>
  )
}}

export default Search
