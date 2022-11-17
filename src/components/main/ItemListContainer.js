import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dataBase } from '../../services/firebaseConfig';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams()

  useEffect(() => {
    const collectionProd = collection(dataBase, 'productos');
    const ref = categoryName ? query(collectionProd, where('category', '==', categoryName)) : collectionProd;

    getDocs(ref)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setItems(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => setLoading(true);
  }, [categoryName]);

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
    <div className='item-list-container'>
      <p className="p-3 mb-2 bg-secondary text-white">{greeting}</p>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
