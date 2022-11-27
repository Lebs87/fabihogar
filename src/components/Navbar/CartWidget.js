import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { totalUnits } = useContext(CartContext);
  return (
    <>
      <span className="material-symbols-outlined">shopping_bag</span>
      <span><b>{totalUnits() !== 0 && totalUnits()}</b></span>
    </>
  )
}

export default CartWidget