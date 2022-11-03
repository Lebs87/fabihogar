import React from 'react'
import Item from './Item';

const ItemList = ({items}) => {
  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-0 p-2'>
          {items.map((producto) => {
              return (
              <div  key={producto.id} className="col text-center d-flex justify-content-center p-2">
                <Item producto={producto}/>
              </div>
              );               
          })}
    </div>
  )
}

export default ItemList



   
/*             {items.map((producto) => {
                return <Item producto={producto} key={producto.id} />;
            })}
        </div>
    );
};

export default ItemList; */