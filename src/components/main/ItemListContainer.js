import React, {useEffect, useState} from 'react';
import { products }  from '../../mock/products.js';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";

const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading]  = useState(true);
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
            })
            .finally(()=>{
              setLoading(false)
            });
            return setLoading(true)
    }, [categoryName]);
  
    if(loading){
      return (
        <div className='position-relative div_loading'>
          <div className='position-absolute top-50 start-50 translate-middle'>
            <SyncLoader  color="blueviolet" />
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
