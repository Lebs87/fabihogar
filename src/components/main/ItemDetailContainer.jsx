import React, { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { products } from '../../mock/products';
import SyncLoader from "react-spinners/SyncLoader";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true)
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
          })
          .finally(() => {
            setLoading(false);
          });

          return () => setLoading(true);
  }, [idProd]);

  if (loading){
    return (
      <div className='position-relative div_loading'>
        <div className='position-absolute top-50 start-50 translate-middle'>
          <SyncLoader  color="blueviolet" />
        </div>
      </div>
    )
  }
  
  return (
    <div>
        <ItemDetail item={item}/>
    </div>
  )
};

export default ItemDetailContainer
