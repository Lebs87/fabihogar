import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import images from '../../../assets/images.js';
import CartWidget from './CartWidget.js';

const LayoutNav = ({categories}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid ">
                <Link to="/" className="navbar-brand">
                    <img src={images[1].img} alt="Logo de FabiHogar" width="120" height="40" />
                </Link>
                <div className='d-flex justify-content-end'>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 start">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categoría
                                </div>
                                <ul className="dropdown-menu">
                                    {categories.map((cat) => (
                                        <NavLink key={cat.id} className="dropdown-item" to={`/category/${cat.elementCategory}`}>{cat.navCategory}</NavLink>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink to="contacto" className="nav-link">Contacto</NavLink>
                            </li>
                            <li className='d-flex'>
                                <Link to="/search" className='nav-link mx-1'><span className='material-symbols-outlined'>travel_explore</span></Link>
                                <Link to="/cart" className='nav-link mx-1'><CartWidget /></Link>
                            </li>
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

export default LayoutNav
