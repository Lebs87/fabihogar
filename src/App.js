import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <Navbar/>  
    <ItemListContainer greeting="Saludos! Esta es la Primera Entrega del Proyecto Final"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </>
  );
}

export default App;
