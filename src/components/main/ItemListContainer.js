import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
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

  if (loading) { return <Loading />}
  
  return (
    <div className='item-list-container'>
      <p className="p-3 mb-2 bg-secondary text-white">{greeting}</p>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
