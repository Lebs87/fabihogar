import { Link, NavLink } from 'react-router-dom';
import images from '../../assets/images';
import CartWidget from '../CartWidget.js';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid ">
                <Link to="/" className="navbar-brand">
                    <img src={images[1].img} alt="Logo de FabiHogar" width="120" height="40" />
                </Link>
                
                <div className='d-flex justify-content-end'>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="¿Qué estas buscando?" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 start">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categoría
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/category/cocina" className="dropdown-item">Cocina</NavLink></li>
                                    <li><NavLink to="/category/toilet" className="dropdown-item">Baño</NavLink></li>
                                    <li><NavLink to="/category/decoracion" className="dropdown-item">Decoración</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink to="contacto" className="nav-link">Contacto</NavLink>
                            </li>
                            <Link to="/cart" className='nav-link'><CartWidget /></Link>             
                        </ul>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
