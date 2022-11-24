import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([])

    //AÑADIR AL CARRITO
    const addToCart = (detail, quantity) => {
        if (isInCart(detail.id)) {
            sumarCantidad(detail, quantity);
        } else {
            setCart([...cart, { ...detail, quantity }])
        }
    }
    //CHEQUEO COMPRA REPETIDA
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    //VACIAR CARRITO
    const clear = () => {
        setCart([]);
    };

    //SUMAR CANTIDAD DE UN MISMO PRODUCTO
    const sumarCantidad = (itemPorAgregar, quantity) => {
        const cartActualizado = cart.map((prodDelCarrito) => {
            if (prodDelCarrito.id === itemPorAgregar.id) {
                const productoActualizado = {
                    ...prodDelCarrito,
                    quantity,
                };
                return productoActualizado;
            } else {
                return prodDelCarrito;
            }
        });
        setCart(cartActualizado);
    };

    //CANTIDAD DEL PRODUCTO, EL ? ES PARA QUE SI NO LO ENCUENTRA NO ME REGRESE ERROR
    const cantidadDeProducto = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.quantity;
    };

    //ELIMINAR UN SOLO PRODUCTO
    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id)
        setCart(prodFiltrados);
    };

    //SUMAR UNIDADES PARA EL INDICARDOR DEL CARRITO
    const totalUnits = () => {
        let count = 0;
        const copy = [...cart];
        copy.forEach((prod) => {
            count = count += prod.quantity;
        });
        return count;
    };
    
    //SUMA TOTAL DEL CARRITO
    const totalAmount = () => {
        let count = 0;
        const copy = [...cart];
        copy.forEach((prod) => {
            count = count += prod.price * prod.quantity;
        });
        return count;
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clear, deleteOne, sumarCantidad, cantidadDeProducto, totalUnits, totalAmount }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
