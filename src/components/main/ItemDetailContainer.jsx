import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
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

  if (loading) { return <Loading />}

  return (
    <>
      <ItemDetail item={item} />
    </>
  )
};

export default ItemDetailContainer
