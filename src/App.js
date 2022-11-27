import './App.css';
import Navbar from './components/header/Navbar/Navbar.jsx';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Nosotros from './components/main/Nosotros';
import Contacto from './components/main/Contacto';
import CartProvider from './context/CartContext';
import CheckOut from './components/cart/CheckOut';
import Search from './components/main/Search';
import Footer from './components/footer/Footer';

//Útil para una carga masiva de productos
/* import { addDoc, collection } from 'firebase/firestore';
import { dataBase } from './services/firebaseConfig';
import { products } from './mock/products';

const prodCollection = collection(dataBase, 'productos');

products.forEach((prod) => addDoc(prodCollection, prod)); */

function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <Navbar />  
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a FabiHogar!!!" />}/>
          <Route path='/nosotros' element={<Nosotros greeting="Te esperamos en nuestra sucursal!!!"/>}/>
          <Route path='/category/:categoryName' element={<ItemListContainer greeting="Todas las categorías para el hogar!!!" />}/>
          <Route path='/contacto' element={<Contacto  greeting="Será un gusto responder tu consulta!!!"/>}/>
          <Route path='/detail/:idProd' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart greeting="Revisa los artículos y cantidades de artículos que desees en el pedido" />}/>
          <Route path='/checkOut' element={<CheckOut greeting="Recuerda completar todos los campos, evita problemas con tu envío!" />}/>
          <Route path='/search' element={<Search greeting="Ingresa el número de pedido o de solicitud de contacto que deseas consultar" />}/>
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
