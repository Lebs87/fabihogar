import React, {useEffect, useState} from 'react';
import { products }  from '../../mock/products.js';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams()
    useEffect(() => {
        const getProducts = () => {
            return new Promise((res, rej) => {
              const productosFiltrados = products.filter((prod)=>prod.category === categoryName)
              const referencia = categoryName ? productosFiltrados : products
                setTimeout(() => {
                    res(referencia);
                }, 2000);
            });
        };
        getProducts()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);
  return (
    <div className='item-list-container'>
      <p className="p-3 mb-2 bg-secondary text-white">{greeting}</p>
      <ItemList items={items} />
    </div>
  )
}
export default ItemListContainer
