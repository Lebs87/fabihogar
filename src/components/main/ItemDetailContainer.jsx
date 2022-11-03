import React, { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { products } from '../../mock/products';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { idProd } = useParams();

  useEffect(() => {
    const getProducts = () => {
      return new Promise((res, rej) => {
        const productoUnico = products.find((prod)=>prod.id === +idProd)
          setTimeout(() => {
              res(productoUnico);
          }, 2000);
      });
  };
  getProducts(idProd)
          .then((res) => {
              setItem(res);
          })
          .catch((error) => {
              console.log(error);
          });
  }, [idProd]);
  return (
    <div>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer