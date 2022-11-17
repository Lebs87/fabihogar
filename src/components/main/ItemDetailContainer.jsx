import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";
import { collection, doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../../services/firebaseConfig';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true)
  const { idProd } = useParams();

  useEffect(() => {
    const collectionProd = collection(dataBase, 'productos');
    const ref = doc(collectionProd, idProd);
    getDoc(ref)
      .then((res) => {
        setItem({
          id: res.id,
          ...res.data(),
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idProd]);

  if (loading) {
    return (
      <div className='position-relative div_loading'>
        <div className='position-absolute top-50 start-50 translate-middle'>
          <SyncLoader color="blueviolet" />
        </div>
      </div>
    )
  }

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  )
};

export default ItemDetailContainer
